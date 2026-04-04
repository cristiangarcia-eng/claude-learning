# Exercise 2: Tame a Messy Spreadsheet

**Time:** 30 minutes | **Level:** Beginner
**Module:** [03-skills](../../03-skills/) -- Creating reusable skills
**Skill:** Building a reusable skill that automates CSV cleanup

## Objective

You will learn how to create a **reusable Claude Code skill** by solving a real problem first (cleaning a messy CSV), then packaging your solution so it works automatically every time you encounter a similar mess.

By the end, you will understand:
- How to analyze and clean messy data with Claude Code
- How to turn a one-time workflow into a reusable skill
- The structure of a SKILL.md file
- How skills auto-trigger based on keywords

## Scenario

You are working on the Nike competitive analysis project. A colleague from the sales team just shared a spreadsheet of Q1 retail partner sales data. The problem: the data is a mess. Names are inconsistent, dates are all over the place, there are duplicates, and some entries mix in notes where numbers should be.

Your job: clean it up, then build a skill so the next messy spreadsheet takes seconds instead of an hour.

## What You Have

A CSV file at `data/raw_sales.csv` with ~40 rows of retail partner sales data. The problems include:

- **Inconsistent company names** ("Orbit Sports", "ORBIT SPORTS", "Orbit sports Inc.")
- **Mixed date formats** ("15/01/2025", "2025-01-15", "January 15", "Jan 15 2025")
- **Duplicate rows** (same partner, same date, same amount)
- **Inconsistent status values** ("shipped", "Shipped", "SHIPPED", "delivered", "complete")
- **Missing fields** (blank regions, missing sales reps)
- **Notes mixed into number fields** ("12500 (estimated)", "$8,200 USD")
- **Inconsistent currency formatting** ("$12,500", "12500", "$12.5K")

## Step-by-Step Instructions

### Step 1: Explore the mess (5 minutes)

Open Claude Code in this exercise folder and ask:

```
Read data/raw_sales.csv and give me a full diagnosis. How many issues
do you find? Categorize them by type (duplicates, formatting, missing
data, inconsistencies). Show me specific examples of each problem.
```

Review the diagnosis. Understanding the problems is half the work.

### Step 2: Clean the data (10 minutes)

Ask Claude Code to fix everything:

```
Clean up data/raw_sales.csv and save the result as data/clean_sales.csv.
Apply these rules:

1. Standardize company names to their canonical form:
   - "Orbit Sports" (not "ORBIT SPORTS" or "Orbit sports Inc.")
   - "Velocity Gear" (not "Velocity gear" or "VELOCITY GEAR LLC")
   - "Apex Athletics" (not "APEX ATHLETICS" or "Apex Athletics Corp")
   - "Summit Run" (not "summit run" or "Summit Run Co.")
   - "Pinnacle Fitness" (not "PINNACLE FITNESS" or "Pinnacle fitness")

2. Standardize all dates to YYYY-MM-DD format

3. Remove duplicate rows (same partner + same date + same amount)

4. Standardize status to lowercase: shipped, pending, cancelled, returned

5. Clean amount fields: remove dollar signs, commas, "K" notation,
   and notes in parentheses. All amounts should be plain numbers.

6. Fill missing regions based on the partner's other entries

7. Generate a cleanup report showing what changed (how many fixes
   per category)

Save the clean file as data/clean_sales.csv
```

Check the output. Open `data/clean_sales.csv` and verify it looks right.

### Step 3: Build the skill (10 minutes)

Now turn this into a reusable skill. Ask Claude Code:

```
Help me create a skill that automates CSV cleanup. Create the skill
at .claude/skills/clean-csv/SKILL.md with this structure:

The skill should:
- Auto-trigger when I say "clean this CSV", "fix this spreadsheet",
  "standardize this data", or "tidy up this file"
- Accept any CSV file, not just this specific one
- Follow the same cleanup rules: standardize names to title case,
  fix dates to YYYY-MM-DD, remove duplicates, normalize status fields,
  clean number formatting, fill gaps where possible
- Always output a cleanup report showing what changed
- Save the clean file with a _clean suffix (e.g., raw_sales_clean.csv)

Use the SKILL.md format from the 03-skills module.
```

### Step 4: Test the skill (5 minutes)

Start a fresh conversation (`/clear`) and test with natural language:

```
Can you clean up data/raw_sales.csv? It is pretty messy.
```

The skill should trigger automatically and apply the same cleanup process without you repeating all the rules.

## Connection to Module 03 (Skills)

| Skill Concept | How You Use It Here |
|--------------|-------------------|
| **SKILL.md format** | You create the skill definition file |
| **Auto-invocation** | Keywords like "clean" and "standardize" trigger it |
| **Reusability** | Works on any CSV, not just this one |
| **Cleanup report** | Consistent output showing what the skill did |

## Success Criteria

- [ ] `data/clean_sales.csv` exists with standardized, deduplicated data
- [ ] `.claude/skills/clean-csv/SKILL.md` exists with proper structure
- [ ] The skill auto-triggers when you ask to "clean" or "standardize" a CSV
- [ ] The skill works on any messy CSV, not just the sales data
- [ ] A cleanup report is generated showing what changed

## What You Learned

The real skill is not cleaning one spreadsheet -- it is recognizing that **any repeatable workflow can become a skill**. The next time a colleague sends messy data, your skill handles it in seconds. Look for patterns in your work: if you have explained the same process to Claude Code more than twice, it should be a skill.
