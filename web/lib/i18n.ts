export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Extract the locale from a URL pathname.
 * Returns the locale if the first path segment is a supported locale,
 * otherwise returns the default locale.
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isValidLocale(first)) return first;
  return DEFAULT_LOCALE;
}

/**
 * Remove the locale prefix from a pathname.
 * e.g. "/es/lessons/foo" -> "/lessons/foo"
 */
export function removeLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isValidLocale(segments[0])) {
    return "/" + segments.slice(1).join("/") || "/";
  }
  return pathname;
}

// ---------------------------------------------------------------------------
// UI translation dictionaries
// ---------------------------------------------------------------------------

const dictionaries = {
  en: {
    // Navigation
    home: "Home",
    progress: "Progress",
    startHere: "Getting Started",
    pro: "Pro",
    projects: "Projects",

    // Lesson page
    filesInThisLesson: "Files in this lesson",
    previous: "Previous",
    next: "Next",
    backTo: "Back to",
    markComplete: "Mark Complete",
    completed: "Completed",

    // Progress page
    yourProgress: "Your Progress",
    overallProgress: "Overall Progress",
    lessons: "lessons",
    badges: "Badges",

    // Landing / public
    logIn: "Log in",
    bookACall: "Book a Call",
    noCodingNeeded: "No coding experience needed",
    masterClaudeCode: "Claude Code is this generation's superpower.",
    withoutWritingCode: "Claude10x teaches you how to use it.",
    heroSubtitle: "The hands-on course for product managers, designers, and non-technical teams who want to 10x their productivity with AI.",
    bookFreeCall: "Book a Free Call",
    seePricing: "See Pricing",
    builtForNonDev: "Built for non-developers",
    builtForNonDevDesc: "You don't need to be a programmer. If you can describe what you want in plain English, Claude Code can do it.",
    lessonsFromZero: "lessons, from zero to mastery",
    lessonsFromZeroDesc: "Start with terminal basics and progress to advanced workflows. Each lesson includes hands-on exercises and real-world examples.",
    simplePricing: "Simple pricing",
    choosePlan: "Choose the option that works for you.",
    courseOnly: "Course Only",
    courseOnlyDesc: "Full access to all lessons and progress tracking.",
    oneTime: "one-time",
    interactiveLessons: "interactive lessons",
    handsOnExercises: "Hands-on exercises",
    progressTracking: "Progress tracking",
    lifetimeAccess: "Lifetime access",
    getAccess: "Get Access",
    coursePlusMentoring: "Course + Mentoring",
    coursePlusMentoringDesc: "Everything in Course, plus 2 personal mentoring sessions of 2 hours each.",
    everythingInCourse: "Everything in Course Only",
    personalMentoring: "2 personal mentoring sessions of 2h",
    tailoredUseCase: "Tailored to your use case",
    followUpSupport: "Follow-up support via email",
    mostPopular: "Most Popular",
    whatStudentsSay: "What students say",
    meetYourInstructor: "Meet your instructor",
    readyToGetStarted: "Ready to get started?",
    readyToGetStartedDesc: "Start learning today. Get instant access to all lessons and hands-on exercises.",
    masterClaudeCodeFooter: "Claude10x teaches you how to use Claude Code.",

    // Dashboard hero
    dashboardHeroDesc: "Master Claude Code in a weekend. From first commands to orchestrating agents, hooks, skills, and MCP servers.",
    dashboardHeroSubDesc: "Designed for product managers, designers, sales teams, and anyone who wants to work smarter with AI -- no coding required.",
    lessonsLabel: "lessons",
    examplesLabel: "100+ examples",
    totalTimeLabel: "11-13 hours total",
    start: "Start",

    // Login
    enterEmail: "Enter your email to access the course",
    sendMagicLink: "Send Magic Link",
    sending: "Sending...",
    checkYourEmail: "Check your email",
    checkEmailDesc: "We sent a login link. Click it to access the course.",
    emailNotAuthorized: "This email is not authorized. Contact the instructor for access.",
    somethingWentWrong: "Something went wrong. Please try again.",
    backToHome: "Back to home",

    // 404
    pageNotFound: "This page doesn't exist yet.",
    goBackHome: "Go back home",

    // Language switcher
    language: "Language",

    // Dashboard progress hero
    welcomeBack: "Welcome back",
    continueNextLesson: "Continue next lesson",
    startFirstLesson: "Start your first lesson",
    lessonsCompleted: "lessons completed",
    allLessonsCompleted: "You completed all lessons!",

    // Misc
    completedCount: "completed",

    // Audience
    productManagers: "Product Managers",
    productManagersDesc: "Understand codebases, scope features, write specs, and track technical debt -- without writing code.",
    designers: "Designers",
    designersDesc: "Audit UI consistency, change colors and fonts, check accessibility, and update designs directly.",
    salesMarketing: "Sales & Marketing",
    salesMarketingDesc: "Update website copy, manage SEO, edit pricing pages, and analyze content -- all by yourself.",
    anyoneCurious: "Anyone curious",
    anyoneCuriousDesc: "No coding experience needed. If you can type a message, you can use Claude Code.",

    // Level descriptions (dashboard)
    extra: "Extra",
    starterDesc: "No experience needed — perfect for PMs, designers, and non-devs",
    proDesc: "Memory, checkpoints, skills, MCP, and advanced features",
    projectsDesc: "11 hands-on exercises to practice everything you've learned",
    extraDesc: "Deep dives into advanced tools, workflows, and optimizations",
    starterTime: "~1.5 hours",
    proTime: "~5 hours",
    projectsTime: "~6 hours",
    extraTime: "~3 hours",

    // Welcome modal
    welcomeTitle: "This is where it starts.",
    welcomeBody: "You just took the first step toward a career leap. In a weekend, you'll go from \"I don't code\" to confidently using AI to do things that used to require a developer.",
    welcomeSubtext: "No terminal experience needed. No programming knowledge. Just you, Claude, and a bit of curiosity.",
    welcomeCta: "Let's go",
    welcomeLanguageTitle: "Choose your language",
    welcomeLanguageBody: "Which language do you want to take the course in?",
    welcomeLanguageHint: "Pick the one you're most comfortable in. We recommend prompting AI in your native language — that's where you'll get the best results.",
    welcomeLanguageContinue: "Continue",

    // Instructor section
    yearsInProduct: "Years in Product",
    atNovaTalent: "at Nova Talent",
    riskAndTechnology: "Risk & Technology",
    builtGlobalApp: "Built the global app",

    // Checkout & payment
    getStarted: "Get Started",
    processing: "Processing...",
    startLearning: "Start Learning",
    paymentSuccess: "Payment successful!",
    checkEmailToLogin: "Check your email to log in. We sent you a magic link to access the course.",
    scheduleMentoring: "Schedule your mentoring session",
    scheduleMentoringDesc: "Book your 2 personal mentoring sessions of 2 hours each with Cristian. Pick times that work for you.",
    scheduleNow: "Schedule Now",
    goToLogin: "Go to Login",

    // Landing — narrative sections
    heroHeadlineA: "One Agent.",
    heroHeadlineB: "Every task.",
    heroHeadlineAccent: "Research. Scraping. Automation. Code.",
    heroSubtitleNew: "A 30-lesson course on Claude Code — your AI agent for deep research, web scraping, workflow automation, data analysis, and yes, shipping software. No technical background required.",
    heroTrust: "Taught by Cristian Garcia · CPO at Nova Talent · ex-BBVA · ex-Santander",
    statLessons: "Lessons",
    statHours: "Hours",
    statExamples: "Examples",
    statLifetime: "Lifetime",
    act1Chapter: "01 — The wall",
    act1Title: "You're drowning in busywork.",
    act1Desc: "Research. Data. Reports. Manual cleanup. Every week, the same tedious loops eating your calendar. Sound familiar?",
    pain1: "It takes me three days every month to compile the competitor intelligence report.",
    pain1Role: "Strategy Analyst",
    pain2: "I paid $400 a month for a scraping tool that still needed manual cleanup.",
    pain2Role: "Growth Lead",
    pain3: "My whole Monday is copy-pasting numbers from five tools into one spreadsheet.",
    pain3Role: "Operations Manager",
    act2Chapter: "02 — The unlock",
    act2Title: "One tool. Every task.",
    act2Desc: "Claude Code is a general-purpose AI agent that lives in your terminal. Point it at any problem — research, data, automation, code — and describe what you want in plain language.",
    unlock1Title: "Deep Research",
    unlock1Desc: "From “I need to know X” to a cited, structured report. Claude browses the web, reads, synthesizes, and writes it up for you.",
    unlock2Title: "Workflow Automation",
    unlock2Desc: "That weekly task you dread? Describe it once. Claude runs it every week — reports, enrichment, cleanup, whatever.",
    unlock3Title: "Data & Scraping",
    unlock3Desc: "Build databases from any website. Scrape thousands of pages, clean, normalize, export. No brittle scraping tools needed.",
    unlock4Title: "Shipping Software",
    unlock4Desc: "Yes, it ships code too. Scripts, websites, internal tools, dashboards — you describe it, Claude builds it.",
    act3Chapter: "03 — The shift",
    act3Title: "Same tasks. A different week.",
    act3Desc: "The work that used to eat your week — done in minutes.",
    shiftBefore: "Before",
    shiftAfter: "After",
    shift1Label: "Weekly competitor intelligence",
    shift1Before: "Open 15 tabs. Copy quotes. Summarize by hand. Lose your Monday.",
    shift1After: "Prompt Claude. Get coffee. Cited report in your inbox.",
    shift2Label: "Build a prospect database from the web",
    shift2Before: "Pay $400/month for a scraper. Learn its UI. Clean the exports by hand.",
    shift2After: "Describe the target. Claude scrapes, dedupes, enriches. CSV ready in minutes.",
    shift3Label: "Automate your month-end close",
    shift3Before: "Three days copy-pasting numbers across five spreadsheets. Every month.",
    shift3After: "Describe it once. Claude runs it every month-end from now on.",
    act4Chapter: "04 — The curriculum",
    act5Chapter: "05 — Your guide",
    act6Chapter: "06 — The offer",
    act7Chapter: "07 — Let's go",
    guaranteeLine: "7-day refund, no questions asked.",
  },
  es: {
    // Navigation
    home: "Inicio",
    progress: "Progreso",
    startHere: "Iniciación",
    pro: "Pro",
    projects: "Proyectos",

    // Lesson page
    filesInThisLesson: "Archivos en esta lección",
    previous: "Anterior",
    next: "Siguiente",
    backTo: "Volver a",
    markComplete: "Marcar completa",
    completed: "Completada",

    // Progress page
    yourProgress: "Tu Progreso",
    overallProgress: "Progreso General",
    lessons: "lecciones",
    badges: "Insignias",

    // Landing / public
    logIn: "Iniciar sesión",
    bookACall: "Reservar llamada",
    noCodingNeeded: "No se necesita experiencia en programación",
    masterClaudeCode: "Claude Code es el superpoder de esta generación.",
    withoutWritingCode: "Claude10x te enseña a usarlo.",
    heroSubtitle: "El curso práctico para product managers, diseñadores y equipos no técnicos que quieren multiplicar su productividad con IA.",
    bookFreeCall: "Reservar llamada gratuita",
    seePricing: "Ver Precios",
    builtForNonDev: "Diseñado para no-desarrolladores",
    builtForNonDevDesc: "No necesitas ser programador. Si puedes describir lo que quieres en español, Claude Code puede hacerlo.",
    lessonsFromZero: "lecciones, de cero a experto",
    lessonsFromZeroDesc: "Empieza con lo básico del terminal y progresa hasta flujos avanzados. Cada lección incluye ejercicios prácticos y ejemplos reales.",
    simplePricing: "Precios simples",
    choosePlan: "Elige la opción que mejor te funcione.",
    courseOnly: "Solo Curso",
    courseOnlyDesc: "Acceso completo a todas las lecciones y seguimiento de progreso.",
    oneTime: "pago único",
    interactiveLessons: "lecciones interactivas",
    handsOnExercises: "Ejercicios prácticos",
    progressTracking: "Seguimiento de progreso",
    lifetimeAccess: "Acceso de por vida",
    getAccess: "Obtener Acceso",
    coursePlusMentoring: "Curso + Mentoría",
    coursePlusMentoringDesc: "Todo lo del Curso, más 2 sesiones de mentoría personal de 2 horas cada una.",
    everythingInCourse: "Todo lo del Solo Curso",
    personalMentoring: "2 sesiones de mentoría personal de 2h",
    tailoredUseCase: "Adaptado a tu caso de uso",
    followUpSupport: "Soporte de seguimiento por email",
    mostPopular: "Más Popular",
    whatStudentsSay: "Lo que dicen los estudiantes",
    meetYourInstructor: "Conoce a tu instructor",
    readyToGetStarted: "¿Listo para empezar?",
    readyToGetStartedDesc: "Empieza a aprender hoy. Obtén acceso instantáneo a todas las lecciones y ejercicios prácticos.",
    masterClaudeCodeFooter: "Claude10x te enseña a usar Claude Code.",

    // Dashboard hero
    dashboardHeroDesc: "Domina Claude Code en un fin de semana. Desde los primeros comandos hasta orquestar agentes, hooks, skills y servidores MCP.",
    dashboardHeroSubDesc: "Diseñado para product managers, diseñadores, equipos de ventas y cualquiera que quiera trabajar de forma más inteligente con IA — sin programar.",
    lessonsLabel: "lecciones",
    examplesLabel: "100+ ejemplos",
    totalTimeLabel: "11-13 horas en total",
    start: "Empezar",

    // Login
    enterEmail: "Introduce tu email para acceder al curso",
    sendMagicLink: "Enviar enlace mágico",
    sending: "Enviando...",
    checkYourEmail: "Revisa tu email",
    checkEmailDesc: "Te enviamos un enlace de acceso. Haz clic para entrar al curso.",
    emailNotAuthorized: "Este email no está autorizado. Contacta al instructor para obtener acceso.",
    somethingWentWrong: "Algo salió mal. Inténtalo de nuevo.",
    backToHome: "Volver al inicio",

    // 404
    pageNotFound: "Esta página no existe todavía.",
    goBackHome: "Volver al inicio",

    // Language switcher
    language: "Idioma",

    // Dashboard progress hero
    welcomeBack: "Bienvenido de nuevo",
    continueNextLesson: "Continuar siguiente lección",
    startFirstLesson: "Empieza tu primera lección",
    lessonsCompleted: "lecciones completadas",
    allLessonsCompleted: "¡Completaste todas las lecciones!",

    // Misc
    completedCount: "completadas",

    // Audience
    productManagers: "Product Managers",
    productManagersDesc: "Entiende bases de código, define funcionalidades, escribe specs y rastrea deuda técnica — sin escribir código.",
    designers: "Diseñadores",
    designersDesc: "Audita la consistencia de la UI, cambia colores y fuentes, verifica la accesibilidad y actualiza diseños directamente.",
    salesMarketing: "Ventas y Marketing",
    salesMarketingDesc: "Actualiza textos del sitio web, gestiona SEO, edita páginas de precios y analiza contenido — todo por tu cuenta.",
    anyoneCurious: "Cualquier persona curiosa",
    anyoneCuriousDesc: "No se necesita experiencia en programación. Si puedes escribir un mensaje, puedes usar Claude Code.",

    // Level descriptions (dashboard)
    extra: "Extra",
    starterDesc: "Sin experiencia necesaria — perfecto para PMs, diseñadores y no-devs",
    proDesc: "Memoria, checkpoints, skills, MCP y funcionalidades avanzadas",
    projectsDesc: "11 ejercicios prácticos para practicar todo lo que has aprendido",
    extraDesc: "Inmersiones profundas en herramientas avanzadas, flujos y optimizaciones",
    starterTime: "~1.5 horas",
    proTime: "~5 horas",
    projectsTime: "~6 horas",
    extraTime: "~3 horas",

    // Welcome modal
    welcomeTitle: "Aquí empieza todo.",
    welcomeBody: "Acabas de dar el primer paso hacia un salto en tu carrera. En un fin de semana, pasarás de \"yo no programo\" a usar IA con confianza para hacer cosas que antes requerían un desarrollador.",
    welcomeSubtext: "No necesitas experiencia con la terminal. Ni conocimientos de programación. Solo tú, Claude y un poco de curiosidad.",
    welcomeCta: "Vamos",
    welcomeLanguageTitle: "Elige tu idioma",
    welcomeLanguageBody: "¿En qué idioma quieres tomar el curso?",
    welcomeLanguageHint: "Elige aquel en el que te sientas más cómodo. Te recomendamos hablarle a la IA en tu idioma nativo — ahí es donde obtendrás los mejores resultados.",
    welcomeLanguageContinue: "Continuar",

    // Instructor section
    yearsInProduct: "Años en Producto",
    atNovaTalent: "en Nova Talent",
    riskAndTechnology: "Riesgo y Tecnología",
    builtGlobalApp: "Creó la app global",

    // Checkout & payment
    getStarted: "Empezar",
    processing: "Procesando...",
    startLearning: "Empezar a aprender",
    paymentSuccess: "¡Pago exitoso!",
    checkEmailToLogin: "Revisa tu email para acceder. Te enviamos un enlace mágico para entrar al curso.",
    scheduleMentoring: "Agenda tu sesión de mentoría",
    scheduleMentoringDesc: "Reserva tus 2 sesiones de mentoría personal de 2 horas cada una con Cristian. Elige los horarios que te convengan.",
    scheduleNow: "Agendar Ahora",
    goToLogin: "Ir al Login",

    // Landing — secciones narrativas
    heroHeadlineA: "Un Agente.",
    heroHeadlineB: "Cada tarea.",
    heroHeadlineAccent: "Investigación. Scraping. Automatización. Código.",
    heroSubtitleNew: "Un curso de 30 lecciones sobre Claude Code — tu agente de IA para investigación profunda, web scraping, automatización de flujos, análisis de datos y sí, también desarrollo de software. Sin experiencia técnica previa.",
    heroTrust: "Impartido por Cristian Garcia · CPO en Nova Talent · ex-BBVA · ex-Santander",
    statLessons: "Lecciones",
    statHours: "Horas",
    statExamples: "Ejemplos",
    statLifetime: "De por vida",
    act1Chapter: "01 — El muro",
    act1Title: "Te ahogas en tareas repetitivas.",
    act1Desc: "Investigación. Datos. Informes. Limpieza manual. Cada semana, los mismos bucles tediosos devorando tu calendario. ¿Te suena?",
    pain1: "Me lleva tres días cada mes preparar el informe de inteligencia competitiva.",
    pain1Role: "Analista de Estrategia",
    pain2: "Pagaba 400€ al mes por una herramienta de scraping que aún necesitaba limpieza manual.",
    pain2Role: "Growth Lead",
    pain3: "Mi lunes entero es copiar números de cinco herramientas a una sola hoja.",
    pain3Role: "Operations Manager",
    act2Chapter: "02 — El desbloqueo",
    act2Title: "Una herramienta. Cada tarea.",
    act2Desc: "Claude Code es un agente de IA generalista que vive en tu terminal. Apúntalo a cualquier problema — investigación, datos, automatización, código — y descríbele lo que quieres en tu idioma.",
    unlock1Title: "Investigación Profunda",
    unlock1Desc: "De «necesito saber X» a un informe estructurado con fuentes. Claude navega la web, lee, sintetiza y lo redacta por ti.",
    unlock2Title: "Automatización de Flujos",
    unlock2Desc: "¿Esa tarea semanal que odias? Descríbela una vez. Claude la ejecuta cada semana — informes, enriquecimiento, limpieza, lo que sea.",
    unlock3Title: "Datos y Scraping",
    unlock3Desc: "Construye bases de datos desde cualquier web. Scrapea miles de páginas, limpia, normaliza, exporta. Sin herramientas frágiles.",
    unlock4Title: "Desarrollo de Software",
    unlock4Desc: "Sí, también construye código. Scripts, webs, herramientas internas, dashboards — lo describes, Claude lo construye.",
    act3Chapter: "03 — El cambio",
    act3Title: "Las mismas tareas. Otra semana.",
    act3Desc: "El trabajo que antes devoraba tu semana — hecho en minutos.",
    shiftBefore: "Antes",
    shiftAfter: "Después",
    shift1Label: "Inteligencia competitiva semanal",
    shift1Before: "Abrir 15 pestañas. Copiar citas. Resumir a mano. Perder el lunes entero.",
    shift1After: "Prompt a Claude. Café. Informe con fuentes en tu inbox.",
    shift2Label: "Construir una base de leads desde la web",
    shift2Before: "Pagar 400€/mes por un scraper. Aprender su UI. Limpiar los exports a mano.",
    shift2After: "Describir el target. Claude scrapea, deduplica, enriquece. CSV listo en minutos.",
    shift3Label: "Automatizar el cierre de mes",
    shift3Before: "Tres días copiando números entre cinco hojas de cálculo. Cada mes.",
    shift3After: "Descríbelo una vez. Claude lo ejecuta cada cierre de mes a partir de ahora.",
    act4Chapter: "04 — El temario",
    act5Chapter: "05 — Tu guía",
    act6Chapter: "06 — La oferta",
    act7Chapter: "07 — Adelante",
    guaranteeLine: "7 días de devolución, sin preguntas.",
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale]?.[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
