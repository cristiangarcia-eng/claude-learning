"use client";

import { useProgress } from "./progress-provider";
import { useLocale } from "../locale-provider";
import { t } from "@/lib/i18n";
import { CheckCircle, Circle } from "lucide-react";

export function CompleteButton({ lessonSlug }: { lessonSlug: string }) {
  const { progress, toggleLessonComplete } = useProgress();
  const locale = useLocale();
  const isCompleted = progress.completedLessons.includes(lessonSlug);

  return (
    <button
      onClick={() => toggleLessonComplete(lessonSlug)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isCompleted
          ? "bg-brand-green/10 text-brand-green border border-brand-green/30"
          : "bg-muted hover:bg-muted/80 text-muted-foreground border border-border"
      }`}
    >
      {isCompleted ? (
        <CheckCircle className="h-4 w-4" />
      ) : (
        <Circle className="h-4 w-4" />
      )}
      {isCompleted ? t(locale, "completed") : t(locale, "markComplete")}
    </button>
  );
}
