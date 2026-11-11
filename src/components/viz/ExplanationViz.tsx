"use client";

import { useState } from "react";

export type Mystery = {
  title: string;
  hypotheses: string[];
  clues: { text: string; fits: boolean[]; why: string }[];
  verdict: string;
};

/** Reveal clues one at a time and watch which hypotheses still explain everything seen so far. */
export function ExplanationViz({ mysteries }: { mysteries: Mystery[] }) {
  const [k, setK] = useState(0);
  const [shown, setShown] = useState(1);
  const M = mysteries[k];
  const load = (i: number) => { setK(i); setShown(1); };
  const clues = M.clues.slice(0, shown);
  const alive = M.hypotheses.map((_, h) => clues.every((c) => c.fits[h]));
  const last = clues[clues.length - 1];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Puzzle">
        {mysteries.map((x, i) => (
          <button key={x.title} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th style={{ textTransform: "none" }}>evidence</th>
              {M.hypotheses.map((h, i) => (
                <th key={h} style={{ textTransform: "none", opacity: alive[i] ? 1 : 0.45, textDecoration: alive[i] ? "none" : "line-through" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clues.map((c) => (
              <tr key={c.text}>
                <td>{c.text}</td>
                {c.fits.map((f, i) => (
                  <td key={i} className="mono" style={{ color: f ? "var(--success)" : "var(--danger)", textAlign: "center" }}>{f ? "explains" : "clashes"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={shown >= M.clues.length} onClick={() => setShown((s) => s + 1)}>Next clue</button>
        <button type="button" className="btn" onClick={() => setShown(1)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {shown >= M.clues.length ? M.verdict : last.why}
      </figcaption>
    </figure>
  );
}
