import { LESSONS } from "./lessons";

export interface QuizScore {
  score: number;
  total: number;
  date: string;
}

export interface Progress {
  completedLessons: string[];
  quizScores: Record<string, QuizScore>;
}

const STORAGE_KEY = "claude-mastery-progress";

export function getProgress(): Progress {
  if (typeof window === "undefined") {
    return { completedLessons: [], quizScores: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessons: [], quizScores: {} };
    return JSON.parse(raw);
  } catch {
    return { completedLessons: [], quizScores: {} };
  }
}

function saveProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function toggleLessonComplete(slug: string): boolean {
  const progress = getProgress();
  const idx = progress.completedLessons.indexOf(slug);
  if (idx >= 0) {
    progress.completedLessons.splice(idx, 1);
  } else {
    progress.completedLessons.push(slug);
  }
  saveProgress(progress);
  return idx < 0; // returns true if now completed
}

export function saveQuizScore(slug: string, score: number, total: number) {
  const progress = getProgress();
  progress.quizScores[slug] = {
    score,
    total,
    date: new Date().toISOString(),
  };
  saveProgress(progress);
}

export function getOverallProgress(): number {
  const progress = getProgress();
  return Math.round(
    (progress.completedLessons.length / LESSONS.length) * 100
  );
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  earned: boolean;
}

export function getBadges(): Badge[] {
  const progress = getProgress();
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
