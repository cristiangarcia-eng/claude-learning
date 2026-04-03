# Visual Studio Code

## Why VS Code?

Visual Studio Code (VS Code) is where you'll do everything in this course. It's a **free editor** made by Microsoft that combines:
- A **file browser** to see all your project files
- A **text editor** to view and edit any file
- A **built-in terminal** to run Claude Code

All in one window. Instead of switching between apps, you have everything together — you can see the files Claude is changing while you talk to it.

> **This is your work environment for the entire course.** We'll use VS Code for everything — editing files, running the terminal, and talking to Claude.

## Installing VS Code

### Download

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click the big **Download** button
3. Install it like any other app

It's free and works on Mac, Windows, and Linux.

### First launch

When you open VS Code for the first time:
- You'll see a **Welcome** tab — you can close it
- The left sidebar has icons for files, search, extensions, etc.
- The bottom bar shows useful info like the current file type

## The interface at a glance

![VS Code welcome screen](/vscode-welcome.png)

### The sidebar icons (top to bottom)

| Icon | Name | What it does |
|------|------|-------------|
| 📁 | Explorer | Browse files and folders in your project |
| 🔍 | Search | Find text across all files |
| 🔀 | Source Control | See file changes (Git) |
| 🧩 | Extensions | Install add-ons like Claude Code |
| ▶️ | Run & Debug | Run scripts (you won't need this much) |

## Opening a project

### Option 1: Open a folder

1. Go to **File > Open Folder** (or `Cmd+O` on Mac)
2. Select the folder with your project
3. VS Code shows all files in the sidebar

### Option 2: Drag and drop

Drag a folder from Finder/Explorer directly onto VS Code.

### Option 3: From the terminal

```bash
cd ~/Desktop/my-project
code .
```

The `code .` command opens the current folder in VS Code.

> **Tip**: If `code .` doesn't work, open VS Code, press `Cmd+Shift+P`, type "shell command", and select **Install 'code' command in PATH**.

## Essential keyboard shortcuts

You don't need to memorize all of these. Start with the top 5.

### The top 5 shortcuts

| Shortcut (Mac) | Shortcut (Windows) | What it does |
|----------------|--------------------|----|
| `Cmd+P` | `Ctrl+P` | **Quick Open** — find any file by name |
| `Cmd+Shift+P` | `Ctrl+Shift+P` | **Command Palette** — search for any action |
| `Cmd+F` | `Ctrl+F` | Find text in current file |
| `Cmd+Shift+F` | `Ctrl+Shift+F` | Find text in ALL files |
| `Cmd+S` | `Ctrl+S` | Save the current file |


> **Pro tip**: The **Command Palette** (`Cmd+Shift+P`) is your best friend. If you don't know how to do something, open it and type what you want. VS Code will find the action for you.

## Installing the Claude Code extension

This is how you use Claude Code inside VS Code instead of the terminal.

### Step by step

1. Click the **Extensions** icon in the sidebar (🧩) or press `Cmd+Shift+X`
2. Search for **"Claude Code"**
3. Click **Install** on the one by Anthropic
4. After installing, press `Cmd+Shift+P` and type **"Claude Code"**
5. Select **Open in New Tab**

### Using Claude Code in VS Code

Once the extension is open, you get:

- **A chat panel** where you talk to Claude
- **Inline diffs** — Claude shows file changes side by side (added lines in green, removed in red)
- **@ mentions** — type `@filename` to reference files directly
- **Conversation history** — your sessions are saved

It works exactly like the terminal version, but with a visual interface.

### Why VS Code + Claude Code is great for non-devs

| Terminal | VS Code |
|----------|---------|
| You see text only | You see files, folders, and changes visually |
| Changes are described in text | Changes are shown as colored diffs |
| Need to type commands to open files | Click to open any file |
| No syntax highlighting on output | Code is colorized and easy to read |

## Working with files

### Creating a new file

1. Right-click in the Explorer sidebar
2. Select **New File**
3. Type the filename and press Enter

Or use `Cmd+N` for a quick new untitled file.

### Editing files

- Click any file in the sidebar to open it
- Make your changes
- Press `Cmd+S` to save
- The dot on the tab means **unsaved changes**

### Searching across files

Press `Cmd+Shift+F` to open the search panel:

1. Type your search term
2. VS Code shows every match across all files
3. Click a result to jump to that file and line

This is incredibly useful for finding things like:
- Where a specific piece of text appears on your website
- All mentions of a company name, email, or phone number
- Where a specific feature is implemented

## The built-in terminal

VS Code has a terminal built right in. Press `` Ctrl+` `` to toggle it.

This means you can:
- Browse files visually in the sidebar
- Run terminal commands at the bottom
- Edit files in the main area

All in one window. No need to switch between apps.

## Settings worth changing

Open Settings with `Cmd+,` and search for these:

| Setting | Recommended value | Why |
|---------|-------------------|-----|
| Font Size | 14 or 16 | More readable |
| Word Wrap | On | Long lines wrap instead of scrolling |
| Auto Save | afterDelay | Files save automatically |
| Theme | Your preference | Try "Dark+" (default) or "GitHub Dark" |

## Extensions worth installing

Beyond Claude Code, these extensions are useful for non-developers:

| Extension | What it does |
|-----------|-------------|
| **Prettier** | Auto-formats your files to look clean |
| **Markdown Preview** | Preview .md files as formatted text |
| **GitLens** | See who changed what and when |

## Quick reference

| I want to... | How |
|-------------|-----|
| Open a project | File > Open Folder |
| Find a file | `Cmd+P` and type the name |
| Find text in all files | `Cmd+Shift+F` |
| Open the terminal | `` Ctrl+` `` |
| Install an extension | Click 🧩, search, install |
| Run any action | `Cmd+Shift+P` (Command Palette) |
| Open Claude Code | `Cmd+Shift+P` > "Claude Code: Open" |

## Next step

**Next step**: [Learn the 4 terminal commands you need inside VS Code →](../00-terminal-basics/)
