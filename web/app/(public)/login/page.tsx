"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { Logo } from "@/components/logo";
import Link from "next/link";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "true";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("nodemailer", {
        email,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        setError("This email is not authorized. Contact the instructor for access.");
      } else {
        window.location.href = "/login?sent=true";
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {sent ? (
        <div className="text-center p-6 rounded-lg border border-brand-green/30 bg-brand-green/5">
          <Mail className="h-8 w-8 text-brand-green mx-auto mb-3" />
          <h2 className="font-semibold mb-1">Check your email</h2>
          <p className="text-sm text-muted-foreground">
            We sent a login link. Click it to access the course.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/50 disabled:opacity-50"
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Magic Link"
            )}
          </button>
        </form>
      )}
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Enter your email to access the course
          </p>
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
