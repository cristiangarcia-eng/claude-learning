import Link from "next/link";
import { Logo } from "@/components/logo";
import { getLessonsByLevel } from "@/lib/lessons";
import type { LessonMeta } from "@/lib/lessons";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LEVEL_CONFIG = {
  starter: {
    label: "Start Here",
    icon: Sparkles,
    color: "text-brand-green",
    borderColor: "border-brand-green/30",
    bgColor: "bg-brand-green/5",
    description: "No experience needed — perfect for PMs, designers, and non-devs",
    time: "~1.5 hours",
  },
  beginner: {
    label: "Beginner",
    icon: Zap,
    color: "text-green-500",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    description: "Core Claude Code features and customization",
    time: "~2.5 hours",
  },
  intermediate: {
    label: "Intermediate",
    icon: Brain,
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "Building workflows and automation",
    time: "~5 hours",
  },
  advanced: {
    label: "Advanced",
    icon: Rocket,
    color: "text-red-500",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
    description: "Power user tools and team features",
    time: "~5 hours",
  },
} as const;

function LessonCard({ lesson }: { lesson: LessonMeta }) {
  return (
    <Link href={`/lessons/${lesson.slug}`}>
      <Card className="h-full hover:border-brand-green/30 transition-colors cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold">{lesson.title}</h3>
            <span className="flex items-center gap-0.5 flex-shrink-0 ml-2">
              {Array.from({ length: lesson.complexity }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-brand-green text-brand-green"
                />
              ))}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {lesson.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {lesson.duration}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Master Claude Code in a weekend. From first commands to orchestrating
            agents, hooks, skills, and MCP servers.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            Designed for product managers, designers, sales teams, and anyone
            who wants to work smarter with AI — no coding required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-brand-green" />
              15 lessons
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-green" />
              100+ examples
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-green" />
              11-13 hours total
            </span>
          </div>
        </div>
      </header>

      {/* Learning path by level */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {(["starter", "beginner", "intermediate", "advanced"] as const).map((level) => {
          const config = LEVEL_CONFIG[level];
          const lessons = getLessonsByLevel(level);
          const Icon = config.icon;

          return (
            <section key={level}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg ${config.bgColor} ${config.borderColor} border`}
                >
                  <Icon className={`h-5 w-5 ${config.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{config.label}</h2>
                  <p className="text-sm text-muted-foreground">
                    {config.description} &middot; {config.time}
                  </p>
                </div>
                <Link
                  href={`/lessons/${lessons[0].slug}`}
                  className="ml-auto flex items-center gap-1 text-sm text-brand-green hover:underline"
                >
                  Start <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {lessons.map((lesson) => (
                  <LessonCard key={lesson.slug} lesson={lesson} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>
          Claude10x &middot; Interactive Learning Platform
        </p>
      </footer>
    </div>
  );
}
