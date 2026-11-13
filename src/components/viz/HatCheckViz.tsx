"use client";

import { useState } from "react";

function fixedPoints(n: number): number {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.filter((x, i) => x === i).length;
}

/** The hat-check problem: n hats are returned at random; by linearity the expected number of matches is always 1. */
export function HatCheckViz() {
  const [n, setN] = useState(10);
  const [counts, setCounts] = useState<number[]>([]);
  const run = (k: number) => { const c = [...counts]; for (let i = 0; i < k; i++) c.push(fixedPoints(n)); setCounts(c); };
  const hist = Array(8).fill(0) as number[];
  counts.forEach((c) => { hist[Math.min(c, 7)]++; });
  const avg = counts.length ? counts.reduce((s, x) => s + x, 0) / counts.length : 0;
  const W = 520, H = 170, pad = 30;
  const maxh = Math.max(...hist, 1);
  const X = (k: number) => pad + (k + 0.5) * ((W - 2 * pad) / 8);
  const Y = (v: number) => H - 20 - (v / maxh) * (H - 40);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>number of people n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={100} step={1} value={n} onChange={(e) => { setN(Number(e.target.value)); setCounts([]); }} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => run(1)}>Return the hats once</button>
        <button type="button" className="btn btn-primary" onClick={() => run(1000)}>Repeat 1000 times</button>
        <button type="button" className="btn" onClick={() => setCounts([])}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Histogram of the number of people who get their own hat" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={H - 20} x2={W - pad} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {hist.map((h, k) => (
          <g key={k}>
            <rect x={X(k) - 20} y={Y(h)} width={40} height={H - 20 - Y(h)} style={{ fill: "var(--accent)", fillOpacity: 0.8 }} />
            <text x={X(k)} y={H - 5} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{k === 7 ? "7+" : k}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        rounds: {counts.length}; last round matches: {counts.length ? counts[counts.length - 1] : "none yet"}; average matches: {counts.length ? avg.toFixed(3) : "none yet"}
      </p>
      <figcaption className="viz-caption">
        Let Iₖ be 1 if person k gets their own hat and 0 otherwise. Then E(Iₖ) = 1/n, and the number of matches is I₁ + ⋯ + Iₙ, so by linearity its expectation is n · 1/n = 1, for every n. The indicators are not independent, but linearity does not care. The histogram tends to the Poisson distribution with mean 1.
      </figcaption>
    </figure>
  );
}
