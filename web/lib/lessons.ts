import type { Locale } from "./i18n";

export interface LessonMeta {
  folder: string;
  slug: string;
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
  level: "starter" | "beginner" | "intermediate" | "advanced";
  duration: string;
  complexity: number; // 1-5 stars
  order: number; // pedagogical order
}

/** Get the lesson title for a given locale */
export function getLessonTitle(lesson: LessonMeta, locale: Locale = "en"): string {
  if (locale === "es" && lesson.titleEs) return lesson.titleEs;
  return lesson.title;
}

/** Get the lesson description for a given locale */
export function getLessonDescription(lesson: LessonMeta, locale: Locale = "en"): string {
  if (locale === "es" && lesson.descriptionEs) return lesson.descriptionEs;
  return lesson.description;
}

export const LESSONS: LessonMeta[] = [
  // === STARTER: Absolute beginners (no terminal experience) ===
  {
    folder: "00-terminal-basics",
    slug: "terminal-basics",
    title: "Terminal Basics",
    titleEs: "Conceptos Basicos del Terminal",
    description: "What is a terminal? The 4 commands you need to get started",
    descriptionEs: "Que es un terminal? Los 4 comandos que necesitas para empezar",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 1,
  },
  {
    folder: "00f-vscode",
    slug: "vscode",
    title: "Visual Studio Code",
    titleEs: "Visual Studio Code",
    description: "Set up VS Code — the recommended way to use Claude Code with terminal + files in one place",
    descriptionEs: "Configura VS Code -- la forma recomendada de usar Claude Code con terminal y archivos en un solo lugar",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 2,
  },
  {
    folder: "00g-voice-input",
    slug: "voice-input",
    title: "Working with Your Voice",
    titleEs: "Trabaja con tu Voz",
    description: "Talk instead of type — set up Wispr Flow for 10x faster input",
    descriptionEs: "Habla en vez de escribir — configura Wispr Flow para 10x mas velocidad",
    level: "starter",
    duration: "10 min",
    complexity: 1,
    order: 3,
  },
  {
    folder: "00b-quickstart",
    slug: "quickstart",
    title: "Quickstart",
    titleEs: "Inicio Rapido",
    description: "Install Claude Code, log in, and have your first conversation",
    descriptionEs: "Instala Claude Code, inicia sesion y ten tu primera conversacion",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 3,
  },
  {
    folder: "00c-how-it-works",
    slug: "how-it-works",
    title: "How It Works",
    titleEs: "Como Funciona",
    description: "The conversation loop, context window, and permissions explained simply",
    descriptionEs: "El bucle de conversacion, la ventana de contexto y los permisos explicados de forma sencilla",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 4,
  },
  {
    folder: "00d-best-practices",
    slug: "best-practices",
    title: "Best Practices",
    titleEs: "Mejores Practicas",
    description: "How to talk to Claude effectively and get great results",
    descriptionEs: "Como hablar con Claude de forma efectiva y obtener grandes resultados",
    level: "starter",
    duration: "15 min",
    complexity: 1,
    order: 5,
  },
  {
    folder: "00e-workflows",
    slug: "workflows",
    title: "Practical Workflows",
    titleEs: "Flujos de Trabajo Practicos",
    description: "Real tasks for PMs, designers, sales, and non-developers",
    descriptionEs: "Tareas reales para PMs, disenadores, ventas y no-desarrolladores",
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
    titleEs: "Comandos Slash",
    description: "55+ built-in commands and custom shortcuts",
    descriptionEs: "Mas de 55 comandos integrados y atajos personalizados",
    level: "beginner",
    duration: "30 min",
    complexity: 2,
    order: 7,
  },
  {
    folder: "02-memory",
    slug: "memory",
    title: "Memory",
    titleEs: "Memoria",
    description: "Persistent context, project standards, and preferences",
    descriptionEs: "Contexto persistente, estandares de proyecto y preferencias",
    level: "beginner",
    duration: "45 min",
    complexity: 2,
    order: 8,
  },
  {
    folder: "08-checkpoints",
    slug: "checkpoints",
    title: "Checkpoints",
    titleEs: "Puntos de Control",
    description: "Safe exploration with session checkpoints and recovery",
    descriptionEs: "Exploracion segura con puntos de control de sesion y recuperacion",
    level: "beginner",
    duration: "45 min",
    complexity: 2,
    order: 8,
  },
  {
    folder: "10-cli",
    slug: "cli",
    title: "CLI Basics",
    titleEs: "Conceptos Basicos de CLI",
    description: "Core CLI usage, interactive and print mode",
    descriptionEs: "Uso basico de CLI, modo interactivo y modo impresion",
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
    titleEs: "Habilidades",
    description: "Reusable agent capabilities and automatic expertise",
    descriptionEs: "Capacidades de agente reutilizables y experiencia automatica",
    level: "intermediate",
    duration: "1 hour",
    complexity: 3,
    order: 10,
  },
  {
    folder: "05-mcp",
    slug: "mcp",
    title: "MCP",
    titleEs: "MCP",
    description: "Model Context Protocol for live data access and integration",
    descriptionEs: "Protocolo de Contexto de Modelo para acceso a datos en vivo e integracion",
    level: "intermediate",
    duration: "1 hour",
    complexity: 3,
    order: 12,
  },
  {
    folder: "04-subagents",
    slug: "subagents",
    title: "Subagents",
    titleEs: "Subagentes",
    description: "Delegate complex tasks to specialized agents",
    descriptionEs: "Delega tareas complejas a agentes especializados",
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
    titleEs: "Planificacion y Modo Auto",
    description: "Plan before executing, control autonomy, and extend thinking",
    descriptionEs: "Planifica antes de ejecutar, controla la autonomia y extiende el razonamiento",
    level: "advanced",
    duration: "15 min",
    complexity: 3,
    order: 14,
  },
  {
    folder: "12-voice-and-remote",
    slug: "voice-and-remote",
    title: "Voice & Remote Control",
    titleEs: "Voz y Control Remoto",
    description: "Speak instead of type, control sessions from your phone",
    descriptionEs: "Habla en vez de escribir, controla sesiones desde tu telefono",
    level: "advanced",
    duration: "10 min",
    complexity: 2,
    order: 15,
  },
  {
    folder: "13-desktop-and-web",
    slug: "desktop-and-web",
    title: "Desktop App & Web",
    titleEs: "App de Escritorio y Web",
    description: "Visual diffs, scheduled tasks, and browser sessions",
    descriptionEs: "Diffs visuales, tareas programadas y sesiones en el navegador",
    level: "advanced",
    duration: "10 min",
    complexity: 2,
    order: 16,
  },
  {
    folder: "14-computer-use",
    slug: "computer-use",
    title: "Computer Use",
    titleEs: "Uso del Computador",
    description: "Let Claude see and control your screen to automate visual tasks",
    descriptionEs: "Deja que Claude vea y controle tu pantalla para automatizar tareas visuales",
    level: "advanced",
    duration: "10 min",
    complexity: 3,
    order: 17,
  },
  {
    folder: "15-chrome",
    slug: "chrome",
    title: "Chrome Integration",
    titleEs: "Integracion con Chrome",
    description: "Connect Claude to your browser to read pages and interact with web apps",
    descriptionEs: "Conecta Claude a tu navegador para leer paginas e interactuar con apps web",
    level: "advanced",
    duration: "10 min",
    complexity: 3,
    order: 18,
  },
  {
    folder: "07-plugins",
    slug: "plugins",
    title: "Plugins",
    titleEs: "Plugins",
    description: "Pre-configured bundles for instant productivity",
    descriptionEs: "Paquetes preconfigurados para productividad instantanea",
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
