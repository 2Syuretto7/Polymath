"use client";

import { useState } from "react";

/** Ideals of ℤ[√−5], each a sublattice with ℤ-basis A and B + C√−5 (Hermite normal form). */
export const IDEALS = [
  { name: "(2)", A: 2, B: 0, C: 2, gen: "2" },
  { name: "P = (2, 1 + √−5)", A: 2, B: 1, C: 1, gen: null },
  { name: "Q = (3, 1 + √−5)", A: 3, B: 1, C: 1, gen: null },
  { name: "Q′ = (3, 1 − √−5)", A: 3, B: 2, C: 1, gen: null },
  { name: "PQ = (1 + √−5)", A: 6, B: 1, C: 1, gen: "1 + √−5" },
  { name: "(3)", A: 3, B: 0, C: 3, gen: "3" },
];
/** a + b√−5 lies in the ideal with basis A, B + C√−5 exactly when C divides b and A divides a − (b/C)B. */
export const inIdeal = (I: (typeof IDEALS)[number], a: number, b: number) => b % I.C === 0 && (((a - (b / I.C) * I.B) % I.A) + I.A) % I.A === 0;
/** Whether some element of the ideal has norm a² + 5b² equal to the norm of the ideal, which happens exactly when it is principal. */
export function hasGenerator(I: (typeof IDEALS)[number]) {
  const N = I.A * I.C;
  for (let a = -N; a <= N; a++) for (let b = -N; b <= N; b++) if (a * a + 5 * b * b === N && inIdeal(I, a, b)) return true;
  return false;
}

/** Ideals of ℤ[√−5] drawn as sublattices: the norm of an ideal is its index. */
export function IdealIndexViz() {
  const [k, setK] = useState(1);
  const I = IDEALS[k];
  const S = 22, X0 = 270, Y0 = 120, r5 = Math.sqrt(5);
  const pts: [number, number, boolean][] = [];
  for (let b = -2; b <= 2; b++) for (let a = -12; a <= 12; a++) pts.push([X0 + a * S, Y0 - b * r5 * S, inIdeal(I, a, b)]);
  const N = I.A * I.C;
  const principal = hasGenerator(I);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="ideal">
        {IDEALS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="An ideal of Z[√−5] as a sublattice" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--grid-line)" }} />
        <line x1={X0} y1={5} x2={X0} y2={235} style={{ stroke: "var(--grid-line)" }} />
        <polygon points={`${X0},${Y0} ${X0 + I.A * S},${Y0} ${X0 + (I.A + I.B) * S},${Y0 - I.C * r5 * S} ${X0 + I.B * S},${Y0 - I.C * r5 * S}`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        {pts.map(([x, y, on], i) => <circle key={i} cx={x} cy={y} r={on ? 4.5 : 2.5} style={{ fill: on ? "var(--accent)" : "var(--text-faint)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {I.name}: ℤ-basis {I.A} and {I.B ? `${I.B} + ` : ""}{I.C === 1 ? "" : I.C}√−5. Index in ℤ[√−5], the norm: {I.A} × {I.C} = {N}. {principal ? `Principal: it contains an element of norm ${N}.` : `Not principal: no element a + b√−5 has a² + 5b² = ${N}.`}
      </p>
      <figcaption className="viz-caption">
        Grey points are ℤ[√−5]; large points form the ideal. The shaded cell is a fundamental parallelogram of the ideal,
        and it covers N(I) cells of the whole ring. Norms multiply: N(P) N(Q) = 2 × 3 = 6 = N(PQ). The prime ideals P, Q and
        Q′ are not principal, which is exactly why 6 = 2 · 3 = (1 + √−5)(1 − √−5) looked like two factorisations.
      </figcaption>
    </figure>
  );
}
