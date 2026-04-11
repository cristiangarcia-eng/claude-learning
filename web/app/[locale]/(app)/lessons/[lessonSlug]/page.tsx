import { notFound } from "next/navigation";
import { LESSONS, getLessonBySlug } from "@/lib/lessons";
import { getLessonContent, getLessonFiles } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { LessonNav } from "@/components/lesson-nav";
import { getAdjacentLessons } from "@/lib/lessons";
import { Badge } from "@/components/ui/badge";
import { Clock, Star } from "lucide-react";
import Link from "next/link";
import { CompleteButton } from "@/components/progress/complete-button";
import { SUPPORTED_LOCALES, type Locale, isValidLocale, t } from "@/lib/i18n";

export function generateStaticParams() {
  const params: { locale: string; lessonSlug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const lesson of LESSONS) {
      params.push({ locale, lessonSlug: lesson.slug });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; lessonSlug: string }>;
}) {
  return {};
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; lessonSlug: string }>;
}) {
  const { locale, lessonSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) notFound();

  const typedLocale = locale as Locale;
  const content = getLessonContent(lesson, undefined, typedLocale);
  if (!content) notFound();

  const files = getLessonFiles(lesson, typedLocale);
  const { prev, next } = getAdjacentLessons(lessonSlug);

  const levelColors: Record<string, string> = {
    starter: "bg-brand-green/10 text-brand-green border-brand-green/20",
    pro: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    projects: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    extra: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Lesson header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="outline" className={levelColors[lesson.level]}>
              {lesson.level}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              {Array.from({ length: lesson.complexity }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-green text-brand-green"
                />
              ))}
            </span>
          </div>
        </div>

        {/* Sub-files list */}
        {files.length > 0 && (
          <div className="mb-8 rounded-lg border border-border bg-card p-4">
            <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
              {t(typedLocale, "filesInThisLesson")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {files.map((f) => (
                <Link
                  key={f.slug}
                  href={`/${locale}/lessons/${lessonSlug}/${f.slug}`}
                  className="text-sm px-3 py-1 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                >
                  {f.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Markdown content */}
        <MarkdownRenderer content={content.markdown} />

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <CompleteButton lessonSlug={lessonSlug} />
        </div>

        {/* Navigation */}
        <LessonNav prev={prev} next={next} />
      </div>
    </div>
  );
}
