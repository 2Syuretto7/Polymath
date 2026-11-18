"use client";

import { useState } from "react";

type F = (x: number, y: number) => [number, number];
const FORMS: { name: string; w: F }[] = [
  { name: "−y dx + x dy", w: (x, y) => [-y, x] },
  { name: "d(xy) = y dx + x dy", w: (x, y) => [y, x] },
  { name: "x dy", w: (x) => [0, x] },
];
const f = (n: number) => (Math.abs(n) < 5e-4 ? "0.000" : n < 0 ? `−${(-n).toFixed(3)}` : n.toFixed(3));

/** Integrating a 1-form over the circle by pulling back: Riemann sums of ω(γ′(t)) converge to the integral. */
export function FormIntegralViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(8);
  const [r, setR] = useState(1);
  const [rev, setRev] = useState(false);
  const W = FORMS[k];
  const sg = rev ? -1 : 1;
  const g = (t: number): [number, number] => [r * Math.cos(sg * t), r * Math.sin(sg * t)];
  const dg = (t: number): [number, number] => [-sg * r * Math.sin(sg * t), sg * r * Math.cos(sg * t)];
  let sum = 0;
  const dt = (2 * Math.PI) / n;
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const t = i * dt;
    const [P, Q] = W.w(...g(t));
    const [a, b] = dg(t);
    sum += (P * a + Q * b) * dt;
    pts.push(g(t));
  }
  let exact = 0;
  const N = 4000;
  for (let i = 0; i < N; i++) { const t = ((i + 0.5) * 2 * Math.PI) / N; const [P, Q] = W.w(...g(t)); const [a, b] = dg(t); exact += (P * a + Q * b) * (2 * Math.PI) / N; }
  const S = 55, CX = 130, CY = 105;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="form">
        {FORMS.map((q, i) => <button key={q.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{q.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>radius = {r.toFixed(1)} <input type="range" min={5} max={15} value={r * 10} onChange={(e) => setR(Number(e.target.value) / 10)} aria-label="radius" /></label>
        <label>pieces n = {n} <input type="range" min={3} max={64} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="pieces" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setRev(!rev)}>{rev ? "clockwise" : "anticlockwise"}: reverse</button>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A circle cut into pieces" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={CX} cy={CY} r={S * r} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "3 3" }} />
        <polygon points={pts.map(([x, y]) => `${CX + S * x},${CY - S * y}`).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        {pts.map(([x, y], i) => <circle key={i} cx={CX + S * x} cy={CY - S * y} r={2.5} style={{ fill: "var(--accent)" }} />)}
        <text x={290} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>ω = {W.name}</text>
        <text x={290} y={62} style={{ fill: "var(--text-muted)", fontSize: 11 }}>γ(t) = r(cos t, {rev ? "−" : ""}sin t), 0 ≤ t ≤ 2π</text>
        <text x={290} y={90} style={{ fill: "var(--text)", fontSize: 12 }}>Σ ω(γ′(tᵢ)) Δt = {f(sum)}</text>
        <text x={290} y={116} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>∫ ω over the circle = {f(exact)}</text>
      </svg>
      <figcaption className="viz-caption">
        To integrate ω over the circle, pull it back along γ to a 1-form on [0, 2π] and integrate that. Reversing the
        direction reverses the sign; the exact form d(xy) integrates to zero round any closed curve.
      </figcaption>
    </figure>
  );
}
