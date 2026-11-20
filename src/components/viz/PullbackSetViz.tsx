"use client";

import { useState } from "react";

export const A = [0, 1, 2, 3, 4];
export const B = [0, 1, 2, 3, 4, 5];
export const f = (a: number) => a % 3;
export const GS = [
  { label: "g(b) = b mod 3", g: (b: number) => b % 3 },
  { label: "g(b) = b² mod 3", g: (b: number) => (b * b) % 3 },
  { label: "g(b) = 2", g: () => 2 },
];

/** The pullback A ×_C B = {(a, b) : f(a) = g(b)} in sets. */
export function pullback(k: number) {
  const g = GS[k].g;
  return A.flatMap((a) => B.filter((b) => f(a) === g(b)).map((b) => [a, b]));
}

/** The pullback of two maps to ℤ/3, as a subset of the product. */
export function PullbackSetViz() {
  const [k, setK] = useState(0);
  const P = pullback(k);
  const inP = (a: number, b: number) => P.some(([x, y]) => x === a && y === b);
  const cw = 46, X0 = 120, Y0 = 40;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map g">
        {GS.map((v, i) => <button key={v.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{v.label}</button>)}
      </div>
      <svg viewBox="0 0 540 300" role="img" aria-label="The product of A and B as a grid, with the pairs in the pullback highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0 + (B.length * cw) / 2} y={20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>b in B, with g(b) beneath</text>
        {B.map((b, j) => (
          <g key={b}>
            <text x={X0 + j * cw + cw / 2} y={Y0 - 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{b}</text>
            <text x={X0 + j * cw + cw / 2} y={Y0 + A.length * cw + 18} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11 }}>{GS[k].g(b)}</text>
          </g>
        ))}
        {A.map((a, i) => (
          <g key={a}>
            <text x={X0 - 34} y={Y0 + i * cw + cw / 2 + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{a}</text>
            <text x={X0 - 12} y={Y0 + i * cw + cw / 2 + 4} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11 }}>{f(a)}</text>
            {B.map((b, j) => (
              <rect key={b} x={X0 + j * cw + 3} y={Y0 + i * cw + 3} width={cw - 6} height={cw - 6} rx={4} style={{ fill: inP(a, b) ? "var(--success)" : "var(--bg-subtle)", stroke: "var(--border)" }} />
            ))}
          </g>
        ))}
        <text x={30} y={Y0 + (A.length * cw) / 2} textAnchor="middle" transform={`rotate(-90 30 ${Y0 + (A.length * cw) / 2})`} style={{ fill: "var(--text-muted)", fontSize: 11 }}>a in A, with f(a) = a mod 3</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {GS[k].label}: the pullback has {P.length} of the {A.length * B.length} pairs in A × B.
      </p>
      <figcaption className="viz-caption">
        Given f : A → C and g : B → C, the pullback is the set of pairs (a, b) with f(a) = g(b), with its two projections.
        It is the limit of the diagram A → C ← B: any set with maps to A and B agreeing in C maps uniquely into it.
        Counting by fibres, its size is the sum over c of the sizes of the fibres of f and g over c, multiplied.
      </figcaption>
    </figure>
  );
}
