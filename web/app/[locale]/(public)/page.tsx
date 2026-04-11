import Link from "next/link";
import { Logo } from "@/components/logo";
import { LESSONS, getLessonsByLevel, getLessonTitle } from "@/lib/lessons";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  MessageSquare,
  Palette,
  Presentation,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale, isValidLocale, t } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { CheckoutButton } from "@/components/checkout-button";

const AUDIENCE_KEYS = [
  { icon: Presentation, titleKey: "productManagers" as const, descKey: "productManagersDesc" as const },
  { icon: Palette, titleKey: "designers" as const, descKey: "designersDesc" as const },
  { icon: TrendingUp, titleKey: "salesMarketing" as const, descKey: "salesMarketingDesc" as const },
  { icon: Users, titleKey: "anyoneCurious" as const, descKey: "anyoneCuriousDesc" as const },
];

const LEVEL_LABELS = {
  starter: "startHere",
  pro: "pro",
  projects: "projects",
  extra: "extra",
} as const;

const LEVEL_COLORS = {
  starter: "text-brand-green",
  pro: "text-blue-500",
  projects: "text-orange-500",
  extra: "text-purple-500",
} as const;

const LEVEL_BORDER_COLORS = {
  starter: "border-brand-green/20",
  pro: "border-blue-500/20",
  projects: "border-orange-500/20",
  extra: "border-purple-500/20",
} as const;

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

      {/* Hero */}
      <header className="relative overflow-hidden pt-24">
        <div className="hero-glow" />
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="relative z-10">
              <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-green text-sm font-medium mb-8">
                <Terminal className="h-3.5 w-3.5" />
                {t(l, "noCodingNeeded")}
              </div>
              <h1 className="animate-fade-up delay-1 font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
                {t(l, "masterClaudeCode")}
                <br />
                <span className="text-muted-foreground/60">{t(l, "withoutWritingCode")}</span>
              </h1>
              <p className="animate-fade-up delay-2 text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                {t(l, "heroSubtitle")}
              </p>
              <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] text-base"
                >
                  {t(l, "startLearning")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border/60 text-muted-foreground font-medium hover:text-foreground hover:border-foreground/20 transition-all text-base"
                >
                  {t(l, "seePricing")}
                </a>
              </div>
            </div>

            {/* Right: Terminal Mockup */}
            <div className="animate-fade-up delay-4 relative z-10 hidden lg:block">
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <span className="text-xs text-muted-foreground/50 ml-2 font-mono">~/Claude/projects/nike-analysis</span>
                </div>
                <div className="terminal-body">
                  <p><span className="prompt">$</span> <span className="highlight">claude</span></p>
                  <p className="output mt-2">Claude Code v1.0.28</p>
                  <p className="output">Ready to assist.</p>
                  <p className="mt-3"><span className="prompt">&gt;</span> <span className="highlight">analyze the Q1 sales data and create</span></p>
                  <p><span className="prompt">&nbsp;&nbsp;</span> <span className="highlight">a summary by region with trends</span></p>
                  <p className="output mt-3">Reading data/q1-sales.csv...</p>
                  <p className="output">Found 847 rows across 5 regions.</p>
                  <p className="output mt-2">Creating output/regional-summary.md</p>
                  <p className="output">with charts and key findings...</p>
                  <p className="mt-3 text-brand-green">&#10003; Report saved to output/regional-summary.md</p>
                  <p className="text-brand-green">&#10003; 3 visualizations generated</p>
                  <p className="mt-3"><span className="prompt">&gt;</span> <span className="highlight blink-cursor">_</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Who this is for */}
      <section className="relative">
        <div className="glow-divider" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-[0.2em] font-mono mb-3 text-center">
            {t(l, "builtForNonDev")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t(l, "builtForNonDev")}
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            {t(l, "builtForNonDevDesc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUDIENCE_KEYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titleKey}
                  className={`animate-fade-up delay-${i + 1} group p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-brand-green/20 transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/15 transition-colors">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{t(l, item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(l, item.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="relative">
        <div className="glow-divider" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="h-5 w-5 text-brand-green" />
            <span className="text-brand-green text-sm font-semibold uppercase tracking-[0.2em] font-mono">Curriculum</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {LESSONS.length} {t(l, "lessonsFromZero")}
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            {t(l, "lessonsFromZeroDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(["starter", "pro", "projects", "extra"] as const).map(
              (level) => {
                const lessons = getLessonsByLevel(level);
                return (
                  <div key={level}>
                    <div className={`flex items-center gap-2 mb-4 pb-3 border-b ${LEVEL_BORDER_COLORS[level]}`}>
                      <h3
                        className={`text-xs font-bold uppercase tracking-[0.15em] font-mono ${LEVEL_COLORS[level]}`}
                      >
                        {t(l, LEVEL_LABELS[level])}
                      </h3>
                      <span className="text-xs text-muted-foreground/50 font-mono">{lessons.length}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {lessons.map((lesson) => (
                        <li
                          key={lesson.slug}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-card/80 transition-colors group"
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-muted-foreground/20 flex-shrink-0 group-hover:text-brand-green/40 transition-colors" />
                          <span className="flex-1 text-sm">
                            {getLessonTitle(lesson, l)}
                          </span>
                          <span className="text-[11px] text-muted-foreground/50 flex items-center gap-1 font-mono">
                            {lesson.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative">
        <div className="glow-divider" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t(l, "simplePricing")}
          </h2>
          <p className="text-muted-foreground text-center mb-16">
            {t(l, "choosePlan")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Course only */}
            <div className="p-8 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="font-heading text-xl font-semibold mb-2">{t(l, "courseOnly")}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {t(l, "courseOnlyDesc")}
              </p>
              <div className="mb-8">
                <span className="font-heading text-5xl font-bold">$99</span>
                <span className="text-muted-foreground/60 ml-2 text-sm">{t(l, "oneTime")}</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60" />
                  <span className="text-muted-foreground">{LESSONS.length} {t(l, "interactiveLessons")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60" />
                  <span className="text-muted-foreground">{t(l, "handsOnExercises")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60" />
                  <span className="text-muted-foreground">{t(l, "progressTracking")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green/60" />
                  <span className="text-muted-foreground">{t(l, "lifetimeAccess")}</span>
                </li>
              </ul>
              <CheckoutButton
                tier="course"
                locale={locale}
                loadingText={t(l, "processing")}
                className="block w-full text-center px-4 py-3 rounded-lg border border-border/60 font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer disabled:opacity-50"
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
              <p className="text-muted-foreground text-sm mb-6">
                {t(l, "coursePlusMentoringDesc")}
              </p>
              <div className="mb-8">
                <span className="font-heading text-5xl font-bold">$299</span>
                <span className="text-muted-foreground/60 ml-2 text-sm">{t(l, "oneTime")}</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green" />
                  {t(l, "everythingInCourse")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green" />
                  {t(l, "personalMentoring")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green" />
                  {t(l, "tailoredUseCase")}
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-green" />
                  {t(l, "followUpSupport")}
                </li>
              </ul>
              <CheckoutButton
                tier="mentoring"
                locale={locale}
                loadingText={t(l, "processing")}
                className="block w-full text-center px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.2)] cursor-pointer disabled:opacity-50"
              >
                {t(l, "getStarted")}
              </CheckoutButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="glow-divider" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            {t(l, "whatStudentsSay")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I went from never opening a terminal to automating my weekly reports. Game changer.",
                name: "Sarah M.",
                role: "Product Manager",
              },
              {
                quote:
                  "Now I can update our website copy myself without waiting for engineering. Saves me hours every week.",
                name: "James K.",
                role: "Marketing Lead",
              },
              {
                quote:
                  "The mentoring session was worth every penny. Totally tailored to my design workflow.",
                name: "Ana R.",
                role: "UI Designer",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="p-6 rounded-xl border border-border/30 bg-card/20 hover:bg-card/40 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-3.5 w-3.5 text-brand-green/60" />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-xs font-bold text-brand-green">
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

      {/* About */}
      <section className="relative">
        <div className="glow-divider" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-green/5 rounded-3xl blur-2xl" />
              <img
                src="/cristian.png"
                alt="Cristian Garcia"
                className="relative w-full max-w-md rounded-2xl object-cover aspect-square"
              />
              <div className="absolute -bottom-3 -right-3 md:right-8 bg-brand-green text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-brand-green/20">
                8+ {t(l, "yearsInProduct")}
              </div>
            </div>
            <div>
              <p className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] font-mono mb-3">{t(l, "meetYourInstructor")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Cristian Garcia</h2>
              <p className="text-lg text-muted-foreground/70 mb-8">
                Chief Product Officer &middot; Claude Code Expert
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              <div className="grid grid-cols-2 gap-3 mt-8">
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

      {/* Final CTA */}
      <section className="relative">
        <div className="glow-divider" />
        <div className="relative max-w-3xl mx-auto px-6 py-28 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] bg-brand-green/5 rounded-full blur-3xl" />
          </div>
          <h2 className="relative font-heading text-3xl md:text-5xl font-bold mb-5">{t(l, "readyToGetStarted")}</h2>
          <p className="relative text-muted-foreground mb-10 max-w-lg mx-auto">
            {t(l, "readyToGetStartedDesc")}
          </p>
          <a
            href="#pricing"
            className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-green text-black font-bold hover:bg-brand-green/90 transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] text-lg"
          >
            {t(l, "startLearning")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Logo size="sm" />
          <p className="text-xs text-muted-foreground/40">{t(l, "masterClaudeCodeFooter")}</p>
        </div>
      </footer>
    </div>
  );
}
