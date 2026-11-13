"use client";

import { useState } from "react";

const SOLIDS = {
  tet: { name: "tetrahedron", G: 12, parts: { vertices: [4, "the 3 rotations about the axis through the vertex"], edges: [6, "the identity and the half turn about the axis through the edge's midpoint"], faces: [4, "the 3 rotations about the axis through the face's centre"] } },
  cube: { name: "cube", G: 24, parts: { vertices: [8, "the 3 rotations about the diagonal through the vertex"], edges: [12, "the identity and the half turn through the edge's midpoint"], faces: [6, "the 4 rotations about the axis through the face's centre"] } },
  oct: { name: "octahedron", G: 24, parts: { vertices: [6, "the 4 rotations about the axis through the vertex"], edges: [12, "the identity and the half turn through the edge's midpoint"], faces: [8, "the 3 rotations about the axis through the face's centre"] } },
  dod: { name: "dodecahedron", G: 60, parts: { vertices: [20, "the 3 rotations about the axis through the vertex"], edges: [30, "the identity and the half turn through the edge's midpoint"], faces: [12, "the 5 rotations about the axis through the face's centre"] } },
  ico: { name: "icosahedron", G: 60, parts: { vertices: [12, "the 5 rotations about the axis through the vertex"], edges: [30, "the identity and the half turn through the edge's midpoint"], faces: [20, "the 3 rotations about the axis through the face's centre"] } },
} as const;
type S = keyof typeof SOLIDS;
type P = "vertices" | "edges" | "faces";

/** Orbit-stabiliser for the rotations of the Platonic solids: the number of vertices, edges or faces times the rotations fixing one gives the order of the group. */
export function OrbitStabViz() {
  const [s, setS] = useState<S>("cube");
  const [p, setP] = useState<P>("faces");
  const sol = SOLIDS[s];
  const [orb, why] = sol.parts[p];
  const stab = sol.G / orb;
  const cell = 400 / sol.G;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Solid">
        {(Object.keys(SOLIDS) as S[]).map((q) => (
          <button key={q} type="button" className={q === s ? "seg is-on" : "seg"} aria-pressed={q === s} onClick={() => setS(q)}>{SOLIDS[q].name}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="What the rotations move" style={{ marginTop: 8 }}>
        {(["vertices", "edges", "faces"] as P[]).map((q) => (
          <button key={q} type="button" className={q === p ? "seg is-on" : "seg"} aria-pressed={q === p} onClick={() => setP(q)}>{q}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A rectangle of rotations split into orbit times stabiliser" style={{ width: "100%", display: "block", marginTop: 10 }}>
        {Array.from({ length: orb }, (_, i) => (
          <rect key={i} x={20 + i * stab * cell} y={20} width={stab * cell - 2} height={70} rx={3} style={{ fill: i === 0 ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
        ))}
        <text x={20} y={110} style={{ fontSize: 12, fill: "var(--text-muted)" }}>all {sol.G} rotations, grouped by where they send one chosen {p.slice(0, -1).replace("vertice", "vertex")}</text>
        <text x={20} y={132} style={{ fontSize: 12, fill: "var(--text-muted)" }}>{orb} blocks, one for each position it can reach, each of {stab} rotations</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>orbit: number of {p}</td><td className="mono">{orb}</td></tr>
          <tr><td>stabiliser of one</td><td>{stab}: {why}</td></tr>
          <tr><td>orbit × stabiliser</td><td className="mono">{orb} × {stab} = {sol.G}, the number of rotations</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Whichever kind of part you count, the product is the same, because it is always the order of the rotation group. The shaded first block is the stabiliser; every other block is a coset of it, made of all the rotations that send the chosen part to one particular place.
      </figcaption>
    </figure>
  );
}
