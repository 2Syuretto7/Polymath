"use client";

import { useState } from "react";

/** Probability that more than half of n independent voters are right, each with probability q. */
const majority = (n: number, q: number) => {
  // pmf by recurrence in log space
  let logC = 0, s = 0;
  for (let k = 0; k <= n; k++) {
    if (k > 0) logC += Math.log((n - k + 1) / k);
    if (2 * k > n) s += Math.exp(logC + k * Math.log(q) + (n - k) * Math.log(1 - q));
  }
  return s;
};

/** Condorcet's jury theorem, and how deference to an opinion leader limits it. */
export function JuryTheoremViz() {
  const [p, setP] = useState(0.55);
  const [r, setR] = useState(0);
  const [n, setN] = useState(51);
  const prob = (m: number) => p * majority(m, r + (1 - r) * p) + (1 - p) * majority(m, (1 - r) * p);
  const ns = Array.from({ length: 101 }, (_, k) => 2 * k + 1);
  const W = 560, H = 230;
  const X = (m: number) => 40 + ((m - 1) / 200) * (W - 60), Y = (v: number) => 10 + (1 - v) * (H - 40);
  const curve = ns.map((m, k) => `${k ? "L" : "M"}${X(m).toFixed(1)},${Y(prob(m)).toFixed(1)}`).join(" ");
  const here = prob(n);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>each voter right with probability p: <span className="mono">{p.toFixed(2)}</span></span><input type="range" min={0.3} max={0.8} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>chance a voter just follows a leader: <span className="mono">{r.toFixed(2)}</span></span><input type="range" min={0} max={0.9} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>number of voters n: <span className="mono">{n}</span></span><input type="range" min={1} max={201} step={2} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability that the majority is right, against the number of voters" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={40} y1={Y(0)} x2={W - 20} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={40} y1={Y(0)} x2={40} y2={Y(1)} style={{ stroke: "var(--border)" }} />
        {[0, 0.5, 1].map((v) => (
          <g key={v}>
            <line x1={40} y1={Y(v)} x2={W - 20} y2={Y(v)} style={{ stroke: "var(--border)", strokeDasharray: v === 0.5 ? "4 4" : undefined }} />
            <text x={34} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>
          </g>
        ))}
        <line x1={40} y1={Y(p)} x2={W - 20} y2={Y(p)} style={{ stroke: "var(--text-muted)", strokeDasharray: "2 3" }} />
        <path d={curve} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(n)} cy={Y(here)} r={5} style={{ fill: "var(--text)" }} />
        <text x={(W + 20) / 2} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>number of voters, 1 to 201</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        probability the majority of {n} is right: {here.toFixed(4)} (a single voter: {p.toFixed(2)}, dotted line)
      </p>
      <figcaption className="viz-caption">
        With independent voters a little better than chance, the majority becomes almost certainly right as n grows; a little
        worse, and it becomes almost certainly wrong. When voters often just follow a leader who is right with probability p,
        their votes are no longer independent and the majority can never do much better than the leader.
      </figcaption>
    </figure>
  );
}
