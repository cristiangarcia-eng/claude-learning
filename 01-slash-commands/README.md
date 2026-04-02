# Slash Commands

## What Are Slash Commands?

Slash commands are shortcuts you type into Claude Code to control its behavior. Think of them like menu options -- you type `/` followed by a command name, and Claude performs a specific action.

You do not need any technical background to use them. If you can type a forward slash, you can use slash commands.

## Getting Started

Open Claude Code and type `/` to see a list of available commands. Start typing any letters after the slash to filter the list. Press Enter to run the one you want.

## Essential Commands for Everyday Use

These are the commands you will reach for most often.

| Command | What It Does |
|---------|-------------|
| `/help` | Shows a list of all available commands and what they do |
| `/clear` | Clears the current conversation and starts fresh |
| `/memory` | Opens your CLAUDE.md file where Claude stores notes it should remember |
| `/init` | Creates a CLAUDE.md file for a new project so Claude knows the context |
| `/config` | Opens your settings menu |
| `/compact` | Summarizes the conversation so far to free up space |
| `/model` | Lets you switch between different Claude models (Sonnet, Opus, Haiku) |

## Command-by-Command Walkthrough

### /help -- Your Starting Point

When in doubt, type `/help`. It shows every command available to you, including any custom ones your team has set up.

### /clear -- Start Fresh

Use `/clear` when you want to begin a new topic. It wipes the conversation so Claude is not confused by earlier context. Aliases: `/reset`, `/new`.

### /memory -- Teach Claude About Your Work

The `/memory` command opens a file called CLAUDE.md. Anything you write here, Claude reads at the start of every conversation. Good things to put in your memory file:

- Your role and what you work on
- Preferred writing style or tone
- Project names and what they mean
- Terminology specific to your company

**Example memory file:**
```
I am a product manager at Acme Corp.
Our main product is called "Launchpad" -- a project management tool.
When I ask for summaries, keep them under 200 words.
I prefer bullet points over paragraphs.
```

### /init -- Set Up a New Project

When you start working in a new folder, run `/init` to create a CLAUDE.md file. Claude will ask you questions about the project and generate a starter memory file.

### /config -- Adjust Your Settings

Opens the settings panel where you can change preferences like your default model, permissions, and display options.

### /compact -- Free Up Space

Long conversations use up Claude's context window (its working memory). When things get lengthy, run `/compact` to have Claude summarize the conversation so far. You can add focus instructions:

```
/compact focus on the Q3 marketing plan discussion
```

### /model -- Switch Models

Use `/model` to pick which version of Claude you want:

| Model | Best For |
|-------|----------|
| **Haiku** | Quick questions, simple lookups |
| **Sonnet** | Everyday tasks, good balance of speed and quality |
| **Opus** | Complex analysis, long documents, nuanced writing |

## More Useful Commands

Beyond the essentials, these commands are worth knowing.

| Command | What It Does |
|---------|-------------|
| `/cost` | Shows how many tokens you have used in this session |
| `/copy` | Copies Claude's last response to your clipboard |
| `/export` | Saves the conversation to a file |
| `/resume` | Picks up a previous conversation where you left off |
| `/voice` | Turns on push-to-talk so you can speak instead of type |
| `/rename` | Gives your session a name so you can find it later |
| `/branch` | Splits the conversation into a new session to explore a different direction |
| `/context` | Shows how much of Claude's working memory is used |
| `/schedule` | Creates a recurring task that runs on a schedule |
| `/effort` | Sets how much thinking Claude puts into responses (low, medium, high) |
| `/plan` | Asks Claude to create a plan before taking action |

## Practical Examples for Non-Developers

### Searching Through Files

You have a folder full of reports and need to find specific information:

```
Find all mentions of "Q3 revenue" in the files in this folder
```

Claude will search through your documents and pull out the relevant sections.

### Getting Summaries

You received a long PDF or document and need the key points:

```
Summarize the main findings from the attached report.
Focus on action items and deadlines.
```

Use `/compact focus on action items` if the conversation gets long.

### Organizing Information

You need to turn messy notes into something structured:

```
Here are my meeting notes from today. Please organize them into:
1. Decisions made
2. Action items with owners
3. Open questions
```

### Comparing Options

You are evaluating vendors or making a decision:

```
I have three vendor proposals in this folder.
Create a comparison table covering price, features, and timeline.
```

## Custom Commands (Skills)

Your team can create custom slash commands tailored to your workflows. These are called Skills and live in a `.claude/skills/` folder. For example, your team might set up:

- `/meeting-notes` -- Formats raw notes into a standard template
- `/weekly-update` -- Generates a status report from recent activity
- `/brand-check` -- Reviews content against your brand guidelines

To see what custom commands are available, type `/` and scroll through the list, or ask Claude:

```
What skills are available?
```

For details on creating your own, see the [Skills Guide](../03-skills/).

## Tips

| Do | Avoid |
|----|-------|
| Use `/clear` when switching topics | Letting conversations run too long without compacting |
| Add your preferences to `/memory` | Re-explaining your role every conversation |
| Use `/compact` when Claude seems to forget context | Assuming Claude remembers previous sessions |
| Try `/voice` for quick questions | Typing long passages when you could dictate them |
| Use `/export` to save important conversations | Losing a useful conversation by closing the window |

## Troubleshooting

**Claude does not recognize a command**: Make sure you typed the `/` at the beginning. Check spelling. Run `/help` to see the full list.

**Claude forgot what we were talking about**: The conversation may be too long. Run `/compact` to summarize and free up space.

**I want Claude to remember something permanently**: Use `/memory` to add it to your CLAUDE.md file. Anything there persists across sessions.

**Custom commands are missing**: Ask your team if they have set up skills in the project. Check that you are in the right project folder.

## Related Guides

- [Memory](../02-memory/) -- Persistent context with CLAUDE.md
- [Skills](../03-skills/) -- Creating reusable custom commands
- [Subagents](../04-subagents/) -- Specialized AI assistants for complex tasks

## Additional Resources

- [Official Interactive Mode Documentation](https://code.claude.com/docs/en/interactive-mode)
- [Official Skills Documentation](https://code.claude.com/docs/en/skills)

---

*Part of the [Claude How To](../) guide series*
