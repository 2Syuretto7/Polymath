"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Pólya's urn: the fraction of red balls is a bounded martingale, so each run converges, to a random limit. */
export function PolyaUrnViz() {
  const [seed, setSeed] = useState(3);
  const [lg, setLg] = useState(9);
  const n = 2 ** lg;
  const runs = Array.from({ length: 8 }, (_, j) => {
    const r = rng(seed * 101 + j);
    let red = 1, blue = 1;
    const f = [0.5];
    for (let k = 0; k < n; k++) { if (r() < red / (red + blue)) red++; else blue++; f.push(red / (red + blue)); }
    return f;
  });
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const x = (k: number) => X0 + (Math.log2(k + 1) / Math.log2(n + 1)) * W;
  const y = (v: number) => Y0 + (1 - v) * H;
  const step = Math.max(1, Math.floor(n / 400));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>draws n = {n} <input type="range" min={3} max={13} value={lg} onChange={(e) => setLg(Number(e.target.value))} aria-label="draws" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new runs</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Fraction of red balls over time in eight runs" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 0.5, 1].map((v) => <g key={v}><line x1={X0} y1={y(v)} x2={X0 + W} y2={y(v)} style={{ stroke: "var(--grid-line)" }} /><text x={X0 - 6} y={y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text></g>)}
        {runs.map((f, i) => <polyline key={i} points={f.filter((_, k) => k % step === 0 || k === n).map((v, k2) => { const k = Math.min(k2 * step, n); return `${x(k)},${y(v)}`; }).join(" ")} style={{ fill: "none", stroke: i % 2 ? "var(--accent)" : "var(--success)", strokeWidth: 1.5, opacity: 0.8 }} />)}
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>draw {n} (time on a log scale)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Final fractions: {runs.map((f) => f[n].toFixed(2)).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        An urn starts with one red and one blue ball. Draw a ball, return it with another of the same colour, and repeat.
        The fraction of red is a martingale bounded between 0 and 1, so each run settles down. But different runs settle at
        different values: starting from one of each, the limit is uniformly distributed on [0, 1].
      </figcaption>
    </figure>
  );
}
