"use client";

import { useState } from "react";
import { GraphSvg, ring, type Edge, type Pt } from "./GraphSvg";

const PRESETS: { name: string; pts: Pt[]; edges: Edge[]; labels: string[] }[] = [
  {
    name: "the bridges of Königsberg",
    pts: [[200, 40], [200, 260], [120, 150], [320, 150]],
    labels: ["N", "S", "I", "E"],
    edges: [[0, 2], [0, 2], [1, 2], [1, 2], [0, 3], [1, 3], [2, 3]],
  },
  {
    name: "the envelope",
    pts: [[120, 260], [280, 260], [280, 130], [120, 130], [200, 40]],
    labels: ["1", "2", "3", "4", "5"],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3], [3, 4], [4, 2]],
  },
  {
    name: "five points, all joined",
    pts: ring(5),
    labels: ["1", "2", "3", "4", "5"],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]],
  },
];

/** Trace a trail edge by edge, and compare with Euler's rule about odd vertices. */
export function EulerTrailViz() {
  const [k, setK] = useState(0);
  const [trail, setTrail] = useState<number[]>([]);
  const [at, setAt] = useState<number | null>(null);
  const g = PRESETS[k];
  const deg = g.pts.map((_, i) => g.edges.filter(([a, b]) => a === i || b === i).length);
  const odd = deg.filter((d) => d % 2 === 1).length;

  const pick = (e: number) => {
    if (trail.includes(e)) return;
    const [a, b] = g.edges[e];
    if (at === null) {
      setTrail([e]); setAt(b);
    } else if (trail.length === 1 && !(a === at || b === at)) {
      // Allow the first edge to be read in the other direction.
      const [f0] = g.edges[trail[0]];
      if (a === f0 || b === f0) { setTrail((t) => [...t, e]); setAt(a === f0 ? b : a); }
    } else if (a === at || b === at) {
      setTrail((t) => [...t, e]); setAt(a === at ? b : a);
    }
  };
  const reset = (i = k) => { setK(i); setTrail([]); setAt(null); };
  const stuck = at !== null && trail.length < g.edges.length && !g.edges.some(([a, b], e) => !trail.includes(e) && (a === at || b === at));

  const verdict = odd === 0
    ? "Every vertex has even degree, so there is an Euler circuit: a closed trail using every edge once, from any starting point."
    : odd === 2
      ? "Exactly two vertices have odd degree, so there is an Euler trail, but it must start at one of them and end at the other."
      : `${odd} vertices have odd degree, so no trail can use every edge exactly once. This is Euler's answer of 1736.`;

  return (
    <figure className="viz">
      <div className="viz-controls">
        {PRESETS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} onClick={() => reset(i)}>{p.name}</button>
        ))}
      </div>
      <GraphSvg pts={g.pts} edges={g.edges} labels={g.labels} label={g.name} onEdge={pick}
        vertexFill={(i) => (i === at ? "var(--accent)" : undefined)} vertexRing={(i) => deg[i] % 2 === 1}
        edgeStyle={(e) => (trail.includes(e) ? { stroke: "var(--accent)", strokeWidth: 4 } : undefined)}
        edgeText={(e) => (trail.includes(e) ? String(trail.indexOf(e) + 1) : undefined)} />
      <div className="viz-controls">
        <button type="button" className="viz-chip" onClick={() => reset()}>Start again</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>degrees</td><td>{g.labels.map((l, i) => `${l}: ${deg[i]}`).join(", ")}</td></tr>
          <tr><td>edges used</td><td>{trail.length} of {g.edges.length}{stuck ? ", stuck" : ""}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Click edges to trace a trail; each new edge must start where the last one ended. Odd vertices are ringed in red. {trail.length === g.edges.length ? "Every edge used exactly once. " : stuck ? "No unused edge leaves this vertex. " : ""}{verdict}
      </figcaption>
    </figure>
  );
}
