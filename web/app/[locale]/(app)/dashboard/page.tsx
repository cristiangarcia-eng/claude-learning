import Link from "next/link";
import { Logo } from "@/components/logo";
import { getLessonsByLevel, getLessonTitle, getLessonDescription } from "@/lib/lessons";
import type { LessonMeta } from "@/lib/lessons";
import {
  BookOpen,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale, isValidLocale, t } from "@/lib/i18n";
import { notFound } from "next/navigation";

function LessonCard({ lesson, locale }: { lesson: LessonMeta; locale: Locale }) {
  return (
    <Link href={`/${locale}/lessons/${lesson.slug}`}>
      <Card className="h-full hover:border-brand-green/30 transition-colors cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold">{getLessonTitle(lesson, locale)}</h3>
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
            {getLessonDescription(lesson, locale)}
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

const LEVEL_ICONS = {
  starter: Sparkles,
  pro: Rocket,
} as const;

const LEVEL_STYLES = {
  starter: {
    color: "text-brand-green",
    borderColor: "border-brand-green/30",
    bgColor: "bg-brand-green/5",
  },
  pro: {
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
  },
} as const;

const LEVEL_LABEL_KEYS = {
  starter: "startHere",
  pro: "pro",
} as const;

const LEVEL_DESC_KEYS = {
  starter: "starterDesc",
  pro: "proDesc",
} as const;

const LEVEL_TIME_KEYS = {
  starter: "starterTime",
  pro: "proTime",
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const typedLocale = locale as Locale;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(typedLocale, "dashboardHeroDesc")}
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            {t(typedLocale, "dashboardHeroSubDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-brand-green" />
              15 {t(typedLocale, "lessonsLabel")}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-green" />
              {t(typedLocale, "examplesLabel")}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-green" />
              {t(typedLocale, "totalTimeLabel")}
            </span>
          </div>
        </div>
      </header>

      {/* Learning path by level */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {(["starter", "pro"] as const).map((level) => {
          const styles = LEVEL_STYLES[level];
          const lessons = getLessonsByLevel(level);
          const Icon = LEVEL_ICONS[level];

          return (
            <section key={level}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg ${styles.bgColor} ${styles.borderColor} border`}
                >
                  <Icon className={`h-5 w-5 ${styles.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    {t(typedLocale, LEVEL_LABEL_KEYS[level])}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {t(typedLocale, LEVEL_DESC_KEYS[level])} &middot;{" "}
                    {t(typedLocale, LEVEL_TIME_KEYS[level])}
                  </p>
                </div>
                <Link
                  href={`/${locale}/lessons/${lessons[0].slug}`}
                  className="ml-auto flex items-center gap-1 text-sm text-brand-green hover:underline"
                >
                  {t(typedLocale, "start")} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {lessons.map((lesson) => (
                  <LessonCard key={lesson.slug} lesson={lesson} locale={typedLocale} />
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
