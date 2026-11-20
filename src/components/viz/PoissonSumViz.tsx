"use client";

import { useState } from "react";

/** Both sides of the Poisson summation formula for f(x) = exp(−x²/2s²), with f̂(ξ) = s√(2π) exp(−s²ξ²/2). */
export function poissonSides(s: number) {
  let L = 0, R = 0;
  for (let n = -200; n <= 200; n++) L += Math.exp(-(n * n) / (2 * s * s));
  for (let k = -200; k <= 200; k++) R += s * Math.sqrt(2 * Math.PI) * Math.exp(-(s * s * (2 * Math.PI * k) ** 2) / 2);
  return { L, R };
}

export function PoissonSumViz() {
  const [s, setS] = useState(1);
  const { L, R } = poissonSides(s);
  const f = (x: number) => Math.exp(-(x * x) / (2 * s * s));
  const F0 = s * Math.sqrt(2 * Math.PI);
  const Fh = (w: number) => Math.exp(-(s * s * w * w) / 2);
  const fx = (x: number) => 20 + ((x + 6) / 12) * 230, fy = (v: number) => 200 - v * 140;
  const gx = (w: number) => 290 + ((w + 20) / 40) * 230, gy = (v: number) => 200 - v * 140;
  const curve = (h: (t: number) => number, lo: number, hi: number, X: (t: number) => number, Y: (v: number) => number) => Array.from({ length: 301 }, (_, i) => lo + (i / 300) * (hi - lo)).map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(h(t)).toFixed(1)}`).join("");
  const termsL = Array.from({ length: 13 }, (_, i) => i - 6);
  const termsR = [-3, -2, -1, 0, 1, 2, 3];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>width s = {s.toFixed(2)} <input type="range" min={0.2} max={3} step={0.1} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="width" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Poisson summation for a Gaussian" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={200} x2={250} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve(f, -6, 6, fx, fy)} style={{ fill: "none", stroke: "var(--text-faint)" }} />
        {termsL.map((n) => <g key={n}><line x1={fx(n)} y1={200} x2={fx(n)} y2={fy(f(n))} style={{ stroke: "var(--accent)", strokeWidth: 2 }} /><circle cx={fx(n)} cy={fy(f(n))} r={3} style={{ fill: "var(--accent)" }} /></g>)}
        <text x={20} y={30} style={{ fill: "var(--accent)", fontSize: 11 }}>f sampled at the integers</text>
        {[-6, 0, 6].map((x) => <text key={x} x={fx(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <line x1={290} y1={200} x2={520} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve(Fh, -20, 20, gx, gy)} style={{ fill: "none", stroke: "var(--text-faint)" }} />
        {termsR.map((k) => { const w = 2 * Math.PI * k; return <g key={k}><line x1={gx(w)} y1={200} x2={gx(w)} y2={gy(Fh(w))} style={{ stroke: "var(--success)", strokeWidth: 2 }} /><circle cx={gx(w)} cy={gy(Fh(w))} r={3} style={{ fill: "var(--success)" }} /></g>; })}
        <text x={290} y={30} style={{ fill: "var(--success)", fontSize: 11 }}>f̂ sampled at multiples of 2π (scaled by 1/{F0.toFixed(2)})</text>
        {[-2, 0, 2].map((k) => <text key={k} x={gx(2 * Math.PI * k)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k === 0 ? "0" : `${k < 0 ? "−" : ""}4π`}</text>)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∑ f(n) = {L.toFixed(6)}; ∑ f̂(2πk) = {R.toFixed(6)}.
      </p>
      <figcaption className="viz-caption">
        The Poisson summation formula ∑ f(n) = ∑ f̂(2πk) says the Fourier transform of the Dirac comb, a point mass at each integer, is 2π
        times the comb of point masses at the multiples of 2π: an identity between tempered distributions. A wide Gaussian needs many samples on the left but almost
        only the k = 0 term on the right, and a narrow one the reverse.
      </figcaption>
    </figure>
  );
}
