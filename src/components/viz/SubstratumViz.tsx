"use client";

import { useState } from "react";

const QUALS = ["yellow", "heavy", "malleable", "fusible", "shiny", "dissolves in aqua regia"];

/** Strip a lump of gold of its qualities one by one. What is left to have them? Locke's substratum, and his nominal and real essences. */
export function SubstratumViz() {
  const [on, setOn] = useState<boolean[]>(QUALS.map(() => true));
  const kept = QUALS.filter((_, i) => on[i]);

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>Click a quality to take it away, or give it back.</p>
      <div className="viz-controls" style={{ flexWrap: "wrap", marginTop: 8 }}>
        {QUALS.map((q, i) => (
          <button key={q} type="button" style={{ cursor: "pointer" }} className={on[i] ? "viz-chip is-on" : "viz-chip"} aria-pressed={on[i]}
            onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>{q}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A lump with its remaining qualities" style={{ width: "100%", display: "block", marginTop: 10 }}>
        <ellipse cx={260} cy={75} rx={kept.length ? 90 + 20 * kept.length : 110} ry={kept.length ? 34 + 5 * kept.length : 34}
          style={{ fill: kept.length ? "var(--accent-soft)" : "none", stroke: kept.length ? "var(--accent)" : "var(--text-faint)", strokeWidth: 2, strokeDasharray: kept.length ? "none" : "5 5" }} />
        {kept.length ? (
          [kept.slice(0, 3), kept.slice(3)].filter((r) => r.length).map((r, j, rows) => (
            <text key={j} x={260} y={80 + (j - (rows.length - 1) / 2) * 18} textAnchor="middle" style={{ fontSize: 13, fill: "var(--text)" }}>
              {r.join(", ")}
            </text>
          ))
        ) : (
          <text x={260} y={80} textAnchor="middle" style={{ fontSize: 13, fill: "var(--text)" }}>something, I know not what</text>
        )}
      </svg>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>nominal essence: the idea we name gold</td><td>{kept.length ? `a thing with these qualities: ${kept.join(", ")}` : "nothing left to name"}</td></tr>
          <tr><td>real essence: the inner constitution that causes these qualities</td><td>unknown to us</td></tr>
          <tr><td>substratum: what supports the qualities</td><td>a supposed something, of which we have no clear idea</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {kept.length === 0
          ? "With every quality gone, what remains? Locke says only the obscure idea of a support: something, he knew not what, like the Indian philosopher's tortoise under the elephant under the world."
          : `Our idea of gold is a collection of qualities found together, ${kept.length} of them now. We suppose something underneath that holds them together, but we perceive only the qualities.`}
      </figcaption>
    </figure>
  );
}
