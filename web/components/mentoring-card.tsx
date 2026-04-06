import { Calendar } from "lucide-react";
import { getUserPayment } from "@/lib/user-tier";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

export async function MentoringCard({ email }: { email: string }) {
  const payment = await getUserPayment(email);
  if (payment?.tier !== "mentoring") return null;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-6">
      <div className="p-5 rounded-xl border border-brand-green/20 bg-brand-green/5 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-brand-green" />
          </div>
          <div>
            <p className="font-semibold text-sm">Schedule your mentoring session</p>
            <p className="text-xs text-muted-foreground">Book your 2-hour session with Cristian</p>
          </div>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green text-black text-sm font-semibold hover:bg-brand-green/90 transition-colors"
        >
          <Calendar className="h-3.5 w-3.5" />
          Schedule Now
        </a>
      </div>
    </div>
  );
}
