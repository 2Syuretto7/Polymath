"use client";

import { useState } from "react";

const noMatch = (n: number) => { let q = 1; for (let k = 0; k < n; k++) q *= (365 - k) / 365; return q; };

/** The birthday problem: the chance that some two of n people share a birthday. */
export function BirthdayViz() {
  const [n, setN] = useState(23);
  const W = 520, H = 220, N = 70;
  const X = (k: number) => 40 + (k / N) * (W - 60);
  const Y = (p: number) => 10 + (1 - p) * (H - 40);
  const path = Array.from({ length: N + 1 }, (_, k) => `${k ? "L" : "M"}${X(k).toFixed(1)},${Y(1 - noMatch(k)).toFixed(1)}`).join(" ");
  const pm = 1 - noMatch(n);
  const pairs = (n * (n - 1)) / 2;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>number of people n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={N} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability of a shared birthday against the number of people" style={{ width: "100%", display: "block" }}>
        <line x1={X(0)} y1={Y(0)} x2={X(N)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0.5)} x2={X(N)} y2={Y(0.5)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 4" }} />
        {[0, 10, 20, 30, 40, 50, 60, 70].map((k) => <text key={k} x={X(k)} y={H - 12} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{k}</text>)}
        {[0, 0.5, 1].map((q) => <text key={q} x={X(0) - 6} y={Y(q) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{q}</text>)}
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(n)} y1={Y(0)} x2={X(n)} y2={Y(pm)} style={{ stroke: "var(--text-muted)", strokeDasharray: "2 3" }} />
        <circle cx={X(n)} cy={Y(pm)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        P(no shared birthday) = (365 · 364 · … · {365 - n + 1}) / 365^{n} = {noMatch(n).toFixed(4)}
      </p>
      <p className="mono" style={{ margin: "4px 0" }}>
        P(some shared birthday) = {pm.toFixed(4)}; pairs of people: {pairs}
      </p>
      <figcaption className="viz-caption">
        Ignoring leap years and assuming all 365 days are equally likely, count the ways n people can all have different birthdays and divide by the 365ⁿ equally likely outcomes. The chance of a match passes one half at only 23 people: intuition counts people, but what matters is the number of pairs, which grows like n².
      </figcaption>
    </figure>
  );
}
