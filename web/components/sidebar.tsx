"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { LESSONS, getLessonsByLevel, getLessonTitle } from "@/lib/lessons";
import type { LessonMeta } from "@/lib/lessons";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";
import { useProgress } from "./progress/progress-provider";
import { Progress } from "./ui/progress";
import { LESSONS as ALL_LESSONS } from "@/lib/lessons";
import { t } from "@/lib/i18n";
import {
  BarChart3,
  BookOpen,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const locale = useLocale();

  const LEVELS: { key: LessonMeta["level"]; labelKey: "startHere" | "pro" | "projects"; color: string }[] = [
    { key: "starter", labelKey: "startHere", color: "text-brand-green" },
    { key: "pro", labelKey: "pro", color: "text-blue-500" },
    { key: "projects", labelKey: "projects", color: "text-orange-500" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2"
          onClick={onClose}
        >
          <Logo size="sm" />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-6">
        <Link
          href={`/${locale}`}
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === `/${locale}` || pathname === `/${locale}/`
              ? "bg-brand-green/10 text-brand-green"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <Home className="h-4 w-4" />
          {t(locale, "home")}
        </Link>

        <Link
          href={`/${locale}/progress`}
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === `/${locale}/progress`
              ? "bg-brand-green/10 text-brand-green"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          {t(locale, "progress")}
        </Link>

        {LEVELS.map((level) => {
          const lessons = getLessonsByLevel(level.key);
          return (
            <div key={level.key}>
              <h3
                className={`text-xs font-semibold uppercase tracking-wider px-3 mb-2 ${level.color}`}
              >
                {t(locale, level.labelKey)}
              </h3>
              <ul className="space-y-0.5">
                {lessons.map((lesson) => {
                  const isActive = pathname.startsWith(
                    `/${locale}/lessons/${lesson.slug}`
                  );
                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/${locale}/lessons/${lesson.slug}`}
                        onClick={onClose}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-brand-green/10 text-brand-green font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <BookOpen className="h-3.5 w-3.5 flex-shrink-0" />
                        {getLessonTitle(lesson, locale)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Progress footer */}
      <SidebarProgress />
    </div>
  );
}

function SidebarProgress() {
  const { progress } = useProgress();
  const locale = useLocale();
  const completed = progress.completedLessons.length;
  const total = ALL_LESSONS.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="p-4 border-t border-border">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span>{completed}/{total} {t(locale, "completedCount")}</span>
        <span className="text-brand-green font-medium">{percent}%</span>
      </div>
      <Progress value={percent} className="h-2" />
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-card border border-border"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border transform transition-transform md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
        <SidebarContent onClose={() => setOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-border bg-background">
        <SidebarContent />
      </aside>
    </>
  );
}
