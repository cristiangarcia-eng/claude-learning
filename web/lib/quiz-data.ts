export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonQuiz {
  lessonSlug: string;
  questions: QuizQuestion[];
}

export const QUIZZES: LessonQuiz[] = [
  {
    lessonSlug: "slash-commands",
    questions: [
      {
        id: "sc1",
        question:
          "Where do custom slash commands (skills) live in your project?",
        options: [
          ".claude/commands/",
          ".claude/skills/",
          ".claude/slash/",
          "Both .claude/commands/ and .claude/skills/",
        ],
        correctIndex: 3,
        explanation:
          "Custom slash commands work from both .claude/commands/ and .claude/skills/, though skills (.claude/skills/) is the recommended approach.",
      },
      {
        id: "sc2",
        question: "How many built-in slash commands does Claude Code provide?",
        options: ["10+", "25+", "55+", "100+"],
        correctIndex: 2,
        explanation:
          "Claude Code provides 55+ built-in commands plus 5 bundled skills.",
      },
      {
        id: "sc3",
        question: "What file extension do skill definitions use?",
        options: ["SKILL.md", "COMMAND.md", "skill.json", "command.yaml"],
        correctIndex: 0,
        explanation:
          "Skills are defined in SKILL.md files within .claude/skills/ directories.",
      },
      {
        id: "sc4",
        question:
          "Which command compacts conversation context to save tokens?",
        options: ["/clear", "/compact", "/reset", "/minimize"],
        correctIndex: 1,
        explanation:
          "/compact summarizes the conversation to reduce token usage while preserving important context.",
      },
      {
        id: "sc5",
        question: "What happens when you type /help in Claude Code?",
        options: [
          "Opens the documentation website",
          "Shows available commands and usage information",
          "Starts a tutorial",
          "Creates a help file",
        ],
        correctIndex: 1,
        explanation:
          "/help displays available commands and usage information directly in the CLI.",
      },
    ],
  },
  {
    lessonSlug: "memory",
    questions: [
      {
        id: "m1",
        question: "What is the main file Claude uses for project memory?",
        options: [
          ".claude/memory.md",
          "MEMORY.md",
          "CLAUDE.md",
          ".claude/context.md",
        ],
        correctIndex: 2,
        explanation:
          "CLAUDE.md is the primary file Claude reads for project standards, context, and preferences.",
      },
      {
        id: "m2",
        question: "Where does personal (user-level) memory live?",
        options: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md",
          "~/.claude/memory/",
          "~/.config/claude/",
        ],
        correctIndex: 0,
        explanation:
          "Personal preferences go in ~/.claude/CLAUDE.md, which applies across all projects.",
      },
      {
        id: "m3",
        question: "Can you have directory-specific CLAUDE.md files?",
        options: [
          "No, only one CLAUDE.md per project",
          "Yes, they override the root CLAUDE.md",
          "Yes, they extend the root CLAUDE.md for that directory",
          "Only in monorepos",
        ],
        correctIndex: 2,
        explanation:
          "Directory-level CLAUDE.md files extend (not override) the root CLAUDE.md, adding context specific to that part of the codebase.",
      },
      {
        id: "m4",
        question:
          "When does Claude automatically load CLAUDE.md files?",
        options: [
          "Only when you ask it to",
          "At the start of every conversation",
          "Only in interactive mode",
          "When you run /memory",
        ],
        correctIndex: 1,
        explanation:
          "Claude automatically loads CLAUDE.md at the start of every conversation for persistent context.",
      },
      {
        id: "m5",
        question: "What types of information should go in CLAUDE.md?",
        options: [
          "Only code snippets",
          "Project standards, conventions, and preferences",
          "Complete documentation",
          "Only API keys and secrets",
        ],
        correctIndex: 1,
        explanation:
          "CLAUDE.md should contain project standards, coding conventions, architectural decisions, and workflow preferences.",
      },
    ],
  },
  {
    lessonSlug: "mcp",
    questions: [
      {
        id: "mcp1",
        question: "What does MCP stand for?",
        options: [
          "Model Control Protocol",
          "Model Context Protocol",
          "Multi-Channel Protocol",
          "Machine Communication Protocol",
        ],
        correctIndex: 1,
        explanation:
          "MCP stands for Model Context Protocol, a standard for connecting AI models to external data and tools.",
      },
      {
        id: "mcp2",
        question: "Where is MCP server configuration stored?",
        options: [
          "mcp.json",
          "CLAUDE.md",
          ".claude/settings.json or ~/.claude/settings.json",
          "package.json",
        ],
        correctIndex: 2,
        explanation:
          "MCP servers are configured in settings.json at the project or user level.",
      },
      {
        id: "mcp3",
        question: "What can MCP servers provide to Claude?",
        options: [
          "Only data",
          "Only tools",
          "Tools, resources, and prompts",
          "Only API access",
        ],
        correctIndex: 2,
        explanation:
          "MCP servers can provide tools (actions), resources (data), and prompts (templates) to Claude.",
      },
      {
        id: "mcp4",
        question: "Which transport protocols does MCP support?",
        options: [
          "HTTP only",
          "WebSocket only",
          "stdio and SSE (Server-Sent Events)",
          "gRPC only",
        ],
        correctIndex: 2,
        explanation:
          "MCP supports stdio (local processes) and SSE (Server-Sent Events) for remote servers.",
      },
      {
        id: "mcp5",
        question:
          "What is a common use case for the GitHub MCP server?",
        options: [
          "Deploying code",
          "Reading issues, PRs, and repo data directly",
          "Managing CI/CD pipelines",
          "Hosting websites",
        ],
        correctIndex: 1,
        explanation:
          "The GitHub MCP server lets Claude directly access issues, pull requests, and repository data.",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): LessonQuiz | undefined {
  return QUIZZES.find((q) => q.lessonSlug === slug);
}
