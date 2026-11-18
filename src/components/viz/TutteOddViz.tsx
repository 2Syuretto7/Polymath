"use client";

import { useState } from "react";

type G = { name: string; pts: [number, number][]; edges: [number, number][] };
const GRAPHS: G[] = [
  {
    name: "three triangles on a hub",
    pts: [[260, 100], [260, 50], [220, 20], [300, 20], [200, 140], [140, 150], [170, 190], [320, 140], [380, 150], [350, 190]],
    edges: [[0, 1], [1, 2], [1, 3], [2, 3], [0, 4], [4, 5], [4, 6], [5, 6], [0, 7], [7, 8], [7, 9], [8, 9]],
  },
  {
    name: "a ring of six",
    pts: [[260, 30], [340, 70], [340, 150], [260, 190], [180, 150], [180, 70]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3]],
  },
];

function components(n: number, edges: [number, number][], removed: Set<number>): number[][] {
  const seen = new Set<number>();
  const out: number[][] = [];
  for (let s = 0; s < n; s++) {
    if (seen.has(s) || removed.has(s)) continue;
    const comp: number[] = [];
    const stack = [s];
    seen.add(s);
    while (stack.length) {
      const u = stack.pop()!;
      comp.push(u);
      for (const [a, b] of edges) {
        const v = a === u ? b : b === u ? a : -1;
        if (v >= 0 && !seen.has(v) && !removed.has(v)) { seen.add(v); stack.push(v); }
      }
    }
    out.push(comp);
  }
  return out;
}

/** Whether a graph has a perfect matching, by trying to match the lowest unmatched vertex in every way. */
export function hasPerfect(n: number, edges: [number, number][]): boolean {
  const go = (used: number): boolean => {
    if (used === (1 << n) - 1) return true;
    let u = 0;
    while ((used >> u) & 1) u++;
    for (const [a, b] of edges) {
      const v = a === u ? b : b === u ? a : -1;
      if (v >= 0 && !((used >> v) & 1) && go(used | (1 << u) | (1 << v))) return true;
    }
    return false;
  };
  return n % 2 === 0 && go(0);
}

/** Tutte’s theorem: remove a set S and count the odd components left behind. */
export function TutteOddViz() {
  const [gi, setGi] = useState(0);
  const [S, setS] = useState<number[]>([0]);
  const G = GRAPHS[gi];
  const comps = components(G.pts.length, G.edges, new Set(S));
  const odd = comps.filter((c) => c.length % 2 === 1);
  const oddOf = (v: number) => odd.some((c) => c.includes(v));
  const toggle = (v: number) => setS(S.includes(v) ? S.filter((x) => x !== v) : [...S, v]);
  const perfect = hasPerfect(G.pts.length, G.edges);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="graph">
        {GRAPHS.map((g, i) => <button key={g.name} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => { setGi(i); setS([0]); }}>{g.name}</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A graph; click vertices to add them to S" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {G.edges.map(([a, b]) => {
          const cut = S.includes(a) || S.includes(b);
          return <line key={`${a}-${b}`} x1={G.pts[a][0]} y1={G.pts[a][1]} x2={G.pts[b][0]} y2={G.pts[b][1]} style={{ stroke: cut ? "var(--border)" : "var(--text-muted)", strokeWidth: 2, strokeDasharray: cut ? "4 4" : undefined }} />;
        })}
        {G.pts.map(([x, y], v) => (
          <circle key={v} cx={x} cy={y} r={11} onClick={() => toggle(v)} style={{ cursor: "pointer", fill: S.includes(v) ? "var(--text)" : oddOf(v) ? "var(--danger)" : "var(--accent)", stroke: "var(--bg)", strokeWidth: 2 }} />
        ))}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {G.pts.map((_, v) => <button key={v} type="button" className={S.includes(v) ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={S.includes(v)} onClick={() => toggle(v)}>{v}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        |S| = {S.length}; components of G − S: {comps.length}, of which odd (red): {odd.length}.{" "}
        {odd.length > S.length ? "More odd components than |S|: no perfect matching is possible." : "Tutte’s condition holds for this S."}{" "}
        This graph {perfect ? "has" : "has no"} perfect matching.
      </p>
      <figcaption className="viz-caption">
        Click vertices to put them in S (black). Each odd component of what remains must send at least one vertex to be
        matched into S, so a perfect matching needs at most |S| odd components. Tutte proved this obstacle is the only one.
      </figcaption>
    </figure>
  );
}
