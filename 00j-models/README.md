# Models

Claude Code isn't a single AI. It's a **family of models**, each with different strengths, speeds, and costs. And on top of picking a model, there's a second lever — **how hard it thinks** — that makes a huge difference in the quality of the answers you get.

This lesson covers both: which model to use, and how to set the effort level. The short version is at the top so you can skip ahead if you want.

> **TL;DR:** Use **Opus 4.6** with `/effort max` throughout this course. That's the best-quality configuration and it's what every lesson assumes.

## The main models

Think of it like a team where every member is good, just specialized differently:

| Model | Best for | Speed | Cost |
|-------|----------|-------|------|
| **Haiku 4.5** | Quick questions, looking up a fact, fast lightweight tasks | Fastest | Cheapest |
| **Sonnet 4.6** | Day-to-day work, balanced tasks, most writing | Fast | Medium |
| **Opus 4.6** | Complex analysis, long documents, the hardest tasks | Slower | Most expensive |

A useful mental model:

- **Haiku** is the intern. Great when the task is simple and you want an answer right now.
- **Sonnet** is the solid senior. Handles most real work without breaking a sweat.
- **Opus** is the specialist you call when the problem actually matters. It's slower and pricier, but it thinks more carefully and catches things the others miss.

## Our recommendation: Opus 4.6

For this course — and for most of the serious work we'll do with Claude Code — we strongly recommend **Opus 4.6**. The quality bump over Sonnet is real and noticeable, especially on:

- Analyzing long documents (reports, contracts, research)
- Any task that requires multi-step reasoning
- Anything where getting it wrong would be expensive to redo

You can see which model you're currently using at the bottom of the Claude Code screen, and switch anytime with:

```
/model
```

This opens a menu where you can pick Haiku, Sonnet, or Opus. The change takes effect immediately.

## Coming soon: Mhytos

Anthropic has announced a new next-generation model called **Mhytos** — it hasn't launched yet, but it's expected soon. When it's available, we'll update this lesson with what it's good for and whether it should replace Opus 4.6 as the default recommendation.

For now: **Opus 4.6 is still the top choice**. Don't wait for Mhytos — start working with what's available today.

## The "effort" setting

Once you've picked a model, there's a second lever: **how much the model thinks before answering**. This is called the **effort level**.

More effort = the model takes longer, uses more tokens, and reasons more carefully before producing an answer. Less effort = faster and cheaper, but shallower. On anything non-trivial, the difference between low and max effort is dramatic — it's the difference between a surface-level reply and a genuinely thoughtful one.

You set it with a single command inside Claude Code:

| Command | What it does |
|---------|--------------|
| `/effort low` | Fast, surface-level thinking. Fine for quick lookups and simple questions. |
| `/effort medium` | The default. Balanced — good enough for most things. |
| `/effort max` | Deep reasoning. The model takes more time and produces noticeably better answers. |

### Our recommendation: `/effort max`

Combined with Opus 4.6, `/effort max` is the configuration that gives the best results — and it's what we'll assume throughout the course. **If you only remember one thing from this lesson, remember to run `/effort max` when you start a serious task.**

> **Heads up:** `max` only works with **Opus 4.6**. If you're on Sonnet or Haiku and try `/effort max`, you'll get an error. Switch to Opus first with `/model`.

> **Tip:** `/effort max` resets every time you start a new session, so you'd have to re-type it each time. There's a way to make it stick permanently so you never have to think about it again — we cover that setup in the [Hacks](/en/lessons/hacks) lesson at the end of the course.

### The trade-off: Opus + max effort eats a lot more tokens

There's an honest catch to this whole recommendation. **Opus 4.6 on `/effort max` uses significantly more tokens than anything else** — Opus by itself thinks harder and produces richer answers, and `max` effort piles even more internal reasoning on top. The two together are the most expensive configuration Claude Code can run. In practice, that means:

- You'll burn through your monthly token allowance faster.
- For simple tasks where Sonnet or `/effort medium` would have been enough, you're overpaying.
- On very long sessions, you may hit your rate limit sooner than with a lighter setup.

So the honest recommendation is: **default to Opus 4.6 + `/effort max` for real work, but don't waste it on trivial stuff**. Looking up a simple fact, asking a one-line question, or doing a quick lookup? Drop to Haiku or Sonnet with `/model`, or drop effort to low. Save the heavy configuration for the tasks where quality actually matters.

We cover techniques for keeping token usage under control in the [Optimize Tokens](/en/lessons/optimize-tokens) lesson — the short version is: use `/clear` between tasks, and pick the right model + effort for the job.

## Key takeaways

1. **Claude Code has three main models** — Haiku (fast/cheap), Sonnet (balanced), Opus (most capable).
2. **Use Opus 4.6** for this course and for any serious work.
3. **Switch models** with `/model`.
4. **Effort controls how hard the model thinks** before answering — `/effort low`, `/effort medium`, or `/effort max`.
5. **`/effort max` only works with Opus 4.6** and gives the best quality.
6. **Mhytos is coming** — we'll update this lesson when it launches.
