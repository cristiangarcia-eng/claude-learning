import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LESSONS, type LessonMeta } from "./lessons";
import { type Locale, DEFAULT_LOCALE } from "./i18n";

const CONTENT_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "..");

/** Rewrite relative image paths in markdown to /lesson-images/ public paths */
function rewriteImagePaths(markdown: string): string {
  return markdown
    .replace(/\(\.?\/?(resources\/logos\/)/g, "(/logos/")
    .replace(/\(\.?\/?(resources\/icons\/)/g, "(/icons/")
    .replace(/\(\.?\/?images\//g, "(/lesson-images/");
}

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

/**
 * Resolve the content file path for a given locale.
 * For non-default locales, try the `.{locale}.md` variant first,
 * then fall back to the default `.md` file.
 */
function resolveContentPath(
  lessonDir: string,
  filename: string,
  locale: Locale
): string | null {
  if (locale !== DEFAULT_LOCALE) {
    // e.g. "README.es.md" or "some-file.es.md"
    const base = filename.replace(/\.md$/, "");
    const localizedFilename = `${base}.${locale}.md`;
    const localizedPath = path.join(lessonDir, localizedFilename);
    if (fs.existsSync(localizedPath)) return localizedPath;
  }
  const defaultPath = path.join(lessonDir, filename);
  if (fs.existsSync(defaultPath)) return defaultPath;
  return null;
}

export function getLessonContent(
  lesson: LessonMeta,
  fileSlug?: string,
  locale: Locale = DEFAULT_LOCALE
): LessonContent | null {
  const lessonDir = path.join(CONTENT_ROOT, lesson.folder);
  const filename = fileSlug ? `${fileSlug}.md` : "README.md";
  const filePath = resolveContentPath(lessonDir, filename, locale);

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    markdown: rewriteImagePaths(content),
    frontmatter: data,
    title: extractTitle(content, fileSlug || lesson.title),
  };
}

export function getLessonFiles(lesson: LessonMeta, locale: Locale = DEFAULT_LOCALE): LessonFile[] {
  const lessonDir = path.join(CONTENT_ROOT, lesson.folder);
  if (!fs.existsSync(lessonDir)) return [];

  // Get the base (English) .md files, excluding README and locale variants
  const baseFiles = fs
    .readdirSync(lessonDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md" && !f.match(/\.\w{2}\.md$/));

  return baseFiles
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      // Try to load the localized version first
      const resolvedPath = resolveContentPath(lessonDir, f, locale);
      if (!resolvedPath) return null;
      const raw = fs.readFileSync(resolvedPath, "utf-8");
      const { content } = matter(raw);
      return {
        slug,
        title: extractTitle(content, slug),
        filename: f,
      };
    })
    .filter((f): f is LessonFile => f !== null)
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
