import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/lessons";
import { getLessonContent, getAllFileSlugs } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return getAllFileSlugs();
}

export default async function LessonFilePage({
  params,
}: {
  params: Promise<{ lessonSlug: string; fileSlug: string }>;
}) {
  const { lessonSlug, fileSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) notFound();

  const content = getLessonContent(lesson, fileSlug);
  if (!content) notFound();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href={`/lessons/${lessonSlug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {lesson.title}
        </Link>

        <MarkdownRenderer content={content.markdown} />
      </div>
    </div>
  );
}
