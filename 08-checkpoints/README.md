# Checkpoints
**The safety layer**

Memory gives Claude context, but it doesn't protect you from mistakes. You ask Claude to rewrite a section of your report and it goes in the wrong direction. Or you try an approach and realize it was a dead end. Without a way to go back, you're stuck cleaning up the mess.

> **Checkpoints let you experiment without fear. Try anything — if it doesn't work, rewind.**

Every time you send a message to Claude, it automatically saves a checkpoint — a snapshot of your conversation and files at that moment. Think of it like an unlimited "undo" button. You can rewind to any previous point and start again from there.

## How to rewind

Press **Esc twice** (Esc + Esc) to open the checkpoint browser. You'll see a list of all your checkpoints with timestamps.

Select any checkpoint and you'll see these options:

1. **Restore code and conversation** — go back to that exact point (files + conversation)
2. **Restore conversation** — rewind the chat but keep your current files
3. **Restore code** — revert the files but keep the conversation
4. **Never mind** — cancel and stay where you are

Most of the time, you'll want option 1 — a full rewind.

## When to use checkpoints

### You don't like what Claude did

You asked Claude to rewrite a section of your report and it went in the wrong direction. Instead of trying to fix it, just rewind:

1. Press **Esc + Esc**
2. Select the checkpoint before the change
3. Choose **Restore code and conversation**
4. Ask Claude again with a clearer instruction

### You want to try two approaches

You're not sure how to structure your analysis. Try both:

1. Ask Claude for approach A
2. Review the result
3. Press **Esc + Esc** and rewind to before approach A
4. Ask Claude for approach B
5. Compare and keep the one you prefer

### Something went wrong

Claude made several changes and now things are messy. No problem — rewind to the last point where everything was fine.

## Things to know

- **Checkpoints are automatic** — you don't need to create them manually
- **They're created on every message** — so you can rewind to any point in your conversation
- **They last 30 days** — old checkpoints are cleaned up automatically
- **Press Esc + Esc** — that's all you need to remember

> **The key idea:** Checkpoints let you experiment without fear. Try things, and if they don't work, rewind. It's that simple.

