#!/usr/bin/env python3
"""
Advisor Tool Experiment.

Runs the same taxonomy-cleanup task three ways:
  1. Sonnet 4.6 solo
  2. Opus 4.6 solo
  3. Sonnet 4.6 executor + Opus 4.6 advisor (advisor-tool-2026-03-01 beta)

Saves per-run outputs as markdown, a combined JSON, and prints a cost table.
"""
import argparse
import json
import os
import sys
import time
from pathlib import Path

import anthropic

# ---- Pricing (USD per 1M tokens). Verify at https://www.anthropic.com/pricing ----
PRICING = {
    "claude-sonnet-4-6": {"input": 3.00, "output": 15.00},
    "claude-opus-4-6":   {"input": 15.00, "output": 75.00},
}

ROOT = Path(__file__).parent

# Defaults (overridable via CLI)
DEFAULT_TAXONOMY = ROOT / "taxonomy.json"
DEFAULT_RESULTS = ROOT / "results"
DEFAULT_MAX_TOKENS = 4096

# These are set by main() from CLI args.
TAXONOMY_PATH = DEFAULT_TAXONOMY
RESULTS_DIR = DEFAULT_RESULTS
MAX_TOKENS = DEFAULT_MAX_TOKENS

# ---- System prompts ----

# For runs WITH the advisor tool, we use Anthropic's suggested blocks (timing + how-to-treat + conciseness).
SYSTEM_PROMPT_WITH_ADVISOR = """You have access to an `advisor` tool backed by a stronger reviewer model. It takes NO parameters — when you call advisor(), your entire conversation history is automatically forwarded. They see the task, every tool call you've made, every result you've seen.

Call advisor BEFORE substantive work — before writing, before committing to an interpretation, before building on an assumption. If the task requires orientation first (reading the data, understanding what's there), do that, then call advisor. Orientation is not substantive work. Writing the final cleanup plan is.

Also call advisor:
- When you believe the task is complete, BEFORE emitting the final answer. This is your last chance to catch a bad operation.
- When stuck — can't decide between two approaches, results that don't fit.
- When considering a change of approach.

On tasks longer than a few steps, call advisor at least once before committing to an approach and once before declaring done.

Give the advice serious weight. If you have primary-source evidence that contradicts a specific claim, adapt. If you've already retrieved data pointing one way and the advisor points another: don't silently switch. Surface the conflict in one more advisor call.

The advisor should respond in under 100 words and use enumerated steps, not explanations.

You are a data governance expert specializing in taxonomy design and cleanup for applicant tracking systems."""

# For SOLO runs, same persona but without advisor-specific instructions.
SYSTEM_PROMPT_SOLO = """You are a data governance expert specializing in taxonomy design and cleanup for applicant tracking systems.

When given a messy taxonomy, orient yourself by reading all entries first, plan your cleanup strategy before committing to specific operations, and review your plan once more for consistency and completeness before emitting your final answer."""

USER_PROMPT = """You're cleaning up the company-industries taxonomy of our ATS (Nova). The table below has the typical hygiene problems: exact and near duplicates, inconsistent casing, mixed languages (English/Spanish), typos, misclassifications (wrong parent), orphans (parent missing or wrong), too-generic catch-alls, granularity mismatches, and some entries with trailing whitespace.

Produce a structured cleanup plan as a list of operations. For each operation use one of these verbs:
- MERGE(source_id, target_id) — merge source into target. Use for duplicates and near-duplicates.
- RENAME(id, "new_name") — fix typos, casing, whitespace, formatting.
- REPARENT(id, new_parent_id | null) — fix misclassifications and orphans.
- DELETE(id) — remove too-generic or redundant entries that cannot be merged.
- SPLIT(id, ["name_a", "name_b"]) — split an entry that covers too broad a concept.

For each operation, give a one-line justification (≤15 words).

After the operation list, provide:
1. A prioritized order to apply the changes (which phase runs first, and why).
2. A list of operations that require human review before execution, with a one-line reason each.

Taxonomy:
```json
{taxonomy}
```"""


def load_taxonomy():
    return json.loads(TAXONOMY_PATH.read_text())


