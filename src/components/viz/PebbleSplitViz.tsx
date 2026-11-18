"use client";

import { useState } from "react";

const CASES = [
  { key: "pebbles", label: "pebbles" },
  { key: "drops", label: "two drops of water" },
  { key: "zero", label: "the number 0" },
  { key: "big", label: "777864" },
];
const FREGE: Record<string, string> = {
  drops: "Pour one drop into another and you have one drop, not two. Mill can reply that drops are not stable aggregates; but then arithmetic is only true of things that happen to behave like pebbles, and we must check which those are.",
  zero: "Frege: what physical fact is asserted by the definition of 0? No one has ever seen or touched 0 pebbles.",
  big: "Frege: who has ever observed 777864 objects, separated into parts in every way the number’s arithmetic requires? Yet we know its sums with complete confidence.",
};

/** Mill: 5 = 2 + 3 records an observed fact about collections that can be separated into parts. */
export function PebbleSplitViz() {
  const [c, setC] = useState(0);
  const [n, setN] = useState(5);
  const [k, setK] = useState(2);
  const kk = Math.min(k, n - 1);
  const key = CASES[c].key;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((x, i) => <button key={x.key} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>{x.label}</button>)}
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="Pebbles separated into two groups" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {key === "pebbles" && Array.from({ length: n }, (_, i) => {
          const x = 40 + i * 52 + (i >= kk ? 50 : 0);
          return <ellipse key={i} cx={x} cy={60} rx={18} ry={13} style={{ fill: i < kk ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: i < kk ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />;
        })}
        {key === "drops" && (
          <>
            <path d="M90 40 Q100 60 90 75 Q80 60 90 40 Z" transform="translate(0 0) scale(1)" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <path d="M150 40 Q160 60 150 75 Q140 60 150 40 Z" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={200} y={64} style={{ fill: "var(--text-muted)", fontSize: 20 }}>→</text>
            <path d="M290 25 Q310 60 290 90 Q270 60 290 25 Z" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={340} y={64} style={{ fill: "var(--text)", fontSize: 13 }}>one drop</text>
          </>
        )}
        {key === "zero" && <text x={260} y={66} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 14 }}>(nothing to observe)</text>}
        {key === "big" && <text x={260} y={66} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 14 }}>○○○○○○○○○○ … (777854 more)</text>}
      </svg>
      {key === "pebbles" && (
        <div className="viz-controls">
          <label className="mono" style={{ fontSize: 13 }}>
            pebbles: {n}{" "}
            <input type="range" min={2} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="number of pebbles" />
          </label>
          <label className="mono" style={{ fontSize: 13 }}>
            split after: {kk}{" "}
            <input type="range" min={1} max={7} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="split point" />
          </label>
        </div>
      )}
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {key === "pebbles"
          ? `Observed: a collection like this can be separated into ${kk} and ${n - kk}. Mill: that is what ${n} = ${kk} + ${n - kk} asserts.`
          : FREGE[key]}
      </p>
      <figcaption className="viz-caption">
        For Mill, numbers name properties of aggregates, and the truths of arithmetic are inductive generalisations about
        how aggregates can be put together and taken apart, confirmed so constantly that we cannot imagine them false. The
        other cases show where critics, Frege above all, pressed.
      </figcaption>
    </figure>
  );
}
