"use client";

import { useState } from "react";

type C = { name: string; P: number[][]; note: string };
const CS: C[] = [
  { name: "regular", P: [[0.5, 0.5, 0], [0.25, 0.5, 0.25], [0, 0.5, 0.5]], note: "Every state can reach every other, and the chain is aperiodic, so all starts converge to one stationary distribution." },
  { name: "periodic", P: [[0, 1, 0], [0.5, 0, 0.5], [0, 1, 0]], note: "The chain alternates between the middle and the ends, so the distribution oscillates for ever and never settles, though a stationary distribution exists." },
  { name: "reducible", P: [[1, 0, 0], [0.25, 0.5, 0.25], [0, 0, 1]], note: "The two end states trap the chain. Different starts end in different limits, so the long-run behaviour depends on where you begin." },
];
const N = 30;

/** Convergence to equilibrium: the probability of being in state 1 over time, from two different starting states. */
export function ChainConvergenceViz() {
  const [ci, setCi] = useState(0);
  const P = CS[ci].P;
  const run = (s: number) => {
    let v: number[] = [0, 1, 2].map((i) => (i === s ? 1 : 0));
    const out = [v];
    for (let k = 0; k < N; k++) { v = [0, 1, 2].map((j) => v.reduce((t, vi, i) => t + vi * P[i][j], 0)); out.push(v); }
    return out;
  };
  const r0 = run(0), r2 = run(2);
  const W = 520, H = 200, pad = 30;
  const X = (n: number) => pad + (n / N) * (W - 2 * pad);
  const Y = (p: number) => H - 22 - p * (H - 40);
  const line = (rs: number[][], j: number) => rs.map((v, n) => `${n ? "L" : "M"}${X(n).toFixed(1)},${Y(v[j]).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Chain">
        {CS.map((c, i) => <button key={c.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{c.name}</button>)}
      </div>
      <table className="table mono" style={{ width: "auto", margin: "8px auto" }}>
        <tbody>{P.map((r, i) => <tr key={i}><td>state {i + 1}</td>{r.map((p, j) => <td key={j}>{p}</td>)}</tr>)}</tbody>
      </table>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability of being in the first state over time from two starts" style={{ width: "100%", display: "block" }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={pad} y1={Y(1)} x2={W - pad} y2={Y(1)} style={{ stroke: "var(--border)", strokeDasharray: "2 3" }} />
        <path d={line(r0, 0)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={line(r2, 0)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        {[0, 10, 20, 30].map((n) => <text key={n} x={X(n)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{n}</text>)}
        <text x={pad - 6} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>1</text>
        <text x={pad - 6} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        P(state 1 after {N} steps): starting in state 1 → {r0[N][0].toFixed(3)}; starting in state 3 → {r2[N][0].toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        The solid curve starts in state 1, the dashed one in state 3; both plot the chance of being in state 1 after n steps. {CS[ci].note}
      </figcaption>
    </figure>
  );
}