def compute_cost(input_tokens: int, output_tokens: int, model: str) -> float:
    p = PRICING[model]
    return (input_tokens * p["input"] + output_tokens * p["output"]) / 1_000_000


def extract_text(response) -> str:
    parts = []
    for block in response.content:
        if getattr(block, "type", None) == "text":
            parts.append(block.text)
    return "\n\n".join(parts)


def usage_dict(response) -> dict:
    """Return usage as a plain dict, regardless of SDK type wrapping."""
    raw = response.model_dump() if hasattr(response, "model_dump") else dict(response)
    return raw.get("usage", {}) or {}


def run_solo(client, model: str, taxonomy: dict, label: str) -> dict:
    print(f"\n=== {label} ({model}) ===")
    start = time.time()
    response = client.messages.create(
        model=model,
        max_tokens=MAX_TOKENS,
        system=SYSTEM_PROMPT_SOLO,
        messages=[{
            "role": "user",
            "content": USER_PROMPT.format(taxonomy=json.dumps(taxonomy, indent=2)),
        }],
    )
    duration = time.time() - start
    text = extract_text(response)
    u = usage_dict(response)

    input_tokens = u.get("input_tokens", 0)
    output_tokens = u.get("output_tokens", 0)
    cost = compute_cost(input_tokens, output_tokens, model)

    print(f"  Duration: {duration:.1f}s")
    print(f"  Input  tokens: {input_tokens:,}")
    print(f"  Output tokens: {output_tokens:,}")
    print(f"  Cost: ${cost:.4f}")
    print(f"  Output length (chars): {len(text):,}")

    return {
        "label": label,
        "executor_model": model,
        "advisor_model": None,
        "duration_s": round(duration, 2),
        "executor_input_tokens": input_tokens,
        "executor_output_tokens": output_tokens,
        "advisor_calls": 0,
        "advisor_input_tokens": 0,
        "advisor_output_tokens": 0,
        "executor_cost_usd": round(cost, 4),
        "advisor_cost_usd": 0.0,
        "total_cost_usd": round(cost, 4),
        "output_text": text,
        "iterations": u.get("iterations") or [],
    }


def run_with_advisor(client, executor: str, advisor: str, taxonomy: dict, label: str) -> dict:
    print(f"\n=== {label} ({executor} + {advisor} advisor) ===")
    start = time.time()
    response = client.beta.messages.create(
        model=executor,
        max_tokens=MAX_TOKENS,
        betas=["advisor-tool-2026-03-01"],
        system=SYSTEM_PROMPT_WITH_ADVISOR,
        tools=[{
            "type": "advisor_20260301",
            "name": "advisor",
            "model": advisor,
        }],
        messages=[{
            "role": "user",
            "content": USER_PROMPT.format(taxonomy=json.dumps(taxonomy, indent=2)),
        }],
    )
    duration = time.time() - start
    text = extract_text(response)
    u = usage_dict(response)
    iterations = u.get("iterations") or []

    exec_in = exec_out = adv_in = adv_out = adv_calls = 0
    for it in iterations:
        t = it.get("type")
        if t == "message":
            exec_in += it.get("input_tokens", 0)
            exec_out += it.get("output_tokens", 0)
        elif t == "advisor_message":
            adv_in += it.get("input_tokens", 0)
            adv_out += it.get("output_tokens", 0)
            adv_calls += 1

    executor_cost = compute_cost(exec_in, exec_out, executor)
    advisor_cost = compute_cost(adv_in, adv_out, advisor)
    total_cost = executor_cost + advisor_cost

    print(f"  Duration: {duration:.1f}s")
    print(f"  Executor: {exec_in:,} in, {exec_out:,} out  →  ${executor_cost:.4f}")
    print(f"  Advisor:  {adv_in:,} in, {adv_out:,} out  →  ${advisor_cost:.4f}")
    print(f"  Advisor calls: {adv_calls}")
    print(f"  Total cost: ${total_cost:.4f}")
    print(f"  Output length (chars): {len(text):,}")

    return {
        "label": label,
        "executor_model": executor,
        "advisor_model": advisor,
        "duration_s": round(duration, 2),
        "executor_input_tokens": exec_in,
        "executor_output_tokens": exec_out,
        "advisor_calls": adv_calls,
        "advisor_input_tokens": adv_in,
        "advisor_output_tokens": adv_out,
        "executor_cost_usd": round(executor_cost, 4),
        "advisor_cost_usd": round(advisor_cost, 4),
        "total_cost_usd": round(total_cost, 4),
        "output_text": text,
        "iterations": iterations,
    }


