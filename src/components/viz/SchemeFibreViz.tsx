"use client";

import { useState } from "react";

export const FPRIMES = [2, 3, 5, 7, 11, 13, 17, 19];

/** How the fibre of Spec ℤ[i] → Spec ℤ over (p) looks: Spec 𝔽ₚ[x]/(x² + 1). */
export function fibreKind(p: number): "ramified" | "split" | "inert" {
  if (p === 2) return "ramified";
  return p % 4 === 1 ? "split" : "inert";
}

const SQRT: Record<number, number> = { 5: 2, 13: 5, 17: 4 };

/** Fibres of Spec ℤ[i] over the primes of ℤ, computed as fibre products with Spec 𝔽ₚ. */
export function SchemeFibreViz() {
  const [p, setP] = useState(5);
  const k = fibreKind(p);
  const x = (i: number) => 60 + i * 60;
  const text =
    k === "split" ? `x² + 1 = (x − ${SQRT[p]})(x + ${SQRT[p]}) mod ${p}: two points, each with residue field of ${p} elements`
    : k === "inert" ? `x² + 1 is irreducible mod ${p}: one point, with residue field of ${p * p} elements`
    : "x² + 1 = (x + 1)² mod 2: one point, with a nilpotent, so the fibre is not reduced";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime p">
        {FPRIMES.map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => setP(q)}>p = {q}</button>)}
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The points of Spec of the Gaussian integers lying over each prime of the integers" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={10} y={50} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Spec ℤ[i]</text>
        <text x={10} y={170} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Spec ℤ</text>
        <line x1={40} y1={160} x2={530} y2={160} style={{ stroke: "var(--border-strong)" }} />
        {FPRIMES.map((q, i) => {
          const kk = fibreKind(q);
          const on = q === p;
          const col = on ? "var(--accent)" : "var(--text-faint)";
          return (
            <g key={q} onClick={() => setP(q)} style={{ cursor: "pointer" }}>
              {on && <rect x={x(i) - 26} y={60} width={52} height={116} rx={6} style={{ fill: "var(--accent-soft)", stroke: "none" }} />}
              <line x1={x(i)} y1={80} x2={x(i)} y2={150} style={{ stroke: "var(--grid-line)", strokeDasharray: "3 3" }} />
              <circle cx={x(i)} cy={160} r={5} style={{ fill: col }} />
              <text x={x(i)} y={190} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-muted)", fontSize: 11, fontWeight: on ? 700 : 400 }}>({q})</text>
              {kk === "split" && <><circle cx={x(i) - 10} cy={80} r={5} style={{ fill: on ? "var(--success)" : col }} /><circle cx={x(i) + 10} cy={80} r={5} style={{ fill: on ? "var(--success)" : col }} /></>}
              {kk === "inert" && <circle cx={x(i)} cy={80} r={7} style={{ fill: on ? "var(--success)" : col }} />}
              {kk === "ramified" && <><circle cx={x(i)} cy={80} r={5} style={{ fill: on ? "var(--danger)" : col }} /><circle cx={x(i)} cy={80} r={10} style={{ fill: "none", stroke: on ? "var(--danger)" : col }} /></>}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Fibre over ({p}) = Spec ℤ[i] ×<sub>Spec ℤ</sub> Spec 𝔽<sub>{p}</sub>: {k}. {text}.
      </p>
      <figcaption className="viz-caption">
        The fibre of a morphism over a point is a fibre product with Spec of the residue field. For ℤ[i] over ℤ it is Spec
        𝔽ₚ[x]/(x² + 1): two points when p is 1 modulo 4, one bigger point when p is 3 modulo 4, and one doubled point over
        2. Larger points, drawn bigger, have larger residue fields.
      </figcaption>
    </figure>
  );
}
