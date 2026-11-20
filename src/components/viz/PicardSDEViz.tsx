"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const b = (x: number) => 1.5 * Math.sin(x);
const s = (x: number) => 0.5 * Math.cos(x);

/** Picard iteration for dX = 1.5 sin X dt + 0.5 cos X dB along one Brownian path. */
export function PicardSDEViz() {
  const [k, setK] = useState(2);
  const [seed, setSeed] = useState(1);
  const N = 1000, T = 1, dt = T / N, x0 = 1;
  const r = seededRng(seed * 557 + 9);
  const dB = Array.from({ length: N }, () => Math.sqrt(dt) * normalDraw(r));
  const its: number[][] = [new Array(N + 1).fill(x0)];
  for (let j = 1; j <= 10; j++) {
    const p = its[j - 1], q = [x0];
    for (let i = 0; i < N; i++) q.push(q[i] + b(p[i]) * dt + s(p[i]) * dB[i]);
    its.push(q);
  }
  const sup = (j: number) => Math.max(...its[j].map((v, i) => Math.abs(v - its[j - 1][i])));
  const all = its.slice(0, 11).flat();
  const hi = Math.max(...all) + 0.2, lo = Math.min(...all) - 0.2;
  const X0 = 30, W = 460, Y0 = 10, H = 170;
  const x = (i: number) => X0 + (i / N) * W;
  const y = (v: number) => Y0 + ((hi - v) / (hi - lo)) * H;
  const pl = (a: number[]) => a.filter((_, i) => i % 5 === 0).map((v, i) => `${x(i * 5)},${y(v)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>iterate k = {k} <input type="range" min={0} max={10} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="iterate" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Successive Picard iterates of a stochastic differential equation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {its.slice(0, k).map((a, j) => <polyline key={j} points={pl(a)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        <polyline points={pl(its[k])} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <text x={X0 + 6} y={Y0 + 12} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: iterate X⁽ᵏ⁾</text>
        <text x={X0 + 6} y={Y0 + 28} style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: earlier iterates</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {k === 0 ? "X⁽⁰⁾ is the constant 1." : `sup over [0, 1] of |X⁽ᵏ⁾ − X⁽ᵏ⁻¹⁾| = ${sup(k).toExponential(2)}`}
      </p>
      <figcaption className="viz-caption">
        Each iterate feeds the previous one into the coefficients: X⁽ᵏ⁺¹⁾ = 1 + ∫ 1.5 sin X⁽ᵏ⁾ ds + ∫ 0.5 cos X⁽ᵏ⁾ dB, with the
        same Brownian path throughout. Because the coefficients are Lipschitz, the gaps shrink roughly like Cᵏ/k!, and the
        iterates converge to the unique solution.
      </figcaption>
    </figure>
  );
}
