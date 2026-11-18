"use client";

import { useState } from "react";

const DENS: { name: string; f: (x: number) => number }[] = [
  { name: "sin 2πx", f: (x) => Math.sin(2 * Math.PI * x) },
  { name: "x − 1/3", f: (x) => x - 1 / 3 },
  { name: "cos 6πx + 0.3", f: (x) => Math.cos(6 * Math.PI * x) + 0.3 },
];

const M = 3000;
const xs = Array.from({ length: M }, (_, i) => (i + 0.5) / M);

/** A signed measure ν(A) = ∫_A f dλ on [0, 1], split by the sign of f. */
export function HahnSplitViz() {
  const [k, setK] = useState(0);
  const f = DENS[k].f;
  const pos = xs.reduce((s, x) => s + Math.max(f(x), 0), 0) / M;
  const neg = xs.reduce((s, x) => s + Math.max(-f(x), 0), 0) / M;
  const X = (x: number) => 30 + x * 460, Y = (y: number) => 100 - y * 60;
  const pts = Array.from({ length: 401 }, (_, i) => i / 400);
  const fill = (sgn: number) => `M${X(0)} ${Y(0)} ` + pts.map((x) => `L${X(x).toFixed(1)} ${Y(sgn * Math.max(sgn * f(x), 0)).toFixed(1)}`).join(" ") + ` L${X(1)} ${Y(0)} Z`;
  const runs: [number, number][] = [];
  let st = -1;
  pts.forEach((x, i) => { const on = f(x) >= 0; if (on && st < 0) st = x; if ((!on || i === pts.length - 1) && st >= 0) { runs.push([st, on ? x : pts[i - 1]]); st = -1; } });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="density">
        {DENS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>f(x) = {d.name}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Positive and negative parts of a density" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={fill(1)} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        <path d={fill(-1)} style={{ fill: "var(--danger)", opacity: 0.25, stroke: "none" }} />
        <polyline points={pts.map((x) => `${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
        <rect x={X(0)} y={176} width={X(1) - X(0)} height={12} style={{ fill: "var(--danger)", opacity: 0.25 }} />
        {runs.map(([a, b]) => <rect key={a} x={X(a)} y={176} width={Math.max(1, X(b) - X(a))} height={12} style={{ fill: "var(--accent)" }} />)}
        <text x={X(0)} y={170} style={{ fill: "var(--text-muted)", fontSize: 11 }}>P (dark) and N (light) partition [0, 1]</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ν⁺([0, 1]) = ν(P) = {pos.toFixed(4)}. ν⁻([0, 1]) = −ν(N) = {neg.toFixed(4)}. ν([0, 1]) = {(pos - neg).toFixed(4)}. |ν|([0, 1]) = {(pos + neg).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Every measurable subset of P has ν ≥ 0, and every measurable subset of N has ν ≤ 0: a Hahn decomposition. Then
        ν⁺(A) = ν(A ∩ P) and ν⁻(A) = −ν(A ∩ N) are mutually singular measures with ν = ν⁺ − ν⁻, the Jordan decomposition.
      </figcaption>
    </figure>
  );
}
