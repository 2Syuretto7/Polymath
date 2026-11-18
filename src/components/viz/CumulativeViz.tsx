"use client";

import { useState } from "react";

const show = (m: string[]) => (m.length ? "{" + m.join(", ") + "}" : "∅");
const STAGES: string[][] = [[]];
for (let n = 0; n < 4; n++) {
  const prev = STAGES[n];
  const next: string[] = [];
  for (let mask = 0; mask < 1 << prev.length; mask++) next.push(show(prev.filter((_, i) => mask & (1 << i))));
  STAGES.push(next);
}
const SIZES = [0, 1, 2, 4, 16, 65536];

/** The cumulative hierarchy: each stage collects every set of things formed at earlier stages. */
export function CumulativeViz() {
  const [n, setN] = useState(3);
  const W = (j: number) => 20 + j * 32;
  const Y = (j: number) => 176 - j * 28;
  const fresh = n >= 1 && n <= 4 ? STAGES[n].filter((s) => !STAGES[n - 1].includes(s)) : [];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage">
        {[0, 1, 2, 3, 4, 5].map((j) => <button key={j} type="button" aria-pressed={n === j} className={n === j ? "seg is-on" : "seg"} onClick={() => setN(j)}>stage {j}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="The cumulative hierarchy as a widening V" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polygon points={`260,186 ${260 - W(5) - 20},${Y(5) - 10} ${260 + W(5) + 20},${Y(5) - 10}`} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        {[0, 1, 2, 3, 4, 5].map((j) => (
          <g key={j}>
            <line x1={260 - W(j)} y1={Y(j)} x2={260 + W(j)} y2={Y(j)} style={{ stroke: j <= n ? "var(--accent)" : "var(--border-strong)", strokeWidth: j === n ? 3 : 1.5 }} />
            <text x={260 - W(j) - 8} y={Y(j) + 4} textAnchor="end" style={{ fill: j <= n ? "var(--accent)" : "var(--text-faint)", fontSize: 11, fontWeight: j === n ? 700 : 400 }}>V{["₀", "₁", "₂", "₃", "₄", "₅"][j]}</text>
            <text x={260 + W(j) + 8} y={Y(j) + 4} style={{ fill: j <= n ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>{SIZES[j]} sets</text>
          </g>
        ))}
        <text x={260} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>and on through ω, ω + 1, …, with no last stage</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        V{["₀", "₁", "₂", "₃", "₄", "₅"][n]} has {SIZES[n]} sets{n === 0 ? ": nothing has been formed yet." : n === 5 ? ", every subset of V₄: too many to list." : `, ${fresh.length} of them new at this stage.`}
      </p>
      {n >= 1 && n <= 4 && (
        <p className="mono" style={{ fontSize: 12, display: "flex", flexWrap: "wrap", gap: "4px 14px", margin: "4px 0" }}>
          {STAGES[n].map((s) => <span key={s} style={{ color: fresh.includes(s) ? "var(--accent)" : "var(--text-muted)" }}>{s}</span>)}
        </p>
      )}
      <figcaption className="viz-caption">
        Each stage is the set of all subsets of the one before, so the stages grow as 0, 1, 2, 4, 16, 65536. A set appears
        only after all its members, so no set contains itself, and the Russell set of all non-self-membered sets would have to
        be formed after every stage. There is no such stage, so there is no such set.
      </figcaption>
    </figure>
  );
}
