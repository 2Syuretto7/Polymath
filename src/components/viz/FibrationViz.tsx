"use client";

import { useState } from "react";

type Row = { k: number; F: string; E: string; B: string };
const FIBS: { name: string; F: string; E: string; B: string; rows: Row[]; note: string }[] = [
  { name: "covering ℤ → ℝ → S¹", F: "ℤ", E: "ℝ", B: "S¹", rows: [
    { k: 3, F: "0", E: "0", B: "0" }, { k: 2, F: "0", E: "0", B: "0" }, { k: 1, F: "0", E: "0", B: "ℤ" }, { k: 0, F: "ℤ", E: "0", B: "0" },
  ], note: "ℝ is contractible, so the connecting map π₁(S¹) → π₀(ℤ) is a bijection: π₁(S¹) ≅ ℤ, and πₖ(S¹) = 0 for k ≥ 2." },
  { name: "Hopf S¹ → S³ → S²", F: "S¹", E: "S³", B: "S²", rows: [
    { k: 4, F: "0", E: "ℤ/2", B: "ℤ/2" }, { k: 3, F: "0", E: "ℤ", B: "ℤ" }, { k: 2, F: "0", E: "0", B: "ℤ" }, { k: 1, F: "ℤ", E: "0", B: "0" },
  ], note: "The circle has no higher homotopy, so πₖ(S³) ≅ πₖ(S²) for k ≥ 3, giving π₃(S²) ≅ ℤ. In degree 2, π₂(S²) ≅ π₁(S¹) ≅ ℤ through the connecting map." },
  { name: "quaternionic Hopf S³ → S⁷ → S⁴", F: "S³", E: "S⁷", B: "S⁴", rows: [
    { k: 7, F: "ℤ/2", E: "ℤ", B: "ℤ ⊕ ℤ/12" }, { k: 6, F: "ℤ/12", E: "0", B: "ℤ/2" }, { k: 5, F: "ℤ/2", E: "0", B: "ℤ/2" }, { k: 4, F: "ℤ/2", E: "0", B: "ℤ" }, { k: 3, F: "ℤ", E: "0", B: "0" },
  ], note: "The inclusion of the fibre S³ into S⁷ is null-homotopic, so the sequence breaks into split short exact sequences: πₖ(S⁴) ≅ πₖ(S⁷) ⊕ πₖ₋₁(S³). So π₇(S⁴) contains a copy of ℤ, an element of infinite order above the diagonal." },
];
const SUB = "₀₁₂₃₄₅₆₇";

/** The long exact sequence of homotopy groups of a fibration F → E → B, for three fibrations. */
export function FibrationViz() {
  const [k, setK] = useState(1);
  const f = FIBS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="fibration">
        {FIBS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 13, margin: "10px 0", lineHeight: 2, overflowX: "auto" }}>
        {f.rows.map((r) => (
          <div key={r.k}>
            π{SUB[r.k]}({f.F}) <b style={{ color: r.F === "0" ? "var(--text-faint)" : "var(--accent)" }}>{r.F}</b> → π{SUB[r.k]}({f.E}) <b style={{ color: r.E === "0" ? "var(--text-faint)" : "var(--accent)" }}>{r.E}</b> → π{SUB[r.k]}({f.B}) <b style={{ color: r.B === "0" ? "var(--text-faint)" : "var(--accent)" }}>{r.B}</b>{r.k > 0 ? <span style={{ color: "var(--text-muted)" }}> →∂</span> : null}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{f.note}</p>
      <figcaption className="viz-caption">
        Each row continues into the next through ∂: a sphere in the base lifts to a disc in the total space, whose boundary
        lies in a fibre. Whenever one of the three spaces has trivial groups, the other two are forced to agree.
      </figcaption>
    </figure>
  );
}
