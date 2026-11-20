"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const N = 2 ** 14;
const MODES = [
  { name: "left endpoint (Itô)", w: 0 },
  { name: "midpoint average (Stratonovich)", w: 0.5 },
  { name: "right endpoint", w: 1 },
];

/** Riemann sums for ∫₀¹ B dB depend on where the integrand is evaluated. */
export function ItoSumViz() {
  const [mode, setMode] = useState(0);
  const [k, setK] = useState(6);
  const r = seededRng(17);
  const B = [0];
  for (let i = 0; i < N; i++) B.push(B[i] + normalDraw(r) / Math.sqrt(N));
  const B1 = B[N];
  const sums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((kk) => {
    const m = 2 ** kk, st = N / m, w = MODES[mode].w;
    let s = 0;
    for (let j = 0; j < m; j++) { const a = B[j * st], b = B[(j + 1) * st]; s += ((1 - w) * a + w * b) * (b - a); }
    return s;
  });
  const target = B1 * B1 / 2 + (MODES[mode].w - 0.5);
  const X0 = 40, W = 450, Y0 = 12, H = 150;
  const vals = [...sums, B1 * B1 / 2 - 0.5, B1 * B1 / 2 + 0.5];
  const lo = Math.min(...vals) - 0.15, hi = Math.max(...vals) + 0.15;
  const x = (kk: number) => X0 + ((kk - 1) / 13) * W;
  const y = (v: number) => Y0 + ((hi - v) / (hi - lo)) * H;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="evaluation point" style={{ flexWrap: "wrap" }}>
        {MODES.map((m, i) => <button key={m.name} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{m.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>mesh: {2 ** k} intervals <input type="range" min={1} max={14} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="mesh" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Riemann sums against the number of intervals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[[B1 * B1 / 2 - 0.5, "(B₁² − 1)/2"], [B1 * B1 / 2, "B₁²/2"], [B1 * B1 / 2 + 0.5, "(B₁² + 1)/2"]].map(([v, l]) => (
          <g key={l as string}>
            <line x1={X0} y1={y(v as number)} x2={X0 + W} y2={y(v as number)} style={{ stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />
            <text x={X0 + W - 2} y={y(v as number) - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{l}</text>
          </g>
        ))}
        <polyline points={sums.map((s, i) => `${x(i + 1)},${y(s)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={x(k)} cy={y(sums[k - 1])} r={5} style={{ fill: "var(--accent)" }} />
        <text x={X0} y={Y0 + H + 18} style={{ fill: "var(--text-muted)", fontSize: 10 }}>2 intervals</text>
        <text x={X0 + W} y={Y0 + H + 18} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>16 384 intervals</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Sum = {sums[k - 1].toFixed(4)}; limit = {target.toFixed(4)}; B₁ = {B1.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        For one Brownian path, sum f(tⱼ)(B(tⱼ₊₁) − B(tⱼ)) with f = B evaluated at the left end, the right end, or the average
        of the two. For a smooth path all three would agree. Here they differ by the quadratic variation: the left sums
        tend to (B₁² − 1)/2, the right sums to (B₁² + 1)/2.
      </figcaption>
    </figure>
  );
}
