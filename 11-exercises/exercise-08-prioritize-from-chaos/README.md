# Exercise 8: Prioritize from Chaos

**Time:** 45 minutes | **Level:** Advanced
**Module:** [09-advanced-features](../../09-advanced-features/) -- Plan mode for complex workflows
**Skill:** Using Plan Mode to design, fail, redesign, and succeed — the iteration loop

## Objective

Exercise 7 taught you to use Plan Mode to structure a document before writing it. This exercise teaches the **real power of Plan Mode: iteration when your first approach fails.**

You will design a scoring framework, apply it, discover it produces bad results, go back to Plan Mode to fix the framework, and re-apply it. This is how prioritization works in the real world — the first framework is never right.

This is a skill that PMs, strategists, and team leads use constantly: turning a messy backlog into a clear, defensible priority list.

## Scenario

You are a Product Manager at **Orbit Task Manager**, a fictional project management tool for mid-size teams. Over the past month, you collected feedback from across the company — sales, engineering, customer success, marketing, and finance. The result: 60 raw ideas sitting in a spreadsheet. Some are detailed requests, some are one-line wishes, some are in Spanish (Orbit has a team in Madrid). None of them are scored, categorized, or prioritized.

Your VP of Product asked you to present a prioritized roadmap recommendation by Friday. You need to go from chaos to a clear, defensible list.

The raw data is in `data/raw_ideas.csv`.

## What You Will Learn

- How Plan Mode's real value shows up on the **second pass**, not the first
- How to detect a flawed framework from its results (not from the framework itself)
- How to adjust a plan's design based on evidence, not gut feeling
- Why iterating on the system is better than hand-fixing individual scores

## Setup

