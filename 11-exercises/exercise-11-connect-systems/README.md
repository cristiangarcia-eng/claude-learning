# Exercise 11: Connect Systems with MCP

**Time:** 30 minutes | **Level:** Advanced
**Module:** [05-mcp](../../05-mcp/) — Connecting Claude Code to external data
**Skill:** Setting up the Fetch MCP server and combining live web data with local files

## Objective

You will install the Fetch MCP server (the same one taught in the MCP lesson), use it to pull competitor information from the web, and combine that with your local Nike competitive analysis files to produce an updated report.

**What you will learn:**
- How to install and configure the Fetch MCP server
- How to verify an MCP connection is working
- How to use Fetch MCP to read live web pages
- How to combine external web data with local project files
- How project-level vs. user-level MCP configuration works

## Scenario

You are on the Nike competitive intelligence team. You have a local file with your most recent competitive analysis, but it is a few months old. Your manager wants an updated view that includes what competitors are currently promoting on their websites. You will use the Fetch MCP to pull live competitor data and merge it with your existing local analysis.

## What You Have

This exercise folder contains:
- `nike-competitive-snapshot.md` — your existing competitive analysis (local data)
- `competitor-urls.md` — a list of competitor pages to check

## Setup

1. Navigate to this exercise folder:
   ```
   cd 11-exercises/exercise-11-connect-systems
   ```
2. Read through both files so you understand what you are starting with.

## Your Task

### Part 1: Install the Fetch MCP server

This is the same setup from the [MCP lesson](../../05-mcp/). If you already have Fetch installed, skip to Part 2.

1. **Install Fetch MCP.** In your terminal (outside of Claude Code), run:
   ```bash
   claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
   ```

   This tells Claude Code: "I want you to be able to read web pages." The `-s user` flag makes this available across all your projects, not just this one.

2. **Restart Claude Code** so it picks up the new MCP server. Close your current session and open a new one.

### Part 2: Verify the connection

3. **Check that Fetch MCP is active.** Inside Claude Code, type:
   ```
   /mcp
   ```
   You should see `fetch` listed as a connected server. If it shows an error, go back to Step 1 and make sure the install command ran without issues.

4. **Run a quick test** to confirm it works:
   ```
   Use the Fetch MCP to read https://example.com and tell me
   what you find on the page.
   ```
   If Claude successfully reads the page and describes its content, your MCP is working.

### Part 3: Pull competitor data and combine with local analysis

5. **Fetch a competitor page and compare.** Ask Claude:
   ```
   Read our local competitive snapshot in nike-competitive-snapshot.md.
   Then use Fetch to go to nike.com/sustainability and read what Nike
   is currently saying about sustainability. Compare what their website
   says now vs. what our snapshot has. Note any differences or updates.
   Save the comparison as sustainability-update.md
   ```

6. **Check another competitor.** Try:
   ```
   Use Fetch to read adidas.com and look at their current running shoe
   lineup. Compare their positioning with the strengths and weaknesses
   in our nike-competitive-snapshot.md. What has changed since our last
   analysis? Save as competitor-update-adidas.md
   ```

7. **Create a combined updated report:**
   ```
   Using our original nike-competitive-snapshot.md plus the two update
   files you just created, write an updated competitive analysis that
   merges the local data with the fresh web data. Clearly mark which
   information came from our existing files vs. which came from live
   web fetches. Save as updated-competitive-analysis.md
   ```

### Part 4: Understand MCP configuration scopes

8. **Learn where your config lives.** Ask Claude:
   ```
   Explain the difference between project-level MCP config (.mcp.json
   in a project folder) and user-level config (~/.claude.json).
   Which one did we use for Fetch and why?
   ```

9. **Check your configuration:**
   ```bash
   claude mcp list
   ```
   This shows all your active MCP connections and whether they are project-level or user-level.

## Tips

- **Fetch cannot read every website.** Some sites block automated access. If a URL does not work, try a different page on the same site or a different competitor.
- **Web data is unstructured.** When Claude reads a web page, it gets all the text content. Ask Claude to focus on specific sections (pricing, product descriptions, sustainability claims) rather than summarizing the entire page.
- **Less is more with MCPs.** As covered in the lesson, keep only 2-3 MCP servers connected at a time. Fetch alone is enough for this exercise.

## Connection to Module 05 (MCP)

| MCP Concept | How You Use It Here |
|------------|-------------------|
| **`claude mcp add`** | Installing the Fetch MCP server |
| **`-s user` scope** | Making Fetch available across all projects |
| **`/mcp` status check** | Verifying your connection is active |
| **Fetch MCP** | Reading live competitor web pages |
| **Combining sources** | Merging web data with local files |
| **Connection scopes** | Understanding project vs. user configuration |

## Success Criteria

- [ ] Fetch MCP is installed and `/mcp` shows it as active
- [ ] You successfully used Fetch to read at least one live web page
- [ ] You combined web data with your local `nike-competitive-snapshot.md`
- [ ] You produced an updated competitive analysis with clearly sourced information
- [ ] You understand the difference between project-level and user-level MCP config

## What You Learned

MCP turns Claude Code from a tool that only knows about local files into one that can reach out to the web and other systems. The Fetch MCP is the simplest starting point — no API keys, no accounts, just the ability to read any web page. The real power comes from combining what Claude finds online with the project files you already have, giving you analysis that is both current and grounded in your existing work.
