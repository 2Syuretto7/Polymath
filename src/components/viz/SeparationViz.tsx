"use client";

import { useState } from "react";

type Row = { ax: string; ok: boolean; why: string };
const SPACES: { label: string; desc: string; rows: Row[] }[] = [
  {
    label: "indiscrete pair",
    desc: "Two points a, b, with only ∅ and the whole set open.",
    rows: [
      { ax: "T₀", ok: false, why: "no open set contains one point but not the other" },
      { ax: "T₁", ok: false, why: "points are not closed" },
      { ax: "Hausdorff", ok: false, why: "the only non-empty open set contains both points" },
    ],
  },
  {
    label: "Sierpiński space",
    desc: "Two points a, b, with open sets ∅, {a} and {a, b}.",
    rows: [
      { ax: "T₀", ok: true, why: "{a} contains a but not b" },
      { ax: "T₁", ok: false, why: "the only open set containing b is the whole space, so b has no neighbourhood missing a" },
      { ax: "Hausdorff", ok: false, why: "any neighbourhood of b meets every neighbourhood of a" },
    ],
  },
  {
    label: "cofinite ℕ",
    desc: "The natural numbers, with open sets ∅ and the complements of finite sets.",
    rows: [
      { ax: "T₀", ok: true, why: "follows from T₁" },
      { ax: "T₁", ok: true, why: "each single point is a finite set, hence closed" },
      { ax: "Hausdorff", ok: false, why: "two non-empty open sets have finite complements, so they always meet" },
    ],
  },
  {
    label: "line with two origins",
    desc: "Two copies of ℝ glued along every point except 0, leaving origins 0 and 0′.",
    rows: [
      { ax: "T₀", ok: true, why: "follows from T₁" },
      { ax: "T₁", ok: true, why: "every point is closed" },
      { ax: "Hausdorff", ok: false, why: "every neighbourhood of 0 meets every neighbourhood of 0′ near 0" },
    ],
  },
  {
    label: "ℝ",
    desc: "The real line with its usual topology.",
    rows: [
      { ax: "T₀", ok: true, why: "follows from Hausdorff" },
      { ax: "T₁", ok: true, why: "follows from Hausdorff" },
      { ax: "Hausdorff", ok: true, why: "x < y are separated by intervals of radius (y − x)/2; metric spaces are even normal" },
    ],
  },
];

/** The separation axioms tested on five spaces. */
export function SeparationViz() {
  const [si, setSi] = useState(1);
  const S = SPACES[si];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Space">
        {SPACES.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px", fontSize: 14 }}>{S.desc}</p>
      <div style={{ display: "grid", gap: 6 }}>
        {S.rows.map((r) => (
          <div key={r.ax} style={{ display: "grid", gridTemplateColumns: "92px 44px 1fr", gap: 8, alignItems: "center", padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: r.ok ? "var(--accent-soft)" : "var(--bg)" }}>
            <strong style={{ fontSize: 14 }}>{r.ax}</strong>
            <span className="mono" style={{ fontSize: 13 }}>{r.ok ? "yes" : "no"}</span>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{r.why}</span>
          </div>
        ))}
      </div>
      <figcaption className="viz-caption">
        T₀: for two points, some open set contains one but not the other. T₁: each point has a neighbourhood missing the
        other, so points are closed. Hausdorff, or T₂: any two points have disjoint neighbourhoods. Each is stronger than the
        one before, and the examples show the implications cannot be reversed.
      </figcaption>
    </figure>
  );
}
