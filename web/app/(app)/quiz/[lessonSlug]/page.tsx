"use client";

import { use, useState } from "react";
import { getQuizBySlug } from "@/lib/quiz-data";
import { getLessonBySlug } from "@/lib/lessons";
import { useProgress } from "@/components/progress/progress-provider";
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
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = use(params);
  const quiz = getQuizBySlug(lessonSlug);
  const lesson = getLessonBySlug(lessonSlug);
  const { saveQuizScore } = useProgress();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  if (!quiz || !lesson) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">No Quiz Available</h1>
        <p className="text-muted-foreground mb-6">
          This lesson doesn&apos;t have a quiz yet.
        </p>
        <Link href={`/lessons/${lessonSlug}`} className="text-brand-green hover:underline">
          Back to lesson
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
        <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
        <p className="text-xl text-muted-foreground mb-2">{lesson.title}</p>
        <p className="text-4xl font-bold my-6">
          <span className="text-brand-green">{score}</span>
          <span className="text-muted-foreground">
            /{quiz.questions.length}
          </span>
        </p>
        <p className="text-muted-foreground mb-8">
          {percent === 100
            ? "Perfect score! You've mastered this topic."
            : percent >= 60
            ? "Great job! Review the missed questions to solidify your knowledge."
            : "Keep studying! Review the lesson and try again."}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Retry
          </Button>
          <Link
            href={`/lessons/${lessonSlug}`}
            className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            Back to Lesson
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
          href={`/lessons/${lessonSlug}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {lesson.title}
        </Link>
        <h1 className="text-2xl font-bold mt-1">Quiz</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Question {currentIdx + 1} of {quiz.questions.length}
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
            {isCorrect ? "Correct!" : "Incorrect"}
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
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {currentIdx < quiz.questions.length - 1 ? (
              <>
                Next <ArrowRight className="h-4 w-4 ml-1" />
              </>
            ) : (
              "See Results"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
