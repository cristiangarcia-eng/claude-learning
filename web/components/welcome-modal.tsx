"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useProgress } from "./progress/progress-provider";
import { useLocale } from "./locale-provider";
import { t } from "@/lib/i18n";
import { LESSONS } from "@/lib/lessons";
import { Rocket, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const STORAGE_KEY = "claude10x-welcome-seen";

export function WelcomeModal() {
  const { progress, loaded } = useProgress();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Wait until server progress has loaded to avoid flash
    if (!loaded) return;

    // Only show for brand-new users with no progress
    if (progress.completedLessons.length > 0) return;

    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    setOpen(true);
  }, [loaded, progress.completedLessons.length]);

  function handleDismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  const firstLesson = LESSONS[0];

  return (
    <Dialog open={open} onOpenChange={handleDismiss}>
      <DialogContent showCloseButton={false} className="text-center p-8 max-w-lg">
        {/* Animated icon */}
        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
          <Rocket className="h-8 w-8 text-brand-green animate-pulse" />
        </div>

        <DialogTitle className="text-2xl">
          {t(locale, "welcomeTitle")}
        </DialogTitle>

        <DialogDescription className="text-base leading-relaxed">
          {t(locale, "welcomeBody")}
        </DialogDescription>

        <p className="text-sm text-muted-foreground">
          {t(locale, "welcomeSubtext")}
        </p>

        {/* CTA */}
        <Link
          href={`/${locale}/lessons/${firstLesson.slug}`}
          onClick={handleDismiss}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-medium text-white transition-colors hover:bg-brand-green/90"
        >
          {t(locale, "welcomeCta")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </DialogContent>
    </Dialog>
  );
}
