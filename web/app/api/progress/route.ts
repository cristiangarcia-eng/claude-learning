import { auth } from "@/lib/auth";
import { getUserProgress } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const progress = await getUserProgress(session.user.email);
  return Response.json(progress);
}
