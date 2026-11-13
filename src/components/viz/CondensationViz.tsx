"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 230, X0 = 40, X1 = 500, Y0 = 190, Y1 = 20;

/** Cauchy condensation for Σ 1/kᵖ: group the terms into blocks from 2ʲ to 2ʲ⁺¹ − 1. Each block lies between 2ʲ a(2ʲ⁺¹) and 2ʲ a(2ʲ). */
export function CondensationViz() {
  const [p, setP] = useState(1);
  const [K, setK] = useState(6);
  const a = (k: number) => 1 / Math.pow(k, p);
  const blocks = Array.from({ length: K }, (_, j) => {
    let s = 0;
    for (let k = 2 ** j; k < 2 ** (j + 1); k++) s += a(k);
    return { j, s, hi: 2 ** j * a(2 ** j), lo: 2 ** j * a(2 ** (j + 1)) };
  });
  const top = Math.max(1, ...blocks.map((b) => b.hi));
  const bw = (X1 - X0) / K;
  const Y = (v: number) => Y0 - (v / top) * (Y0 - Y1);
  const ratio = Math.pow(2, 1 - p);
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));
  const sumHi = blocks.reduce((t, b) => t + b.hi, 0);
  const sumS = blocks.reduce((t, b) => t + b.s, 0);

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Blocks of terms with their upper and lower bounds" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        {blocks.map((b) => {
          const x = X0 + b.j * bw;
          return (
            <g key={b.j}>
              <rect x={x + 6} y={Y(b.hi)} width={bw - 12} height={Y0 - Y(b.hi)} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
              <rect x={x + 6} y={Y(b.s)} width={bw - 12} height={Y0 - Y(b.s)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
              <line x1={x + 6} y1={Y(b.lo)} x2={x + bw - 6} y2={Y(b.lo)} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
              <text x={x + bw / 2} y={Y0 + 16} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>k = {2 ** b.j} to {2 ** (b.j + 1) - 1}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono-meta" style={{ margin: "4px 0 0", textTransform: "none" }}>
        filled: the block sum · dashed: 2ʲ a(2ʲ), an upper bound · lower line: 2ʲ a(2ʲ⁺¹), a lower bound
      </p>
      <div className="viz-sliders">
        <label><span>exponent p in Σ 1/kᵖ: <span className="mono">{fm(p)}</span></span>
          <input type="range" min={0.5} max={2.5} step={0.1} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>blocks: <span className="mono">{K}</span></span>
          <input type="range" min={2} max={8} value={K} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>condensed terms 2ʲ a(2ʲ) = (2¹⁻ᵖ)ʲ, a geometric series with ratio</td><td className="mono">{fm(ratio)}</td></tr>
          <tr><td>sum of the first {2 ** K - 1} terms of Σ 1/kᵖ</td><td className="mono">{fm(sumS)}</td></tr>
          <tr><td>sum of the first {K} condensed terms</td><td className="mono">{fm(sumHi)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {p > 1
          ? `The ratio ${fm(ratio)} is below 1, so the condensed series converges, and the blocks of the original series, each below its dashed bar, have bounded sums.`
          : `The ratio ${fm(ratio)} is at least 1, so the condensed series diverges. Each block is at least half of the next dashed bar, so the original series diverges too.`}
      </figcaption>
    </figure>
  );
}
