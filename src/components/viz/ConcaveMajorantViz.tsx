"use client";

import { useState } from "react";

const N = 20;
const PAYOFFS = [
  { name: "two peaks", g: (x: number) => Math.max(0, 6 - 1.2 * Math.abs(x - 5), 9 - 1.5 * Math.abs(x - 15)) },
  { name: "call (x − 12)⁺", g: (x: number) => Math.max(0, x - 12) },
  { name: "wave", g: (x: number) => 3 + 2 * Math.sin(x / 1.6) + x / 8 },
];

/** Upper concave hull of the points (i, g(i)). */
function majorant(g: number[]): number[] {
  const hull: number[] = [];
  for (let i = 0; i < g.length; i++) {
    while (hull.length >= 2) {
      const a = hull[hull.length - 2], b = hull[hull.length - 1];
      if ((g[b] - g[a]) * (i - a) <= (g[i] - g[a]) * (b - a)) hull.pop(); else break;
    }
    hull.push(i);
  }
  const v = new Array(g.length).fill(0);
  for (let j = 0; j + 1 < hull.length; j++) {
    const a = hull[j], b = hull[j + 1];
    for (let i = a; i <= b; i++) v[i] = g[a] + ((g[b] - g[a]) * (i - a)) / (b - a);
  }
  return v;
}

/** Optimal stopping of a symmetric random walk on {0, …, 20}, absorbed at the ends: the value is the least concave majorant. */
export function ConcaveMajorantViz() {
  const [k, setK] = useState(0);
  const [x0, setX0] = useState(9);
  const g = Array.from({ length: N + 1 }, (_, i) => PAYOFFS[k].g(i));
  const v = majorant(g);
  const stop = g.map((gi, i) => Math.abs(gi - v[i]) < 1e-9);
  const top = Math.max(...v) * 1.1 + 0.5;
  const X0 = 30, W = 460, Y0 = 10, H = 150;
  const px = (i: number) => X0 + (i / N) * W;
  const py = (y: number) => Y0 + H - (y / top) * H;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="payoff">
        {PAYOFFS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>start x = {x0} <input type="range" min={0} max={N} step={1} value={x0} onChange={(e) => setX0(Number(e.target.value))} aria-label="starting position" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A payoff and its least concave majorant" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={py(0)} x2={X0 + W} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={v.map((y, i) => `${px(i)},${py(y)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <polyline points={g.map((y, i) => `${px(i)},${py(y)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.3, strokeDasharray: "4 3" }} />
        {g.map((y, i) => <circle key={i} cx={px(i)} cy={py(y)} r={4} style={{ fill: stop[i] ? "var(--danger)" : "var(--bg-subtle)", stroke: stop[i] ? "var(--danger)" : "var(--text-muted)" }} />)}
        <line x1={px(x0)} y1={Y0} x2={px(x0)} y2={Y0 + H} style={{ stroke: "var(--success)", strokeDasharray: "3 3" }} />
        {[0, 5, 10, 15, 20].map((i) => <text key={i} x={px(i)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i}</text>)}
        <text x={X0 + 4} y={Y0 + 12} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: value v, the least concave majorant</text>
        <text x={X0 + 4} y={Y0 + 28} style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: payoff g; red dots: stop here</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        From x = {x0}: stop now for {g[x0].toFixed(2)}, or play on for value {v[x0].toFixed(2)}. Optimal: {stop[x0] ? "stop" : "continue until the walk reaches a red point"}.
      </p>
      <figcaption className="viz-caption">
        A symmetric random walk moves one step left or right each turn, and you may stop whenever you like and collect
        g(x). The value function is the smallest concave function lying above g: concave because v(x) must be at least
        the average of its neighbours, and above g because you can always stop. It is optimal to stop exactly where v = g.
      </figcaption>
    </figure>
  );
}
