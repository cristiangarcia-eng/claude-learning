import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { tier, locale } = await request.json();
    const stripe = getStripe();

    const priceId =
      tier === "mentoring"
        ? process.env.STRIPE_PRICE_ID_MENTORING
        : tier === "course"
          ? process.env.STRIPE_PRICE_ID_COURSE
          : null;

    if (!priceId) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { tier },
      success_url: `${origin}/${locale || "en"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${locale || "en"}#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
