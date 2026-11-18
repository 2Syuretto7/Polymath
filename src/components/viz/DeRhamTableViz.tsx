"use client";

import { useState } from "react";

const SPACES: { name: string; b: number[]; gens: string[]; why: string }[] = [
  { name: "ℝⁿ", b: [1, 0, 0], gens: ["constants", "", ""], why: "Star-shaped: by the Poincaré lemma every closed form of positive degree is exact." },
  { name: "circle S¹", b: [1, 1, 0], gens: ["constants", "dθ", ""], why: "dθ is closed, not exact: its integral round the circle is 2π." },
  { name: "punctured plane", b: [1, 1, 0], gens: ["constants", "dθ, the angle form", ""], why: "It deformation retracts onto a circle, and de Rham cohomology is homotopy invariant." },
  { name: "sphere S²", b: [1, 0, 1], gens: ["constants", "", "the area form"], why: "Every closed 1-form is exact, but the area form has integral 4π, so it is not exact." },
  { name: "torus T²", b: [1, 2, 1], gens: ["constants", "dθ, dφ", "dθ ∧ dφ"], why: "The two angle forms give independent classes, and their wedge is the area class." },
  { name: "genus 2 surface", b: [1, 4, 1], gens: ["constants", "two per handle", "the area form"], why: "Each handle contributes two independent loops, and so two classes in degree 1." },
];

/** De Rham cohomology of some familiar manifolds: dimensions and representative forms. */
export function DeRhamTableViz() {
  const [k, setK] = useState(4);
  const S = SPACES[k];
  const chi = S.b[0] - S.b[1] + S.b[2];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space" style={{ flexWrap: "wrap" }}>
        {SPACES.map((s, i) => <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.name}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Dimensions of de Rham cohomology groups" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {S.b.map((b, i) => (
          <g key={i}>
            <text x={30 + i * 170} y={24} style={{ fill: "var(--text-muted)", fontSize: 12 }}>H{["⁰", "¹", "²"][i]}</text>
            {Array.from({ length: Math.max(b, 0) }, (_, j) => <rect key={j} x={30 + i * 170 + j * 28} y={34} width={22} height={22} rx={4} style={{ fill: "var(--accent)" }} />)}
            {b === 0 && <text x={30 + i * 170} y={50} style={{ fill: "var(--text-faint)", fontSize: 12 }}>0</text>}
            <text x={30 + i * 170} y={76} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>dimension {b}</text>
            <text x={30 + i * 170} y={94} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{S.gens[i] ? (S.gens[i].length > 26 ? S.gens[i].slice(0, 26) + "…" : S.gens[i]) : "—"}</text>
          </g>
        ))}
        <text x={30} y={130} style={{ fill: "var(--text-muted)", fontSize: 12 }}>Euler characteristic b₀ − b₁ + b₂ = {chi < 0 ? `−${-chi}` : chi}</text>
      </svg>
      <p style={{ fontSize: 13, margin: "4px 0" }}>{S.why}</p>
      <figcaption className="viz-caption">
        Hᵏ is closed k-forms modulo exact k-forms. Each square is one dimension: one independent way for a closed form to fail
        to be exact. These numbers agree with the Betti numbers from singular homology.
      </figcaption>
    </figure>
  );
}
