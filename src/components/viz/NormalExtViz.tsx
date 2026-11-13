"use client";

import { useState } from "react";

type Ext = { name: string; poly: string; deg: number; roots: { label: string; z: [number, number]; inField: boolean }[]; note: string };
const c2 = Math.cbrt(2), q2 = 2 ** 0.25, r3 = Math.sqrt(3);
const z5 = (k: number): [number, number] => [Math.cos((2 * Math.PI * k) / 5), Math.sin((2 * Math.PI * k) / 5)];
const EXTS: Ext[] = [
  { name: "ℚ(∛2)", poly: "x³ − 2", deg: 3, roots: [{ label: "∛2", z: [c2, 0], inField: true }, { label: "ω∛2", z: [-c2 / 2, (c2 * r3) / 2], inField: false }, { label: "ω²∛2", z: [-c2 / 2, (-c2 * r3) / 2], inField: false }], note: "The field is real, so it misses the two complex roots." },
  { name: "ℚ(⁴√2)", poly: "x⁴ − 2", deg: 4, roots: [{ label: "⁴√2", z: [q2, 0], inField: true }, { label: "−⁴√2", z: [-q2, 0], inField: true }, { label: "i⁴√2", z: [0, q2], inField: false }, { label: "−i⁴√2", z: [0, -q2], inField: false }], note: "It contains the two real roots but not the two imaginary ones." },
  { name: "ℚ(√2 + √3)", poly: "x⁴ − 10x² + 1", deg: 4, roots: [{ label: "√2+√3", z: [Math.SQRT2 + r3, 0], inField: true }, { label: "√3−√2", z: [r3 - Math.SQRT2, 0.0001], inField: true }, { label: "√2−√3", z: [Math.SQRT2 - r3, 0], inField: true }, { label: "−√2−√3", z: [-Math.SQRT2 - r3, 0.0001], inField: true }], note: "The field is ℚ(√2, √3), which contains all four sign changes." },
  { name: "ℚ(ζ₅)", poly: "x⁴ + x³ + x² + x + 1", deg: 4, roots: [1, 2, 3, 4].map((k) => ({ label: `ζ${["", "", "²", "³", "⁴"][k]}`, z: z5(k), inField: true })), note: "Every root is a power of ζ, so the field contains them all." },
];

/** Normal extensions: does ℚ(α) contain all the roots of the minimal polynomial of α? */
export function NormalExtViz() {
  const [ei, setEi] = useState(0);
  const E = EXTS[ei];
  const k = E.roots.filter((r) => r.inField).length;
  const normal = k === E.deg;
  const W = 300, B = 3.4, X = (x: number) => W / 2 + (x / B) * (W / 2 - 14), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 14);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Extension">
        {EXTS.map((e, i) => <button key={e.name} type="button" aria-pressed={ei === i} className={ei === i ? "seg is-on" : "seg"} onClick={() => setEi(i)}>{e.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Roots of the minimal polynomial, marking those in the field" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {E.roots.map((r) => (
          <g key={r.label}>
            <circle cx={X(r.z[0])} cy={Y(r.z[1])} r={7} style={{ fill: r.inField ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={X(r.z[0])} y={Y(r.z[1]) + (r.z[1] > 0 ? 24 : -13)} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{r.label}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>minimal polynomial {E.poly}; degree {E.deg}</div>
        <div>roots in the field: {k} of {E.deg}, so there are {k} automorphisms of {E.name} fixing ℚ</div>
        <div><strong>{normal ? "normal: |Aut| equals the degree" : "not normal: |Aut| is smaller than the degree"}</strong></div>
      </div>
      <p style={{ margin: "6px 0", fontSize: 14 }}>{E.note}</p>
      <figcaption className="viz-caption">
        An automorphism fixing ℚ must send α to a root of its minimal polynomial that lies in the field, and is determined by
        that choice. So the number of automorphisms equals the number of roots in the field, and reaches the degree exactly
        when the extension is normal.
      </figcaption>
    </figure>
  );
}
