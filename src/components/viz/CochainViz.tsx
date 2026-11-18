"use client";

import { useState } from "react";

const PTS: [number, number][] = [[60, 30], [220, 30], [220, 170], [60, 170]];
const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 3], [0, 2]];
const TRIS: [number, number, number][] = [[0, 1, 2], [0, 2, 3]];
const eIdx = (u: number, v: number) => EDGES.findIndex(([x, y]) => x === Math.min(u, v) && y === Math.max(u, v));

/** 1-cochains on a square with a diagonal: cocycles, coboundaries, and what is left over in H¹. */
export function CochainViz() {
  const [phi, setPhi] = useState<number[]>([1, 0, 0, 0, 0]);
  const [filled, setFilled] = useState<boolean[]>([false, false]);
  const delta = TRIS.map(([x, y, z]) => phi[eIdx(x, y)] + phi[eIdx(y, z)] - phi[eIdx(x, z)]);
  const cocycle = TRIS.every((_, t) => !filled[t] || delta[t] === 0);
  const loops = delta;
  const cob = loops.every((v) => v === 0);
  const rank = 2 - filled.filter(Boolean).length;
  const bump = (e: number, v: number) => setPhi(phi.map((x, i) => (i === e ? x + v : x)));
  return (
    <figure className="viz">
      <div className="viz-controls">
        {TRIS.map((t, i) => <button key={i} type="button" className={filled[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setFilled(filled.map((f, j) => (j === i ? !f : f)))}>{filled[i] ? "empty" : "fill"} triangle [{t.join(", ")}]</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setPhi([0, 0, 0, 0, 0])}>zero cochain</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A 1-cochain on a square with a diagonal" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {TRIS.map((t, i) => filled[i] && <polygon key={i} points={t.map((v) => PTS[v].join(",")).join(" ")} style={{ fill: "var(--accent-soft)" }} />)}
        {EDGES.map(([x, y], e) => {
          const [x1, y1] = PTS[x], [x2, y2] = PTS[y];
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
          return (
            <g key={e}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
              <g style={{ cursor: "pointer" }}>
                <rect x={mx - 30} y={my - 11} width={60} height={22} rx={5} style={{ fill: "var(--bg)", stroke: "var(--border-strong)" }} />
                <text x={mx - 20} y={my + 5} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 14 }} onClick={() => bump(e, -1)} role="button" aria-label={`decrease edge ${x}${y}`}>−</text>
                <text x={mx} y={my + 5} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>{phi[e]}</text>
                <text x={mx + 20} y={my + 5} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 14 }} onClick={() => bump(e, 1)} role="button" aria-label={`increase edge ${x}${y}`}>+</text>
              </g>
            </g>
          );
        })}
        {PTS.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={10} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11, fontWeight: 700 }}>{i}</text>
          </g>
        ))}
        <text x={290} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>δφ on [0, 1, 2] = {delta[0]}</text>
        <text x={290} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>δφ on [0, 2, 3] = {delta[1]}</text>
        <text x={290} y={90} style={{ fill: cocycle ? "var(--accent)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{cocycle ? "a cocycle" : "not a cocycle"}</text>
        <text x={290} y={112} style={{ fill: "var(--text)", fontSize: 12 }}>{cob ? "a coboundary: φ = δg for a vertex function g" : "not a coboundary"}</text>
        <text x={290} y={140} style={{ fill: "var(--text-muted)", fontSize: 12 }}>H¹ has rank {rank} here</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {cocycle ? (cob ? "φ is a coboundary, so its class in H¹ is 0." : `φ is a cocycle but not a coboundary: its sums round the two triangles, ${loops[0]} and ${loops[1]}, give a non-zero class in H¹.`) : "δφ is not zero on a filled triangle, so φ has no class in H¹."}
      </p>
      <figcaption className="viz-caption">
        Click − and + to change the value φ gives each edge, oriented from the smaller vertex to the larger. The coboundary δφ
        of a triangle [x, y, z] is φ(xy) + φ(yz) − φ(xz). A cochain is a cocycle when δφ vanishes on every filled triangle,
        and a coboundary when every loop sum is 0.
      </figcaption>
    </figure>
  );
}
