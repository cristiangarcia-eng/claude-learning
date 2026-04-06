import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { getUserProgress, saveUserProgress } from "@/lib/db";

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await ctx.params;
  const { score, total } = await req.json();

  if (typeof score !== "number" || typeof total !== "number") {
    return Response.json({ error: "score and total are required" }, { status: 400 });
  }

  const progress = await getUserProgress(session.user.email);
  progress.quizScores[slug] = {
    score,
    total,
    date: new Date().toISOString(),
  };

  await saveUserProgress(session.user.email, progress);
  return Response.json(progress);
}
