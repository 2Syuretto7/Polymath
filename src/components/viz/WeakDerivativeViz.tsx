"use client";

import { useState } from "react";

/** A smooth bump of height 1 centred at c with half-width w. */
export function bump(x: number, c: number, w: number) {
  const s = (x - c) / w;
  return Math.abs(s) < 1 ? Math.exp(1 - 1 / (1 - s * s)) : 0;
}
export function bumpPrime(x: number, c: number, w: number) {
  const s = (x - c) / w;
  if (Math.abs(s) >= 1) return 0;
  return bump(x, c, w) * (-2 * s) / ((1 - s * s) ** 2) / w;
}

export const FUNCS = [
  { label: "u(x) = |x|", u: (x: number) => Math.abs(x), v: (x: number) => Math.sign(x) as number | null, vLabel: "sign x" },
  { label: "u(x) = step at 0", u: (x: number) => (x > 0 ? 1 : 0), v: (_x: number) => null, vLabel: "none" },
];

function integrate(f: (x: number) => number) {
  let s = 0;
  const N = 4000;
  for (let i = 0; i < N; i++) { const x = -1 + (2 * (i + 0.5)) / N; s += f(x); }
  return (s * 2) / N;
}

export function WeakDerivativeViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState(0.2);
  const w = 0.5;
  const F = FUNCS[k];
  const lhs = -integrate((x) => F.u(x) * bumpPrime(x, c, w));
  const rhs = k === 0 ? integrate((x) => Math.sign(x) * bump(x, c, w)) : null;
  const X = (x: number) => 270 + x * 230;
  const Y = (y: number) => 150 - y * 110;
  const xs = Array.from({ length: 201 }, (_, i) => -1 + i * 0.01);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FUNCS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>test function centre c = {c.toFixed(1)} <input type="range" min={-0.4} max={0.4} step={0.1} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="c" /></label>
      </div>
      <svg viewBox="0 0 540 175" role="img" aria-label="The function u and the test function φ" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={Y(0)} x2={510} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={20} x2={X(0)} y2={165} style={{ stroke: "var(--grid-line)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(F.u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(bump(x, c, w))}`).join(" ")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <text x={X(-1)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>−1</text>
        <text x={X(1)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={X(c)} y={Y(1) - 6} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 11 }}>φ</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        −∫ u φ′ = {lhs.toFixed(3)}.{" "}
        {rhs !== null ? `∫ (sign x) φ = ${rhs.toFixed(3)}: they agree, as they must for every φ.` : `This equals φ(0) = ${bump(0, c, w).toFixed(3)}, which no integrable function v can produce as ∫ vφ for every φ.`}
      </p>
      <figcaption className="viz-caption">
        v is the weak derivative of u if ∫ u φ′ = −∫ v φ for every smooth φ vanishing near the ends. For |x| the sign
        function works, since the corner leaves no boundary term. For the step, the pairing picks out the value φ(0): its
        derivative is the Dirac delta, a distribution but not a function.
      </figcaption>
    </figure>
  );
}
