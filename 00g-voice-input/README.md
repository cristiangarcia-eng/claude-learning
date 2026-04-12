# Working with Your Voice

> **This is possibly the most important lesson in the entire course.**

*Why on earth is there a lesson about talking with your voice in an AI course?*

Because if there's one thing that determines whether AI gives you great results or mediocre ones, it's a single factor: **the context you provide**. By far the most important factor. More than knowing the perfect prompt, more than learning advanced tricks — what makes the difference is whether the AI truly understands your situation.

And here's the key discovery: **voice dramatically improves your context**.

When you type, you tend to summarize, simplify, and cut to the chase. You skip details that seem obvious. The result is a short, vague prompt that produces generic responses.

When you speak, the opposite happens. You naturally share more: the problem you're facing, how you'd thought about solving it, what you've already tried, the project context, why it matters... All that additional information is exactly what the AI needs to give you a truly useful response.

### The golden rule

**Talk to the AI like you'd talk to a colleague.** Do it in a structured or unstructured way, however it comes to mind, but speak instead of typing:

- Tell it the problem you're trying to solve
- Tell it the options you'd considered
- Tell it the project context — who will use it, what constraints exist
- Tell it what you've already tried and why it didn't work

You don't need to organize your thoughts. That's the AI's job.

> **Use the language you're most comfortable in.** If you think better in Spanish, speak in Spanish. If you mix languages, mix languages. What matters is that you express yourself naturally and with depth — not the language.

### What you must always avoid

**Never give vague answers to the AI.** This is equally important when speaking as when typing:

- ❌ *"Make me something for the website"* → ✅ *"I need a pricing section for our website, with three plans: basic at 29, pro at 59, and custom enterprise. The audience is PMs at mid-size companies."*
- ❌ *"Fix this"* → ✅ *"The contact form isn't sending the email. I think the problem is the API because the button does respond to clicks but nothing happens after."*
- ❌ *"Improve the copy"* → ✅ *"The landing page copy sounds too technical. Our customers are marketing directors who don't know code. Make it more accessible without losing credibility."*

Vagueness is the enemy of good results. Voice helps you avoid it because when you speak, you naturally provide more context.

## The recommended way: Wispr Flow

We strongly recommend installing **Wispr Flow** — a voice-to-text app that works everywhere on your computer. It's not just for Claude Code — you can use it in any app: Slack, email, Google Docs, your browser, anywhere.

You hold down a shortcut key, talk, release it, and your words appear as text wherever your cursor is. It's fast, accurate, learns your style, and adds punctuation automatically. Once you try it, it's hard to go back.

### How to set it up

1. Download **Wispr Flow** from [wisprflow.ai](https://www.wisprflow.ai)
2. Install and open it
3. Hold the **shortcut key** (it shows you which one during setup)
4. Start talking — your words appear as text wherever your cursor is
5. Release the key when you're done

That's it. Now you can "type" by talking in any app.

### Using Wispr Flow with Claude Code

Open Claude Code in your Cursor terminal, then:

1. Click into the input area
2. Hold the Wispr Flow shortcut key
3. Say what you want: *"Find all the pages on our website that mention the old company name and show me a list"*
4. Release the key — your words appear as text
5. Press Enter to send to Claude

It feels like having a conversation. You talk, Claude listens and works.

### Example prompts you can just say out loud

> "Read through the landing page and tell me if the messaging is clear for a non-technical audience"

> "Find the pricing section and change the monthly price from 49 to 59 dollars"

> "Compare our homepage with this competitor URL and tell me what they do better"

> "Create a summary of all the changes made this week that I can share with my team on Slack"

## Open-source alternative: Handy

Wispr Flow is paid — though its free tier is generous. If you'd rather use something completely free and open source, check out **Handy**: [handy.computer](https://handy.computer/).

Handy follows the same idea as Wispr Flow (push-to-talk in any app on your computer), but it's free software and runs locally on your machine using Whisper models. Accuracy is slightly lower than Wispr Flow and auto-formatting is more basic, but for many use cases it's more than enough — and it's 100% free.

## Alternative: Claude's built-in voice

Claude Code also has its own built-in voice feature:

```
/voice
```

This activates push-to-talk directly inside Claude Code. Hold the trigger key, speak, and release.

The difference is that `/voice` only works inside Claude Code, while Wispr Flow and Handy work in every app on your computer. For most people, a system-wide tool (Wispr Flow or Handy) is the better choice — you'll use it everywhere, not just with Claude.

> **Note for non-English speakers**: Claude's built-in `/voice` is optimized for English. If you speak Spanish or other languages, the transcription accuracy drops noticeably. Wispr Flow and Handy handle multiple languages much better, which is another reason we recommend using one of those two.

### Quick comparison

Now that you know the three options, here's how they stack up:

| Feature | Wispr Flow | Handy | Built-in voice (`/voice`) |
|---|---|---|---|
| Works everywhere | ✅ Any app | ✅ Any app | ❌ Only Claude Code |
| Price | Paid (generous free tier) | Free and open source | Free |
| Accuracy | Excellent, learns your style | Good (local Whisper) | Good in English, weaker elsewhere |
| Auto-formatting | Smart punctuation | Basic | Basic |
| Non-English languages | Very good | Good | Weak |

## Voice dumps: the context you'd never type

Instead of spending 20 minutes writing a detailed brief, try a **voice dump** — just talk for 2-3 minutes straight, telling the AI everything it needs to know.

The magic of the voice dump is that **you include context you'd never bother typing** — the team's complaint last time, the budget constraint nobody documented, the real reason this project matters.

> **Voice dumps are 3x faster than typing** and produce better results because the AI receives the complete context, not the summarized version.


