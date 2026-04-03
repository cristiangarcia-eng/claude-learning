# Setting Up Claude Code

## What you need

Before starting, make sure you have:

- **VS Code open** with a project folder (like the `nike-analysis` folder from the previous lessons)
- A [Claude subscription](https://claude.com/pricing) (Pro, Max, or Teams)

## Step 1: Install Claude Code

Open the terminal inside VS Code (press `` Ctrl+` ``) and paste this command:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

That's it. It installs automatically and keeps itself up to date.

## Step 2: Start Claude Code

In the same VS Code terminal, type:

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

You'll see the new file appear in VS Code's sidebar immediately.

> **Claude always asks before changing things.** You stay in control. Nothing happens without your approval.

## Step 5: Try common tasks

Here are things non-developers commonly ask Claude to do:

### Understand a project
```
explain this project like I'm a product manager
```

```
what are the main files and what does each one do?
```

### Find information
```
what are Nike's biggest threats according to the analysis?
```

```
summarize the sales data by region
```

### Make changes
```
add a section about Nike's digital strategy to the competitive analysis
```

```
create a chart-ready summary of the quarterly revenue data
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

**Next step**: [Understand how Claude Code actually works behind the scenes →](../00c-how-it-works/)
