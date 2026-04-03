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
    startHere: "Start Here",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",

    // Lesson page
    filesInThisLesson: "Files in this lesson",
    previous: "Previous",
    next: "Next",
    takeQuiz: "Take Quiz",
    backTo: "Back to",
    markComplete: "Mark Complete",
    completed: "Completed",

    // Progress page
    yourProgress: "Your Progress",
    overallProgress: "Overall Progress",
    lessons: "lessons",
    badges: "Badges",

    // Quiz
    quiz: "Quiz",
    question: "Question",
    of: "of",
    checkAnswer: "Check Answer",
    seeResults: "See Results",
    quizComplete: "Quiz Complete!",
    correct: "Correct!",
    incorrect: "Incorrect",
    perfectScore: "Perfect score! You've mastered this topic.",
    greatJob: "Great job! Review the missed questions to solidify your knowledge.",
    keepStudying: "Keep studying! Review the lesson and try again.",
    retry: "Retry",
    backToLesson: "Back to Lesson",
    noQuizAvailable: "No Quiz Available",
    noQuizYet: "This lesson doesn't have a quiz yet.",

    // Landing / public
    logIn: "Log in",
    bookACall: "Book a Call",
    noCodingNeeded: "No coding experience needed",
    masterClaudeCode: "Master Claude Code",
    withoutWritingCode: "without writing code",
    heroSubtitle: "The hands-on course for product managers, designers, and non-technical teams who want to 10x their productivity with AI.",
    bookFreeCall: "Book a Free Call",
    seePricing: "See Pricing",
    builtForNonDev: "Built for non-developers",
    builtForNonDevDesc: "You don't need to be a programmer. If you can describe what you want in plain English, Claude Code can do it.",
    lessonsFromZero: "lessons, from zero to mastery",
    lessonsFromZeroDesc: "Start with terminal basics and progress to advanced workflows. Each lesson includes interactive quizzes and real-world examples.",
    simplePricing: "Simple pricing",
    choosePlan: "Choose the option that works for you.",
    courseOnly: "Course Only",
    courseOnlyDesc: "Full access to all lessons, quizzes, and progress tracking.",
    oneTime: "one-time",
    interactiveLessons: "interactive lessons",
    quizzesWithFeedback: "Quizzes with instant feedback",
    progressTracking: "Progress tracking",
    lifetimeAccess: "Lifetime access",
    getAccess: "Get Access",
    coursePlusMentoring: "Course + Mentoring",
    coursePlusMentoringDesc: "Everything in Course, plus a 2-hour personal mentoring session.",
    everythingInCourse: "Everything in Course Only",
    personalMentoring: "2h personal mentoring session",
    tailoredUseCase: "Tailored to your use case",
    followUpSupport: "Follow-up support via email",
    mostPopular: "Most Popular",
    whatStudentsSay: "What students say",
    meetYourInstructor: "Meet your instructor",
    readyToGetStarted: "Ready to get started?",
    readyToGetStartedDesc: "Book a free 15-minute call. No commitment, no pressure -- just a conversation about how Claude Code can help your workflow.",
    masterClaudeCodeFooter: "Master Claude Code without writing code",

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
    starterDesc: "No experience needed -- perfect for PMs, designers, and non-devs",
    beginnerDesc: "Core Claude Code features and customization",
    intermediateDesc: "Building workflows and automation",
    advancedDesc: "Power user tools and team features",
    starterTime: "~1.5 hours",
    beginnerTime: "~2.5 hours",
    intermediateTime: "~5 hours",
    advancedTime: "~5 hours",

    // Instructor section
    yearsInProduct: "Years in Product",
    atNovaTalent: "at Nova Talent",
    riskAndTechnology: "Risk & Technology",
    builtGlobalApp: "Built the global app",
  },
  es: {
    // Navigation
    home: "Inicio",
    progress: "Progreso",
    startHere: "Empieza aqui",
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",

    // Lesson page
    filesInThisLesson: "Archivos en esta leccion",
    previous: "Anterior",
    next: "Siguiente",
    takeQuiz: "Hacer Quiz",
    backTo: "Volver a",
    markComplete: "Marcar completa",
    completed: "Completada",

    // Progress page
    yourProgress: "Tu Progreso",
    overallProgress: "Progreso General",
    lessons: "lecciones",
    badges: "Insignias",

    // Quiz
    quiz: "Quiz",
    question: "Pregunta",
    of: "de",
    checkAnswer: "Comprobar",
    seeResults: "Ver Resultados",
    quizComplete: "Quiz Completo!",
    correct: "Correcto!",
    incorrect: "Incorrecto",
    perfectScore: "Puntuacion perfecta! Has dominado este tema.",
    greatJob: "Buen trabajo! Revisa las preguntas falladas para afianzar tu conocimiento.",
    keepStudying: "Sigue estudiando! Revisa la leccion e intentalo de nuevo.",
    retry: "Reintentar",
    backToLesson: "Volver a la leccion",
    noQuizAvailable: "No hay Quiz disponible",
    noQuizYet: "Esta leccion aun no tiene quiz.",

    // Landing / public
    logIn: "Iniciar sesion",
    bookACall: "Reservar llamada",
    noCodingNeeded: "No se necesita experiencia en programacion",
    masterClaudeCode: "Domina Claude Code",
    withoutWritingCode: "sin escribir codigo",
    heroSubtitle: "El curso practico para product managers, disenadores y equipos no tecnicos que quieren multiplicar su productividad con IA.",
    bookFreeCall: "Reservar llamada gratuita",
    seePricing: "Ver Precios",
    builtForNonDev: "Disenado para no-desarrolladores",
    builtForNonDevDesc: "No necesitas ser programador. Si puedes describir lo que quieres en espanol, Claude Code puede hacerlo.",
    lessonsFromZero: "lecciones, de cero a experto",
    lessonsFromZeroDesc: "Empieza con lo basico del terminal y progresa hasta flujos avanzados. Cada leccion incluye quizzes interactivos y ejemplos reales.",
    simplePricing: "Precios simples",
    choosePlan: "Elige la opcion que mejor te funcione.",
    courseOnly: "Solo Curso",
    courseOnlyDesc: "Acceso completo a todas las lecciones, quizzes y seguimiento de progreso.",
    oneTime: "pago unico",
    interactiveLessons: "lecciones interactivas",
    quizzesWithFeedback: "Quizzes con feedback instantaneo",
    progressTracking: "Seguimiento de progreso",
    lifetimeAccess: "Acceso de por vida",
    getAccess: "Obtener Acceso",
    coursePlusMentoring: "Curso + Mentoria",
    coursePlusMentoringDesc: "Todo lo del Curso, mas una sesion de mentoria personal de 2 horas.",
    everythingInCourse: "Todo lo del Solo Curso",
    personalMentoring: "Sesion de mentoria personal de 2h",
    tailoredUseCase: "Adaptado a tu caso de uso",
    followUpSupport: "Soporte de seguimiento por email",
    mostPopular: "Mas Popular",
    whatStudentsSay: "Lo que dicen los estudiantes",
    meetYourInstructor: "Conoce a tu instructor",
    readyToGetStarted: "Listo para empezar?",
    readyToGetStartedDesc: "Reserva una llamada gratuita de 15 minutos. Sin compromiso, sin presion -- solo una conversacion sobre como Claude Code puede ayudarte.",
    masterClaudeCodeFooter: "Domina Claude Code sin escribir codigo",

    // Dashboard hero
    dashboardHeroDesc: "Domina Claude Code en un fin de semana. Desde los primeros comandos hasta orquestar agentes, hooks, skills y servidores MCP.",
    dashboardHeroSubDesc: "Disenado para product managers, disenadores, equipos de ventas y cualquiera que quiera trabajar mas inteligente con IA -- sin programar.",
    lessonsLabel: "lecciones",
    examplesLabel: "100+ ejemplos",
    totalTimeLabel: "11-13 horas en total",
    start: "Empezar",

    // Login
    enterEmail: "Introduce tu email para acceder al curso",
    sendMagicLink: "Enviar enlace magico",
    sending: "Enviando...",
    checkYourEmail: "Revisa tu email",
    checkEmailDesc: "Te enviamos un enlace de acceso. Haz clic para entrar al curso.",
    emailNotAuthorized: "Este email no esta autorizado. Contacta al instructor para obtener acceso.",
    somethingWentWrong: "Algo salio mal. Intentalo de nuevo.",
    backToHome: "Volver al inicio",

    // 404
    pageNotFound: "Esta pagina no existe todavia.",
    goBackHome: "Volver al inicio",

    // Language switcher
    language: "Idioma",

    // Misc
    completedCount: "completadas",

    // Audience
    productManagers: "Product Managers",
    productManagersDesc: "Entiende bases de codigo, define funcionalidades, escribe specs y rastrea deuda tecnica -- sin escribir codigo.",
    designers: "Disenadores",
    designersDesc: "Audita consistencia de UI, cambia colores y fuentes, verifica accesibilidad y actualiza disenos directamente.",
    salesMarketing: "Ventas y Marketing",
    salesMarketingDesc: "Actualiza textos del sitio web, gestiona SEO, edita paginas de precios y analiza contenido -- todo por tu cuenta.",
    anyoneCurious: "Cualquier persona curiosa",
    anyoneCuriousDesc: "No se necesita experiencia en programacion. Si puedes escribir un mensaje, puedes usar Claude Code.",

    // Level descriptions (dashboard)
    starterDesc: "Sin experiencia necesaria -- perfecto para PMs, disenadores y no-devs",
    beginnerDesc: "Funcionalidades principales de Claude Code y personalizacion",
    intermediateDesc: "Construyendo flujos de trabajo y automatizacion",
    advancedDesc: "Herramientas avanzadas y funcionalidades de equipo",
    starterTime: "~1.5 horas",
    beginnerTime: "~2.5 horas",
    intermediateTime: "~5 horas",
    advancedTime: "~5 horas",

    // Instructor section
    yearsInProduct: "Anos en Producto",
    atNovaTalent: "en Nova Talent",
    riskAndTechnology: "Riesgo y Tecnologia",
    builtGlobalApp: "Creo la app global",
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale]?.[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
