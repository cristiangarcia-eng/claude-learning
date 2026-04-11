import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { getUserProgress, saveUserProgress } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { completedLessons } = (await req.json()) as {
    completedLessons?: string[];
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

  await saveUserProgress(session.user.email, progress);
  return Response.json(progress);
}
