# Chrome Integration

Connect Claude Code to your Chrome browser so it can read, interact with, and extract data from web pages.

## What it does

Claude can open tabs in Chrome and:

- Read the content of any web page
- Extract data from tables, lists, and dashboards
- Interact with web apps (click buttons, fill forms)
- Take screenshots for visual review
- Work with authenticated apps (you're already logged in)

## How to start

```bash
claude --chrome
```

Or during a session:

```
/chrome
```

Claude connects to your Chrome browser and can interact with your open tabs.

## Example workflows

### Extract data from a dashboard

```
Open our analytics dashboard and extract this month's
key metrics: visitors, signups, and conversion rate.
```

### Read and summarize a document

```
Go to this Google Doc [URL] and summarize the main
points in 5 bullet points.
```

### Compare competitor pages

```
Open these three competitor pricing pages and create
a comparison table of features and prices.
```

### Check your website for issues

```
Visit our website and check every page for broken
images, missing text, or layout problems. Take
screenshots of any issues you find.
```

### Work with authenticated tools

Since Claude uses your Chrome (where you're already logged in), it can access:

- **Gmail** — read and draft emails
- **Google Docs** — read and summarize documents
- **Notion** — navigate your workspace
- **Internal dashboards** — extract data

## Security

- Claude only accesses sites you explicitly allow
- You see every action Claude takes in real time
- Press `Esc` to stop at any time
- Claude never saves your passwords or credentials

> **Tip**: Chrome Integration works great with Computer Use — Claude can see the browser and interact with it naturally, just like you would.

**Next step**: [Supercharge Claude with pre-built plugin bundles →](../07-plugins/)
