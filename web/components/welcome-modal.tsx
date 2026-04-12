"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useProgress } from "./progress/progress-provider";
import { useLocale } from "./locale-provider";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { LESSONS } from "@/lib/lessons";
import { Rocket, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const STORAGE_KEY = "claude10x-welcome-seen";
const LOCALE_PICKED_KEY = "claude10x-locale-picked";
const LOCALE_COOKIE = "claude10x-locale";

function saveLocalePreference(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_PICKED_KEY, "1");
  } catch {
    // ignore
  }
  // 1-year cookie so middleware can honor it on future visits
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function WelcomeModal() {
  const { progress, loaded } = useProgress();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"language" | "welcome">("language");

  useEffect(() => {
    if (!loaded) return;
    if (progress.completedLessons.length > 0) return;

    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
      // If they already picked a language in a prior step, skip straight to welcome
      if (localStorage.getItem(LOCALE_PICKED_KEY)) {
        setStep("welcome");
      } else {
        setStep("language");
      }
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

  function handlePickLanguage(picked: Locale) {
    saveLocalePreference(picked);

    if (picked !== locale) {
      // Swap the locale segment in the current pathname and navigate
      const segments = pathname.split("/");
      // segments[0] is "" (leading slash), segments[1] is the current locale
      segments[1] = picked;
      const nextPath = segments.join("/") || `/${picked}`;
      router.push(nextPath);
      // After navigation, the modal will remount with LOCALE_PICKED_KEY set
      // and skip straight to the welcome step.
      return;
    }

    setStep("welcome");
  }

  const firstLesson = LESSONS[0];

  return (
    <Dialog open={open} onOpenChange={handleDismiss}>
      <DialogContent showCloseButton={false} className="text-center p-8 max-w-lg">
        {step === "language" ? (
          <>
            <DialogTitle className="text-2xl">
              {t(locale, "welcomeLanguageTitle")}
            </DialogTitle>

            <DialogDescription className="text-base leading-relaxed">
              {t(locale, "welcomeLanguageBody")}
            </DialogDescription>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => handlePickLanguage("en")}
                className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:border-brand-green hover:bg-brand-green/5"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => handlePickLanguage("es")}
                className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:border-brand-green hover:bg-brand-green/5"
              >
                Español
              </button>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {t(locale, "welcomeLanguageHint")}
            </p>
          </>
        ) : (
          <>
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

            <Link
              href={`/${locale}/lessons/${firstLesson.slug}`}
              onClick={handleDismiss}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-medium text-white transition-colors hover:bg-brand-green/90"
            >
              {t(locale, "welcomeCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
