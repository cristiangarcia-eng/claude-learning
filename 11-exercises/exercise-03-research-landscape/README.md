# Exercise 3: Research a Competitive Landscape

**Time:** 30 minutes | **Level:** Beginner
**Module:** [03-skills](../../03-skills/) -- Creating auto-invoked skills
**Skill:** Building a research skill that triggers automatically for competitive analysis

## Objective

You will learn how to build a **research skill** that auto-triggers whenever you or a teammate asks for a competitive analysis. Instead of re-explaining the research format every time, the skill handles it automatically.

By the end, you will understand:
- How to use Claude Code for structured market research
- How to package a research workflow as a reusable skill
- How auto-trigger keywords work in skill descriptions
- What good research output looks like (and how to enforce it with templates)

## Scenario

You are working on the Nike competitive analysis project. Your VP asks: "Can you put together a landscape of the athletic footwear market? I want to see where Nike stands and who is gaining ground." You will do the research with Claude Code, then build a skill so the next time anyone on your team needs a competitive landscape, the format and process are consistent.

## What You Have

An example of what good research output looks like at `examples/example-output.md`. Review it before you start -- this is the quality bar you are aiming for.

## Step-by-Step Instructions

### Step 1: Review the example output (3 minutes)

Read through `examples/example-output.md` to understand the target format:

```
Read examples/example-output.md and summarize the structure and
sections it uses.
```

Notice the consistent structure: executive summary, comparison table, deep dives, scoring matrix, and recommendation. This is the format your skill will enforce.

### Step 2: Do the research (10 minutes)

Ask Claude Code to research the athletic footwear market using the Nike project as context:

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

Save the full report as landscape-report.md
```

Review the output. Does it match the quality of the example? If not, ask Claude to improve specific sections.

### Step 3: Build the research skill (10 minutes)

Now package this into a reusable skill:

```
Create a skill called "competitive-landscape" at
.claude/skills/competitive-landscape/SKILL.md

The skill should:
- Auto-trigger when someone says "competitive analysis",
  "landscape review", "compare competitors", "market comparison",
  or "who are the competitors"
- Follow this exact process every time:
  1. Identify the focal company and competitors
  2. Build an overview comparison table
  3. Do a deep dive on the top 3-4 competitors
  4. Create a scoring matrix with weighted criteria
  5. End with a "So What?" recommendation section
- Output a structured markdown report
- Always ask clarifying questions if the industry or competitors
  are not specified

Use the SKILL.md format from the 03-skills module.
```

### Step 4: Create a report template (5 minutes)

Add a template so every report follows the same structure:

```
Create a report template at
.claude/skills/competitive-landscape/templates/report-template.md

It should have these sections with placeholder text:
- Executive Summary (3-5 bullet points)
- Competitor Overview Table (columns: Brand, Position, Target, Strength, Weakness)
- Deep Dive per competitor (2-3 paragraphs each)
- Scoring Matrix (criteria with 1-5 ratings)
- So What? (2-3 key takeaways and recommended actions)
```

### Step 5: Test the skill (2 minutes)

Start a fresh conversation (`/clear`) and ask naturally:

```
Can you do a competitive analysis of the athletic footwear market
for our Nike project?
```

The skill should trigger automatically and produce a report matching the template structure.

## Example Output

Here is what a strong research report looks like (see `examples/example-output.md` for the full version):

**Executive Summary section:**
- Nike holds the leading position at ~27% North America share but growth has stalled at 1.2% YoY
- Orbit Sports is the biggest threat: growing 6-11% across all regions with aggressive DTC expansion
- Apex Athletics owns the 18-25 demographic through lifestyle positioning and social-first marketing
- The industry is shifting from wholesale to DTC; brands slow to adapt will lose margin

**Scoring Matrix section:**

| Criteria (Weight) | Nike | Orbit Sports | Velocity Gear | Apex Athletics | Summit Run |
|-------------------|------|-------------|---------------|----------------|------------|
| Brand Strength (25%) | 5 | 3 | 3 | 4 | 3 |
| Product Innovation (20%) | 4 | 4 | 3 | 3 | 4 |
| Digital/DTC (20%) | 3 | 5 | 3 | 5 | 2 |
| Price Competitiveness (15%) | 2 | 4 | 4 | 3 | 1 |
| Growth Momentum (20%) | 2 | 5 | 3 | 5 | 2 |
| **Weighted Score** | **3.3** | **4.2** | **3.2** | **4.0** | **2.5** |

**So What? section:**
- Orbit Sports' combination of fast growth and strong DTC should be Nike's primary competitive focus
- Nike's wholesale dependence (41% of sales) is a structural disadvantage as the industry shifts to direct
- Apex Athletics' hold on young consumers is a long-term brand risk if Nike does not respond

## Connection to Module 03 (Skills)

| Skill Concept | How You Use It Here |
|--------------|-------------------|
| **SKILL.md format** | You create the skill definition with frontmatter |
| **Auto-invocation** | Keywords like "competitive analysis" trigger it |
| **Templates folder** | Enforces consistent report structure |
| **Reusability** | Works for any industry, not just athletic footwear |

## Success Criteria

- [ ] A `landscape-report.md` exists with structured competitive analysis
- [ ] `.claude/skills/competitive-landscape/SKILL.md` exists with proper format
- [ ] A report template exists at `.claude/skills/competitive-landscape/templates/report-template.md`
- [ ] The skill auto-triggers when you ask for a "competitive analysis"
- [ ] The report includes: overview table, deep dives, scoring matrix, and "So What?" section

## What You Learned

Research skills are powerful because competitive analysis is something teams do repeatedly -- new markets, new competitors, quarterly updates. By packaging the process as a skill with a template, you ensure every report is consistent, thorough, and fast. The scoring matrix is especially valuable because it forces structured thinking instead of vague opinions.
