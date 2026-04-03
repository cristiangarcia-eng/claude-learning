# Exercise 4: Build a Taxonomy from Chaos

**Time:** 40 minutes | **Level:** Intermediate
**Module:** [08-checkpoints](../../08-checkpoints/) — Safe experimentation with rewind
**Skill:** Using checkpoints to try different approaches and rewind the bad ones

## Scenario

You have a database field with 200 free-text entries — job titles, categories, tags — with zero consistency. You need to propose a clean taxonomy. But there's no single "right" answer: different grouping strategies have tradeoffs. You'll **use checkpoints to try multiple approaches, compare them, and keep the best one.**

## What You Have

A CSV at `data/raw_entries.csv` with ~200 entries: job titles in 5+ languages, abbreviations, duplicates, and inconsistent formatting.

## Your Task

### Part 1: Explore the data

1. **Get the overview:**
   ```
   Read data/raw_entries.csv and analyze:
   - How many unique entries? What languages?
   - What are the top patterns?
   - How many near-duplicates exist?
   Give me a summary of the mess.
   ```

### Part 2: Try multiple approaches using checkpoints

This is where checkpoints shine. You'll try 3 different taxonomy strategies and keep the best one.

2. **Approach A — Group by function.** Ask Claude:
   ```
   Propose a taxonomy grouped by job function
   (Engineering, Sales, Marketing, etc.).
   Map every entry to a canonical category.
   Save as taxonomy_by_function.md
   ```

3. **Checkpoint!** Before trying the next approach, note your checkpoint. You can rewind here if needed (press `Esc` twice or use `/rewind`).

4. **Approach B — Group by seniority.** Ask Claude:
   ```
   Now try a different approach: group by seniority level first
   (Junior, Mid, Senior, Lead, Director, VP, C-level),
   then by function within each level.
   Save as taxonomy_by_seniority.md
   ```

5. **Approach C — Group by department + normalize language.** Ask Claude:
   ```
   One more approach: first normalize everything to English,
   then group by department. Merge all language variants into
   a single canonical English title.
   Save as taxonomy_by_department.md
   ```

6. **Compare and choose.** Ask Claude:
   ```
   Compare the 3 taxonomy approaches I just tried:
   - How many categories does each have?
   - Which has the fewest "ambiguous" entries?
   - Which would be easiest to maintain over time?
   - Which covers the most entries cleanly?
   Recommend the best approach and explain why.
   ```

7. **Rewind if needed.** If you want to go back and refine approach B (for example), use `/rewind` to jump back to that checkpoint. This is the power of checkpoints — you don't lose work from earlier approaches.

### Part 3: Generate the final mapping

8. Ask Claude to create the final artifact:
   ```
   Using the best approach, write a Python script that:
   - Reads raw_entries.csv
   - Maps each entry to its canonical category
   - Outputs data/mapped_entries.csv with columns:
     original_text, canonical_category, group, frequency
   Run the script.
   ```

## Connection to Module 08 (Checkpoints)

| Checkpoint Concept | How You Use It Here |
|-------------------|-------------------|
| **Automatic checkpoints** | Every prompt creates one — you have a checkpoint before each approach |
| **Rewind** (`/rewind` or Esc+Esc) | Jump back to try a different approach |
| **Compare approaches** | Keep all 3 taxonomy files, compare side-by-side |
| **Safe experimentation** | Try bold approaches knowing you can always go back |

## Success Criteria

- [ ] You explored the data and identified the key issues
- [ ] You tried at least 2 different taxonomy approaches
- [ ] You used `/rewind` or checkpoints to navigate between approaches
- [ ] A final taxonomy is chosen with reasoning
- [ ] `data/mapped_entries.csv` maps every entry to a canonical category

## What You Learned

**Checkpoints let you treat analysis like branching in git** — try approach A, checkpoint, try approach B, compare, keep the best. Without checkpoints, you'd have to manually undo work or restart the conversation. This is essential for any task where the "right answer" isn't obvious upfront.
