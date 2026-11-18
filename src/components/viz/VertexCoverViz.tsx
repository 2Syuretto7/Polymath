"use client";

import { useState } from "react";
import { maxMatching } from "./HallMatchViz";

const L = ["Asha", "Bilal", "Chen", "Dev"];
const R = ["piano", "violin", "flute", "drums"];
const ADJ = [[0, 1], [0, 1], [0, 1], [1, 2, 3]];

/** Size of a smallest vertex cover, by brute force over all 256 subsets. */
export function minCover(adj: number[][], nR: number): number {
  const nL = adj.length;
  let best = nL + nR;
  for (let m = 0; m < 1 << (nL + nR); m++) {
    const inC = (k: number) => ((m >> k) & 1) === 1;
    if (adj.every((vs, u) => vs.every((v) => inC(u) || inC(nL + v)))) {
      let c = 0;
      for (let k = 0; k < nL + nR; k++) if (inC(k)) c++;
      best = Math.min(best, c);
    }
  }
  return best;
}

/** König’s theorem: in a bipartite graph, a largest matching and a smallest vertex cover have the same size. */
export function VertexCoverViz() {
  const [cover, setCover] = useState<string[]>([]);
  const match = maxMatching(ADJ, R.length);
  const msize = match.filter((v) => v >= 0).length;
  const best = minCover(ADJ, R.length);
  const has = (k: string) => cover.includes(k);
  const toggle = (k: string) => setCover(has(k) ? cover.filter((x) => x !== k) : [...cover, k]);
  const uncovered = ADJ.flatMap((vs, u) => vs.filter((v) => !has(`L${u}`) && !has(`R${v}`)).map((v) => [u, v]));
  const yl = (i: number) => 30 + i * 46;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 210" role="img" aria-label="A bipartite graph; click vertices to cover edges" style={{ width: "100%", display: "block" }}>
        {ADJ.flatMap((vs, u) => vs.map((v) => {
          const unc = uncovered.some(([a, b]) => a === u && b === v);
          const m = match[u] === v;
          return <line key={`${u}-${v}`} x1={150} y1={yl(u)} x2={370} y2={yl(v)} style={{ stroke: unc ? "var(--danger)" : m ? "var(--accent)" : "var(--border)", strokeWidth: m ? 4 : unc ? 2.5 : 1.5, strokeDasharray: unc ? "5 4" : undefined }} />;
        }))}
        {L.map((p, i) => (
          <g key={p} style={{ cursor: "pointer" }} onClick={() => toggle(`L${i}`)}>
            <circle cx={150} cy={yl(i)} r={11} style={{ fill: has(`L${i}`) ? "var(--accent)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={132} y={yl(i) + 5} textAnchor="end" style={{ fill: "var(--text)", fontSize: 14 }}>{p}</text>
          </g>
        ))}
        {R.map((p, i) => (
          <g key={p} style={{ cursor: "pointer" }} onClick={() => toggle(`R${i}`)}>
            <circle cx={370} cy={yl(i)} r={11} style={{ fill: has(`R${i}`) ? "var(--accent)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={388} y={yl(i) + 5} style={{ fill: "var(--text)", fontSize: 14 }}>{p}</text>
          </g>
        ))}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[...L.map((p, i) => [p, `L${i}`]), ...R.map((p, i) => [p, `R${i}`])].map(([p, k]) => (
          <button key={k} type="button" className={has(k) ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={has(k)} onClick={() => toggle(k)}>{p}</button>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        your cover: {cover.length} vertices, {uncovered.length} edges uncovered. Largest matching (thick): {msize}. Smallest cover: {best}.
        {uncovered.length === 0 && cover.length === best ? " You found a smallest cover: it matches the largest matching." : ""}
      </p>
      <figcaption className="viz-caption">
        A vertex cover is a set of vertices touching every edge. Each matching edge needs its own cover vertex, so every cover
        is at least as large as every matching. König&rsquo;s theorem says that in bipartite graphs the two optima are equal.
      </figcaption>
    </figure>
  );
}
