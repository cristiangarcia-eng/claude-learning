# Exercise 5: Extract Insights from Conversations

**Time:** 45 minutes | **Level:** Intermediate
**Module:** [04-subagents](../../04-subagents/) — Delegating specialized tasks to agents
**Skill:** Creating a data-analyst subagent that handles analysis tasks

## Scenario

You have 100 conversations and need insights: What patterns exist? What's working? Where should you focus? Instead of doing this analysis yourself every time, you'll **create a data-analyst subagent** that you can delegate any data analysis task to in the future.

## What You Have

A JSON file at `data/conversations.json` with 100 conversations. Each has sender/recipient info, channel, timestamps, messages, outcome, and tags.

## Your Task

### Part 1: Do the analysis manually first

1. **Get the overview.** Ask Claude:
   ```
   Read data/conversations.json and give me:
   - How many conversations? Messages total?
   - Distribution of outcomes (replied, no-reply, meeting-booked, not-interested)
   - Channels used and their split
   ```

2. **Find what predicts success.** Ask Claude:
   ```
   Write a Python script that analyzes which factors correlate
   with positive outcomes (replied, meeting-booked):
   - Channel (email vs LinkedIn vs chat)
   - Day of the week
   - Message length
   - Tags (cold-outreach vs warm-intro vs referral)
   Show results as tables. Highlight the strongest patterns.
   ```

3. **Classify the replies.** Ask Claude:
   ```
   Read the message content in conversations that got replies.
   Classify into: Interested, Polite decline, Asking for more info,
   Redirected, Negative. Show counts and examples of each.
   ```

### Part 2: Create a data-analyst subagent (the real exercise)

4. Now that you know what good analysis looks like, **create a reusable subagent.** Ask Claude:
   ```
   Help me create a subagent called "data-analyst" following the format
   from the 04-subagents module. It should:
   - Be an expert at exploratory data analysis
   - Have access to: Read, Bash, Glob, Grep tools
   - Follow this process: explore → hypothesize → analyze → visualize → report
   - Always start by understanding the data structure
   - Always end with an insight report as a markdown file
   - Be able to handle CSV, JSON, and Excel files

   Save it at .claude/agents/data-analyst.md
   ```

5. **Test the subagent.** Start a new conversation and delegate:
   ```
   @data-analyst Analyze data/conversations.json. Focus on what
   predicts meeting-booked outcomes. Save the report as insight_report.md
   ```

### Part 3: Refine the agent

6. Based on the results, improve your subagent:
   - Is the output format useful? Adjust the template in the agent definition.
   - Does it run the right kind of analysis? Add more specific priorities.
   - Should it auto-generate charts? Add that to its checklist.

## Connection to Module 04 (Subagents)

| Subagent Concept | How You Use It Here |
|-----------------|-------------------|
| **Agent file** (`.claude/agents/`) | You create `data-analyst.md` |
| **Tools restriction** | Only Read, Bash, Glob, Grep — safe, read-focused |
| **Description for delegation** | Keywords that let Claude auto-delegate analysis tasks |
| **Structured output** | Agent always produces a markdown insight report |
| **Priorities list** | Ordered checklist the agent follows every time |

## Success Criteria

- [ ] You explored the data and found key patterns (channel, day, tags)
- [ ] A Python analysis script ran successfully
- [ ] `.claude/agents/data-analyst.md` exists with proper frontmatter
- [ ] Delegating to `@data-analyst` produces a useful report
- [ ] The agent works on other datasets, not just this one

## What You Learned

**Subagents are specialists you build once and delegate to forever.** The first time you do a task, you learn what "good" looks like. The second time, you encode it into an agent. From then on, you delegate — and the agent does it the same way every time, freeing you for higher-value work.
