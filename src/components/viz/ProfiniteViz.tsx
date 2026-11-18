"use client";

import { useState } from "react";

const NS = [1, 2, 3, 4, 6, 12];
const POS: Record<number, [number, number]> = { 1: [260, 170], 2: [170, 120], 3: [350, 120], 4: [120, 60], 6: [260, 60], 12: [190, 14] };

/** Finite subfields of the algebraic closure of 𝔽ₚ, and the closed subgroups of the Galois group that fix them. */
export function ProfiniteViz() {
  const [n, setN] = useState(4);
  const [k, setK] = useState(5);
  const edges: [number, number][] = [];
  NS.forEach((a) => NS.forEach((b) => { if (b > a && b % a === 0 && !NS.some((c) => c > a && c < b && c % a === 0 && b % c === 0)) edges.push([a, b]); }));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="field">
        {NS.map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>𝔽<sub>p<sup>{m}</sup></sub></button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Lattice of finite fields of degree dividing 12" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {edges.map(([a, b]) => <line key={`${a}-${b}`} x1={POS[a][0]} y1={POS[a][1]} x2={POS[b][0]} y2={POS[b][1]} style={{ stroke: n % b === 0 ? "var(--accent)" : "var(--border-strong)", strokeWidth: n % b === 0 ? 2 : 1 }} />)}
        {NS.map((m) => {
          const inside = n % m === 0;
          return (
            <g key={m} onClick={() => setN(m)} style={{ cursor: "pointer" }}>
              <rect x={POS[m][0] - 34} y={POS[m][1] - 12} width={68} height={24} rx={6} style={{ fill: "var(--bg)" }} />
              <rect x={POS[m][0] - 34} y={POS[m][1] - 12} width={68} height={24} rx={6} style={{ fill: inside ? "var(--accent-soft)" : "var(--bg)", stroke: m === n ? "var(--accent)" : "var(--border)", strokeWidth: m === n ? 2 : 1 }} />
              <text x={POS[m][0]} y={POS[m][1] + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>degree {m}</text>
            </g>
          );
        })}
        <text x={10} y={150} style={{ fill: "var(--text-muted)", fontSize: 11 }}>shaded: subfields of</text>
        <text x={10} y={166} style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>the field of degree {n}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The field of degree {n} is fixed by the closed subgroup {n === 1 ? "" : n}Ẑ, generated topologically by φ{n > 1 ? <sup>{n}</sup> : null}. Its subfields are those of degree dividing {n}: {NS.filter((m) => n % m === 0).length} of them here.
      </p>
      <div className="viz-controls">
        <label>an integer k = {k} <input type="range" min={-6} max={12} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
      </div>
      <p className="mono" style={{ fontSize: 13 }}>
        φ<sup>{k}</sup> acts on each finite level as k mod n: {NS.map((m) => `${(((k % m) + m) % m)} mod ${m}`).join(", ")}. An element of Ẑ is any compatible choice of such residues, for all n at once; most are not integers.
      </p>
      <figcaption className="viz-caption">
        The Galois group of the algebraic closure of 𝔽ₚ over 𝔽ₚ is the inverse limit of the groups ℤ/n, the profinite integers Ẑ, with Frobenius φ, x ↦ xᵖ, as a
        topological generator. The powers of φ form a copy of ℤ, dense but not closed: it fixes only 𝔽ₚ, just as all of Ẑ
        does. The Galois correspondence holds only for closed subgroups.
      </figcaption>
    </figure>
  );
}
