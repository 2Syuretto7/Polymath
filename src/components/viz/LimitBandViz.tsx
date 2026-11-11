"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, scales, type View } from "./Plot";

type Seq = { name: string; a: (n: number) => number; L: number | null; Llabel: string; v: View };
const NMAX = 60;
const SEQS: Seq[] = [
  { name: "1/n", a: (n) => 1 / n, L: 0, Llabel: "0", v: { xmin: -2, xmax: 62, ymin: -0.3, ymax: 1.1, w: 520, h: 220 } },
  { name: "(−1)ⁿ/n", a: (n) => (-1) ** n / n, L: 0, Llabel: "0", v: { xmin: -2, xmax: 62, ymin: -1.1, ymax: 0.7, w: 520, h: 220 } },
  { name: "(1 + 1/n)ⁿ", a: (n) => (1 + 1 / n) ** n, L: Math.E, Llabel: "e", v: { xmin: -2, xmax: 62, ymin: 1.8, ymax: 2.9, w: 520, h: 220 } },
  { name: "n^(1/n)", a: (n) => n ** (1 / n), L: 1, Llabel: "1", v: { xmin: -2, xmax: 62, ymin: 0.9, ymax: 1.55, w: 520, h: 220 } },
  { name: "(−1)ⁿ", a: (n) => (-1) ** n, L: null, Llabel: "none", v: { xmin: -2, xmax: 62, ymin: -1.4, ymax: 1.4, w: 520, h: 220 } },
];

/** The terms of a sequence, with a band of half-width ε around the limit: past some N, every term is inside. */
export function LimitBandViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(-1);
  const S = SEQS[k];
  const eps = 10 ** e;
  const { X, Y } = scales(S.v);
  const centre = S.L ?? 0;
  const terms = Array.from({ length: NMAX }, (_, i) => S.a(i + 1));
  // the last n with |a_n − L| ≥ ε (within the plotted range), so N = that + 1
  let lastOut = 0;
  terms.forEach((t, i) => { if (Math.abs(t - centre) >= eps) lastOut = i + 1; });
  const N = lastOut + 1;
  const settled = S.L !== null && lastOut < NMAX;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Sequence">
        {SEQS.map((s, i) => (
          <button key={s.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{s.name}</span>
          </button>
        ))}
      </div>
      <Axes v={S.v} xStep={10} label={`The first ${NMAX} terms of ${S.name}, with a band of half-width ${fmtNum(eps)} around ${S.L === null ? "0" : S.Llabel}`}>
        <rect x={X(0)} y={Y(centre + eps)} width={X(NMAX + 1) - X(0)} height={Y(centre - eps) - Y(centre + eps)} className="viz-region" style={{ strokeWidth: 0 }} />
        <line x1={X(0)} y1={Y(centre)} x2={X(NMAX + 1)} y2={Y(centre)} className="plot-ghost" />
        <text x={X(NMAX + 1.5)} y={Y(centre) - 6} textAnchor="end" className="plot-tick">{S.L === null ? "0" : `L = ${S.Llabel}`}</text>
        {settled && <line x1={X(N)} y1={0} x2={X(N)} y2={S.v.h} className="plot-line" />}
        {terms.map((t, i) => (
          <circle key={i} cx={X(i + 1)} cy={Y(t)} r={3.5} className={Math.abs(t - centre) < eps ? "plot-point" : "plot-hot"} />
        ))}
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          ε = <span className="mono">{fmtNum(eps)}</span>
          <input type="range" className="viz-range" min={-3} max={0} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>limit</td><td className="mono">{S.Llabel}</td></tr>
          <tr>
            <td>from which n on are all the plotted terms inside the band?</td>
            <td className="mono">{S.L === null ? "never: no single band of width 1 or less holds both 1 and −1" : settled ? `n ≥ ${N} (red line)` : `not within the first ${NMAX} terms: a smaller ε needs a larger N`}</td>
          </tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Terms inside the band are drawn plain, those outside in red. A sequence converges to L when every band around L,
        however thin, eventually traps all the terms. Shrink ε and watch the cut-off N move right. For (−1)ⁿ, no band
        narrower than 2 can trap the terms, whatever centre you choose.
      </figcaption>
    </figure>
  );
}
