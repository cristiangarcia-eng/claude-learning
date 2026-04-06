"use client";

import Link from "next/link";
import { useProgress } from "./progress/progress-provider";
import { useLocale } from "./locale-provider";
import { Progress } from "./ui/progress";
import { LESSONS, getLessonTitle } from "@/lib/lessons";
import { t } from "@/lib/i18n";
import { ArrowRight, CheckCircle } from "lucide-react";
import { WelcomeModal } from "./welcome-modal";

export function DashboardHero() {
  const { progress } = useProgress();
  const locale = useLocale();

  const completedSet = new Set(progress.completedLessons);
  const completedCount = completedSet.size;
  const totalCount = LESSONS.length;
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Find the next lesson: first uncompleted lesson in order
  const nextLesson = LESSONS.find((l) => !completedSet.has(l.slug));

  const allDone = !nextLesson;

  return (
    <header className="border-b border-border">
      <WelcomeModal />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-6">
            {t(locale, "welcomeBack")}
          </h1>

          {/* Progress bar */}
          <div className="mb-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>
                {completedCount}/{totalCount} {t(locale, "lessonsCompleted")}
              </span>
              <span className="text-brand-green font-semibold">{percent}%</span>
            </div>
            <Progress value={percent} className="h-3" />
          </div>

          {/* Next lesson button */}
          <div className="mt-8">
            {allDone ? (
              <div className="flex items-center justify-center gap-2 text-brand-green font-semibold">
                <CheckCircle className="h-5 w-5" />
                {t(locale, "allLessonsCompleted")}
              </div>
            ) : (
              <Link
                href={`/${locale}/lessons/${nextLesson.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-white font-medium hover:bg-brand-green/90 transition-colors"
              >
                {completedCount === 0
                  ? t(locale, "startFirstLesson")
                  : t(locale, "continueNextLesson")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {nextLesson && (
              <p className="mt-3 text-sm text-muted-foreground">
                {getLessonTitle(nextLesson, locale)}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
