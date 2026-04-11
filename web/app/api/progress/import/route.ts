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

  if (!Array.isArray(completedLessons) || completedLessons.length > 200) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const slugPattern = /^[a-z0-9-]+$/;
  const validLessons = completedLessons.filter(
    (s) => typeof s === "string" && slugPattern.test(s)
  );

  const progress = await getUserProgress(session.user.email);

  // Merge completed lessons from localStorage format
  if (validLessons.length) {
    for (const slug of validLessons) {
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
