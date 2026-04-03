# Exercise 9: Folder Audit

**Time:** 30 minutes | **Level:** Advanced
**Module:** [10-cli](../../10-cli/) — Print mode, piping, and CLI automation
**Skill:** Using `claude -p` and piping to run batch analysis from the terminal

## Scenario

You need to audit a project folder: What's in here? How's it organized? What's the quality? Instead of using interactive mode, you'll use **CLI print mode** and piping to run the audit as a series of terminal commands — the kind of workflow you could script and run on any folder.

## What You Have

For this exercise, audit the `11-exercises/` folder itself (meta!). But the real skill is using CLI mode on **any folder** — a codebase, a shared drive, a data project.

## Your Task

### Part 1: Print mode basics

1. **Run a quick analysis in print mode** (non-interactive):
   ```bash
   claude -p "List all files in the 11-exercises/ folder, organized by type (CSV, JSON, MD, PY). Count each type."
   ```

2. **Pipe content into Claude:**
   ```bash
   find 11-exercises/ -name "*.csv" | claude -p "These are CSV files in a project. What data do they likely contain based on the file names?"
   ```

3. **Chain analysis steps:**
   ```bash
   cat 11-exercises/exercise-02-messy-spreadsheet/data/raw_requests.csv | claude -p "Analyze this CSV. How many rows? What are the quality issues? Output a JSON summary."
   ```

### Part 2: Build a folder audit script

4. **Create a reusable audit script.** Ask Claude (in interactive mode):
   ```
   Help me create a bash script called audit.sh that uses claude -p
   to audit any folder passed as an argument. The script should:
   1. List the directory tree
   2. Pipe each file type count to Claude for analysis
   3. Validate all CSV and JSON files
   4. Check README consistency
   5. Output a markdown audit report

   Use claude -p for each step and save the combined result
   as audit_report.md. Make it work on any folder, not just this one.
   ```

5. **Run the script:**
   ```bash
   chmod +x audit.sh
   ./audit.sh 11-exercises/
   ```

### Part 3: JSON output for automation

6. **Use structured output** for machine-readable results:
   ```bash
   claude -p "Analyze the 11-exercises/ folder. Output a JSON object with: total_files, files_by_type (object), quality_issues (array), overall_score (1-10)" --output-format json
   ```

7. **Combine with other tools:**
   ```bash
   claude -p "List quality issues in 11-exercises/" --output-format json | jq '.quality_issues[]'
   ```

## Connection to Module 10 (CLI)

| CLI Concept | How You Use It Here |
|------------|-------------------|
| **Print mode** (`claude -p`) | Non-interactive, scriptable analysis |
| **Piping** (`cat file \| claude -p`) | Feed data into Claude from terminal |
| **JSON output** (`--output-format json`) | Machine-readable results |
| **Session naming** (`-n "audit"`) | Name the session for later reference |
| **Scripting** | Build a reusable bash script using `claude -p` |

## Success Criteria

- [ ] You ran at least 3 `claude -p` commands successfully
- [ ] You piped file content into Claude for analysis
- [ ] A bash audit script exists and runs on any folder
- [ ] An audit report was generated as markdown
- [ ] (Bonus) JSON output was used for structured results

## What You Learned

**Print mode turns Claude Code into a building block for automation.** Interactive mode is for exploration; print mode is for scripts, pipelines, and CI/CD. Any analysis you can do interactively, you can script with `claude -p` and run unattended on any folder, codebase, or dataset.
