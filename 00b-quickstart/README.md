# Setting Up Claude Code

## What you need

Before starting, make sure you have:

- **VS Code open** with the `nike-analysis` folder (the one you downloaded in the [VS Code lesson](../00f-vscode/))
- A [Claude subscription](https://claude.com/pricing) (Pro, Max, or Teams)

## Step 1: Install Claude Code

Open the terminal inside VS Code (click the terminal icon or press `` Ctrl+` ``) and paste this command:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

That's it. It installs automatically and keeps itself up to date.

## Step 2: Navigate to your project

In the same VS Code terminal, navigate to the Nike project on your Desktop:

```bash
cd ~/Desktop/nike-analysis
```

Now start Claude Code:

```bash
claude
```

The first time, you'll be asked to log in. Follow the prompts — it opens your browser to authenticate.

Once logged in, you'll see a welcome screen with a cursor waiting for your input. You're in!

## Step 3: Ask your first question

Remember the Nike files you explored in VS Code? Now let's ask Claude about them. Just type in plain English:

```
summarize the competitive analysis
```

```
what are Nike's main strengths and threats?
```

```
analyze the sales data and tell me which region grew the most
```

Claude will read the files and give you a detailed answer. No setup needed — it just works.

> **You talk to Claude like a colleague.** No special syntax, no programming language. Just describe what you want.

## Step 4: Make your first change

Now ask Claude to modify one of the files:

```
add a section about Nike's digital strategy to the competitive analysis
```

Claude will:
1. Think about what to write
2. Show you the proposed changes
3. **Ask for your permission** before making the change
4. Edit the file

You'll see the changes appear in VS Code immediately — the file updates in real time.

> **Claude always asks before changing things.** You stay in control. Nothing happens without your approval.

## Step 5: Try more tasks

Here are more things you can ask Claude about the Nike project:

### Analyze data
```
read the sales CSV and create a summary table by region with total revenue and average growth
```

```
which quarter had the best performance overall?
```

### Extract insights
```
based on the meeting notes and competitive analysis, what should Nike prioritize next quarter?
```

```
write 3 bullet points I can share with my team about Nike's biggest risks
```

### Create new content
```
create a one-page executive summary combining the competitive analysis and sales data
```

```
draft an email to the team summarizing the key findings from the Nike analysis
```

## Essential commands to remember

| What to type | What it does |
|-------------|-------------|
| `claude` | Start a new session |
| `claude -c` | Continue your last conversation |
| `/help` | See all available commands |
| `/clear` | Start fresh (clear conversation) |
| `Esc` | Stop Claude mid-action |
| `exit` or `Ctrl+C` | Exit Claude Code |

## What's next?

**Next step**: [Understand how Claude Code actually works behind the scenes →](../00c-how-it-works/)
