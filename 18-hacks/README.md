# Hacks

Small tweaks and tricks that make a big difference in your day-to-day with Claude Code. These aren't new features — they're ways to get more out of what you already have.

This lesson will grow over time. Right now it contains a single hack, but it's one we recommend to everyone.

## Effort level: always set it to max

Claude has an **effort level** setting (`/effort`) that controls how much it reasons before answering. By default, Claude tends to put you on `medium` to consume fewer tokens — but we recommend always keeping it at max for the best responses.

You have several ways to set it as default:

**Environment variable (most reliable, always persists):**

```bash
export CLAUDE_CODE_EFFORT_LEVEL=max
```

Add that line to your `.bashrc` or `.zshrc` so it applies in every session.

**Settings file:** Add `"effortLevel": "max"` in your Claude Code configuration file.

**Per-session command:** Type `/effort max` in Claude Code. The levels `low`, `medium`, and `high` persist between sessions, but `max` does not persist between sessions except through the environment variable.

> **Note:** `max` is only available on Opus 4.6 — using it with Sonnet will throw an error.
