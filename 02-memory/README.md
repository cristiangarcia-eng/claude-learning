# Memory

## Why memory matters

Every time you start a new conversation with Claude, it starts from zero — it doesn't know who you are, what you're working on, or how you like things done. You'd have to explain everything again.

**Memory fixes this.** It's a simple text file that Claude reads at the beginning of every conversation. You write down what Claude should know, and it remembers — automatically, every time.

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

## Setting up your memory

Let's set up both types using the Nike project you've been working with.

### Step 1: Set up your User memory

Open Claude Code in your `nike-analysis` folder, type `/memory` and select **User memory** (option 1). A file will open — add something like this:

```
I am a product manager.
I prefer responses in Spanish.
Keep summaries under 200 words.
Use bullet points instead of long paragraphs.
Always explain things in simple, non-technical language.
```

Save the file (`Cmd+S`) and close it.

### Step 2: Set up your Project memory

Type `/memory` again and select **Project memory** (option 2). Add something like this:

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

Save and close.

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

**Keep it concise.** Claude reads your entire memory file at the start of every conversation. A focused, well-organized memory works better than a long one.

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

