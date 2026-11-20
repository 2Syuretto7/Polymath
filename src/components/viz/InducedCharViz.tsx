"use client";

import { useState } from "react";

// S₃ classes: e (1), transpositions (3), 3-cycles (2)
const SIZES = [1, 3, 2];
const IRR = [
  { name: "trivial", chi: [1, 1, 1] },
  { name: "sign", chi: [1, -1, 1] },
  { name: "standard", chi: [2, 0, -1] },
];
const w = "ω";
/** Each source: subgroup H, its order, a character of H, and the induced character on the classes of S₃. */
const SRC = [
  { h: "{e}", ord: 1, rep: "trivial", ind: [6, 0, 0] },
  { h: "⟨(12)⟩", ord: 2, rep: "trivial", ind: [3, 1, 0] },
  { h: "⟨(12)⟩", ord: 2, rep: "sign", ind: [3, -1, 0] },
  { h: "A₃", ord: 3, rep: "trivial", ind: [2, 0, 2] },
  { h: "A₃", ord: 3, rep: `(123) ↦ ${w}`, ind: [2, 0, -1] },
];
const ip = (a: number[], b: number[]) => a.reduce((s, x, i) => s + SIZES[i] * x * b[i], 0) / 6;
const sg = (x: number) => String(x).replace("-", "−");

/** Inducing characters from subgroups of S₃ and decomposing the result. */
export function InducedCharViz() {
  const [k, setK] = useState(1);
  const src = SRC[k];
  const mult = IRR.map((r) => ip(src.ind, r.chi));
  const parts = mult.map((m, i) => (m ? `${m === 1 ? "" : m + "·"}${IRR[i].name}` : "")).filter(Boolean);
  const X0 = 140, cw = 110;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="subgroup and character">
        {SRC.map((s, i) => <button key={i} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.h}, {s.rep.startsWith("(") ? "ω" : s.rep}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Induced character of S3 beside the irreducible characters" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {["e", "(12)", "(123)"].map((c, j) => <text key={c} x={X0 + cw * (j + 0.5)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{c} (size {SIZES[j]})</text>)}
        {[...IRR, { name: "Ind χ", chi: src.ind }].map((r, i) => {
          const yy = 40 + i * 24 + (i === 3 ? 10 : 0);
          const last = i === 3;
          return (
            <g key={r.name}>
              {last && <line x1={20} y1={yy - 17} x2={X0 + cw * 3} y2={yy - 17} style={{ stroke: "var(--border-strong)" }} />}
              <text x={X0 - 10} y={yy} textAnchor="end" style={{ fill: last ? "var(--accent)" : "var(--text-muted)", fontSize: 12, fontWeight: last ? 700 : 400 }}>{r.name}</text>
              {r.chi.map((v, j) => <text key={j} x={X0 + cw * (j + 0.5)} y={yy} textAnchor="middle" className="mono" style={{ fill: last ? "var(--accent)" : "var(--text)", fontSize: 12, fontWeight: last ? 700 : 400 }}>{sg(v)}</text>)}
            </g>
          );
        })}
        <text x={20} y={142} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Inducing from H = {src.h}, character {src.rep}: dimension [G : H] × dim = {6 / src.ord} × 1.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Ind χ = {parts.join(" + ")}. Multiplicities: {mult.map(sg).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        Ind χ (g) = (1/|H|) Σ χ(x⁻¹gx), the sum over those x in G with x⁻¹gx in H. It vanishes on classes that miss H.
        By Frobenius reciprocity, the multiplicity of an irreducible ψ in Ind χ equals the multiplicity of χ in ψ
        restricted to H. Here ω is the character of A₃ sending (123) to a primitive cube root of unity.
      </figcaption>
    </figure>
  );
}
