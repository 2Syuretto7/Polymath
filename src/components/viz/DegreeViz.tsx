"use client";

import { useState } from "react";
import { GraphSvg, ring, type Edge } from "./GraphSvg";

const N = 6;
const NAMES = ["A", "B", "C", "D", "E", "F"];
const PTS = ring(N);
const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);

/** Build a graph by clicking pairs of vertices, and check the handshake lemma. */
export function DegreeViz() {
  const [edges, setEdges] = useState<Edge[]>([[0, 1], [1, 2], [2, 0], [2, 3], [3, 4]]);
  const [sel, setSel] = useState<number | null>(null);
  const deg = Array.from({ length: N }, (_, i) => edges.filter(([a, b]) => a === i || b === i).length);
  const sum = deg.reduce((s, d) => s + d, 0);
  const odd = deg.filter((d) => d % 2 === 1).length;

  const click = (i: number) => {
    if (sel === null) { setSel(i); return; }
    if (sel === i) { setSel(null); return; }
    const k = key(sel, i);
    setEdges((es) => (es.some(([a, b]) => key(a, b) === k) ? es.filter(([a, b]) => key(a, b) !== k) : [...es, [sel, i]]));
    setSel(null);
  };
  const complete: Edge[] = [];
  for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) complete.push([a, b]);

  return (
    <figure className="viz">
      <GraphSvg pts={PTS} edges={edges} labels={NAMES} label="A graph on six vertices" onVertex={click}
        vertexFill={(i) => (i === sel ? "var(--accent)" : undefined)} vertexRing={(i) => deg[i] % 2 === 1} />
      <div className="viz-controls">
        <button type="button" className="viz-chip" onClick={() => { setEdges([]); setSel(null); }}>No edges</button>
        <button type="button" className="viz-chip" onClick={() => { setEdges(complete); setSel(null); }}>Every edge</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>degrees</td><td>{NAMES.map((n, i) => `${n}: ${deg[i]}`).join(", ")}</td></tr>
          <tr><td>sum of degrees</td><td>{sum} = 2 × {edges.length} edges</td></tr>
          <tr><td>odd-degree vertices</td><td>{odd}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Click one vertex and then another to add or remove the edge between them. Vertices of odd degree are ringed in red. Each edge adds 1 to the degree of each of its two ends, so the degrees always add up to twice the number of edges, and the number of odd-degree vertices is always even.
      </figcaption>
    </figure>
  );
}
