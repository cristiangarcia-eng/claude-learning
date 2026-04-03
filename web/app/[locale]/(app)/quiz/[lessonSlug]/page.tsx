"use client";

import { use, useState } from "react";
import { getQuizBySlug } from "@/lib/quiz-data";
import { getLessonBySlug, getLessonTitle } from "@/lib/lessons";
import { useProgress } from "@/components/progress/progress-provider";
import { useLocale } from "@/components/locale-provider";
import { t } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function QuizPage({
  params,
}: {
  params: Promise<{ locale: string; lessonSlug: string }>;
}) {
  const { locale, lessonSlug } = use(params);
  const quiz = getQuizBySlug(lessonSlug);
  const lesson = getLessonBySlug(lessonSlug);
  const { saveQuizScore } = useProgress();
  const currentLocale = useLocale();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  if (!quiz || !lesson) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">{t(currentLocale, "noQuizAvailable")}</h1>
        <p className="text-muted-foreground mb-6">
          {t(currentLocale, "noQuizYet")}
        </p>
        <Link href={`/${locale}/lessons/${lessonSlug}`} className="text-brand-green hover:underline">
          {t(currentLocale, "backToLesson")}
        </Link>
      </div>
    );
  }

  const question = quiz.questions[currentIdx];
  const isCorrect = selectedAnswer === question?.correctIndex;
  const totalCorrect = answers.filter(
    (a, i) => a === quiz.questions[i].correctIndex
  ).length;

  function handleSelect(idx: number) {
    if (submitted) return;
    setSelectedAnswer(idx);
  }

  function handleSubmit() {
    if (selectedAnswer === null || !quiz) return;
    setSubmitted(true);
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentIdx === quiz.questions.length - 1) {
      const score = newAnswers.filter(
        (a, i) => a === quiz.questions[i].correctIndex
      ).length;
      saveQuizScore(lessonSlug, score, quiz.questions.length);
    }
  }

  function handleNext() {
    if (!quiz) return;
    if (currentIdx < quiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const score = answers.filter(
      (a, i) => a === quiz.questions[i].correctIndex
    ).length;
    const percent = Math.round((score / quiz.questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <Trophy
          className={`h-16 w-16 mx-auto mb-6 ${
            percent === 100
              ? "text-brand-green"
              : percent >= 60
              ? "text-yellow-500"
              : "text-muted-foreground"
          }`}
        />
        <h1 className="text-3xl font-bold mb-2">{t(currentLocale, "quizComplete")}</h1>
        <p className="text-xl text-muted-foreground mb-2">{getLessonTitle(lesson, currentLocale)}</p>
        <p className="text-4xl font-bold my-6">
          <span className="text-brand-green">{score}</span>
          <span className="text-muted-foreground">
            /{quiz.questions.length}
          </span>
        </p>
        <p className="text-muted-foreground mb-8">
          {percent === 100
            ? t(currentLocale, "perfectScore")
            : percent >= 60
            ? t(currentLocale, "greatJob")
            : t(currentLocale, "keepStudying")}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4 mr-2" />
            {t(currentLocale, "retry")}
          </Button>
          <Link
            href={`/${locale}/lessons/${lessonSlug}`}
            className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            {t(currentLocale, "backToLesson")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/${locale}/lessons/${lessonSlug}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {getLessonTitle(lesson, currentLocale)}
        </Link>
        <h1 className="text-2xl font-bold mt-1">{t(currentLocale, "quiz")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t(currentLocale, "question")} {currentIdx + 1} {t(currentLocale, "of")} {quiz.questions.length}
        </p>
        {/* Progress dots */}
        <div className="flex gap-1.5 mt-3">
          {quiz.questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${
                i < answers.length
                  ? answers[i] === quiz.questions[i].correctIndex
                    ? "bg-brand-green"
                    : "bg-red-500"
                  : i === currentIdx
                  ? "bg-foreground/30"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg font-semibold mb-6">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, i) => {
          let style = "border-border hover:border-brand-green/30 cursor-pointer";
          if (submitted) {
            if (i === question.correctIndex) {
              style = "border-brand-green bg-brand-green/10";
            } else if (i === selectedAnswer && !isCorrect) {
              style = "border-red-500 bg-red-500/10";
            } else {
              style = "border-border opacity-50";
            }
          } else if (selectedAnswer === i) {
            style = "border-brand-green bg-brand-green/5";
          }

          return (
            <Card
              key={i}
              className={`transition-colors ${style}`}
              onClick={() => handleSelect(i)}
            >
              <CardContent className="p-4 flex items-center gap-3">
                {submitted && i === question.correctIndex && (
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0" />
                )}
                {submitted &&
                  i === selectedAnswer &&
                  !isCorrect &&
                  i !== question.correctIndex && (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                {(!submitted || (i !== question.correctIndex && i !== selectedAnswer)) && (
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex-shrink-0 ${
                      selectedAnswer === i && !submitted
                        ? "border-brand-green bg-brand-green"
                        : "border-muted-foreground/30"
                    }`}
                  />
                )}
                <span className="text-sm">{option}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Explanation */}
      {submitted && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect
              ? "bg-brand-green/10 border border-brand-green/30"
              : "bg-red-500/10 border border-red-500/30"
          }`}
        >
          <p className="text-sm font-medium mb-1">
            {isCorrect ? t(currentLocale, "correct") : t(currentLocale, "incorrect")}
          </p>
          <p className="text-sm text-muted-foreground">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            {t(currentLocale, "checkAnswer")}
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {currentIdx < quiz.questions.length - 1 ? (
              <>
                {t(currentLocale, "next")} <ArrowRight className="h-4 w-4 ml-1" />
              </>
            ) : (
              t(currentLocale, "seeResults")
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
