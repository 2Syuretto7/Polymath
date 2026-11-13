"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const a = (n: number) => 2 + 1 / n;
const b = (n: number) => 3 - 2 / n;
const W = 520, H = 220, X0 = 40, X1 = 500, Y0 = 20, Y1 = 190;

/** The product rule for limits: a_n = 2 + 1/n → 2, b_n = 3 − 2/n → 3, so a_n b_n → 6. How far out must we go for each tolerance? */
export function ProductLimitViz() {
  const [e10, setE] = useState(-1);
  const eps = 10 ** e10;
  // first N with |a_n b_n − 6| < eps for all n ≥ N (the error is decreasing here)
  const err = (n: number) => Math.abs(a(n) * b(n) - 6);
  let N = 1; while (err(N) >= eps && N < 1e7) N++;
  // the proof: |a_n b_n − ab| ≤ |a_n||b_n − b| + |b||a_n − a| ≤ 3|b_n − 3| + 3|a_n − 2| once |a_n| ≤ 3.
  // so it suffices that |a_n − 2| < ε/6 and |b_n − 3| < ε/6.
  const Na = Math.floor(6 / eps) + 1, Nb = Math.floor(12 / eps) + 1;
  const Nproof = Math.max(Na, Nb);
  const M = 40;
  const lo = 4, hi = 7;
  const Y = (v: number) => Y1 - ((Math.min(hi, Math.max(lo, v)) - lo) / (hi - lo)) * (Y1 - Y0);
  const X = (n: number) => X0 + ((n - 1) / (M - 1)) * (X1 - X0);
  const fm = (z: number) => fmtNum(Number(z.toPrecision(4)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The terms a_n b_n approaching 6, with a band of width epsilon" style={{ width: "100%", display: "block" }}>
        <rect x={X0} y={Y(6 + eps)} width={X1 - X0} height={Math.max(1, Y(6 - eps) - Y(6 + eps))} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X0} y1={Y(6)} x2={X1} y2={Y(6)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        <line x1={X0} y1={Y1} x2={X1} y2={Y1} className="viz-axis" />
        {Array.from({ length: M }, (_, i) => i + 1).map((n) => (
          <circle key={n} cx={X(n)} cy={Y(a(n) * b(n))} r={3.2} style={{ fill: n >= N ? "var(--accent)" : "var(--text-muted)" }} />
        ))}
        <text x={X0 - 6} y={Y(6) + 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>6</text>
        <text x={X1} y={Y1 + 16} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>n = {M}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>tolerance ε = 10^<span className="mono">{fmtNum(e10)}</span></span>
          <input type="range" min={-4} max={0} step={0.5} value={e10} onChange={(e) => setE(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>ε</td><td className="mono">{fm(eps)}</td></tr>
          <tr><td>first n with |aₙbₙ − 6| &lt; ε from then on</td><td className="mono">{N}</td></tr>
          <tr><td>the proof asks for |aₙ − 2| &lt; ε/6 and |bₙ − 3| &lt; ε/6, so n ≥</td><td className="mono">{Nproof}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The proof splits the error as |aₙ||bₙ − 3| + 3|aₙ − 2| and makes each part less than ε/2. Its N is larger than
        necessary, and that does not matter: a limit proof only needs some N that works, not the smallest.
      </figcaption>
    </figure>
  );
}
