# Subagents -- Specialized AI Assistants

## What Are Subagents?

Subagents are specialized AI assistants that Claude can delegate tasks to. Each subagent has a specific focus area, works in its own separate space, and returns results back to the main conversation.

Think of it like having a team of specialists. Instead of one person doing everything, you hand off specific tasks to the right expert: a researcher digs into data, a content reviewer checks your writing, and a competitor analyst scans the market. Each works independently and reports back.

## Why Use Subagents?

| Benefit | What It Means for You |
|---------|-----------------------|
| **Specialized expertise** | Each subagent is tuned for a specific type of work |
| **Keeps your conversation clean** | Complex research happens in the background, not cluttering your chat |
| **Parallel work** | Multiple subagents can work on different parts of a project at the same time |
| **Reusable** | Set up a subagent once, use it across many projects |

## How Subagents Work

1. You ask Claude to do something (or Claude recognizes the need)
2. Claude delegates the task to the right subagent
3. The subagent works in its own context, separate from your conversation
4. The subagent returns its findings to Claude
5. Claude presents the results to you

You do not need to manage this process. Claude handles the delegation automatically based on the subagent descriptions you have set up.

## Where Subagent Files Live

| Location | Scope |
|----------|-------|
| `.claude/agents/` in your project | Available to your whole team |
| `~/.claude/agents/` in your home folder | Available to just you, across all projects |

## Creating a Subagent

A subagent is a single markdown file with a header and a description of the agent's role.

### Basic Format

```
---
name: your-agent-name
description: What this agent does and when to use it
---

Your agent's instructions go here. Describe its role, what it should
focus on, and how it should present its findings.
```

### Required Fields

| Field | What It Does |
|-------|-------------|
| `name` | The agent's identifier (lowercase, hyphens only) |
| `description` | Tells Claude when to use this agent. Include keywords that match natural requests |

### Optional Fields

| Field | What It Does |
|-------|-------------|
| `model` | Which Claude model to use: `haiku` (fast), `sonnet` (balanced), `opus` (thorough) |
| `memory` | Set to `user` or `project` so the agent remembers things between sessions |
| `background` | Set to `true` to run the agent in the background while you keep working |

## Practical Subagent Examples

Here are five agents suited to non-developer roles. Each shows the complete file content.

### Research Analyst (`.claude/agents/research-analyst.md`)

```
---
name: research-analyst
description: Conduct in-depth research and produce structured reports. Use when asked to research a topic, investigate a question, or prepare a briefing.
---

You are a research analyst. Search available files and documents,
then present findings as: Executive Summary (3-5 sentences),
Key Findings (numbered with evidence), Analysis, Recommendations,
and Sources/Gaps. Flag assumptions clearly.
```

### Content Reviewer (`.claude/agents/content-reviewer.md`)

```
---
name: content-reviewer
description: Review documents for quality, clarity, and consistency. Use when asked to review, proofread, or provide feedback on written materials.
---

Evaluate content on four dimensions: Clarity (main message clear,
jargon-free), Structure (logical flow, good headings), Accuracy
(facts consistent, claims supported), Impact (achieves purpose,
clear call to action). Rate each: Strong / Adequate / Needs Work.
```

### Design Feedback (`.claude/agents/design-feedback.md`)

```
---
name: design-feedback
description: Provide structured feedback on designs, mockups, and wireframes. Use when the user shares a design or asks for design critique.
---

Evaluate designs on: First Impressions, Usability (clear purpose,
findable elements, visual hierarchy), Consistency (colors, fonts,
spacing, brand alignment), Accessibility (readable text, target
sizes). Prioritize as Must Fix / Should Improve / Nice to Have.
Be specific -- say what to change and why.
```

### Sales Proposal (`.claude/agents/sales-proposal.md`)

```
---
name: sales-proposal
description: Help create and improve sales proposals and pitch materials. Use when working on proposals, pitch outlines, or client-facing sales documents.
---

Structure new proposals as: Client situation, Proposed solution,
Proof points, Investment (framed as value), Timeline, Next steps.
For reviews, check: leads with client problem (not product),
clear value prop, quantified benefits, justified pricing,
specific ask. Use "you/your" more than "we/our".
```

### Competitor Analysis (`.claude/agents/competitor-analysis.md`)

```
---
name: competitor-analysis
description: Analyze competitors and market positioning from available documents. Use when asked about competitors, market landscape, or comparative analysis.
---

Review available documents for competitor mentions. For each
competitor, profile: what they do, target audience, strengths,
weaknesses, pricing model. Then map the competitive landscape:
overlaps, differentiators, market gaps. Produce a comparison
table and recommend positioning angles. Flag assumptions.
```

## Using Subagents

**Automatic**: Claude delegates to the right subagent when your request matches its description. Just ask naturally -- "Research the trends in remote work tools for Q3 planning" -- and Claude uses the `research-analyst` agent if one exists.

**Explicit**: Ask for a specific agent by name: "Use the content-reviewer agent to check this blog post draft."

**Background**: Set `background: true` so the agent works while you continue your conversation. Press `Ctrl+B` to send a running agent to the background.

**Persistent memory**: Set `memory: user` or `memory: project` so an agent remembers findings across sessions.

## Setting Up Subagents

There are three ways to create a subagent:

1. **Ask Claude** (easiest): "Create a new subagent called weekly-reporter that summarizes project activity. Save it to .claude/agents/"
2. **Use /agents**: Type `/agents` for an interactive menu to create, view, edit, and delete subagents
3. **Create the file manually**: Add a `.md` file to `.claude/agents/` (team) or `~/.claude/agents/` (personal)

## Tips

| Do | Avoid |
|----|-------|
| Give each agent a clear, single focus | Making one agent that does everything |
| Write detailed descriptions with keywords | Vague descriptions Claude cannot match to requests |
| Start with 2-3 agents and add more as needed | Creating a dozen agents before testing any |
| Use `memory` for agents that build knowledge over time | Expecting agents to remember things without `memory` set |
| Share useful agents with your team via the project folder | Keeping helpful agents only in your personal folder |

## Troubleshooting

**Claude is not using my agent**: Check that the `description` field contains keywords matching how you ask for help. Try requesting the agent by name to verify it works.

**Agent is not showing up**: Confirm the file is in `.claude/agents/` (not `.claude/skills/`). Run `/agents` to see all available agents.

**Agent gives inconsistent results**: Add more specific instructions to the system prompt. Include examples of the output format you expect.

## Practice Exercise

> **[Exercise 5: Extract Insights from Conversations](../11-exercises/exercise-05-conversation-analysis/)** — Analyze 100 conversations, then create a reusable `data-analyst` subagent. You will practice agent files, tool restrictions, priorities, and structured output formats.
>
> **Time:** 45 min | **Data:** 100 conversations in JSON with patterns to discover

## Related Guides

- [Slash Commands](../01-slash-commands/) -- Built-in shortcuts
- [Skills](../03-skills/) -- Reusable task instructions
- [Memory](../02-memory/) -- Persistent context with CLAUDE.md

## Additional Resources

- [Official Subagents Documentation](https://code.claude.com/docs/en/sub-agents)

**Next step**: [Control how Claude thinks and works with Planning & Auto Mode →](../11-planning-mode/)

---

*Part of the [Claude How To](../) guide series*
