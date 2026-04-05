# Exercise 9: Folder Audit with CLI Print Mode

**Time:** 30 minutes | **Level:** Advanced
**Module:** [10-cli](../../10-cli/) -- Print mode, piping, and CLI automation
**Skill:** Using `claude -p` (print mode) for batch operations from the terminal

## Objective

You will learn how to use Claude Code's **print mode** (`claude -p`) to analyze files non-interactively from the command line. Instead of opening an interactive session, you will run one-off commands that read files, analyze them, and produce output -- the kind of workflow you can repeat on any folder of documents.

This is a key skill for anyone who needs to audit, review, or quality-check a set of files quickly.

## Scenario

You are a Project Manager at **Orbit Task Manager** and your team just wrapped Phase 1 of a product launch. The project folder (`docs/`) contains the key documents that were produced: a project brief, a requirements doc, a launch checklist, meeting notes, and a status report. Before the Phase 2 kickoff, your director asked you to audit these documents for completeness and quality.

You will use `claude -p` to analyze each document without opening an interactive session -- fast, repeatable, and scriptable.

## What You Will Learn

- How `claude -p` (print mode) works and when to use it instead of interactive mode
- How to pipe file contents into Claude for analysis
- How to run batch analysis across multiple files
- How to get structured (JSON) output for automation

## Step-by-Step Instructions

### Part 1: Print mode basics

1. Open your terminal and navigate to this exercise folder:

   ```bash
   cd 11-exercises/09-folder-audit
   ```

2. **Run your first print mode command.** This sends a prompt to Claude and prints the response -- no interactive session:

   ```bash
   claude -p "List all the files in the docs/ folder and describe what each one appears to be based on its filename."
   ```

3. **Pipe a file into Claude for analysis:**

   ```bash
   cat docs/project-brief.md | claude -p "Review this project brief. Rate it 1-5 on: clarity of goals, completeness of scope, and stakeholder identification. Explain each rating."
   ```

4. **Analyze another file:**

   ```bash
   cat docs/launch-checklist.md | claude -p "Review this launch checklist. Are there any obvious missing steps? Is the order logical? What would you add?"
   ```

### Part 2: Batch analysis across all documents

5. **Run a quality check on every document.** Use a loop to analyze each file:

   ```bash
   for file in docs/*.md; do
     echo "=== Analyzing: $file ==="
     cat "$file" | claude -p "Review this document for completeness and quality. Score it 1-10 and list the top 3 issues or gaps. Be specific. Start your response with the score as a number."
     echo ""
   done
   ```

6. **Generate a combined audit report.** Pipe all documents together:

   ```bash
   cat docs/*.md | claude -p "These are all the project documents for a product launch. Audit them as a set:
   - Is anything missing that a complete project should have?
   - Are there contradictions between documents?
   - Which document needs the most improvement and why?
   - Overall readiness score 1-10.
   Write your response as a brief audit report."
   ```

### Part 3: Structured output

7. **Get JSON output** for machine-readable results:

   ```bash
   cat docs/requirements.md | claude -p "Analyze this requirements doc. Return a JSON object with: total_requirements (number), unclear_requirements (array of strings), missing_sections (array of strings), quality_score (1-10)" --output-format json
   ```

8. **Combine with other command-line tools:**

   ```bash
   cat docs/status-report.md | claude -p "List all risks mentioned in this status report as a JSON array of objects with 'risk' and 'severity' (high/medium/low) fields" --output-format json | jq '.[] | select(.severity == "high")'
   ```

### Part 4: Create a reusable audit command

9. **Build a one-liner you can reuse on any folder:**

   ```bash
   ls docs/*.md | while read file; do echo "## $file"; cat "$file" | claude -p "Score this document 1-10 for completeness. One paragraph summary of gaps."; echo ""; done > audit_report.md
   ```

10. Open `audit_report.md` and review the results.

## When to Use Print Mode vs Interactive Mode

| Use Print Mode (`claude -p`) when... | Use Interactive Mode when... |
|---------------------------------------|-------------------------------|
| You have a specific, single question | You need a back-and-forth conversation |
| You want to script or automate | You want to explore and iterate |
| You are processing multiple files | You need Claude to remember context |
| You want repeatable commands | The task requires judgment calls |

## Connection to Module 10 (CLI)

| CLI Concept | How You Used It |
|------------|----------------|
| **Print mode** (`claude -p`) | Non-interactive, one-shot analysis |
| **Piping** (`cat file \| claude -p`) | Fed document content to Claude |
| **Loops** | Batch-processed multiple files |
| **JSON output** (`--output-format json`) | Got machine-readable results |
| **Combining tools** (`jq`) | Filtered and processed Claude's output |

## Success Criteria

- [ ] You ran at least 3 `claude -p` commands successfully
- [ ] You piped file content into Claude for analysis
- [ ] You analyzed multiple files using a loop
- [ ] You generated structured JSON output from at least one command
- [ ] An audit report was saved as a markdown file

## What You Learned

**Print mode turns Claude Code into a building block for automation.** Interactive mode is for exploration and conversation; print mode is for scripts, pipelines, and repeatable workflows. Any analysis you can do interactively, you can script with `claude -p` and run on any folder, any dataset, any time.
