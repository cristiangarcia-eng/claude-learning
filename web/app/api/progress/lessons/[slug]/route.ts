import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { getUserProgress, saveUserProgress } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await ctx.params;
  const body = await req.json().catch(() => ({}));

  const progress = await getUserProgress(session.user.email);
  const current = progress.lessons[slug];

  if (current?.completed) {
    delete progress.lessons[slug];
  } else {
    progress.lessons[slug] = {
      completed: true,
      completedAt: new Date().toISOString(),
      ...(body.lastPosition ? { lastPosition: body.lastPosition } : {}),
    };
  }

  await saveUserProgress(session.user.email, progress);
  return Response.json(progress);
}
