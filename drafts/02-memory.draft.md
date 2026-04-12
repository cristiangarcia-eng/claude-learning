<!--
DRAFT — Growth.Design-inspired rewrite of 02-memory/README.md
Status: approved in conversation, pending final approval to apply
Persona: Inés (freelance brand strategist, Barcelona, 4 clients)
Strategy: fresh persona per lesson (Option B — no fixed cast)
Key moves applied: 1 (specific numbers: 4, 18, 72, 200, 60s),
2 (active verbs), 3 (timebox "2 minutes flat"),
5 (headers as answers), 6 (real brand names: Weleda, Dr. Hauschka,
Freshly Cosmetics), 7 (binary: User vs Project; Do vs Avoid;
memory is vs is NOT), 8 (result before method)
Preserved from original: "first date" quote, "new hire" metaphor,
all technical commands, Nike project continuity
Pending: Spanish mirror (README.es.md)
-->

# Memory
**Brief Claude once — it remembers your project, your style, your lessons forever.**

Inés, a freelance brand strategist in Barcelona, juggles 4 active
clients: an organic cosmetics brand, a fintech for seniors, a
plant-based meal-kit startup, and a chain of yoga studios. Every Monday
morning, she opened Claude and spent 18 minutes pasting the same three
paragraphs of context for each client before getting any real work done
— industry, competitors, tone of voice, last month's campaigns.

Then on Tuesday, she'd do it again. Wednesday. Thursday.

72 minutes a week of re-introducing Claude to the same projects it had
just helped her with the day before.

Then she learned **one command**: `/init`. Now every client folder has
a `CLAUDE.md` that Claude reads before Inés has opened her second tab.
Monday morning starts at the actual work.

> **Without memory, every conversation with Claude is a first date.**

Memory is a simple text file Claude reads at the start of **every**
conversation. You write down what Claude should know once, and it
remembers — automatically, always.

## Two memories: one about you, one about the project

When you type `/memory` in Claude Code, you'll see two options:

![The /memory menu in Claude Code](../02-memory/images/claude-memory-menu.png)

| Type | Lives at | Scope | What goes here |
|---|---|---|---|
| **User memory** | `~/.claude/CLAUDE.md` | Every project you touch | Who you are, your role, preferred language, how you like answers |
| **Project memory** | `./CLAUDE.md` in the project | Just this folder | What the project is, key files, terminology, project-specific rules |

Claude reads both at the start of every conversation. If they conflict,
**project memory wins** — so if your user memory says *"use EUR"* but
the Nike project memory says *"use USD"*, Claude uses USD for Nike.

## What to actually put in memory

Most people add the basics: their role, a couple of preferences. But
the people who get the most out of Claude also add **lessons learned**
— things they discovered work or don't work for them:

```
I am a product manager at a B2B SaaS company for HR teams.
I prefer responses in Spanish, with bullet points.
Keep summaries under 200 words.

Lessons learned:
- Don't use tables for comparisons — my team prefers bullet lists.
- Always include an executive summary at the top of reports.
- When analyzing sales data, always compare year-over-year.
```

> **Think of it as training a new hire.** You wouldn't just tell them
> what the company does — you'd also tell them your preferences and
> the mistakes to avoid. The better the briefing, the better they
> work from day one.

## Set it up in 2 minutes flat

### Step 1: your user memory (60 seconds)

In Claude Code, open your personal memory file directly in Cursor:

```
! open ~/.claude/CLAUDE.md
```

Paste something like this, save (`Cmd+S` / `Ctrl+S`), done:

```
I am a product manager at a Spanish fintech startup.
I prefer responses in Spanish, with bullet points.
Keep summaries under 200 words.
Always explain things in simple, non-technical language.
```

> **Note:** You can also use `/memory` → *"Edit User memory"*, but it
> opens a terminal vim editor which is confusing. The `! open` command
> opens the file directly in Cursor, which is simpler.

### Step 2: your project memory (60 seconds)

The golden rule: **every time you open a new project folder, run
`/init` first.**

1. Open Claude Code in your project folder
2. Type `/init`
3. Claude reads your files and writes `CLAUDE.md` for you

That's it. Claude figures out what the project is about, what the key
files are, and writes the briefing for you. You review it, tweak
anything off, save. You never have to re-explain this project again.

For Inés's cosmetics client, `/init` produced something like this:

```
This is the brand strategy project for a mid-size organic cosmetics
brand based in Girona, Spain.

Key files:
- brand-brief-2026.md — positioning and messaging pillars
- competitors.csv — 12 competitors with pricing and claims
- content-calendar.xlsx — scheduled posts through Q2

Context:
- Primary audience: women 30-45, eco-conscious, urban
- Main competitors: Weleda, Dr. Hauschka, Freshly Cosmetics
- Tone of voice: warm, expert, never preachy
```

Inés reviewed it, added two lessons from past mistakes, saved. Now
every Monday she types *"Review this week's social calendar"* and
Claude already knows what *"this week"* means, what the brand sounds
like, and who it's talking to.

## The `#` shortcut: remember this, forever

You don't always need to open the memory file. Mid-conversation, type
`#` followed by what you want Claude to remember:

> `# When analyzing sales data, always compare year-over-year growth`

> `# Our fiscal year starts in June, not January`

Claude appends these to your project memory automatically. Perfect for
those *"oh, I just realized Claude should always..."* moments.

## The 3 rules of good memory

| Do | Avoid |
|---|---|
| **Be specific**: *"Q4 deadline is March 30"* | **Vague**: *"We have a deadline"* |
| **Stay under ~200 lines** — Claude starts ignoring rules beyond that | Dumping every document into one giant file |
| **Update it regularly** — remove stale context, add new lessons | Writing it once and never touching it again |

## The learning loop (the move pros use)

Here's what separates someone who's been using Claude for 3 months from
someone who's used it for 3 weeks. After each project or session, they
do 3 things:

1. **Note what worked** — which prompts gave good results on the first try?
2. **Note what didn't** — where did Claude go in the wrong direction?
3. **Update their `CLAUDE.md`** — add the lessons so Claude doesn't repeat mistakes

You can even ask Claude to do it for you, mid-conversation:

> *"Add to my project memory: When creating reports, always include an
> executive summary at the top. The team complained last time when it
> was buried at the end."*

Over time, your `CLAUDE.md` becomes a living document that makes Claude
smarter with every project. The people who get the most value from
Claude Code are the ones who iterate on their memory files — not the
ones who write the best prompts.

## What memory is NOT

Memory is **not** a conversation history. Claude doesn't remember what
you talked about yesterday, the file it generated last Tuesday, or the
funny mistake it made last week. Memory is a set of **instructions and
context** that Claude reads fresh at the start of every conversation.

Think of it like the briefing document you'd hand a new team member on
their first day — they haven't been in your meetings, but if the
briefing is good, they're up to speed in 10 minutes.

> **The insider move:** Don't treat `CLAUDE.md` as a setup chore you do
> once. Treat it as a journal. Every time Claude surprises you (good or
> bad), update it that same day. In 3 months you'll have a briefing
> that makes Claude feel like it's been on your team for years.
