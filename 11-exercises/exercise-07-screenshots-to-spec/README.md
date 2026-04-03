# Exercise 7: From Screenshots to Spec

**Time:** 30 minutes | **Level:** Intermediate
**Module:** [09-advanced-features](../../09-advanced-features/) — Plan mode + multimodal capabilities
**Skill:** Using plan mode to structure complex documents before writing them

## Scenario

Someone sent you 3-4 screenshots of a new feature, a competitor's product, or a design mockup. You need a structured spec document. You'll use **plan mode** to think through the structure first, then execute — the same two-phase approach that works for any complex deliverable.

## What You Have

Screenshots in the `screenshots/` folder. Drop in your own images (PNG, JPG, WEBP) — UI mockups, competitor screenshots, whiteboard photos, or dashboard captures.

> **No screenshots?** Take 3-4 screenshots of any app you use daily and drop them in the folder.

## Your Task

### Part 1: Use plan mode to structure the approach

1. **Enter plan mode** (press `Shift+Tab` twice, or type `/plan`). Then ask:
   ```
   I have screenshots in the screenshots/ folder. I need to turn them
   into a structured spec document. Before writing anything:
   - Look at each screenshot and describe what you see
   - Propose a document structure (what sections, what to cover)
   - Identify what's clear vs. what's ambiguous from the images
   - Flag questions I should answer before you write the full spec
   ```

2. **Review the plan.** Plan mode shows you Claude's approach before it acts. Adjust if needed:
   ```
   Good structure, but also include an "Edge Cases" section
   and a "Technical Considerations" section.
   ```

### Part 2: Execute the plan

3. **Exit plan mode** and let Claude write:
   ```
   Now write the full spec following your plan. Save as feature-spec.md
   ```

4. **Iterate.** Ask Claude to compare against the screenshots:
   ```
   Review what you wrote against the screenshots. Did you miss
   any UI elements, labels, or interactions visible in the images?
   ```

### Part 3: Try other advanced features

5. **Use extended thinking** (press `Alt+T` / `Option+T`) for the comparison step — it helps Claude think more deeply about complex visual analysis.

6. If your screenshots show a multi-step flow, ask Claude to produce a **Mermaid diagram** of the user journey.

## Connection to Module 09 (Advanced Features)

| Advanced Feature | How You Use It Here |
|-----------------|-------------------|
| **Plan mode** (`/plan` or Shift+Tab+Tab) | Structure the spec before writing it |
| **Multimodal input** | Claude reads and analyzes your screenshots |
| **Extended thinking** (Alt+T) | Deeper analysis of complex visual content |
| **Mermaid diagrams** | Visualize user flows extracted from screenshots |

## Other Document Types You Could Create

| Screenshots of... | Document to produce |
|-------------------|-------------------|
| A competitor's product | Competitive analysis |
| A whiteboard session | Meeting notes + action items |
| A dashboard | Process guide / training manual |
| Error screens | Bug report with reproduction steps |
| A settings page | Configuration documentation |

## Success Criteria

- [ ] You entered plan mode and reviewed the approach before writing
- [ ] Claude accurately described the content of each screenshot
- [ ] A structured document was generated referencing specific visual elements
- [ ] You iterated on the plan at least once before executing
- [ ] (Bonus) Extended thinking was used for deeper analysis

## What You Learned

**Plan mode is for any task where getting the structure right matters more than starting fast.** Specs, proposals, reports, analyses — plan first, execute second. Combined with Claude's ability to read images, this turns visual artifacts into structured documentation in minutes.
