"use client";

import { useState } from "react";

/** Binomial probabilities for N fair coins, computed in log space. */
export function binom(n: number) {
  const lf = [0];
  for (let i = 1; i <= n; i++) lf.push(lf[i - 1] + Math.log(i));
  return Array.from({ length: n + 1 }, (_, k) => Math.exp(lf[n] - lf[k] - lf[n - k] - n * Math.log(2)));
}

export function nearHalf(n: number) {
  return binom(n).reduce((s, p, k) => (k / n >= 0.4 - 1e-9 && k / n <= 0.6 + 1e-9 ? s + p : s), 0);
}

export function TypicalityViz() {
  const [n, setN] = useState(20);
  const p = binom(n);
  const max = Math.max(...p);
  const frac = nearHalf(n);
  const W = 470 / (n + 1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>particles N = {n} <input type="range" min={10} max={400} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 180" role="img" aria-label="The share of microstates with each number of particles on the left" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={40 + 0.4 * n * W} y={10} width={(0.2 * n + 1) * W} height={140} style={{ fill: "var(--success-soft)" }} />
        {p.map((q, k) => <rect key={k} x={40 + k * W} y={150 - (q / max) * 130} width={Math.max(1, W - 1)} height={(q / max) * 130} style={{ fill: k / n >= 0.4 && k / n <= 0.6 ? "var(--accent)" : "var(--text-faint)" }} />)}
        <line x1={40} y1={150} x2={510} y2={150} style={{ stroke: "var(--border-strong)" }} />
        <text x={40} y={168} style={{ fill: "var(--text-muted)", fontSize: 11 }}>0 on the left</text>
        <text x={510} y={168} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>all {n} on the left</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        With N = {n}, a fraction {frac.toFixed(3)} of all microstates have between 40 and 60 per cent of the particles on the left.
      </p>
      <figcaption className="viz-caption">
        Each arrangement of particles between the halves is one microstate, counted equally. As N grows, almost all of
        them crowd into the macrostate &lsquo;about half on each side&rsquo;. For a real gas, with N near 10²³, the
        exceptions are a vanishing fraction: equilibrium is typical.
      </figcaption>
    </figure>
  );
}
