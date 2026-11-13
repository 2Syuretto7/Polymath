"use client";

import { useState } from "react";

type Node = { g: string; f: string; level: number; x: number; order: number; normal: boolean };
const PRESETS: { name: string; group: string; nodes: Node[]; edges: [number, number][]; degree: number }[] = [
  {
    name: "ℚ(√2, √3) over ℚ",
    group: "Gal = {1, σ, τ, στ}, with σ: √2 ↦ −√2 and τ: √3 ↦ −√3",
    degree: 4,
    nodes: [
      { g: "{1}", f: "ℚ(√2, √3)", level: 0, x: 0.5, order: 1, normal: true },
      { g: "⟨σ⟩", f: "ℚ(√3)", level: 1, x: 0.15, order: 2, normal: true },
      { g: "⟨τ⟩", f: "ℚ(√2)", level: 1, x: 0.5, order: 2, normal: true },
      { g: "⟨στ⟩", f: "ℚ(√6)", level: 1, x: 0.85, order: 2, normal: true },
      { g: "Gal", f: "ℚ", level: 2, x: 0.5, order: 4, normal: true },
    ],
    edges: [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4]],
  },
  {
    name: "ℚ(∛2, ω) over ℚ",
    group: "Gal ≅ S₃, with σ: ∛2 ↦ ω∛2 fixing ω, and τ complex conjugation",
    degree: 6,
    nodes: [
      { g: "{1}", f: "ℚ(∛2, ω)", level: 0, x: 0.5, order: 1, normal: true },
      { g: "⟨τ⟩", f: "ℚ(∛2)", level: 1, x: 0.06, order: 2, normal: false },
      { g: "⟨στ⟩", f: "ℚ(ω²∛2)", level: 1, x: 0.38, order: 2, normal: false },
      { g: "⟨σ²τ⟩", f: "ℚ(ω∛2)", level: 1, x: 0.7, order: 2, normal: false },
      { g: "⟨σ⟩ = A₃", f: "ℚ(ω)", level: 1.5, x: 0.94, order: 3, normal: true },
      { g: "Gal = S₃", f: "ℚ", level: 2, x: 0.5, order: 6, normal: true },
    ],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 5], [3, 5], [4, 5]],
  },
];

/** The Galois correspondence: subgroups of the Galois group match intermediate fields, with inclusions reversed. */
export function GaloisLatticeViz() {
  const [pi, setPi] = useState(1);
  const [sel, setSel] = useState(1);
  const P = PRESETS[pi];
  const W = 300, H = 230;
  const pos = (n: Node, flip: boolean): [number, number] => [38 + n.x * (W - 76), flip ? 30 + (n.level / 2) * (H - 60) : H - 30 - (n.level / 2) * (H - 60)];
  const S = P.nodes[sel];
  const diagram = (flip: boolean, lab: (n: Node) => string) => (
    <>
      {P.edges.map(([a, b], k) => { const [x1, y1] = pos(P.nodes[a], flip), [x2, y2] = pos(P.nodes[b], flip); return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--border)", strokeWidth: 1.5 }} />; })}
      {P.nodes.map((n, i) => {
        const [x, y] = pos(n, flip);
        const on = i === sel;
        return (
          <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
            <rect x={x - 32} y={y - 13} width={64} height={26} rx={6} style={{ fill: on ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fill: on ? "var(--bg)" : "var(--text)", fontSize: 11 }}>{lab(n)}</text>
          </g>
        );
      })}
    </>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Extension">
        {PRESETS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setSel(1); }}>{p.name}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 14 }}>{P.group}. Click a subgroup or a field.</p>
      <svg viewBox={`0 0 ${2 * W + 20} ${H + 20}`} role="img" aria-label="Lattice of subgroups and lattice of intermediate fields" style={{ width: "100%", display: "block" }}>
        <g>{diagram(true, (n) => n.g)}</g>
        <g transform={`translate(${W + 20},0)`}>{diagram(true, (n) => n.f)}</g>
        <text x={W / 2} y={H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>subgroups: smallest at the top</text>
        <text x={W + 20 + W / 2} y={H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>fixed fields: largest at the top</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>H = {S.g} ↔ fixed field {S.f}</div>
        <div>|H| = {S.order} = degree of the top field over {S.f}; index {P.degree / S.order} = degree of {S.f} over ℚ</div>
        <div>H normal in Gal: {S.normal ? "yes" : "no"}, so {S.f} is {S.normal ? "" : "not "}a normal extension of ℚ</div>
      </div>
      <figcaption className="viz-caption">
        Each subgroup H corresponds to the field of elements it fixes, and each intermediate field to the automorphisms that
        fix it. Bigger subgroups fix smaller fields, so the two diagrams have the same shape with every inclusion reversed.
      </figcaption>
    </figure>
  );
}
