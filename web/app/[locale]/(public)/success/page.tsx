import Link from "next/link";
import { Logo } from "@/components/logo";
import { CheckCircle, Calendar } from "lucide-react";
import { type Locale, isValidLocale, t } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getStripe } from "@/lib/stripe";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

export default async function SuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;

  const { session_id } = await searchParams;

  let tier: string | null = null;
  let email: string | null = null;

  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.payment_status === "paid") {
        tier = session.metadata?.tier || null;
        email = session.customer_details?.email || null;
      }
    } catch {
      // Invalid session — show generic success
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <Logo size="default" />

        <div className="mt-10 mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-brand-green" />
          </div>
        </div>

        <h1 className="font-heading text-2xl font-bold mb-3">
          {t(l, "paymentSuccess")}
        </h1>

        <p className="text-muted-foreground mb-8">
          {t(l, "checkEmailToLogin")}
          {email && (
            <span className="block mt-2 text-sm font-mono text-foreground/60">
              {email}
            </span>
          )}
        </p>

        <Link
          href={`/${locale}/login`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-all"
        >
          {t(l, "goToLogin")}
        </Link>

        {tier === "mentoring" && (
          <div className="mt-10 p-6 rounded-xl border border-brand-green/20 bg-brand-green/5">
            <Calendar className="h-6 w-6 text-brand-green mx-auto mb-3" />
            <h2 className="font-heading font-semibold mb-2">
              {t(l, "scheduleMentoring")}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {t(l, "scheduleMentoringDesc")}
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-green/30 text-brand-green font-medium hover:bg-brand-green/10 transition-colors text-sm"
            >
              <Calendar className="h-4 w-4" />
              {t(l, "scheduleNow")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
