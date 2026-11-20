"use client";

import { useState } from "react";

const RAW = (s: number) => (Math.abs(s) < 1 ? Math.exp(-1 / (1 - s * s)) : 0);
const NORM = (() => { let t = 0; for (let i = 0; i < 2000; i++) { const s = -1 + (2 * (i + 0.5)) / 2000; t += RAW(s); } return (t * 2) / 2000; })();

/** The mollification of u by the standard bump of radius ε, computed numerically. */
export function mollify(u: (x: number) => number, x: number, eps: number) {
  let t = 0;
  const N = 400;
  for (let i = 0; i < N; i++) { const s = -1 + (2 * (i + 0.5)) / N; t += (RAW(s) / NORM) * u(x - eps * s); }
  return (t * 2) / N;
}

export const MFUNCS = [
  { label: "u(x) = |x|", u: (x: number) => Math.abs(x) },
  { label: "u(x) = step at 0", u: (x: number) => (x > 0 ? 1 : 0) },
];

export function MollifierViz() {
  const [k, setK] = useState(1);
  const [eps, setEps] = useState(0.4);
  const F = MFUNCS[k];
  const X = (x: number) => 270 + x * 230;
  const Y = (y: number) => 150 - y * 110;
  const xs = Array.from({ length: 201 }, (_, i) => -1 + i * 0.01);
  let gap = 0;
  let l1 = 0;
  xs.forEach((x) => { const d = Math.abs(mollify(F.u, x, eps) - F.u(x)); gap = Math.max(gap, d); l1 += d * 0.01; });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {MFUNCS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>ε = {eps.toFixed(2)} <input type="range" min={0.05} max={0.6} step={0.05} value={eps} onChange={(e) => setEps(Number(e.target.value))} aria-label="eps" /></label>
      </div>
      <svg viewBox="0 0 540 175" role="img" aria-label="The function and its mollification" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={Y(0)} x2={510} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={20} x2={X(0)} y2={165} style={{ stroke: "var(--grid-line)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(F.u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(mollify(F.u, x, eps))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <rect x={X(-eps)} y={Y(0) + 6} width={X(eps) - X(-eps)} height={6} rx={3} style={{ fill: "var(--accent-soft)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ε = {eps.toFixed(2)}: largest gap {gap.toFixed(2)}, integral of the gap {l1.toFixed(3)}. {k === 1 ? "The gap at 0 stays 1/2, but its integral shrinks with ε." : "Both shrink with ε, and so does the error in the derivative, in Lᵖ for p < ∞."}
      </p>
      <figcaption className="viz-caption">
        The mollification uᵋ averages u over a window of radius ε, shaded, with weights from a smooth bump. It is smooth for
        every ε &gt; 0, and as ε shrinks it converges to u in Lᵖ for every p &lt; ∞, though not uniformly across a jump.
      </figcaption>
    </figure>
  );
}
