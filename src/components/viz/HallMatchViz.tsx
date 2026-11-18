"use client";

import { useState } from "react";

const L = ["Asha", "Bilal", "Chen", "Dev"];
const R = ["piano", "violin", "flute", "drums"];
const GRAPHS: { name: string; adj: number[][] }[] = [
  { name: "a perfect matching exists", adj: [[0, 1], [0, 2], [1, 3], [2, 3]] },
  { name: "Hall fails", adj: [[0, 1], [0, 1], [0, 1], [1, 2, 3]] },
  { name: "tight but fine", adj: [[0], [0, 1], [1, 2], [2, 3]] },
];

/** Maximum matching by augmenting paths. */
export function maxMatching(adj: number[][], n: number): number[] {
  const matchR = Array(n).fill(-1);
  const tryK = (u: number, seen: boolean[]): boolean => {
    for (const v of adj[u]) {
      if (seen[v]) continue;
      seen[v] = true;
      if (matchR[v] < 0 || tryK(matchR[v], seen)) { matchR[v] = u; return true; }
    }
    return false;
  };
  for (let u = 0; u < adj.length; u++) tryK(u, Array(n).fill(false));
  const matchL = Array(adj.length).fill(-1);
  matchR.forEach((u, v) => { if (u >= 0) matchL[u] = v; });
  return matchL;
}

/** Find a set S of left vertices whose neighbourhood is smaller than S, if one exists. */
export function hallViolator(adj: number[][]): number[] | null {
  for (let m = 1; m < 1 << adj.length; m++) {
    const S = adj.map((_, i) => i).filter((i) => (m >> i) & 1);
    const N = new Set(S.flatMap((i) => adj[i]));
    if (N.size < S.length) return S;
  }
  return null;
}

/** Hall’s marriage theorem: a perfect matching exists exactly when every set of people knows at least as many instruments. */
export function HallMatchViz() {
  const [g, setG] = useState(0);
  const adj = GRAPHS[g].adj;
  const match = maxMatching(adj, R.length);
  const size = match.filter((v) => v >= 0).length;
  const bad = hallViolator(adj);
  const badN = bad ? [...new Set(bad.flatMap((i) => adj[i]))] : [];
  const yl = (i: number) => 30 + i * 46;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="graph">
        {GRAPHS.map((x, i) => <button key={x.name} type="button" aria-pressed={g === i} className={g === i ? "seg is-on" : "seg"} onClick={() => setG(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A bipartite graph of people and instruments" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {adj.flatMap((vs, u) => vs.map((v) => {
          const m = match[u] === v;
          return <line key={`${u}-${v}`} x1={150} y1={yl(u)} x2={370} y2={yl(v)} style={{ stroke: m ? "var(--accent)" : "var(--border)", strokeWidth: m ? 4 : 1.5 }} />;
        }))}
        {L.map((p, i) => (
          <g key={p}>
            <circle cx={150} cy={yl(i)} r={8} style={{ fill: bad?.includes(i) ? "var(--danger)" : "var(--text)" }} />
            <text x={134} y={yl(i) + 5} textAnchor="end" style={{ fill: "var(--text)", fontSize: 14 }}>{p}</text>
          </g>
        ))}
        {R.map((p, i) => (
          <g key={p}>
            <circle cx={370} cy={yl(i)} r={8} style={{ fill: badN.includes(i) ? "var(--danger)" : "var(--text-muted)" }} />
            <text x={386} y={yl(i) + 5} style={{ fill: "var(--text)", fontSize: 14 }}>{p}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        largest matching: {size} of 4.{" "}
        {bad ? `Hall’s condition fails: ${bad.map((i) => L[i]).join(", ")} between them play only ${badN.map((i) => R[i]).join(" and ")}.` : "Every set of people plays at least as many instruments as it has members, so everyone is matched."}
      </p>
      <figcaption className="viz-caption">
        Thick lines show a largest matching, found by augmenting paths. When a perfect matching is missing, Hall&rsquo;s
        theorem promises a certificate: a set of people, in red, whose instruments are too few. The obvious obstacle is the
        only obstacle.
      </figcaption>
    </figure>
  );
}
