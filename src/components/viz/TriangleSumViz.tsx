"use client";

import { useState } from "react";

const AX = 60, BX = 460, BY = 200;
const STEPS = [
  "A triangle. Move its top corner and keep any shape you like: the construction will not depend on it.",
  "Draw the line through C parallel to AB. Euclid's parallel postulate says there is exactly one.",
  "The angle between CA and the parallel equals α, as alternate angles across a transversal. Likewise the angle between CB and the parallel equals β.",
  "The three angles at C lie along a straight line, so α + β + γ = 180°. The figure was one particular triangle, yet the proof shows something about every triangle.",
];

function arc(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p = (a: number) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy - r * Math.sin(a)).toFixed(1)}`;
  return `M ${p(a0)} A ${r} ${r} 0 0 0 ${p(a1)}`;
}

/** Kant's geometer: construct the concept of a triangle in intuition, extend a side, draw a parallel, and reach a necessary truth by a chain of constructions. */
export function TriangleSumViz() {
  const [cx, setCx] = useState(200);
  const [cy, setCy] = useState(70);
  const [s, setS] = useState(0);
  const angA = Math.atan2(BY - cy, cx - AX);
  const angBC = Math.atan2(BY - cy, cx - BX);
  const angCB = Math.atan2(cy - BY, BX - cx);
  const angCA = Math.atan2(cy - BY, AX - cx);
  const deg = (r: number) => (r * 180) / Math.PI;
  const al = deg(angA), be = deg(Math.PI - angBC), ga = deg(angCB - angCA);
  const d1 = (v: number) => v.toFixed(1);
  const t = { fontSize: 12, fill: "var(--text)" } as const;

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 230" role="img" aria-label="A triangle with a parallel drawn through its top vertex" style={{ width: "100%", display: "block" }}>
        <polygon points={`${AX},${BY} ${BX},${BY} ${cx},${cy}`} style={{ fill: "var(--bg-subtle)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <path d={arc(AX, BY, 28, 0, angA)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={arc(BX, BY, 28, angBC, Math.PI)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <path d={arc(cx, cy, 22, angCA, angCB)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {s >= 1 && <line x1={10} y1={cy} x2={510} y2={cy} style={{ stroke: "var(--text-muted)", strokeDasharray: "6 4" }} />}
        {s >= 2 && <>
          <path d={arc(cx, cy, 30, -Math.PI, angCA)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          <path d={arc(cx, cy, 30, angCB, 0)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        </>}
        <text x={AX - 14} y={BY + 16} style={t}>A</text>
        <text x={BX + 6} y={BY + 16} style={t}>B</text>
        <text x={cx - 4} y={cy - 10} style={t}>C</text>
        <text x={AX + 34} y={BY - 6} style={{ ...t, fill: "var(--accent)" }}>α</text>
        <text x={BX - 44} y={BY - 6} style={{ ...t, fill: "var(--danger)" }}>β</text>
      </svg>
      <div className="viz-sliders">
        <label><span>C across: <span className="mono">{cx}</span></span>
          <input type="range" min={90} max={430} step={5} value={cx} onChange={(ev) => setCx(Number(ev.target.value))} /></label>
        <label><span>C up: <span className="mono">{BY - cy}</span></span>
          <input type="range" min={50} max={160} step={5} value={BY - cy} onChange={(ev) => setCy(BY - Number(ev.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={s === STEPS.length - 1} onClick={() => setS(s + 1)}>Next step</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>α + β + γ</td><td className="mono">{d1(al)}° + {d1(be)}° + {d1(ga)}° = {d1(al + be + ga)}°</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">Step {s + 1} of {STEPS.length}. {STEPS[s]}</figcaption>
    </figure>
  );
}
