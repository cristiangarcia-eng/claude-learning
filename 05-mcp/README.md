# MCP
**Give Claude access to Gmail, Notion, Slack, and every tool where your real work happens — with one command.**

Laura runs sales at a B2B SaaS startup in Madrid. One morning she asked Claude: *"Draft a follow-up to Carlos at Acme based on the thread we had last week."* Claude replied: *"I don't have access to your Gmail."*

For two weeks, Laura spent 35 minutes every Monday pasting email threads into Claude by hand. Then a colleague showed her one command. Now, by 8:30am every Monday, Claude has already drafted her 4 follow-ups — referencing the last specific thing each prospect said — before Laura has even opened Slack.

That one command installed an **MCP**.

Memory gives Claude context. Skills give Claude workflows. Both are powerful, but both are limited to what already lives on your computer. Need an email thread from Gmail? A page from Notion? A message in Slack? A row in your CRM? Claude can't reach any of that on its own — it only sees your local files.

> **Without MCP, Claude is brilliant but blind to the outside world.**

MCP (Model Context Protocol) is how Claude Code connects to external systems. Think of MCP servers as "adapters" — each one gives Claude access to a specific tool or data source.

```
You  →  Claude Code  →  MCP Server  →  The outside world
                       (the adapter)
```

## The MCP ecosystem

There are MCP servers for most of the tools where your real work happens:

| Tool | What Claude can do |
|------|-------------------|
| **Gmail** | Search emails, read messages, draft replies |
| **Slack** | Read channels, send messages, search conversations |
| **Google Docs** | Read and edit documents |
| **Notion** | Browse pages, search your workspace |
| **Linear** | Track issues, manage projects |
| **Fetch** | Read any web page |

You add any MCP server with `claude mcp add`. Each tool may need an API key or authentication.

## Managing your connections

| Command | What it does |
|---------|-------------|
| `claude mcp list` | See all connected MCP servers |
| `claude mcp remove fetch` | Disconnect a server |
| `/mcp` (inside Claude Code) | Browse and manage connections interactively |

When you type `/mcp` inside Claude Code, you'll see a list of your connected servers and their status — something like this:

![Output of the /mcp command showing connected servers](images/mcp-list.png)

Selecting one that needs authentication — Gmail, for example — opens a detail view where you can authenticate or disable it:

![Gmail MCP server detail view with Authenticate and Disable options](images/mcp-gmail-authenticate.png)

Most MCPs that connect to third-party tools (Gmail, Slack, Notion…) require authentication. When you hit "Authenticate", Claude opens a consent screen in your browser so you can grant access — for Gmail it looks like this:

![Connect Claude to Gmail consent screen](images/mcp-gmail-oauth.png)

Once it's connected, you can just talk to Claude and it will use the MCP to act on your behalf — search your inbox, read threads, draft replies, and so on:

![Claude Code confirming it's connected to the Gmail MCP and listing available actions](images/mcp-gmail-connected.png)

## Important: MCPs consume your context window

Every MCP server you have connected takes up space in Claude's context window — even if you're not using it. Claude needs to "know" about each server's capabilities at the start of every conversation.

**This means:**

- If you have 10 MCP servers connected but only use 2, the other 8 are wasting context space
- Less context space = Claude forgets things faster and produces worse results
- More MCP servers = slower startup for each conversation

### How to manage this

**Only keep connected the MCPs you're actively using.** Remove the rest:

```bash
claude mcp list          # see what's connected
claude mcp remove slack  # disconnect what you're not using
```

You can always reconnect them later when you need them. Think of it like browser tabs — close the ones you're not using.

> **Rule of thumb:** 2-3 MCP servers connected at a time is ideal. More than 5 and you'll start noticing slower, less focused responses from Claude.

## Tips

- **Start with the tool where you work most** — Gmail, Slack, or Notion are usually the biggest unlock
- **Add one at a time** — connect a new MCP, test it, make sure it works before adding the next
- **Disconnect when done** — remove MCPs you're not actively using to save context space
- **Check with `/mcp`** — type this inside Claude Code to see what's connected and if it's working

