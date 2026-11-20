"use client";

import { useState } from "react";

type G = { name: string; eq: string; dim: (n: number) => number; compact: string; connected: string; field: string };
const GROUPS: G[] = [
  { name: "GL(n, ℝ)", eq: "det A ≠ 0", dim: (n) => n * n, compact: "no", connected: "no: two components, det > 0 and det < 0", field: "real" },
  { name: "SL(n, ℝ)", eq: "det A = 1", dim: (n) => n * n - 1, compact: "no (for n ≥ 2)", connected: "yes", field: "real" },
  { name: "O(n)", eq: "AᵀA = I", dim: (n) => (n * (n - 1)) / 2, compact: "yes", connected: "no: two components, det = ±1", field: "real" },
  { name: "SO(n)", eq: "AᵀA = I, det A = 1", dim: (n) => (n * (n - 1)) / 2, compact: "yes", connected: "yes", field: "real" },
  { name: "U(n)", eq: "A*A = I", dim: (n) => n * n, compact: "yes", connected: "yes", field: "complex" },
  { name: "SU(n)", eq: "A*A = I, det A = 1", dim: (n) => n * n - 1, compact: "yes", connected: "yes (and simply connected)", field: "complex" },
  { name: "Sp(2n, ℝ)", eq: "AᵀJA = J", dim: (n) => n * (2 * n + 1), compact: "no", connected: "yes", field: "real, 2n × 2n" },
];

/** A catalogue of classical matrix groups: defining equations, dimensions, compactness, connectedness. */
export function GroupCatalogueViz() {
  const [g, setG] = useState(3);
  const [n, setN] = useState(3);
  const G0 = GROUPS[g];
  const d = G0.dim(n);
  const amb = G0.name.startsWith("Sp") ? 4 * n * n : G0.field === "complex" ? 2 * n * n : n * n;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="group" style={{ flexWrap: "wrap" }}>
        {GROUPS.map((x, i) => <button key={x.name} type="button" aria-pressed={g === i} className={g === i ? "seg is-on" : "seg"} onClick={() => setG(i)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={6} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="Dimension of the group inside its ambient space of matrices" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={20} y={20} width={480} height={22} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <rect x={20} y={20} width={(480 * d) / amb} height={22} rx={4} style={{ fill: "var(--accent)", opacity: 0.8 }} />
        <text x={20} y={60} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dimension {d} out of {amb} real dimensions of matrices</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div><strong>{G0.name.replace("n", String(n)).replace("2" + String(n), String(2 * n))}</strong>: {G0.eq}</div>
        <div>dimension: {d}</div>
        <div>compact: {G0.compact}</div>
        <div>connected: {G0.connected}</div>
      </div>
      <figcaption className="viz-caption">
        Each classical group is cut out of a space of matrices by polynomial equations, so it is a closed subgroup and
        hence a Lie group. Its dimension is the dimension of the matrix space minus the number of independent equations:
        AᵀA = I is symmetric, so it imposes n(n + 1)/2 conditions, leaving n(n − 1)/2.
      </figcaption>
    </figure>
  );
}
