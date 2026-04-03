"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "./locale-provider";
import { SUPPORTED_LOCALES, type Locale, removeLocalePrefix } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

const LOCALE_FULL_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Espanol",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleSwitch(newLocale: Locale) {
    if (newLocale === locale) return;
    const pathWithoutLocale = removeLocalePrefix(pathname);
    router.push(`/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`);
  }

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      {SUPPORTED_LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => handleSwitch(loc)}
          title={LOCALE_FULL_LABELS[loc]}
          className={`px-1.5 py-0.5 rounded text-xs font-medium transition-colors ${
            loc === locale
              ? "bg-brand-green/10 text-brand-green"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
