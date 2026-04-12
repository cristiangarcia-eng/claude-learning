# Plan Mode

One of the things that makes Claude Code feel safe is that **you're always in control**. Claude asks before making changes, shows you what it's about to do, and never touches anything without your approval. But there's an even safer mode — **Plan mode** — that locks Claude into read-only so it can analyze and plan without any risk of changing a single file.

This lesson walks through the three modes Claude Code offers, and why Plan mode in particular is the secret weapon for learning and exploring without breaking anything.

## The three modes

Claude Code has three permission modes:

| Mode | What Claude can do | When to use it |
|------|--------------------|----------------|
| **Normal** (default) | Read, edit, and run commands — but asks for permission every time | Day-to-day work |
| **Auto-accept** | Read, edit, and run commands without asking | Only when you fully trust the task and want speed |
| **Plan mode** | **Read only.** Claude can analyze, think, and propose — but cannot change anything | Exploring, learning, high-stakes decisions |

Most people should start in **Normal** mode and stay there. The permission prompts become second nature after a few minutes, and they keep you in the loop.

## How to switch modes

You switch between modes with a single keyboard shortcut:

**Press `Shift + Tab`** to cycle through Normal → Auto-accept → Plan → Normal.

If you're not sure which keys those are, here they are on a standard keyboard — `Shift` on the left side, `Tab` just above it:

![The Shift and Tab keys highlighted on a laptop keyboard](./images/shift-tab-keyboard.png)

Hold `Shift` and tap `Tab` at the same time. Each press moves you to the next mode. You'll see the current mode indicated in the Claude Code interface so you always know where you are.

## Plan mode: the safe sandbox

Plan mode is special. When it's on, Claude **physically cannot modify your files or run commands**. It can only read. That sounds limiting, but it unlocks a very powerful way to work:

- **Ask Claude to analyze** your entire project without worrying that it might accidentally change something.
- **Let Claude propose a plan** — "how would you restructure these folders?" — and you get a full write-up without any actual changes.
- **Explore unfamiliar files** with zero risk. Claude can read and explain them to its heart's content.
- **Try a prompt you're not sure about** — if you're worried Claude might take a wrong turn and start editing things, Plan mode removes that risk entirely.

> **Plan mode is great for learning.** When you're new to Claude Code, put it in Plan mode and ask it to analyze your project. You get all the benefit of Claude's understanding with zero risk of anything going wrong. Once you see its plan, you can switch back to Normal mode and actually execute it.

## Start with a plan — always

Before making changes, always start in Plan mode. You have two ways to activate it:

- **Keyboard shortcut:** Press `Shift + Tab` **twice** — you'll see the mode indicator change at the bottom of the screen. Works on Mac, Windows, and Linux.
- **Natural language:** Just tell Claude *"switch to plan mode"*. Claude understands the instruction and changes modes for you.

In Plan mode, Claude can only read and analyze — it won't modify any files. Starting every task this way is worth it because Claude thinks through the approach before doing anything.

**The numbers back this up:** tasks that start in Plan mode succeed on the first try **77% of the time**, compared to just **40%** when you jump straight to changes. Planning first nearly doubles your success rate.

### Try it: plan a Nike market report

Open Claude Code in your `nike-analysis` folder and switch to Plan mode (`Shift + Tab` twice, or tell Claude *"switch to plan mode"*). Then type:

> Convert this competitive analysis into a full market report. Plan which sections to add, which data from the CSV to include, and how to structure the final document.

Claude will read your files and propose a detailed plan — without changing anything. You can review it, ask questions, and adjust before any work starts.

When the plan looks good, Claude offers you four options to continue:

![The four options Claude Code shows after finishing a plan](./images/plan-mode-options.png)

| Option | What it does |
|--------|--------------|
| **Yes, auto-accept edits** | Claude executes the plan and applies all changes without asking at each step. The fastest option. |
| **Yes, manually approve edits** | Claude executes the plan but asks for confirmation before each change. More control, slower. |
| **No, refine with Ultraplan on Claude Code on the web** | Sends the plan to Claude Code on the web, where Ultraplan refines it further before execution. Useful when the plan still feels too vague or the task is complex enough to deserve a deeper second pass. |
| **Tell Claude what to change** | Lets you give feedback on the plan before executing. E.g., *"drop section 3"* or *"start with the CSV"*. |

Pick whichever one fits, and Claude gets to work.

This plan-first, execute-later approach gives you much better results than diving straight into changes.

## Auto-accept: use with caution

Auto-accept mode is the opposite of Plan mode — Claude makes changes without asking for permission. It's fast, but it's also the mode where people accidentally ship things they didn't intend.

**Only use Auto-accept when:**

- You've clearly scoped the task in your prompt
- You trust that Claude has enough context to do it right
- The changes are easily reversible (you're in version control, you have backups, etc.)
- You're doing a bunch of repetitive edits and the permission prompts are slowing you down

If any of those aren't true, stick with Normal mode.

## Key takeaways

1. **Claude Code has three modes** — Normal, Auto-accept, and Plan.
2. **`Shift + Tab`** cycles between them (twice to reach Plan). You can also just tell Claude *"switch to plan mode"*.
3. **Plan mode is read-only** — Claude can analyze and propose but cannot change anything.
4. **Start serious tasks in Plan mode** — it nearly doubles first-try success rate (77% vs 40%).
5. **Use Auto-accept sparingly** — only for tasks you've scoped well and can easily undo.
