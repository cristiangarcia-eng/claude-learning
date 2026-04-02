"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { LESSONS, getLessonsByLevel } from "@/lib/lessons";
import type { LessonMeta } from "@/lib/lessons";
import { ThemeToggle } from "./theme-toggle";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const LEVELS: { key: LessonMeta["level"]; label: string; color: string }[] = [
  { key: "starter", label: "Start Here", color: "text-brand-green" },
  { key: "beginner", label: "Beginner", color: "text-green-500" },
  { key: "intermediate", label: "Intermediate", color: "text-blue-500" },
  { key: "advanced", label: "Advanced", color: "text-red-500" },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={onClose}
        >
          <Logo size="sm" />
        </Link>
        <ThemeToggle />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-6">
        <Link
          href="/"
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === "/"
              ? "bg-brand-green/10 text-brand-green"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/progress"
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === "/progress"
              ? "bg-brand-green/10 text-brand-green"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          Progress
        </Link>

        {LEVELS.map((level) => {
          const lessons = getLessonsByLevel(level.key);
          return (
            <div key={level.key}>
              <h3
                className={`text-xs font-semibold uppercase tracking-wider px-3 mb-2 ${level.color}`}
              >
                {level.label}
              </h3>
              <ul className="space-y-0.5">
                {lessons.map((lesson) => {
                  const isActive = pathname.startsWith(
                    `/lessons/${lesson.slug}`
                  );
                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/lessons/${lesson.slug}`}
                        onClick={onClose}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-brand-green/10 text-brand-green font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <BookOpen className="h-3.5 w-3.5 flex-shrink-0" />
                        {lesson.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        {LESSONS.length} lessons &middot; 100+ examples
      </div>
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
