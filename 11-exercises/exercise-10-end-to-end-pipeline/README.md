# Exercise 10: End-to-End Content Pipeline

**Time:** 45 minutes | **Level:** Advanced
**Module:** [07-plugins](../../07-plugins/) — Packaging complete workflows as distributable bundles
**Skill:** Building a plugin that packages a multi-step workflow for your team

## Scenario

You have a one-paragraph brief. You'll execute a complete pipeline: research → outline → document → summary. Then you'll **package this entire workflow as a plugin** that anyone on your team can install and use with a single command.

## What You Have

Just a brief. Pick one:

**Default:**
```
Our company (200-person B2B SaaS) is considering switching from Slack
to Microsoft Teams. We need a recommendation covering cost, integrations,
security/compliance, and team adoption risk. 40% non-technical users.
```

**Sales:** "Expand into DACH market — go-to-market plan, market sizing, first 90 days."
**Finance:** "Cloud cost analysis — €45K/month across AWS, GCP, SaaS. Board wants a 20% reduction roadmap."
**HR:** "Engagement dropped from 4.2 to 3.6. CEO wants a Q2 action plan."

## Your Task

### Part 1: Execute the pipeline

1. **Research phase:**
   ```
   Based on this brief, do research: key questions, data needed,
   main options, risks. Save as 01-research-notes.md
   ```

2. **Outline phase:**
   ```
   Create a detailed outline for a leadership-ready document.
   Flag where we need real data vs. estimates. Save as 02-outline.md
   ```

3. **Full document:**
   ```
   Write the full document — professional, 2-4 pages, tables where
   relevant, clear recommendation and next steps. Save as 03-full-document.md
   ```

4. **Executive summary:**
   ```
   Distill into a one-page executive summary: recommendation first,
   3-5 key findings, one comparison table, clear next steps.
   Save as 04-executive-summary.md
   ```

### Part 2: Package as a plugin (the real exercise)

5. Now **turn this into a plugin** that anyone can install. Ask Claude:
   ```
   Help me package this brief-to-document pipeline as a plugin
   following the format from the 07-plugins module. The plugin should include:

   - A slash command: /brief-to-doc that takes a brief as input
   - A subagent: researcher that handles the research phase
   - A skill: document-writer that structures the output
   - A template: executive-summary-template.md for consistent formatting

   Create the full plugin structure at .claude-plugin/
   ```

6. **Test the plugin.** Install it and run:
   ```
   /brief-to-doc "We need to evaluate 3 ATS vendors for our 50-person recruiting team. Budget: $500/month."
   ```

### Part 3: Make it distributable

7. Follow the plugin distribution guide from [07-plugins](../../07-plugins/):
   - Add a `plugin.json` manifest with name, version, description
   - Add a `README.md` explaining what the plugin does
   - Consider what settings should be configurable (output format, number of pages, tone)

## Connection to Module 07 (Plugins)

| Plugin Concept | How You Use It Here |
|---------------|-------------------|
| **Plugin structure** (`.claude-plugin/`) | Complete package with commands, agents, skills |
| **Slash command** | `/brief-to-doc` entry point |
| **Bundled subagent** | `researcher` handles the research phase |
| **Bundled skill** | `document-writer` structures the output |
| **Templates** | Consistent executive summary format |
| **plugin.json manifest** | Makes it installable by others |

## Success Criteria

- [ ] Four files created: research, outline, document, executive summary
- [ ] Each step builds on the previous (context carries through)
- [ ] A plugin structure exists at `.claude-plugin/`
- [ ] The plugin includes a slash command, subagent, and template
- [ ] Running `/brief-to-doc` with a new brief produces a full deliverable
- [ ] (Bonus) A `plugin.json` manifest makes it distributable

## What You Learned

**Plugins are the ultimate level of reuse in Claude Code.** Slash commands save one step. Skills automate one capability. Subagents specialize one role. **Plugins bundle all of them** into a complete, distributable workflow. When a process is valuable enough that your whole team should use it the same way — that's a plugin.
