# Exercise 7: Rough Notes to Structured Spec

**Time:** 30 minutes | **Level:** Advanced
**Module:** [09-advanced-features](../../09-advanced-features/) -- Plan mode
**Skill:** Using Plan Mode to structure a complex document before writing it

## Objective

You will learn how to use **Plan Mode** in Claude Code to turn messy, unstructured notes into a polished product spec. Plan Mode lets you collaborate with Claude on the *approach* before it starts writing -- so you get the right structure, not just fast output.

This is a critical skill for PMs, designers, and anyone who needs to produce structured documents from rough inputs.

## Scenario

You are a Product Manager at **Orbit**, a fictional task management company. Your team just ran a brainstorm session for a new feature called **"Focus Blocks"** -- a time-blocking feature that lets users schedule deep-work sessions and automatically snooze notifications. You scribbled rough notes during the meeting and now need to turn them into a proper spec that engineering, design, and leadership can review.

Your rough notes are in the file `notes/brainstorm-notes.txt`.

## What You Will Learn

- How to activate Plan Mode and why it matters for complex documents
- How to review and refine Claude's plan before it starts writing
- How to move from plan to execution in a controlled way
- When Plan Mode is more effective than jumping straight to a prompt

## Step-by-Step Instructions

### Part 1: Review the rough notes

1. Open Claude Code in this exercise folder.
2. Skim the file `notes/brainstorm-notes.txt` to understand what you are working with. These are messy, real-world notes -- incomplete sentences, questions, and half-baked ideas.

### Part 2: Activate Plan Mode and create the plan

3. **Enter Plan Mode** by pressing `Shift+Tab` twice (or type `/plan`). You will see the mode indicator change.

4. Give Claude this prompt:

   ```
   I have rough brainstorm notes in notes/brainstorm-notes.txt for a new
   feature called "Focus Blocks" in our task management app. I need to
   turn these into a structured product spec.

   Before writing anything:
   - Read the notes carefully
   - Propose a document structure (sections, order, what to cover)
   - Identify what is clear vs. what is ambiguous or missing
   - Flag questions I should answer before you write the full spec
   ```

5. **Review Claude's plan.** This is the key moment. Claude will propose a structure and flag gaps. Read it carefully and push back:

   ```
   Good structure. A few adjustments:
   - Add a "User Stories" section with 3-4 stories for different personas
   - Add an "Open Questions" section at the end instead of inline
   - The spec audience is engineering AND design, so include both
     technical considerations and UX notes
   - Skip the competitive analysis section, we will do that separately
   ```

6. Claude will revise the plan. Review it once more. When you are satisfied, move on.

### Part 3: Execute the plan

7. **Exit Plan Mode** by pressing `Shift+Tab` twice (or type `/plan` again to toggle off). Then tell Claude:

   ```
   The plan looks good. Now write the full spec following your plan.
   Save it as output/focus-blocks-spec.md
   ```

8. **Iterate on the output.** Review the spec and ask Claude to improve specific sections:

   ```
   The "Success Metrics" section is too vague. Make the metrics more
   specific and measurable. For example, instead of "increased
   productivity" give me a concrete KPI we could track.
   ```

### Part 4: Reflect

9. Think about how this went compared to just asking Claude "write me a spec from these notes" without planning. What was different?

## Connection to Module 09 (Advanced Features)

| Advanced Feature | How You Used It |
|-----------------|----------------|
| **Plan Mode** (`/plan` or Shift+Tab+Tab) | Structured the spec before writing it |
| **Plan refinement** | Adjusted the plan based on your judgment |
| **Plan-to-execution flow** | Moved from approved plan to output |

## Success Criteria

- [ ] You activated Plan Mode and saw Claude propose a document structure
- [ ] You refined the plan at least once before telling Claude to write
- [ ] A structured spec was generated from the rough notes
- [ ] The spec includes sections like User Stories, Success Metrics, and Open Questions
- [ ] You iterated on at least one section after the first draft

## What You Learned

**Plan Mode is for any task where getting the structure right matters more than starting fast.** Specs, proposals, reports, analyses -- plan first, execute second. Five minutes shaping the approach saves you from getting a polished document with the wrong structure. This is especially valuable when your input is messy or incomplete.
