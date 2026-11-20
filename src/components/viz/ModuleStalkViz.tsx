"use client";

import { useState } from "react";

const PRIMES = [2, 3, 5, 7, 11, 13];

const SUB = "₀₁₂₃₄₅₆₇₈₉";
/** ℤ localised at the prime p, written with a subscript. */
const zp = (p: number) => `ℤ₍${String(p).split("").map((c) => SUB[Number(c)]).join("")}₎`;

export const MODULES = [
  { label: "ℤ/12", stalk: (p: number) => (p === 2 ? "ℤ/4" : p === 3 ? "ℤ/3" : "0"), generic: "0" },
  { label: "ℤ ⊕ ℤ/12", stalk: (p: number) => (p === 2 ? "ℤ₍₂₎ ⊕ ℤ/4" : p === 3 ? "ℤ₍₃₎ ⊕ ℤ/3" : zp(p)), generic: "ℚ" },
  { label: "ℤ[1/6]", stalk: (p: number) => (p === 2 || p === 3 ? "ℚ" : zp(p)), generic: "ℚ" },
  { label: "ℚ", stalk: () => "ℚ", generic: "ℚ" },
];

/** The quasi-coherent sheaf of a ℤ-module M on Spec ℤ, seen through its stalks, the localisations of M. */
export function ModuleStalkViz() {
  const [k, setK] = useState(0);
  const M = MODULES[k];
  const support = PRIMES.filter((p) => M.stalk(p) !== "0");
  const X = (i: number) => 120 + i * 70;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="module M">
        {MODULES.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>M = {m.label}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="The stalks of the sheaf of M at the generic point and at small primes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={110} x2={530} y2={110} style={{ stroke: "var(--border-strong)" }} />
        <circle cx={45} cy={110} r={9} style={{ fill: M.generic === "0" ? "var(--bg-subtle)" : "var(--accent-soft)", stroke: "var(--accent)", strokeDasharray: "3 2" }} />
        <text x={45} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>(0)</text>
        <text x={45} y={80} textAnchor="middle" style={{ fill: M.generic === "0" ? "var(--text-faint)" : "var(--accent)", fontSize: 13, fontWeight: 700 }}>{M.generic}</text>
        {PRIMES.map((p, i) => {
          const s = M.stalk(p);
          const on = s !== "0";
          return (
            <g key={p}>
              <circle cx={X(i)} cy={110} r={6} style={{ fill: on ? "var(--success)" : "var(--text-faint)" }} />
              <text x={X(i)} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>({p})</text>
              <text x={X(i)} y={80} textAnchor="middle" style={{ fill: on ? "var(--success)" : "var(--text-faint)", fontSize: 12, fontWeight: 700 }}>{s}</text>
            </g>
          );
        })}
        <text x={20} y={30} style={{ fill: "var(--text-muted)", fontSize: 11 }}>stalk of M̃ at each point = M localised there</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        M = {M.label}: the stalk is non-zero at {support.length === PRIMES.length ? "every prime shown" : support.length ? support.map((p) => `(${p})`).join(", ") : "no prime shown"}{M.generic === "0" ? "; it vanishes at the generic point" : ", and at the generic point"}.
      </p>
      <figcaption className="viz-caption">
        A module M over a ring A gives a sheaf M̃ on Spec A, with sections <span style={{ whiteSpace: "nowrap" }}>M[1/f]</span> over
        the open set where f is invertible and stalk the localisation of M at each prime. Torsion lives only at the primes
        that kill it; ℤ[1/6] is ℚ at 2 and 3, where 6 is inverted, though not at other primes.
      </figcaption>
    </figure>
  );
}
