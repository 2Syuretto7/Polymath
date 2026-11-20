"use client";

import { useState } from "react";

type Pt = { x: number; y: number; mult: number };
type Count = { real: Pt[]; complex: number; infinity: number; degrees: [number, number]; note: string };

/** Intersections of a pair of curves, counted with multiplicity, in the affine plane, over ℂ and at infinity. */
export function intersect(pair: number, c: number): Count {
  if (pair === 0) {
    // y = x² and y = c
    if (c > 0) return { real: [{ x: -Math.sqrt(c), y: c, mult: 1 }, { x: Math.sqrt(c), y: c, mult: 1 }], complex: 0, infinity: 0, degrees: [2, 1], note: "two real points" };
    if (c === 0) return { real: [{ x: 0, y: 0, mult: 2 }], complex: 0, infinity: 0, degrees: [2, 1], note: "the line is tangent: one point of multiplicity 2" };
    return { real: [], complex: 2, infinity: 0, degrees: [2, 1], note: "two complex points, x = ±i√|c|" };
  }
  if (pair === 1) {
    // y = x² and x = c: one affine point, and both pass through [0 : 1 : 0]
    return { real: [{ x: c, y: c * c, mult: 1 }], complex: 0, infinity: 1, degrees: [2, 1], note: "one affine point, and one at infinity, [0 : 1 : 0]" };
  }
  // x² + y² = c² and x²/4 + y² = 1
  const r = c;
  const x2 = (4 * (r * r - 1)) / 3, y2 = 1 - x2 / 4;
  if (r === 1) return { real: [{ x: 0, y: 1, mult: 2 }, { x: 0, y: -1, mult: 2 }], complex: 0, infinity: 0, degrees: [2, 2], note: "tangent at two points, each of multiplicity 2" };
  if (r === 2) return { real: [{ x: 2, y: 0, mult: 2 }, { x: -2, y: 0, mult: 2 }], complex: 0, infinity: 0, degrees: [2, 2], note: "tangent at two points, each of multiplicity 2" };
  if (x2 > 0 && y2 > 0) {
    const X = Math.sqrt(x2), Y = Math.sqrt(y2);
    return { real: [{ x: X, y: Y, mult: 1 }, { x: -X, y: Y, mult: 1 }, { x: X, y: -Y, mult: 1 }, { x: -X, y: -Y, mult: 1 }], complex: 0, infinity: 0, degrees: [2, 2], note: "four real points" };
  }
  return { real: [], complex: 4, infinity: 0, degrees: [2, 2], note: "four complex points" };
}

export const PAIRS = ["parabola and horizontal line", "parabola and vertical line", "circle and ellipse"];

/** Bézout's theorem: the intersections of two plane curves, counted properly, number the product of their degrees. */
export function BezoutCountViz() {
  const [pair, setPair] = useState(0);
  const [c, setC] = useState(1);
  const S = 50, X0 = 270, Y0 = 130;
  const px = (x: number) => X0 + x * S, py = (y: number) => Y0 - y * S;
  const I = intersect(pair, c);
  const total = I.real.reduce((s, p) => s + p.mult, 0) + I.complex + I.infinity;
  let parab = "";
  for (let k = 0; k <= 100; k++) { const x = -2.4 + (k / 100) * 4.8; parab += `${k ? "L" : "M"}${px(x).toFixed(1)},${py(x * x).toFixed(1)}`; }
  const range = pair === 2 ? { min: 0.5, max: 2.5, step: 0.25 } : { min: -2, max: 2, step: 0.25 };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="pair of curves">
        {PAIRS.map((v, i) => <button key={v} type="button" aria-pressed={pair === i} className={pair === i ? "seg is-on" : "seg"} onClick={() => { setPair(i); setC(1); }}>{v}</button>)}
      </div>
      <div className="viz-controls">
        <label>{pair === 2 ? "radius" : "c"} = {c.toFixed(2).replace("-", "−")} <input type="range" min={range.min} max={range.max} step={range.step} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="c" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Two plane curves and their intersection points" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={4} x2={X0} y2={246} style={{ stroke: "var(--border-strong)" }} />
        {pair < 2 && <path d={parab} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />}
        {pair === 0 && <line x1={10} y1={py(c)} x2={530} y2={py(c)} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />}
        {pair === 1 && <line x1={px(c)} y1={4} x2={px(c)} y2={246} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />}
        {pair === 2 && (
          <>
            <ellipse cx={px(0)} cy={py(0)} rx={2 * S} ry={S} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
            <circle cx={px(0)} cy={py(0)} r={c * S} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          </>
        )}
        {I.real.map((p, i) => (
          <g key={i}>
            <circle cx={px(p.x)} cy={py(p.y)} r={p.mult > 1 ? 7 : 5} style={{ fill: p.mult > 1 ? "var(--danger)" : "var(--success)" }} />
            {p.mult > 1 && <text x={px(p.x) + 10} y={py(p.y) - 8} style={{ fill: "var(--danger)", fontSize: 11 }}>×{p.mult}</text>}
          </g>
        ))}
        {I.infinity > 0 && <text x={X0 + 8} y={16} style={{ fill: "var(--danger)", fontSize: 11 }}>↑ both curves head to the point [0 : 1 : 0] at infinity</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Degrees {I.degrees[0]} and {I.degrees[1]}: {I.note}. Real affine {I.real.reduce((s, p) => s + p.mult, 0)} + complex {I.complex} + at infinity {I.infinity} = {total}.
      </p>
      <figcaption className="viz-caption">
        Counting only real points in the plane, the number of intersections changes as the curves move. Counting complex
        points, points at infinity, and tangencies with their multiplicity, the total is always the product of the degrees.
      </figcaption>
    </figure>
  );
}
