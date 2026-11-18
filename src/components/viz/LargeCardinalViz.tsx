"use client";

import { useState } from "react";

const RUNGS = [
  { name: "ZFC", what: "The base theory. It cannot prove that any of the cardinals above exist, nor even that they are consistent.", proves: "Most of ordinary mathematics.", just: "the accepted base, itself justified by the iterative conception and by long use" },
  { name: "inaccessible", what: "An uncountable cardinal κ not reachable from below by power sets, or by unions of fewer than κ smaller sets. Then V up to stage κ is itself a model of ZFC.", proves: "The consistency of ZFC, so by Gödel’s second theorem ZFC cannot prove an inaccessible exists.", just: "intrinsic: reflection, the idea that the universe is too large to be pinned down by any property" },
  { name: "Mahlo", what: "An inaccessible below which the inaccessibles are so plentiful that they meet every closed unbounded set.", proves: "The consistency of ZFC with a proper class of inaccessibles.", just: "intrinsic: reflection applied again" },
  { name: "weakly compact", what: "An inaccessible with a Ramsey-style partition property; equivalently, a compactness theorem for an infinitary logic holds at κ.", proves: "The consistency of ZFC with many Mahlo cardinals.", just: "mixed: generalising compactness from the finite to the infinite" },
  { name: "measurable", what: "Carries a two-valued measure on all its subsets, additive for fewer than κ pieces.", proves: "That V ≠ L (Scott, 1961): Gödel’s constructible universe is too thin.", just: "mostly extrinsic: fruitfulness, and fit with the higher rungs" },
  { name: "Woodin", what: "A technical strengthening, at the heart of modern descriptive set theory.", proves: "with infinitely many, projective determinacy (Martin and Steel, 1989), settling the classical questions about projective sets of reals.", just: "extrinsic: it completes the theory of the projective sets in a uniform way" },
  { name: "supercompact", what: "A far stronger reflection of the universe into small pieces of itself.", proves: "The consistency of forcing axioms such as PFA, which make the continuum ℵ₂.", just: "extrinsic: it powers the strongest consistency results" },
];

/** The large cardinal hierarchy, ordered by consistency strength, with what each rung buys. */
export function LargeCardinalViz() {
  const [k, setK] = useState(4);
  const R = RUNGS[k];
  const H = 24, Y = (i: number) => 175 - i * H;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 190" role="img" aria-label="A ladder of axioms by consistency strength" style={{ width: "100%", display: "block" }}>
        <line x1={40} y1={Y(0) + 8} x2={40} y2={Y(6) - 10} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        <text x={28} y={Y(3)} textAnchor="middle" transform={`rotate(-90 28 ${Y(3)})`} style={{ fill: "var(--text-muted)", fontSize: 10 }}>stronger →</text>
        {RUNGS.map((r, i) => (
          <g key={r.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <rect x={70} y={Y(i) - 10} width={200} height={20} rx={4} style={{ fill: i === k ? "var(--accent-soft)" : i < k ? "var(--bg-subtle)" : "var(--bg)", stroke: i === k ? "var(--accent)" : "var(--border)", strokeWidth: i === k ? 2 : 1 }} />
            <text x={170} y={Y(i) + 4} textAnchor="middle" style={{ fill: i === k ? "var(--accent)" : "var(--text)", fontSize: 12, fontWeight: i === k ? 700 : 400 }}>{i === 0 ? "ZFC" : `ZFC + a ${r.name} cardinal`}</text>
            {i === 4 && <text x={282} y={Y(i) + 4} style={{ fill: "var(--danger)", fontSize: 11 }}>from here up: V ≠ L</text>}
          </g>
        ))}
        <text x={282} y={Y(0) + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>no rung settles CH</text>
      </svg>
      <div className="segmented" role="group" aria-label="rung">
        {RUNGS.map((r, i) => <button key={r.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{r.name}</button>)}
      </div>
      <p style={{ fontSize: 14, margin: "8px 0 4px" }}><strong>{R.name}.</strong> {R.what}</p>
      <p className="mono" style={{ fontSize: 13, margin: "4px 0" }}>Gives: {R.proves}</p>
      <p className="mono" style={{ fontSize: 13, margin: "4px 0", fontWeight: 700 }}>Justification: {R.just}.</p>
      <figcaption className="viz-caption">
        Each rung proves the consistency of the rungs below it, so they line up in a single order of strength, a surprising
        fact no one has explained. Large cardinals settle many questions about sets of reals, but not CH: Lévy and Solovay
        showed that small forcing preserves them, and CH can be switched on or off by small forcing.
      </figcaption>
    </figure>
  );
}
