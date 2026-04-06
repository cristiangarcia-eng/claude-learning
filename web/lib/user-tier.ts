import { redis } from "./redis";

export type Tier = "course" | "mentoring";

export interface UserPayment {
  tier: Tier;
  paidAt: string;
  stripeSessionId: string;
}

function userKey(email: string) {
  return `user:${email.toLowerCase()}`;
}

export async function setUserPayment(
  email: string,
  payment: UserPayment
): Promise<void> {
  await redis.set(userKey(email), JSON.stringify(payment));
}

export async function getUserPayment(
  email: string
): Promise<UserPayment | null> {
  const raw = await redis.get<string>(userKey(email));
  if (!raw) return null;
  return typeof raw === "string" ? JSON.parse(raw) : (raw as UserPayment);
}