This exercise uses data files included in the course repository. If you haven't already, clone the repo and navigate to this exercise:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
cd ~/Desktop/claude-learning/11-exercises/exercise-08-prioritize-from-chaos
```

If you already cloned the repo, just navigate to the exercise folder:

```bash
cd ~/Desktop/claude-learning/11-exercises/exercise-08-prioritize-from-chaos
```

## Step-by-Step Instructions

### Part 1: Explore the data (5 minutes)

1. Open Claude Code in this exercise folder.
2. Ask Claude to read the data and give you a quick summary:

   ```
   Read data/raw_ideas.csv and give me a quick overview:
   - How many items?
   - Who submitted them and from which departments?
   - What languages are represented?
   - Any obvious duplicates or themes?
   ```

Pay attention to the themes. You will see a mix: feature requests, performance improvements, compliance requirements (SSO, audit logs, GDPR), UX improvements, and integrations. **Remember this — it matters later.**

### Part 2: Design framework v1 (10 minutes)

3. **Enter Plan Mode** by pressing `Shift+Tab` twice (or type `/plan`).

4. Ask Claude to design a simple scoring approach:

   ```
   I need to prioritize these 60 ideas for a roadmap presentation.
   Before doing anything, plan the approach:

   - What categories or themes emerge from the data?
   - Propose a scoring framework with three dimensions:
     Business Impact, User Impact, and Effort
   - Weight them: 40% Business Impact, 35% User Impact, 25% Effort
   - Score each dimension 1-5
   - For "Effort," a LOWER score means MORE effort (so high scores = easy wins)
   - Also tag each item with a category: Revenue, Retention, UX, Infrastructure, or Growth
   - Translate any non-English items to English during cleanup

   Don't execute yet. Just show me the plan.
   ```

5. Review the plan briefly. It should look reasonable. **Approve it and exit Plan Mode.**

### Part 3: Execute v1 and find the flaw (10 minutes)

6. Tell Claude to apply the framework:

   ```
   Execute the plan now:
   1. Clean and translate all 60 items
   2. Merge duplicates (note which ones were merged)
   3. Categorize each item
   4. Score each item using the framework we designed
   5. Calculate weighted priority scores
   6. Sort by priority score, highest first
   Save the result as data/prioritized_v1.csv
   ```

7. **Now look at the results critically.** This is the key moment. Ask Claude:

   ```
   Show me the bottom 15 items in prioritized_v1.csv (lowest priority).
   Also show me where SSO, audit logs, GDPR compliance, and any
   security-related items landed. What are their scores?
   ```

   **You should notice the problem:** compliance and security items (SSO, audit logs, GDPR) scored low. They have low "User Impact" (only a few enterprise prospects need them) and low "Business Impact" in the traditional sense. But any PM knows: without SSO and audit logs, you cannot sell to enterprises at all. They are table-stakes, not nice-to-haves.

   **This is the flaw.** The framework has no way to express "this item is mandatory for a market segment." Three dimensions are not enough.

### Part 4: Redesign the framework in Plan Mode (10 minutes)

8. **Go back to Plan Mode.** This is the most important step:

   ```
   /plan The framework has a blind spot. Compliance and security items
   (SSO, audit logs, GDPR) scored near the bottom, but they are
   table-stakes for enterprise sales — without them, we lose deals.

   The three dimensions (Business Impact, User Impact, Effort) can't
   capture "strategic necessity" — items that don't excite users but
   block revenue.

   Redesign the framework:
   - Add a 4th dimension: "Strategic Necessity" (1 = nice-to-have,
     5 = blocks a market segment or regulatory requirement)
   - Re-weight: Business Impact 30%, User Impact 25%, Effort 20%,
     Strategic Necessity 25%
   - Define clear criteria for what makes a 4 or 5 on Strategic
     Necessity (enterprise blockers, regulatory, platform risk)
   - Show how this changes the scoring for SSO, audit logs, and GDPR
   ```

9. Review the revised framework. Does it make sense? Adjust if needed, then approve.

### Part 5: Execute v2 and compare (10 minutes)

10. Exit Plan Mode and re-score everything:

    ```
    Re-score all items using the updated 4-dimension framework.
    Save as data/prioritized_v2.csv

    Then write a comparison report as prioritization_report.md:
    - Top 10 items in v2 with scores and one-line justification each
    - Items that moved UP significantly from v1 to v2 (and why)
    - Items that moved DOWN significantly (and why)
    - Quick Wins: high impact + low effort
    - Big Bets: high impact + high effort
    - Deprioritized: items to defer, with reasoning
    - Include a text-based 2x2 matrix (Impact vs Effort)
    - End with "Framework Notes" explaining v1 vs v2 and why you changed
    ```

11. **Check the result.** SSO, audit logs, and GDPR should now be in the top third. The ranking should feel more defensible. If it does not, iterate once more — that is the whole point.

## Connection to Module 09 (Advanced Features)

| Advanced Feature | How You Used It |
|-----------------|----------------|
| **Plan Mode (v1)** | Designed initial scoring framework |
| **Execution gap** | Discovered the framework failed on compliance items |
| **Plan Mode (v2)** | Redesigned with 4th dimension based on evidence |
| **Plan comparison** | Compared v1 vs v2 results to validate the improvement |
| **Iterative planning** | The power is in the loop, not the first attempt |

## Success Criteria

- [ ] You used Plan Mode to design framework v1
- [ ] You executed v1 and `data/prioritized_v1.csv` exists
- [ ] You identified the specific flaw: compliance/security items scored too low
- [ ] You went back to Plan Mode to redesign with the 4th dimension (Strategic Necessity)
- [ ] You executed v2 and `data/prioritized_v2.csv` exists
- [ ] `prioritization_report.md` compares v1 vs v2 and documents why the framework changed
- [ ] The scoring framework is documented so others can understand and challenge it

## What You Learned

**Plan Mode's real power is not in the first plan — it is in the second one.** Anyone can design a reasonable-looking framework on paper. The hard part is discovering it fails when applied to real data, diagnosing *why* it fails (not just that it "feels wrong"), and redesigning it based on evidence. The compliance blind spot is a real trap that catches teams all the time: user-centric scoring frameworks systematically undervalue items that users never ask for but that enable entire market segments. This exercise trained you to use Plan Mode as a design loop, not a one-shot planner.
