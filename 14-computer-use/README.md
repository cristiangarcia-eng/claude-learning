# Computer Use

Let Claude see and control your screen — clicking buttons, filling forms, and navigating apps just like you would.

## What is Computer Use?

Computer Use lets Claude interact with your computer visually. Instead of just reading files and running commands, Claude can:

- See what's on your screen
- Move the mouse and click
- Type into any application
- Navigate websites and apps

Think of it as giving Claude the ability to sit next to you and use your computer.

## When to use it

| Task | Without Computer Use | With Computer Use |
|------|---------------------|-------------------|
| Update a Google Doc | Copy text, paste manually | Claude opens the doc and edits directly |
| Fill a form | You fill each field | Claude fills the form for you |
| Navigate a dashboard | You describe what you see | Claude sees and navigates it |
| Test a website | You click through manually | Claude clicks through and reports issues |

## How to start

```bash
claude --computer
```

Claude will ask for permission to view your screen. Once approved, it can see and interact with your desktop.

## Example workflows

### Update content in a web app

```
Open our CMS at cms.company.com, find the blog post titled
"Q3 Update", and change the publication date to next Monday.
```

### Fill out a spreadsheet

```
Open the Google Sheet "Budget 2026", go to the Marketing tab,
and fill in the Q2 actuals from this data: [paste data]
```

### Navigate a tool you use daily

```
Go to our Jira board, find all tickets assigned to me
that are overdue, and list them with their due dates.
```

### Review a design in the browser

```
Open our staging site at staging.company.com and take
screenshots of every page. Note any broken layouts.
```

## Important notes

- Claude asks for permission before every screen interaction
- You can stop Claude at any time with `Esc`
- Claude only sees your screen while the session is active
- Works best with web apps and standard desktop applications

> **Tip**: Computer Use is especially powerful for repetitive tasks across apps that don't have an API — like filling forms, updating CMS content, or navigating internal tools.
