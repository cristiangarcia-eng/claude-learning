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

> **Installation issues? Don't panic.** Sometimes your computer needs an update, or is missing some software that Claude Code depends on (like Node.js). This is normal. If you see errors during installation, just copy the terminal output and paste it into [claude.ai](https://claude.ai) (the browser chat). Describe what you were trying to do and Claude will walk you through the fix. A couple of back-and-forth messages usually solves it.

### Recommended: stop screen flickering

Claude Code's terminal can flicker while it's working. To fix this, run this once:

**Mac / Linux:**
```bash
echo 'export CLAUDE_CODE_NO_FLICKER=1' >> ~/.zshrc && source ~/.zshrc
```

**Windows PowerShell:**
```powershell
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_NO_FLICKER', '1', 'User')
```

This makes the terminal much smoother — you only need to do it once.

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

Once logged in, you'll see a welcome screen like this — with the Nike project files on the left and Claude ready to chat at the bottom:

![Claude Code running in VS Code with the Nike project](/claude-code-running.png)

You're in! That cursor at the bottom is where you type your requests.

## Step 3: Ask your first question

Remember the Nike files you explored in VS Code? Now let's ask Claude about them. Just type in plain English. Try any of these:

> `summarize the competitive analysis`

> `what are Nike's main strengths and threats?`

> `analyze the sales data and tell me which region grew the most`

Claude will read the files and give you a detailed answer. No setup needed — it just works.

> **You talk to Claude like a colleague.** No special syntax, no programming language. Just describe what you want.

## Step 4: Make your first change

Now ask Claude to modify one of the files:

> `add a section about Nike's digital strategy to the competitive analysis`

Claude will think about what to write, then show you the proposed changes and ask for permission:

![Claude asking permission to edit a file](/claude-code-permission.png)

You'll see three options:
1. **Yes** — approve this one change
2. **Yes, allow all edits during this session (shift+tab)** — approve this change and let Claude make similar edits without asking again. **This is the recommended option** — it keeps things flowing without interruptions.
3. **No** — reject the change

Pick option 2, and you'll see the file update in VS Code immediately.

> **Claude always asks before changing things.** You stay in control. If you ever want to stop Claude mid-action, press `Esc`.

## Step 5: Try more tasks

Here are more things you can ask Claude about the Nike project:

### Analyze data

> `read the sales CSV and create a summary table by region with total revenue and average growth`

> `which quarter had the best performance overall?`

### Extract insights

> `based on the meeting notes and competitive analysis, what should Nike prioritize next quarter?`

> `write 3 bullet points I can share with my team about Nike's biggest risks`

### Create new content

> `create a one-page executive summary combining the competitive analysis and sales data`

> `draft an email to the team summarizing the key findings from the Nike analysis`

## Essential commands to remember

| What to type | What it does |
|-------------|-------------|
| `claude` | Start a new session |
| `claude -c` | Continue your last conversation |
| `/help` | See all available commands |
| `/clear` | Start fresh (clear conversation) |
| `Esc` | Stop Claude mid-action |
| `exit` or `Ctrl+C` | Exit Claude Code |

## Power tip: Run multiple sessions in parallel

You're not limited to one Claude conversation at a time. In VS Code, you can open multiple terminals — each one running its own Claude Code session with its own conversation thread.

**How to do it:**

1. Click the **+** icon in the terminal panel (or press `` Ctrl+Shift+` ``) to open a new terminal
2. Type `claude` in the new terminal to start a second session
3. Repeat as many times as you want

Now you can have Claude working on three things simultaneously:
- **Terminal 1**: Analyzing your sales data
- **Terminal 2**: Rewriting the competitive analysis
- **Terminal 3**: Drafting an email summary

Each session is independent — they don't interfere with each other. This is one of the biggest productivity gains with Claude Code: while Claude is working on a big task in one terminal, you can start something else in another.

> **Think of it like having multiple assistants instead of one.** Each terminal is its own specialist working on its own task.

## What's next?

