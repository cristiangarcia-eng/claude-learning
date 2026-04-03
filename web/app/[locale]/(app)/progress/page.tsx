"use client";

import { useProgress } from "@/components/progress/progress-provider";
import { LESSONS, getLessonsByLevel, getLessonTitle } from "@/lib/lessons";
import { getBadges, getOverallProgress } from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  CheckCircle,
  Circle,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { t } from "@/lib/i18n";

const LEVEL_ICONS = {
  starter: Sparkles,
  beginner: Zap,
  intermediate: Brain,
  advanced: Rocket,
} as const;

const LEVEL_COLORS = {
  starter: "text-brand-green",
  beginner: "text-green-500",
  intermediate: "text-blue-500",
  advanced: "text-red-500",
} as const;

export default function ProgressPage() {
  const { progress } = useProgress();
  const locale = useLocale();
  const completed = new Set(progress.completedLessons);
  const overallPercent = getOverallProgress();
  const badges = getBadges();
  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">{t(locale, "yourProgress")}</h1>

      {/* Overall progress */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">{t(locale, "overallProgress")}</span>
            <span className="text-sm text-muted-foreground">
              {completed.size}/{LESSONS.length} {t(locale, "lessons")}
            </span>
          </div>
          <Progress value={overallPercent} className="h-3" />
          <p className="text-2xl font-bold mt-3 text-brand-green">
            {overallPercent}%
          </p>
        </CardContent>
      </Card>

      {/* Badges */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-brand-green" />
        {t(locale, "badges")} ({earnedBadges.length}/{badges.length})
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        {badges.map((badge) => (
          <Card
            key={badge.id}
            className={badge.earned ? "border-brand-green/30" : "opacity-40"}
          >
            <CardContent className="p-4 text-center">
              <Award
                className={`h-8 w-8 mx-auto mb-2 ${
                  badge.earned
                    ? "text-brand-green fill-brand-green/20"
                    : "text-muted-foreground"
                }`}
              />
              <h3 className="font-semibold text-sm">{badge.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {badge.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lessons by level */}
      {(["starter", "beginner", "intermediate", "advanced"] as const).map((level) => {
        const lessons = getLessonsByLevel(level);
        const Icon = LEVEL_ICONS[level];
        const levelCompleted = lessons.filter((l) =>
          completed.has(l.slug)
        ).length;

        return (
          <div key={level} className="mb-8">
            <h2
              className={`text-lg font-semibold mb-3 flex items-center gap-2 capitalize ${LEVEL_COLORS[level]}`}
            >
              <Icon className="h-5 w-5" />
              {level} ({levelCompleted}/{lessons.length})
            </h2>
            <div className="space-y-2">
              {lessons.map((lesson) => {
                const done = completed.has(lesson.slug);
                const quiz = progress.quizScores[lesson.slug];
                return (
                  <Link
                    key={lesson.slug}
                    href={`/${locale}/lessons/${lesson.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-brand-green/30 transition-colors"
                  >
                    {done ? (
                      <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <span className="font-medium">{getLessonTitle(lesson, locale)}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {lesson.duration}
                      </span>
                    </div>
                    {quiz && (
                      <span className="text-xs text-muted-foreground">
                        Quiz: {quiz.score}/{quiz.total}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
