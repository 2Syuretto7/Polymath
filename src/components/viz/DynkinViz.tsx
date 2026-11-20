"use client";

import { useState } from "react";

const TYPES = ["A", "B", "C", "D", "E", "F₄", "G₂"];
type Info = { nodes: number; edges: [number, number, number][]; arrowTo?: number; dim: number; pos: number; label: string; xy: (i: number) => [number, number] };

function info(t: string, n: number): Info {
  const line = (i: number): [number, number] => [40 + i * 60, 60];
  const chain = (m: number) => Array.from({ length: m - 1 }, (_, i) => [i, i + 1, 1] as [number, number, number]);
  if (t === "A") return { nodes: n, edges: chain(n), dim: n * (n + 2), pos: (n * (n + 1)) / 2, label: `A${n}`, xy: line };
  if (t === "B") return { nodes: n, edges: [...chain(n - 1), [n - 2, n - 1, 2]], arrowTo: n - 1, dim: n * (2 * n + 1), pos: n * n, label: `B${n}`, xy: line };
  if (t === "C") return { nodes: n, edges: [...chain(n - 1), [n - 2, n - 1, 2]], arrowTo: n - 2, dim: n * (2 * n + 1), pos: n * n, label: `C${n}`, xy: line };
  if (t === "D") {
    const m = Math.max(n, 4);
    return {
      nodes: m, edges: [...chain(m - 1), [m - 3, m - 1, 1]], dim: m * (2 * m - 1), pos: m * (m - 1), label: `D${m}`,
      xy: (i) => (i < m - 2 ? line(i) : i === m - 2 ? [40 + (m - 2) * 60, 25] : [40 + (m - 2) * 60, 95]),
    };
  }
  if (t === "E") {
    const m = Math.min(Math.max(n, 6), 8);
    const D = { 6: [78, 36], 7: [133, 63], 8: [248, 120] }[m as 6 | 7 | 8];
    return { nodes: m, edges: [...chain(m - 1), [2, m - 1, 1]], dim: D[0], pos: D[1], label: `E${m}`, xy: (i) => (i < m - 1 ? [40 + i * 60, 95] : [160, 35]) };
  }
  if (t === "F₄") return { nodes: 4, edges: [[0, 1, 1], [1, 2, 2], [2, 3, 1]], arrowTo: 2, dim: 52, pos: 24, label: "F₄", xy: line };
  return { nodes: 2, edges: [[0, 1, 3]], arrowTo: 1, dim: 14, pos: 6, label: "G₂", xy: line };
}
const sub = (k: number) => String(k).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("");

/** Dynkin diagrams of the simple Lie algebras, with dimension and number of positive roots. */
export function DynkinViz() {
  const [t, setT] = useState(0);
  const [n, setN] = useState(3);
  const T = TYPES[t];
  const fixed = T === "F₄" || T === "G₂";
  const I = info(T, T === "B" || T === "C" ? Math.max(n, 2) : T === "D" ? Math.max(n, 4) : n);
  const label = I.label.replace(/\d+/, (d) => sub(Number(d)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="type">
        {TYPES.map((s, i) => <button key={s} type="button" aria-pressed={t === i} className={t === i ? "seg is-on" : "seg"} onClick={() => setT(i)}>{s}</button>)}
      </div>
      {!fixed && (
        <div className="viz-controls">
          <label>rank n = {n} <input type="range" min={1} max={8} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="rank" /></label>
        </div>
      )}
      <svg viewBox="0 0 520 125" role="img" aria-label={`Dynkin diagram of type ${I.label}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {I.edges.map(([i, j, m], e) => {
          const [x1, y1] = I.xy(i), [x2, y2] = I.xy(j);
          const offs = m === 1 ? [0] : m === 2 ? [-3, 3] : [-4.5, 0, 4.5];
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dir = I.arrowTo === j ? 1 : -1;
          return (
            <g key={e}>
              {offs.map((o) => <line key={o} x1={x1} y1={y1 + o} x2={x2} y2={y2 + o} style={{ stroke: "var(--text)", strokeWidth: 1.6 }} />)}
              {m > 1 && <path d={`M${mx - 7 * dir},${my - 9} L${mx + 7 * dir},${my} L${mx - 7 * dir},${my + 9}`} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.6 }} />}
            </g>
          );
        })}
        {Array.from({ length: I.nodes }, (_, i) => { const [x, y] = I.xy(i); return <circle key={i} cx={x} cy={y} r={9} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />; })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {label}: rank {I.nodes}, {I.pos} positive roots, dimension {I.dim} = {I.nodes} + 2 × {I.pos}.
        {T === "A" ? ` This is sl(${I.nodes + 1}).` : T === "B" ? ` This is so(${2 * I.nodes + 1}).` : T === "C" ? ` This is sp(${2 * I.nodes}).` : T === "D" ? ` This is so(${2 * I.nodes}).` : " An exceptional algebra."}
      </p>
      <figcaption className="viz-caption">
        Each node is a simple root. Nodes are joined by one, two or three lines when the angle between the roots is 120°,
        135° or 150°, and an arrow points to the shorter root. Every complex simple Lie algebra has exactly one of these
        diagrams. The dimension is the rank plus the number of roots.
      </figcaption>
    </figure>
  );
}
