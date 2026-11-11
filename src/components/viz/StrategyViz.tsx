"use client";

import { useState } from "react";
import { FitchBox, type FitchLine } from "./SubproofViz";

/** A proof, with the step of the search at which each line is decided, and a note for each step. */
export type Plan = { name: string; claim: string; lines: FitchLine[]; order: number[]; notes: string[] };

/** Proofs are written top to bottom but found from both ends: lines appear in the order a person would plan them. */
export function StrategyViz({ plans }: { plans: Plan[] }) {
  const [k, setK] = useState(0);
  const [step, setStep] = useState(0);
  const P = plans[k];
  const last = P.notes.length - 1;
  const lines = P.lines.map((l, i) =>
    P.order[i] <= step ? { ...l, hot: P.order[i] === step && step > 0 } : { s: "?", depth: l.depth, why: "" },
  );
  const pick = (i: number) => { setK(i); setStep(0); };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Proof">
        {plans.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{p.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 8px" }}>{P.claim}</p>
      <FitchBox lines={lines} />
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setStep(0)} disabled={step === 0}>Start again</button>
        <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)} disabled={step >= last}>Next step</button>
        <span className="mono-meta">step {step + 1} of {last + 1}</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {P.notes[step]}{" "}
        <span style={{ color: "var(--text-muted)" }}>A question mark is a line not yet decided; the bars already show where the subproofs will be.</span>
      </figcaption>
    </figure>
  );
}
