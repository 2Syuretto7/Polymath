"use client";

import { useState } from "react";

type G = { pos: [number, number][]; edges: [number, number][] };

const TREE: G = {
  pos: [[270, 30], [150, 100], [270, 100], [390, 100], [110, 170], [190, 170], [230, 170], [310, 170], [350, 170], [430, 170]],
  edges: [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [2, 7], [3, 8], [3, 9]],
};
const RHIZOME: G = {
  pos: TREE.pos,
  edges: [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [2, 7], [3, 8], [3, 9], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [1, 2], [2, 3], [4, 6], [7, 9]],
};

function components(n: number, edges: [number, number][], removed: number) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  for (const [a, b] of edges) if (a !== removed && b !== removed) parent[find(a)] = find(b);
  const roots = new Set<number>();
  for (let i = 0; i < n; i++) if (i !== removed) roots.add(find(i));
  return roots.size;
}

/** Cutting a node from a tree and from a rhizome. */
export function TreeRhizomeViz() {
  const [rh, setRh] = useState(false);
  const [cut, setCut] = useState<number | null>(null);
  const G = rh ? RHIZOME : TREE;
  const k = cut === null ? 1 : components(G.pos.length, G.edges, cut);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="structure">
        <button type="button" aria-pressed={!rh} className={!rh ? "seg is-on" : "seg"} onClick={() => setRh(false)}>tree</button>
        <button type="button" aria-pressed={rh} className={rh ? "seg is-on" : "seg"} onClick={() => setRh(true)}>rhizome</button>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="A network of nodes; click a node to cut it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {G.edges.map(([a, b], i) => (
          <line key={i} x1={G.pos[a][0]} y1={G.pos[a][1]} x2={G.pos[b][0]} y2={G.pos[b][1]} style={{ stroke: a === cut || b === cut ? "var(--grid-line)" : "var(--text-muted)", strokeWidth: 2, strokeDasharray: a === cut || b === cut ? "3 4" : undefined }} />
        ))}
        {G.pos.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={12} role="button" aria-label={`cut node ${i}`} onClick={() => setCut(cut === i ? null : i)} style={{ cursor: "pointer", fill: i === cut ? "var(--danger)" : "var(--accent)", stroke: "var(--surface)", strokeWidth: 3 }} />
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {cut === null ? "Click a node to cut it." : `With node ${cut} cut, the network falls into ${k} piece${k === 1 ? "" : "s"}.`}{" "}
        {cut === 0 && !rh ? "Cutting the root of a tree destroys its unity." : ""}
      </p>
      <figcaption className="viz-caption">
        Deleuze and Guattari contrast the <strong>tree</strong>, with a root, a hierarchy and a single line of descent, with
        the <strong>rhizome</strong>, in which any point can connect to any other. A rhizome has no centre whose loss is
        fatal: cut it anywhere and it carries on along other lines.
      </figcaption>
    </figure>
  );
}
