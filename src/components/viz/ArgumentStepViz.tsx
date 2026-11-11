"use client";

import { useState } from "react";

export type ArgStep = { claim: string; kind: "premise" | "inference" | "conclusion"; note: string; objection?: string };

/** Walk through an argument one step at a time, with a note on each step and, where useful, an objection. */
export function ArgumentStepViz({ steps, title }: { steps: ArgStep[]; title: string }) {
  const [shown, setShown] = useState(1);
  const [open, setOpen] = useState<number | null>(null);
  const last = steps[shown - 1];

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>{title}</p>
      <ol className="tagger" style={{ marginTop: 10 }}>
        {steps.slice(0, shown).map((s, i) => (
          <li key={s.claim} className={`tagger-row ${s.kind === "conclusion" ? "is-right" : ""}`}>
            <p className="tagger-text" style={{ marginBottom: 6 }}>
              <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)", marginRight: 8 }}>{i + 1}. {s.kind}</span>
              {s.claim}
            </p>
            <p className="tagger-why" style={{ marginTop: 0 }}>{s.note}</p>
            {s.objection && (
              <>
                <button type="button" className="viz-chip" style={{ cursor: "pointer", marginTop: 8 }} aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}>{open === i ? "hide the objection" : "challenge this step"}</button>
                {open === i && <p className="tagger-why" style={{ color: "var(--danger)" }}>{s.objection}</p>}
              </>
            )}
          </li>
        ))}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={shown >= steps.length} onClick={() => setShown((x) => x + 1)}>Next step</button>
        <button type="button" className="btn" onClick={() => { setShown(1); setOpen(null); }}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {shown >= steps.length ? "That is the whole argument. Which step would you challenge?" : `Step ${shown} of ${steps.length}: ${last.kind === "premise" ? "accept it for now, or challenge it." : "does it follow from what came before?"}`}
      </figcaption>
    </figure>
  );
}
