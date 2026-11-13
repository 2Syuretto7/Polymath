"use client";

import { useState } from "react";

type RV = { name: string; vals: number[]; probs: number[] };
const dice = (f: (a: number, b: number) => number): RV => {
  const m = new Map<number, number>();
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) { const v = f(a, b); m.set(v, (m.get(v) ?? 0) + 1 / 36); }
  const vals = [...m.keys()].sort((x, y) => x - y);
  return { name: "", vals, probs: vals.map((v) => m.get(v)!) };
};
const heads4: RV = { name: "heads in 4 tosses", vals: [0, 1, 2, 3, 4], probs: [1, 4, 6, 4, 1].map((c) => c / 16) };
const RVS: RV[] = [
  { ...dice((a, b) => a + b), name: "sum of two dice" },
  { ...dice((a, b) => Math.max(a, b)), name: "larger of two dice" },
  { ...dice((a, b) => Math.abs(a - b)), name: "difference of two dice" },
  heads4,
];

/** The distribution of a random variable: probability mass function and cumulative distribution function. */
export function PmfCdfViz() {
  const [ri, setRi] = useState(0);
  const [x, setX] = useState(7);
  const R = RVS[ri];
  const lo = R.vals[0] - 1, hi = R.vals[R.vals.length - 1] + 1;
  const xx = Math.min(Math.max(x, lo), hi);
  const F = (t: number) => R.vals.reduce((s, v, i) => s + (v <= t ? R.probs[i] : 0), 0);
  const W = 520, H = 150, pad = 30;
  const X = (v: number) => pad + ((v - lo) / (hi - lo)) * (W - 2 * pad);
  const maxp = Math.max(...R.probs);
  const Yp = (p: number) => H - 20 - (p / maxp) * (H - 40);
  const Yc = (p: number) => H - 20 - p * (H - 40);
  const steps: string[] = [];
  let prev = 0;
  steps.push(`M${X(lo)},${Yc(0)}`);
  R.vals.forEach((v, i) => { steps.push(`L${X(v)},${Yc(prev)}`); prev += R.probs[i]; steps.push(`M${X(v)},${Yc(prev)}`); });
  steps.push(`L${X(hi)},${Yc(1)}`);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Random variable">
        {RVS.map((r, i) => <button key={r.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{r.name}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>x: <span className="mono">{xx}</span></span>
          <input type="range" min={lo} max={hi} step={0.5} value={xx} onChange={(e) => setX(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability mass function" style={{ width: "100%", display: "block" }}>
        <line x1={pad} y1={H - 20} x2={W - pad} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {R.vals.map((v, i) => (
          <g key={v}>
            <line x1={X(v)} y1={H - 20} x2={X(v)} y2={Yp(R.probs[i])} style={{ stroke: v <= xx ? "var(--accent)" : "var(--text-faint)", strokeWidth: 6 }} />
            <text x={X(v)} y={H - 5} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{v}</text>
          </g>
        ))}
        <line x1={X(xx)} y1={10} x2={X(xx)} y2={H - 20} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
      </svg>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cumulative distribution function" style={{ width: "100%", display: "block" }}>
        <line x1={pad} y1={H - 20} x2={W - pad} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <line x1={pad} y1={Yc(1)} x2={W - pad} y2={Yc(1)} style={{ stroke: "var(--border)", strokeDasharray: "2 4" }} />
        <path d={steps.join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {R.vals.map((v) => <circle key={v} cx={X(v)} cy={Yc(F(v))} r={3} style={{ fill: "var(--accent)" }} />)}
        <circle cx={X(xx)} cy={Yc(F(xx))} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>P(X ≤ {xx}) = F({xx}) = {F(xx).toFixed(4)}</p>
      <figcaption className="viz-caption">
        Top: the probability mass function, P(X = k) for each value k. Bottom: the cumulative distribution function F(x) = P(X ≤ x), which adds up the bars to the left of x, shown in the main colour. F jumps at each possible value by the probability of that value, and is flat in between.
      </figcaption>
    </figure>
  );
}
