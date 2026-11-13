"use client";

import { useState } from "react";

/** Hume's billiard balls: what do we observe when one ball strikes another, and where does the idea of necessary connection come from? */
export function BilliardViz() {
  const [t, setT] = useState(0);
  const [seen, setSeen] = useState(1);
  const ax = t < 0.5 ? 60 + t * 2 * 200 : 260;
  const bx = t < 0.5 ? 284 : 284 + (t - 0.5) * 2 * 190;
  const expect = seen === 1 ? "none yet: from a single case you could not have predicted it" : seen < 5 ? "growing" : "strong: you now expect the second ball to move as soon as you see the first";

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 110" role="img" aria-label="Two billiard balls on a table" style={{ width: "100%", display: "block" }}>
        <rect x={20} y={20} width={480} height={70} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <circle cx={ax} cy={55} r={12} style={{ fill: "var(--accent)" }} />
        <circle cx={bx} cy={55} r={12} style={{ fill: "var(--text)" }} />
        {t >= 0.5 && t < 0.6 && <text x={272} y={36} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>contact</text>}
      </svg>
      <div className="viz-sliders">
        <label><span>moment: <span className="mono">{t < 0.5 ? "before impact" : t < 0.6 ? "impact" : "after impact"}</span></span>
          <input type="range" min={0} max={1} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>times you have seen this happen: <span className="mono">{seen}</span></span>
          <input type="range" min={1} max={50} value={seen} onChange={(e) => setSeen(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>contiguity: the balls touch</td><td>observed</td></tr>
          <tr><td>priority: the first moves before the second</td><td>observed</td></tr>
          <tr><td>constant conjunction</td><td>{seen === 1 ? "not yet: one case only" : `observed, ${seen} times out of ${seen}`}</td></tr>
          <tr><td>a necessary connection, a power in the first ball</td><td>not observed in any case, however many</td></tr>
          <tr><td>your felt expectation</td><td>{expect}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Move through the collision as often as you like: you see one motion follow another, never the power that makes it follow. Repetition adds nothing to any single case except a habit of expectation in you, and that feeling, Hume argues, is the impression from which the idea of necessary connection is copied.
      </figcaption>
    </figure>
  );
}
