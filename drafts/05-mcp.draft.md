<!--
DRAFT — Growth.Design-inspired rewrite of 05-mcp/README.md
Status: approved in conversation, pending final approval to apply
Persona: Laura (head of sales, Madrid B2B SaaS)
Key moves applied: 1 (specific numbers), 2 (active verbs), 3 (timebox),
5 (header as answer), 6 (real brand names), 7 (binary opposition),
8 (result before method)
Iterations: v1 (Diego/Adidas), v2 (Laura/Gmail), v3 (compressed Fetch)
Pending: Spanish mirror (README.es.md)
-->

# MCP
**Give Claude access to Gmail, Notion, Slack, and every tool where your real work happens — with one command.**

Laura, head of sales at a Madrid B2B SaaS startup, asked Claude:
*"Draft a follow-up to Carlos at Acme based on the thread we had last
week about the pilot."*

Claude replied: *"I don't have access to your Gmail."*

For 2 weeks, Laura's Monday routine was 35 minutes of copy-pasting
email threads into Claude by hand, one at a time, before each
follow-up could be drafted. Then a colleague showed her **one
command**. Now, every Monday at 8:30am, Claude reads her 4 most-active
deal threads, drafts personalized follow-ups referencing the last
specific thing each prospect said, and leaves them in her drafts
folder — before Laura has opened Slack.

The command was `claude mcp add gmail`.

> **Claude is brilliant — but blind to the tools where your real work
> lives. MCPs open those doors.**

MCP (Model Context Protocol) is how Claude Code connects to external
systems. Each MCP server is an **adapter** — one connection, one
superpower.

```
You  →  Claude Code  →  MCP Server  →  The outside world
                       (the adapter)
```

Gmail adapter? Claude reads your threads and drafts replies. Notion
adapter? Claude searches your workspace and updates pages. Slack
adapter? Claude summarizes channels and posts messages. The adapter
stays plugged in until you unplug it.

## Try it in 60 seconds

The fastest way to feel how an MCP plugs in: install **Fetch**, the
only adapter with zero auth. It lets Claude read any public web page.

In your Cursor terminal, **outside** of Claude Code:

```bash
claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
```

Then open Claude Code in your `nike-analysis` folder and try:

> *"Use the Fetch MCP to read adidas.com's running shoes page and
> compare it with our Nike notes."*

That's it. You just watched Claude reach outside itself for the first
time. Now let's install the adapters you actually came for.

## The 5 adapters worth knowing

These are where the real time-savings live:

| Adapter | What Claude can do | The Monday-morning task it kills |
|---|---|---|
| **Gmail** | Read threads, search, draft replies | *"Draft follow-ups to every prospect who replied last week"* |
| **Notion** | Browse pages, search workspace, update docs | *"Find every meeting note mentioning Project Apollo and list open decisions"* |
| **Slack** | Read channels, search, post messages | *"Summarize #launch-feedback since Monday into 5 bullets"* |
| **Google Docs** | Read and edit documents | *"Update the roadmap doc with the 3 points we agreed in standup"* |
| **Linear / Jira** | Track issues, create tickets, move status | *"Open a ticket for each bug in this QA report, assign Ana"* |

Every adapter is added with the same pattern: `claude mcp add <name>`.
Gmail, Notion, Slack and Google Docs each need a one-time
authentication (2–5 minutes per adapter). You set it up once, then
forget about it — forever.

**Laura paid the 5-minute Gmail auth tax on a Friday afternoon. Every
Monday since, she's saved 35 minutes.** That's the real math of MCPs.

## Managing your adapters

| Command | What it does |
|---|---|
| `claude mcp list` | See every MCP server currently connected |
| `claude mcp remove gmail` | Unplug one |
| `/mcp` (inside Claude Code) | Browse and manage connections interactively |

## The cost nobody tells you about: your context window

Here's the part most tutorials skip. **Every MCP you have connected
takes up space in Claude's context window** — even when you're not
using it. Claude has to "know" about each adapter's capabilities at
the start of every conversation, so it can decide when to call them.

In plain English:

- **10 MCPs connected, 2 in use** = 8 adapters silently eating your memory budget
- **Less memory budget** = Claude forgets things faster, gives shorter answers, loses focus on long tasks
- **More MCPs** = slower conversation startup, every single time

### The rule of thumb

| Connected MCPs | What you'll feel |
|---|---|
| **1–3** | Crisp, fast, focused. Ideal. |
| **4–5** | Still fine for most work. |
| **6+** | Noticeably slower, shorter answers, more *"wait, what were we doing?"* moments. |

**Keep only what you're using today.** Treat MCPs like browser tabs —
close the ones you don't need. You can always add them back in 5
seconds (plus auth if it's a new tool):

```bash
claude mcp list          # see what's connected
claude mcp remove slack  # close the tab
```

## The 3 habits that separate MCP beginners from pros

| Do | Avoid |
|---|---|
| Install the adapter that kills your most painful weekly task first | Installing 6 adapters "just in case" on day one |
| Add **one at a time** — test it, confirm it works, then add the next | Running `/mcp` for the first time *after* everything is broken |
| **Disconnect** the ones you're not using today | Treating MCPs as decorations — each one has a memory cost |

> **The insider move:** Before a big multi-step task, run `/mcp` and
> remove every adapter you won't need for it. A clean MCP list is the
> difference between Claude *"remembering"* your whole task and Claude
> *"losing the thread"* halfway through.
