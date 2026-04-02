import Link from "next/link";
import { LESSONS, getLessonsByLevel } from "@/lib/lessons";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageSquare,
  Palette,
  Presentation,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

const AUDIENCE = [
  {
    icon: Presentation,
    title: "Product Managers",
    description:
      "Understand codebases, scope features, write specs, and track technical debt — without writing code.",
  },
  {
    icon: Palette,
    title: "Designers",
    description:
      "Audit UI consistency, change colors and fonts, check accessibility, and update designs directly.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description:
      "Update website copy, manage SEO, edit pricing pages, and analyze content — all by yourself.",
  },
  {
    icon: Users,
    title: "Anyone curious",
    description:
      "No coding experience needed. If you can type a message, you can use Claude Code.",
  },
];

const LEVEL_LABELS = {
  starter: { label: "Start Here", color: "text-brand-green" },
  beginner: { label: "Beginner", color: "text-green-500" },
  intermediate: { label: "Intermediate", color: "text-blue-500" },
  advanced: { label: "Advanced", color: "text-red-500" },
} as const;

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-brand-green" />
            <span className="font-bold text-lg">Claude Mastery</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-brand-green text-black hover:bg-brand-green/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          No coding experience needed
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Master Claude Code
          <br />
          <span className="text-muted-foreground">without writing code</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          The hands-on course for product managers, designers, and non-technical
          teams who want to 10x their productivity with AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            Book a Free Call
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors text-lg"
          >
            See Pricing
          </a>
        </div>
      </header>

      {/* Who this is for */}
      <section className="border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built for non-developers
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            You don&apos;t need to be a programmer. If you can describe what you
            want in plain English, Claude Code can do it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-brand-green mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
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
            {LESSONS.length} lessons, from zero to mastery
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Start with terminal basics and progress to advanced workflows.
            Each lesson includes interactive quizzes and real-world examples.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(["starter", "beginner", "intermediate", "advanced"] as const).map(
              (level) => {
                const lessons = getLessonsByLevel(level);
                const config = LEVEL_LABELS[level];
                return (
                  <div key={level}>
                    <h3
                      className={`text-sm font-semibold uppercase tracking-wider mb-3 ${config.color}`}
                    >
                      {config.label}
                    </h3>
                    <ul className="space-y-2">
                      {lessons.map((lesson) => (
                        <li
                          key={lesson.slug}
                          className="flex items-center gap-3 p-3 rounded-lg border border-border"
                        >
                          <CheckCircle className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
                          <span className="flex-1 text-sm font-medium">
                            {lesson.title}
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
            Simple pricing
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Choose the option that works for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Course only */}
            <Card className="relative">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Course Only</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Full access to all {LESSONS.length} lessons, quizzes, and
                  progress tracking.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground ml-1">one-time</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    {LESSONS.length} interactive lessons
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Quizzes with instant feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Lifetime access
                  </li>
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
                >
                  Get Access
                </a>
              </CardContent>
            </Card>

            {/* Course + Mentoring */}
            <Card className="relative overflow-visible border-brand-green/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="px-3 py-1 rounded-full bg-brand-green text-black text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">
                  Course + Mentoring
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Everything in Course, plus a 2-hour personal mentoring
                  session.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-muted-foreground ml-1">one-time</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Everything in Course Only
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    2h personal mentoring session
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Tailored to your use case
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Follow-up support via email
                  </li>
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors"
                >
                  Book a Call
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
            What students say
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
            ].map((t) => (
              <Card key={t.name}>
                <CardContent className="p-6">
                  <MessageSquare className="h-5 w-5 text-brand-green mb-3" />
                  <p className="text-sm mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
                8+ years in Product
              </div>
            </div>
            <div>
              <p className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-2">Meet your instructor</p>
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
                  is my daily driver — I use it to ship features, analyze data,
                  and automate tasks that used to take hours.
                </p>
                <p>
                  This course is what I wish existed when I started: a practical,
                  no-jargon guide designed for product people, not engineers. Everything
                  I teach comes from real work, not theory.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">8+</p>
                    <p className="text-sm text-muted-foreground mt-1">Years in Product</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">CPO</p>
                    <p className="text-sm text-muted-foreground mt-1">at Nova Talent</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">BBVA</p>
                    <p className="text-sm text-muted-foreground mt-1">Risk & Technology</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl font-bold text-brand-green">Santander</p>
                    <p className="text-sm text-muted-foreground mt-1">Built the global app</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;I&apos;m not a developer by training. I learned to code at Ironhack,
                    then spent years bridging the gap between business and engineering.
                    Claude Code changed everything — now I can do in minutes what used
                    to require a developer and a ticket in the backlog.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Book a free 15-minute call. No commitment, no pressure — just a
            conversation about how Claude Code can help your workflow.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            Book a Free Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Claude Mastery &middot; Master Claude Code without writing code</p>
      </footer>
    </div>
  );
}
