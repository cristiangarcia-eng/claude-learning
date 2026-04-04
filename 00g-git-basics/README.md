# Extra: Git Basics

## What is Git?

Git is a **time machine for your files**. It saves snapshots of your project so you can always go back to a previous version.

Think of it like this:

- **Without Git**: You save `report-v1.docx`, `report-v2.docx`, `report-FINAL.docx`, `report-FINAL-FINAL.docx`
- **With Git**: You save `report.docx` and Git remembers every version automatically

> Claude Code uses Git behind the scenes. You don't need to become a Git expert — just understand these basics so you know what Claude is doing when it mentions "commits" or "branches."

## The 5 concepts you need

### 1. Repository (repo)

A **repository** is just a folder that Git is watching. When you run `git init` or clone a project, that folder becomes a repo.

Think of it as: **a folder with memory**.

```
my-project/          ← This is your repo
├── .git/            ← Git's memory (hidden folder, don't touch it)
├── index.html
└── styles.css
```

### 2. Commit

A **commit** is a snapshot — a saved moment in time. Every commit has:

- **What changed** (which files were modified)
- **A message** (a short note explaining why)
- **A timestamp** (when it happened)

Think of it as: **pressing "Save" with a sticky note attached**.

```
Commit 1: "Add homepage layout"
Commit 2: "Fix broken link in navigation"
Commit 3: "Update contact email"
```

### 3. Staging (the "shopping cart")

Before you commit, you need to **stage** your changes — tell Git which changes to include in the snapshot.

Think of it as: **putting items in a shopping cart before checkout**.

```
You changed 3 files:
  ✏️  index.html      → staged (will be saved)
  ✏️  styles.css      → staged (will be saved)
  ✏️  notes.txt       → NOT staged (won't be saved yet)
```

### 4. Branch

A **branch** is a separate copy of your project where you can make changes without affecting the original.

Think of it as: **a "what if" notebook**. You write in the notebook, and if you like the result, you merge it back into the main version. If not, you throw the notebook away.

```
main (the real version)
  └── my-experiment (your "what if" notebook)
        ├── changed header color
        └── added new section
```

### 5. Status

**Status** tells you what's going on right now — what changed, what's staged, and what Git doesn't know about yet.

Think of it as: **asking "what did I change since last time?"**

## The 5 commands you need

You only need five commands. Here's what they do:

### `git status` — "What changed?"

```bash
git status
```

This shows you:
- Files you modified (in red = not staged)
- Files ready to commit (in green = staged)
- New files Git doesn't know about yet

**Use it often.** It's your dashboard. It never changes anything.

### `git add` — "I want to save these changes"

```bash
git add index.html          # Stage one specific file
git add index.html styles.css   # Stage multiple files
```

This moves files to the staging area (the "shopping cart").

> **Tip from the course**: Avoid `git add .` (which stages everything). Be specific about what you're saving — this prevents accidentally committing files with passwords or secrets.

### `git commit` — "Save this snapshot"

```bash
git commit -m "Fix broken link in navigation"
```

This creates a permanent snapshot with your message. The `-m` flag lets you write the message inline.

**Good commit messages** explain **why**, not what:
- ❌ "Changed index.html"
- ✅ "Fix broken link in navigation bar"

### `git log` — "Show me the history"

```bash
git log --oneline
```

This shows a list of all previous commits:

```
a3f9c21 Fix broken link in navigation
b7e2d14 Add homepage layout
c1a8f03 Initial project setup
```

The letters/numbers at the start are unique IDs for each snapshot. The `--oneline` flag keeps it compact.

### `git diff` — "What exactly changed?"

```bash
git diff
```

This shows the specific lines that changed in your files:

```diff
- <a href="old-link.html">Contact</a>
+ <a href="contact.html">Contact</a>
```

Lines starting with `-` were removed. Lines starting with `+` were added.

## How Claude Code uses Git

When you work with Claude Code, here's what happens behind the scenes:

| When you... | Claude does... | Git concept |
|------------|---------------|-------------|
| Ask Claude to make changes | Edits files in your repo | Modified files |
| Use `/commit` | Creates a commit with a message | Commit |
| Use checkpoints (Esc+Esc) | Reverts to a previous state | Like going back in history |
| See "uncommitted changes" | Files changed but not saved as snapshot | Staging needed |

### What Claude might say (and what it means)

| Claude says... | It means... |
|---------------|-------------|
| "I'll commit these changes" | "I'll save a snapshot of the current state" |
| "There are uncommitted changes" | "Files changed since the last save point" |
| "Let me check the git log" | "Let me look at the history of changes" |
| "I'll create a branch" | "I'll work on a separate copy so we don't break anything" |
| "I'll push to remote" | "I'll upload the changes to GitHub (the cloud)" |

## A real example

Here's a complete workflow, step by step:

```bash
# 1. Check what's going on
git status
# → shows: index.html modified, styles.css modified

# 2. Look at what changed
git diff
# → shows the exact lines that changed

# 3. Stage the files you want to save
git add index.html styles.css

# 4. Save the snapshot with a message
git commit -m "Update homepage layout and fix styling"

# 5. Verify the commit was saved
git log --oneline
# → shows your new commit at the top
```

## Common mistakes

### "Nothing to commit, working tree clean"

**Good news!** This means all your changes are saved. There's nothing new to commit.

### "Changes not staged for commit"

You modified files but didn't `git add` them yet. Run `git add filename` first, then `git commit`.

### "Please tell me who you are"

Git wants to know your name and email (for the commit history). Run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

You only need to do this once.

### "Merge conflict"

Two changes happened to the same line. Don't panic — tell Claude "there's a merge conflict" and it will help you resolve it.

## What you DON'T need to learn yet

You don't need to know about:

- `git rebase` — Advanced history rewriting
- `git cherry-pick` — Advanced commit moving
- `git stash` — Temporary storage
- `git bisect` — Bug hunting tool

These are power tools. Claude handles them for you if needed.

## Quick reference card

| Command | What it does | Analogy |
|---------|-------------|---------|
| `git status` | Show what changed | "What's different?" |
| `git add file` | Stage a file | "Put in shopping cart" |
| `git commit -m "msg"` | Save a snapshot | "Save + sticky note" |
| `git log --oneline` | Show history | "Show my save history" |
| `git diff` | Show line-by-line changes | "Show me exactly what changed" |

