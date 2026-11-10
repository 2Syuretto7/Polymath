"use client";

import { useState, useTransition, type ReactNode } from "react";
import { checkExerciseAction } from "@/app/actions";

export type ExerciseView = {
  id: string;
  rung: "check" | "apply" | "prove" | "stretch";
  kind: "numeric" | "expression" | "choice" | "written";
  options?: string[];
  multiple?: boolean;
  variables?: string[];
  solved: boolean;
  response: string | null;
};

const RUNG: Record<ExerciseView["rung"], string> = { check: "Check", apply: "Apply", prove: "Prove or argue", stretch: "Stretch" };

type Status = { tone: "right" | "wrong" | "info"; text: string } | null;

export function ExerciseCard({ view, context, children, index }: {
  view: ExerciseView;
  context: "lesson" | "recall" | "review";
  children: ReactNode;
  index?: number;
}) {
  const fresh = context !== "lesson";
  const [value, setValue] = useState(fresh ? "" : view.kind === "choice" ? view.response ?? "" : view.response ?? "");
  const [solved, setSolved] = useState(fresh ? false : view.solved);
  const [tries, setTries] = useState(0);
  const [status, setStatus] = useState<Status>(
    !fresh && view.solved ? { tone: view.kind === "written" ? "info" : "right", text: view.kind === "written" ? "Submitted." : "Solved." } : null,
  );
  const [pending, start] = useTransition();
  const picked = value.split(",").filter(Boolean).map(Number);

  const submit = () =>
    start(async () => {
      const attempt = tries + 1;
      const res = await checkExerciseAction(view.id, value, context, attempt);
      if (res.message && !res.correct) { setStatus({ tone: "info", text: res.message }); return; }
      setTries(attempt);
      if (res.pending) {
        setSolved(true);
        setStatus({ tone: "info", text: "Submitted. From Phase 3, Parton reads written work and responds with questions, never answers." });
      } else if (res.correct) {
        setSolved(true);
        setStatus({ tone: "right", text: attempt === 1 ? "Correct." : "Correct, after another look. That counts." });
      } else {
        setStatus({
          tone: "wrong",
          text: attempt >= 3
            ? "Not yet. Go back to the theory above and look for the step that applies, then try again. Parton will give graded hints here from Phase 3."
            : "Not yet. Try again.",
        });
      }
      if (res.lessonMastered) window.dispatchEvent(new CustomEvent("polymath:mastered"));
    });

  const toggle = (i: number) => {
    const set = new Set(view.multiple ? picked : []);
    if (set.has(i)) set.delete(i); else set.add(i);
    setValue([...set].sort((a, b) => a - b).join(","));
  };

  const locked = solved && view.kind !== "written";

  return (
    <div className={`exercise ${solved ? "is-solved" : ""}`}>
      <p className="exercise-meta">
        {index !== undefined && <span>{index}. </span>}
        <span className={`rung rung-${view.rung}`}>{RUNG[view.rung]}</span>
      </p>
      <div className="exercise-prompt">{children}</div>

      <form className="exercise-form" onSubmit={(e) => { e.preventDefault(); if (!pending && value.trim()) submit(); }}>
        {view.kind === "choice" && (
          <div className="choices" role={view.multiple ? "group" : "radiogroup"}>
            {view.options!.map((opt, i) => (
              <label key={opt} className={`choice ${picked.includes(i) ? "is-picked" : ""}`}>
                <input type={view.multiple ? "checkbox" : "radio"} name={view.id} checked={picked.includes(i)}
                  onChange={() => toggle(i)} disabled={locked} />
                <span>{opt}</span>
              </label>
            ))}
            {view.multiple && <p className="hint">Select all that apply.</p>}
          </div>
        )}
        {(view.kind === "numeric" || view.kind === "expression") && (
          <input className="input answer-input" value={value} onChange={(e) => setValue(e.target.value)} disabled={locked}
            inputMode={view.kind === "numeric" ? "decimal" : "text"} autoComplete="off" spellCheck={false}
            placeholder={view.kind === "numeric" ? "A number, such as 12 or 3/4" : `An expression in ${view.variables?.join(", ")}, such as 2x^2 + 1`}
            aria-label="Your answer" />
        )}
        {view.kind === "written" && (
          <textarea className="input textarea" value={value} onChange={(e) => setValue(e.target.value)} rows={7}
            placeholder="Write your answer in full sentences. Show every step." aria-label="Your answer" />
        )}
        {!locked && (
          <div className="exercise-actions">
            <button type="submit" className="btn btn-primary" disabled={pending || !value.trim()}>
              {pending ? "Checking…" : view.kind === "written" ? (solved ? "Submit revision" : "Submit") : "Check"}
            </button>
          </div>
        )}
      </form>
      {status && <p className={`feedback feedback-${status.tone}`} role="status">{status.text}</p>}
    </div>
  );
}
