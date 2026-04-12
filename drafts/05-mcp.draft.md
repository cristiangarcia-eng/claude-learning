<!--
DRAFT — Surgical hero-rewrite of 05-mcp/README.md
Status: v4 — replaces earlier full rewrite with conservative approach
Persona: Laura (head of sales, Madrid B2B SaaS)
Approach: Only the intro (~13 lines) was adapted. Added Growth.Design
hero + subtitle + fixed blockquote (the original said "blind to the
outside world" which is factually wrong since Claude can reach the
public web — replaced with "blind to the tools where your real work
lives"). Everything from "## Try it: Install the Fetch MCP" onwards
is preserved verbatim from the current lesson.
Pending: Spanish mirror (README.es.md)
-->

# MCP
**Give Claude access to Gmail, Notion, Slack, and every tool where your real work happens — with one command.**

Laura, head of sales at a Madrid B2B SaaS startup, asked Claude:
*"Draft a follow-up to Carlos at Acme based on the thread we had last
week."* Claude replied: *"I don't have access to your Gmail."*

For 2 weeks, Laura spent 35 minutes every Monday pasting email threads
into Claude by hand. Then a colleague showed her one command. Now, by
8:30am every Monday, Claude has already drafted her 4 follow-ups —
referencing the last specific thing each prospect said — before Laura
has opened Slack.

The command was `claude mcp add gmail`.

> **Claude is brilliant — but blind to the tools where your real work lives. MCPs open those doors.**

MCP (Model Context Protocol) is how Claude Code connects to external systems. Think of MCP servers as "adapters" — each one gives Claude access to a specific tool or data source.

```
You  →  Claude Code  →  MCP Server  →  The outside world
                       (the adapter)
```

## Try it: Install the Fetch MCP

The best way to understand MCP is to use one. **Fetch** is the simplest MCP server — it lets Claude read any web page. No API key, no account, no setup.

### Step 1: Install it

In your Cursor terminal (outside of Claude Code), run:

```bash
claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
```

This tells Claude Code: "I want you to be able to read web pages."

### Step 2: Use it with your Nike project

Open Claude Code in your `nike-analysis` folder and try:

> `Use the Fetch MCP to go to adidas.com and analyze their running shoe lineup. Compare their positioning with Nike's strengths from our competitive analysis.`

Claude will use the Fetch MCP to read the Adidas website and compare it with your local Nike files. This is the power of MCP — combining live external data with your project.

> **Why say "Use the Fetch MCP"?** Claude can also search the web on its own (web search), but that's a different thing — it gives you search results, not the actual page content. When you want Claude to read a specific website and extract detailed information, you need to tell it to use the Fetch MCP explicitly. Otherwise it might just do a web search instead.

More things you can do with Fetch:

> `Use Fetch MCP to read https://www.nike.com/sustainability and add a sustainability section to our competitive analysis based on what you find`

> `Use Fetch to check what New Balance is doing on newbalance.com and update the threats section`

## The MCP ecosystem

Fetch is just the beginning. There are MCP servers for most business tools:

| Tool | What Claude can do |
|------|-------------------|
| **Fetch** | Read any web page |
| **Slack** | Read channels, send messages, search conversations |
| **Google Docs** | Read and edit documents |
| **Notion** | Browse pages, search your workspace |
| **Linear** | Track issues, manage projects |
| **Gmail** | Search emails, read messages, draft replies |

You add any MCP server the same way — with `claude mcp add`. Each tool may need an API key or authentication.

## Managing your connections

| Command | What it does |
|---------|-------------|
| `claude mcp list` | See all connected MCP servers |
| `claude mcp remove fetch` | Disconnect a server |
| `/mcp` (inside Claude Code) | Browse and manage connections interactively |

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

- **Start with Fetch** — it's free, requires nothing, and is immediately useful
- **Add one at a time** — connect a new MCP, test it, make sure it works before adding the next
- **Disconnect when done** — remove MCPs you're not actively using to save context space
- **Check with `/mcp`** — type this inside Claude Code to see what's connected and if it's working
