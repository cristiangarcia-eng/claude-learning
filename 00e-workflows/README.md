# Practical Workflows

Real tasks you can do with Claude Code — no coding experience needed.

## For Product Managers

### Understand what the team built

```
Explain this project's features as if you're writing
release notes for customers.
```

```
What changed in the last 10 commits? Summarize each
change in one sentence a PM would understand.
```

```
List all the API endpoints and what each one does,
in a table format.
```

### Scope a feature

```
I want to add a "dark mode" toggle. What files would
need to change? How complex is this on a scale of 1-10?
```

```
We need to add Spanish translations to the app.
Analyze the current codebase and tell me:
1. How is text currently handled?
2. What's the effort to add multi-language support?
3. What are the risks?
```

### Write specs from the codebase

```
Read the user authentication flow and write a technical
spec document that describes how it works, including
a diagram. Write it for a non-technical audience.
```

### Track technical debt

```
Find all TODO and FIXME comments in the codebase.
Organize them by priority and create a summary
I can share with the engineering team.
```

---

## For Designers

### Understand the current UI

```
Find all the CSS color values used in this project
and list them. Are there inconsistencies?
```

```
What fonts are being used? List every font-family
declaration and where it appears.
```

```
Find all the button styles in the project. How many
different button variants exist?
```

### Make visual changes

```
Change the primary brand color from #3B82F6 to #8B5CF6
everywhere in the project.
```

```
Update the font from Inter to Plus Jakarta Sans
across the entire project.
```

```
Add 24px more spacing between sections on the
landing page.
```

### Audit for consistency

```
Find all the different border-radius values used
in the project. Suggest a consistent set of values
we should standardize on.
```

```
List all z-index values used in the CSS. Are there
any potential layering conflicts?
```

### Check accessibility

```
Audit the homepage for accessibility issues.
Check color contrast, alt text on images,
and proper heading hierarchy.
```

---

## For Sales & Marketing

### Update website copy

```
Change the tagline on the homepage from
"Build faster" to "Ship with confidence".
```

```
Add a new testimonial to the landing page:
"Nova saved us 20 hours per week" — Sarah Chen, CTO at Acme
```

```
Update the pricing page: rename the "Pro" plan
to "Growth" and change the price from $49 to $59.
```

### Find and update content

```
Find every place where we mention "free trial"
and change it to "14-day free trial".
```

```
List all the meta descriptions and page titles
across the website. Which ones are missing?
```

### Analyze the competition

```
Read our landing page and compare it to this
competitor page: [paste URL or content].
What are we missing?
```

### SEO tasks

```
Find all images without alt text in the project.
Suggest descriptive alt text for each one.
```

```
List all the pages and their URLs. Which ones
don't have proper meta tags?
```

---

## For Everyone

### Search across files

```
Find every mention of "Acme Corp" in the project.
```

```
Where is the contact email defined? I need to update it.
```

### Generate documentation

```
Create a README file that explains what this project
is, how to set it up, and who to contact for help.
Write it for a non-technical audience.
```

### Analyze data files

```
Read the CSV file at data/users.csv and tell me:
- How many records are there?
- What are the columns?
- Any obvious data quality issues?
```

### Create reports from code

```
How many pages does this website have? List each
page with its URL path and a one-line description.
```

---

## Tips for all workflows

### Start with understanding
Always start by asking Claude to explain what exists before making changes.

### Use Plan Mode first
Press **Shift+Tab** twice to enter Plan Mode when you're exploring. Claude will only read, never write.

### Reference files with @
Instead of describing where a file is, use `@` to reference it directly:

```
Explain what @src/pages/pricing.tsx does
```

### Ask for a summary after changes
After Claude makes changes, ask it to summarize what it did:

```
Summarize all the changes you just made in a bullet list
I can share with the team on Slack.
```

**Next step**: [Discover slash commands — 55+ shortcuts that save you time →](../01-slash-commands/)
