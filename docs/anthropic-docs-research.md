# Anthropic Docs Research: Claude Code Features for Non-Developers

> Research date: April 3, 2026
> Purpose: Identify features, tips, and capabilities from official Anthropic documentation that our course may be missing.
> Target audience: PMs, designers, sales professionals (non-developers)

---

## Table of Contents

1. [Major Feature Gaps](#1-major-feature-gaps)
2. [Partially Covered Features](#2-partially-covered-features)
3. [Well-Covered Features](#3-well-covered-features)
4. [Recommendations](#4-recommendations)
5. [Sources](#5-sources)

---

## 1. Major Feature Gaps

These are significant features documented by Anthropic that our course does not cover or barely mentions. Many are highly relevant to non-developers.

### 1.1 Slack Integration (NOT COVERED)

**What it is:** Mention `@Claude` in any Slack channel to kick off a Claude Code session. Claude detects coding intent, creates a web session, posts progress updates in the thread, and delivers results with action buttons (View Session, Create PR, Change Repo).

**Why it matters for non-devs:** PMs and designers already live in Slack. They can delegate tasks directly from team conversations without ever opening a terminal or browser. Bug reports discussed in Slack threads automatically become context for Claude.

**Key details:**
- Two routing modes: "Code only" or "Code + Chat" (Claude intelligently routes)
- Claude gathers context from threads and recent channel messages
- Works in public and private channels (not DMs)
- Requires Claude Code on the web access + GitHub connection
- Sessions appear in your claude.ai/code history
- Available on Pro, Max, Team, Enterprise

**Our gap:** We have no lesson on the Slack integration. This is arguably the most accessible entry point for non-devs.

---

### 1.2 Scheduled Tasks -- Cloud (NOT COVERED)

**What it is:** Recurring tasks that run on Anthropic-managed infrastructure, even when your computer is off. Create them from the web UI at claude.ai/code/scheduled, the Desktop app, or via `/schedule` in the CLI.

**Why it matters for non-devs:** Automate recurring work without any technical setup:
- Morning PR review summaries
- Weekly dependency audits
- Documentation sync after PRs merge
- Daily CI failure analysis

**Key details:**
- Frequency options: hourly, daily, weekdays, weekly (custom cron via CLI)
- Each run clones the repo fresh, runs autonomously, creates a session you can review
- Can connect MCP connectors (Slack, Linear, Google Drive) to each task
- Configurable cloud environments with network access, env vars, setup scripts
- Minimum interval: 1 hour
- Available on Pro, Max, Team, Enterprise

**Our gap:** Lesson 13 mentions "built-in scheduler" in the Desktop comparison table but never explains cloud scheduled tasks. The `/loop` command is mentioned in the catalog but not taught as a lesson.

---

### 1.3 Ultraplan (NOT COVERED)

**What it is:** Launch a planning session from your CLI to Claude Code on the web. Claude drafts the plan in the cloud while you keep working locally. Review the plan in your browser with inline comments, emoji reactions, and an outline sidebar. Then choose to execute remotely or send it back to your terminal.

**Why it matters for non-devs:** Perfect workflow for PMs who want to plan a feature, review it visually in the browser, leave targeted feedback on specific sections, and then approve execution -- all without touching code.

**Key details:**
- Launch via `/ultraplan` command or the keyword "ultraplan" in any prompt
- Status indicator in CLI: drafting, needs input, ready
- Browser review surface: inline comments, emoji reactions, outline navigation
- Two execution paths: execute on the web (auto-PR), or teleport back to terminal
- Requires Claude Code on the web account + GitHub repo

**Our gap:** Not mentioned anywhere in the course.

---

### 1.4 Auto-Fix Pull Requests (NOT COVERED)

**What it is:** After creating a PR, Claude monitors CI check results and reviewer comments on GitHub. When a check fails or a reviewer leaves a comment, Claude investigates and pushes a fix automatically.

**Why it matters for non-devs:** A PM can create a PR via Claude, enable auto-fix, and walk away. Claude handles CI failures and responds to reviewer feedback without intervention.

**Key details:**
- Available on Claude Code on the web and mobile app
- Claude replies to review comment threads (posted under your GitHub username, labeled as from Claude Code)
- For ambiguous requests, Claude asks before acting
- Requires the Claude GitHub App installed on the repo
- Warning: can trigger comment-based automation (Atlantis, Terraform, etc.)

**Our gap:** Not covered. The Desktop lesson mentions "PR monitoring" but does not explain auto-fix.

---

### 1.5 Code Review (NOT COVERED)

**What it is:** A multi-agent automated PR review system. When a PR opens, multiple specialized agents analyze the code in parallel, looking for logic errors, security vulnerabilities, edge cases, and regressions. Results are posted as severity-tagged inline comments.

**Why it matters for non-devs:** Teams get automatic quality gates on every PR without requiring human reviewers for initial screening. PMs managing delivery can see at a glance whether PRs have issues.

**Key details:**
- Severity levels: Important (bugs), Nit (minor issues), Pre-existing (existing bugs)
- Trigger modes: on PR creation, after every push, or manual (`@claude review`)
- Customizable via CLAUDE.md and REVIEW.md files
- Averages ~20 minutes per review, costs $15-25 per review
- Team and Enterprise only (research preview)
- Does not approve or block PRs -- findings are advisory

**Our gap:** Not covered anywhere in the course.

---

### 1.6 Channels -- Telegram, Discord, iMessage (NOT COVERED)

**What it is:** Push events from chat apps (Telegram, Discord, iMessage) or webhooks into a running Claude Code session. Claude reads the event and can reply through the same channel. Acts as a two-way bridge.

**Why it matters for non-devs:** Message Claude from your phone via Telegram or iMessage. Ask a question about your project and get an answer back in the same chat while Claude works against your real files on your machine.

**Key details:**
- Research preview (v2.1.80+)
- Supported: Telegram (via BotFather), Discord (bot), iMessage (macOS only, reads Messages DB)
- Install as plugins, run with `--channels` flag
- Sender allowlist for security (pairing codes for Telegram/Discord)
- Permission relay: channel servers can forward tool approval prompts to your phone
- Team/Enterprise must be explicitly enabled by admin

**Our gap:** The CATALOG.md mentions "Channels" as a March 2026 feature with one line, but no lesson covers setup or use.

---

### 1.7 Dispatch (BARELY COVERED)

**What it is:** Send tasks to Claude from your phone via the Claude mobile app. The task runs on your desktop machine in the background. One persistent conversation thread that retains context across tasks.

**Why it matters for non-devs:** The most phone-friendly way to delegate work. Text Claude a task from anywhere, and it executes on your desktop with full access to local files, tools, and apps.

**Key details:**
- Requires both Claude Desktop app and Claude mobile app (iOS/Android)
- Computer must be awake and app open
- Persistent thread -- context carries across tasks
- Computer use permissions with app-level tiers (view-only for browsers, click-only for terminals, full control for other apps)
- Research preview, Pro and Max plans

**Our gap:** Lesson 12 has 4 lines about Dispatch with no real explanation of setup, requirements, or practical examples.

---

### 1.8 /powerup Interactive Lessons (NOT COVERED)

**What it is:** Built-in interactive lessons with animated demos that teach Claude Code features directly inside the tool.

**Why it matters for non-devs:** Students can learn features hands-on within Claude Code itself, complementing our course material.

**Our gap:** Not mentioned. We should at minimum tell students this exists.

---

### 1.9 JetBrains IDE Integration (NOT COVERED)

**What it is:** Plugin for IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs with interactive diff viewing and selection context sharing.

**Why it matters for non-devs:** Limited relevance, but some PMs or designers may use WebStorm or PyCharm. Lower priority.

**Our gap:** Not covered. VS Code lesson exists but JetBrains is not mentioned.

---

### 1.10 GitHub Actions / GitLab CI/CD (NOT COVERED)

**What it is:** Run Claude in CI pipelines to automate PR reviews, issue triage, and code fixes on every commit.

**Why it matters for non-devs:** Moderate relevance. PMs managing engineering workflows should understand this capability exists even if they don't set it up.

**Our gap:** Not covered.

---

## 2. Partially Covered Features

These features are mentioned but could use significantly more depth or updating.

### 2.1 Desktop App

**Current coverage:** Lesson 13 has a basic comparison table and a few commands.

**What's missing:**
- **Computer use**: Claude can open apps, control your screen, click buttons, fill forms. Desktop-specific feature with macOS/Windows support. Covered in lesson 14 but not connected to the Desktop app context.
- **Live app preview**: Embedded browser in Desktop app for verifying changes. Claude auto-verifies by taking screenshots, inspecting DOM, clicking elements.
- **PR monitoring with auto-fix and auto-merge**: Automatic CI failure fixing and squash-merge when checks pass.
- **Parallel sessions with Git worktree isolation**: Run multiple tasks simultaneously, each in its own branch.
- **Connectors**: Built-in connections to GitHub, Slack, Linear, Notion, etc.
- **SSH sessions**: Connect to remote machines.
- **Permission modes in Desktop**: Visual mode selector (Ask, Auto accept edits, Plan, Auto, Bypass).

### 2.2 Web Sessions (Claude Code on the Web)

**Current coverage:** Lesson 13 covers basics.

**What's missing:**
- **Cloud environments**: Configurable network access, env vars, setup scripts. Universal image with pre-installed languages and tools.
- **Auto-fix PRs**: Monitor and auto-fix CI failures from web sessions.
- **Session sharing**: Private/Team/Public visibility settings with repo access verification.
- **Diff view with inline comments**: Review changes file-by-file with targeted feedback.
- **iOS/Android app integration**: Kick off tasks and monitor from mobile.
- **`--remote` flag**: Start web sessions from terminal.
- **Teleport**: Pull web sessions back to terminal with `/teleport` or `--teleport`.

### 2.3 Remote Control

**Current coverage:** Lesson 12 covers the basics well.

**What's missing:**
- **Server mode** (`claude remote-control`): Dedicated server with `--spawn`, `--capacity`, `--name` flags.
- **Enable for all sessions**: Config option to auto-enable Remote Control for every session.
- **Multiple concurrent sessions** via server mode with worktree isolation.
- **Comparison table**: Remote Control vs Dispatch vs Channels vs Slack vs Scheduled Tasks (from official docs).

### 2.4 Voice

**Current coverage:** Lessons 00g and 12 cover basics.

**What's missing:**
- **20 language support**: Russian, Polish, Turkish, Dutch, Ukrainian, Greek, Czech, Danish, Swedish, Norwegian, etc.
- **Rebindable push-to-talk key** via `/keybindings`.
- Voice improvements in recent versions (better transcription for dev terms, repo names).

### 2.5 Scheduled Tasks (CLI)

**Current coverage:** CATALOG.md mentions `/loop` but no lesson teaches it.

**What's missing:**
- **Three scheduling tiers**: Cloud (runs without your machine), Desktop (local access), /loop (session-scoped)
- **Comparison table** of all three options
- **CronCreate tool** for programmatic scheduling
- **`/schedule` command** for CLI-based cloud task management

### 2.6 Memory System

**Current coverage:** Lesson 02 covers well.

**What's missing:**
- **Auto-memory enhancements**: Automatic saving of build commands, debugging insights across sessions
- **MEMORY.md index** with 25KB / 200-line truncation
- **Custom directory**: `autoMemoryDirectory` setting
- **`/memory` command** for managing saved memories
- **Timestamp markers** for tracking fresh vs stale memories

---

## 3. Well-Covered Features

These are adequately covered in our current course:

| Feature | Lesson(s) | Notes |
|---------|-----------|-------|
| Terminal basics | 00-terminal-basics | Good for non-devs |
| Installation/setup | 00b-quickstart | Covers essentials |
| How it works | 00c-how-it-works | Good conceptual overview |
| Best practices | 00d-best-practices | Strong content |
| Workflows | 00e-workflows | PM/designer/sales specific |
| VS Code | 00f-vscode | Thorough |
| Git basics | 00g-git-basics | Good for non-devs |
| Slash commands | 01 | Comprehensive catalog |
| Memory | 02 | Solid foundation |
| Skills | 03 | Good coverage |
| Subagents | 04 | Detailed |
| MCP | 05 | Good basics |
| Hooks | 06 | Covered |
| Plugins | 07 | Covered |
| Checkpoints | 08 | Well done |
| Planning mode | 09, 11 | Solid |
| CLI usage | 10 | Good reference |
| Computer use | 14 | Covered |
| Chrome integration | 15 | Covered |

---

## 4. Recommendations

### HIGH PRIORITY -- Add New Lessons

These features are highly relevant to non-developers and represent significant gaps.

| Priority | Feature | Suggested Lesson | Rationale |
|----------|---------|-----------------|-----------|
| 1 | **Slack Integration** | `16-slack/README.md` | Most accessible entry point for non-devs; zero terminal required |
| 2 | **Scheduled Tasks (all 3 tiers)** | `17-scheduled-tasks/README.md` | Automate recurring work; cloud tasks need no machine |
| 3 | **Auto-Fix PRs + Code Review** | `18-code-review/README.md` | Quality automation PMs/leads should know about |
| 4 | **Ultraplan** | Add section to `11-planning-mode/` | Natural extension of planning mode lesson |

### MEDIUM PRIORITY -- Expand Existing Lessons

| Priority | Feature | Where to Add | What to Add |
|----------|---------|-------------|-------------|
| 5 | **Dispatch** | Expand `12-voice-and-remote/` | Full setup guide, requirements, practical examples |
| 6 | **Desktop App depth** | Expand `13-desktop-and-web/` | App preview, PR monitoring, auto-fix, auto-merge, connectors, parallel sessions |
| 7 | **Web Sessions depth** | Expand `13-desktop-and-web/` | Cloud environments, diff view, session sharing, mobile app |
| 8 | **Channels** | Add section to `12-voice-and-remote/` or new lesson | Telegram/iMessage for phone-based interaction |

### LOW PRIORITY -- Mention or Reference

| Priority | Feature | Action |
|----------|---------|--------|
| 9 | `/powerup` lessons | Add a tip box in the intro or quickstart lesson pointing students to these |
| 10 | Voice language support | Update voice lessons with full language list |
| 11 | JetBrains integration | Brief mention in VS Code lesson as alternative |
| 12 | GitHub Actions / CI/CD | Brief mention in workflows lesson for PM awareness |
| 13 | Remote Control server mode | Add advanced section to lesson 12 |
| 14 | Memory system updates | Update lesson 02 with auto-memory enhancements |

### Feature Comparison Table for Non-Devs

Consider adding a "Where Should I Work?" guide that maps the official docs comparison:

| I want to... | Best option |
|--------------|-------------|
| Delegate a task from Slack | Slack integration |
| Send a task from my phone | Dispatch (Desktop) or Channels (Telegram/iMessage) |
| Continue a terminal session on my phone | Remote Control |
| Run a recurring task while my laptop is off | Cloud scheduled tasks |
| Get auto-reviewed PRs | Code Review |
| Plan a feature and review visually | Ultraplan |
| Start a task without installing anything | Claude Code on the web |
| Work with local files in a GUI | Desktop app |

---

## 5. Sources

### Official Documentation (code.claude.com)
- [Claude Code Overview](https://code.claude.com/docs/en/overview) -- Main entry point listing all features and surfaces
- [Remote Control](https://code.claude.com/docs/en/remote-control) -- Full remote control docs including server mode, security, comparison table
- [Claude Code on the Web](https://code.claude.com/docs/en/claude-code-on-the-web) -- Web sessions, cloud environments, teleport, auto-fix
- [Web Scheduled Tasks](https://code.claude.com/docs/en/web-scheduled-tasks) -- Cloud scheduled task creation and management
- [Desktop Quickstart](https://code.claude.com/docs/en/desktop-quickstart) -- Desktop app installation and first session
- [Desktop Reference](https://code.claude.com/docs/en/desktop) -- Computer use, Dispatch, parallel sessions, connectors, PR monitoring
- [Channels](https://code.claude.com/docs/en/channels) -- Telegram, Discord, iMessage integration
- [Slack](https://code.claude.com/docs/en/slack) -- Slack workspace integration
- [Code Review](https://code.claude.com/docs/en/code-review) -- Multi-agent PR review system
- [Ultraplan](https://code.claude.com/docs/en/ultraplan) -- Cloud planning with browser review
- [Changelog](https://code.claude.com/docs/en/changelog) -- Version history and feature releases

### GitHub
- [Claude Code CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) -- Detailed changelog with all versions
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases) -- Release tags

### Anthropic Blog and Announcements
- [Claude Code GA Announcement](https://www.anthropic.com/news/claude-code-ga) -- General availability, background tasks, IDE integrations
- [Code Review Launch](https://claude.com/blog/code-review) -- Multi-agent review announcement (March 2026)
- [Dispatch and Computer Use](https://claude.com/blog/dispatch-and-computer-use) -- Phone-to-desktop task delegation
- [Claude Code Security](https://www.anthropic.com/news/claude-code-security) -- Security scanning research preview

### Third-Party Coverage
- [Claude Code Changelog (claudelog.com)](https://claudelog.com/claude-code-changelog/) -- Community changelog tracker
- [Claude Code Changelog (claudefast)](https://claudefa.st/blog/guide/changelog) -- Feature-by-feature breakdown
- [Nagarro Analysis](https://www.nagarro.com/en/blog/claude-code-feb-2026-update-analysis) -- February 2026 update analysis

---

## Changelog

| Date | Change |
|------|--------|
| 2026-04-03 | Initial research document created |
