import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { addToAllowList } from "@/lib/allowlist";
import { setUserPayment, type Tier } from "@/lib/user-tier";
import { sendWelcomeEmail } from "@/lib/welcome-email";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const tier = session.metadata?.tier as Tier | undefined;

    if (email && tier) {
      await addToAllowList(email);
      await setUserPayment(email, {
        tier,
        paidAt: new Date().toISOString(),
        stripeSessionId: session.id,
      });
      // Send welcome email (non-blocking)
      sendWelcomeEmail(email, tier).catch((err) =>
        console.error("Failed to send welcome email:", err)
      );

      console.log(`Payment processed: ${email} → ${tier}`);
    } else {
      console.warn("Webhook missing email or tier metadata:", session.id);
    }
  }

  return NextResponse.json({ received: true });
}
