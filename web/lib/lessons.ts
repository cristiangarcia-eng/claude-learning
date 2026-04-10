import type { Locale } from "./i18n";

export interface LessonMeta {
  folder: string;
  slug: string;
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
  level: "starter" | "pro" | "projects";
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
    folder: "00f-cursor",
    slug: "cursor",
    title: "Cursor",
    titleEs: "Cursor",
    description: "Set up Cursor — your work environment for the entire course",
    descriptionEs: "Configura Cursor — tu entorno de trabajo para todo el curso",
    level: "starter",
    duration: "5 min",
    complexity: 1,
    order: 2,
  },
  {
    folder: "00-terminal-basics",
    slug: "terminal-basics",
    title: "Open Claude Code",
    titleEs: "Abrir Claude Code",
    description: "Open Claude Code from Cursor's terminal",
    descriptionEs: "Abre Claude Code desde la terminal de Cursor",
    level: "starter",
    duration: "5 min",
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
    duration: "5 min",
    complexity: 1,
    order: 3,
  },
  {
    folder: "00b-quickstart",
    slug: "quickstart",
    title: "Setting Up Claude Code",
    titleEs: "Configurar Claude Code",
    description: "Install Claude Code in Cursor and have your first conversation",
    descriptionEs: "Instala Claude Code en Cursor y ten tu primera conversación",
    level: "starter",
    duration: "8 min",
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
    duration: "5 min",
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
    duration: "5 min",
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
    duration: "10 min",
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
    duration: "10 min",
    complexity: 2,
    order: 8,
  },
  {
    folder: "03-skills",
    slug: "skills",
    title: "Skills",
    titleEs: "Habilidades",
    description: "Reusable agent capabilities and automatic expertise",
    descriptionEs: "Capacidades de agente reutilizables y experiencia automatica",
    level: "pro",
    duration: "12 min",
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
    duration: "12 min",
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
    duration: "15 min",
    complexity: 3,
    order: 13,
  },
  {
    folder: "16-parallel-agents",
    slug: "parallel-agents",
    title: "Working with Multiple Agents",
    titleEs: "Trabajar con Multiples Agentes",
    description: "Run agents in parallel, build consensus, and create specialist pipelines",
    descriptionEs: "Ejecuta agentes en paralelo, construye consenso y crea pipelines de especialistas",
    level: "pro",
    duration: "8 min",
    complexity: 3,
    order: 14,
  },
  {
    folder: "12-voice-and-remote",
    slug: "voice-and-remote",
    title: "Remote Control",
    titleEs: "Control Remoto",
    description: "Control sessions from your phone, tablet, or any browser",
    descriptionEs: "Controla sesiones desde tu teléfono, tablet o cualquier navegador",
    level: "pro",
    duration: "5 min",
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
    duration: "5 min",
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
    duration: "5 min",
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
    duration: "5 min",
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
    duration: "5 min",
    complexity: 3,
    order: 15,
  },

  // === PROJECTS: Hands-on exercises ===
  {
    folder: "11-exercises/02-messy-spreadsheet",
    slug: "project-messy-spreadsheet",
    title: "Data Cleanup",
    titleEs: "Limpieza de Datos",
    description: "Create a reusable skill to clean messy CSV files",
    descriptionEs: "Crea un skill reutilizable para limpiar archivos CSV",
    level: "projects",
    duration: "10 min",
    complexity: 2,
    order: 21,
  },
  {
    folder: "11-exercises/03-research-landscape",
    slug: "project-research-landscape",
    title: "Market Research",
    titleEs: "Investigación de Mercado",
    description: "Iterate on research quality: critique, improve, stress-test, then package as a skill",
    descriptionEs: "Itera sobre calidad de investigación: critica, mejora, prueba de estrés, y empaqueta como skill",
    level: "projects",
    duration: "15 min",
    complexity: 2,
    order: 22,
  },
  {
    folder: "11-exercises/04-taxonomy-from-chaos",
    slug: "project-taxonomy",
    title: "Taxonomy from Chaos",
    titleEs: "Taxonomía desde el Caos",
    description: "Use checkpoints to try 3 categorization approaches and pick the best",
    descriptionEs: "Usa checkpoints para probar 3 enfoques de categorización y elegir el mejor",
    level: "projects",
    duration: "15 min",
    complexity: 2,
    order: 23,
  },
  {
    folder: "11-exercises/05-conversation-analysis",
    slug: "project-conversation-analysis",
    title: "Conversation Analysis",
    titleEs: "Análisis de Conversaciones",
    description: "Create a data-analyst subagent for recurring analysis tasks",
    descriptionEs: "Crea un subagente analista de datos para tareas de análisis recurrentes",
    level: "projects",
    duration: "15 min",
    complexity: 2,
    order: 24,
  },
  {
    folder: "11-exercises/06-evaluate-ai-output",
    slug: "project-evaluate-ai",
    title: "Evaluate AI Output",
    titleEs: "Evaluar Output de IA",
    description: "Build a quality-check hook for AI-generated content",
    descriptionEs: "Construye un hook de control de calidad para contenido generado por IA",
    level: "projects",
    duration: "15 min",
    complexity: 3,
    order: 25,
  },
  {
    folder: "11-exercises/10-end-to-end-pipeline",
    slug: "project-content-pipeline",
    title: "Content Pipeline",
    titleEs: "Pipeline de Contenido",
    description: "Run a full content pipeline and package it as a plugin",
    descriptionEs: "Ejecuta un pipeline de contenido completo y empaquétalo como plugin",
    level: "projects",
    duration: "18 min",
    complexity: 3,
    order: 26,
  },
  {
    folder: "11-exercises/11-connect-systems",
    slug: "project-connect-systems",
    title: "Capstone: Intelligence System",
    titleEs: "Capstone: Sistema de Inteligencia",
    description: "Combine Memory + Skills + MCP + Plan Mode into a reusable competitive intelligence system",
    descriptionEs: "Combina Memory + Skills + MCP + Plan Mode en un sistema de inteligencia competitiva reutilizable",
    level: "projects",
    duration: "20 min",
    complexity: 3,
    order: 27,
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
