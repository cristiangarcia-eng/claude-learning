# Exercise 5: Analyze Customer Support Conversations

**Time:** 45 minutes | **Level:** Intermediate
**Module:** [04-subagents](../../04-subagents/) — Delegating specialized tasks to agents
**Skill:** Creating a reusable data-analyst subagent for recurring analysis tasks

## Objective

You will learn how to create a **subagent** — a specialized Claude Code agent that you can delegate tasks to again and again. First, you will do analysis manually to understand what "good analysis" looks like. Then you will encode that knowledge into a reusable subagent that can handle similar analysis tasks in the future.

This is a key skill for business users: instead of repeating the same analytical work every week or month, you build a specialist once and delegate to it forever.

## Scenario

You are a Customer Success Manager at **Orbit Task Manager**, a fictional project management tool. Your team logs every customer support conversation — live chat and email — in a JSON file. Your VP of Customer Experience has asked you to find patterns: What issues come up most? Which channels work best? Where are customers most frustrated? What should the product and support teams focus on?

## What You Have

A JSON file at `data/conversations.json` with 40 customer support conversations. Each conversation includes:
- **customer** — the customer's name
- **plan** — Free, Pro, or Team
- **channel** — live_chat or email
- **category** — billing, bug_report, feature_question, or how_to
- **satisfaction_score** — 1 to 5
- **resolution** — resolved, escalated, or unresolved
- **messages** — the full conversation thread

## Setup

> **This is the same workflow you'll use for real projects.** Create a project, copy in your data, and work from there.

**Get the course files** (first time only):

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
```

**Create your project:**

```bash
mkdir -p ~/Desktop/Claude/projects/conversation-analysis/data
mkdir ~/Desktop/Claude/projects/conversation-analysis/output
```

**Copy the exercise data:**

```bash
cp ~/Desktop/claude-learning/11-exercises/05-conversation-analysis/data/conversations.json ~/Desktop/Claude/projects/conversation-analysis/data/
```

**Open the project:**

```bash
cd ~/Desktop/Claude/projects/conversation-analysis
```

Start Claude Code here (`claude`). Your project looks like this:

```
conversation-analysis/
├── data/
│   └── conversations.json
└── output/          ← Claude saves results here
```

## Step-by-Step Instructions

### Part 1: Do the analysis manually (15 minutes)

Before building a subagent, you need to understand what good analysis looks like for this data.

**Step 1.** Ask Claude to explore the data:

```
Read data/conversations.json and give me an overview:
- How many conversations total?
- Distribution by category (billing, bug_report, etc.)
- Distribution by channel (live_chat vs email)
- Distribution by plan (Free, Pro, Team)
- Distribution by resolution (resolved, escalated, unresolved)
- Average satisfaction score overall
```

**Step 2.** Ask Claude to dig deeper into satisfaction patterns:

```
Now analyze what factors correlate with low satisfaction scores
(1 or 2 out of 5):
- Which categories have the lowest average satisfaction?
- Does channel affect satisfaction (live_chat vs email)?
- Does plan level affect satisfaction?
- What do the low-satisfaction conversations have in common?
Show the results as tables.
```

**Step 3.** Ask Claude to extract actionable insights from the actual conversation content:

```
Read through the message content in conversations with
satisfaction scores of 1 or 2. What are the top complaints
or frustrations? Group them into themes and suggest specific
actions the support or product team could take.
Save this as a markdown file called output/manual_analysis.md
```

### Part 2: Create a data-analyst subagent (20 minutes)

Now that you know what good analysis looks like, encode it into a reusable subagent.

**Step 4.** Ask Claude to help you build the subagent:

```
Help me create a subagent called "data-analyst" that I can
delegate data analysis tasks to. Based on the analysis I just
did manually, the subagent should:

- Be an expert at exploratory data analysis for business users
- Have access to: Read, Bash, Glob, Grep tools
- Follow this process every time:
  1. Explore the data structure and summarize what it contains
  2. Calculate key distributions and counts
  3. Look for patterns and correlations
  4. Identify outliers and anomalies
  5. Write plain-English insights with specific recommendations
- Always save its output as a markdown report
- Write for a non-technical audience (no jargon)
- Be able to handle CSV and JSON files

Save the agent definition at .claude/agents/data-analyst.md
```

**Step 5.** Test your subagent by delegating the same analysis to it.

> **How custom agents work in Claude Code:**
> Files in `.claude/agents/` are not slash commands or skills. They are specialized agents that Claude can launch as subprocesses. To use one, you invoke it from the terminal as a standalone agent.

Start a new terminal and run the agent directly:

```bash
claude --agent data-analyst "Analyze data/conversations.json. Focus on finding patterns that explain customer satisfaction. Save the report as output/satisfaction_report.md"
```

This launches a fresh Claude session that follows only the instructions from your `data-analyst.md` agent file.

Compare the subagent's output to your manual analysis from Part 1. Did it cover the same ground? Did it find anything you missed?

### Part 3: Refine and reuse (10 minutes)

**Step 6.** Based on the results, improve your subagent:

```
Update the data-analyst subagent based on what I've learned:
- The report should always include a "Top 3 Actions" section
  at the very top (busy executives read this first)
- It should flag any data quality issues it finds
- It should compare segments (e.g., Free vs Pro vs Team)
  whenever the data allows it
Update .claude/agents/data-analyst.md with these improvements.
```

**Step 7.** Think about where else you could use this subagent. It is not limited to support data — you could delegate analysis of survey results, sales data, usage metrics, or any structured dataset.

## What Subagents Let You Do Here

| Subagent Concept | How You Used It |
|---|---|
| **Agent file** (`.claude/agents/`) | You created `data-analyst.md` with expertise and instructions |
| **Tools restriction** | Only Read, Bash, Glob, Grep — safe, read-only tools |
| **Structured process** | The agent follows the same analysis steps every time |
| **Delegation** (`claude --agent`) | You hand off the analysis instead of doing it yourself |
| **Reusability** | The same agent works on any dataset, not just this one |

## Success Checklist

- [ ] You explored the support data and found satisfaction patterns
- [ ] A `output/manual_analysis.md` report exists with insights
- [ ] `.claude/agents/data-analyst.md` exists with a defined process
- [ ] Running `claude --agent data-analyst` produces a useful report
- [ ] The subagent report includes actionable recommendations

## What You Learned

Subagents are specialists you build once and delegate to forever. The first time you do a task, you learn what "good" looks like by doing it manually. The second time, you encode that knowledge into an agent definition. From then on, you delegate — and the agent follows the same quality process every time, freeing you for higher-value work. This is especially powerful for recurring analysis tasks like weekly reports, monthly reviews, or quarterly check-ins.
