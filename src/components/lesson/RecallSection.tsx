"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { recallAction } from "@/app/actions";
import { ExerciseCard } from "@/components/lesson/ExerciseCard";
import { Pill } from "@/components/ui/Pill";
import type { RecallView } from "@/lib/recall";

/**
 * Recall questions are written fresh by Parton for each visit and never repeat, so they are
 * fetched after the page loads rather than holding the lesson up while Parton writes them.
 */
export function RecallSection({ lessonId }: { lessonId: string }) {
  const [questions, setQuestions] = useState<RecallView[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const [round, setRound] = useState(0);

  const load = useCallback((fresh: boolean) => {
    start(async () => {
      setError(null);
      const res = await recallAction(lessonId, fresh);
      if (res.ok) {
        setQuestions(res.questions);
        setRound((r) => r + 1);
      } else {
        setError(res.error);
      }
    });
  }, [lessonId]);

  useEffect(() => { load(false); }, [load]);

  return (
    <>
      {pending && (
        <p className="hint" role="status"><Pill tone="accent" icon="spin">Writing</Pill> Parton is writing new recall questions for you…</p>
      )}
      {error && <p className="feedback feedback-info" role="status"><span>{error}</span></p>}
      {questions?.map((q) => (
        <ExerciseCard key={`${round}-${q.id}`} view={q} context="recall">
          <p className="mono-meta">From {q.sourceTitle}</p>
          <div className="parton-prose" dangerouslySetInnerHTML={{ __html: q.promptHtml }} />
        </ExerciseCard>
      ))}
      {!pending && (questions !== null || error) && (
        <p>
          <button type="button" className="btn" onClick={() => load(true)}>
            {error && !questions ? "Try again" : "New recall questions"}
          </button>
        </p>
      )}
    </>
  );
}
