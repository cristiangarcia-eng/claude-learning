# Skills -- Reusable Capabilities for Claude

## What Are Skills?

Skills are reusable instructions you write once and use over and over. Instead of re-explaining the same task to Claude every conversation, you save the instructions as a Skill. Claude then follows those instructions automatically when relevant, or when you invoke the skill by name.

Think of a skill like a recipe card. You write down the steps once, and anyone on your team can use it to get consistent results.

## Why Use Skills?

| Benefit | Example |
|---------|---------|
| **Save time** | Stop re-typing "format my meeting notes like this" every session |
| **Stay consistent** | Every status report follows the same template |
| **Share with your team** | Everyone uses the same brand voice guidelines |
| **Claude activates them automatically** | Claude detects when a skill is relevant and uses it |

## Where Skills Live

Skills are files stored in a `.claude/skills/` folder. Each skill gets its own directory with a `SKILL.md` file inside.

| Location | Who Can Use It |
|----------|---------------|
| `~/.claude/skills/my-skill/SKILL.md` | Just you, across all projects |
| `.claude/skills/my-skill/SKILL.md` | Your whole team (shared via your project folder) |

## Creating Your First Skill

### Step 1: Create the Folder

Ask Claude to create it for you:

```
Create a skill called "meeting-notes" in my project's .claude/skills/ folder
```

Or do it manually -- create a file at `.claude/skills/meeting-notes/SKILL.md`.

### Step 2: Write the SKILL.md File

A skill file has two parts: a header section with metadata, and the instructions.

```
---
name: meeting-notes
description: Format raw meeting notes into a structured summary. Use when the user shares meeting notes or asks to organize notes.
---

# Meeting Notes Formatter

When the user provides meeting notes, organize them into this format:

## Meeting Summary
- Date:
- Attendees:
- Duration:

## Key Decisions
- List each decision made

## Action Items
- [ ] Task -- Owner -- Due date

## Open Questions
- List unresolved items for follow-up

## Notes
- Keep the original detail but improve clarity
- Flag any items that seem time-sensitive
```

### Step 3: Use It

You can use a skill in two ways:

- **Type the command**: `/meeting-notes` and then paste your notes
- **Just ask naturally**: "Here are my meeting notes from today, please organize them" -- Claude recognizes the request and activates the skill automatically

## SKILL.md Format Reference

The header section (between the `---` markers) tells Claude about the skill:

| Field | What It Does | Required |
|-------|-------------|----------|
| `name` | The command name (becomes `/name`) | Yes |
| `description` | Tells Claude what this skill does and when to use it | Yes |
| `disable-model-invocation` | Set to `true` if only you should trigger this skill, not Claude automatically | No |

The description is the most important field. Write it so Claude knows exactly when to activate the skill. Include keywords that match how people naturally ask for help.

**Weak description**: "Helps with content"

**Strong description**: "Review blog posts and marketing copy for brand voice consistency. Use when the user asks to check content, review copy, or ensure brand alignment."

## Practical Skill Examples

Here are four skills suited to non-developer roles. Each shows the complete SKILL.md content.

### Content Review Skill

```
---
name: content-review
description: Review written content for clarity, tone, and completeness. Use when the user asks to review, proofread, or check a document, email, or blog post.
---

Review the provided content against these criteria:
- **Clarity**: Main point obvious? Sentences concise? Jargon avoided?
- **Tone**: Appropriate for the audience? Consistent throughout?
- **Structure**: Logical flow? Headers and bullets for scannability?
- **Completeness**: Claims supported? Dates and names accurate?

Rate each category: Strong / Needs Work / Missing.
Provide specific suggestions with examples.
```

### Brand Voice Skill

```
---
name: brand-voice
description: Ensure content matches brand voice guidelines. Use when creating marketing copy, customer emails, or public-facing content.
---

Apply these voice rules to all content:
- Friendly but professional -- like a knowledgeable colleague
- Use "you" when addressing readers, active voice throughout
- Keep sentences under 20 words, lead with benefits
- Avoid: "leverage", "synergy", "disrupt", "best-in-class"
- Use sentence case for headings, one idea per paragraph
```

### Research Analyst Skill

```
---
name: research-analyst
description: Conduct structured research and produce an analysis report. Use when the user asks to research a topic, analyze a market, or gather information.
---

Follow this process:
1. Clarify scope: What question? What audience? What decisions?
2. Search available files and documents for relevant information
3. Produce the report with these sections:
   - Executive Summary (3-5 sentences)
   - Key Findings (numbered, with evidence)
   - Analysis (what findings mean in context)
   - Recommendations (specific next steps)
   - Information Gaps (what we could not determine)
```

### Meeting Notes Skill

```
---
name: meeting-notes
description: Format raw meeting notes into structured summaries. Use when the user shares meeting notes, transcripts, or asks to organize notes.
---

Organize notes into: Meeting Summary (date, attendees), Decisions Made,
Action Items (task / owner / due date / priority as a table), Discussion
Summary, and Parking Lot (deferred items).
Flag items with no owner as "TBD". Flag missing due dates. Keep factual.

## Managing Your Skills

**See what is available**: Type `/` in Claude Code and browse, or ask "What skills are available?" **Edit a skill**: Open the SKILL.md file in any text editor and restart Claude Code. **Share with your team**: Put skills in your project's `.claude/skills/` folder and commit them to version control.

## Tips

| Do | Avoid |
|----|-------|
| Write specific descriptions with trigger keywords | Vague descriptions like "helps with stuff" |
| Keep one skill focused on one task | Making a skill that tries to do everything |
| Include examples of expected output | Leaving Claude to guess the format |
| Test your skill with a real scenario | Assuming it works without trying it |
| Share useful skills with your team | Keeping helpful workflows to yourself |

## Troubleshooting

**Claude does not use my skill automatically**: The description probably does not match how you are asking. Add more keywords that match natural requests.

**Skill is not showing up**: Check that the file is at `.claude/skills/your-skill/SKILL.md` (not just `.claude/skills/SKILL.md`). Restart Claude Code.

**Skill triggers when I do not want it to**: Add `disable-model-invocation: true` to the header. Then only you can trigger it with `/skill-name`.

## Practice Exercise

> **[Exercise 3: Research & Structure a Landscape](../11-exercises/exercise-03-research-landscape/)** — Do a competitive analysis, then turn your research process into an auto-triggered skill. You will practice creating SKILL.md files with keyword-rich descriptions, templates, and auto-invocation.
>
> **Time:** 30 min | **Data:** Example output showing what good research looks like

## Related Guides

- [Slash Commands](../01-slash-commands/) -- Built-in shortcuts
- [Memory](../02-memory/) -- Persistent context with CLAUDE.md
- [Subagents](../04-subagents/) -- Specialized AI assistants

## Additional Resources

- [Official Skills Documentation](https://code.claude.com/docs/en/skills)

---

*Part of the [Claude How To](../) guide series*
