"use client";

import { useState } from "react";

const V = ["s", "a", "b", "c", "d", "e", "t"];
const P: [number, number][] = [[40, 110], [160, 40], [160, 110], [160, 180], [330, 70], [330, 160], [470, 110]];
const E: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 4], [2, 4], [2, 5], [3, 5], [4, 6], [5, 6]];
const PATHS = [[0, 1, 4, 6], [0, 3, 5, 6]];

export function connected(removed: Set<number>, s = 0, t = 6): boolean {
  const seen = new Set([s]);
  const stack = [s];
  while (stack.length) {
    const u = stack.pop()!;
    if (u === t) return true;
    for (const [a, b] of E) {
      const v = a === u ? b : b === u ? a : -1;
      if (v >= 0 && !seen.has(v) && !removed.has(v)) { seen.add(v); stack.push(v); }
    }
  }
  return false;
}

/** Smallest set of inner vertices separating s from t, by brute force. */
export function minSeparator(): number {
  let best = 99;
  for (let m = 0; m < 1 << 5; m++) {
    const R = new Set([1, 2, 3, 4, 5].filter((_, i) => (m >> i) & 1));
    if (!connected(R)) best = Math.min(best, R.size);
  }
  return best;
}

/** Menger’s theorem: the most vertex-disjoint s–t paths equals the fewest vertices separating s from t. */
export function MengerSepViz() {
  const [cut, setCut] = useState<number[]>([]);
  const [showPaths, setShowPaths] = useState(true);
  const toggle = (v: number) => { if (v === 0 || v === 6) return; setCut(cut.includes(v) ? cut.filter((x) => x !== v) : [...cut, v]); };
  const conn = connected(new Set(cut));
  const best = minSeparator();
  const onPath = (a: number, b: number) => showPaths && PATHS.some((p) => p.some((x, i) => i > 0 && ((p[i - 1] === a && x === b) || (p[i - 1] === b && x === a))));
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 220" role="img" aria-label="A graph from s to t; click inner vertices to remove them" style={{ width: "100%", display: "block" }}>
        {E.map(([a, b]) => {
          const gone = cut.includes(a) || cut.includes(b);
          return <line key={`${a}-${b}`} x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} style={{ stroke: gone ? "var(--border)" : onPath(a, b) ? "var(--accent)" : "var(--text-muted)", strokeWidth: onPath(a, b) && !gone ? 4 : 1.5, strokeDasharray: gone ? "4 4" : undefined }} />;
        })}
        {V.map((name, v) => (
          <g key={name} onClick={() => toggle(v)} style={{ cursor: v === 0 || v === 6 ? "default" : "pointer" }}>
            <circle cx={P[v][0]} cy={P[v][1]} r={15} style={{ fill: cut.includes(v) ? "var(--danger)" : v === 0 || v === 6 ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={P[v][0]} y={P[v][1] + 5} textAnchor="middle" style={{ fill: cut.includes(v) || v === 0 || v === 6 ? "var(--bg)" : "var(--text)", fontSize: 14, fontWeight: 700, pointerEvents: "none" }}>{name}</text>
          </g>
        ))}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {[1, 2, 3, 4, 5].map((v) => <button key={v} type="button" className={cut.includes(v) ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={cut.includes(v)} onClick={() => toggle(v)}>remove {V[v]}</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setShowPaths(!showPaths)}>{showPaths ? "Hide" : "Show"} disjoint paths</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        removed: {cut.length ? cut.map((v) => V[v]).join(", ") : "nothing"}. s and t are {conn ? "still connected" : "separated"}.
        Smallest separator: {best}. Disjoint paths shown: {PATHS.length}.
      </p>
      <figcaption className="viz-caption">
        Each separator must contain a vertex from each of the disjoint paths, so you need at least as many vertices as paths.
        Menger&rsquo;s theorem (1927) says the bound is always achieved: the two numbers are equal.
      </figcaption>
    </figure>
  );
}
