"use client";

import { useState } from "react";

const pos = (n: number) => Array.from({ length: n }, (_, i) => {
  const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
  return [260 + 95 * Math.cos(a), 115 + 95 * Math.sin(a)] as [number, number];
});
const pairs = (n: number) => {
  const e: [number, number][] = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) e.push([i, j]);
  return e;
};
// On K5, sides red (0) and diagonals blue (1): no one-colour triangle.
const pentagon = (n: number) => pairs(n).map(([i, j]) => (j < 5 ? ((j - i === 1 || j - i === 4) ? 0 : 1) : i % 2));

/** Two-colour the edges of K5 or K6 and look for a triangle in one colour. */
export function RamseyTriangleViz() {
  const [n, setN] = useState(6);
  const [col, setCol] = useState<number[]>(() => pentagon(6));
  const E = pairs(n);
  const P = pos(n);
  const c = col.length === E.length ? col : pentagon(n);
  const tris: number[][] = [];
  const idx = (a: number, b: number) => E.findIndex(([x, y]) => x === Math.min(a, b) && y === Math.max(a, b));
  for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) for (let d = b + 1; d < n; d++) {
    const x = c[idx(a, b)];
    if (x === c[idx(b, d)] && x === c[idx(a, d)]) tris.push([a, b, d]);
  }
  const hot = new Set(tris.length ? [idx(tris[0][0], tris[0][1]), idx(tris[0][1], tris[0][2]), idx(tris[0][0], tris[0][2])] : []);
  const flip = (k: number) => setCol(c.map((x, i) => (i === k ? 1 - x : x)));
  const pick = (m: number) => { setN(m); setCol(pentagon(m)); };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="complete graph">
        {[5, 6].map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => pick(m)}>{m === 5 ? "K₅" : "K₆"}</button>)}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A complete graph with red and blue edges; click an edge to switch its colour" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {E.map(([a, b], k) => (
          <g key={k} onClick={() => flip(k)} style={{ cursor: "pointer" }}>
            <line x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]}
              style={{ stroke: c[k] ? "var(--accent)" : "var(--danger)", strokeWidth: hot.has(k) ? 6 : 2.5, strokeDasharray: c[k] ? "7 4" : undefined, opacity: hot.size && !hot.has(k) ? 0.45 : 1 }} />
            <line x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} style={{ stroke: "transparent", strokeWidth: 14 }} />
          </g>
        ))}
        {P.map(([x, y], v) => <circle key={v} cx={x} cy={y} r={9} style={{ fill: "var(--text)", stroke: "var(--bg)", strokeWidth: 2 }} />)}
        <text x={20} y={30} style={{ fill: "var(--danger)", fontSize: 12 }}>solid: red</text>
        <text x={20} y={48} style={{ fill: "var(--accent)", fontSize: 12 }}>dashed: blue</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setCol(E.map(() => (Math.random() < 0.5 ? 0 : 1)))}>Random colouring</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        K{n === 5 ? "₅" : "₆"}: {tris.length} one-colour triangle{tris.length === 1 ? "" : "s"}.{" "}
        {tris.length ? `One is drawn thick: vertices ${tris[0].map((v) => v + 1).join(", ")}.` : "None: this colouring avoids them, so R(3, 3) > 5."}
      </p>
      <figcaption className="viz-caption">
        Click any edge to switch its colour. On K₅ you can avoid a one-colour triangle; on K₆ you never can, however hard you
        try. So R(3, 3) = 6: among six people, three are mutual friends or three mutual strangers.
      </figcaption>
    </figure>
  );
}
