import { LESSONS } from "./lessons";

export interface QuizScore {
  score: number;
  total: number;
  date: string;
}

/** Client-side view used by UI components (derived from UserProgress) */
export interface Progress {
  completedLessons: string[];
  quizScores: Record<string, QuizScore>;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  earned: boolean;
}

const OLD_STORAGE_KEY = "claude-mastery-progress";

/** Read old localStorage data for migration, then delete it */
export function consumeLocalStorageProgress(): Progress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(OLD_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Progress;
    localStorage.removeItem(OLD_STORAGE_KEY);
    return data;
  } catch {
    return null;
  }
}

export function getOverallProgress(progress: Progress): number {
  return Math.round(
    (progress.completedLessons.length / LESSONS.length) * 100
  );
}

export function getBadges(progress: Progress): Badge[] {
  const completed = new Set(progress.completedLessons);
  const quizzes = progress.quizScores;

  const starterSlugs = LESSONS.filter((l) => l.level === "starter").map((l) => l.slug);
  const proSlugs = LESSONS.filter((l) => l.level === "pro").map((l) => l.slug);

  return [
    {
      id: "first-lesson",
      title: "First Step",
      description: "Complete your first lesson",
      earned: completed.size >= 1,
    },
    {
      id: "starter-complete",
      title: "Ready to Go",
      description: "Complete all starter lessons",
      earned: starterSlugs.every((s) => completed.has(s)),
    },
    {
      id: "pro-complete",
      title: "Pro Graduate",
      description: "Complete all pro lessons",
      earned: proSlugs.every((s) => completed.has(s)),
    },
    {
      id: "quiz-perfect",
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      earned: Object.values(quizzes).some((q) => q.score === q.total),
    },
    {
      id: "full-graduate",
      title: "Claude Code Master",
      description: "Complete all lessons",
      earned: completed.size === LESSONS.length,
    },
  ];
}
