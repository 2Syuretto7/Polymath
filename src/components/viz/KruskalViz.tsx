"use client";

import { useState } from "react";
import { GraphSvg, type Edge, type Pt } from "./GraphSvg";

const PTS: Pt[] = [[50, 150], [140, 50], [150, 250], [250, 150], [340, 60], [350, 240]];
const NAMES = ["A", "B", "C", "D", "E", "F"];
const EDGES: Edge[] = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 5], [1, 4], [2, 5]];
const W = [4, 3, 2, 5, 6, 3, 4, 2, 7, 8];

/** Kruskal's algorithm: take the cheapest edges in turn, skipping any that would close a cycle. */
export function KruskalViz() {
  const [step, setStep] = useState(0);
  const order = EDGES.map((_, i) => i).sort((a, b) => W[a] - W[b] || a - b);
  const parent = PTS.map((_, i) => i);
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const status: ("tree" | "cycle" | null)[] = EDGES.map(() => null);
  let last = "";
  for (let s = 0; s < step && s < order.length; s++) {
    const e = order[s];
    const [a, b] = EDGES[e];
    const ra = find(a), rb = find(b);
    const name = `${NAMES[a]}${NAMES[b]} (weight ${W[e]})`;
    if (ra !== rb) { parent[ra] = rb; status[e] = "tree"; last = `${name} joins two separate pieces, so it is added.`; }
    else { status[e] = "cycle"; last = `${name} would close a cycle, so it is skipped.`; }
  }
  const treeEdges = status.filter((s) => s === "tree").length;
  const total = EDGES.reduce((s, _, e) => s + (status[e] === "tree" ? W[e] : 0), 0);
  const done = treeEdges === PTS.length - 1;

  return (
    <figure className="viz">
      <GraphSvg pts={PTS} edges={EDGES} labels={NAMES} label="A weighted graph" edgeText={(e) => String(W[e])}
        edgeStyle={(e) => (status[e] === "tree" ? { stroke: "var(--accent)", strokeWidth: 5 } : status[e] === "cycle" ? { stroke: "var(--danger)", strokeDasharray: "5 5" } : undefined)} />
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setStep((s) => s + 1)}>Next edge</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>edges in tree</td><td>{treeEdges} of {PTS.length - 1} needed</td></tr>
          <tr><td>total weight</td><td>{total}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {step === 0
          ? "The numbers are costs of building each link. Find the cheapest set of links that connects every town: a minimum spanning tree."
          : done
            ? `${last} The tree is complete: ${PTS.length} vertices, ${PTS.length - 1} edges, no cycles, total weight ${total}. Kruskal's greedy method always gives a minimum spanning tree.`
            : last}
      </figcaption>
    </figure>
  );
}
