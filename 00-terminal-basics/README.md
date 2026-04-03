# Terminal Basics

## What is a terminal?

A terminal (also called "command line" or "shell") is a text-based way to talk to your computer. Instead of clicking buttons and icons, you type commands.

Think of it like texting your computer instead of tapping on apps.

> You don't need to become a terminal expert. You just need to know enough to launch Claude Code and navigate to your files.

## Opening the terminal

### On Mac

1. Press **Cmd + Space** to open Spotlight
2. Type **Terminal**
3. Press **Enter**

You'll see a window with a blinking cursor. That's your terminal.

### On Windows

1. Press **Win + R**
2. Type **cmd** or **powershell**
3. Press **Enter**

Or search for "Terminal" in the Start menu.

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

Here's what a real session looks like. You open the terminal and:

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

# Now you're ready to start Claude Code!
claude
```

## Common mistakes (and how to fix them)

### "command not found"

```
zsh: command not found: claud
```

You probably have a **typo**. Check the spelling. It's `claude`, not `claud`.

### "No such file or directory"

```
cd: no such file or directory: Docments
```

The folder name is wrong. Use `ls` to see the actual folder names, then try again.

### "Permission denied"

Try adding `sudo` before the command (it will ask for your password):

```bash
sudo your-command-here
```

### I'm lost — where am I?

Just type `pwd` to see your current location. You can always go home with `cd ~`.

## Keyboard shortcuts that save time

| Shortcut | What it does |
|----------|-------------|
| **Tab** | Auto-completes file and folder names |
| **Up arrow** | Shows your previous command |
| **Ctrl + C** | Cancels the current command |
| **Ctrl + L** | Clears the screen |

> **Pro tip**: Start typing a folder name and press **Tab** — the terminal will complete it for you. No need to type the full name!

## That's all you need

Seriously — `pwd`, `ls`, `cd`, and `mkdir` are the only commands you need to get started with Claude Code. Once Claude is running, you talk to it in plain English, not terminal commands.

**Next step**: [Set up VS Code — the best way to use Claude Code →](../00f-vscode/)
