# Organize Your Workspace

There's no single "correct" way to organize your files for Claude. Over time, as you work with it, you'll discover what fits *you* — how you think, what projects you run, how you like to find things. Your own setup will emerge naturally.

What this lesson gives you is **a very simple starting point**: one concrete structure you can copy in two minutes and tweak later. Treat it as a suggestion, not a rule.

The one idea that's actually worth internalizing is this: **Claude works best when each project has its own focused folder.** Everything else below is just a practical way to make that easy.

## A simple starting setup

If you want to copy our proposal exactly, follow these three steps. Feel free to rename things as you go — the folder names don't matter, the idea does.

### Step 1: Create the main folder

Create a folder called **`Claude`** on your Desktop:

- **Mac**: right-click on Desktop → New Folder → name it `Claude`
- **Windows**: right-click on Desktop → New → Folder → name it `Claude`

### Step 2: Create the structure inside

Open the `Claude` folder and create two folders inside it the same way (right-click → New Folder):

- `projects`
- `resources`

Then move the `nike-analysis` folder from your Desktop into `projects/` (just drag and drop).

### Step 3: Open it in Cursor

Open the `Claude` folder in Cursor (**File → Open Folder** → find your Desktop → select `Claude`). You'll see everything organized in the sidebar.

### What it looks like

This is what your workspace might look like after a few weeks:

```
~/Desktop/Claude/
├── projects/                    ← one folder per project
│   ├── nike-analysis/
│   │   ├── competitive-analysis.md
│   │   ├── notes.txt
│   │   └── sales-data.csv
│   ├── q4-planning/
│   └── client-acme/
└── resources/                   ← shared across all projects
    ├── brand-guidelines.md
    └── competitor-list.csv
```

**`projects/`** is where your work lives. Each project gets its own folder — put your files and Claude's results all together in it.

**`resources/`** is a suggestion for reference material that applies across projects — brand guidelines, pricing sheets, competitor data. If you end up never needing it, delete it. If you'd rather call it `library/` or `shared/`, go ahead.

## The one thing worth keeping

If you remember nothing else from this lesson, remember this:

> **One project = one folder.** That's the only thing that meaningfully affects how Claude understands your work. Everything else is just personal taste.

Don't mix Nike files with Q4 planning files in the same folder. Claude will get confused about what "the analysis" refers to, and you'll lose time clarifying. Separate folders keep the context clean.

## Starting a new project

Every time you start something new, create a folder inside `projects/`. Just use Finder (Mac) or File Explorer (Windows):

1. Open `Desktop/Claude/projects/`
2. Create a new folder with your project name (e.g., `my-new-project`)
3. Drop your files inside it

Open the project folder in Cursor (**File → Open Folder**), open the terminal panel (**Cmd+J** / **Ctrl+J**), type `claude`, and you're ready to work.

## Make it yours

This setup is a starting template, not a prescription. As you use Claude more, you'll discover what actually fits your brain and your work:

- Maybe you add a `clients/` folder alongside `projects/`.
- Maybe `resources/` becomes `library/`, or disappears completely.
- Maybe you group projects by quarter, by client, or by topic.
- Maybe the whole thing lives in iCloud, Dropbox, or somewhere other than Desktop.

All of that is fine. The structure you end up with should feel like *your* filing cabinet, not one imposed by a course. Rearrange as often as you need — Claude doesn't care, it just reads whatever folder you open.

> **Later in the course** you'll learn how to give each project its own memory so Claude remembers context between sessions.

## What's next?
