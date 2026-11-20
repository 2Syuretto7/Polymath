"use client";

import { useMemo, useState } from "react";

export const MAPS = [
  { label: "Doubling map", f: (x: number) => (2 * x) % 1, d: () => 2 },
  { label: "Logistic, r = 4", f: (x: number) => 4 * x * (1 - x), d: (x: number) => 4 * (1 - 2 * x) },
  { label: "Logistic, r = 3.7", f: (x: number) => 3.7 * x * (1 - x), d: (x: number) => 3.7 * (1 - 2 * x) },
  { label: "Logistic, r = 3.2", f: (x: number) => 3.2 * x * (1 - x), d: (x: number) => 3.2 * (1 - 2 * x) },
];
const N = 2000, SKIP = 100;

/** Running averages of log |f′(x_k)| along an orbit, after discarding a transient. */
export function runningAverage(m: number, x0: number) {
  const { f, d } = MAPS[m];
  let x = x0;
  for (let i = 0; i < SKIP; i++) x = f(x);
  const out: number[] = [];
  let s = 0;
  for (let k = 1; k <= N; k++) {
    s += Math.log(Math.max(Math.abs(d(x)), 1e-12));
    x = f(x);
    out.push(s / k);
  }
  return out;
}

/** The Lyapunov exponent as the average rate at which a map stretches tangent vectors along an orbit. */
export function TangentGrowthViz() {
  const [m, setM] = useState(1);
  const [x0, setX0] = useState(0.3);
  const avg = useMemo(() => runningAverage(m, x0), [m, x0]);
  const px = (k: number) => 50 + (k / N) * 460, py = (v: number) => 110 - v * 80;
  const last = avg[N - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Map">
        {MAPS.map((g, i) => <button key={g.label} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{g.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>starting point = {x0.toFixed(2)} <input type="range" min={0.05} max={0.95} step={0.05} value={x0} onChange={(e) => setX0(Number(e.target.value))} aria-label="starting point" /></label>
      </div>
      <svg viewBox="0 0 540 210" role="img" aria-label="Running average of the logarithm of the derivative along an orbit" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[-1, -0.5, 0, 0.5, 1].map((v) => (
          <g key={v}>
            <line x1={50} y1={py(v)} x2={510} y2={py(v)} style={{ stroke: v === 0 ? "var(--border-strong)" : "var(--grid-line)" }} />
            <text x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>
          </g>
        ))}
        <line x1={50} y1={py(Math.LN2)} x2={510} y2={py(Math.LN2)} style={{ stroke: "var(--success)", strokeDasharray: "5 3" }} />
        <text x={506} y={py(Math.LN2) - 5} textAnchor="end" style={{ fill: "var(--success)", fontSize: 10 }}>log 2</text>
        <path d={avg.filter((_, i) => i % 4 === 0).map((v, i) => `${i ? "L" : "M"}${px(i * 4 + 1).toFixed(1)},${py(Math.max(-1.25, Math.min(1.25, v))).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {[0, 500, 1000, 1500, 2000].map((k) => <text key={k} x={px(k)} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        After {N} steps the average of log |f′| is {last.toFixed(3).replace("-", "−")}: {last > 0.01 ? "nearby orbits separate exponentially (chaos)." : "nearby orbits converge (a stable cycle)."}
      </p>
      <figcaption className="viz-caption">
        The derivative of the n-th iterate is the product of the derivatives along the orbit, so its logarithm divided by n
        is the running average plotted here. The limit is the Lyapunov exponent. It is log 2 for the doubling map and for
        the logistic map at r = 4, about 0.354 at r = 3.7, and negative at r = 3.2, where orbits settle on a cycle of period two. A few starting points, such as 0.5 at r = 4, land on an unstable fixed point and give a different average; the theorem speaks of almost every start.
      </figcaption>
    </figure>
  );
}
