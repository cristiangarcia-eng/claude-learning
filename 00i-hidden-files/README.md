# Extra: Hidden Files and System Paths

## Why this matters

Claude Code stores all its configuration in **hidden folders**. If you don't know they exist, you'll feel lost every time the course says "edit `.claude/settings.json`" or "put your skill in `~/.claude/skills/`."

This guide gives you the mental map.

## What are hidden files?

Any file or folder whose name starts with a **dot** (`.`) is hidden by default. Your computer hides them to keep things clean — they're usually configuration files that you don't need to see daily.

```
my-project/
├── index.html          ← Visible (normal file)
├── styles.css          ← Visible (normal file)
├── .claude/            ← HIDDEN (starts with a dot)
│   └── settings.json
└── .git/               ← HIDDEN (starts with a dot)
    └── (git internals)
```

Hidden doesn't mean secret or dangerous. It just means "not shown by default."

## How to see hidden files

### In the terminal

Regular `ls` hides them. Add the `-a` flag:

```bash
ls          # Shows: index.html  styles.css
ls -a       # Shows: .  ..  .claude  .git  index.html  styles.css
```

The `-a` stands for "all" — including hidden files.

> **Tip**: `ls -la` shows hidden files in a detailed list format (with sizes and dates).

### In VS Code

VS Code shows hidden files by default in the sidebar. But if you don't see `.claude/`:

1. Open VS Code Settings (Cmd+, on Mac, Ctrl+, on Windows)
2. Search for "exclude"
3. Look for `files.exclude` — remove any pattern that hides `.claude`

### In Mac Finder

Press **Cmd + Shift + .** (dot) to toggle hidden files on/off.

### In Windows Explorer

1. Click **View** in the toolbar
2. Check **Hidden items**

## The two places Claude Code stores files

Claude Code uses two main locations. Understanding the difference is critical:

```
YOUR HOME FOLDER (~/)                    YOUR PROJECT FOLDER (./my-project/)
├── .claude/                             ├── .claude/
│   ├── CLAUDE.md       ← Your personal │   ├── CLAUDE.md       ← Project
│   │                     preferences   │   │                     standards
│   ├── settings.json   ← Your global   │   ├── settings.json   ← Project
│   │                     settings      │   │                     settings
│   ├── skills/         ← Your personal │   ├── skills/         ← Project
│   │   └── my-skill/     skills        │   │   └── team-skill/   skills
│   │       └── SKILL.md                │   │       └── SKILL.md
│   ├── agents/         ← Your personal │   ├── agents/         ← Project
│   │   └── my-agent/     agents        │   │   └── team-agent/   agents
│   │       └── AGENT.md                │   │       └── AGENT.md
│   └── rules/          ← Your personal │   ├── rules/          ← Project
│       └── my-rule.md    rules         │   │   └── team-rule.md  rules
│                                        │   └── commands/       ← Project
│                                        │       └── cmd.md        commands
└── (other files...)                     └── (your project files...)
```

### The key difference

| Location | Symbol | Who it affects | Committed to Git? | Example use |
|----------|--------|---------------|-------------------|-------------|
| **Home folder** `~/.claude/` | `~` | Only you, on all projects | No | Your personal preferences, style |
| **Project folder** `.claude/` | `.` | Everyone on this project | Yes (usually) | Team standards, shared skills |

### What does `~` mean?

The tilde `~` is a shortcut for **your home folder**:

| OS | `~` means... | Example |
|----|-------------|---------|
| Mac | `/Users/yourname` | `~/.claude/` = `/Users/maria/.claude/` |
| Linux | `/home/yourname` | `~/.claude/` = `/home/maria/.claude/` |
| Windows | `C:\Users\yourname` | `~/.claude/` = `C:\Users\maria\.claude\` |

You can always check with:

```bash
echo ~
# /Users/maria
```

### What does `.` mean?

A single dot `.` means **the current folder** (wherever you are right now):

```bash
pwd
# /Users/maria/my-project

ls .claude/
# Shows .claude/ inside my-project
```

## Claude Code's complete file map

Here's every location Claude Code uses, organized by purpose:

### Memory files (Lesson 02)

```
~/.claude/CLAUDE.md              → Your personal preferences (all projects)
./CLAUDE.md                      → Project memory (root of project)
./.claude/CLAUDE.md              → Project memory (alternative location)
./CLAUDE.local.md                → Your local overrides (not shared)
./src/CLAUDE.md                  → Directory-specific memory
```

**Rule**: Specific beats general. Project memory overrides personal. Directory memory overrides project.

### Settings files (Lesson 06)

```
~/.claude/settings.json          → Your global settings & hooks
./.claude/settings.json          → Project settings & hooks (shared)
./.claude/settings.local.json    → Your local settings (not shared)
```

### Skills (Lesson 03)

```
~/.claude/skills/name/SKILL.md   → Your personal skills
./.claude/skills/name/SKILL.md   → Project skills (shared with team)
```

### Subagents (Lesson 04)

```
~/.claude/agents/name/AGENT.md   → Your personal agents
./.claude/agents/name/AGENT.md   → Project agents (shared with team)
```

### Rules (Lesson 02)

```
~/.claude/rules/name.md          → Your personal rules
./.claude/rules/name.md          → Project rules (shared with team)
```

### Commands (Lesson 01)

```
./.claude/commands/name.md       → Project slash commands
```

## Common confusion points

### "I saved the file but nothing changed"

You might have saved it in the wrong location. Check:

```bash
# Am I in the right folder?
pwd

# Does the file exist where I think it does?
ls -la .claude/
```

### "My skill works on my machine but not my teammate's"

You probably saved it in `~/.claude/skills/` (personal) instead of `.claude/skills/` (project). Move it:

```bash
# Move from personal to project
mv ~/.claude/skills/my-skill .claude/skills/my-skill
```

Then commit it to Git so your team gets it too.

### "I see two CLAUDE.md files — which one do I edit?"

| File | When to edit |
|------|-------------|
| `~/.claude/CLAUDE.md` | Your personal style (applies everywhere) |
| `./CLAUDE.md` or `./.claude/CLAUDE.md` | Project standards (applies to this project only) |

When in doubt: edit the **project** one (`.claude/CLAUDE.md`).

### "Where did Claude put the auto-memory?"

Auto-generated memories go to a special location:

```bash
ls ~/.claude/projects/
```

Each project gets its own subfolder with memory files that Claude creates automatically.

## Quick navigation reference

```bash
# Go to your personal Claude config
cd ~/.claude

# Go to your project's Claude config
cd .claude          # (from inside the project folder)

# See everything in your personal config
ls -la ~/.claude/

# See everything in your project config
ls -la .claude/

# Find all CLAUDE.md files in your project
find . -name "CLAUDE.md"
```

## Checklist: Can you answer these?

Before moving on, make sure you can answer:

- [ ] What makes a file "hidden"? → Starts with a dot (`.`)
- [ ] How do you see hidden files in the terminal? → `ls -a`
- [ ] What does `~` mean? → Your home folder
- [ ] Where are personal settings stored? → `~/.claude/`
- [ ] Where are project settings stored? → `.claude/` (inside the project)
- [ ] If a skill works for you but not your team, what happened? → It's in `~/` instead of `./`

**Next step**: [Back to the main course →](../01-slash-commands/)
