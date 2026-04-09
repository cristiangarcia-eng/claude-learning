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

> **Important: close VS Code completely and reopen it** after installing. Opening a new terminal isn't enough — VS Code needs to reload its environment variables. Once reopened, type `claude` and it should start.

> **Installation issues? Don't panic.** If you see errors, copy the terminal output and paste it into [claude.ai](https://claude.ai) (the browser chat). Describe what you were trying to do and Claude will walk you through the fix.
>
> ⚠️ **Heads up about what claude.ai may suggest:** the browser chat sometimes recommends installing Claude Code with `npm install -g @anthropic-ai/claude-code`. **Don't do this on Windows** — that path depends on Node.js, on PATH configuration, and ends in "command not found". If it suggests that, ignore it and re-run the `irm https://claude.ai/install.ps1 | iex` command above — that's the official installer and it doesn't need Node. On Mac/Linux, always use `curl ... install.sh | bash`.

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

## Organizing your workspace

Before you start creating more projects, set up a simple folder structure. This keeps everything clean and helps Claude work better — it performs best when each project has its own focused folder.

### Step 1: Create the main folder

Create a folder called **`Claude`** on your Desktop. You can do this however you prefer:

- **From Finder**: right-click on Desktop → New Folder → name it `Claude`
- **From the terminal**:
```bash
mkdir ~/Desktop/Claude
```

### Step 2: Create the structure inside

Inside `Claude`, create these folders:

```bash
mkdir ~/Desktop/Claude/projects
mkdir ~/Desktop/Claude/resources
```

And move the Nike project we created earlier:

```bash
mv ~/Desktop/nike-analysis ~/Desktop/Claude/projects/nike-analysis
```

### Step 3: Open it in VS Code

Open the `Claude` folder in VS Code (`File > Open Folder` → find your Desktop → select `Claude`). You'll see everything organized in the sidebar.

### The structure

This is what your workspace should look like over time:

```
~/Desktop/Claude/
├── projects/                    ← one folder per project
│   ├── nike-analysis/
│   │   ├── data/                ← files you give Claude (CSVs, PDFs, exports)
│   │   └── output/              ← files Claude creates (reports, summaries)
│   ├── q4-planning/
│   │   ├── data/
│   │   └── output/
│   └── client-acme/
│       ├── data/
│       └── output/
└── resources/                   ← shared across all projects
    ├── brand-guidelines.md
    ├── competitor-list.csv
    └── pricing-sheets/
```

**`projects/`** is where your work lives. Each project gets its own folder with `data/` (what you give Claude) and `output/` (what Claude creates for you).

**`resources/`** is for reference material that applies across projects — brand guidelines, pricing sheets, competitor data. When Claude needs this info, you can tell it: "check the resources folder for our brand guidelines."

### The rules

1. **One folder per project** — Claude works best with focused context. Don't mix Nike files with Q4 planning files.
2. **`data/`** for inputs — everything you want Claude to read (spreadsheets, documents, exports)
3. **`output/`** for results — everything Claude creates for you (reports, analysis, drafts)
4. **`resources/`** for shared material — things that don't belong to any single project

### Starting a new project

Every time you start something new, create a folder inside `projects/` with `data/` and `output/` subfolders:

```bash
mkdir -p ~/Desktop/Claude/projects/my-new-project/data
mkdir ~/Desktop/Claude/projects/my-new-project/output
```

Open the project folder in VS Code, start Claude Code, and you're ready to work.

> **The payoff compounds.** After a few weeks, you'll have a clean library of projects. You can jump between any of them and Claude immediately picks up where you left off.

> **Later in the course** you'll learn how to give each project its own memory so Claude remembers context between sessions.

## What's next?

