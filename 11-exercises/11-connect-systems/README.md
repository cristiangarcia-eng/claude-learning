# Exercise 11: Build a Competitive Intelligence System

**Time:** 50 minutes | **Level:** Advanced
**Module:** Capstone — Combines [02-memory](../../02-memory/), [03-skills](../../03-skills/), [05-mcp](../../05-mcp/), and [09-advanced-features](../../09-advanced-features/)
**Skill:** Combining Memory, Skills, MCP, and Plan Mode into a complete, reusable system

## Objective

This is the final exercise. You will build a **complete competitive intelligence system** that your team can reuse — not just a one-off report, but a working system that combines everything you learned in this course:

- **MCP** to pull live data from the web
- **Plan Mode** to design the analysis structure
- **Memory** to store project context that persists
- **A Skill** to make the entire workflow repeatable

By the end, someone on your team will be able to type "update the competitive analysis" and get a current, structured report — automatically.

## Scenario

You are on the Nike competitive intelligence team. You have a local file with your most recent competitive analysis, but it is a few months old. Your manager wants two things:
1. An updated report **now** (with live competitor data from the web)
2. A system your team can **reuse** quarterly without re-explaining the process

This exercise delivers both.

## What You Have

- `nike-competitive-snapshot.md` — your existing competitive analysis (local data, a few months old)
- `competitor-urls.md` — a list of competitor pages to check

## Step-by-Step Instructions

### Part 1: Set up MCP for web access (5 minutes)

If you completed the [MCP lesson](../../05-mcp/) and already have Fetch installed, skip to Part 2.

1. **Install Fetch MCP** in your terminal (outside of Claude Code):
   ```bash
   claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
   ```

2. **Restart Claude Code** so it picks up the new MCP server.

3. **Verify the connection.** Inside Claude Code, type `/mcp` — you should see `fetch` listed as active. Run a quick test:
   ```
   Use Fetch to read https://example.com and tell me what you find.
   ```

### Part 2: Set up project memory (5 minutes)

Before doing the analysis, set up the project context so Claude always knows what this project is about:

4. **Create a project CLAUDE.md:**
   ```
   Create a CLAUDE.md file in this folder with the following context:

   # Nike Competitive Intelligence

   ## Project Context
   - This is a competitive intelligence project for Nike's strategy team
   - We track: Nike, Adidas, Puma, New Balance, On Running
   - Focus areas: sustainability claims, DTC strategy, product launches, pricing
   - Reports are written for VP-level audience (concise, data-backed, actionable)
   - Always cite sources: "[from local snapshot]" vs "[from web, fetched DATE]"

   ## Quality Standards
   - No vague claims ("strong brand" is not analysis)
   - Every comparison needs specific evidence
   - Scoring matrices need 1-sentence justifications per score
   - "So What?" sections must have actionable recommendations, not observations
   ```

This memory will inform every future analysis in this project folder.

### Part 3: Plan the analysis structure (10 minutes)

5. **Enter Plan Mode** (`Shift+Tab` twice or `/plan`):

   ```
   /plan I need to produce an updated competitive analysis that combines
   our local data (nike-competitive-snapshot.md) with live web data.

   Plan the approach:
   - What should we fetch from each competitor's website?
     (Read competitor-urls.md for the list)
   - How should we structure the comparison? (Remember our quality
     standards in CLAUDE.md)
   - How do we clearly distinguish "old local data" from "fresh web data"
     in the final report?
   - What sections should the final report have?

   Don't execute yet. Show me the plan.
   ```

6. **Refine the plan.** Push for specifics:
   ```
   Good structure. Make sure the plan includes:
   - A "Data Freshness" header at the top showing what was fetched and when
   - A comparison table with columns for each competitor
   - A "Changes Since Last Report" section highlighting what moved
   - A "Risks & Opportunities" section at the end
   Confirm the updated plan.
   ```

7. Approve the plan and exit Plan Mode.

### Part 4: Execute — pull live data and build the report (15 minutes)

