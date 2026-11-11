"use client";

import { useState } from "react";
import { GraphSvg, ring, VERTEX_COLOURS, type Edge, type Pt } from "./GraphSvg";

const wheel = (n: number): { pts: Pt[]; edges: Edge[] } => {
  const pts: Pt[] = [[200, 150], ...ring(n)];
  const edges: Edge[] = [];
  for (let i = 1; i <= n; i++) { edges.push([0, i]); edges.push([i, (i % n) + 1]); }
  return { pts, edges };
};
const cycle5 = { pts: ring(5), edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]] as Edge[] };
const cube = {
  pts: [[90, 60], [310, 60], [310, 240], [90, 240], [160, 120], [240, 120], [240, 180], [160, 180]] as Pt[],
  edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]] as Edge[],
};

const PRESETS = [
  { name: "a 5-cycle", g: cycle5, chi: 3, faces: 2 },
  { name: "a cube", g: cube, chi: 2, faces: 6 },
  { name: "a wheel with 5 spokes", g: wheel(5), chi: 4, faces: 6 },
  { name: "a wheel with 6 spokes", g: wheel(6), chi: 3, faces: 7 },
];

/** Colour the vertices so that neighbours differ, using as few colours as possible. */
export function ColouringViz() {
  const [k, setK] = useState(0);
  const [col, setCol] = useState<(number | null)[]>(() => PRESETS[0].g.pts.map(() => null));
  const p = PRESETS[k];
  const { pts, edges } = p.g;
  const c = col.length === pts.length ? col : pts.map(() => null);
  const clash = new Set<number>();
  edges.forEach(([a, b]) => { if (c[a] !== null && c[a] === c[b]) { clash.add(a); clash.add(b); } });
  const used = new Set(c.filter((x) => x !== null)).size;
  const complete = c.every((x) => x !== null) && clash.size === 0;

  const cycleColour = (i: number) => setCol(c.map((x, j) => (j === i ? (x === null ? 0 : x === 3 ? null : x + 1) : x)));
  const greedy = () => {
    const out: (number | null)[] = pts.map(() => null);
    pts.forEach((_, i) => {
      const taken = new Set(edges.filter(([a, b]) => a === i || b === i).map(([a, b]) => out[a === i ? b : a]));
      let x = 0;
      while (taken.has(x)) x++;
      out[i] = x;
    });
    setCol(out);
  };
  const choose = (i: number) => { setK(i); setCol(PRESETS[i].g.pts.map(() => null)); };

  return (
    <figure className="viz">
      <div className="viz-controls">
        {PRESETS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} onClick={() => choose(i)}>{x.name}</button>
        ))}
      </div>
      <GraphSvg pts={pts} edges={edges} label={`Colouring ${p.name}`} onVertex={cycleColour}
        vertexFill={(i) => (c[i] === null ? undefined : VERTEX_COLOURS[c[i]!])} vertexRing={(i) => clash.has(i)} />
      <div className="viz-controls">
        <button type="button" className="viz-chip" onClick={greedy}>Colour greedily, in order</button>
        <button type="button" className="viz-chip" onClick={() => setCol(pts.map(() => null))}>Clear</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>colours used</td><td>{used}{clash.size ? ", with clashes" : ""}</td></tr>
          <tr><td>V − E + F</td><td>{pts.length} − {edges.length} + {p.faces} = {pts.length - edges.length + p.faces}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Click a vertex to change its colour; neighbours with the same colour are ringed in red. {complete
          ? used === p.chi
            ? `A proper colouring with ${used} colours, which is the fewest possible for ${p.name}.`
            : `A proper colouring with ${used} colours. Can you do it with ${p.chi}?`
          : `${p.name[0].toUpperCase() + p.name.slice(1)} needs ${p.chi} colours.`} Every graph here is drawn without crossings, so Euler&apos;s formula V − E + F = 2 holds, counting the outside as a face.
      </figcaption>
    </figure>
  );
}
