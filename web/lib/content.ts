import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LESSONS, type LessonMeta } from "./lessons";

const CONTENT_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "..");

export interface LessonFile {
  slug: string;
  title: string;
  filename: string;
}

export interface LessonContent {
  markdown: string;
  frontmatter: Record<string, unknown>;
  title: string;
}

function extractTitle(markdown: string, fallback: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].replace(/[*_`]/g, "") : fallback;
}

export function getLessonContent(
  lesson: LessonMeta,
  fileSlug?: string
): LessonContent | null {
  const lessonDir = path.join(CONTENT_ROOT, lesson.folder);
  const filename = fileSlug ? `${fileSlug}.md` : "README.md";
  const filePath = path.join(lessonDir, filename);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    markdown: content,
    frontmatter: data,
    title: extractTitle(content, fileSlug || lesson.title),
  };
}

export function getLessonFiles(lesson: LessonMeta): LessonFile[] {
  const lessonDir = path.join(CONTENT_ROOT, lesson.folder);
  if (!fs.existsSync(lessonDir)) return [];

  return fs
    .readdirSync(lessonDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(lessonDir, f), "utf-8");
      const { content } = matter(raw);
      return {
        slug,
        title: extractTitle(content, slug),
        filename: f,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllLessonSlugs(): { lessonSlug: string }[] {
  return LESSONS.map((l) => ({ lessonSlug: l.slug }));
}

export function getAllFileSlugs(): {
  lessonSlug: string;
  fileSlug: string;
}[] {
  const result: { lessonSlug: string; fileSlug: string }[] = [];
  for (const lesson of LESSONS) {
    const files = getLessonFiles(lesson);
    for (const file of files) {
      result.push({ lessonSlug: lesson.slug, fileSlug: file.slug });
    }
  }
  return result;
}