def save_run_markdown(run: dict):
    label = run["label"]
    md = [f"# {label}", ""]
    md.append(f"- **Executor**: `{run['executor_model']}`")
    if run["advisor_model"]:
        md.append(f"- **Advisor**: `{run['advisor_model']}`")
        md.append(f"- **Advisor calls**: {run['advisor_calls']}")
    md.append(f"- **Duration**: {run['duration_s']}s")
    md.append(f"- **Executor tokens**: {run['executor_input_tokens']:,} in / {run['executor_output_tokens']:,} out → ${run['executor_cost_usd']:.4f}")
    if run["advisor_model"]:
        md.append(f"- **Advisor tokens**: {run['advisor_input_tokens']:,} in / {run['advisor_output_tokens']:,} out → ${run['advisor_cost_usd']:.4f}")
    md.append(f"- **Total cost**: **${run['total_cost_usd']:.4f}**")
    md.append("")
    md.append("## Output")
    md.append("")
    md.append(run["output_text"])
    (RESULTS_DIR / f"{label}.md").write_text("\n".join(md))


def print_comparison(runs: list):
    print("\n\n" + "=" * 90)
    print("COMPARISON")
    print("=" * 90)
    header = f"{'Run':<32} {'Exec in':>9} {'Exec out':>9} {'Adv in':>8} {'Adv out':>8} {'Calls':>6} {'Cost $':>9}"
    print(header)
    print("-" * len(header))
    for r in runs:
        print(
            f"{r['label']:<32} "
            f"{r['executor_input_tokens']:>9,} "
            f"{r['executor_output_tokens']:>9,} "
            f"{r['advisor_input_tokens']:>8,} "
            f"{r['advisor_output_tokens']:>8,} "
            f"{r['advisor_calls']:>6} "
            f"${r['total_cost_usd']:>8.4f}"
        )
    print()


def main():
    global TAXONOMY_PATH, RESULTS_DIR, MAX_TOKENS

    parser = argparse.ArgumentParser()
    parser.add_argument("--taxonomy", default=str(DEFAULT_TAXONOMY))
    parser.add_argument("--results", default=str(DEFAULT_RESULTS))
    parser.add_argument("--max-tokens", type=int, default=DEFAULT_MAX_TOKENS)
    args = parser.parse_args()

    TAXONOMY_PATH = Path(args.taxonomy)
    RESULTS_DIR = Path(args.results)
    MAX_TOKENS = args.max_tokens
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)

    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit("ERROR: export ANTHROPIC_API_KEY before running.")

    print(f"Taxonomy: {TAXONOMY_PATH}")
    print(f"Results:  {RESULTS_DIR}")
    print(f"max_tokens: {MAX_TOKENS}")

    client = anthropic.Anthropic()
    taxonomy = load_taxonomy()
    print(f"Loaded taxonomy with {len(taxonomy['entries'])} entries.")

    runs = [
        run_solo(client, "claude-sonnet-4-6", taxonomy, "01_sonnet_solo"),
        run_solo(client, "claude-opus-4-6",   taxonomy, "02_opus_solo"),
        run_with_advisor(client, "claude-sonnet-4-6", "claude-opus-4-6", taxonomy, "03_sonnet_with_opus_advisor"),
    ]

    for r in runs:
        save_run_markdown(r)

    combined = RESULTS_DIR / f"all_runs.json"
    combined.write_text(json.dumps(runs, indent=2, default=str))
    print(f"\nSaved per-run markdown + {combined}")

    print_comparison(runs)


if __name__ == "__main__":
    main()
