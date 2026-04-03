# Advanced Features

This lesson covers Claude Code's power features: planning tasks, controlling autonomy, voice input, remote access, and session management.

---

## Planning Mode

Planning Mode tells Claude to create a step-by-step plan for your review before doing any work.

**When to use:** Breaking down large projects, mapping content strategies, organizing complex analyses.

**How to activate:**
```
/plan Create a competitive analysis for our Q3 product launch
```

Or press `Shift+Tab` to cycle to Plan mode. Press `Ctrl+G` to edit the plan in your text editor.

### Example

```
You: /plan Create a go-to-market plan for our new feature

Claude:
## Phase 1: Research
1. Analyze competitor positioning
2. Review customer feedback data

## Phase 2: Messaging
3. Draft value propositions
4. Create positioning statements

## Phase 3: Materials
5. Outline sales deck content
6. Draft email announcement

Ready to proceed? (yes / no / modify plan)
```

---

## Extended Thinking

Tells Claude to spend more time reasoning before answering. Produces more thorough responses for complex questions.

**How to activate:** `Option+T` (Mac) or `Alt+T` (Windows/Linux), or type `/effort high`.

| Effort Level | Best For |
|-------------|----------|
| `low` | Quick questions, simple lookups |
| `medium` | Standard analysis and summaries |
| `high` | Complex analysis, strategic decisions |
| `max` | Deep multi-factor evaluation (Opus only) |

---

## Auto Mode and Permission Modes

Permission modes control how much freedom Claude has. Press `Shift+Tab` to cycle through them.

| Mode | What Claude Can Do | Best For |
|------|-------------------|----------|
| `default` | Reads freely; asks before other actions | General use |
| `acceptEdits` | Reads and edits freely; asks before commands | Focused work |
| `plan` | Read-only; creates plans for review | Research |
| `auto` | Acts freely with background safety checks | Hands-off work |

**Auto Mode** uses a background safety classifier. Safe actions (reading, editing files) proceed automatically; risky ones (sending data externally, mass deletions) require your approval. Requires a Team plan and Sonnet 4.6 or Opus 4.6.

---

## Voice Dictation

Speak your requests instead of typing. Useful for brainstorming and longer instructions.

```
/voice
```

Supports push-to-talk with 20 languages. Configure the trigger key via `/keybindings`.

---

## Remote Control

Continue a Claude Code session from your phone, tablet, or any browser. Your session stays on your computer.

```bash
claude remote-control
```

Connect via the printed URL, a QR code (press `spacebar`), or find your session at claude.ai/code.

**Use cases:** Review reports from a meeting, continue tasks from your phone, monitor progress remotely.

---

## Web Sessions and Desktop App

**Web Sessions:** Run Claude Code in your browser at claude.ai/code, or start one from terminal with `claude --remote "your task"`. Move between web and terminal with `claude --teleport`.

**Desktop App:** Standalone app for macOS and Windows with visual diff view, parallel sessions, scheduled tasks, and connectors for Slack, Linear, Notion, Asana, and Calendar. Transfer a terminal session with `/desktop`.

---

## Session Management

Organize tasks into named conversations you can return to later.

| Command | What It Does |
|---------|-------------|
| `claude -c` | Continue most recent conversation |
| `claude -r "name"` | Resume a named session |
| `claude -n "name"` | Start a session with a name |
| `/rename name` | Rename current session |
| `/resume` | Browse past sessions |
| `/fork` | Branch off to try a different approach |

```bash
# Start a session for a report
claude -n "marketing-report"

# Come back later
claude -r "marketing-report" "Add the competitive analysis section"

# Try a different direction without losing original work
claude --resume marketing-report --fork-session "try shorter format"
```

---

## Interactive Features

### Keyboard Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| `Shift+Tab` | Switch permission modes |
| `Option+T` / `Alt+T` | Toggle extended thinking |
| `Option+P` / `Alt+P` | Switch AI model |
| `Ctrl+C` | Cancel current operation |
| `Ctrl+R` | Search command history |
| `Ctrl+T` | Toggle task list |
| `Esc+Esc` | Undo last action |

### Multi-line Input

Start with `\` and end with `\end` for longer requests.

---

## Chrome Integration

Connect Claude Code to your Chrome browser with `claude --chrome` or `/chrome`. Claude can read web pages, extract data, and interact with authenticated apps (Gmail, Google Docs, Notion). Only works on sites you explicitly allow.

---

## Task List and Prompt Suggestions

**Task List:** Press `Ctrl+T` for a persistent checklist that survives even when conversation history is trimmed.

**Prompt Suggestions:** Grayed-out suggestions appear below your input. Press `Tab` to accept, or keep typing to ignore.

---

## Practice Exercises

> **[Exercise 7: From Screenshots to Spec](../11-exercises/exercise-07-screenshots-to-spec/)** — Use plan mode to structure a spec from screenshots, then execute. Practice plan mode, multimodal input, and extended thinking.
>
> **Time:** 30 min | **Data:** Your own screenshots (drop PNGs into the folder)

> **[Exercise 8: Prioritize from Chaos](../11-exercises/exercise-08-prioritize-from-chaos/)** — Design a prioritization framework in plan mode, then score 60 ideas. Practice plan/execute cycles and plan refinement.
>
> **Time:** 40 min | **Data:** 60-row CSV of unstructured ideas from 6 departments

## Additional Resources

- [Advanced Features Documentation](https://code.claude.com/docs/en)
- [Desktop App Quickstart](https://code.claude.com/docs/en/desktop-quickstart)

---

*Part of the [Claude How To](../) guide series*
