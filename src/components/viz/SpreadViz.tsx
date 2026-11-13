"use client";

import { useState } from "react";

/** A three-point distribution: mean m, spread s, tail weight q. Variance is q s², unchanged by shifting. */
export function SpreadViz() {
  const [m, setM] = useState(5);
  const [s, setS] = useState(2);
  const [q, setQ] = useState(0.5);
  const vals: [number, number][] = [[m - s, q / 2], [m, 1 - q], [m + s, q / 2]];
  const ex2 = vals.reduce((t, [x, p]) => t + x * x * p, 0);
  const v = q * s * s, sd = Math.sqrt(v);
  const W = 520, H = 200, pad = 30;
  const X = (x: number) => pad + (x / 10) * (W - 2 * pad);
  const Y = (p: number) => H - 25 - p * (H - 50);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>mean m: <span className="mono">{m}</span></span>
          <input type="range" min={4} max={6} step={0.5} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
        <label><span>distance from the mean s: <span className="mono">{s}</span></span>
          <input type="range" min={0} max={4} step={0.5} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
        <label><span>weight in the tails q: <span className="mono">{q.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={q} onChange={(e) => setQ(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability mass function with one standard deviation marked" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <rect x={X(m - sd)} y={12} width={Math.max(X(m + sd) - X(m - sd), 0)} height={H - 37} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5 }} />
        <line x1={pad} y1={H - 25} x2={W - pad} y2={H - 25} style={{ stroke: "var(--border)" }} />
        {Array.from({ length: 11 }, (_, k) => <text key={k} x={X(k)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{k}</text>)}
        {vals.map(([x, p], k) => p > 0 && <rect key={k} x={X(x) - 6} y={Y(p)} width={12} height={H - 25 - Y(p)} style={{ fill: "var(--accent)" }} />)}
        <line x1={X(m)} y1={10} x2={X(m)} y2={H - 25} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        E(X) = {m.toFixed(2)}; E(X²) = {ex2.toFixed(2)}; Var(X) = E(X²) − E(X)² = {v.toFixed(2)}; SD = {sd.toFixed(2)}
      </p>
      <figcaption className="viz-caption">
        X takes the values m − s and m + s with probability q/2 each, and m otherwise. The shaded band is one standard deviation either side of the mean. Moving the mean shifts everything but leaves the variance q s² alone; doubling s quadruples the variance but only doubles the standard deviation.
      </figcaption>
    </figure>
  );
}
