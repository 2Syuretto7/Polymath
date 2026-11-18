"use client";

import { useState } from "react";
import { GraphSvg, VERTEX_COLOURS, type Edge, type Pt } from "./GraphSvg";

const GRAPHS = [
  { name: "a path of 4", pts: [[60, 100], [150, 100], [250, 100], [340, 100]] as Pt[], edges: [[0, 1], [1, 2], [2, 3]] as Edge[], formula: "k(k − 1)³", f: (k: number) => k * (k - 1) ** 3 },
  { name: "a triangle", pts: [[200, 40], [130, 160], [270, 160]] as Pt[], edges: [[0, 1], [1, 2], [2, 0]] as Edge[], formula: "k(k − 1)(k − 2)", f: (k: number) => k * (k - 1) * (k - 2) },
  { name: "a 4-cycle", pts: [[140, 45], [260, 45], [260, 165], [140, 165]] as Pt[], edges: [[0, 1], [1, 2], [2, 3], [3, 0]] as Edge[], formula: "(k − 1)⁴ + (k − 1)", f: (k: number) => (k - 1) ** 4 + (k - 1) },
  { name: "a triangle with a tail", pts: [[200, 40], [130, 160], [270, 160], [360, 160]] as Pt[], edges: [[0, 1], [1, 2], [2, 0], [2, 3]] as Edge[], formula: "k(k − 1)²(k − 2)", f: (k: number) => k * (k - 1) ** 2 * (k - 2) },
];

/** All proper colourings of a small graph with k colours, by brute force. */
export function properColourings(n: number, edges: Edge[], k: number): number[][] {
  const out: number[][] = [];
  const c: number[] = [];
  const go = (v: number) => {
    if (v === n) { out.push(c.slice()); return; }
    for (let x = 0; x < k; x++) {
      if (edges.some(([a, b]) => (a === v && b < v && c[b] === x) || (b === v && a < v && c[a] === x))) continue;
      c[v] = x;
      go(v + 1);
    }
  };
  go(0);
  return out;
}

/** Count proper colourings and compare with the chromatic polynomial. */
export function ChromPolyViz() {
  const [gi, setGi] = useState(0);
  const [k, setK] = useState(3);
  const [j, setJ] = useState(0);
  const G = GRAPHS[gi];
  const all = properColourings(G.pts.length, G.edges, k);
  const shown = all.length ? all[j % all.length] : null;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="graph" style={{ flexWrap: "wrap" }}>
        {GRAPHS.map((g, i) => <button key={g.name} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => { setGi(i); setJ(0); }}>{g.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="number of colours" style={{ marginTop: 6 }}>
        {[1, 2, 3, 4].map((x) => <button key={x} type="button" aria-pressed={k === x} className={k === x ? "seg is-on" : "seg"} onClick={() => { setK(x); setJ(0); }}>k = {x}</button>)}
      </div>
      <GraphSvg pts={G.pts} edges={G.edges} label="A small graph with one proper colouring shown" h={200}
        labels={G.pts.map((_, i) => (shown ? shown[i] + 1 : ""))}
        vertexFill={(i) => (shown ? VERTEX_COLOURS[shown[i]] : undefined)} />
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" disabled={all.length < 2} onClick={() => setJ(j + 1)}>Next colouring</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        P(G, k) = {G.formula} = {G.f(k)} at k = {k}. Counted by brute force: {all.length}.{" "}
        {shown ? `Showing colouring ${(j % all.length) + 1} of ${all.length}.` : "No proper colouring exists with this many colours."}
      </p>
      <figcaption className="viz-caption">
        The number of proper colourings with k colours is a polynomial in k, and the chromatic number is the smallest k
        with P(G, k) greater than zero. Click Next colouring to step through the colourings being counted.
      </figcaption>
    </figure>
  );
}
