"use client";

import { useState } from "react";

export const REASONS = [
  { label: "Equal citizenship", text: "Every child should have a fair chance to become a free and equal citizen.", consensus: true, convergence: true, note: "A political value that every reasonable citizen can be expected to accept." },
  { label: "Scripture", text: "Our holy book commands care for the poor, so the state should fund welfare.", consensus: false, convergence: true, note: "Not shareable by all, but a sincere reason for this citizen, whose own view the law must fit." },
  { label: "Perfectionism", text: "Opera is a higher pleasure, so the state should subsidise it over football.", consensus: false, convergence: true, note: "It is a reason for those who hold it, but the subsidy is justified only if every reasonable citizen has some sufficient reason of their own to accept it, and many do not." },
  { label: "Public health", text: "Vaccination prevents epidemics that endanger everyone.", consensus: true, convergence: true, note: "Rests on public evidence and the shared value of security of the person." },
];

/** Sorting reasons for a law by two conceptions of public justification. */
export function PublicReasonViz() {
  const [k, setK] = useState(1);
  const [view, setView] = useState<"consensus" | "convergence">("consensus");
  const R = REASONS[k];
  const ok = view === "consensus" ? R.consensus : R.convergence;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="reason">
        {REASONS.map((r, i) => <button key={r.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{r.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="view" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={view === "consensus"} className={view === "consensus" ? "seg is-on" : "seg"} onClick={() => setView("consensus")}>consensus (Rawls)</button>
        <button type="button" aria-pressed={view === "convergence"} className={view === "convergence" ? "seg is-on" : "seg"} onClick={() => setView("convergence")}>convergence (Gaus)</button>
      </div>
      <div style={{ marginTop: 12, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-subtle)" }}>
        <p style={{ margin: 0, fontStyle: "italic" }}>&lsquo;{R.text}&rsquo;</p>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: ok ? "var(--success)" : "var(--danger)" }}>
        On the {view} view this reason {ok ? "can count" : "cannot count"} towards publicly justifying the law.
      </p>
      <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{R.note}</p>
      <figcaption className="viz-caption">
        On the consensus view, a law must be justified by reasons that all reasonable citizens can share. On the
        convergence view, it is enough that each citizen has sufficient reason of their own, even different reasons, to
        endorse it. On either view, a law that some reasonable citizen has no sufficient reason to accept is not publicly
        justified.
      </figcaption>
    </figure>
  );
}
