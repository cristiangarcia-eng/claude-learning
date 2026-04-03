# Exercise 3: Research & Structure a Landscape

**Time:** 30 minutes | **Level:** Beginner
**Module:** [03-skills](../../03-skills/) — Creating auto-invoked skills
**Skill:** Building a skill that triggers automatically when you ask for research

## Scenario

Your manager asks: "Can you put together a quick comparison of the top project management tools?" You do the research with Claude Code — and then **build a research skill** that auto-triggers whenever anyone on the team asks for a competitive analysis or vendor comparison.

## What You Have

An example of what good output looks like at `examples/example-output.md`.

## Your Task

### Part 1: Do the research (warm-up)

1. **Ask Claude to research.** Pick any domain or use this default:
   ```
   Research the top 10 project management tools (Asana, Monday.com,
   Linear, Jira, ClickUp, Notion, etc.). For each, find: company name,
   founding year, pricing, target audience, key differentiator.
   Output as a markdown table. Then compare the top 3 in detail
   and give me a recommendation for a 50-person company.
   Save the full report as landscape-report.md
   ```

### Part 2: Build a research skill (the real exercise)

2. Now **turn this into an auto-triggered skill.** Create the skill structure:
   ```
   Help me create a skill called "research-landscape" following the
   format from the 03-skills module. It should:
   - Auto-trigger when I ask to "compare tools", "research vendors",
     "competitive analysis", or "landscape review"
   - Follow a consistent process: overview table → top 3 deep dive → recommendation
   - Output a structured markdown report every time
   - Include a scoring matrix with weighted criteria

   Create it at .claude/skills/research-landscape/SKILL.md
   ```

3. **Test the auto-trigger.** Start a new conversation and ask naturally:
   ```
   Can you do a competitive analysis of CRM tools?
   ```
   The skill should trigger automatically based on the keywords in your description.

### Part 3: Add supporting files

4. Following the skill structure from [03-skills](../../03-skills/), add:
   - A **template** at `.claude/skills/research-landscape/templates/report-template.md` — the default structure for every report
   - A **reference** with your preferred scoring criteria and weights

## Connection to Module 03 (Skills)

| Skill Concept | How You Use It Here |
|--------------|-------------------|
| **SKILL.md format** | You create the skill definition with frontmatter |
| **Auto-invocation** | Keyword-rich description triggers the skill automatically |
| **Templates folder** | Consistent output format for every research report |
| **disable-model-invocation** | You learn when to allow vs. block auto-triggering |

## Other Domains to Try

| Role | Research Topic |
|------|---------------|
| Sales | CRM tools (HubSpot vs Salesforce vs Pipedrive) |
| Finance | Expense management (Brex vs Ramp vs SAP Concur) |
| HR | ATS platforms (Greenhouse vs Lever vs Ashby) |
| Marketing | Email tools (Mailchimp vs Klaviyo vs Brevo) |
| Operations | Communication tools (Slack vs Teams vs Discord) |

## Success Criteria

- [ ] A landscape report exists as a markdown file
- [ ] `.claude/skills/research-landscape/SKILL.md` exists with proper frontmatter
- [ ] The skill auto-triggers when you ask for a "competitive analysis"
- [ ] A report template exists for consistent output
- [ ] The skill works for any domain, not just project management tools

## What You Learned

Skills are **the reusable version of slash commands that trigger automatically**. When you notice you're giving Claude the same instructions for a type of task (not just a specific task), that's a skill waiting to be built. The trigger keywords in the description are what make it magic.
