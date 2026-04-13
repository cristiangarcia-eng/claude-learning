import Link from "next/link";
import { Logo } from "@/components/logo";
import { LESSONS, getLessonsByLevel, getLessonTitle } from "@/lib/lessons";
import {
  ArrowRight,
  CheckCircle,
  Database,
  MoveRight,
  Repeat,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import { type Locale, isValidLocale, t } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { CheckoutButton } from "@/components/checkout-button";

const UNLOCK_CATEGORIES = [
  { icon: Search, titleKey: "unlock1Title" as const, descKey: "unlock1Desc" as const },
  { icon: Repeat, titleKey: "unlock2Title" as const, descKey: "unlock2Desc" as const },
  { icon: Database, titleKey: "unlock3Title" as const, descKey: "unlock3Desc" as const },
  { icon: Wrench, titleKey: "unlock4Title" as const, descKey: "unlock4Desc" as const },
];

const LEVELS = [
  { key: "starter" as const, labelKey: "startHere" as const, color: "text-brand-green", border: "border-brand-green/25" },
  { key: "pro" as const, labelKey: "pro" as const, color: "text-blue-400", border: "border-blue-400/25" },
  { key: "projects" as const, labelKey: "projects" as const, color: "text-orange-400", border: "border-orange-400/25" },
  { key: "extra" as const, labelKey: "extra" as const, color: "text-purple-400", border: "border-purple-400/25" },
];

const PAINS = [
  { quoteKey: "pain1" as const, roleKey: "pain1Role" as const },
  { quoteKey: "pain2" as const, roleKey: "pain2Role" as const },
  { quoteKey: "pain3" as const, roleKey: "pain3Role" as const },
];

const SHIFTS = [
  { labelKey: "shift1Label" as const, beforeKey: "shift1Before" as const, afterKey: "shift1After" as const },
  { labelKey: "shift2Label" as const, beforeKey: "shift2Before" as const, afterKey: "shift2After" as const },
  { labelKey: "shift3Label" as const, beforeKey: "shift3Before" as const, afterKey: "shift3After" as const },
];

const TESTIMONIALS = [
  {
    quote:
      "I used to spend six hours on my weekly competitor report. Claude does it in twenty minutes, with better sources.",
    name: "Natalia R.",
    role: "Strategy Lead",
  },
  {
    quote:
      "I was paying $400 a month for a scraping tool that never quite worked. Now I just describe what I want. CSV in minutes.",
    name: "Marco D.",
    role: "Growth Manager",
  },
  {
    quote:
      "I automated my entire month-end close in one weekend. I got my weekends back.",
    name: "Helena V.",
    role: "Operations Director",
  },
];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;

  return (
    <div className="min-h-screen noise-overlay">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/login`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(l, "logIn")}
            </Link>
            <a
              href="#pricing"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-brand-green text-black hover:bg-brand-green/90 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              {t(l, "getStarted")}
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <header className="relative overflow-hidden pt-24">
        <div className="vertical-rules" />
        <div className="hero-glow" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="relative z-10 lg:col-span-7">
              <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/25 bg-brand-green/5 text-brand-green text-xs font-mono tracking-[0.15em] uppercase mb-8">
                <Terminal className="h-3.5 w-3.5" />
                {t(l, "noCodingNeeded")}
              </div>

              <h1 className="animate-fade-up delay-1 font-heading text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[0.98] tracking-[-0.035em] mb-8">
                {t(l, "heroHeadlineA")}
                <br />
                {t(l, "heroHeadlineB")}
                <br />
                <span className="font-serif-italic text-brand-green/95 text-[0.88em]">
                  {t(l, "heroHeadlineAccent")}
                </span>
              </h1>

              <p className="animate-fade-up delay-2 text-[1.05rem] md:text-lg text-muted-foreground max-w-xl mb-4 leading-relaxed">
                {t(l, "heroSubtitleNew")}
              </p>

              <p className="animate-fade-up delay-2 text-xs font-mono tracking-[0.05em] text-muted-foreground/70 mb-10">
                {t(l, "heroTrust")}
              </p>

              <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] text-base"
                >
                  {t(l, "startLearning")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border/60 text-muted-foreground font-medium hover:text-foreground hover:border-foreground/30 transition-all text-base"
                >
                  {t(l, "seePricing")}
                </a>
              </div>
            </div>

            {/* Right: Terminal Mockup */}
            <div className="animate-fade-up delay-4 relative z-10 hidden lg:block lg:col-span-5">
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <span className="text-xs text-muted-foreground/50 ml-2 font-mono">~/research/ai-tools</span>
                </div>
                <div className="terminal-body">
                  <p><span className="prompt">$</span> <span className="highlight">claude</span></p>
                  <p className="output mt-2">Claude Code v1.0.28</p>
                  <p className="output">Ready to assist.</p>
                  <p className="mt-3"><span className="prompt">&gt;</span> <span className="highlight">scrape the top 50 AI tools from</span></p>
                  <p><span className="prompt">&nbsp;&nbsp;</span> <span className="highlight">producthunt.com and build a db</span></p>
                  <p className="output mt-3">Fetching producthunt.com/topics/ai...</p>
                  <p className="output">Found 50 products across 3 pages.</p>
                  <p className="output mt-2">Extracting: name, tagline, votes, url...</p>
                  <p className="output">Writing data/ai-tools.csv</p>
                  <p className="mt-3 text-brand-green">✓ 50 rows saved to ai-tools.csv</p>
                  <p className="text-brand-green">✓ Enriched with maker handles</p>
                  <p className="mt-3"><span className="prompt">&gt;</span> <span className="highlight blink-cursor">_</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="animate-fade-up delay-5 relative z-10 mt-16">
            <div className="stat-strip">
              <div className="stat-strip-item">
                <span className="stat-strip-num">
                  {LESSONS.length}
                </span>
                <span className="stat-strip-label">{t(l, "statLessons")}</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-num">11–13</span>
                <span className="stat-strip-label">{t(l, "statHours")}</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-num">100<span className="accent">+</span></span>
                <span className="stat-strip-label">{t(l, "statExamples")}</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-num">∞</span>
                <span className="stat-strip-label">{t(l, "statLifetime")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== ACT 1 — THE WALL ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="max-w-2xl mb-16">
            <span className="chapter mb-5 block">{t(l, "act1Chapter")}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mb-5">
              {t(l, "act1Title")}
            </h2>
            <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
              {t(l, "act1Desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-border/20 rounded-xl overflow-hidden">
            {PAINS.map((pain) => (
              <div key={pain.quoteKey} className="pain-card bg-background md:border-t-0">
                <p className="pain-quote">{t(l, pain.quoteKey)}</p>
                <p className="pain-role">— {t(l, pain.roleKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACT 2 — THE UNLOCK ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="vertical-rules" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="max-w-2xl mb-16">
            <span className="chapter mb-5 block">{t(l, "act2Chapter")}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mb-5">
              {t(l, "act2Title")}
            </h2>
            <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
              {t(l, "act2Desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UNLOCK_CATEGORIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titleKey}
                  className={`animate-fade-up delay-${i + 1} group relative p-6 rounded-xl border border-border/50 bg-card/40 hover:bg-card hover:border-brand-green/30 transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <h3 className="font-heading text-base font-semibold mb-2">{t(l, item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground/85 leading-relaxed">
                    {t(l, item.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ACT 3 — BEFORE / AFTER ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="max-w-2xl mb-14">
            <span className="chapter mb-5 block">{t(l, "act3Chapter")}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mb-5">
              {t(l, "act3Title")}
            </h2>
            <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
              {t(l, "act3Desc")}
            </p>
          </div>

          <div className="max-w-5xl">
            {SHIFTS.map((shift, i) => (
              <div key={shift.labelKey} className="ba-row">
                <div className="ba-header">
                  <span className="ba-header-num">0{i + 1}</span>
                  <span className="ba-header-title">{t(l, shift.labelKey)}</span>
                </div>
                <div className="ba-split">
                  <div className="ba-side before">
                    <div className="ba-label"><span className="dot" />{t(l, "shiftBefore")}</div>
                    <div className="ba-text">{t(l, shift.beforeKey)}</div>
                  </div>
                  <div className="ba-divider">
                    <MoveRight className="h-5 w-5" />
                  </div>
                  <div className="ba-side after">
                    <div className="ba-label"><span className="dot" />{t(l, "shiftAfter")}</div>
                    <div className="ba-text">{t(l, shift.afterKey)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACT 4 — THE CURRICULUM ========== */}
      <section id="curriculum" className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="max-w-2xl mb-16">
            <span className="chapter mb-5 block">{t(l, "act4Chapter")}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mb-5">
              {LESSONS.length}{" "}
              <span className="font-serif-italic text-muted-foreground/70 text-[0.85em]">
                {t(l, "lessonsFromZero")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
              {t(l, "lessonsFromZeroDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEVELS.map((level) => {
              const lessons = getLessonsByLevel(level.key);
              return (
                <div key={level.key}>
                  <div className={`flex items-baseline justify-between gap-2 mb-4 pb-3 border-b ${level.border}`}>
                    <h3
                      className={`text-xs font-bold uppercase tracking-[0.18em] font-mono ${level.color}`}
                    >
                      {t(l, level.labelKey)}
                    </h3>
                    <span className="text-xs text-muted-foreground/50 font-mono">{lessons.length}</span>
                  </div>
                  <ul className="space-y-1">
                    {lessons.map((lesson) => (
                      <li
                        key={lesson.slug}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/60 transition-colors group"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-muted-foreground/20 flex-shrink-0 group-hover:text-brand-green/50 transition-colors" />
                        <span className="flex-1 text-sm leading-snug">
                          {getLessonTitle(lesson, l)}
                        </span>
                        <span className="text-[10px] text-muted-foreground/50 font-mono">
                          {lesson.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ACT 5 — INSTRUCTOR ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="relative md:col-span-5">
              <div className="absolute -inset-6 bg-brand-green/5 rounded-3xl blur-3xl" />
              <img
                src="/cristian.png"
                alt="Cristian Garcia"
                className="relative w-full max-w-md rounded-2xl object-cover aspect-square"
              />
              <div className="absolute -bottom-3 -right-3 md:right-8 bg-brand-green text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-brand-green/20">
                8+ {t(l, "yearsInProduct")}
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="chapter mb-5 block">{t(l, "act5Chapter")}</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-2">
                Cristian Garcia
              </h2>
              <p className="font-serif-italic text-xl text-muted-foreground/80 mb-8">
                Chief Product Officer · Claude Code Expert
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  I&apos;ve spent 8+ years building digital products at companies like
                  <strong className="text-foreground"> Banco Santander</strong> and
                  <strong className="text-foreground"> BBVA</strong>, leading teams
                  and shipping apps used by millions.
                </p>
                <p>
                  As CPO at
                  <strong className="text-foreground"> Nova Talent</strong>, I
                  integrate AI into every part of our product workflow. Claude Code
                  is my daily driver.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8 max-w-lg">
                {[
                  { value: "8+", label: t(l, "yearsInProduct") },
                  { value: "CPO", label: t(l, "atNovaTalent") },
                  { value: "BBVA", label: t(l, "riskAndTechnology") },
                  { value: "Santander", label: t(l, "builtGlobalApp") },
                ].map((stat) => (
                  <div key={stat.value} className="stat-card p-4 rounded-xl border border-border/30 bg-card/20 text-center">
                    <p className="font-heading text-2xl font-bold text-brand-green">{stat.value}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 tracking-[-0.02em]">
            {t(l, "whatStudentsSay")}
          </h2>
          <p className="font-serif-italic text-xl text-muted-foreground/60 text-center mb-16">
            — three voices from the first cohort
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <p className="text-base mb-6 leading-relaxed text-foreground/90">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                  <div className="w-9 h-9 rounded-full bg-brand-green/15 flex items-center justify-center text-xs font-bold text-brand-green">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACT 6 — PRICING ========== */}
      <section id="pricing" className="relative">
        <div className="chapter-rule" />
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-28">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="chapter mb-5">{t(l, "act6Chapter")}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mt-5 mb-5">
              {t(l, "simplePricing")}
            </h2>
            <p className="text-lg text-muted-foreground/90">
              {t(l, "choosePlan")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Course only */}
            <div className="p-8 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="font-heading text-xl font-semibold mb-2">{t(l, "courseOnly")}</h3>
              <p className="text-muted-foreground text-sm mb-8 min-h-[2.5rem]">
                {t(l, "courseOnlyDesc")}
              </p>
              <div className="mb-8 flex items-baseline">
                <span className="font-heading text-5xl font-bold tracking-[-0.03em]">$99</span>
                <span className="text-muted-foreground/60 ml-2 text-sm">{t(l, "oneTime")}</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60 flex-shrink-0" />
                  <span className="text-muted-foreground">{LESSONS.length} {t(l, "interactiveLessons")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60 flex-shrink-0" />
                  <span className="text-muted-foreground">{t(l, "handsOnExercises")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60 flex-shrink-0" />
                  <span className="text-muted-foreground">{t(l, "progressTracking")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60 flex-shrink-0" />
                  <span className="text-muted-foreground">{t(l, "lifetimeAccess")}</span>
                </li>
              </ul>
              <CheckoutButton
                tier="course"
                locale={locale}
                loadingText={t(l, "processing")}
                className="block w-full text-center px-4 py-3 rounded-lg border border-border/60 font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer disabled:opacity-50"
              >
                {t(l, "getAccess")}
              </CheckoutButton>
            </div>

            {/* Course + Mentoring */}
            <div className="featured-card rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1 rounded-full bg-brand-green text-black text-xs font-bold tracking-wide uppercase">
                  {t(l, "mostPopular")}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {t(l, "coursePlusMentoring")}
              </h3>
              <p className="text-muted-foreground text-sm mb-8 min-h-[2.5rem]">
                {t(l, "coursePlusMentoringDesc")}
              </p>
              <div className="mb-8 flex items-baseline">
                <span className="font-heading text-5xl font-bold tracking-[-0.03em]">$299</span>
                <span className="text-muted-foreground/60 ml-2 text-sm">{t(l, "oneTime")}</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                  {t(l, "everythingInCourse")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                  {t(l, "personalMentoring")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                  {t(l, "tailoredUseCase")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                  {t(l, "followUpSupport")}
                </li>
              </ul>
              <CheckoutButton
                tier="mentoring"
                locale={locale}
                loadingText={t(l, "processing")}
                className="block w-full text-center px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.25)] cursor-pointer disabled:opacity-50"
              >
                {t(l, "getStarted")}
              </CheckoutButton>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 text-muted-foreground/70 text-sm">
            <ShieldCheck className="h-4 w-4 text-brand-green/70" />
            <span>{t(l, "guaranteeLine")}</span>
          </div>
        </div>
      </section>

      {/* ========== ACT 7 — FINAL CTA ========== */}
      <section className="relative">
        <div className="chapter-rule" />
        <div className="relative max-w-3xl mx-auto px-6 py-28 lg:py-32 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[360px] bg-brand-green/5 rounded-full blur-3xl" />
          </div>
          <span className="chapter relative mb-6">{t(l, "act7Chapter")}</span>
          <h2 className="relative font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mt-6 mb-5">
            {t(l, "readyToGetStarted")}
          </h2>
          <p className="relative text-lg text-muted-foreground/90 mb-10 max-w-lg mx-auto">
            {t(l, "readyToGetStartedDesc")}
          </p>
          <a
            href="#pricing"
            className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-green text-black font-bold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.35)] text-lg cta-pulse"
          >
            {t(l, "startLearning")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="relative text-xs text-muted-foreground/60 mt-6 font-mono tracking-wide">
            {t(l, "guaranteeLine")}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-xs text-muted-foreground/40">{t(l, "masterClaudeCodeFooter")}</p>
        </div>
      </footer>
    </div>
  );
}
