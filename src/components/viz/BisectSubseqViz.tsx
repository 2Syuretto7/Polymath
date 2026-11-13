"use client";

import { useState } from "react";

const N = 400;
const SEQS = [
  { name: "sin n", f: (n: number) => Math.sin(n), lo: -1, hi: 1 },
  { name: "fractional part of n√2", f: (n: number) => n * Math.SQRT2 - Math.floor(n * Math.SQRT2), lo: 0, hi: 1 },
  { name: "(−1)ⁿ(1 + 1/n)", f: (n: number) => (n % 2 ? -1 : 1) * (1 + 1 / n), lo: -2, hi: 2 },
];

/** Bolzano–Weierstrass by bisection: keep a half that contains infinitely many terms, and pick one term from each. */
export function BisectSubseqViz() {
  const [si, setSi] = useState(0);
  const [k, setK] = useState(0);
  const S = SEQS[si];
  const xs = Array.from({ length: N }, (_, i) => S.f(i + 1));
  // run k bisection steps, choosing the half with more of the first N terms (a stand-in for "infinitely many")
  let lo = S.lo, hi = S.hi;
  const picks: number[] = [];
  let last = 0;
  for (let s = 0; s < k; s++) {
    const mid = (lo + hi) / 2;
    const left = xs.filter((x) => x >= lo && x <= mid).length, right = xs.filter((x) => x > mid && x <= hi).length;
    if (left >= right) hi = mid; else lo = mid;
    const j = xs.findIndex((x, i) => i >= last && x >= lo && x <= hi);
    if (j >= 0) { picks.push(j); last = j + 1; }
  }
  const W = 600, H = 220, pl = 40;
  const X = (i: number) => pl + (i / N) * (W - pl - 10), Y = (v: number) => 10 + ((S.hi - v) / (S.hi - S.lo)) * (H - 30);
  const inBand = xs.filter((x) => x >= lo && x <= hi).length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {SEQS.map((q, i) => <button key={q.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => { setSi(i); setK(0); }}>{q.name}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={k >= 10} onClick={() => setK(k + 1)}>Bisect</button>
        <button type="button" className="btn" onClick={() => setK(0)}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Terms of the sequence, the current interval, and the chosen subsequence" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={pl} y={Y(hi)} width={W - pl - 10} height={Math.max(1.5, Y(lo) - Y(hi))} style={{ fill: "var(--accent)", fillOpacity: 0.15 }} />
        <line x1={pl} y1={10} x2={pl} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <text x={pl - 6} y={Y(S.hi) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{S.hi}</text>
        <text x={pl - 6} y={Y(S.lo) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{S.lo}</text>
        <text x={W - 10} y={H - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = {N}</text>
        {xs.map((x, i) => <circle key={i} cx={X(i)} cy={Y(x)} r={1.6} style={{ fill: "var(--text-faint)" }} />)}
        {picks.length > 1 && <path d={picks.map((j, t) => `${t ? "L" : "M"}${X(j).toFixed(1)},${Y(xs[j]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2 }} />}
        {picks.map((j) => <circle key={j} cx={X(j)} cy={Y(xs[j])} r={4} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>steps: {k}; interval [{lo.toFixed(4)}, {hi.toFixed(4)}], width {(hi - lo).toFixed(4)}</div>
        <div>terms of the first {N} in the interval: {inBand}</div>
        <div>subsequence indices: {picks.map((j) => j + 1).join(", ") || "none yet"}</div>
      </div>
      <figcaption className="viz-caption">
        Each bisection keeps a half that still contains infinitely many terms (here, the half with more of the first {N}), and
        picks the next term inside it with a larger index. The intervals shrink to a point, so the chosen terms form a Cauchy
        subsequence, which converges because the interval is closed and ℝ is complete.
      </figcaption>
    </figure>
  );
}
