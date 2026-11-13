"use client";

import { useState } from "react";

const SEQS = [
  { name: "decimals of √2", term: (n: number) => Math.floor(Math.SQRT2 * 10 ** (n - 1)) / 10 ** (n - 1), lim: Math.SQRT2, limName: "√2", fmt: (n: number) => (Math.floor(Math.SQRT2 * 10 ** (n - 1)) / 10 ** (n - 1)).toFixed(n - 1), rational: false },
  { name: "1/n", term: (n: number) => 1 / n, lim: 0, limName: "0", fmt: (n: number) => `1/${n}`, rational: true },
  { name: "(1 + 1/n)ⁿ", term: (n: number) => (1 + 1 / n) ** n, lim: Math.E, limName: "e", fmt: (n: number) => ((1 + 1 / n) ** n).toFixed(5), rational: false },
];
const SPACES = [
  { name: "ℚ", has: (_l: number, rational: boolean) => rational },
  { name: "ℝ", has: () => true },
  { name: "(0, ∞)", has: (l: number) => l > 0 },
];

/** Cauchy sequences: the terms bunch up, but whether they converge depends on whether the space contains the limit. */
export function CompletionViz() {
  const [si, setSi] = useState(0);
  const [pi, setPi] = useState(0);
  const [n, setN] = useState(6);
  const s = SEQS[si], P = SPACES[pi];
  const terms = Array.from({ length: n }, (_, i) => s.term(i + 1));
  const has = P.has(s.lim, s.rational);
  const lo = Math.min(...terms, s.lim), hi = Math.max(...terms, s.lim), pad = (hi - lo) * 0.08 || 0.1;
  const W = 600, H = 90, X = (v: number) => 20 + ((v - lo + pad) / (hi - lo + 2 * pad)) * (W - 40);
  const gap = Math.abs(terms[n - 1] - terms[n - 2]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {SEQS.map((q, i) => <button key={q.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{q.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Space" style={{ marginTop: 6 }}>
        {SPACES.map((q, i) => <button key={q.name} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>space {q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>terms shown: <span className="mono">{n}</span></span><input type="range" min={2} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Terms of the sequence on a number line" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={10} y1={50} x2={W - 10} y2={50} style={{ stroke: "var(--border)" }} />
        {terms.map((t, i) => <circle key={i} cx={X(t)} cy={50} r={4} style={{ fill: "var(--accent)", fillOpacity: 0.3 + (0.7 * (i + 1)) / n }} />)}
        <circle cx={X(s.lim)} cy={50} r={8} style={{ fill: has ? "var(--text)" : "var(--bg)", stroke: has ? "var(--text)" : "var(--danger)", strokeWidth: 2 }} />
        <text x={X(s.lim)} y={28} textAnchor="middle" style={{ fill: has ? "var(--text)" : "var(--danger)", fontSize: 12 }}>{s.limName}{has ? "" : " (missing)"}</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 13 }}>terms: {Array.from({ length: n }, (_, i) => s.fmt(i + 1)).join(", ")}</p>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>gap between the last two terms: {gap.toPrecision(3)}</div>
        <div>Cauchy: <strong>yes</strong>; terms lie in {P.name}: <strong>yes</strong></div>
        <div>converges in {P.name}: <strong>{has ? `yes, to ${s.limName}` : "no"}</strong></div>
      </div>
      <figcaption className="viz-caption">
        Every term of each sequence lies in all three spaces, and the terms get as close together as you like, so each
        sequence is Cauchy. Whether it converges depends on the space: a hollow limit is a hole in the space. ℝ is complete,
        so every Cauchy sequence in it converges. ℚ and (0, ∞) are not.
      </figcaption>
    </figure>
  );
}
