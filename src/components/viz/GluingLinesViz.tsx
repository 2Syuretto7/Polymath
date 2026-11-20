"use client";

import { useState } from "react";

export const GLUINGS = [
  { label: "glue by x = y", result: "the line with a doubled origin", separated: false, note: "Both origins survive, and no open set separates them: the scheme is not separated." },
  { label: "glue by x = 1/y", result: "the projective line", separated: true, note: "The origin of the second copy becomes the point at infinity of the first: one point is added to the line." },
];

/** Gluing two affine lines along the complement of their origins, in two ways. */
export function GluingLinesViz() {
  const [g, setG] = useState(1);
  const G = GLUINGS[g];
  const cx = 270;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="gluing">
        {GLUINGS.map((v, i) => <button key={v.label} type="button" aria-pressed={g === i} className={g === i ? "seg is-on" : "seg"} onClick={() => setG(i)}>{v.label}</button>)}
      </div>
      <svg viewBox="0 0 540 220" role="img" aria-label="Two affine lines glued along the complement of the origin" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={30} style={{ fill: "var(--accent)", fontSize: 12 }}>first copy, coordinate x</text>
        <text x={20} y={62} style={{ fill: "var(--success)", fontSize: 12 }}>second copy, coordinate y</text>
        {g === 0 ? (
          <>
            <line x1={40} y1={130} x2={500} y2={130} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
            <circle cx={cx} cy={112} r={6} style={{ fill: "var(--accent)" }} />
            <circle cx={cx} cy={148} r={6} style={{ fill: "var(--success)" }} />
            <circle cx={cx} cy={130} r={6} style={{ fill: "var(--surface)", stroke: "var(--text)" }} />
            <text x={cx + 12} y={108} style={{ fill: "var(--accent)", fontSize: 11 }}>x = 0</text>
            <text x={cx + 12} y={162} style={{ fill: "var(--success)", fontSize: 11 }}>y = 0</text>
          </>
        ) : (
          <>
            <circle cx={cx} cy={130} r={70} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
            <circle cx={cx} cy={200} r={6} style={{ fill: "var(--accent)" }} />
            <circle cx={cx} cy={60} r={6} style={{ fill: "var(--success)" }} />
            <text x={cx + 12} y={210} style={{ fill: "var(--accent)", fontSize: 11 }}>x = 0</text>
            <text x={cx + 12} y={56} style={{ fill: "var(--success)", fontSize: 11 }}>y = 0, that is x = ∞</text>
            <circle cx={cx + 70} cy={130} r={4} style={{ fill: "var(--text-muted)" }} />
            <text x={cx + 80} y={134} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 1 = y</text>
            <circle cx={cx - 70} cy={130} r={4} style={{ fill: "var(--text-muted)" }} />
            <text x={cx - 80} y={134} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = −1 = y</text>
          </>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Result: {G.result}. {G.separated ? "Separated." : "Not separated."} {G.note}
      </p>
      <figcaption className="viz-caption">
        A scheme is built by gluing affine schemes along open subsets. Two copies of Spec k[x] glued along the open set
        where the coordinate is non-zero, Spec k[x, 1/x], give different schemes depending on the gluing isomorphism. Both
        are covered by two affine lines, but only one of them is the projective line.
      </figcaption>
    </figure>
  );
}
