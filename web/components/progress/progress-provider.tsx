"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  getProgress,
  toggleLessonComplete as toggleComplete,
  saveQuizScore as saveScore,
  type Progress,
} from "@/lib/progress";

interface ProgressContextValue {
  progress: Progress;
  toggleLessonComplete: (slug: string) => void;
  saveQuizScore: (slug: string, score: number, total: number) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

// Simple external store for localStorage-backed progress
let listeners: Array<() => void> = [];
let cachedSnapshot: Progress | null = null;

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
function getSnapshot(): Progress {
  if (!cachedSnapshot) {
    cachedSnapshot = getProgress();
  }
  return cachedSnapshot;
}
const SERVER_SNAPSHOT: Progress = { completedLessons: [], quizScores: {} };
function getServerSnapshot(): Progress {
  return SERVER_SNAPSHOT;
}
function notify() {
  cachedSnapshot = getProgress();
  listeners.forEach((l) => l());
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLessonComplete = useCallback((slug: string) => {
    toggleComplete(slug);
    notify();
  }, []);

  const saveQuizScore = useCallback(
    (slug: string, score: number, total: number) => {
      saveScore(slug, score, total);
      notify();
    },
    []
  );

  const value = useMemo(
    () => ({ progress, toggleLessonComplete, saveQuizScore }),
    [progress, toggleLessonComplete, saveQuizScore]
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
