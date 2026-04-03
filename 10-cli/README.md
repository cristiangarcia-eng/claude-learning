# CLI Usage for Daily Work

The essential Claude Code commands for everyday use. No programming experience required.

---

## Starting Claude Code

Open your terminal and type:

```bash
claude
```

This starts an interactive conversation. You can also start with a specific request:

```bash
claude "Summarize the documents in this folder"
```

---

## Keyboard Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| `Shift+Tab` | Switch permission modes |
| `Option+T` / `Alt+T` | Toggle extended thinking |
| `Option+P` / `Alt+P` | Switch AI model |
| `Ctrl+C` | Stop current operation |
| `Ctrl+L` | Clear screen |
| `Ctrl+R` | Search past commands |
| `Ctrl+T` | Show/hide task list |
| `Esc+Esc` | Undo last change |
| `Up/Down arrows` | Browse previous commands |
| `Tab` | Accept autocomplete suggestion |

---

## Session Management

Sessions save your conversations so you can return to them later.

| Command | What It Does |
|---------|-------------|
| `claude -n "name"` | Start a named session |
| `claude -c` | Continue most recent conversation |
| `claude -r "name"` | Resume a named session |
| `claude -r "name" "request"` | Resume and add a new request |
| `/resume` | Browse past sessions interactively |
| `/rename new-name` | Rename current session |
| `/fork` | Branch off to try a different approach |

### Example: Multiple Projects

```bash
claude -n "quarterly-report"       # Start a report session
claude -n "budget-review"          # Start a budget session
claude -r "quarterly-report"       # Switch back to the report
```

### Forking

Try a different approach without losing your current work:

```bash
claude --resume quarterly-report --fork-session "try shorter version"
```

---

## Choosing a Model

| Model | Best For | Command |
|-------|----------|---------|
| **Sonnet** (default) | Everyday tasks | `claude --model sonnet` |
| **Opus** | Complex analysis, deep thinking | `claude --model opus` |
| **Haiku** | Quick answers, fastest | `claude --model haiku` |

Switch during a session with `Option+P` (Mac) or `Alt+P` (Windows/Linux).

---

## Useful Slash Commands

| Command | What It Does |
|---------|-------------|
| `/help` | Show all available commands |
| `/plan your request` | Plan before acting |
| `/effort high` | Set thinking depth |
| `/voice` | Voice dictation |
| `/mcp` | Check connected tools |

---

## Tips

- **Name sessions** with `-n "name"` so you can find them later.
- **Use `/plan`** for complex tasks so Claude shows its approach first.
- **Type `/help`** if you forget any command.
- **Fork freely** -- the original session is always preserved.

---

## Practice Exercise

> **[Exercise 9: Folder Audit](../11-exercises/exercise-09-folder-audit/)** — Use `claude -p`, piping, and JSON output to build a reusable folder audit script. Practice print mode, piping content into Claude, and scripting with structured output.
>
> **Time:** 30 min | **Data:** Audit the exercises folder itself (meta!)

## Additional Resources

- [Official CLI Reference](https://code.claude.com/docs/en/cli-reference)
- [Advanced Features](../09-advanced-features/)

**Next step**: [Give Claude reusable skills and automatic expertise →](../03-skills/)

---

*Part of the [Claude How To](../) guide series*
