import Link from "next/link";
import { Logo } from "@/components/logo";
import { LESSONS, getLessonsByLevel, getLessonTitle } from "@/lib/lessons";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  Palette,
  Presentation,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale, isValidLocale, t } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

const AUDIENCE_KEYS = [
  { icon: Presentation, titleKey: "productManagers" as const, descKey: "productManagersDesc" as const },
  { icon: Palette, titleKey: "designers" as const, descKey: "designersDesc" as const },
  { icon: TrendingUp, titleKey: "salesMarketing" as const, descKey: "salesMarketingDesc" as const },
  { icon: Users, titleKey: "anyoneCurious" as const, descKey: "anyoneCuriousDesc" as const },
];

const LEVEL_LABELS = {
  starter: "startHere",
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

const LEVEL_COLORS = {
  starter: "text-brand-green",
  beginner: "text-green-500",
  intermediate: "text-blue-500",
  advanced: "text-red-500",
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
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/login`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(l, "logIn")}
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-brand-green text-black hover:bg-brand-green/90 transition-colors"
            >
              {t(l, "bookACall")}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          {t(l, "noCodingNeeded")}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t(l, "masterClaudeCode")}
          <br />
          <span className="text-muted-foreground">{t(l, "withoutWritingCode")}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t(l, "heroSubtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            {t(l, "bookFreeCall")}
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors text-lg"
          >
            {t(l, "seePricing")}
          </a>
        </div>
      </header>

      {/* Who this is for */}
      <section className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t(l, "builtForNonDev")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t(l, "builtForNonDevDesc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_KEYS.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.titleKey}>
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-brand-green mb-4" />
                    <h3 className="font-semibold mb-2">{t(l, item.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(l, item.descKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            {LESSONS.length} {t(l, "lessonsFromZero")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t(l, "lessonsFromZeroDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(["starter", "beginner", "intermediate", "advanced"] as const).map(
              (level) => {
                const lessons = getLessonsByLevel(level);
                return (
                  <div key={level}>
                    <h3
                      className={`text-sm font-semibold uppercase tracking-wider mb-3 ${LEVEL_COLORS[level]}`}
                    >
                      {t(l, LEVEL_LABELS[level])}
                    </h3>
                    <ul className="space-y-2">
                      {lessons.map((lesson) => (
                        <li
                          key={lesson.slug}
                          className="flex items-center gap-3 p-3 rounded-lg border border-border"
                        >
                          <CheckCircle className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
                          <span className="flex-1 text-sm font-medium">
                            {getLessonTitle(lesson, l)}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
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
      <section id="pricing" className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t(l, "simplePricing")}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t(l, "choosePlan")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Course only */}
            <Card className="relative">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">{t(l, "courseOnly")}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {t(l, "courseOnlyDesc")}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground ml-1">{t(l, "oneTime")}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {LESSONS.length} {t(l, "interactiveLessons")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "quizzesWithFeedback")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "progressTracking")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "lifetimeAccess")}
                  </li>
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
                >
                  {t(l, "getAccess")}
                </a>
              </CardContent>
            </Card>

            {/* Course + Mentoring */}
            <Card className="relative overflow-visible border-brand-green/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="px-3 py-1 rounded-full bg-brand-green text-black text-xs font-semibold">
                  {t(l, "mostPopular")}
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">
                  {t(l, "coursePlusMentoring")}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {t(l, "coursePlusMentoringDesc")}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-muted-foreground ml-1">{t(l, "oneTime")}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "everythingInCourse")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "personalMentoring")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "tailoredUseCase")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {t(l, "followUpSupport")}
                  </li>
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors"
                >
                  {t(l, "bookACall")}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
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
              <Card key={testimonial.name}>
                <CardContent className="p-6">
                  <MessageSquare className="h-5 w-5 text-brand-green mb-3" />
                  <p className="text-sm mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/cristian.png"
                alt="Cristian Garcia"
                className="w-full max-w-md rounded-2xl object-cover aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 md:right-4 bg-brand-green text-black px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                8+ {t(l, "yearsInProduct")}
              </div>
            </div>
            <div>
              <p className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-2">{t(l, "meetYourInstructor")}</p>
              <h2 className="text-3xl font-bold mb-2">Cristian Garcia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Chief Product Officer &middot; Claude Code Expert
              </p>
              <div className="space-y-4 text-muted-foreground">
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
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">8+</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(l, "yearsInProduct")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">CPO</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(l, "atNovaTalent")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">BBVA</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(l, "riskAndTechnology")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">Santander</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(l, "builtGlobalApp")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">{t(l, "readyToGetStarted")}</h2>
          <p className="text-muted-foreground mb-8">
            {t(l, "readyToGetStartedDesc")}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            {t(l, "bookFreeCall")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p><Logo size="sm" /> &middot; {t(l, "masterClaudeCodeFooter")}</p>
      </footer>
    </div>
  );
}
