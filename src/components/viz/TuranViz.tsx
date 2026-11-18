"use client";

import { useState } from "react";
import { VERTEX_COLOURS } from "./GraphSvg";

const N = 8;

/** The Turán graph: split vertices into r nearly equal parts and join every pair in different parts. */
export function TuranViz() {
  const [r, setR] = useState(2);
  const [extra, setExtra] = useState(false);
  const sizes = Array.from({ length: r }, (_, i) => Math.floor(N / r) + (i < N % r ? 1 : 0));
  const part: number[] = sizes.flatMap((s, i) => Array(s).fill(i));
  const pts = part.map((_, v) => {
    const a = -Math.PI / 2 + (2 * Math.PI * (v + part[v] * 0.6)) / (N + r * 0.6);
    return [260 + 105 * Math.cos(a), 120 + 105 * Math.sin(a)];
  });
  const edges: [number, number][] = [];
  for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) if (part[a] !== part[b]) edges.push([a, b]);
  const firstOf = (p: number) => part.indexOf(p);
  const clique = extra ? [0, 1, ...Array.from({ length: r - 1 }, (_, i) => firstOf(i + 1))] : [];
  const inClique = (a: number, b: number) => clique.includes(a) && clique.includes(b);
  const bound = Math.floor((1 - 1 / r) * N * N / 2);
  const sub = "₀₁₂₃₄₅₆₇₈₉";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="forbidden clique">
        {[2, 3, 4].map((x) => <button key={x} type="button" aria-pressed={r === x} className={r === x ? "seg is-on" : "seg"} onClick={() => setR(x)}>no K{sub[x + 1]}</button>)}
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="A complete multipartite graph on eight vertices" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]}
            style={{ stroke: inClique(a, b) ? "var(--accent)" : "var(--border)", strokeWidth: inClique(a, b) ? 3 : 1.5 }} />
        ))}
        {extra && <line x1={pts[0][0]} y1={pts[0][1]} x2={pts[1][0]} y2={pts[1][1]} style={{ stroke: "var(--danger)", strokeWidth: 3.5 }} />}
        {pts.map(([x, y], v) => <circle key={v} cx={x} cy={y} r={11} style={{ fill: VERTEX_COLOURS[part[v]], stroke: clique.includes(v) ? "var(--danger)" : "var(--bg)", strokeWidth: clique.includes(v) ? 3 : 2 }} />)}
      </svg>
      <div className="viz-controls">
        <button type="button" className={extra ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={extra} onClick={() => setExtra(!extra)}>Add an edge inside a part</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        n = {N}, {r} parts of sizes {sizes.join(", ")}: {edges.length} edges, no K{sub[r + 1]}. Bound (1 − 1/{r})n²/2 rounded down: {bound}.{" "}
        {extra ? `The new edge (red) plus one vertex from each other part forms a K${sub[r + 1]}.` : "Any extra edge lies inside a part."}
      </p>
      <figcaption className="viz-caption">
        Colours mark the parts; every two vertices in different parts are joined. With r parts there is no clique on r + 1
        vertices, since two of them would share a part. Turán&rsquo;s theorem says no K{sub[r + 1]}-free graph on n vertices has more edges.
      </figcaption>
    </figure>
  );
}
