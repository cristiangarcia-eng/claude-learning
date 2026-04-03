# Exercise 1: Context Engineering

**Time:** 20 minutes | **Level:** Beginner
**Module:** [02-memory](../../02-memory/) — CLAUDE.md and persistent context
**Skill:** Setting up CLAUDE.md — the single most impactful thing you can do with Claude Code

## Scenario

You just joined a new team. There's a project folder with some files, but no documentation about what the project is, how things work, or what matters. Every time you ask Claude Code for help, it gives generic answers because it doesn't know anything about your context.

Your job: create a CLAUDE.md that transforms Claude from a generic assistant into a context-aware teammate.

## What You Have

A bare project folder at `sample-project/` containing:

```
sample-project/
├── data/
│   ├── customers.csv
│   └── transactions.csv
├── reports/
│   └── q1-summary.txt
├── scripts/
│   └── monthly-report.py
└── config.json
```

## Your Task

### Part 1: See the problem

1. Open Claude Code in the `sample-project/` folder and ask:
   ```
   What does this project do?
   ```
   Notice how generic the answer is.

### Part 2: Create project memory

2. Use the memory features you learned in the [Memory module](../../02-memory/):
   ```
   Read through all the files in this project. Then help me
   create a CLAUDE.md that describes:
   - What this project does
   - Who uses it
   - The key files and what they do
   - How to run the monthly report
   - Any conventions or rules you notice
   ```

3. **Test the difference.** Start a new conversation (`/clear`) and ask the same question:
   ```
   What does this project do?
   ```
   Compare the two answers.

### Part 3: Layer your memory (the key concept from Module 02)

4. **Add personal preferences** using the memory hierarchy you learned:
   ```
   Edit the CLAUDE.md to add:
   - My role (e.g., "I'm the finance lead" or "I'm in operations")
   - Communication preferences (formal? concise? detailed?)
   - Rules specific to my work (e.g., "always use EUR not USD")
   ```

5. **Bonus: Create a personal CLAUDE.md** at `~/.claude/CLAUDE.md` with preferences that apply across ALL projects. This is the **User Memory** layer from the memory hierarchy.

## Connection to Module 02 (Memory)

This exercise practices the core concepts from the Memory module:

| Memory Concept | How You Use It Here |
|---------------|-------------------|
| **Project Memory** (`./CLAUDE.md`) | The main file you create for this project |
| **User Memory** (`~/.claude/CLAUDE.md`) | Your personal preferences (bonus step) |
| **Memory Hierarchy** | Understanding which memory takes precedence |
| **Auto Memory** | Claude automatically learns from corrections |

## Success Criteria

- [ ] A `CLAUDE.md` exists in the `sample-project/` root
- [ ] It describes the project purpose, key files, and workflows
- [ ] It includes your role and communication preferences
- [ ] Asking the same question with and without CLAUDE.md gives noticeably different results
- [ ] (Bonus) A personal `~/.claude/CLAUDE.md` exists with your global preferences

## What You Learned

**Context engineering** through CLAUDE.md is the foundation of everything else in Claude Code. Every module you learn after this — slash commands, skills, subagents — works better when Claude already understands your project.
