# Skills — Reusable Capabilities for Claude

## What Are Skills?

Skills are reusable instructions that Claude follows automatically. Instead of re-explaining the same task every conversation, a Skill saves the instructions once. Claude then uses them whenever they're relevant.

Think of a skill like a recipe card. You write down the steps once, and Claude follows them every time — producing consistent results.

| Benefit | Example |
|---------|---------|
| **Save time** | Stop re-typing "format my meeting notes like this" every session |
| **Stay consistent** | Every status report follows the same template |
| **Share with your team** | Everyone uses the same brand voice guidelines |
| **Claude activates them automatically** | Claude detects when a skill is relevant and uses it |

## Explore the Skills Marketplace

Before creating your own skills, browse what's already available. The community has built hundreds of ready-to-use skills:

**[skillsmp.com](https://skillsmp.com/)**

It's like an app store for Claude Code capabilities — browse by category, see the most popular ones, and install with one command.

### Skills worth trying

Here are a few to get you started:

| Skill | What it does | Great for |
|-------|-------------|-----------|
| **frontend-design** | Creates polished web interfaces and landing pages | PMs wanting quick mockups |
| **pdf-generator** | Creates and fills PDF documents | Sales proposals, reports |
| **data-analyst** | Analyzes datasets, finds patterns, and creates visualizations | Sales ops, finance, anyone with CSVs |
| **simplify** | Reviews code for quality and simplifies it | Anyone reviewing Claude's output |

### How to install a skill

1. Go to [skillsmp.com](https://skillsmp.com/) and find a skill you like
2. Copy the install command (shown on the skill's page)
3. Paste it in your Claude Code terminal
4. The skill is ready to use immediately

### Try it now

Install a skill from the marketplace and test it. For example, after installing **frontend-design**, you could ask Claude:

> `Create a simple landing page for a Nike DTC campaign targeting Gen Z runners`

Claude will use the skill's instructions to produce a polished result — much better than asking without the skill.

## Creating Your Own Skills

Once you've seen what skills look like, you can create your own. Skills are simple text files stored in `.claude/skills/`.

### Ask Claude to create one

The easiest way:

```
Create a skill called "meeting-notes" that formats raw meeting notes into:
1. Meeting Summary (date, attendees)
2. Key Decisions
3. Action Items (task, owner, due date)
4. Open Questions
```

Claude will create the file for you in the right location.

### Where skills live

| Location | Who can use it |
|----------|---------------|
| `~/.claude/skills/my-skill/SKILL.md` | Just you, across all projects |
| `.claude/skills/my-skill/SKILL.md` | Your whole team (shared via the project folder) |

### Using your skills

Once created, you can use a skill in two ways:

- **Type the command**: `/meeting-notes` and then paste your notes
- **Just ask naturally**: "Here are my meeting notes from today, please organize them" — Claude recognizes the request and activates the skill automatically

## Tips

| Do | Avoid |
|----|-------|
| Browse the marketplace before building from scratch | Reinventing skills that already exist |
| Keep one skill focused on one task | Making a skill that tries to do everything |
| Include examples of expected output in your skill | Leaving Claude to guess the format |
| Share useful skills with your team | Keeping helpful workflows to yourself |

**Next step**: [Connect Claude to live data with MCP →](../05-mcp/)
