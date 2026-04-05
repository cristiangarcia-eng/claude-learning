# Exercise 1: Context Engineering

**Time:** 20 minutes | **Level:** Beginner
**Module:** [02-memory](../../02-memory/) -- CLAUDE.md and persistent context
**Skill:** Setting up User Memory and Project Memory so Claude Code understands your work

## Objective

You will learn how to configure Claude Code's two memory layers -- **User Memory** and **Project Memory** -- so it stops giving generic answers and starts responding like a teammate who knows your project, your role, and your preferences.

By the end, you will understand:
- What User Memory is and where it lives
- What Project Memory (CLAUDE.md) is and why it matters
- How the memory hierarchy works (user vs. project)
- How to write effective memory entries

## Scenario

You are a **Product Manager** working on the Nike competitive analysis project. Your team is tracking Nike's positioning against competitors in the athletic footwear market. There is a project folder with data files, but Claude Code knows nothing about the project, your role, or how your team works.

Your job: set up both memory layers so Claude becomes a context-aware teammate.

## What You Have

A project folder at `sample-project/` simulating the Nike competitive analysis:

```
sample-project/
  data/
    market-share.csv        -- Q1 market share by brand
    retail-channels.csv     -- Distribution channel breakdown
  reports/
    q1-landscape.txt        -- Q1 competitive landscape summary
  config.json               -- Project configuration
```

## Setup

This exercise uses data files included in the course repository. If you haven't already, clone the repo and navigate to this exercise:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
cd ~/Desktop/claude-learning/11-exercises/exercise-01-context-engineering
```

If you already cloned the repo, just navigate to the exercise folder:

```bash
cd ~/Desktop/claude-learning/11-exercises/exercise-01-context-engineering
```

## Step-by-Step Instructions

### Step 1: See the problem (2 minutes)

Open Claude Code in the `sample-project/` folder and ask:

```
What does this project do and what should I focus on this quarter?
```

Notice how the answer is generic. Claude has no idea who you are, what you care about, or how the team operates. Save or remember this answer -- you will compare it later.

### Step 2: Set up User Memory (5 minutes)

User Memory lives at `~/.claude/CLAUDE.md` and applies to **every project** you work on. It stores your personal identity and preferences.

Ask Claude Code:

```
Create a file at ~/.claude/CLAUDE.md with my personal preferences.
Here is what to include:

- My name is [your name]
- My role is Product Manager
- I work on competitive strategy and market positioning
- When I ask for analysis, default to bullet points, not paragraphs
- Always use USD for currency unless I say otherwise
- When comparing competitors, always include market share percentage
- I prefer concise summaries with a "So What?" section at the end
```

After Claude creates it, review it by asking Claude:

```
Read the file at ~/.claude/CLAUDE.md and show me what it says
```

Or open it directly in your terminal:

```bash
cat ~/.claude/CLAUDE.md
```

This is your **User Memory** -- it follows you across all projects.

### Step 3: Set up Project Memory (8 minutes)

Project Memory lives at `CLAUDE.md` in the project root and applies only to **this project**. It stores project-specific context.

Ask Claude Code:

```
Read through all the files in the sample-project/ folder. Then create
a CLAUDE.md in the sample-project/ root that describes:

- Project name: Nike Competitive Analysis
- Purpose: Track Nike's positioning vs. competitors in athletic footwear
- Key competitors: Orbit Sports, Velocity Gear, Apex Athletics, Summit Run
  (these are the fictional brands in our data)
- Data files: what each CSV contains and how they relate
- How to read the Q1 report
- Team conventions:
  - Market share should always be shown as percentages
  - Reports follow the format: Summary > Data > So What?
  - Competitor names must match exactly what is in the CSVs
  - Q1 = Jan-Mar, Q2 = Apr-Jun, Q3 = Jul-Sep, Q4 = Oct-Dec
```

### Step 4: Test the difference (3 minutes)

Start a fresh conversation (`/clear`) and ask the **exact same question** from Step 1:

```
What does this project do and what should I focus on this quarter?
```

Compare the two answers. The second answer should reference Nike, the competitors, the data files, your role as a PM, and use your preferred format.

### Step 5: Understand the hierarchy (2 minutes)

Now that both memory layers are set up, understand how they interact:

| Layer | Location | Scope | Example |
|-------|----------|-------|---------|
| **User Memory** | `~/.claude/CLAUDE.md` | All your projects | "I'm a PM, use bullet points" |
| **Project Memory** | `./CLAUDE.md` in project root | This project only | "Competitors are Orbit Sports, Velocity Gear..." |

Key rule: **Project Memory overrides User Memory** when they conflict. If your User Memory says "use EUR" but the Project Memory says "use USD," Claude will use USD for that project.

## Example Memory Entries

Here is what good User Memory looks like:

```markdown
# User Preferences

- Role: Product Manager, competitive strategy team
- Default format: bullet points with headers, not long paragraphs
- Currency: USD unless otherwise specified
- When showing competitor data, always include market share %
- End every analysis with a "So What?" section summarizing the key takeaway
- I am non-technical -- explain things in business terms, not code terms
```

Here is what good Project Memory looks like:

```markdown
# Nike Competitive Analysis

## What This Project Is
Ongoing competitive analysis tracking Nike's market position against four
key competitors in the athletic footwear category.

## Competitors
- Orbit Sports (budget segment, fastest growing)
- Velocity Gear (performance running, direct competitor)
- Apex Athletics (lifestyle crossover, strong in 18-25 demo)
- Summit Run (premium trail/outdoor, smallest but highest margins)

## Data Files
- data/market-share.csv -- quarterly market share % by brand and region
- data/retail-channels.csv -- sales split by channel (DTC, wholesale, online)
- reports/q1-landscape.txt -- narrative summary of Q1 competitive moves

## Conventions
- Market share is always shown as percentages (e.g., 27.3%)
- Quarter definitions: Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec
- Report format: Summary > Data Tables > So What?
- Competitor names must match CSV spelling exactly
```

## Success Criteria

- [ ] `~/.claude/CLAUDE.md` exists with your personal preferences (User Memory)
- [ ] `sample-project/CLAUDE.md` exists with project context (Project Memory)
- [ ] Asking the same question with and without memory gives noticeably different results
- [ ] You can explain the difference between User Memory and Project Memory

## What You Learned

Context engineering through memory setup is the single most impactful thing you can do with Claude Code. Every other feature -- skills, slash commands, subagents -- works better when Claude already knows your project, your role, and your preferences. Set up memory first, always.