8. **Run the analysis:**

   ```
   Execute the plan:

   1. Read our local nike-competitive-snapshot.md
   2. Read competitor-urls.md for the URLs to check
   3. Use Fetch MCP to pull data from each competitor URL listed
      (if a URL fails, note it and move on — some sites block automated access)
   4. Combine the local snapshot data with the fresh web data
   5. Write the full updated report following the plan structure

   Save as updated-competitive-analysis.md

   Remember: cite every claim with its source — [local snapshot] or
   [web fetch, DATE].
   ```

9. **Review the output.** Read the report. Is it VP-quality? Check:
   - Are sources cited properly?
   - Are comparisons specific (numbers, not adjectives)?
   - Is the "Changes Since Last Report" section actually useful?

   If anything is weak, push Claude to improve it — you know the quality bar from Exercise 3.

### Part 5: Package as a reusable skill (10 minutes)

10. **Create the competitive intelligence skill:**

    ```
    Create a skill at .claude/skills/competitive-intel/SKILL.md that
    packages the entire workflow we just did:

    The skill should:
    - Auto-trigger on: "update competitive analysis", "competitor update",
      "competitive intelligence", "quarterly competitor review"
    - Follow this process:
      1. Read local CLAUDE.md for project context and quality standards
      2. Read the most recent competitive analysis file
      3. Read competitor-urls.md for URLs to fetch
      4. Use Fetch MCP to pull live data from competitor websites
      5. Combine local + web data into updated analysis
      6. Include "Data Freshness" header, comparison table,
         "Changes Since Last Report", and "Risks & Opportunities"
      7. Cite all sources
    - If Fetch MCP is not available, warn the user and proceed with
      local data only
    ```

11. **Test the skill.** Start a fresh conversation (`/clear`) and try:

    ```
    Update the competitive analysis for our Nike project.
    ```

    The skill should trigger, read the memory, fetch web data, and produce a structured report — all without you re-explaining the process.

### Part 6: Verify the full system (5 minutes)

12. **Check that all pieces are connected:**

    ```
    List all the components of our competitive intelligence system:
    - What memory/context files exist?
    - What skills are set up?
    - What MCP servers are available?
    - What data files does the system reference?
    Show me a summary of how they connect.
    ```

This is your finished system. A teammate who opens this project folder with Claude Code gets: project context (from Memory), a repeatable workflow (from the Skill), and web access (from MCP).

## Tips

- **Fetch cannot read every website.** Some sites block automated access. If a URL fails, skip it and note the gap. Real competitive intelligence always has gaps — acknowledging them is more professional than hiding them.
- **Web data is unstructured.** Ask Claude to focus on specific sections (pricing pages, sustainability claims, product launches) rather than summarizing entire homepages.
- **The skill should be resilient.** It should work even if Fetch is not installed (falling back to local data only) or if some URLs are unreachable.

## Connection to Course Modules

| Module | How You Use It Here |
|--------|-------------------|
| **02 — Memory** | CLAUDE.md stores project context and quality standards |
| **03 — Skills** | Skill packages the entire workflow for team reuse |
| **05 — MCP** | Fetch MCP pulls live competitor data from the web |
| **09 — Plan Mode** | Designed the analysis structure before executing |
| **03 — Iterative quality** (Exercise 3) | Applied quality bar: no vague claims, cited sources |

## Success Criteria

- [ ] Fetch MCP is installed and working
- [ ] `CLAUDE.md` exists with project context and quality standards
- [ ] You used Plan Mode to design the analysis structure before executing
- [ ] `updated-competitive-analysis.md` exists with cited sources (local vs. web)
- [ ] `.claude/skills/competitive-intel/SKILL.md` exists and auto-triggers
- [ ] The skill works in a fresh conversation without re-explaining the process
- [ ] You can explain how Memory, Skills, MCP, and Plan Mode work together

## What You Learned

**The individual features of Claude Code are useful. Combined, they are a system.** Memory gives Claude context without you repeating yourself. Skills make workflows repeatable without you re-explaining them. MCP connects Claude to live data. Plan Mode ensures the output is structured before execution starts. This exercise tied them all together into something a team can actually use — a competitive intelligence system that updates itself, maintains quality standards, and works for anyone who opens the project. That is the difference between using an AI tool and building an AI-powered workflow.
