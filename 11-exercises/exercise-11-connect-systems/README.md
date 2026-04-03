# Exercise 11: Connect Systems (MCP)

**Time:** 30 minutes | **Level:** Advanced
**Module:** [05-mcp](../../05-mcp/) — Connecting Claude Code to external tools
**Skill:** Setting up an MCP server and using it in a real workflow

## Scenario

You copy-paste between 5-10 tools all day: email, project management, CRM, documents, spreadsheets. What if Claude Code could read from one system and write to another? That's MCP. You'll **set up a real MCP connection and build a cross-system workflow.**

## Your Task

### Part 1: Set up your first MCP server

Pick one based on what tools you use:

**Option A: File System (easiest — no API keys)**
```
Help me set up the filesystem MCP server so you can read and
write files in my ~/Documents folder. Walk me through the setup
following the MCP configuration format from the 05-mcp module.
```

**Option B: GitHub (if you have an account)**
```
Help me set up the GitHub MCP server so you can read my
repositories, issues, and pull requests. Walk me through getting
a token and adding it to .mcp.json
```

**Option C: Database (if you have one)**
```
Help me connect to my PostgreSQL/SQLite database via MCP so you
can query it directly. Show me the .mcp.json configuration.
```

### Part 2: Verify the connection

1. **Check it works** using what you learned in [05-mcp](../../05-mcp/):
   ```
   /mcp
   ```
   This shows all active MCP connections and their status.

2. **Run a simple test:**
   ```
   Using the [filesystem/GitHub/database] MCP connection,
   list what's available and read one item.
   ```

### Part 3: Build a cross-system workflow

3. **Create a real workflow that spans systems.** Examples:

   **Filesystem MCP:**
   ```
   Read all the markdown files in ~/Documents/meeting-notes/.
   Summarize each one in 2 sentences. Create a master index file
   called meeting-notes-index.md with links to each.
   ```

   **GitHub MCP:**
   ```
   Read all open issues with the "bug" label in my repo.
   Categorize them by severity and component. Create a bug
   triage report as a local markdown file.
   ```

   **Database MCP:**
   ```
   Query the customers table. Find all customers who signed up
   in the last 30 days but haven't logged in. Create a CSV of
   at-risk customers with their contact info.
   ```

### Part 4: Understand scopes and security

4. **Learn about connection scopes:**
   ```
   Explain the difference between project-level (.mcp.json) and
   user-level (~/.claude.json) MCP configs. When should I use each?
   ```

5. **Set up proper configuration** following the scoping rules from [05-mcp](../../05-mcp/) — project configs for team tools, user configs for personal tools.

## Connection to Module 05 (MCP)

| MCP Concept | How You Use It Here |
|------------|-------------------|
| **MCP configuration** (`.mcp.json`) | You create the config for your tool |
| **`claude mcp add`** | Adding a server from CLI |
| **`/mcp` status check** | Verifying your connection works |
| **Connection scopes** | Project vs. user-level configuration |
| **Cross-system workflows** | Read from one tool, write to another |
| **Credential management** | Storing API keys in env variables |

## Success Criteria

- [ ] You understand what MCP servers are and how they connect
- [ ] At least one MCP server is configured and responding
- [ ] `/mcp` shows the connection as active
- [ ] You've executed a workflow that reads from the external source
- [ ] You understand project vs. user scope for MCP configs

## Bonus Challenge

Set up **two** MCP servers and create a workflow that reads from one and writes to the other:
- Read GitHub issues → write a triage report to filesystem
- Query database → create a summary and email it via Gmail MCP
- Read Notion pages → sync to local markdown files

## What You Learned

**MCP turns Claude Code from a local tool into a system orchestrator.** Instead of being limited to files on your machine, Claude can read and write to any tool with an MCP server. The real power: describe what you want in one sentence, and Claude bridges the systems for you.
