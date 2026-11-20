"use client";

import { useState } from "react";

const N = 2000, PATHS = 12;
function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Running proportions of heads for twelve sequences of fair tosses, against a band of width ε around 1/2. */
export function LLNPathViz() {
  const [e100, setE100] = useState(5);
  const [n, setN] = useState(500);
  const [seed, setSeed] = useState(3);
  const eps = e100 / 100;
  const r = rng(seed);
  const paths: number[][] = Array.from({ length: PATHS }, () => {
    let h = 0;
    return Array.from({ length: N }, (_, i) => { if (r() < 0.5) h++; return h / (i + 1); });
  });
  const X0 = 40, W = 460, Y0 = 20, H = 160;
  const x = (k: number) => X0 + (Math.log(k) / Math.log(N)) * W;
  const y = (m: number) => Y0 + H / 2 - (m - 0.5) * H * 0.9;
  const outside = paths.filter((p) => Math.abs(p[n - 1] - 0.5) > eps).length;
  const staysIn = paths.filter((p) => p.slice(n - 1).every((m) => Math.abs(m - 0.5) <= eps)).length;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>ε = {eps.toFixed(2)} <input type="range" min={1} max={20} value={e100} onChange={(e) => setE100(Number(e.target.value))} aria-label="epsilon" /></label>
        <label>n = {n} <input type="range" min={10} max={N} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new sample</button>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Running proportions of heads" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={y(0.5 + eps)} width={W} height={y(0.5 - eps) - y(0.5 + eps)} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X0} y1={y(0.5)} x2={X0 + W} y2={y(0.5)} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        {paths.map((p, j) => (
          <polyline key={j} points={p.filter((_, i) => i < 30 || i % 5 === 0).map((m, i0) => { const i = i0 < 30 ? i0 : 30 + (i0 - 30) * 5; return `${x(i + 1)},${y(m)}`; }).join(" ")} style={{ fill: "none", stroke: Math.abs(p[n - 1] - 0.5) > eps ? "var(--danger)" : "var(--accent)", strokeWidth: 1, opacity: 0.8 }} />
        ))}
        <line x1={x(n)} y1={Y0} x2={x(n)} y2={Y0 + H} style={{ stroke: "var(--text)", strokeWidth: 1.5 }} />
        {[1, 10, 100, 1000].map((k) => <text key={k} x={x(k)} y={Y0 + H + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>)}
        <text x={X0 - 6} y={y(0.5) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1/2</text>
        <text x={X0 - 6} y={y(1) + 8} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
        <text x={X0 - 6} y={y(0) } textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At n = {n}: {outside} of {PATHS} paths lie outside the band. From n on, {staysIn} of {PATHS} stay inside up to 2000.
      </p>
      <figcaption className="viz-caption">
        The weak law says the chance of being outside the band at a fixed large n tends to 0. The strong law says more:
        almost every single path eventually enters the band and never leaves it. Red paths are outside the band at n.
      </figcaption>
    </figure>
  );
}
