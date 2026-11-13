"use client";

import { useState } from "react";

const c2 = Math.cbrt(2), r3 = Math.sqrt(3);
const ROOTS = [
  { label: "∛2", z: [c2, 0] },
  { label: "ω∛2", z: [-c2 / 2, (c2 * r3) / 2] },
  { label: "ω²∛2", z: [-c2 / 2, (-c2 * r3) / 2] },
];
// permutations of root indices: perm[i] = image of root i
const SIGMA = [1, 2, 0];
const TAU = [0, 2, 1];
const compose = (f: number[], g: number[]) => g.map((x) => f[x]); // f after g
const NAMES: Record<string, string> = { "0,1,2": "1", "1,2,0": "σ", "2,0,1": "σ²", "0,2,1": "τ", "1,0,2": "στ", "2,1,0": "σ²τ" };
const FIXED: Record<string, string> = { "1": "everything: the whole field ℚ(∛2, ω)", "σ": "ℚ(ω)", "σ²": "ℚ(ω)", "τ": "ℚ(∛2)", "στ": "ℚ(ω²∛2)", "σ²τ": "ℚ(ω∛2)" };

/** Automorphisms of the splitting field of x³ − 2 as permutations of its three roots. */
export function RootPermViz() {
  const [perm, setPerm] = useState([0, 1, 2]);
  const [word, setWord] = useState<string[]>([]);
  const name = NAMES[perm.join()];
  const W = 300, B = 1.8, X = (x: number) => W / 2 + (x / B) * (W / 2 - 20), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 20);
  const omegaTo = (perm[1] - perm[0] + 3) % 3 === 1 ? "ω" : "ω²";
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => { setPerm(compose(SIGMA, perm)); setWord([...word, "σ"]); }}>Apply σ</button>
        <button type="button" className="btn btn-primary" onClick={() => { setPerm(compose(TAU, perm)); setWord([...word, "τ"]); }}>Apply τ</button>
        <button type="button" className="btn" onClick={() => { setPerm([0, 1, 2]); setWord([]); }}>Reset</button>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The three roots and where the automorphism sends each" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
        <defs><marker id="rpArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {ROOTS.map((r, i) => {
          const j = perm[i];
          if (i === j) return null;
          const [x1, y1] = [X(r.z[0]), Y(r.z[1])], [x2, y2] = [X(ROOTS[j].z[0]), Y(ROOTS[j].z[1])];
          const mx = (x1 + x2) / 2 + (y2 - y1) * 0.18, my = (y1 + y2) / 2 - (x2 - x1) * 0.18;
          const d = Math.hypot(x2 - x1, y2 - y1), ex = x2 - ((x2 - mx) / Math.hypot(x2 - mx, y2 - my)) * 12, ey = y2 - ((y2 - my) / Math.hypot(x2 - mx, y2 - my)) * 12;
          return d > 1 ? <path key={i} d={`M${x1},${y1} Q${mx},${my} ${ex},${ey}`} markerEnd="url(#rpArrow)" style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} /> : null;
        })}
        {ROOTS.map((r, i) => (
          <g key={r.label}>
            <circle cx={X(r.z[0])} cy={Y(r.z[1])} r={8} style={{ fill: perm[i] === i ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={X(r.z[0]) + (r.z[0] > 0 ? 0 : -6)} y={Y(r.z[1]) + (r.z[1] > 0 ? -14 : r.z[1] < 0 ? 24 : -14)} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{r.label}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>applied so far: {word.length ? word.join(" then ") : "nothing"}; the result is {name}</div>
        <div>{ROOTS.map((r, i) => `${r.label} ↦ ${ROOTS[perm[i]].label}`).join(", ")}; ω ↦ {omegaTo}</div>
        <div>fixed field of this element: {FIXED[name]}</div>
      </div>
      <figcaption className="viz-caption">
        σ multiplies each root by ω; τ is complex conjugation. Every automorphism permutes the three roots, filled when fixed,
        and every permutation arises: the Galois group is all of S₃, of order 6, the degree of the field. Only the rotations 1,
        σ, σ² form a normal subgroup, matching the one normal intermediate field ℚ(ω).
      </figcaption>
    </figure>
  );
}
