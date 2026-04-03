import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonTitle } from "@/lib/lessons";
import { getLessonContent, getAllFileSlugs } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SUPPORTED_LOCALES, type Locale, isValidLocale, t } from "@/lib/i18n";

export function generateStaticParams() {
  const baseSlugs = getAllFileSlugs();
  const params: { locale: string; lessonSlug: string; fileSlug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const slug of baseSlugs) {
      params.push({ locale, ...slug });
    }
  }
  return params;
}

export default async function LessonFilePage({
  params,
}: {
  params: Promise<{ locale: string; lessonSlug: string; fileSlug: string }>;
}) {
  const { locale, lessonSlug, fileSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) notFound();

  const content = getLessonContent(lesson, fileSlug, typedLocale);
  if (!content) notFound();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href={`/${locale}/lessons/${lessonSlug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(typedLocale, "backTo")} {getLessonTitle(lesson, typedLocale)}
        </Link>

        <MarkdownRenderer content={content.markdown} />
      </div>
    </div>
  );
}
