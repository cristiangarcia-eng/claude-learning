export interface LessonMeta {
  folder: string;
  slug: string;
  title: string;
  description: string;
  level: "starter" | "beginner" | "intermediate" | "advanced";
  duration: string;
  complexity: number; // 1-5 stars
  order: number; // pedagogical order
}

export const LESSONS: LessonMeta[] = [
  // === STARTER: Absolute beginners (no terminal experience) ===
  {
    folder: "00-terminal-basics",
    slug: "terminal-basics",
    title: "Terminal Basics",
    description: "What is a terminal? The 4 commands you need to get started",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 1,
  },
  {
    folder: "00f-vscode",
    slug: "vscode",
    title: "Visual Studio Code",
    description: "Set up VS Code — the recommended way to use Claude Code with terminal + files in one place",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 2,
  },
  {
    folder: "00g-voice-input",
    slug: "voice-input",
    title: "Working with Your Voice",
    description: "Talk instead of type — set up Wispr Flow for 10x faster input",
    level: "starter",
    duration: "10 min",
    complexity: 1,
    order: 3,
  },
  {
    folder: "00b-quickstart",
    slug: "quickstart",
    title: "Quickstart",
    description: "Install Claude Code, log in, and have your first conversation",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 3,
  },
  {
    folder: "00c-how-it-works",
    slug: "how-it-works",
    title: "How It Works",
    description: "The conversation loop, context window, and permissions explained simply",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 4,
  },
  {
    folder: "00d-best-practices",
    slug: "best-practices",
    title: "Best Practices",
    description: "How to talk to Claude effectively and get great results",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 5,
  },
  {
    folder: "00e-workflows",
    slug: "workflows",
    title: "Practical Workflows",
    description: "Real tasks for PMs, designers, sales, and non-developers",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 6,
  },

  // === BEGINNER: Core Claude Code features ===
  {
    folder: "01-slash-commands",
    slug: "slash-commands",
    title: "Slash Commands",
    description: "55+ built-in commands and custom shortcuts",
    level: "beginner",
    duration: "30 min",
    complexity: 2,
    order: 7,
  },
  {
    folder: "02-memory",
    slug: "memory",
    title: "Memory",
    description: "Persistent context, project standards, and preferences",
    level: "beginner",
    duration: "45 min",
    complexity: 2,
    order: 8,
  },
  {
    folder: "08-checkpoints",
    slug: "checkpoints",
    title: "Checkpoints",
    description: "Safe exploration with session checkpoints and recovery",
    level: "beginner",
    duration: "45 min",
    complexity: 2,
    order: 8,
  },
  {
    folder: "10-cli",
    slug: "cli",
    title: "CLI Basics",
    description: "Core CLI usage, interactive and print mode",
    level: "beginner",
    duration: "30 min",
    complexity: 2,
    order: 9,
  },

  // === INTERMEDIATE: Building workflows ===
  {
    folder: "03-skills",
    slug: "skills",
    title: "Skills",
    description: "Reusable agent capabilities and automatic expertise",
    level: "intermediate",
    duration: "1 hour",
    complexity: 3,
    order: 10,
  },
  {
    folder: "05-mcp",
    slug: "mcp",
    title: "MCP",
    description: "Model Context Protocol for live data access and integration",
    level: "intermediate",
    duration: "1 hour",
    complexity: 3,
    order: 12,
  },
  {
    folder: "04-subagents",
    slug: "subagents",
    title: "Subagents",
    description: "Delegate complex tasks to specialized agents",
    level: "intermediate",
    duration: "1.5 hours",
    complexity: 3,
    order: 13,
  },

  // === ADVANCED: Power user ===
  {
    folder: "11-planning-mode",
    slug: "planning-mode",
    title: "Planning & Auto Mode",
    description: "Plan before executing, control autonomy, and extend thinking",
    level: "advanced",
    duration: "15 min",
    complexity: 3,
    order: 14,
  },
  {
    folder: "12-voice-and-remote",
    slug: "voice-and-remote",
    title: "Voice & Remote Control",
    description: "Speak instead of type, control sessions from your phone",
    level: "advanced",
    duration: "10 min",
    complexity: 2,
    order: 15,
  },
  {
    folder: "13-desktop-and-web",
    slug: "desktop-and-web",
    title: "Desktop App & Web",
    description: "Visual diffs, scheduled tasks, and browser sessions",
    level: "advanced",
    duration: "10 min",
    complexity: 2,
    order: 16,
  },
  {
    folder: "14-computer-use",
    slug: "computer-use",
    title: "Computer Use",
    description: "Let Claude see and control your screen to automate visual tasks",
    level: "advanced",
    duration: "10 min",
    complexity: 3,
    order: 17,
  },
  {
    folder: "15-chrome",
    slug: "chrome",
    title: "Chrome Integration",
    description: "Connect Claude to your browser to read pages and interact with web apps",
    level: "advanced",
    duration: "10 min",
    complexity: 3,
    order: 18,
  },
  {
    folder: "07-plugins",
    slug: "plugins",
    title: "Plugins",
    description: "Pre-configured bundles for instant productivity",
    level: "advanced",
    duration: "10 min",
    complexity: 3,
    order: 15,
  },
];

export function getLessonBySlug(slug: string): LessonMeta | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function getLessonsByLevel(level: LessonMeta["level"]): LessonMeta[] {
  return LESSONS.filter((l) => l.level === level);
}

export function getAdjacentLessons(slug: string) {
  const idx = LESSONS.findIndex((l) => l.slug === slug);
  return {
    prev: idx > 0 ? LESSONS[idx - 1] : null,
    next: idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null,
  };
}
