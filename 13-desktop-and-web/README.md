# Desktop App and Web Sessions
**The interface layer**

The terminal works, but let's be honest — reviewing file changes as text diffs isn't for everyone. And if you want to start a task and check on it from your phone later, the terminal can't help you. Claude Code is powerful, but its default interface wasn't designed for visual thinkers.

> **Same Claude, better window.**

Use Claude Code beyond the terminal — in a standalone app or directly in your browser.

## Desktop App

A standalone app for macOS and Windows with a visual interface.

**Download:** [claude.com/download](https://claude.com/download)

### What it adds over the terminal

| Feature | Terminal | Desktop App |
|---------|----------|-------------|
| See file changes | Text diffs | Visual side-by-side diffs |
| Multiple sessions | Multiple terminal windows | Tabs in one window |
| Scheduled tasks | Manual | Built-in scheduler |
| Connectors | Manual setup | Slack, Linear, Notion, Asana, Calendar |

### Transfer a session from terminal

If you started in the terminal and want to switch to the Desktop App:

```
/desktop
```

Your full conversation and context transfers over.

## Web Sessions

Run Claude Code in your browser at [claude.ai/code](https://claude.ai/code) — no installation needed.

### When to use the web

- You're on a computer without Claude Code installed
- You want to start a long task and check back later
- You need to work from your phone or tablet

### Start a web session from terminal

```bash
claude --remote "Analyze the Q3 sales data and create a summary"
```

Claude starts working on a cloud machine. Check progress at claude.ai/code.

### Move between web and terminal

```bash
claude --teleport
```

This pulls a web session into your local terminal — useful when you started a task on the web and want to continue locally.

## Scheduled Tasks

Set up recurring tasks that run automatically:

```
/schedule
```

Examples of scheduled tasks:
- "Every Monday morning, summarize last week's changes"
- "Every day at 9am, check for new customer feedback"
- "Every Friday, generate a weekly status report"

Tasks run on Anthropic's cloud infrastructure — they work even when your computer is off.

> **Tip**: The Desktop App is the best experience for non-developers. Visual diffs make it much easier to review changes than reading terminal output.

