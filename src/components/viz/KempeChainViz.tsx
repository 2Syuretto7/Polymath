"use client";

import { useState } from "react";
import { GraphSvg, VERTEX_COLOURS, type Edge, type Pt } from "./GraphSvg";

// 0 v, 1 top, 2 right, 3 bottom, 4 left, 5 a, 6 p, 7 b, 8 q
const PTS: Pt[] = [[220, 120], [220, 50], [290, 120], [220, 190], [150, 120], [400, 50], [340, 120], [400, 190], [60, 120]];
const EDGES: Edge[] = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [2, 3], [3, 4], [4, 1], [1, 5], [5, 7], [7, 3], [2, 6], [6, 5], [6, 7], [4, 8], [8, 1], [8, 3]];
const START = [-1, 0, 1, 2, 3, 2, 3, 0, 1];
const CHAIN13 = [1, 5, 7, 3];
const CHAIN24 = [2, 6];

const STAGES = [
  { name: "the problem", text: "The centre vertex v is uncoloured, and its four neighbours already use all four colours. We must recolour something." },
  { name: "chain 1–3", text: "Follow colours 1 and 3 from the top neighbour. This chain reaches the bottom neighbour, so swapping 1 and 3 along it would not help." },
  { name: "chain 2–4", text: "Now follow colours 2 and 4 from the right neighbour. The 1–3 chain together with v encloses it, so by planarity this chain cannot reach the left neighbour." },
  { name: "swap", text: "Swap colours 2 and 4 along that chain. The colouring stays proper, since the chain is a whole component of the vertices coloured 2 or 4." },
  { name: "colour v", text: "Now v’s neighbours use only 1, 3 and 4, so v takes colour 2. This argument, Kempe’s, works for degree 4; at degree 5 his version had a gap." },
];

/** Kempe chains: recolour a two-coloured component to free a colour. */
export function KempeChainViz() {
  const [s, setS] = useState(0);
  const col = START.slice();
  if (s >= 3) { col[2] = 3; col[6] = 1; }
  if (s >= 4) col[0] = 1;
  const chain = s === 1 ? CHAIN13 : s === 2 || s === 3 ? CHAIN24 : [];
  const onChain = (k: number) => chain.includes(EDGES[k][0]) && chain.includes(EDGES[k][1]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage" style={{ flexWrap: "wrap" }}>
        {STAGES.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <GraphSvg pts={PTS} edges={EDGES} label="A planar graph with a vertex to colour" w={460} h={240}
        labels={col.map((c, i) => (c < 0 ? "v" : i === 0 ? `v${c + 1}` : c + 1))}
        vertexFill={(i) => (col[i] < 0 ? undefined : VERTEX_COLOURS[col[i]])}
        vertexRing={(i) => chain.includes(i)}
        edgeStyle={(k) => (onChain(k) ? { stroke: "var(--danger)", strokeWidth: 4 } : undefined)} />
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{STAGES[s].text}</p>
      <figcaption className="viz-caption">
        Numbers are colours. A Kempe chain is a connected piece of the graph using only two colours; swapping them on the
        piece keeps the colouring proper. Chains are the basic tool in every proof of the four and five colour theorems.
      </figcaption>
    </figure>
  );
}
