# Exercise 8: Prioritize from Chaos

**Time:** 40 minutes | **Level:** Advanced
**Module:** [09-advanced-features](../../09-advanced-features/) -- Plan mode for complex workflows
**Skill:** Using Plan Mode to design a scoring framework, then executing it

## Objective

You will learn how to use **Plan Mode** to build a prioritization framework for a large set of unstructured ideas. Instead of jumping straight into scoring, you will first design the *system* for scoring -- then let Claude apply it consistently across all 60 items.

This is a skill that PMs, strategists, and team leads use constantly: turning a messy backlog into a clear, defensible priority list.

## Scenario

You are a Product Manager at **Orbit Task Manager**, a fictional project management tool for mid-size teams. Over the past month, you collected feedback from across the company -- sales, engineering, customer success, marketing, and finance. The result: 60 raw ideas sitting in a spreadsheet. Some are detailed requests, some are one-line wishes, some are in Spanish (Orbit has a team in Madrid). None of them are scored, categorized, or prioritized.

Your VP of Product asked you to present a prioritized roadmap recommendation by Friday. You need to go from chaos to a clear, defensible list.

The raw data is in `data/raw_ideas.csv`.

## What You Will Learn

- How to use Plan Mode to design a framework before applying it
- How to refine a plan collaboratively with Claude
- How to go from unstructured input to scored, ranked output
- Why planning the approach first prevents wasted rework

## Step-by-Step Instructions

### Part 1: Explore the data

1. Open Claude Code in this exercise folder.
2. Ask Claude to read the data and give you a quick summary:

   ```
   Read data/raw_ideas.csv and give me a quick overview:
   - How many items?
   - Who submitted them and from which departments?
   - What languages are represented?
   - Any obvious duplicates or themes?
   ```

### Part 2: Plan the prioritization framework

3. **Enter Plan Mode** by pressing `Shift+Tab` twice (or type `/plan`).

4. Ask Claude to design the approach:

   ```
   I need to prioritize these 60 ideas for a roadmap presentation.
   Before doing anything, plan the approach:

   - What categories or themes emerge from the data?
   - Propose a scoring framework -- what dimensions should we score on?
     What scale? What weights?
   - How should we handle duplicates and near-duplicates?
   - What should the final deliverable look like?

   Don't execute yet. Just show me the plan.
   ```

5. **Refine the plan.** This is where your judgment matters. Push Claude toward a framework that fits your context:

   ```
   Good start. A few changes to the framework:
   - Use three scoring dimensions: Business Impact, User Impact, and Effort
   - Weight them: 40% Business Impact, 35% User Impact, 25% Effort
   - Score each dimension 1-5
   - For "Effort," a LOWER score means MORE effort (so high scores = easy wins)
   - Also tag each item with a category: Revenue, Retention, UX, Infrastructure, or Growth
   - Translate any non-English items to English during cleanup
   ```

6. Review Claude's revised plan. Make one more adjustment if needed, then confirm.

### Part 3: Execute the scoring

7. **Exit Plan Mode** and tell Claude to run the plan:

   ```
   Execute the plan now:
   1. Clean and translate all 60 items
   2. Merge duplicates (note which ones were merged)
   3. Categorize each item
   4. Score each item using the framework we designed
   5. Calculate weighted priority scores
   6. Sort by priority score, highest first
   Save the result as data/prioritized_ideas.csv
   ```

8. **Generate the executive summary.** Ask Claude:

   ```
   Write an executive summary as prioritization_report.md:
   - Top 10 items with their scores and a one-line justification for each
   - Quick Wins: high impact + low effort (top-right quadrant)
   - Big Bets: high impact + high effort (top-left quadrant)
   - Deprioritized: items to defer or cut, with reasoning
   - Include a simple text-based 2x2 matrix (Impact vs Effort)
   - End with "Framework Notes" explaining how items were scored
   ```

### Part 4: Iterate on the framework

9. If you disagree with how certain items scored, go back to Plan Mode to adjust the framework -- do not just manually change individual scores:

   ```
   /plan Some of the compliance and security items (like SSO and audit logs)
   are scoring too low. I think we need a fourth dimension: "Strategic
   Necessity" for items that are table-stakes for enterprise sales.
   How would adding this change the framework and the results?
   ```

10. Re-run the scoring with the updated framework and compare the results.

## Connection to Module 09 (Advanced Features)

| Advanced Feature | How You Used It |
|-----------------|----------------|
| **Plan Mode** | Designed the scoring framework before applying it |
| **Plan refinement** | Adjusted dimensions, weights, and categories |
| **Plan-to-execution** | Applied the framework consistently to all 60 items |
| **Iterative planning** | Went back to Plan Mode to adjust when results felt off |

## Success Criteria

- [ ] You used Plan Mode to design the prioritization framework first
- [ ] The plan was refined at least once before execution
- [ ] All 60 items are cleaned, categorized, and scored
- [ ] Duplicates are identified and merged
- [ ] An executive summary identifies top priorities, quick wins, and items to cut
- [ ] The scoring framework is documented so others can understand and challenge it

## What You Learned

**Plan Mode prevents the most common mistake in prioritization: jumping to scoring before the framework is right.** If your scoring dimensions or weights are wrong, then all 60 scores are wrong. Five minutes designing the system in Plan Mode saves an hour of rework. This applies to any task with a design phase: scoring frameworks, analysis structures, report outlines, migration plans.
