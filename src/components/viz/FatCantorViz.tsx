"use client";

import { useState } from "react";

type Iv = [number, number];
/** Remove an open middle piece of the given length from each interval. */
function step(ivs: Iv[], gap: (len: number) => number): Iv[] {
  return ivs.flatMap(([a, b]) => {
    const g = gap(b - a), m = (a + b) / 2;
    return [[a, m - g / 2], [m + g / 2, b]] as Iv[];
  });
}

const KINDS = [
  { name: "middle thirds", gap: (_n: number) => (len: number) => len / 3, note: "Each stage keeps 2/3 of what was left, so the measure (2/3)ⁿ tends to 0: the Cantor set is uncountable but null." },
  { name: "shrinking gaps", gap: (n: number) => () => 1 / 4 ** n, note: "At stage n we remove 2ⁿ⁻¹ gaps of length 1/4ⁿ, in total 1/2. What remains is closed, contains no interval, and still has measure 1/2." },
];

/** The Cantor set and a fat Cantor set, stage by stage. */
export function FatCantorViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const K = KINDS[k];
  const stages: Iv[][] = [[[0, 1]]];
  for (let i = 1; i <= 6; i++) stages.push(step(stages[i - 1], K.gap(i)));
  const X = (x: number) => 30 + x * 460;
  const mu = (ivs: Iv[]) => ivs.reduce((s, [a, b]) => s + b - a, 0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="construction">
        {KINDS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Stages of a Cantor-type construction" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {stages.slice(0, n + 1).map((ivs, s) => (
          <g key={s}>
            <text x={24} y={22 + s * 26} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s}</text>
            {ivs.map(([a, b], j) => <rect key={j} x={X(a)} y={12 + s * 26} width={Math.max(0.8, X(b) - X(a))} height={12} style={{ fill: s === n ? "var(--accent)" : "var(--accent-soft)", stroke: s === n ? undefined : "var(--accent)", strokeWidth: 0.5 }} />)}
          </g>
        ))}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" disabled={n === 0} onClick={() => setN(n - 1)}>Previous stage</button>
        <button type="button" className="btn btn-primary" disabled={n === 6} onClick={() => setN(n + 1)}>Next stage</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        stage {n}: {stages[n].length} intervals, total length {mu(stages[n]).toFixed(4)}. {K.note}
      </p>
      <figcaption className="viz-caption">
        Both limits are closed sets, measured through their complements, which are countable unions of open intervals. A set
        can be small in the sense of topology, nowhere dense, and still large in the sense of measure.
      </figcaption>
    </figure>
  );
}
