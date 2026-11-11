"use client";

import { useState } from "react";

export type Attempt = { proposal: string; source: string; flaw: number; why: string };

/** Work through a dialogue's attempted definitions, diagnosing what goes wrong with each. */
export function DefinitionTrialViz({ attempts, flaws, term }: { attempts: Attempt[]; flaws: string[]; term: string }) {
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [shown, setShown] = useState(1);
  const done = Object.keys(picks).length;

  return (
    <figure className="viz">
      <ol className="sorter">
        {attempts.slice(0, shown).map((x, i) => {
          const p = picks[i];
          return (
            <li key={x.proposal} className="sorter-item">
              <p className="sorter-q">
                <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)", marginRight: 8 }}>attempt {i + 1} ({x.source})</span>
                {x.proposal}
              </p>
              <div className="segmented" role="group" aria-label={`What goes wrong with attempt ${i + 1}`}>
                {flaws.map((f, k) => (
                  <button key={f} type="button" aria-pressed={p === k}
                    className={p === k ? (k === x.flaw ? "seg is-right" : "seg is-wrong") : "seg"}
                    onClick={() => setPicks((q) => ({ ...q, [i]: k }))}>{f}</button>
                ))}
              </div>
              {p !== undefined && <p className="sorter-why">{p === x.flaw ? "Yes. " : `Socrates' objection is closer to: ${flaws[x.flaw]}. `}{x.why}</p>}
            </li>
          );
        })}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={shown >= attempts.length || picks[shown - 1] === undefined}
          onClick={() => setShown(shown + 1)}>Next attempt</button>
        <button type="button" className="btn" onClick={() => { setPicks({}); setShown(1); }}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {done === attempts.length
          ? `Every attempt to say what ${term} is has failed, and the dialogue ends there. Did any objection seem unfair to you?`
          : picks[shown - 1] === undefined
            ? "What goes wrong with this attempt? Choose a diagnosis."
            : "Go on to the next attempt."}
      </figcaption>
    </figure>
  );
}
