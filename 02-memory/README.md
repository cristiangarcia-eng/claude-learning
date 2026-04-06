# Memory
**The persistence layer**

Every time you start a new conversation with Claude, it starts from zero — it doesn't know who you are, what you're working on, or how you like things done. You'd have to explain everything again. And again. And again.

> **Without memory, every conversation is a first date.**

Memory fixes this. It's a simple text file that Claude reads at the beginning of every conversation. You write down what Claude should know, and it remembers — automatically, every time. This is the foundation everything else in this course builds on.

## Two types of memory

When you type `/memory` in Claude Code, you'll see two options:

![The /memory menu in Claude Code](/claude-memory-menu.png)

### 1. User memory — about you

**Where it lives:** `~/.claude/CLAUDE.md` (in your home folder)

This follows you everywhere, across all projects. Put things here that are always true about you:

- Your role and what you do
- Your preferred language
- How you like responses formatted
- Things Claude should always do (or never do)

### 2. Project memory — about the project

**Where it lives:** `./CLAUDE.md` (inside the project folder)

This only applies to the current project. It stays with the folder. Put things here like:

- What the project is about
- Key files and what they contain
- Terminology and names
- Rules specific to this project

## The 4 pillars of great memory

The best CLAUDE.md files cover four things:

| Pillar | What it does | Example |
|--------|-------------|---------|
| **Knowledge compression** | Summarize key info so Claude doesn't have to read every file | "The main product is a B2B SaaS for HR teams. Revenue model is per-seat pricing." |
| **Preferences & conventions** | How you like things done | "Always use bullet points. Write in a casual, friendly tone." |
| **Capabilities** | What Claude can and should do in this context | "You have access to Google Docs via MCP. Use it to update the weekly report." |
| **Lessons learned** | What worked and what didn't in past sessions | "Don't use tables for comparisons — the team prefers bullet lists." |

Most people only do the first two. Adding capabilities and lessons learned makes Claude dramatically more effective over time.

> **Think of it as training a new hire.** You wouldn't just tell them what the company does — you'd also tell them your preferences, what tools they have access to, and mistakes to avoid.

## Setting up your memory

Let's set up both types using the Nike project you've been working with.

### Step 1: Enable the `code` command in VS Code

Before we start, make sure you can open files from the terminal using VS Code. This makes editing memory files much easier:

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type **"Shell Command: Install 'code' command in PATH"** and select it
4. Done — now you can open any file from the terminal with `code filename`

You only need to do this once.

### Step 2: Set up your User memory

Instead of using the `/memory` command (which opens a small terminal editor), open the file directly in VS Code where it's much more comfortable to edit:

```bash
code ~/.claude/CLAUDE.md
```

This opens your User memory file in a full VS Code tab. Add something like this:

```
I am a product manager.
I prefer responses in Spanish.
Keep summaries under 200 words.
Use bullet points instead of long paragraphs.
Always explain things in simple, non-technical language.
```

Save the file (`Cmd+S`) and you're done.

### Step 3: Set up your Project memory

For project memory, the best practice is: **every time you start working in a new project folder, run `/init` as your first command.** Claude will scan your files, understand the project, and create a `CLAUDE.md` for you automatically.

1. Open Claude Code in your project folder
2. Type `/init`
3. Claude reads your files and generates a `CLAUDE.md` with the project context

That's it. Claude figures out what the project is about, what the key files are, and writes the memory for you.

You can review and edit what Claude generated:

```bash
code CLAUDE.md
```

For example, Claude might generate something like this for the Nike project:

```
This is a competitive analysis project for Nike.

Key files:
- competitive-analysis.md — the main report with strengths, weaknesses, opportunities, and threats
- sales-data.csv — quarterly revenue by region (North America, EMEA, Greater China, APLA)
- notes.txt — meeting notes from the brand strategy review on March 15

Important context:
- We are evaluating Nike's position against Adidas and New Balance
- The focus is on DTC strategy and digital transformation
- China recovery is a key concern for the team
```

Review it, tweak anything that's missing, save and you're done.

> **Make it a habit.** Every time you open a new project folder, run `/init` first. It takes 30 seconds and Claude starts every conversation already knowing what you're working on.

### Step 3: See the difference

Now start a fresh conversation (`/clear`) and ask:

> `What should we focus on for next quarter?`

Without memory, Claude would have no idea what "we" means or what project you're talking about. With memory, it knows you're a PM working on a Nike competitive analysis, and it gives you a relevant, focused answer.

## Quick memory additions

You don't always need to open the memory file. During a conversation, you can add quick notes with `#`:

> `# When analyzing sales data, always compare year-over-year growth`

> `# Our fiscal year starts in June, not January`

Claude will add these to your project memory automatically.

## Tips for good memory

**Keep it concise.** Claude reads your entire memory file at the start of every conversation. **Keep it under 150-200 instructions** — beyond that, Claude starts ignoring rules. A focused, well-organized memory works much better than a long one.

**Update it regularly.** As your project evolves, update the memory. Remove things that are no longer true. Add new context as you learn it.

**Be specific.** "I like short answers" is okay. "Keep summaries under 200 words and use bullet points" is better.

| Good memory entries | Less useful entries |
|---|---|
| "Our Q4 deadline is March 30" | "We have a deadline" |
| "Compare all competitors against Nike as the baseline" | "Do good analysis" |
| "Revenue figures are in millions USD" | "Be careful with numbers" |

## What memory is NOT

Memory is **not** a conversation history. Claude doesn't remember what you talked about yesterday. Memory is a set of instructions and context that Claude reads fresh every time.

Think of it like a briefing document you hand to a new team member on their first day — they haven't been in your meetings, but if the briefing is good, they can get up to speed quickly.

