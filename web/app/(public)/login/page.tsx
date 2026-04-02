"use client";

import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with Auth.js signIn("email", { email })
    setSent(true);
  }

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

        {sent ? (
          <div className="text-center p-6 rounded-lg border border-brand-green/30 bg-brand-green/5">
            <Mail className="h-8 w-8 text-brand-green mx-auto mb-3" />
            <h2 className="font-semibold mb-1">Check your email</h2>
            <p className="text-sm text-muted-foreground">
              We sent a login link to <strong>{email}</strong>
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/50"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-brand-green text-black font-semibold hover:bg-brand-green/90 transition-colors"
            >
              Send Magic Link
            </button>
          </form>
        )}

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
