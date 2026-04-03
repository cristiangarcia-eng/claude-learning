# Subagents — When Claude Needs Help

## Skills vs Subagents: what's the difference?

You already know Skills — instructions that Claude follows directly, like a recipe card. Subagents are different: instead of following instructions himself, Claude **launches a separate assistant** to handle a specific task.

Here's the key distinction:

| | Skill | Subagent |
|---|---|---|
| **What it is** | Instructions Claude follows | A separate assistant Claude delegates to |
| **Analogy** | You give a colleague a recipe | You hand off a task to a specialist |
| **Context** | Works in your conversation | Works in its own separate space |
| **Best for** | Formatting, templates, consistent output | Research, analysis, big tasks that need focus |
| **Example** | "Format these notes as a report" | "Research everything about Nike's DTC strategy and come back with a briefing" |

### When to use which?

**Use a Skill when:**
- You want Claude to follow a specific format or template
- The task is straightforward and happens in the current conversation
- You want consistent output every time (meeting notes, brand voice, etc.)

**Use a Subagent when:**
- The task requires deep research or analysis
- You want it done in the background while you keep working
- The task is complex enough that it would clutter your main conversation
- You want a specialist perspective (competitor analyst, content reviewer, etc.)

Think of it this way: a Skill is like a recipe that Claude follows. A Subagent is like calling in a specialist who goes off, does the work, and comes back with a report.

## How subagents work

1. You ask Claude to do something complex
2. Claude delegates the task to a subagent
3. The subagent works in its own space — it won't clutter your conversation
4. The subagent comes back with its findings
5. Claude presents the results to you

You don't need to manage this. Claude handles the delegation automatically.

## Try it: create a competitor analyst

Let's create a subagent for your Nike project. In Claude Code, ask:

```
Create a subagent called "competitor-analyst" that analyzes
competitors from available documents. It should profile each
competitor (what they do, strengths, weaknesses, pricing),
map the landscape, and recommend positioning angles.
Save it to .claude/agents/
```

Claude will create the file for you. Now try using it:

> `Analyze Adidas and New Balance as competitors based on our files. Give me a comparison table and positioning recommendations.`

Claude will delegate this to your competitor-analyst subagent, which works through the files methodically and comes back with structured results.

### Run it in the background

For longer tasks, you can send the subagent to work in the background while you keep chatting with Claude. Press **Ctrl+B** while it's working, and Claude will notify you when it's done.

## Practical subagent ideas

| Subagent | What it does | When to use it |
|----------|-------------|----------------|
| **research-analyst** | Deep research on any topic, produces structured reports | "Research remote work trends for our Q3 planning" |
| **content-reviewer** | Reviews documents for clarity, tone, and accuracy | "Review this blog post before we publish" |
| **sales-proposal** | Structures proposals with client focus | "Help me write a proposal for the Nike account" |
| **weekly-reporter** | Summarizes project activity into a status update | "What happened on this project this week?" |

## Creating subagents

There are three ways:

1. **Ask Claude** (easiest): "Create a subagent called research-analyst that..."
2. **Use `/agents`**: Interactive menu to create, view, edit, and delete subagents
3. **Create the file manually**: Add a `.md` file to `.claude/agents/`

### Where they live

| Location | Who can use it |
|----------|---------------|
| `.claude/agents/` in your project | Your whole team |
| `~/.claude/agents/` in your home folder | Just you, across all projects |

## Tips

- **Start with one subagent** and see how it works before creating more
- **Give each agent a single focus** — a researcher, a reviewer, a proposal writer. Not one that does everything.
- **Use background mode** for heavy tasks so you can keep working
- **Skills for format, subagents for thinking** — if you need a template applied, use a Skill. If you need analysis done, use a Subagent.

**Next step**: [Control Claude from your phone with voice and remote sessions →](../12-voice-and-remote/)
