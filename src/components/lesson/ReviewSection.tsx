"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useTransition } from "react";
import { lessonAfterReviewAction, reviewAction } from "@/app/actions";
import { ExerciseCard } from "@/components/lesson/ExerciseCard";
import { Pill } from "@/components/ui/Pill";
import { Check, ChevronRight } from "@/components/ui/Icons";
import type { RecallView } from "@/lib/recall";

/**
 * Review questions are written new by Parton for each session, three to five at a time, and never
 * repeat. They are fetched after the page loads rather than holding the page up while Parton writes.
 * A session ends by opening a lesson, never another review session.
 */
function NextLesson({ primary = true }: { primary?: boolean }) {
  return (
    <form action={lessonAfterReviewAction}>
      <button type="submit" className={`btn ${primary ? "btn-primary" : ""}`}>
        Open a lesson <ChevronRight size={14} />
      </button>
    </form>
  );
}

export function ReviewSection() {
  const [questions, setQuestions] = useState<RecallView[] | null>(null);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const [round, setRound] = useState(0);

  const load = useCallback(() => {
    start(async () => {
      setError(null);
      const res = await reviewAction(false);
      if (res.ok) {
        setQuestions(res.questions);
        setFinished(Boolean(res.finished));
        setRound((r) => r + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(res.error);
      }
    });
  }, []);

  useEffect(() => { load(); }, [load]);

  if (questions && questions.length === 0 && !pending && !error) {
    return finished ? (
      <div className="empty">
        <p><span className="pill pill-success"><Check size={12} />Review done</span></p>
        <p>That review session is finished. A lesson comes next; the next review session follows it.</p>
        <div className="review-done"><NextLesson /><Link href="/" className="btn">Home</Link></div>
      </div>
    ) : (
      <div className="empty">
        <p><span className="pill pill-success"><Check size={12} />All caught up</span></p>
        <p>Nothing is due. Each idea will come back just before you would forget it, with new questions.</p>
        <div className="review-done"><NextLesson /><Link href="/map" className="btn">Browse the map</Link></div>
      </div>
    );
  }

  return (
    <>
      {pending && (
        <p className="hint" role="status"><Pill tone="accent" icon="spin">Writing</Pill> Parton is writing new review questions for you…</p>
      )}
      {error && <p className="feedback feedback-info" role="status"><span>{error}</span></p>}
      {questions && questions.length > 0 && !pending && (
        <p className="lede">
          {questions.length} new questions on ideas from earlier lessons, mixed together. Your first answer to each decides
          when that idea returns.
        </p>
      )}
      {!pending && questions?.map((q, i) => (
        <div key={`${round}-${q.id}`}>
          <p className="eyebrow review-source">From {q.sourceTitle}</p>
          <ExerciseCard view={q} context="review" index={i + 1}>
            <div className="parton-prose" dangerouslySetInnerHTML={{ __html: q.promptHtml }} />
          </ExerciseCard>
        </div>
      ))}
      {!pending && (questions !== null || error) && (
        <div className="review-done">
          {error && !questions ? (
            <>
              <button type="button" className="btn" onClick={() => load()}>Try again</button>
              <NextLesson primary={false} />
            </>
          ) : (
            <>
              <NextLesson />
              <Link href="/" className="btn">Home</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
