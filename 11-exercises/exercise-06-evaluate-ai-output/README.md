# Exercise 6: Evaluate & QA an AI Output

**Time:** 40 minutes | **Level:** Intermediate
**Module:** [06-hooks](../../06-hooks/) — Event-driven automation
**Skill:** Building a hook that automatically checks AI output quality

## Scenario

Your company uses AI to generate outreach emails. It works most of the time, but sometimes the AI invents names, uses the wrong tone, exceeds character limits, or ignores instructions. You'll evaluate the outputs manually — then **build a hook that runs quality checks automatically** before any AI-generated content gets saved.

## What You Have

A JSON file at `data/ai_outputs.json` with 20 AI-generated texts. Each has the input, constraints (tone, length limit, language), and the actual output. Some have intentional flaws.

## Your Task

### Part 1: Manual evaluation (warm-up)

1. **Define your criteria.** Ask Claude:
   ```
   Read data/ai_outputs.json. Based on the constraints in each entry,
   define a quality checklist: length limit, tone, required fields,
   hallucinated info, language, formatting issues.
   ```

2. **Evaluate all outputs.** Ask Claude:
   ```
   Evaluate all 20 outputs against your checklist. For each:
   Pass/Fail, which criteria failed, severity (Critical/Medium/Low),
   one-line explanation. Output as a markdown table.
   ```

3. **Find patterns.** Ask Claude:
   ```
   What's the overall pass rate? Which criteria fail most often?
   Are there patterns (certain tones = more errors)? Group the failures.
   Write a QA report and save as qa_report.md
   ```

### Part 2: Build a quality-check hook (the real exercise)

4. Now **automate this quality check as a hook.** Ask Claude:
   ```
   Help me create a hook that runs after Claude writes any file.
   Following the format from the 06-hooks module, the hook should:
   - Trigger on PostToolUse for the Write tool
   - Check if the file being written contains AI-generated content
     (look for patterns like email templates, outreach messages)
   - Validate: no markdown in plain text fields, length within limits,
     no placeholder text like {{firstName}} left unresolved
   - Output a warning if quality issues are found

   Create the hook script at ~/.claude/hooks/qa-check.sh
   and show me the settings.json configuration.
   ```

5. **Test the hook.** Ask Claude to generate a new outreach email and save it. The hook should run automatically and flag any issues.

### Part 3: Make it smarter

6. Improve your hook:
   - Add a severity threshold (only block on Critical issues, warn on Medium)
   - Log all checks to a `qa_log.txt` for tracking over time
   - Consider using a `PreToolUse` hook instead — catch issues *before* the file is written

## Connection to Module 06 (Hooks)

| Hook Concept | How You Use It Here |
|-------------|-------------------|
| **PostToolUse event** | Triggers after Claude writes a file |
| **Hook script** (`~/.claude/hooks/`) | Your `qa-check.sh` quality validator |
| **settings.json config** | Maps the event to your hook |
| **Exit codes** | Non-zero blocks the action (for PreToolUse) |
| **Matcher** | Only triggers for `Write` tool, not all tools |

## Success Criteria

- [ ] All 20 outputs are evaluated with pass/fail and reasoning
- [ ] A QA report exists identifying patterns and recommendations
- [ ] `~/.claude/hooks/qa-check.sh` exists and is executable
- [ ] `settings.json` has the hook configured for PostToolUse:Write
- [ ] The hook runs automatically when Claude writes a file

## What You Learned

**Hooks are quality gates that run without you thinking about them.** Instead of manually checking every AI output, you encode your quality criteria into a hook that fires automatically. This is the difference between "checking quality when you remember" and "quality is always checked."
