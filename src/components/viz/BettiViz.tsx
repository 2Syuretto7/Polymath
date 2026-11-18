"use client";

import { useState } from "react";

const PTS: [number, number][] = [[60, 30], [200, 30], [200, 170], [60, 170], [320, 100]];
const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 3], [0, 2], [2, 4], [1, 4]];
const TRIS: [number, number, number][] = [[0, 1, 2], [0, 2, 3], [1, 2, 4]];

const rank = (m: number[][]) => {
  const a = m.map((r) => [...r]);
  let rk = 0;
  const cols = a[0]?.length ?? 0;
  for (let c = 0; c < cols && rk < a.length; c++) {
    const p = a.findIndex((r, i) => i >= rk && Math.abs(r[c]) > 1e-9);
    if (p < 0) continue;
    [a[rk], a[p]] = [a[p], a[rk]];
    for (let i = 0; i < a.length; i++) if (i !== rk) { const f = a[i][c] / a[rk][c]; a[i] = a[i].map((x, j) => x - f * a[rk][j]); }
    rk++;
  }
  return rk;
};
const eIdx = (u: number, v: number) => EDGES.findIndex(([x, y]) => (x === Math.min(u, v) && y === Math.max(u, v)));

/** Betti numbers of a small simplicial complex, from the ranks of its boundary matrices. */
export function BettiViz() {
  const [filled, setFilled] = useState<number[]>([]);
  const d1 = PTS.map((_, v) => EDGES.map(([x, y]) => (y === v ? 1 : x === v ? -1 : 0)));
  const d2 = EDGES.map((_, e) => filled.map((t) => {
    const [x, y, z] = TRIS[t];
    return e === eIdx(y, z) ? 1 : e === eIdx(x, z) ? -1 : e === eIdx(x, y) ? 1 : 0;
  }));
  const r1 = rank(d1), r2 = filled.length ? rank(d2) : 0;
  const c0 = PTS.length, c1 = EDGES.length, c2 = filled.length;
  const b0 = c0 - r1, b1 = c1 - r1 - r2, b2 = c2 - r2;
  const toggle = (t: number) => setFilled((f) => (f.includes(t) ? f.filter((x) => x !== t) : [...f, t].sort()));
  return (
    <figure className="viz">
      <div className="viz-controls">
        {TRIS.map((t, i) => <button key={i} type="button" className={filled.includes(i) ? "btn btn-primary" : "btn btn-ghost"} onClick={() => toggle(i)}>{filled.includes(i) ? "empty" : "fill"} triangle [{t.join(", ")}]</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A simplicial complex in the plane" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {filled.map((t) => <polygon key={t} points={TRIS[t].map((v) => PTS[v].join(",")).join(" ")} style={{ fill: "var(--accent-soft)" }} />)}
        {EDGES.map(([x, y], i) => <line key={i} x1={PTS[x][0]} y1={PTS[x][1]} x2={PTS[y][0]} y2={PTS[y][1]} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />)}
        {PTS.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={11} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11, fontWeight: 700 }}>{i}</text>
          </g>
        ))}
        <text x={370} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>simplices: {c0}, {c1}, {c2}</text>
        <text x={370} y={62} style={{ fill: "var(--text)", fontSize: 12 }}>rank ∂₁ = {r1}, rank ∂₂ = {r2}</text>
        <text x={370} y={92} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>β₀ = {b0}</text>
        <text x={370} y={112} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>β₁ = {b1}</text>
        <text x={370} y={132} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>β₂ = {b2}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        β₁ = {c1} − {r1} − {r2} = {b1}: {b1 === 0 ? "every cycle bounds." : `${b1} independent hole${b1 === 1 ? "" : "s"} that no filled triangle closes.`} Euler characteristic {c0} − {c1} + {c2} = {b0} − {b1} + {b2} = {c0 - c1 + c2}.
      </p>
      <figcaption className="viz-caption">
        The boundary of an edge [u, v] is v − u; of a triangle [x, y, z], [y, z] − [x, z] + [x, y]. Then βₖ is the dimension
        of the cycles in degree k minus the dimension of the boundaries, here computed with rational coefficients.
      </figcaption>
    </figure>
  );
}
