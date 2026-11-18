"use client";

import { useState } from "react";

/** fₙ(x) = sin(n²x)/n shrinks to 0 uniformly while its derivative n·cos(n²x) blows up. */
export function DerivativeBlowupViz() {
  const [n, setN] = useState(2);
  const pts = 600;
  const X = (x: number) => 30 + x * 470;
  const top = (y: number) => 60 - y * 45;
  const bot = (y: number) => 170 - (y / Math.max(n, 1)) * 45;
  const f = Array.from({ length: pts + 1 }, (_, i) => { const x = i / pts; return `${X(x)},${top(Math.sin(n * n * x) / n)}`; }).join(" ");
  const g = Array.from({ length: pts + 1 }, (_, i) => { const x = i / pts; return `${X(x)},${bot(n * Math.cos(n * n * x))}`; }).join(" ");
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 230" role="img" aria-label="Graphs of f and its derivative" style={{ width: "100%", display: "block" }}>
        <line x1={30} y1={60} x2={500} y2={60} style={{ stroke: "var(--border)" }} />
        <line x1={30} y1={170} x2={500} y2={170} style={{ stroke: "var(--border)" }} />
        <line x1={30} y1={15} x2={500} y2={15} style={{ stroke: "var(--border)", strokeDasharray: "3 4" }} />
        <line x1={30} y1={105} x2={500} y2={105} style={{ stroke: "var(--border)", strokeDasharray: "3 4" }} />
        <text x={26} y={19} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
        <text x={26} y={129} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n}</text>
        <polyline points={f} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <polyline points={g} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1 }} />
        <text x={500} y={98} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>fₙ(x) = sin(n²x)/n, drawn to scale 1</text>
        <text x={500} y={224} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>fₙ′(x) = n·cos(n²x), axis rescaled to height n</text>
      </svg>
      <div className="segmented" role="group" aria-label="n">
        {[1, 2, 4, 8, 16].map((v) => <button key={v} type="button" aria-pressed={n === v} className={n === v ? "seg is-on" : "seg"} onClick={() => setN(v)}>n = {v}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖fₙ‖∞ = {(1 / n).toFixed(4)}, ‖fₙ′‖∞ = {n}. Ratio ‖Dfₙ‖/‖fₙ‖ = {n * n}.
      </p>
      <figcaption className="viz-caption">
        Differentiation D, from C¹[0, 1] with the sup norm to C[0, 1], is unbounded: the ratio n² grows without limit. Yet
        its graph is closed, since uniform limits of fₙ and fₙ′ are a function and its derivative. No contradiction with
        the closed graph theorem: C¹[0, 1] with the sup norm is not complete.
      </figcaption>
    </figure>
  );
}
