# Exercise 4: Build a Taxonomy from Chaos

**Time:** 40 minutes | **Level:** Intermediate
**Module:** [08-checkpoints](../../08-checkpoints/) — Safe experimentation with rewind
**Skill:** Using checkpoints to try different approaches, compare them, and rewind to the best one

## Objective

You will learn how to use Claude Code's **checkpoint** feature to safely experiment with multiple approaches to the same problem. Checkpoints let you try something, rewind if it does not work, and try a different direction — without losing any earlier work. This is essential for any task where the "right answer" is not obvious upfront.

## Scenario

You are a Product Manager at **Orbit Task Manager**, a fictional project management tool. Your team has collected 200 product feedback entries from app store reviews, support tickets, in-app surveys, and feature request forms. The feedback is messy and unstructured — some entries are bug reports, some are praise, some are feature requests, and some are complaints.

Your VP of Product wants you to turn this chaos into an **organized taxonomy** so the team can prioritize the product roadmap. But there is no single "right" way to categorize this feedback — different grouping strategies reveal different insights. You will use checkpoints to try 3 approaches and pick the best one.

## What You Have

A CSV file at `data/raw_entries.csv` with 200 feedback entries. Each row has:
- **feedback_id** — unique identifier
- **feedback_text** — the actual feedback (free text, messy, inconsistent)
- **source** — where it came from (app_store_review, support_ticket, in_app_survey, feature_request_form)
- **date_submitted** — when it was submitted

## Setup

This exercise uses data files included in the course repository. If you haven't already, clone the repo and navigate to this exercise:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
cd ~/Desktop/claude-learning/11-exercises/04-taxonomy-from-chaos
```

If you already cloned the repo, just navigate to the exercise folder:

```bash
cd ~/Desktop/claude-learning/11-exercises/04-taxonomy-from-chaos
```

## Step-by-Step Instructions

### Part 1: Explore the data (10 minutes)

**Step 1.** Open Claude Code in the exercise folder and ask it to read and summarize the data:

```
Read data/raw_entries.csv and give me a summary:
- How many entries are there?
- What sources are represented and how many from each?
- What are the main themes you see?
- How messy is this data — are there duplicates or near-duplicates?
```

Take a moment to review the summary. This gives you a baseline understanding before you start organizing.

### Part 2: Try 3 approaches using checkpoints (20 minutes)

This is where checkpoints shine. You will try three different ways to categorize the feedback, and you can rewind between each one.

**Step 2.** Try Approach A — categorize by **feedback type**:

```
Propose a taxonomy that groups this feedback by type of feedback:
bug reports, feature requests, praise, complaints, and questions.
Map every entry to one category.
Save the result as taxonomy_by_type.md with a summary table
showing how many entries fall into each category.
```

**Step 3.** Before trying the next approach, note that Claude Code has automatically created a checkpoint. You can always rewind to this point later.

> Tip: You can rewind by pressing `Esc` twice, or by typing `/rewind` to see a list of checkpoints to jump back to.

**Step 4.** Try Approach B — categorize by **product area**:

```
Now try a completely different approach. Group the feedback by
product area: mobile app, performance, integrations, UI/UX,
notifications, collaboration, reporting, and anything else that
emerges from the data. Map every entry to one area.
Save as taxonomy_by_area.md with the same summary format.
```

**Step 5.** Try Approach C — categorize by **customer action needed**:

```
One more approach. Group feedback by what action the team should take:
fix now (bugs/crashes), build next (most-requested features),
improve existing (enhancements to current features),
no action (praise/positive feedback), and investigate (unclear issues).
Map every entry. Save as taxonomy_by_action.md.
```

### Part 3: Compare and choose (10 minutes)

**Step 6.** Now ask Claude to compare all three approaches side by side:

```
Compare the 3 taxonomy approaches I just created:
- How many categories does each have?
- Which approach makes it easiest to decide what to build next?
- Which has the fewest "hard to classify" entries?
- If you were presenting to a VP of Product, which taxonomy
  would be most useful for roadmap planning?
Recommend the best approach and explain your reasoning.
```

**Step 7.** If you want to go back and refine one of the approaches, use `/rewind` to jump back to that checkpoint. For example, if Approach B was close but you want to adjust the categories, rewind to just before Approach B and try a modified version. This is the power of checkpoints — you do not lose work from earlier approaches.

**Step 8.** Once you have picked the best approach, ask Claude to create a final summary:

```
Using the best taxonomy approach, create a final report called
feedback_analysis.md that includes:
- The taxonomy with category names and descriptions
- A count of entries per category
- The top 3 most common pieces of feedback in each category
- A recommended priority order for the product team
```

## What Checkpoints Let You Do Here

| Checkpoint Concept | How You Used It |
|---|---|
| **Automatic checkpoints** | Every prompt creates one — you have a checkpoint before each approach |
| **Rewind** (`/rewind` or Esc+Esc) | Jump back to try a different taxonomy without starting over |
| **Compare approaches** | Keep all 3 taxonomy files, look at them side by side |
| **Safe experimentation** | Try bold categorization strategies knowing you can always go back |

## Success Checklist

- [ ] You explored the data and identified the key themes
- [ ] You tried at least 2 different taxonomy approaches
- [ ] You used `/rewind` or checkpoints to navigate between approaches
- [ ] You compared approaches and chose the best one with reasoning
- [ ] A final `feedback_analysis.md` report exists with prioritized categories

## What You Learned

Checkpoints let you treat analysis like branching paths — try Approach A, checkpoint, try Approach B, compare, keep the best. Without checkpoints, you would have to manually undo work or restart the conversation entirely. Any time you face a problem with multiple possible solutions, checkpoints let you explore freely without risk.
