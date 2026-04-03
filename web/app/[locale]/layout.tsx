import { notFound } from "next/navigation";
import { isValidLocale, SUPPORTED_LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/components/locale-provider";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>{children}</LocaleProvider>
  );
}
