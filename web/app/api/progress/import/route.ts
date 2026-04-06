import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { getUserProgress, saveUserProgress } from "@/lib/db";
import type { QuizScore } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { completedLessons, quizScores } = (await req.json()) as {
    completedLessons?: string[];
    quizScores?: Record<string, QuizScore>;
  };

  const progress = await getUserProgress(session.user.email);

  // Merge completed lessons from localStorage format
  if (completedLessons?.length) {
    for (const slug of completedLessons) {
      if (!progress.lessons[slug]) {
        progress.lessons[slug] = {
          completed: true,
          completedAt: new Date().toISOString(),
        };
      }
    }
  }

  // Merge quiz scores (keep existing server scores if they exist)
  if (quizScores) {
    for (const [slug, score] of Object.entries(quizScores)) {
      if (!progress.quizScores[slug]) {
        progress.quizScores[slug] = score;
      }
    }
  }

  await saveUserProgress(session.user.email, progress);
  return Response.json(progress);
}
