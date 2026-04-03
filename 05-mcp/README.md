# MCP (Model Context Protocol) -- Connecting to Your Business Tools

## What is MCP?

MCP (Model Context Protocol) is how Claude Code connects to external tools and services you already use at work. Think of it as giving Claude a set of "adapters" so it can read your Slack messages, check your project boards, look up documents, and more -- all from one place.

Without MCP, Claude only knows what you tell it. With MCP, Claude can pull live data from your tools and take actions on your behalf.

## How MCP Works

The concept is simple:

1. You tell Claude Code which tools to connect to (called "MCP servers")
2. Claude Code connects to those tools
3. You can now ask Claude questions that involve your real data

```
You  -->  Claude Code  -->  MCP Server  -->  Your Tool (Slack, Notion, etc.)
                          (the adapter)
```

For example, after connecting Slack, you could say: "Summarize what happened in the #marketing channel today" -- and Claude will pull the actual messages and summarize them.

## The MCP Ecosystem

Claude Code can connect to many business tools through MCP:

| Tool | What Claude Can Do |
|------|-------------------|
| **Slack** | Read channels, send messages, search conversations |
| **Google Docs** | Read and edit documents, access Google Drive |
| **Notion** | Browse pages, search your workspace, read databases |
| **Asana** | View tasks, update status, create new tasks |
| **Jira** | Check issues, update tickets, view sprint boards |
| **Linear** | Track issues, manage projects, view team workload |
| **Google Calendar** | Check your schedule, view upcoming meetings |
| **Gmail** | Search emails, read messages, draft replies |

## Adding an MCP Server

You add tools to Claude Code using the `claude mcp add` command. Here are practical examples:

### Connecting to Notion

```bash
claude mcp add --transport http notion https://mcp.notion.com/mcp
```

After running this, Claude Code will walk you through authentication. Once connected, you can ask things like:

- "Find the Q3 marketing plan in Notion"
- "What tasks are assigned to me in Notion?"
- "Summarize the product roadmap page"

### Connecting to Slack

```bash
claude mcp add --transport http slack https://mcp.slack.com/mcp
```

Now you can ask:

- "What are the latest messages in #sales?"
- "Send a message to #team-updates saying the report is ready"
- "Search Slack for conversations about the product launch"

### Connecting to Linear

```bash
claude mcp add --transport http linear https://mcp.linear.app/mcp
```

Then ask:

- "What issues are assigned to me this sprint?"
- "Create a bug report for the login page issue"
- "Show me the status of project Alpha"

## Managing Your Connections

Once you have MCP servers set up, you can manage them easily:

| Command | What It Does |
|---------|-------------|
| `claude mcp list` | See all your connected tools |
| `claude mcp get notion` | Check details of a specific connection |
| `claude mcp remove notion` | Disconnect a tool |
| `/mcp` (inside Claude Code) | Browse and manage connections interactively |

## Checking Your Connections

Inside Claude Code, type `/mcp` to see all your connected tools and their status. This is the quickest way to verify everything is working.

## Using Multiple Tools Together

The real power of MCP is combining tools. For example:

```
You: "Check my calendar for tomorrow's meetings, find the related
      Notion docs for each one, and post a prep summary to #my-prep
      in Slack."
```

Claude will:
1. Read your calendar via Google Calendar MCP
2. Search Notion for relevant documents
3. Compose and send a summary to Slack

## Connection Scopes

Your MCP connections can be stored at different levels:

| Scope | Who Can Use It | How to Set |
|-------|---------------|------------|
| **Personal** (default) | Just you | `claude mcp add ...` |
| **Shared** | Your whole team | Add to `.mcp.json` in a shared folder |

For personal tools, the default is fine. For team-wide tools, ask your team lead about shared configurations.

## Tips for Getting Started

- **Start with one tool.** Connect the tool you use most (Slack, Notion, or your project tracker) and get comfortable before adding more.
- **Ask naturally.** You do not need special syntax. Just ask Claude what you need: "What are my open Jira tickets?" works perfectly.
- **Check the status.** If something is not working, type `/mcp` inside Claude Code to see if the connection is active.
- **Keep credentials safe.** When a tool asks for an API key or token, store it in an environment variable rather than typing it directly into config files.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "MCP server not found" | Re-run the `claude mcp add` command |
| "Authentication failed" | Check that your API key or token is still valid |
| Tool not responding | Type `/mcp` to check connection status |
| "Connection timeout" | Check your internet connection and try again |

## Practice Exercise

> **[Exercise 11: Connect Systems](../11-exercises/exercise-11-connect-systems/)** — Set up a real MCP server (filesystem, GitHub, or database) and build a cross-system workflow. You will practice MCP configuration, connection scopes, and credential management.
>
> **Time:** 30 min | **Setup:** Choose from filesystem (no API key), GitHub, or database

## Additional Resources

- [Official MCP Documentation](https://code.claude.com/docs/en/mcp)
- [Available MCP Servers](https://github.com/modelcontextprotocol/servers)

**Next step**: [Delegate complex tasks to specialized subagents →](../04-subagents/)

---

*Part of the [Claude How To](../) guide series*
