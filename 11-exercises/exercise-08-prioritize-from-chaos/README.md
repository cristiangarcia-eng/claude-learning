# Exercise 8: Prioritize from Chaos

**Time:** 40 minutes | **Level:** Intermediate
**Module:** [09-advanced-features](../../09-advanced-features/) — Plan mode for complex workflows
**Skill:** Using plan mode to design a scoring framework, then executing it

## Scenario

You've collected 60 ideas, requests, and complaints from across the company. No scoring, no categories, no priority — just chaos. You'll use **plan mode** to design the right prioritization framework first, then let Claude execute it.

## What You Have

A CSV at `data/raw_ideas.csv` with ~60 entries: free-text ideas from 10 people across 6 departments. Some have context, some are one-liners.

## Your Task

### Part 1: Plan the framework

1. **Enter plan mode** (`/plan` or Shift+Tab twice). Ask Claude:
   ```
   I have 60 unstructured ideas/requests in data/raw_ideas.csv.
   Before doing anything, plan the approach:
   - Read the data and identify what themes emerge
   - Propose a categorization scheme
   - Propose a scoring framework (what dimensions? what weights?)
   - What should the final deliverable look like?
   Don't execute yet — just show me the plan.
   ```

2. **Refine the plan.** This is where plan mode shines — you shape the approach before committing:
   ```
   I like the Impact/Effort framework but add a third dimension:
   Strategic Alignment (does this support our top 3 company goals?).
   Weight it 40% impact, 30% alignment, 30% effort.
   ```

### Part 2: Execute

3. **Exit plan mode and run.** Ask Claude:
   ```
   Now execute the plan:
   1. Clean and categorize all 60 items
   2. Merge duplicates
   3. Score each with the framework we designed
   4. Sort by priority score
   Save cleaned data as data/prioritized_ideas.csv
   ```

4. **Generate the executive summary.** Ask Claude:
   ```
   Write a one-page executive summary (prioritization_report.md):
   - Top 5 items with reasoning
   - Quick wins (high impact, low effort)
   - Big bets (high impact, high effort)
   - Items to defer or drop
   - A 2x2 matrix visualization
   ```

### Part 3: Iterate with plan mode

5. If you disagree with scores, go back to plan mode to adjust the framework — don't just change individual scores:
   ```
   /plan The engineering items are scoring too high. I think we should
   weight "cross-department impact" higher than "single-team benefit".
   How would that change the framework?
   ```

## Connection to Module 09 (Advanced Features)

| Advanced Feature | How You Use It Here |
|-----------------|-------------------|
| **Plan mode** | Design the scoring framework before executing |
| **Plan → Execute cycle** | Iterate on the approach, then commit |
| **Extended thinking** | Useful for complex scoring decisions |
| **Plan refinement** | Adjust the framework based on feedback |

## Success Criteria

- [ ] You used plan mode to design the prioritization framework first
- [ ] The plan was refined at least once before execution
- [ ] 60 items are cleaned, categorized, and scored
- [ ] Duplicates are merged
- [ ] An executive summary identifies top priorities and quick wins
- [ ] The scoring framework is documented and defensible

## What You Learned

**Plan mode prevents the most common mistake: jumping to execution before the approach is right.** For prioritization, getting the framework wrong means all 60 scores are wrong. Five minutes in plan mode saves an hour of re-work. This applies to any task with a design phase: architectures, strategies, analyses, migrations.
