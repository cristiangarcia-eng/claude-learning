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

### /memory -- Teach Claude About You and Your Projects

Type `/memory` and you'll see this menu:

![The /memory menu in Claude Code](/claude-memory-menu.png)

There are two types of memory, and understanding the difference is key:

**1. User memory** (`~/.claude/CLAUDE.md`) — This is about **you**. It follows you across every project. Put things here that Claude should always know about you:
- Your role (PM, designer, sales, etc.)
- Your preferred language and tone
- How you like responses formatted (bullet points, short paragraphs, etc.)

**2. Project memory** (`./CLAUDE.md`) — This is about **the project you're working on**. It lives inside the project folder and only applies there. Put things here like:
- What the project is about
- Key terminology or names
- Rules specific to this project

### Getting started with memory

Open Claude Code in your `nike-analysis` folder and try this:

1. Type `/memory` and select **User memory** (option 1)
2. Add a few lines about yourself, for example:

```
I am a product manager.
I prefer responses in Spanish.
Keep summaries under 200 words.
Use bullet points over long paragraphs.
```

3. Save and close the file (`Cmd+S`, then close the tab)

Now do the same for Project memory (option 2):

```
This is a competitive analysis project for Nike.
The main files are: competitive-analysis.md (the report),
sales-data.csv (quarterly revenue by region), and
notes.txt (meeting notes from the strategy review).
```

From now on, Claude will read both files at the start of every conversation — it will know who you are and what this project is about, without you having to explain again.

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

## Practice Exercise

> **[Exercise 2: Tame a Messy Spreadsheet](../11-exercises/exercise-02-messy-spreadsheet/)** — Clean a messy CSV with Claude Code, then turn your cleanup workflow into a reusable `/clean-csv` slash command. You will practice creating custom commands with proper frontmatter, descriptions, and allowed-tools.
>
> **Time:** 30 min | **Data:** 50-row CSV with mixed languages, duplicates, and formatting issues

## Related Guides

- [Memory](../02-memory/) -- Persistent context with CLAUDE.md
- [Skills](../03-skills/) -- Creating reusable custom commands
- [Subagents](../04-subagents/) -- Specialized AI assistants for complex tasks

## Additional Resources

- [Official Interactive Mode Documentation](https://code.claude.com/docs/en/interactive-mode)
- [Official Skills Documentation](https://code.claude.com/docs/en/skills)


---

*Part of the [Claude How To](../) guide series*
