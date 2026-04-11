"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  consumeLocalStorageProgress,
  type Progress,
} from "@/lib/progress";
import type { UserProgress } from "@/lib/db";

interface ProgressContextValue {
  progress: Progress;
  loaded: boolean;
  toggleLessonComplete: (slug: string) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const EMPTY: Progress = { completedLessons: [] };

/** Convert server UserProgress to the client-facing Progress view */
function toProgress(up: UserProgress): Progress {
  const completedLessons = Object.entries(up.lessons)
    .filter(([, v]) => v.completed)
    .map(([slug]) => slug);
  return { completedLessons };
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [loaded, setLoaded] = useState(false);

  // Fetch progress from server on mount, migrate localStorage if needed
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/progress");
        if (!res.ok) {
          setLoaded(true);
          return;
        }
        let serverProgress = (await res.json()) as UserProgress;

        // Check for old localStorage data to migrate
        const local = consumeLocalStorageProgress();
        if (
          local &&
          local.completedLessons.length > 0
        ) {
          const importRes = await fetch("/api/progress/import", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(local),
          });
          if (importRes.ok) {
            serverProgress = (await importRes.json()) as UserProgress;
          }
        }

        if (!cancelled) {
          setProgress(toProgress(serverProgress));
          setLoaded(true);
        }
      } catch {
        setLoaded(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleLessonComplete = useCallback(
    async (slug: string) => {
      // Optimistic update
      setProgress((prev) => {
        const has = prev.completedLessons.includes(slug);
        return {
          ...prev,
          completedLessons: has
            ? prev.completedLessons.filter((s) => s !== slug)
            : [...prev.completedLessons, slug],
        };
      });

      const res = await fetch(`/api/progress/lessons/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const updated = (await res.json()) as UserProgress;
        setProgress(toProgress(updated));
      }
    },
    []
  );

  const value = useMemo(
    () => ({ progress, loaded, toggleLessonComplete }),
    [progress, loaded, toggleLessonComplete]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
