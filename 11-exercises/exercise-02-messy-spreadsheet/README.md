# Exercise 2: Tame a Messy Spreadsheet

**Time:** 30 minutes | **Level:** Beginner
**Module:** [01-slash-commands](../../01-slash-commands/) — Building reusable custom commands
**Skill:** Creating a slash command from a real workflow

## Scenario

Someone shared a messy spreadsheet with you: vague titles, mixed languages, duplicates, inconsistent formatting. You'll clean it up with Claude Code — and then **turn your cleanup workflow into a reusable slash command** so you never have to describe the process again.

## What You Have

A CSV file at `data/raw_requests.csv` with ~50 rows of internal requests. The problems:
- Mixed languages (Spanish and English)
- Vague titles like "New request" or "Untitled" repeated multiple times
- Duplicate entries
- Inconsistent status values ("done", "Done", "DONE", "Completado")
- Missing fields
- Date formats all over the place ("15/03/2025", "2025-03-15", "March 15")

## Your Task

### Part 1: Clean the data (warm-up)

1. **Explore the mess.** Ask Claude Code:
   ```
   Read data/raw_requests.csv and tell me what's wrong with it.
   How many issues do you see? Categorize them.
   ```

2. **Clean it up.** Ask Claude Code:
   ```
   Write a Python script that cleans this CSV:
   - Translate all Spanish text to English
   - Rewrite vague titles to be clear and descriptive
   - Merge duplicate entries
   - Standardize status values to: open, in-progress, done, cancelled
   - Fill missing descriptions based on the title
   - Standardize all dates to YYYY-MM-DD format
   - Output a clean CSV as data/clean_requests.csv
   Then run the script.
   ```

### Part 2: Build a slash command (the real exercise)

3. Now that you've done it once, **turn this workflow into a reusable command.** Create a file at `.claude/commands/clean-csv.md`:

   ```
   Ask Claude Code:
   Help me create a slash command called /clean-csv that:
   - Takes any messy CSV in the current directory
   - Identifies issues (duplicates, mixed languages, formatting)
   - Cleans it up following the same rules we just used
   - Outputs a clean version with a _clean suffix
   - Generates a cleanup report showing what changed

   Save it as .claude/commands/clean-csv.md following the
   slash command format from the 01-slash-commands module.
   ```

4. **Test your command.** Start a new conversation and run:
   ```
   /clean-csv data/raw_requests.csv
   ```
   It should work on any CSV, not just this specific one.

### Part 3: Make it better

5. Improve your command based on what you learned in [01-slash-commands](../../01-slash-commands/):
   - Add an `allowed-tools` field to restrict what the command can do
   - Make the description clear so teammates know what it does
   - Consider adding parameters (output format, language preference)

## Connection to Module 01 (Slash Commands)

| Slash Command Concept | How You Use It Here |
|----------------------|-------------------|
| **Custom commands** (`.claude/commands/`) | You create `/clean-csv` |
| **Description field** | Helps teammates find your command |
| **allowed-tools** | Controls what the command can execute |
| **Reusability** | One command works on any CSV, not just this one |

## Success Criteria

- [ ] `data/clean_requests.csv` exists with standardized data
- [ ] `.claude/commands/clean-csv.md` exists with proper frontmatter
- [ ] Running `/clean-csv` on a new CSV works without extra explanation
- [ ] The command includes a description and allowed-tools field

## What You Learned

The real skill isn't cleaning one CSV — it's recognizing when a workflow should become a **reusable slash command**. Every time you find yourself repeating instructions to Claude Code, that's a command waiting to be created.
