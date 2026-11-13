"use client";

import { useState } from "react";

const LEVELS = ["field", "Euclidean domain", "PID", "UFD", "integral domain", "commutative ring"];
const RINGS = [
  { name: "ℚ, ℝ, ℂ, ℤₚ", level: 0, why: "Every non-zero element is a unit, so every ideal is 0 or the whole ring." },
  { name: "ℤ", level: 1, why: "Division with remainder, measured by absolute value." },
  { name: "ℤ[i]", level: 1, why: "Division with remainder, measured by the norm a² + b²." },
  { name: "F[x]", level: 1, why: "Polynomial long division over a field, measured by degree." },
  { name: "ℤ[(1 + √−19)/2]", level: 2, why: "Every ideal is principal, but a clever argument shows no function makes it Euclidean." },
  { name: "ℤ[x]", level: 3, why: "Unique factorisation holds, by Gauss's lemma, but the ideal (2, x) is not principal." },
  { name: "F[x, y]", level: 3, why: "Unique factorisation holds, but (x, y) is not principal." },
  { name: "ℤ[√−5]", level: 4, why: "A domain, but 6 = 2 · 3 = (1 + √−5)(1 − √−5) are two different factorisations into irreducibles." },
  { name: "ℤ₆", level: 5, why: "Not a domain: 2 · 3 = 0." },
];

/** Nested classes of rings, with an example at each level and the reason it stops there. */
export function RingHierarchyViz() {
  const [sel, setSel] = useState(5);
  const r = RINGS[sel];
  const W = 520, H = 300, inset = 22;
  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Nested classes of rings" style={{ width: "100%", display: "block" }}>
        {LEVELS.slice().reverse().map((lv, j) => {
          const i = LEVELS.length - 1 - j;
          const k = LEVELS.length - 1 - i;
          const on = i >= r.level;
          return (
            <g key={lv}>
              <rect x={k * inset + 2} y={k * inset * 0.85 + 2} width={W - 2 * k * inset - 4} height={H - 2 * k * inset * 0.85 - 4} rx={10}
                style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", fillOpacity: on ? 0.35 : 1, stroke: on ? "var(--accent)" : "var(--border)" }} />
              <text x={k * inset + 12} y={k * inset * 0.85 + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{lv}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6, marginTop: 8 }}>
        {RINGS.map((x, i) => (
          <button key={x.name} type="button" aria-pressed={sel === i} className={sel === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setSel(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "8px 0 0" }}><strong>{r.name}</strong> is {LEVELS[r.level] === "integral domain" ? "an" : "a"} {LEVELS[r.level]}{r.level > 0 ? `, but not ${LEVELS[r.level - 1] === "integral domain" ? "an" : "a"} ${LEVELS[r.level - 1]}` : ""}. {r.why}</p>
      <figcaption className="viz-caption">
        Each class sits inside the next: every field is Euclidean, every Euclidean domain is a principal ideal domain, every PID has unique factorisation, and every UFD is an integral domain. Choose a ring to see the smallest box it belongs to, and why it falls outside the box within.
      </figcaption>
    </figure>
  );
}
