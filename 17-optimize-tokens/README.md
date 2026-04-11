# Optimize Tokens

Claude Code uses tokens every time you send a message, and each message reprocesses the entire previous conversation. Understanding how tokens work helps you spend less without sacrificing quality.

## How tokens are spent

Every time you send a message, Claude doesn't just read your latest message — it rereads the **entire** conversation from the beginning. This means:

| Turn | What Claude processes | Tokens spent (approx) |
|------|----------------------|----------------------|
| Message 1 | Your message | 500 |
| Message 2 | Message 1 + response 1 + your message 2 | 2,000 |
| Message 5 | Everything above + your message 5 | 8,000 |
| Message 10 | Everything above + your message 10 | 25,000+ |

The cost grows exponentially. A 10-turn chat doesn't cost 10x a single message — it costs much more.

## Technique 1: `/clear` between tasks

The simplest and most effective technique. Every time you switch topics, type `/clear`. This resets the conversation and Claude starts clean.

```
Task 1: "Summarize this PDF"
→ Claude responds
→ /clear

Task 2: "Analyze this CSV"
→ Claude responds
→ /clear
```

Without `/clear`, task 2 drags in all the context from task 1 — tokens wasted on information you no longer need.

> **Rule of thumb**: if you're more than 5-6 turns into a conversation and about to switch topics, do a `/clear`.

## Technique 2: Batch questions into one message

Many people believe that splitting questions into separate messages leads to better results. Almost always, the opposite is true.

Three separate messages = three full context loads. One message with three questions = one context load.

Instead of this:
```
Message 1: "Summarize this article"
Message 2: "Now list the main points"
Message 3: "Now suggest a headline"
```

Do this:
```
Summarize this article, list the main points,
and suggest a headline.
```

You save tokens twice: fewer context reloads, and you stay further from hitting your limit. Plus, the answers are often better because Claude sees the full picture from the start.

## Technique 3: Specific prompts

Paradoxically, a longer prompt upfront **saves** tokens. A vague prompt generates back-and-forth:

**Vague prompt (5 turns, ~15,000 tokens):**
```
Do a sales analysis for me
→ "Which data?"
Give me Q3 sales
→ "What format?"
A comparison table by region
→ "Include trends?"
Yes, with YoY trends
→ Final result
```

**Specific prompt (1 turn, ~3,000 tokens):**
```
Analyze sales-data.csv. Create a comparison table of sales
by region for Q3, with year-over-year trends.
Format: markdown table with columns Region, Current Q3,
Previous Q3, and % change.
```

The second prompt uses **5x fewer tokens** and gets you the result you want on the first try.

## Technique 4: Delegate to subagents

When Claude needs to process something heavy — logs, extensive searches, analysis of many files — all that output floods your context and eats tokens fast.

If you ask it to use a subagent, the heavy output stays in the subagent's context and only a summary comes back to your main conversation. Your window stays clean and cheap.

Claude does this automatically much of the time, but you can ask explicitly:

```
Use a subagent to search through all the log files
and give me a summary of the errors.
```

## Technique 5: `/compact` for long conversations

If you're in the middle of work you don't want to lose but the conversation is getting long, use `/compact` instead of `/clear`. Claude will summarize the entire history into a compact summary, freeing tokens without losing context.

You can even tell it what to keep:

```
/compact focus on the decisions about the report structure
```

## Technique 6: Caveman Mode

If Claude's responses feel too long for what you need, try [Caveman Mode](https://github.com/JuliusBrussee/caveman) — a skill that makes Claude respond directly with no filler: no articles, no pleasantries, no unnecessary explanations.

In real benchmarks, a 1,180-token response drops to 159 — that's **~85% fewer output tokens**. Install it with:

```
/install-skill https://github.com/JuliusBrussee/caveman
```

It doesn't affect the quality of Claude's work — only how it communicates results to you.

## Technique 7: Pick the right model

Not every task needs the most powerful model:

| Task | Recommended model | Why |
|------|------------------|-----|
| Quick questions, looking up a fact | **Haiku** | Fast and cheap |
| Day-to-day work | **Sonnet** | Good quality/cost balance |
| Complex analysis, long documents | **Opus** | Maximum quality |

Switch models with `/model`. For simple questions like "what's in this file?" you don't need Opus.

## Monitor your spend

Type `/cost` at any time to see how many tokens you've used in the current session. If you see a session spiking, you probably need a `/clear` or `/compact`.

> **Tip**: You can see your total monthly consumption at [claude.ai/settings](https://claude.ai/settings) under the usage section.

## Quick reference

| Technique | Estimated savings | When to use |
|-----------|------------------|-------------|
| `/clear` between tasks | 50-80% | Whenever you switch topics |
| Specific prompts | 60-80% | Every message |
| Subagents | 40-60% | Heavy file processing |
| `/compact` | 30-50% | Long conversations you don't want to lose |
| Caveman Mode | ~85% on output | When you don't need detailed responses |
| Right model | Varies | Simple tasks with Haiku/Sonnet |
