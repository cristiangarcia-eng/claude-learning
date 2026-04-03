"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LessonMeta } from "@/lib/lessons";
import { getLessonTitle } from "@/lib/lessons";
import { useLocale } from "./locale-provider";
import { t } from "@/lib/i18n";

export function LessonNav({
  prev,
  next,
}: {
  prev: LessonMeta | null;
  next: LessonMeta | null;
}) {
  const locale = useLocale();

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link
          href={`/${locale}/lessons/${prev.slug}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <div>
            <div className="text-xs text-muted-foreground">{t(locale, "previous")}</div>
            <div className="font-medium">{getLessonTitle(prev, locale)}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/${locale}/lessons/${next.slug}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
        >
          <div>
            <div className="text-xs text-muted-foreground">{t(locale, "next")}</div>
            <div className="font-medium">{getLessonTitle(next, locale)}</div>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
