# Organize Your Workspace

Before you start creating more projects, set up a simple folder structure. This keeps everything clean and helps Claude work better — it performs best when each project has its own focused folder.

## Step 1: Create the main folder

Create a folder called **`Claude`** on your Desktop:

- **Mac**: right-click on Desktop → New Folder → name it `Claude`
- **Windows**: right-click on Desktop → New → Folder → name it `Claude`

## Step 2: Create the structure inside

Open the `Claude` folder and create two folders inside it the same way (right-click → New Folder):

- `projects`
- `resources`

Then move the `nike-analysis` folder from your Desktop into `projects/` (just drag and drop).

## Step 3: Open it in Cursor

Open the `Claude` folder in Cursor (**File → Open Folder** → find your Desktop → select `Claude`). You'll see everything organized in the sidebar.

## The structure

This is what your workspace should look like over time:

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

**`resources/`** is for reference material that applies across projects — brand guidelines, pricing sheets, competitor data. When Claude needs this info, you can tell it: "check the resources folder for our brand guidelines."

## The rules

1. **One folder per project** — Claude works best with focused context. Don't mix Nike files with Q4 planning files.
2. **`resources/`** for shared material — things that don't belong to any single project.

## Starting a new project

Every time you start something new, create a folder inside `projects/`. Just use Finder (Mac) or File Explorer (Windows):

1. Open `Desktop/Claude/projects/`
2. Create a new folder with your project name (e.g., `my-new-project`)
3. Drop your files inside it

Open the project folder in Cursor (**File → Open Folder**), open the terminal panel (**Cmd+J** / **Ctrl+J**), type `claude`, and you're ready to work.

> **The payoff compounds.** After a few weeks, you'll have a clean library of projects. You can jump between any of them and Claude immediately picks up where you left off.

> **Later in the course** you'll learn how to give each project its own memory so Claude remembers context between sessions.

## What's next?
