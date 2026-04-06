# Terminal Basics

## What is a terminal?

A terminal (also called "command line" or "shell") is a text-based way to talk to your computer. Instead of clicking buttons and icons, you type commands.

Think of it like texting your computer instead of tapping on apps.

> You don't need to become a terminal expert. You just need 4 commands to navigate your files.

## Opening the terminal in VS Code

You already have VS Code installed from the previous lesson. The terminal is built right in:

1. Open **VS Code**
2. Press `` Ctrl+` `` (the backtick key, next to the number 1)
3. A terminal panel appears at the bottom

That's it — you'll see a blinking cursor ready for commands. No need to open a separate app.

## Your first commands

When you open the terminal, you're "inside" a folder on your computer — just like having a Finder or Explorer window open. Here are the basic commands you need:

### See where you are: `pwd`

```bash
pwd
```

This prints the **current folder** you're in. For example:

```
/Users/maria/Documents
```

Think of it as "Where am I right now?"

### See what's in this folder: `ls`

```bash
ls
```

This **lists** all files and folders in your current location. Like opening a folder in Finder.

### Move to another folder: `cd`

```bash
cd Documents
```

This **changes directory** — moves you into the `Documents` folder.

Some useful patterns:

| Command | What it does |
|---------|-------------|
| `cd Documents` | Go into the Documents folder |
| `cd ..` | Go back one level (to the parent folder) |
| `cd ~` | Go to your home folder |
| `cd ~/Desktop` | Go to your Desktop |

### Create a folder: `mkdir`

```bash
mkdir my-project
```

This **makes a directory** (folder) called `my-project`.

## A typical workflow

Here's what a real session looks like. Open the terminal in VS Code (`` Ctrl+` ``) and try:

```bash
# See where you are
pwd
# /Users/maria

# Go to your Desktop
cd ~/Desktop

# Create a new folder for your project
mkdir my-first-project

# Go into that folder
cd my-first-project

# Check what's inside (nothing yet — it's brand new!)
ls
```

## That's all you need

Seriously — `pwd`, `ls`, `cd`, and `mkdir` are the only commands you'll ever need. Once Claude Code is running, you talk to it in plain English, not terminal commands.

---

## Bonus: When something goes wrong

### Common errors

**"No such file or directory"** — The folder name is wrong. Use `ls` to see the actual folder names, then try again.

**"Permission denied"** — Try adding `sudo` before the command (it will ask for your password):

```bash
sudo your-command-here
```

**I'm lost — where am I?** — Just type `pwd` to see your current location. You can always go home with `cd ~`.

### Keyboard shortcuts that save time

| Shortcut | What it does |
|----------|-------------|
| **Tab** | Auto-completes file and folder names |
| **Up arrow** | Shows your previous command |
| **Ctrl + C** | Cancels the current command |
| **Ctrl + L** | Clears the screen |

> **Pro tip**: Start typing a folder name and press **Tab** — the terminal will complete it for you. No need to type the full name!

### The real trick: let Claude fix it for you

If you ever see an error in the terminal and don't know what it means — **don't worry.** Just copy the error message (or take a screenshot of your terminal) and paste it into Claude. It will tell you exactly what went wrong and how to fix it.

You can do this inside Claude Code itself, or even in the [Desktop App](https://claude.com/download) or [claude.ai](https://claude.ai) browser chat. Describe what you were trying to do, show the error, and Claude will walk you through the solution.

