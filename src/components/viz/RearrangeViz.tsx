"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, scales, type View } from "./Plot";

const V: View = { xmin: -5, xmax: 305, ymin: -1.2, ymax: 2.7, w: 520, h: 240 };
const STEPS = 300;

/** Riemann's rearrangement: reorder 1 − 1/2 + 1/3 − … to make its partial sums approach any target. */
export function RearrangeViz() {
  const [T, setT] = useState(1.5);
  const { X, Y } = scales(V);
  // positives 1, 1/3, 1/5, …; negatives −1/2, −1/4, …
  let p = 1, q = 2, s = 0;
  const sums: number[] = [], used: string[] = [];
  for (let i = 0; i < STEPS; i++) {
    if (s <= T) { s += 1 / p; if (used.length < 14) used.push(p === 1 ? "+1" : `+1/${p}`); p += 2; }
    else { s -= 1 / q; if (used.length < 14) used.push(`−1/${q}`); q += 2; }
    sums.push(s);
  }
  const usual: number[] = [];
  let u = 0;
  for (let n = 1; n <= STEPS; n++) { u += (n % 2 ? 1 : -1) / n; usual.push(u); }
  const six = (x: number) => fmtNum(Number(x.toPrecision(6)));

  return (
    <figure className="viz">
      <p className="mono" style={{ margin: "0 0 4px", fontSize: 13.5, overflowWrap: "anywhere" }}>
        {used.join(" ").replace(/^\+/, "")} …
      </p>
      <Axes v={V} xStep={50} label={`Partial sums of the alternating harmonic series rearranged to approach ${T}, and in the usual order`}>
        <line x1={X(0)} y1={Y(T)} x2={X(STEPS + 5)} y2={Y(T)} className="plot-line" />
        <line x1={X(0)} y1={Y(Math.LN2)} x2={X(STEPS + 5)} y2={Y(Math.LN2)} className="plot-ghost" />
        {usual.map((t, i) => <circle key={`u${i}`} cx={X(i + 1)} cy={Y(t)} r={1.6} style={{ fill: "var(--text-faint)" }} />)}
        {sums.map((t, i) => <circle key={i} cx={X(i + 1)} cy={Y(t)} r={2} style={{ fill: "var(--accent)" }} />)}
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          target = <span className="mono">{fmtNum(T)}</span>
          <input type="range" className="viz-range" min={-1} max={2.5} step={0.1} value={T} onChange={(e) => setT(Number(Number(e.target.value).toFixed(1)))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>rearranged: partial sum after {STEPS} terms (coloured dots)</td><td className="mono">{six(sums[STEPS - 1])}</td></tr>
          <tr><td>usual order: partial sum after {STEPS} terms (grey dots)</td><td className="mono">{six(usual[STEPS - 1])}</td></tr>
          <tr><td>ln 2, the sum in the usual order (dashed)</td><td className="mono">{six(Math.LN2)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The rule: add unused positive terms while the total is at most the target, and unused negative terms while it is
        above. Every term is used exactly once, eventually, yet the sum is whatever target you choose. This works because
        the positive terms alone, and the negative terms alone, both add up to infinity.
      </figcaption>
    </figure>
  );
}
