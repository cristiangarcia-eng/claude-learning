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
  {
    lessonSlug: "checkpoints",
    questions: [
      {
        id: "cp1",
        question: "How do you open the checkpoint browser in Claude Code?",
        options: [
          "Type /checkpoints",
          "Press Ctrl+Z",
          "Press Esc twice (Esc + Esc)",
          "Click the undo button",
        ],
        correctIndex: 2,
        explanation:
          "Pressing Esc twice opens the checkpoint browser, where you can see all your saved checkpoints with timestamps.",
      },
      {
        id: "cp2",
        question: "When are checkpoints created?",
        options: [
          "Only when you manually save",
          "Automatically on every message you send",
          "Once per session",
          "Every 10 minutes",
        ],
        correctIndex: 1,
        explanation:
          "Checkpoints are created automatically every time you send a message to Claude, so you can rewind to any point in the conversation.",
      },
      {
        id: "cp3",
        question:
          "Which restore option brings back both your files and the conversation to a previous point?",
        options: [
          "Restore conversation",
          "Restore code",
          "Restore code and conversation",
          "Full reset",
        ],
        correctIndex: 2,
        explanation:
          "\"Restore code and conversation\" does a full rewind, reverting both your files and the chat history to that checkpoint.",
      },
      {
        id: "cp4",
        question: "How long do checkpoints last before being cleaned up?",
        options: ["24 hours", "7 days", "30 days", "They last forever"],
        correctIndex: 2,
        explanation:
          "Checkpoints are automatically cleaned up after 30 days.",
      },
      {
        id: "cp5",
        question:
          "What is a good use case for checkpoints?",
        options: [
          "Saving your work to the cloud",
          "Trying two different approaches and comparing them",
          "Sharing your work with teammates",
          "Backing up your entire computer",
        ],
        correctIndex: 1,
        explanation:
          "Checkpoints are perfect for experimenting. You can try approach A, rewind, try approach B, and keep whichever you prefer.",
      },
    ],
  },
  {
    lessonSlug: "cli",
    questions: [
      {
        id: "cl1",
        question: "How do you start a named session in Claude Code?",
        options: [
          "claude --name \"my-session\"",
          "claude -n \"my-session\"",
          "claude start \"my-session\"",
          "claude session new \"my-session\"",
        ],
        correctIndex: 1,
        explanation:
          "Use claude -n \"name\" to start a named session, which makes it easy to find and resume later.",
      },
      {
        id: "cl2",
        question: "What does the /plan command do?",
        options: [
          "Creates a project timeline",
          "Shows Claude's approach before it acts on a complex task",
          "Plans your schedule for the day",
          "Lists all available commands",
        ],
        correctIndex: 1,
        explanation:
          "/plan lets you see Claude's proposed approach before it starts working, which is helpful for complex tasks.",
      },
      {
        id: "cl3",
        question:
          "Which keyboard shortcut lets you switch between AI models during a session?",
        options: [
          "Ctrl+M",
          "Shift+Tab",
          "Option+P / Alt+P",
          "Ctrl+S",
        ],
        correctIndex: 2,
        explanation:
          "Option+P (Mac) or Alt+P (Windows/Linux) lets you switch between models like Sonnet, Opus, and Haiku during a session.",
      },
      {
        id: "cl4",
        question: "How do you continue your most recent conversation?",
        options: [
          "claude -c",
          "claude --last",
          "claude resume",
          "/continue",
        ],
        correctIndex: 0,
        explanation:
          "claude -c continues your most recent conversation, picking up right where you left off.",
      },
      {
        id: "cl5",
        question: "What does forking a session do?",
        options: [
          "Deletes the current session and starts fresh",
          "Creates a branch so you can try a different approach without losing the original",
          "Splits the session between two people",
          "Copies the session to a different project",
        ],
        correctIndex: 1,
        explanation:
          "Forking creates a branch of your session so you can try a different approach while preserving the original session.",
      },
    ],
  },
  {
    lessonSlug: "skills",
    questions: [
      {
        id: "sk1",
        question: "What is a Skill in Claude Code?",
        options: [
          "A programming language Claude can learn",
          "Reusable instructions that Claude follows automatically for consistent results",
          "A certification you earn after completing training",
          "A plugin that adds new AI models",
        ],
        correctIndex: 1,
        explanation:
          "Skills are reusable instructions saved once that Claude follows automatically whenever they are relevant, producing consistent results every time.",
      },
      {
        id: "sk2",
        question: "Where can you find ready-to-use skills built by the community?",
        options: [
          "The Claude Code settings menu",
          "skillsmp.com (the Skills Marketplace)",
          "GitHub releases page",
          "The /help command",
        ],
        correctIndex: 1,
        explanation:
          "The Skills Marketplace at skillsmp.com is like an app store for Claude Code capabilities, with hundreds of ready-to-use skills.",
      },
      {
        id: "sk3",
        question: "Where do team-shared skills live in a project?",
        options: [
          "~/.claude/skills/",
          ".claude/skills/",
          "/usr/local/claude/skills/",
          "CLAUDE.md",
        ],
        correctIndex: 1,
        explanation:
          "Skills in .claude/skills/ within the project folder are shared with the whole team. Personal skills go in ~/.claude/skills/.",
      },
      {
        id: "sk4",
        question: "What is the easiest way to create a new skill?",
        options: [
          "Write a JSON configuration file manually",
          "Ask Claude to create one by describing what you want",
          "Download a template from the website",
          "Use the settings panel in the Desktop App",
        ],
        correctIndex: 1,
        explanation:
          "The easiest way is to simply ask Claude to create a skill by describing what you want. Claude will create the file in the right location.",
      },
      {
        id: "sk5",
        question: "How does Claude know when to use a skill?",
        options: [
          "You must always type the skill's slash command",
          "Skills run on a fixed schedule",
          "Claude detects when a skill is relevant and activates it automatically",
          "You must enable skills manually each session",
        ],
        correctIndex: 2,
        explanation:
          "Claude can detect when a skill is relevant to your request and activate it automatically, though you can also invoke skills directly with a slash command.",
      },
    ],
  },
  {
    lessonSlug: "subagents",
    questions: [
      {
        id: "sa1",
        question: "What is the key difference between a Skill and a Subagent?",
        options: [
          "Skills are free, subagents cost extra",
          "Skills are instructions Claude follows; subagents are separate assistants Claude delegates to",
          "Skills work offline, subagents need the internet",
          "There is no difference, they are the same thing",
        ],
        correctIndex: 1,
        explanation:
          "A Skill is like a recipe Claude follows directly. A Subagent is a separate assistant that Claude delegates a task to, like handing work to a specialist.",
      },
      {
        id: "sa2",
        question: "When should you use a subagent instead of a skill?",
        options: [
          "When you need consistent formatting",
          "When the task requires deep research or analysis that would clutter your main conversation",
          "When you want to change Claude's voice",
          "When you need to save a template",
        ],
        correctIndex: 1,
        explanation:
          "Subagents are best for complex tasks like deep research or analysis. They work in their own space so your main conversation stays clean.",
      },
      {
        id: "sa3",
        question: "How can you send a subagent to work in the background?",
        options: [
          "Type /background",
          "Press Ctrl+B while the subagent is working",
          "Add --background to the command",
          "Subagents always run in the background",
        ],
        correctIndex: 1,
        explanation:
          "Press Ctrl+B while a subagent is working to send it to the background. Claude will notify you when it is done.",
      },
      {
        id: "sa4",
        question: "Where do project-level subagents live?",
        options: [
          ".claude/skills/",
          ".claude/agents/",
          "~/.claude/subagents/",
          "CLAUDE.md",
        ],
        correctIndex: 1,
        explanation:
          "Project-level subagents live in .claude/agents/ within your project folder, where your whole team can use them.",
      },
      {
        id: "sa5",
        question:
          "Which of these is a practical example of a subagent?",
        options: [
          "A template for formatting meeting notes",
          "A competitor analyst that researches companies and returns a structured briefing",
          "A keyboard shortcut for copying text",
          "A spell-checker for documents",
        ],
        correctIndex: 1,
        explanation:
          "A competitor analyst subagent goes off, researches companies from your files, and comes back with structured results — a great example of delegating a complex task.",
      },
    ],
  },
  {
    lessonSlug: "voice-and-remote",
    questions: [
      {
        id: "vr1",
        question: "How do you activate voice dictation in Claude Code?",
        options: [
          "Press the microphone button",
          "Type /voice",
          "Say \"Hey Claude\"",
          "Enable it in system settings",
        ],
        correctIndex: 1,
        explanation:
          "Type /voice to activate voice dictation. It uses push-to-talk, and you can configure the trigger key with /keybindings.",
      },
      {
        id: "vr2",
        question: "What does the remote control feature let you do?",
        options: [
          "Control someone else's computer",
          "Continue a Claude Code session from your phone, tablet, or any browser",
          "Access Claude without an internet connection",
          "Run Claude on a remote server only",
        ],
        correctIndex: 1,
        explanation:
          "Remote control lets you continue a session running on your computer from any device — phone, tablet, or another browser.",
      },
      {
        id: "vr3",
        question: "How do you connect to a remote control session from your phone?",
        options: [
          "Download a special app",
          "Scan a QR code or open the URL that Claude provides",
          "Send yourself an email invitation",
          "Use Bluetooth pairing",
        ],
        correctIndex: 1,
        explanation:
          "After running \"claude remote-control\", Claude shows a QR code and URL. Scan the QR code with your phone or open the URL in any browser.",
      },
      {
        id: "vr4",
        question: "What is Dispatch?",
        options: [
          "A way to send files to Claude",
          "A feature that sends tasks to Claude from your phone and lets it work in the background",
          "A command to restart Claude",
          "A notification system for team updates",
        ],
        correctIndex: 1,
        explanation:
          "Dispatch lets you send tasks to Claude from the Desktop app or claude.ai/code. Claude works autonomously and the results are waiting when you check back.",
      },
      {
        id: "vr5",
        question: "How many languages does voice dictation support?",
        options: ["English only", "5 languages", "20 languages", "50 languages"],
        correctIndex: 2,
        explanation:
          "Voice dictation supports 20 languages, making it accessible to a wide range of users.",
      },
    ],
  },
  {
    lessonSlug: "desktop-and-web",
    questions: [
      {
        id: "dw1",
        question:
          "What advantage does the Desktop App have over the terminal for reviewing file changes?",
        options: [
          "It can review more files at once",
          "It shows visual side-by-side diffs instead of text diffs",
          "It is faster at processing changes",
          "It automatically approves all changes",
        ],
        correctIndex: 1,
        explanation:
          "The Desktop App shows visual side-by-side diffs, which are much easier for non-developers to review than terminal text diffs.",
      },
      {
        id: "dw2",
        question: "How do you transfer a terminal session to the Desktop App?",
        options: [
          "Copy and paste the conversation",
          "Type /desktop",
          "Export as a file and import it",
          "You cannot transfer sessions",
        ],
        correctIndex: 1,
        explanation:
          "Type /desktop to transfer your full conversation and context from the terminal to the Desktop App.",
      },
      {
        id: "dw3",
        question: "What does the --teleport flag do?",
        options: [
          "Moves files to the cloud",
          "Pulls a web session into your local terminal",
          "Teleports to a different project",
          "Opens a new browser tab",
        ],
        correctIndex: 1,
        explanation:
          "claude --teleport pulls a web session into your local terminal, useful when you started on the web and want to continue locally.",
      },
      {
        id: "dw4",
        question: "What can scheduled tasks do in the Desktop App?",
        options: [
          "Only send reminders",
          "Run recurring tasks automatically, even when your computer is off",
          "Schedule meetings with your team",
          "Back up your files on a timer",
        ],
        correctIndex: 1,
        explanation:
          "Scheduled tasks run on Anthropic's cloud infrastructure, so they work even when your computer is off. Examples include weekly summaries and daily feedback checks.",
      },
      {
        id: "dw5",
        question: "Which connectors are available in the Desktop App but not the terminal?",
        options: [
          "GitHub and GitLab",
          "Slack, Linear, Notion, Asana, and Calendar",
          "Email and SMS",
          "Zoom and Teams",
        ],
        correctIndex: 1,
        explanation:
          "The Desktop App includes built-in connectors for Slack, Linear, Notion, Asana, and Calendar that are not available in the terminal.",
      },
    ],
  },
  {
    lessonSlug: "computer-use",
    questions: [
      {
        id: "cu1",
        question: "What does Computer Use allow Claude to do?",
        options: [
          "Write code faster",
          "See your screen and interact with it by clicking, typing, and navigating — just like a person would",
          "Run programs in the background",
          "Access your computer remotely from another device",
        ],
        correctIndex: 1,
        explanation:
          "Computer Use lets Claude see what is on your screen and interact visually — moving the mouse, clicking buttons, typing into apps, and navigating websites.",
      },
      {
        id: "cu2",
        question: "How do you start a Computer Use session?",
        options: [
          "Type /computer in Claude Code",
          "Run claude --computer",
          "Enable it in system preferences",
          "It is always on by default",
        ],
        correctIndex: 1,
        explanation:
          "Run claude --computer to start a session. Claude will ask for permission to view your screen before proceeding.",
      },
      {
        id: "cu3",
        question: "When is Computer Use especially valuable?",
        options: [
          "When writing documents in a text editor",
          "When working with apps that do not have an API, like filling forms or updating a CMS",
          "When reading email",
          "When doing math calculations",
        ],
        correctIndex: 1,
        explanation:
          "Computer Use is especially powerful for repetitive tasks across apps that lack an API — like filling forms, updating CMS content, or navigating internal tools.",
      },
      {
        id: "cu4",
        question: "How can you stop Claude during a Computer Use session?",
        options: [
          "Close the terminal window",
          "Press Esc",
          "Wait for it to finish",
          "Unplug your keyboard",
        ],
        correctIndex: 1,
        explanation:
          "You can press Esc at any time to stop Claude during a Computer Use session, giving you full control.",
      },
      {
        id: "cu5",
        question:
          "Does Claude save your passwords or credentials during Computer Use?",
        options: [
          "Yes, for convenience",
          "Only if you allow it",
          "No, Claude never saves your passwords or credentials",
          "It depends on the app being used",
        ],
        correctIndex: 2,
        explanation:
          "Claude never saves your passwords or credentials. It only sees your screen while the session is active and asks permission before every interaction.",
      },
    ],
  },
  {
    lessonSlug: "chrome",
    questions: [
      {
        id: "ch1",
        question: "How do you start Chrome Integration in Claude Code?",
        options: [
          "Open Chrome and type a URL",
          "Run claude --chrome or type /chrome during a session",
          "Install a Chrome extension",
          "Enable it in Chrome settings",
        ],
        correctIndex: 1,
        explanation:
          "You can start Chrome Integration by running claude --chrome from the terminal or typing /chrome during an active session.",
      },
      {
        id: "ch2",
        question:
          "Why can Claude access your authenticated web apps through Chrome Integration?",
        options: [
          "Claude stores your login credentials",
          "Claude uses your Chrome browser where you are already logged in",
          "Claude has its own accounts for major services",
          "You have to re-enter passwords each time",
        ],
        correctIndex: 1,
        explanation:
          "Since Claude uses your Chrome browser where you are already logged in, it can access authenticated apps like Gmail, Google Docs, and Notion without needing your passwords.",
      },
      {
        id: "ch3",
        question: "What can Claude do with web pages through Chrome Integration?",
        options: [
          "Only read text content",
          "Read content, extract data from tables, interact with web apps, and take screenshots",
          "Only take screenshots",
          "Only fill in forms",
        ],
        correctIndex: 1,
        explanation:
          "Chrome Integration lets Claude read page content, extract data from tables and dashboards, interact with web apps, and take screenshots for visual review.",
      },
      {
        id: "ch4",
        question: "How does Claude handle security during Chrome Integration?",
        options: [
          "It accesses any site it wants automatically",
          "It only accesses sites you explicitly allow, and you see every action in real time",
          "It blocks all sites by default with no exceptions",
          "Security is handled by Chrome, not Claude",
        ],
        correctIndex: 1,
        explanation:
          "Claude only accesses sites you explicitly allow, you see every action in real time, and you can press Esc to stop at any time.",
      },
      {
        id: "ch5",
        question:
          "Which of these is a practical use case for Chrome Integration?",
        options: [
          "Installing new software on your computer",
          "Extracting key metrics from an analytics dashboard",
          "Writing a Python script",
          "Configuring your WiFi settings",
        ],
        correctIndex: 1,
        explanation:
          "A great use case is asking Claude to open your analytics dashboard and extract key metrics like visitors, signups, and conversion rates.",
      },
    ],
  },
  {
    lessonSlug: "plugins",
    questions: [
      {
        id: "pl1",
        question: "What is a plugin in Claude Code?",
        options: [
          "A single slash command",
          "A pre-built bundle that adds new capabilities with a single install command",
          "A theme that changes how Claude looks",
          "A connection to an external API",
        ],
        correctIndex: 1,
        explanation:
          "Plugins are pre-built bundles that install commands, integrations, and settings all at once — like apps on your phone.",
      },
      {
        id: "pl2",
        question: "How do you install a plugin?",
        options: [
          "Download it from a website and copy files manually",
          "Type /plugin install plugin-name",
          "Add it to CLAUDE.md",
          "Ask Claude to build one from scratch",
        ],
        correctIndex: 1,
        explanation:
          "Use /plugin install plugin-name to install. The plugin handles all configuration automatically.",
      },
      {
        id: "pl3",
        question:
          "If you are unsure about a plugin, what should you do instead of uninstalling it?",
        options: [
          "Delete its files manually",
          "Disable it temporarily with /plugin disable",
          "Ignore it and install a different one",
          "Restart Claude Code",
        ],
        correctIndex: 1,
        explanation:
          "Use /plugin disable to temporarily turn off a plugin. You can re-enable it later without having to reconfigure it.",
      },
      {
        id: "pl4",
        question: "Where can plugins come from?",
        options: [
          "Only from Anthropic (the official marketplace)",
          "The official marketplace, the community, or your own organization",
          "Only from your organization's IT department",
          "Only from open-source repositories",
        ],
        correctIndex: 1,
        explanation:
          "Plugins can come from the official Anthropic marketplace, the community, or your own organization's private marketplace.",
      },
      {
        id: "pl5",
        question:
          "When should you use a plugin instead of an MCP server?",
        options: [
          "When you need a connection to a live external service",
          "When you need a bundle of related capabilities installed together",
          "When you want to remember preferences across sessions",
          "When you need a single quick shortcut",
        ],
        correctIndex: 1,
        explanation:
          "Use a plugin when you need a bundle of related capabilities. Use an MCP server for live service connections, memory for preferences, and slash commands for single shortcuts.",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): LessonQuiz | undefined {
  return QUIZZES.find((q) => q.lessonSlug === slug);
}
