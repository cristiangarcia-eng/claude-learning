# Opening Claude Code

## The only command you need

To use Claude Code, you type exactly **one** thing:

```
claude
```

That's it. You type `claude`, press Enter, and start talking in plain Spanish or English. No programming, no technical knowledge, no memorizing commands.

This lesson shows you **where** to type it.

## Opening the terminal panel in Cursor

The "terminal" is just the **bottom panel** in Cursor. It's where Claude lives. Here's how to open it:

1. Open **Cursor**
2. Press **Cmd + J** (Mac) or **Ctrl + J** (Windows)
3. A panel appears at the bottom — that's the terminal
4. Type `claude` and press Enter

> **Think of the terminal panel like a chat window.** It just happens to be at the bottom of your editor instead of in a browser tab.

![Claude Code running in Cursor — the terminal panel at the bottom is where you talk to Claude](/claude-code-running.png)

## What you'll see

The first time, Claude will ask you to log in. Follow the prompts — it opens your browser to authenticate. After that, you'll see something like this:

```
╭──────────────────────────────────────────╮
│ ✻ Welcome to Claude Code!                │
│                                          │
│   /help for available commands           │
╰──────────────────────────────────────────╯

>
```

That `>` is where you type. Just write what you want in plain language:

> `summarize the files in this folder`

> `what does this project do?`

> `create a summary of the sales data`

## When something goes wrong

**The terminal shows an error you don't understand?**

Don't worry. Just select the error text, copy it, and paste it directly into Claude:

> `I got this error: [paste the error]. What does it mean and how do I fix it?`

Claude will explain what happened and walk you through the fix. You can also paste errors into [claude.ai](https://claude.ai) (the browser chat) or the [Desktop App](https://claude.com/download).

**Claude isn't starting?**

If you type `claude` and see "command not found", it means Claude Code isn't installed yet. Go to the [next lesson (Setting Up Claude Code)](../00b-quickstart/) to install it.

**The panel closed?**

Press **Cmd + J** (Mac) or **Ctrl + J** (Windows) again to reopen it.

## Useful keyboard shortcuts

| Shortcut | What it does |
|----------|-------------|
| **Cmd/Ctrl + J** | Open or close the terminal panel |
| **Esc** | Stop Claude mid-action |
| **Ctrl + C** | Cancel or exit Claude Code |
| **Up arrow** | Show your previous message |

## That's it — really

You don't need to learn "terminal commands." Claude handles navigating files, creating folders, and everything else behind the scenes. **Your job is to talk to Claude in plain language.** The terminal panel is just the place where you do it.
