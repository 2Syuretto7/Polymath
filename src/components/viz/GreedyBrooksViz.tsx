"use client";

import { useState } from "react";
import { GraphSvg, ring, VERTEX_COLOURS, type Edge, type Pt } from "./GraphSvg";

const complete = (n: number): Edge[] => {
  const e: Edge[] = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) e.push([i, j]);
  return e;
};
const wheel = (n: number): { pts: Pt[]; edges: Edge[] } => {
  const pts: Pt[] = [[200, 150], ...ring(n)];
  const edges: Edge[] = [];
  for (let i = 1; i <= n; i++) { edges.push([0, i]); edges.push([i, (i % n) + 1]); }
  return { pts, edges };
};

const GRAPHS = [
  { name: "a 5-cycle", pts: ring(5), edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]] as Edge[], note: "an odd cycle: one of Brooks’ two exceptions, needing Δ + 1 = 3 colours" },
  { name: "K₄", pts: ring(4, 200, 150, 110, -Math.PI / 4), edges: complete(4), note: "a complete graph: the other exception, needing Δ + 1 = 4 colours" },
  {
    name: "the cube",
    pts: [[90, 60], [310, 60], [310, 240], [90, 240], [160, 120], [240, 120], [240, 180], [160, 180]] as Pt[],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]] as Edge[],
    note: "neither exception, so Brooks promises at most Δ = 3 colours (in fact 2 suffice)",
  },
  { name: "a wheel with 5 spokes", ...wheel(5), note: "neither exception, so Brooks promises at most Δ = 5 colours (in fact 4 are needed)" },
];

/** Greedy colouring in a fixed order, compared with the maximum degree. */
export function GreedyBrooksViz() {
  const [gi, setGi] = useState(0);
  const [k, setK] = useState(0);
  const G = GRAPHS[gi];
  const n = G.pts.length;
  const deg = G.pts.map((_, v) => G.edges.filter(([a, b]) => a === v || b === v).length);
  const D = Math.max(...deg);
  const col: (number | null)[] = G.pts.map(() => null);
  for (let v = 0; v < k; v++) {
    const taken = new Set(G.edges.flatMap(([a, b]) => (a === v ? [col[b]] : b === v ? [col[a]] : [])));
    let c = 0;
    while (taken.has(c)) c++;
    col[v] = c;
  }
  const used = new Set(col.filter((c) => c !== null)).size;
  const done = k === n;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="graph" style={{ flexWrap: "wrap" }}>
        {GRAPHS.map((g, i) => <button key={g.name} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => { setGi(i); setK(0); }}>{g.name}</button>)}
      </div>
      <GraphSvg pts={G.pts} edges={G.edges} label="A graph being coloured greedily" h={290}
        labels={col.map((c) => (c === null ? "" : c + 1))}
        vertexFill={(i) => (col[i] === null ? undefined : VERTEX_COLOURS[col[i]!])}
        vertexRing={(i) => i === k} />
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setK(k + 1)}>Colour next vertex</button>
        <button type="button" className="btn btn-ghost" onClick={() => setK(0)}>Reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        maximum degree Δ = {D}. coloured {k} of {n}, using {used} colour{used === 1 ? "" : "s"}.{" "}
        {done ? `Greedy used ${used} ≤ Δ + 1 = ${D + 1}. This is ${G.note}.` : "The ringed vertex takes the smallest colour not used by its neighbours."}
      </p>
      <figcaption className="viz-caption">
        A vertex has at most Δ neighbours, so greedy colouring never needs more than Δ + 1 colours. Brooks&rsquo; theorem
        says one fewer always suffices, except for complete graphs and odd cycles.
      </figcaption>
    </figure>
  );
}
