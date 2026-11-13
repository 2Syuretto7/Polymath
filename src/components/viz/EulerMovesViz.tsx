"use client";

import { useState } from "react";

const START = [
  { label: "tetrahedron", v: 4, e: 6, f: 4 },
  { label: "octahedron", v: 6, e: 12, f: 8 },
  { label: "icosahedron", v: 12, e: 30, f: 20 },
  { label: "torus grid", v: 9, e: 27, f: 18 },
];
const MOVES = [
  { label: "add a vertex inside a triangle", dv: 1, de: 3, df: 2 },
  { label: "split an edge", dv: 1, de: 1, df: 0 },
  { label: "draw a diagonal across a face", dv: 0, de: 1, df: 1 },
  { label: "attach a handle", dv: 0, de: 0, df: -2, handle: true },
];

/** The Euler characteristic V − E + F survives every subdivision; only changing the surface, such as adding a handle, changes it. */
export function EulerMovesViz() {
  const [si, setSi] = useState(0);
  const [hist, setHist] = useState<number[]>([]);
  const S = START[si];
  const handles = hist.filter((k) => MOVES[k].handle).length;
  let F = S.f, E = S.e, V = S.v;
  for (const k of hist) { const M = MOVES[k]; if (M.handle) { F += -2 + 6; E += 6; } else { V += M.dv; E += M.de; F += M.df; } }
  const chi = V - E + F;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting surface">
        {START.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => { setSi(i); setHist([]); }}>{x.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {MOVES.map((M, k) => <button key={M.label} type="button" className={M.handle ? "btn btn-primary" : "btn"} onClick={() => setHist([...hist, k])}>{M.label}</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setHist([])}>start again</button>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead><tr><th style={{ textTransform: "none" }}>V</th><th style={{ textTransform: "none" }}>E</th><th style={{ textTransform: "none" }}>F</th><th style={{ textTransform: "none" }}>χ = V − E + F</th><th style={{ textTransform: "none" }}>handles added</th></tr></thead>
          <tbody><tr><td className="mono">{V}</td><td className="mono">{E}</td><td className="mono">{F}</td><td className="mono" style={{ fontWeight: 700 }}>{chi}</td><td className="mono">{handles}</td></tr></tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        moves so far: {hist.length === 0 ? "none" : hist.map((k) => MOVES[k].label).join(", then ")}
      </p>
      <figcaption className="viz-caption">
        Adding a vertex in a triangle adds one vertex, three edges and two faces; splitting an edge adds a vertex and an edge;
        a diagonal adds an edge and a face. Each leaves V − E + F alone. Attaching a handle removes two triangles and joins
        their edges by a tube of six triangles with six new edges, lowering χ by 2. The torus grid is the torus cut into
        eighteen triangles, with χ = 0.
      </figcaption>
    </figure>
  );
}
