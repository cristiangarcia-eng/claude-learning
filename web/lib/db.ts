import { createStorage } from "unstorage";
import upstashRedisDriver from "unstorage/drivers/upstash";

const storage = createStorage({
  driver: upstashRedisDriver({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  }),
});

export interface LessonProgress {
  completed: boolean;
  completedAt?: string;
  lastPosition?: string;
}

export interface UserProgress {
  lessons: Record<string, LessonProgress>;
  updatedAt: string;
}

const EMPTY_PROGRESS: UserProgress = {
  lessons: {},
  updatedAt: new Date().toISOString(),
};

function progressKey(email: string) {
  return `progress:${email.toLowerCase()}`;
}

export async function getUserProgress(email: string): Promise<UserProgress> {
  const raw = await storage.getItem<UserProgress>(progressKey(email));
  if (!raw) return { ...EMPTY_PROGRESS, updatedAt: new Date().toISOString() };
  return raw as UserProgress;
}

export async function saveUserProgress(
  email: string,
  progress: UserProgress
): Promise<void> {
  progress.updatedAt = new Date().toISOString();
  await storage.setItem(progressKey(email), progress);
}
