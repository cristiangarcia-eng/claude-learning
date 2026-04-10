# Exercise 6: Check AI Content Against Brand Guidelines

**Time:** 40 minutes | **Level:** Intermediate
**Module:** [06-hooks](../../06-hooks/) — Event-driven automation
**Skill:** Building a simple hook that automatically checks output quality

## Objective

You will learn how **hooks** work in Claude Code — small scripts that run automatically when certain events happen. Hooks are like quality gates: they check work automatically so you do not have to remember to check manually every time.

In this exercise, you will first evaluate content by hand, then build a simple hook that does the checking for you. Hooks are one of the more advanced features in Claude Code, but this exercise keeps things accessible by walking through each step.

## Scenario

You are a Marketing Coordinator at **Orbit Task Manager**, a fictional project management tool. Your team uses AI to draft social media posts, emails, and blog intros. Most of the time the drafts are good, but sometimes they violate your brand guidelines — the tone is too aggressive, there are too many emojis, forbidden phrases sneak in, or required elements are missing.

Your Brand Manager has asked you to set up a quality check so that every piece of AI-generated content gets reviewed against the guidelines before it goes out.

## What You Have

A JSON file at `data/ai_outputs.json` with 20 AI-generated content drafts. Each entry includes:
- **type** — what kind of content (social_media_post, email_subject_line, blog_intro, customer_email)
- **platform** — where it will be published
- **draft** — the actual content text
- **brand_guidelines** — the rules it should follow (tone, emoji limit, forbidden phrases, max length, required elements)

Some drafts follow the guidelines perfectly. Others have intentional violations for you to catch.

## Setup

> **This is the same workflow you'll use for real projects.** Create a project, copy in your data, and work from there.

**1. Create your project folder:**

Open Finder (Mac) or File Explorer (Windows) and go to `Desktop/Claude/projects/`. Create these folders:
- `evaluate-ai-output/`
  - `data/` (inside evaluate-ai-output)
  - `output/` (inside evaluate-ai-output)

**2. Copy the exercise data:**

Find the file `ai_outputs.json` in your course materials at `11-exercises/06-evaluate-ai-output/data/` and drag it into your new `data/` folder.

**3. Open in Cursor and start Claude:**

In Cursor: **File → Open Folder** → select your `evaluate-ai-output` folder. Open the terminal panel (**Cmd+J** / **Ctrl+J**) and type `claude`.

Your project looks like this:

```
evaluate-ai-output/
├── data/
│   └── ai_outputs.json
└── output/          ← Claude saves results here
```

## Step-by-Step Instructions

### Part 1: Manual evaluation (15 minutes)

Before automating anything, understand what "good" and "bad" look like.

**Step 1.** Ask Claude to read the data and create a checklist:

```
Read data/ai_outputs.json. For each entry, the brand_guidelines
field defines the rules. Create a quality checklist that covers
all the rule types across all entries: tone, emoji count,
forbidden phrases, length limits, and required elements.
```

**Step 2.** Ask Claude to evaluate every draft:

```
Evaluate all 20 content drafts against their brand guidelines.
For each one, give me:
- Pass or Fail
- Which specific rules were violated (if any)
- Severity: Critical (would damage the brand), Medium (noticeable
  issue), or Low (minor nitpick)

Show results as a markdown table. Save it as output/evaluation_results.md
```

**Step 3.** Ask Claude to find patterns:

```
Based on the evaluation:
- What's the overall pass rate?
- Which types of content fail most often?
- Which rule violations are most common?
- What recommendations would you give to the AI content
  generation team?
Add this analysis to output/evaluation_results.md
```

### Part 2: Build a quality-check hook (15 minutes)

Now automate the quality check as a hook. A hook is a script that Claude Code runs automatically when a specific event happens — in this case, after a file is written.

**Step 4.** Ask Claude to help you create the hook:

```
Help me create a hook that checks brand guideline compliance.
Following the format from the 06-hooks module, I want:

- A script that checks any written file for common brand issues:
  * More than 2 emojis
  * ALL CAPS words (shouting)
  * Forbidden marketing phrases like "URGENT", "ACT NOW",
    "crushing it", "game-changing", "limited time"
  * Unresolved placeholders like {{firstName}} or [First Name]
- The script should output warnings listing what it found
- It should be a simple shell script (no coding experience needed)

Create the hook script at hooks/brand-check.sh
and show me the settings.json configuration that would
make this run after Claude writes any file.
```

**Step 5.** Review the hook script Claude created. Ask it to explain each part:

```
Walk me through the brand-check.sh script line by line.
Explain what each part does in plain English.
I'm not a developer, so keep it simple.
```

**Step 6.** Test the hook by asking Claude to generate content that would trigger it:

```
Write a promotional social media post about Orbit's new feature
and save it as output/test_post.txt. Make it enthusiastic but don't
worry about brand guidelines — I want to see if the hook catches
any issues.
```

If the hook is configured correctly, it should automatically flag any brand guideline issues in the generated content.

### Part 3: Understand and improve (10 minutes)

**Step 7.** Reflect on what the hook does and where it fits:

```
Explain the difference between:
- A PreToolUse hook (runs BEFORE Claude does something)
- A PostToolUse hook (runs AFTER Claude does something)

For brand guideline checking, which makes more sense and why?
```

**Step 8.** Think about other hooks that could help your workflow. For example:
- A hook that checks if files being saved contain sensitive data (customer emails, phone numbers)
- A hook that ensures every markdown file has a title heading
- A hook that warns if a file is getting too long

You do not need to build these — just think about what automatic quality gates would help your work.

## What Hooks Let You Do Here

| Hook Concept | How You Used It |
|---|---|
| **Event trigger** | The hook fires when a file is written |
| **Hook script** | A shell script that checks for brand violations |
| **Automatic execution** | The check runs without you remembering to ask |
| **Warnings** | Issues are flagged immediately, not discovered later |
| **Settings configuration** | The hook is registered in settings.json |

## A Note on Hooks for Non-Developers

Hooks involve a small amount of scripting, but you do not need to write the scripts yourself — Claude Code will write them for you. Your job is to:
1. Know what you want checked (the brand guidelines)
2. Ask Claude to build the hook
3. Understand what the hook does at a high level
4. Test it and refine the rules

Think of hooks like email filters: you set the rules once, and they run automatically from then on.

## Success Checklist

- [ ] All 20 content drafts are evaluated with pass/fail and reasoning
- [ ] An `output/evaluation_results.md` report identifies patterns and recommendations
- [ ] A `hooks/brand-check.sh` script exists that checks for common violations
- [ ] You understand the settings.json configuration for the hook
- [ ] You can explain what the hook does in plain English

## What You Learned

Hooks are quality gates that run without you thinking about them. Instead of manually reviewing every piece of AI-generated content, you encode your quality criteria into a hook that fires automatically. This is the difference between "checking quality when you remember" and "quality is always checked." For marketing and content teams, this means brand consistency at scale.
