"use client";

import { useState } from "react";

type Gr = { name: string; pts: [number, number][]; edges: [number, number][]; tree: number[] };
const GRAPHS: Gr[] = [
  { name: "theta", pts: [[150, 40], [150, 160]], edges: [[0, 1], [0, 1], [0, 1]], tree: [0] },
  { name: "K₄", pts: [[150, 30], [60, 170], [240, 170], [150, 115]], edges: [[0, 1], [0, 2], [1, 2], [0, 3], [1, 3], [2, 3]], tree: [3, 4, 5] },
  { name: "cube", pts: [[70, 50], [190, 50], [190, 170], [70, 170], [110, 85], [230, 85], [230, 135], [110, 135]], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], tree: [0, 1, 2, 8, 9, 10, 11] },
];

/** A connected graph is homotopy equivalent to a wedge of circles: collapse a spanning tree. */
export function TreeCollapseViz() {
  const [k, setK] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const G = GRAPHS[k];
  const V = G.pts.length, E = G.edges.length, loops = E - V + 1;
  const curve = (a: [number, number], b: [number, number], idx: number, multi: number) => {
    if (multi === 1) return `M${a[0]},${a[1]} L${b[0]},${b[1]}`;
    const off = (idx - (multi - 1) / 2) * 60;
    const mx = (a[0] + b[0]) / 2 + off, my = (a[1] + b[1]) / 2;
    return `M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`;
  };
  const multi = G.name === "theta" ? 3 : 1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="graph">
        {GRAPHS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setCollapsed(false); }}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setCollapsed(!collapsed)}>{collapsed ? "show the graph" : "collapse the spanning tree"}</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A graph and its spanning tree, or the wedge of circles after collapsing" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {!collapsed ? (
          <g>
            {G.edges.map(([a, b], i) => {
              const t = G.tree.includes(i);
              return <path key={i} d={curve(G.pts[a], G.pts[b], i, multi)} style={{ fill: "none", stroke: t ? "var(--accent)" : "var(--text-muted)", strokeWidth: t ? 4 : 2, strokeDasharray: t ? undefined : "6 4" }} />;
            })}
            {G.pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} style={{ fill: "var(--text)" }} />)}
            <text x={300} y={60} style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>thick: a spanning tree ({V - 1} edges)</text>
            <text x={300} y={80} style={{ fill: "var(--text-muted)", fontSize: 12 }}>dashed: the other {loops} edges</text>
          </g>
        ) : (
          <g>
            {Array.from({ length: loops }, (_, i) => {
              const ang = (2 * Math.PI * i) / loops - Math.PI / 2;
              const mx = 150 + 45 * Math.cos(ang), my = 100 + 45 * Math.sin(ang);
              return <ellipse key={i} cx={mx} cy={my} rx={45} ry={18} transform={`rotate(${(ang * 180) / Math.PI} ${mx} ${my})`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />;
            })}
            <circle cx={150} cy={100} r={7} style={{ fill: "var(--accent)" }} />
            <text x={300} y={60} style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>the tree has become one point</text>
            <text x={300} y={80} style={{ fill: "var(--text-muted)", fontSize: 12 }}>each other edge is now a loop</text>
          </g>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {V} vertices, {E} edges. Collapsing the tree, a contractible subcomplex, is a homotopy equivalence, leaving a wedge of {E} − {V} + 1 = {loops} circle{loops === 1 ? "" : "s"}. So π₁ is free on {loops} generator{loops === 1 ? "" : "s"}.
      </p>
      <figcaption className="viz-caption">
        If A is a contractible subcomplex of a CW complex X, the quotient map X → X/A is a homotopy equivalence. For a
        connected graph, a spanning tree is such a subcomplex, so every connected graph has the homotopy type of a wedge of
        circles.
      </figcaption>
    </figure>
  );
}
