"use client";

import { useState } from "react";

const CLASSES = [
  { size: 1, name: "identity" },
  { size: 20, name: "3-cycles" },
  { size: 15, name: "double transpositions" },
  { size: 12, name: "5-cycles, first class" },
  { size: 12, name: "5-cycles, second class" },
];

/** A normal subgroup of A₅ is a union of conjugacy classes, containing the identity, with size dividing 60. */
export function ClassUnionViz() {
  const [on, setOn] = useState<boolean[]>([true, false, false, false, false]);
  const total = CLASSES.reduce((s, c, i) => s + (on[i] ? c.size : 0), 0);
  const divides = total > 0 && 60 % total === 0;
  const trivial = total === 1 || total === 60;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6 }}>
        {CLASSES.map((c, i) => (
          <button key={i} type="button" aria-pressed={on[i]} className={on[i] ? "viz-chip is-on" : "viz-chip"}
            onClick={() => setOn((o) => o.map((x, j) => (j === i ? !x : x)))}>
            {c.name}: {c.size}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 600 44" role="img" aria-label="The chosen classes as a share of the 60 elements" style={{ width: "100%", display: "block", marginTop: 10 }}>
        {(() => {
          let x = 0;
          return CLASSES.map((c, i) => {
            const w = (c.size / 60) * 600;
            const el = <rect key={i} x={x + 1} y={4} width={w - 2} height={36} rx={3} style={{ fill: on[i] ? "var(--accent)" : "var(--bg-subtle)", stroke: "var(--border)" }} />;
            x += w;
            return el;
          });
        })()}
      </svg>
      <p className="mono" style={{ margin: "8px 0 0" }}>
        size {total}: {!on[0] ? "no identity, so not a subgroup" : !divides ? `${total} does not divide 60, so not a subgroup` : trivial ? (total === 1 ? "the trivial subgroup" : "all of A₅") : "a candidate"}
      </p>
      <figcaption className="viz-caption">
        A normal subgroup contains each element together with all its conjugates, so it is a union of whole conjugacy classes, and it contains the identity. By Lagrange its size divides 60. Try every combination: the only sizes that work are 1 and 60. So A₅ is simple.
      </figcaption>
    </figure>
  );
}
