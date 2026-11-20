"use client";

import { useState } from "react";

/** The point of the unit circle on the line through (−1, 0) with slope t. */
export function circlePoint(t: number): [number, number] {
  return [(1 - t * t) / (1 + t * t), (2 * t) / (1 + t * t)];
}

/** The point (t², t³) of the cuspidal cubic y² = x³. */
export function cuspPoint(t: number): [number, number] {
  return [t * t, t * t * t];
}

const f = (v: number, k = 3) => {
  const s = v.toFixed(k);
  return (Number(s) === 0 ? (0).toFixed(k) : s).replace("-", "−");
};

/** Two morphisms from the line: an isomorphism onto the circle minus a point, and a bijection onto the cusp that is not an isomorphism. */
export function RationalParamViz() {
  const [mode, setMode] = useState(0);
  const [t, setT] = useState(0.5);
  const S = mode === 0 ? 80 : 55, X0 = mode === 0 ? 270 : 200, Y0 = 115;
  const px = (x: number) => X0 + x * S, py = (y: number) => Y0 - y * S;
  const [x, y] = mode === 0 ? circlePoint(t) : cuspPoint(t);
  let curve = "";
  if (mode === 0) {
    for (let k = 0; k <= 120; k++) { const a = (k / 120) * 2 * Math.PI; curve += `${k ? "L" : "M"}${px(Math.cos(a)).toFixed(1)},${py(Math.sin(a)).toFixed(1)}`; }
  } else {
    for (let k = 0; k <= 120; k++) { const s = -1.7 + (k / 120) * 3.4; const [u, v] = cuspPoint(s); curve += `${k ? "L" : "M"}${px(u).toFixed(1)},${py(v).toFixed(1)}`; }
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="curve">
        {["circle x² + y² = 1", "cusp y² = x³"].map((v, i) => <button key={v} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => { setMode(i); setT(0.5); }}>{v}</button>)}
      </div>
      <div className="viz-controls">
        <label>t = {f(t, 2)} <input type="range" min={mode === 0 ? -2.5 : -1.25} max={mode === 0 ? 2.5 : 1.25} step={0.25} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="A rational parametrisation of a plane curve" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={4} x2={X0} y2={226} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        {mode === 0 && (
          <>
            <line x1={px(-1 - 3)} y1={py(-3 * t)} x2={px(-1 + 4)} y2={py(4 * t)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
            <circle cx={px(-1)} cy={py(0)} r={5} style={{ fill: "var(--surface)", stroke: "var(--danger)", strokeWidth: 2 }} />
            <text x={px(-1) - 8} y={py(0) + (t > 0 ? -10 : 18)} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 10 }}>(−1, 0): t = ∞</text>
          </>
        )}
        {mode === 1 && (
          <>
            <circle cx={px(0)} cy={py(0)} r={5} style={{ fill: "var(--danger)" }} />
            <text x={px(0) - 8} y={py(0) + 18} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 10 }}>cusp, t = 0</text>
          </>
        )}
        <circle cx={px(x)} cy={py(y)} r={6} style={{ fill: "var(--accent)" }} />
        <text x={Math.min(px(x) + 10, 440)} y={Math.max(py(y) - 8, 14)} style={{ fill: "var(--text)", fontSize: 11 }}>({f(x)}, {f(y)})</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {mode === 0
          ? `t = ${f(t, 2)} ↦ ((1 − t²)/(1 + t²), 2t/(1 + t²)) = (${f(x)}, ${f(y)}). Inverse: t = y/(x + 1), regular away from (−1, 0).`
          : `t = ${f(t, 2)} ↦ (t², t³) = (${f(x)}, ${f(y)}). Inverse t = y/x is not a polynomial and is undefined at the cusp.`}
      </p>
      <figcaption className="viz-caption">
        The line through (−1, 0) with slope t meets the circle in one more point, given by rational functions of t; the
        inverse is t = y/(x + 1), so the line and the circle minus a point are isomorphic. The map t ↦ (t², t³) is a
        bijective morphism onto the cuspidal cubic, but its inverse is not regular at the cusp, so it is not an
        isomorphism: the coordinate ring k[t², t³] is not k[t].
      </figcaption>
    </figure>
  );
}
