# Claude10x

**Master Claude Code — without writing code.**

Claude10x is a self-paced online course that teaches Product Managers, designers, marketers, founders, and other non-engineers how to turn Claude Code into a daily productivity tool. No prior coding experience required.

---

## What this is

Most Claude Code tutorials assume you already live in a terminal. This course doesn't. It starts at the very beginning — opening a terminal for the first time — and walks you step by step until you're running plan mode, voice input, parallel agents, and custom skills against your own work.

Everything is hands-on. You follow along on your own laptop, on real tasks (spreadsheets, reports, research, briefs, websites), and you end the course with a Claude setup tailored to how *you* work.

## Who it's for

- **Product Managers** who want to ship research, specs, and analysis faster without waiting on engineering
- **Designers** who want to iterate on copy, assets, and flows directly
- **Sales & Marketing** who want to automate reports, outreach, and content
- **Founders & operators** who want to stop context-switching between tools
- **Anyone curious** about what the terminal actually unlocks

If you've never opened a terminal before, that's the intended starting point.

## What's inside

- **25 lessons** across four tracks — Starter, Pro, Projects, and Extras
- **Hands-on exercises** with real data files (CSVs, JSONs, screenshots) so you practice on realistic scenarios, not toy examples
- **Bilingual content** — English and Spanish
- **Progress tracking** so you can pick up where you left off
- **Lifetime access** — revisit any lesson whenever Claude Code ships new features

### Curriculum overview

| Track | Focus |
|-------|-------|
| **Starter** | Terminal basics, first commands, how Claude Code works, best practices, context window, models, plan mode |
| **Pro** | Memory, skills, subagents, MCP, plugins, checkpoints, parallel agents, token optimization |
| **Projects** | Voice & remote workflows, desktop & web, computer use, Chrome automation, real end-to-end exercises |
| **Extras** | Power-user hacks and tips that don't fit anywhere else |

Lesson content lives as Markdown under the numbered folders at the repo root (`00-intro/`, `02-memory/`, `03-skills/`, …, `18-hacks/`).

## Pricing

| Plan | Includes | Price |
|------|----------|-------|
| **Course** | All lessons, exercises, progress tracking, lifetime access | **$99** one-time |
| **Course + Mentoring** | Everything in Course, plus 2 personal mentoring sessions tailored to your workflow and follow-up support | **$299** one-time |

## Your instructor

**Cristian Garcia** — Chief Product Officer at [Nova Talent](https://novatalent.com). 8+ years building digital products at Banco Santander and BBVA, shipping apps used by millions. Claude Code is his daily driver for everything from research to production workflows.

---

## Repository structure

This repo contains both the course content and the web app that delivers it:

```
claude-learning/
├── 00-intro/ … 18-hacks/   # Lesson content (Markdown + images)
├── 11-exercises/           # Hands-on exercises with real data
├── web/                    # Next.js 16 course platform (what students see)
├── resources/              # Logos, icons, shared assets
├── prompts/                # Prompt templates used in lessons
├── scripts/                # Tooling (prebuild, video upload, etc.)
└── slides/                 # Presentation material
```

## Running the platform locally

The course website lives in `web/` and is a Next.js 16 app (React 19, Tailwind v4, Auth.js, Stripe, Upstash Redis, Vercel Blob).

### Prerequisites

- Node.js 20+
- An `.env.local` in `web/` with the following keys:
  - `AUTH_SECRET`
  - `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL`, `REDIS_URL`
  - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_COURSE`, `STRIPE_PRICE_ID_MENTORING`
  - `BLOB_READ_WRITE_TOKEN`
  - `GMAIL_USER`, `GMAIL_APP_PASSWORD`
  - `NEXT_PUBLIC_CALENDLY_URL`

### Install & run

```bash
cd web
npm install
npm run dev
```

Open <http://localhost:3000>.

The `prebuild` step (run automatically by `dev` and `build`) copies lesson images, icons, and logos from the repo root into `web/public/` so they're served alongside the app.

### Adding a new lesson

1. Create a new numbered folder at the repo root with a `README.md` (English) and optional `README.es.md` (Spanish). Drop any images under `./images/`.
2. Register the lesson in `web/lib/lessons.ts` with its slug, track, duration, and order.
3. Run `npm run prebuild` from `web/` to copy the new images into `public/`.
4. Lesson videos are served from Vercel Blob, not committed to git — upload with `scripts/upload-lesson-video.sh <slug> <file>`.

---

## License

© Cristian Garcia. All course content (lessons, exercises, videos, imagery) is proprietary and intended for enrolled students. The web application source code is provided for transparency and local development; redistribution of the course material is not permitted.

For licensing questions, reach out via the course contact page.
