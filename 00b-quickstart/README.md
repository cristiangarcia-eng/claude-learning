# Quickstart: Your First Session

## What you need

Before starting, make sure you have:

- A terminal open (see [Terminal Basics](../00-terminal-basics/) if you've never used one)
- A [Claude subscription](https://claude.com/pricing) (Pro, Max, or Teams)

## Step 1: Install Claude Code

Open your terminal and paste this command:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

That's it. It installs automatically and keeps itself up to date.

> **Other options**: You can also use the [Desktop app](https://claude.com/download), the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code), or [Claude Code on the web](https://claude.ai/code) — no terminal needed.

## Step 2: Start Claude Code

Navigate to any folder and type:

```bash
claude
```

The first time, you'll be asked to log in. Follow the prompts — it opens your browser to authenticate.

Once logged in, you'll see a welcome screen with a cursor waiting for your input. You're in!

## Step 3: Ask your first question

Just type in plain English. Try one of these:

```
what does this project do?
```

```
what files are in this folder?
```

```
explain what technologies this project uses
```

Claude will read your files and give you a summary. No setup needed — it just works.

> **You talk to Claude like a colleague.** No special syntax, no programming language. Just describe what you want.

## Step 4: Make your first change

Ask Claude to do something:

```
create a file called notes.md with a summary of this project
```

Claude will:
1. Think about what to write
2. Show you the proposed changes
3. **Ask for your permission** before making the change
4. Create the file

> **Claude always asks before changing things.** You stay in control. Nothing happens without your approval.

## Step 5: Use Git with Claude

If your project uses Git (most do), Claude can help:

```
what files have changed recently?
```

```
commit my changes with a descriptive message
```

```
show me the last 5 changes made to this project
```

Don't know what Git is? It's a tool that tracks every change to a project, like "Track Changes" in Google Docs but for all your files.

## Step 6: Try common tasks

Here are things non-developers commonly ask Claude to do:

### Understand a codebase
```
explain this project like I'm a product manager
```

```
what are the main features of this app?
```

```
draw a diagram of how the different parts connect
```

### Find information
```
where is the pricing page defined?
```

```
find all the text that users see on the checkout page
```

```
what analytics events are being tracked?
```

### Make simple changes
```
change the company name from "Acme" to "Nova" everywhere
```

```
update the copyright year to 2026 in the footer
```

```
add a new FAQ entry about refund policy
```

### Analyze data
```
read the CSV file in /data and summarize the key metrics
```

```
how many users signed up last month based on the logs?
```

## Essential commands to remember

| What to type | What it does |
|-------------|-------------|
| `claude` | Start a new session |
| `claude -c` | Continue your last conversation |
| `claude -r` | Resume a previous conversation |
| `/help` | See all available commands |
| `/clear` | Start fresh (clear conversation) |
| `Esc` | Stop Claude mid-action |
| `exit` or `Ctrl+C` | Exit Claude Code |

## What's next?

Now that you've had your first session, learn:

- [How Claude Code actually works](../00c-how-it-works/) — understand what happens behind the scenes
- [Best practices](../00d-best-practices/) — get better results from your conversations
- [Practical workflows](../00e-workflows/) — real tasks for PMs, designers, and sales
