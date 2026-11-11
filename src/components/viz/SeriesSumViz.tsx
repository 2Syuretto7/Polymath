"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, scales, type View } from "./Plot";

type Ser = { name: string; term: (n: number) => number; limit: number | null; limitLabel: string; v: View; note: string };
const SERS: Ser[] = [
  { name: "1/2ⁿ", term: (n) => 0.5 ** n, limit: 1, limitLabel: "1", v: { xmin: -5, xmax: 205, ymin: -0.1, ymax: 1.3, w: 520, h: 220 }, note: "A geometric series with ratio 1/2: each step goes half of the remaining way to 1." },
  { name: "1/n²", term: (n) => 1 / (n * n), limit: (Math.PI * Math.PI) / 6, limitLabel: "π²/6", v: { xmin: -5, xmax: 205, ymin: -0.1, ymax: 2, w: 520, h: 220 }, note: "Converges, by comparison with the integral of 1/x². Euler found the sum, π²/6, in 1734." },
  { name: "1/n", term: (n) => 1 / n, limit: null, limitLabel: "none", v: { xmin: -5, xmax: 205, ymin: -0.2, ymax: 7, w: 520, h: 220 }, note: "The harmonic series. The terms shrink to 0, yet the partial sums grow without bound, like ln n." },
  { name: "1/√n", term: (n) => 1 / Math.sqrt(n), limit: null, limitLabel: "none", v: { xmin: -5, xmax: 205, ymin: -0.5, ymax: 30, w: 520, h: 220 }, note: "Diverges even faster than the harmonic series: its terms are larger." },
  { name: "(−1)ⁿ⁺¹/n", term: (n) => (n % 2 ? 1 : -1) / n, limit: Math.LN2, limitLabel: "ln 2", v: { xmin: -5, xmax: 205, ymin: 0.3, ymax: 1.1, w: 520, h: 220 }, note: "The alternating harmonic series. The partial sums zigzag, each step smaller than the last, and close in on ln 2." },
];

/** Partial sums S₁, S₂, … of a series, plotted against n, with the sum when there is one. */
export function SeriesSumViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(50);
  const S = SERS[k];
  const { X, Y } = scales(S.v);
  const sums: number[] = [];
  let s = 0;
  for (let n = 1; n <= 200; n++) { s += S.term(n); sums.push(s); }
  const SN = sums[N - 1];
  const SUP: Record<string, string> = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  const six = (x: number) => {
    if (x !== 0 && Math.abs(x) < 1e-4) {
      const [m, e] = x.toExponential(2).split("e");
      return `${m.replace("-", "−")} × 10${e.replace("+", "").split("").map((c) => SUP[c] ?? c).join("")}`;
    }
    return fmtNum(Number(x.toPrecision(6)));
  };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Series">
        {SERS.map((t, i) => (
          <button key={t.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">Σ {t.name}</span>
          </button>
        ))}
      </div>
      <Axes v={S.v} xStep={20} yStep={S.v.ymax > 10 ? 5 : undefined} label={`Partial sums of the series with terms ${S.name}, for n up to ${N}`}>
        {S.limit !== null && <line x1={X(0)} y1={Y(S.limit)} x2={X(205)} y2={Y(S.limit)} className="plot-ghost" />}
        {sums.slice(0, N).map((t, i) => <circle key={i} cx={X(i + 1)} cy={Y(t)} r={N > 100 ? 2 : 3} style={{ fill: "var(--accent)" }} />)}
        <circle cx={X(N)} cy={Y(SN)} r={5} className="plot-hot" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          terms added, N = <span className="mono">{N}</span>
          <input type="range" className="viz-range" min={1} max={200} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the N-th term</td><td className="mono">{six(S.term(N))}</td></tr>
          <tr><td>the partial sum S_N</td><td className="mono">{six(SN)}</td></tr>
          <tr><td>the sum of the series (dashed line)</td><td className="mono">{S.limit === null ? "none: the partial sums grow without bound" : /[a-zπ]/.test(S.limitLabel) ? `${S.limitLabel} ≈ ${six(S.limit)}` : S.limitLabel}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{S.note}</figcaption>
    </figure>
  );
}
