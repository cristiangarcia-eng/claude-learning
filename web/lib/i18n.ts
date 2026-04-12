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
    coursePlusMentoringDesc: "Everything in Course, plus a 2-hour personal mentoring session.",
    everythingInCourse: "Everything in Course Only",
    personalMentoring: "2h personal mentoring session",
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
    scheduleMentoringDesc: "Book your 2-hour personal mentoring session with Cristian. Pick a time that works for you.",
    scheduleNow: "Schedule Now",
    goToLogin: "Go to Login",
  },
  es: {
    // Navigation
    home: "Inicio",
    progress: "Progreso",
    startHere: "Iniciación",
    pro: "Pro",
    projects: "Proyectos",

    // Lesson page
    filesInThisLesson: "Archivos en esta leccion",
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
    logIn: "Iniciar sesion",
    bookACall: "Reservar llamada",
    noCodingNeeded: "No se necesita experiencia en programacion",
    masterClaudeCode: "Claude Code es el superpoder de esta generación.",
    withoutWritingCode: "Claude10x te enseña a usarlo.",
    heroSubtitle: "El curso practico para product managers, disenadores y equipos no tecnicos que quieren multiplicar su productividad con IA.",
    bookFreeCall: "Reservar llamada gratuita",
    seePricing: "Ver Precios",
    builtForNonDev: "Disenado para no-desarrolladores",
    builtForNonDevDesc: "No necesitas ser programador. Si puedes describir lo que quieres en espanol, Claude Code puede hacerlo.",
    lessonsFromZero: "lecciones, de cero a experto",
    lessonsFromZeroDesc: "Empieza con lo basico del terminal y progresa hasta flujos avanzados. Cada leccion incluye ejercicios practicos y ejemplos reales.",
    simplePricing: "Precios simples",
    choosePlan: "Elige la opcion que mejor te funcione.",
    courseOnly: "Solo Curso",
    courseOnlyDesc: "Acceso completo a todas las lecciones y seguimiento de progreso.",
    oneTime: "pago unico",
    interactiveLessons: "lecciones interactivas",
    handsOnExercises: "Ejercicios practicos",
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
    readyToGetStartedDesc: "Empieza a aprender hoy. Obtén acceso instantáneo a todas las lecciones y ejercicios prácticos.",
    masterClaudeCodeFooter: "Claude10x te enseña a usar Claude Code.",

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

    // Dashboard progress hero
    welcomeBack: "Bienvenido de nuevo",
    continueNextLesson: "Continuar siguiente leccion",
    startFirstLesson: "Empieza tu primera leccion",
    lessonsCompleted: "lecciones completadas",
    allLessonsCompleted: "Completaste todas las lecciones!",

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
    welcomeTitle: "Aqui empieza todo.",
    welcomeBody: "Acabas de dar el primer paso hacia un salto en tu carrera. En un fin de semana, pasaras de \"yo no programo\" a usar IA con confianza para hacer cosas que antes requerian un desarrollador.",
    welcomeSubtext: "No necesitas experiencia con la terminal. Ni conocimientos de programacion. Solo tu, Claude y un poco de curiosidad.",
    welcomeCta: "Vamos",
    welcomeLanguageTitle: "Elige tu idioma",
    welcomeLanguageBody: "¿En qué idioma quieres tomar el curso?",
    welcomeLanguageHint: "Elige aquel en el que te sientas más cómodo. Te recomendamos hablarle a la IA en tu idioma nativo — ahí es donde obtendrás los mejores resultados.",
    welcomeLanguageContinue: "Continuar",

    // Instructor section
    yearsInProduct: "Anos en Producto",
    atNovaTalent: "en Nova Talent",
    riskAndTechnology: "Riesgo y Tecnologia",
    builtGlobalApp: "Creo la app global",

    // Checkout & payment
    getStarted: "Empezar",
    processing: "Procesando...",
    startLearning: "Empezar a aprender",
    paymentSuccess: "Pago exitoso!",
    checkEmailToLogin: "Revisa tu email para acceder. Te enviamos un enlace magico para entrar al curso.",
    scheduleMentoring: "Agenda tu sesion de mentoria",
    scheduleMentoringDesc: "Reserva tu sesion de mentoria personal de 2 horas con Cristian. Elige el horario que te convenga.",
    scheduleNow: "Agendar Ahora",
    goToLogin: "Ir al Login",
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale]?.[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
