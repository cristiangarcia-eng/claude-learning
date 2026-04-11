# Exercise 2: Research a Competitive Landscape

**Time:** 15 minutes | **Level:** Intermediate

## Objective

Exercise 2 taught you to package a **data cleanup** workflow as a skill. This exercise teaches something harder: how to produce **high-quality research** by iterating on Claude's output before you accept it.

Most people ask Claude a question and accept the first answer. You will learn to:
- Critique research output against a quality bar
- Identify shallow analysis and push for depth
- Run your research approach on a different industry to stress-test it
- *Then* package the proven workflow as a skill (the skill is the reward, not the goal)

## Scenario

Your VP asks: "Can you put together a landscape of the athletic footwear market? I want to see where Nike stands and who is gaining ground." You will produce a research report — but unlike most people, you will not accept the first draft.

## What You Have

A reference example showing what good research output looks like — `example-output.md`. This is not input data; it is your quality bar. You will ask Claude to read it in Part 1.

## Setup

> If you haven't downloaded the exercise materials yet, see the setup instructions in [Exercise 1](../02-messy-spreadsheet/).

Create a `research-landscape` folder inside `Desktop/Claude/projects/`. Copy the files from `02-research-landscape` in the downloaded materials into it. Then open the folder in Cursor (**File → Open Folder**) and start Claude Code in the terminal.

## Step-by-Step Instructions

### Part 1: Set the quality bar (3 minutes)

Read through `example-output.md`:

```
Read example-output.md and tell me: what makes this report
actually useful vs. generic? Point out specific things it does well.
```

Notice: the example has specific numbers (not "significant market share"), direct comparisons (not "each brand has strengths"), and a scoring matrix that forces ranked judgments. These are the marks of useful research vs. filler.

### Part 2: First draft — and critique it (12 minutes)

Ask Claude to research the landscape:

```
Research the athletic footwear competitive landscape for our Nike
analysis project. Compare Nike against these competitors:
Orbit Sports, Velocity Gear, Apex Athletics, and Summit Run.

For each brand, cover:
- Market positioning and target audience
- Key strengths and weaknesses
- Recent strategic moves (product launches, partnerships, channel shifts)
- Estimated market share range

Then create a scoring matrix rating each brand 1-5 on:
- Brand strength
- Product innovation
- Digital/DTC presence
- Price competitiveness
- Growth momentum

End with a "So What?" section: what should Nike's competitive strategy
team pay attention to?

Save the full report as landscape-report-v1.md
```

Now **critique the output yourself.** Read it critically. Then ask Claude to evaluate its own work:

```
Read landscape-report-v1.md and compare it against example-output.md.
Be brutally honest:
- Where is the analysis vague or generic? ("strong brand presence" means nothing)
- Where are specific numbers or evidence missing?
- Does the scoring matrix feel justified or arbitrary?
- Is the "So What?" section actionable or obvious?
List every weakness you find.
```

### Part 3: Improve the report (10 minutes)

Use the critique to push for a better version:

```
Rewrite the report as landscape-report-v2.md, fixing every weakness
you identified. Specifically:
- Replace vague claims with specific numbers or evidence
- Make each scoring matrix rating include a 1-sentence justification
- Ensure the "So What?" section has recommendations a VP could actually
  act on (not "Nike should innovate more" but specific strategic moves)
- Add a "Risks to Watch" subsection with 2-3 emerging threats
```

Compare v1 and v2. The difference should be obvious.

### Part 4: Stress-test on a different industry (8 minutes)

A good research approach works beyond one industry. Test it:

```
Using the exact same structure and quality standards from
landscape-report-v2.md, produce a competitive landscape for
the project management software market. Compare Asana, Monday.com,
ClickUp, Notion, and Linear. Save as landscape-report-pm-tools.md
```

Review the result. Does the structure transfer well? If the PM tools report is significantly weaker than the footwear one, your approach has a blind spot — the structure only works when Claude has strong training data about the domain.

### Part 5: Package as a skill (5 minutes)

Now that you have a **proven, tested** research process, package it:

```
Create a skill called "competitive-landscape" at
.claude/skills/competitive-landscape/SKILL.md

Base it on the actual process we followed (not the first attempt):
1. First draft with specific structure
2. Self-critique against quality bar (no vague claims, justified scores)
3. Revised draft addressing all weaknesses
4. Include a report template based on the structure from v2

Auto-trigger on: "competitive analysis", "landscape review",
"compare competitors", "market comparison"
```

## Example Output

Here is what a strong research report looks like (see `example-output.md` for the full version):

**Scoring Matrix with justifications (v2 quality):**

| Criteria (Weight) | Nike | Orbit Sports | Velocity Gear | Apex Athletics | Summit Run |
|-------------------|------|-------------|---------------|----------------|------------|
| Brand Strength (25%) | 5 — global icon, 96% awareness | 3 — growing but regional | 3 — known in running niche | 4 — cultural status with Gen Z | 3 — premium but small |
| Product Innovation (20%) | 4 — Flyknit, Air tech | 4 — aggressive material R&D | 3 — iterative, not breakthrough | 3 — lifestyle over performance | 4 — carbon plate pioneer |
| Digital/DTC (20%) | 3 — SNKRS app strong, wholesale heavy | 5 — 78% direct sales | 3 — growing DTC | 5 — born digital, no wholesale | 2 — retail dependent |
| Price Competitiveness (15%) | 2 — $150+ avg, premium only | 4 — $80-120 sweet spot | 4 — value positioning | 3 — $100-140 | 1 — $200+ ultra-premium |
| Growth Momentum (20%) | 2 — 1.2% YoY, stalling | 5 — 11% YoY, all regions | 3 — steady 3% | 5 — 8% YoY, viral growth | 2 — flat, niche ceiling |
| **Weighted Score** | **3.3** | **4.2** | **3.2** | **4.0** | **2.5** |

Notice: every score has a reason. This is the difference between useful analysis and a table of guesses.

## Connection to Module 03 (Skills)

| Skill Concept | How You Use It Here |
|--------------|-------------------|
| **Iterative quality** | You critique and improve before accepting output |
| **Stress-testing** | You verify the approach works on a different domain |
| **SKILL.md format** | You package a proven process, not a first attempt |
| **Auto-invocation** | Keywords like "competitive analysis" trigger the skill |
| **Templates** | The template encodes quality standards, not just structure |

## Success Criteria

- [ ] `landscape-report-v1.md` exists (first draft)
- [ ] You identified specific weaknesses in v1 (not "it's fine")
- [ ] `landscape-report-v2.md` exists with clear improvements over v1
- [ ] `landscape-report-pm-tools.md` exists (stress test on different industry)
- [ ] `.claude/skills/competitive-landscape/SKILL.md` exists and includes the critique step
- [ ] The skill auto-triggers when you ask for a "competitive analysis"

## What You Learned

**The biggest mistake with AI research is accepting the first output.** Claude's first draft is always plausible-sounding but often vague. The self-critique step — "where is this generic? where are numbers missing?" — is what separates useful research from filler. By stress-testing on a second industry, you proved the approach works broadly. The skill you built encodes this quality bar, so every future analysis starts from v2 quality, not v1.
