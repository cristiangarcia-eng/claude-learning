import { redis } from "./redis";

const REDIS_KEY = "allowed-emails";
const SEED_FLAG = "allowlist-seeded";

/**
 * Emails granted manual access (no Stripe payment required).
 * Add lowercase emails here to grant course access.
 */
const MANUAL_GRANTS: readonly string[] = [
  "elena.navarro@novatalent.com",
];

/**
 * One-time migration: copy ALLOWED_EMAILS env var into Redis Set.
 * Idempotent — skips if already seeded.
 */
export async function seedAllowList(): Promise<void> {
  const alreadySeeded = await redis.get(SEED_FLAG);
  if (alreadySeeded) return;

  const envEmails = (process.env.ALLOWED_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  for (const email of envEmails) {
    await redis.sadd(REDIS_KEY, email);
  }

  await redis.set(SEED_FLAG, "1");
}

/**
 * Add an email to the allow-list (called by Stripe webhook after payment).
 */
export async function addToAllowList(email: string): Promise<void> {
  await redis.sadd(REDIS_KEY, email.toLowerCase());
}

/**
 * Check if an email is allowed to sign in.
 * Checks Redis Set first, falls back to ALLOWED_EMAILS env var.
 */
export async function isAllowed(email: string): Promise<boolean> {
  const normalized = email.toLowerCase();

  // Check Redis Set
  const inRedis = await redis.sismember(REDIS_KEY, normalized);
  if (inRedis) return true;

  // Fallback to env var (for manually added emails before migration)
  const envEmails = (process.env.ALLOWED_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase());

  if (envEmails.includes(normalized)) {
    // Opportunistically sync to Redis
    await redis.sadd(REDIS_KEY, normalized);
    return true;
  }

  // Fallback to manually granted emails (hardcoded in source)
  if (MANUAL_GRANTS.includes(normalized)) {
    // Opportunistically sync to Redis
    await redis.sadd(REDIS_KEY, normalized);
    return true;
  }

  return false;
}
