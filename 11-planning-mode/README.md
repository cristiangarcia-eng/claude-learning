# Planning Mode

Planning Mode tells Claude to create a step-by-step plan before doing any work. Claude reads and analyzes but makes no changes until you approve the plan.

## When to use it

- Breaking down a big project into phases
- Scoping a feature before committing to it
- Understanding a codebase before making changes
- Creating a strategy or framework

## How to activate

Press **Shift+Tab** twice to enter Plan Mode. Or type:

```
/plan Create a competitive analysis for our Q3 product launch
```

Press `Ctrl+G` to open and edit the plan in your text editor.

## Example

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

Ready to proceed?
```

You can say "yes" to execute the whole plan, modify individual steps, or reject it entirely.

## Extended Thinking

For complex analysis, tell Claude to think deeper:

```
/effort high
```

| Effort Level | Best For |
|-------------|----------|
| `low` | Quick questions, simple lookups |
| `medium` | Standard analysis and summaries |
| `high` | Complex analysis, strategic decisions |

Toggle thinking on/off with `Option+T` (Mac) or `Alt+T` (Windows).

## Auto Mode

Auto Mode lets Claude work without asking permission for every action. A background safety check blocks anything risky.

Press **Shift+Tab** to cycle between modes:

| Mode | What it means |
|------|--------------|
| **Normal** | Claude asks before every change |
| **Accept edits** | Claude edits freely, asks before commands |
| **Plan** | Read-only, no changes |
| **Auto** | Claude works independently with safety checks |

> **Tip**: Start in Plan Mode when exploring something new. Switch to Normal or Auto when you're ready to execute.
