# Exercise 10: End-to-End Content Pipeline

**Time:** 45 minutes | **Level:** Advanced
**Module:** [07-plugins](../../07-plugins/) — Packaging complete workflows as distributable bundles
**Skill:** Building a plugin that packages a multi-step workflow for your team

## Objective

You will run a complete content pipeline from start to finish — research, outline, draft, and review — then package that entire workflow as a plugin that anyone on your team can install and reuse with a single command.

**What you will learn:**
- How to break a big deliverable into discrete pipeline stages
- How each stage feeds context into the next
- How to turn a repeatable workflow into a plugin others can install
- The structure of a plugin: slash command, templates, and manifest

## Scenario

Your marketing team at Nike is preparing for the launch of a fictional new product: the **Nike ZephyrKnit** — a sustainability-focused running shoe made from 80% recycled ocean plastics. You have been asked to produce a launch content package. You will run through the pipeline manually, then package it so any teammate can generate similar packages for future launches.

## What You Have

A product brief at `data/sample-brief.md` — the starting input for your pipeline.

## Setup

> **This is the same workflow you'll use for real projects.** Create a project, copy in your data, and work from there.

**1. Create your project folder:**

Open Finder (Mac) or File Explorer (Windows) and go to `Desktop/Claude/projects/`. Create these folders:
- `end-to-end-pipeline/`
  - `data/` (inside end-to-end-pipeline)
  - `output/` (inside end-to-end-pipeline)

**2. Copy the exercise data:**

Find the file `sample-brief.md` in your course materials at `11-exercises/10-end-to-end-pipeline/data/` and drag it into your new `data/` folder.

**3. Open in Cursor and start Claude:**

In Cursor: **File → Open Folder** → select your `end-to-end-pipeline` folder. Open the terminal panel (**Cmd+J** / **Ctrl+J**) and type `claude`.

Your project looks like this:

```
end-to-end-pipeline/
├── data/
│   └── sample-brief.md
└── output/          ← Claude saves pipeline results here
```

## Your Task

### Part 1: Execute the pipeline manually

Work through each stage in order. Each step builds on the output of the previous one.

**Stage 1 — Research**

Ask Claude:
```
Based on the brief in data/sample-brief.md, do research for this product launch.
Cover: target audience profile, competitive landscape (what other brands
are doing with recycled materials), key messaging angles, and potential
risks or objections. Save the output as output/01-research-notes.md
```

**Stage 2 — Outline**

```
Using the research in output/01-research-notes.md, create a detailed outline
for a launch content package. Include sections for: press release,
social media copy (3 platforms), email announcement, and internal
sales talking points. Flag where we need real data vs. estimates.
Save as output/02-content-outline.md
```

**Stage 3 — Full draft**

```
Write the full content package based on output/02-content-outline.md.
Make it professional and on-brand for a major athletic company.
Include all sections from the outline. Use tables where helpful.
Save as output/03-full-draft.md
```

**Stage 4 — Review and executive summary**

```
Review output/03-full-draft.md for tone consistency, messaging clarity,
and completeness. Then create a one-page executive summary with:
the launch recommendation, 3-5 key messages, a timeline table,
and clear next steps. Save the summary as output/04-executive-summary.md
```

**Checkpoint:** You should now have four files that form a complete pipeline output. Open each one and confirm that every stage clearly builds on the one before it.

### Part 2: Package as a plugin

Now turn this repeatable workflow into a plugin that anyone on your team can install.

5. Ask Claude:
   ```
   Help me package this content pipeline as a plugin following the format
   from the 07-plugins module. The plugin should include:

   - A slash command: /launch-content that takes a product brief as input
   - A template: executive-summary-template.md for consistent formatting
   - A plugin.json manifest with name, version, and description

   Create the full plugin structure at .claude-plugin/
   ```

6. **Test the plugin.** Try it with a different brief to make sure it works independently:
   ```
   /launch-content "New product: Nike TerraGrip trail running shoe.
   Target: outdoor enthusiasts 25-45. Price point: $160.
   Key feature: adaptive grip sole technology. Launch: Q4."
   ```

### Part 3: Make it distributable

7. Follow the distribution guide from [07-plugins](../../07-plugins/):
   - Confirm `plugin.json` has name, version, and description
   - Add a README inside `.claude-plugin/` explaining what the plugin does and how to use it
   - Consider what settings should be configurable (output format, number of platforms, tone)

## Connection to Module 07 (Plugins)

| Plugin Concept | How You Use It Here |
|---------------|-------------------|
| **Plugin structure** (`.claude-plugin/`) | Complete package with commands and templates |
| **Slash command** | `/launch-content` entry point |
| **Templates** | Consistent executive summary format |
| **plugin.json manifest** | Makes it installable by others |
| **Configurable settings** | Tone, platform count, output format |

## Success Criteria

- [ ] Four files created: research, outline, full draft, executive summary
- [ ] Each step clearly builds on the previous one (context carries through)
- [ ] A plugin structure exists at `.claude-plugin/`
- [ ] The plugin includes a slash command and at least one template
- [ ] Running `/launch-content` with a new brief produces a full deliverable
- [ ] A `plugin.json` manifest makes it installable by teammates

## What You Learned

Plugins are the highest level of reuse in Claude Code. Slash commands save one step. Skills automate one capability. Plugins bundle an entire workflow into a package anyone can install and run. When a process is valuable enough that your whole team should follow the same steps every time, that is a plugin.
