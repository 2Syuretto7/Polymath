"use client";

import { useState } from "react";

const RV = [
  { name: "a die: ⌈6ω⌉", f: (w: number) => Math.max(1, Math.ceil(6 * w)), max: 6.5, ticks: [1, 2, 3, 4, 5, 6] },
  { name: "ω²", f: (w: number) => w * w, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1] },
  { name: "exponential: −ln(1 − ω)", f: (w: number) => -Math.log(1 - Math.min(w, 0.999)), max: 5, ticks: [0, 1, 2, 3, 4, 5] },
];

/** A random variable is a function on the sample space; its law is the pushforward of P. */
export function RVPushViz() {
  const [k, setK] = useState(1);
  const [x, setX] = useState(25);
  const R = RV[k];
  const xv = (x / 100) * R.max;
  const N = 400;
  const ws = Array.from({ length: N }, (_, i) => (i + 0.5) / N);
  const F = ws.filter((w) => R.f(w) <= xv + 1e-9).length / N;
  const GX = 30, GW = 200, GY = 180, GH = 150;
  const px = (w: number) => GX + w * GW;
  const py = (v: number) => GY - (Math.min(v, R.max) / R.max) * GH;
  const pts = ws.map((w) => `${px(w)},${py(R.f(w))}`).join(" ");
  // the set {ω : X(ω) ≤ x} as runs of grid points
  const runs: [number, number][] = [];
  ws.forEach((w, i) => {
    if (R.f(w) <= xv + 1e-9) {
      const a = i / N, b = (i + 1) / N;
      if (runs.length && Math.abs(runs[runs.length - 1][1] - a) < 1e-9) runs[runs.length - 1][1] = b; else runs.push([a, b]);
    }
  });
  const HX = 290, HW = 210;
  const cdf = Array.from({ length: 101 }, (_, i) => {
    const v = (i / 100) * R.max;
    return `${HX + (i / 100) * HW},${GY - (ws.filter((w) => R.f(w) <= v + 1e-9).length / N) * GH}`;
  }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="random variable">
        {RV.map((r, i) => <button key={r.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{r.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>x = {xv.toFixed(2)} <input type="range" min={0} max={100} value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="x" /></label>
      </div>
      <svg viewBox="0 0 520 215" role="img" aria-label="The graph of X on the sample space and its distribution function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={GX} y={18} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>X on Ω = [0, 1]</text>
        <line x1={GX} y1={GY} x2={GX + GW} y2={GY} style={{ stroke: "var(--border-strong)" }} />
        <line x1={GX} y1={GY} x2={GX} y2={GY - GH} style={{ stroke: "var(--border-strong)" }} />
        <line x1={GX} y1={py(xv)} x2={GX + GW} y2={py(xv)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <polyline points={pts} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {runs.map(([a, b], i) => <rect key={i} x={px(a)} y={GY + 3} width={(b - a) * GW} height={6} style={{ fill: "var(--danger)" }} />)}
        <text x={GX} y={GY + 24} style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={GX + GW} y={GY + 24} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
        <text x={HX} y={18} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>F(x) = P(X ≤ x)</text>
        <line x1={HX} y1={GY} x2={HX + HW} y2={GY} style={{ stroke: "var(--border-strong)" }} />
        <line x1={HX} y1={GY} x2={HX} y2={GY - GH} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={cdf} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={HX + (x / 100) * HW} y1={GY} x2={HX + (x / 100) * HW} y2={GY - F * GH} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <circle cx={HX + (x / 100) * HW} cy={GY - F * GH} r={4} style={{ fill: "var(--danger)" }} />
        {R.ticks.map((t) => <text key={t} x={HX + (t / R.max) * HW} y={GY + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
        <text x={HX - 4} y={GY - GH + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The red set {"{ω : X(ω) ≤ x}"} has length {F.toFixed(2)}, so F({xv.toFixed(2)}) = {F.toFixed(2)}.
      </p>
      <figcaption className="viz-caption">
        Here P is length on [0, 1]. A random variable X is a measurable function on Ω, and its distribution is the measure
        that gives each set B the probability P(X ∈ B), the size of the preimage. The distribution function records it on
        the sets (−∞, x].
      </figcaption>
    </figure>
  );
}
