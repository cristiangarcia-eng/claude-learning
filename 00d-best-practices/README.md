# Best Practices

## How to talk to Claude effectively

Claude Code is like a very smart colleague. The clearer you communicate, the better results you get.

## Be specific, not vague

The single most important tip: **say exactly what you want**.

| Instead of... | Try... |
|--------------|--------|
| "Fix the homepage" | "Change the hero title on the homepage to 'Welcome to Nova'" |
| "Make it look better" | "Increase the font size of the headings and add more spacing between sections" |
| "There's a bug" | "Users see a blank screen after clicking the login button" |
| "Update the docs" | "Add a section about our refund policy to the FAQ page" |

## Give Claude a way to check its work

When possible, tell Claude how to verify the result:

```
Change the company email to hello@nova.com everywhere.
After making the changes, search the codebase to confirm
there are no remaining references to the old email.
```

```
Update the pricing on the website. After the change,
take a screenshot so I can verify it looks right.
```

## Let Claude explore first

Before asking for changes, let Claude understand the project:

```
Read through the project and explain the structure
to me like I'm a product manager.
```

Then:

```
Now that you understand the project, change the
pricing tier names from Basic/Pro/Enterprise
to Starter/Growth/Scale.
```

This two-step approach gets much better results than jumping straight to changes.

## Start with a plan

Before making changes, always start in **Plan Mode**. Press **Shift+Tab** twice to activate it — you'll see the mode indicator change at the bottom.

In Plan Mode, Claude can only read and analyze — it won't modify any files. This is the best way to start any task because Claude will think through the approach before doing anything.

The data backs this up: **tasks started with Plan Mode succeed on the first try 77% of the time**, compared to just 40% when jumping straight to changes. Planning first nearly doubles your success rate.

### Try it: plan a Nike market report

Open Claude Code in your `nike-analysis` folder and activate Plan Mode (Shift+Tab twice). Then type:

> `I want to turn this competitive analysis into a full market report. Plan what sections to add, what data from the CSV to include, and how to structure the final document.`

Claude will read your files and propose a detailed plan — without changing anything. You can review it, ask questions, and adjust before any work begins.

When the plan looks good, exit Plan Mode (press **Shift+Tab** to cycle back to normal mode) and tell Claude:

> `Go ahead, execute the plan.`

Now Claude will start making the actual changes. This **plan first, execute second** approach gives you much better results than jumping straight to changes.

## Keep conversations focused

Each conversation has a memory limit. When it fills up, Claude starts forgetting.

**Do this:**
- One topic per session
- Type `/clear` when switching topics
- Keep your requests focused

**Avoid this:**
- Asking about authentication, then pricing, then design, then bugs — all in one session
- Very long sessions without clearing

## The two-correction rule

If you correct Claude twice on the same issue and it's still not getting it right, **stop correcting and start over**. Type `/clear` and rewrite your prompt from scratch — this time being more specific about what you want.

Continuing to correct a confused Claude wastes time. A fresh, well-written prompt gets better results faster than a chain of corrections.

## Course-correct early

If Claude starts going in the wrong direction:

- Press **Esc** to stop it immediately
- Say "No, I meant..." and redirect
- If it's really confused, type `/clear` and start fresh with a better prompt

> After two corrections on the same issue, it's faster to `/clear` and write a better initial prompt than to keep correcting.

## The interview technique

For bigger tasks, let Claude ask YOU questions first:

```
I want to redesign our onboarding flow. Interview me
about what I have in mind — ask about goals, user types,
and constraints before making any changes.
```

Claude will ask smart questions about things you might not have considered. Once aligned, it can execute much more accurately.

## The learning loop

The biggest difference between good and great Claude Code users is the **learning loop**. After every project or session:

1. **Note what worked** — which prompts got great results on the first try?
2. **Note what didn't** — where did Claude go in the wrong direction?
3. **Update your CLAUDE.md** — add the lessons so Claude doesn't repeat mistakes

```
Add to my project memory: "When creating reports, always
include an executive summary at the top. The team complained
last time when it was buried at the end."
```

Over time, your CLAUDE.md becomes a living document that makes Claude smarter with every project. The people who get the most value from Claude Code are the ones who iterate on their memory files — not the ones who write the best prompts.

## Summary: the golden rules

1. **Start with a plan** — always use Plan Mode before making changes
2. **Be specific** — say exactly what you want
3. **Explore first** — let Claude understand before changing
4. **Clear often** — `/clear` between different topics
5. **Let Claude verify** — tell it how to check its own work
6. **Course-correct fast** — Esc and redirect if it's going wrong
7. **Interview technique** — for big tasks, let Claude ask questions first

