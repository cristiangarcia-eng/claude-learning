import type { Locale } from "./i18n";

export interface LessonMeta {
  folder: string;
  slug: string;
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
  level: "starter" | "pro";
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
    folder: "00-intro",
    slug: "intro",
    title: "Why Claude Code?",
    titleEs: "Por que Claude Code?",
    description: "What makes Claude Code different and why the terminal is your superpower",
    descriptionEs: "Que hace diferente a Claude Code y por que el terminal es tu superpoder",
    level: "starter",
    duration: "5 min",
    complexity: 1,
    order: 1,
  },
  {
    folder: "00f-vscode",
    slug: "vscode",
    title: "Visual Studio Code",
    titleEs: "Visual Studio Code",
    description: "Set up VS Code — your work environment for the entire course",
    descriptionEs: "Configura VS Code — tu entorno de trabajo para todo el curso",
    level: "starter",
    duration: "20 min",
    complexity: 1,
    order: 2,
  },
  {
    folder: "00-terminal-basics",
    slug: "terminal-basics",
    title: "Terminal Basics",
    titleEs: "Conceptos Basicos del Terminal",
    description: "The 4 commands you need to navigate files from VS Code's terminal",
    descriptionEs: "Los 4 comandos que necesitas para navegar archivos desde el terminal de VS Code",
    level: "starter",
    duration: "15 min",
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
    title: "Setting Up Claude Code",
    titleEs: "Configurar Claude Code",
    description: "Install Claude Code in VS Code and have your first conversation",
    descriptionEs: "Instala Claude Code en VS Code y ten tu primera conversación",
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
  // === PRO: From memory onwards ===
  {
    folder: "02-memory",
    slug: "memory",
    title: "Memory",
    titleEs: "Memoria",
    description: "Persistent context, project standards, and preferences",
    descriptionEs: "Contexto persistente, estandares de proyecto y preferencias",
    level: "pro",
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
    level: "pro",
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
    level: "pro",
    duration: "30 min",
    complexity: 2,
    order: 9,
  },
  {
    folder: "03-skills",
    slug: "skills",
    title: "Skills",
    titleEs: "Habilidades",
    description: "Reusable agent capabilities and automatic expertise",
    descriptionEs: "Capacidades de agente reutilizables y experiencia automatica",
    level: "pro",
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
    level: "pro",
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
    level: "pro",
    duration: "1.5 hours",
    complexity: 3,
    order: 13,
  },
  {
    folder: "12-voice-and-remote",
    slug: "voice-and-remote",
    title: "Voice & Remote Control",
    titleEs: "Voz y Control Remoto",
    description: "Speak instead of type, control sessions from your phone",
    descriptionEs: "Habla en vez de escribir, controla sesiones desde tu telefono",
    level: "pro",
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
    level: "pro",
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
    level: "pro",
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
    level: "pro",
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
    level: "pro",
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
