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

When you open VS Code for the first time, you'll see a welcome screen:

![VS Code welcome screen](/vscode-welcome.png)

You can close it — we won't need it.

## The sidebar: your file explorer

For now, the only thing you need to know is the **Explorer** — the first icon in the left sidebar (it looks like two overlapping files). This is where you'll see all your project files and folders, just like Finder on Mac or File Explorer on Windows.

We'll explore the other sidebar icons later in the course.

## Your first project

Let's open a real project so you can see VS Code in action.

### Download the practice project

1. [Download this folder](https://github.com/cristiangarcia-eng/claude-learning/raw/main/resources/nike-analysis.zip) to your Desktop
2. Unzip it — you'll get a folder called `nike-analysis`

It's a simple competitive analysis of Nike with a few files inside.

### Open it in VS Code

1. Go to **File > Open Folder** (or `Cmd+O` on Mac)
2. Navigate to your **Desktop** and select the `nike-analysis` folder
3. Click **Open**

You should see the files appear in the Explorer sidebar on the left. Click any file to open it — that's it!

### What's inside

Take a look at the files in the project. You'll see three different types that are very common when working with Claude:

- **`competitive-analysis.md`** — a Markdown file. This is the most important format you'll use with Claude. Markdown (`.md`) is plain text with simple formatting (headings with `#`, bold with `**`, tables with `|`). Claude reads and writes Markdown constantly.
- **`notes.txt`** — a simple text file. Meeting notes, to-do lists, raw ideas — any plain text works.
- **`sales-data.csv`** — a CSV file (comma-separated values). This is how spreadsheet data looks as text. Claude can read, analyze, and transform CSVs for you.

Click each one to see how it looks inside VS Code.

## Saving files

When you edit a file, you'll notice a **dot** appears on the tab next to the filename. That dot means you have **unsaved changes**.

To save: press `Cmd+S` (Mac) or `Ctrl+S` (Windows).

> **Pro tip**: Go to **File > Auto Save** and enable it. Now your files save automatically — no more worrying about losing changes.

## The built-in terminal

VS Code has a terminal built right in. The easiest way to open it is clicking the **terminal icon** in the top-right area of the window:

![Terminal icon in VS Code](/vscode-terminal-icon.png)

You can also press `` Ctrl+` `` (the backtick key, next to the number 1).

This means you can:
- Browse files visually in the sidebar
- Edit files in the main area
- Run terminal commands at the bottom

All in one window. We'll use this terminal in the next lesson.


