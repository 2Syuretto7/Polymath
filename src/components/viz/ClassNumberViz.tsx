"use client";

import { useState } from "react";
import { discriminant } from "./NormTraceViz";

/** Reduced positive definite forms ax² + bxy + cy² of discriminant D < 0: |b| ≤ a ≤ c, and b ≥ 0 when |b| = a or a = c. */
export function reducedForms(D: number) {
  const out: [number, number, number][] = [];
  for (let a = 1; a * a <= -D / 3; a++) for (let b = -a + 1; b <= a; b++) {
    const num = b * b - D;
    if (num % (4 * a)) continue;
    const c = num / (4 * a);
    if (c < a || (b < 0 && a === c)) continue;
    out.push([a, b, c]);
  }
  return out;
}
const squarefree = (n: number) => { for (let p = 2; p * p <= n; p++) if (n % (p * p) === 0) return false; return true; };
export const NEG_DS = Array.from({ length: 100 }, (_, i) => -(i + 1)).filter((d) => squarefree(-d));
/** The Minkowski bound (2/π)√|D| for an imaginary quadratic field. */
export const minkowskiBound = (D: number) => (2 / Math.PI) * Math.sqrt(Math.abs(D));

/** Class numbers of imaginary quadratic fields, counted by reduced quadratic forms. */
export function ClassNumberViz() {
  const [k, setK] = useState(NEG_DS.indexOf(-5));
  const d = NEG_DS[k];
  const D = discriminant(d);
  const forms = reducedForms(D);
  const term = (c: number, v: string, first: boolean) => (c === 0 ? "" : `${first ? (c < 0 ? "−" : "") : c < 0 ? " − " : " + "}${Math.abs(c) === 1 ? "" : Math.abs(c)}${v}`);
  const neg = (v: number) => String(v).replace("-", "−");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>d = {neg(d)} <input type="range" min={0} max={NEG_DS.length - 1} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox={`0 0 540 ${12 + Math.ceil(forms.length / 4) * 38}`} role="img" aria-label="Reduced quadratic forms of the discriminant" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {forms.map(([a, b, c], i) => {
          const x = 8 + (i % 4) * 132, y = 6 + Math.floor(i / 4) * 38;
          return (
            <g key={i}>
              <rect x={x} y={y} width={126} height={32} rx={4} style={{ fill: i === 0 ? "var(--success-soft)" : "var(--accent-soft)", stroke: i === 0 ? "var(--success)" : "var(--accent)" }} />
              <text x={x + 63} y={y + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{`${term(a, "x²", true)}${term(b, "xy", false)}${term(c, "y²", false)}`}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ℚ(√{neg(d)}): discriminant {neg(D)}, Minkowski bound {minkowskiBound(D).toFixed(2)}. Reduced forms, hence class number: {forms.length}.
      </p>
      <figcaption className="viz-caption">
        Ideal classes of an imaginary quadratic field correspond to reduced binary quadratic forms of the same
        discriminant, so the class number is the number of boxes. The green box is the principal class. Every class
        contains an ideal of norm at most the Minkowski bound, which is why only small primes need checking.
      </figcaption>
    </figure>
  );
}
