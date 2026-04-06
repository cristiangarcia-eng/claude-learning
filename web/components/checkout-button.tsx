"use client";

import { useState } from "react";
import type { Tier } from "@/lib/user-tier";

export function CheckoutButton({
  tier,
  locale,
  children,
  className,
  loadingText = "Processing...",
}: {
  tier: Tier;
  locale: string;
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? loadingText : children}
    </button>
  );
}
