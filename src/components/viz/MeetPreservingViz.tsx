"use client";

import { useState } from "react";

export const MAPS = [
  { label: "g(x) = min(2x, 10)", g: (x: number) => Math.min(2 * x, 10) },
  { label: "g(x) = 5 + ⌊x/2⌋", g: (x: number) => 5 + Math.floor(x / 2) },
  { label: "g(x) = min(x, 6)", g: (x: number) => Math.min(x, 6) },
];

const XS = Array.from({ length: 11 }, (_, i) => i);

/** The left adjoint F(y) = least x with y ≤ g(x), when it exists. */
export function leftAdjoint(g: (x: number) => number, y: number) {
  const ok = XS.filter((x) => y <= g(x));
  return ok.length ? ok[0] : null;
}

/** The adjoint functor theorem for posets: a monotone map preserving all meets has a left adjoint. */
export function MeetPreservingViz() {
  const [k, setK] = useState(0);
  const [y, setY] = useState(7);
  const G = MAPS[k];
  const F = leftAdjoint(G.g, y);
  const X = (x: number) => 50 + x * 44;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map g">
        {MAPS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>y = {y} <input type="range" min={0} max={10} step={1} value={y} onChange={(e) => setY(Number(e.target.value))} aria-label="y" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="The chain from 0 to 10, with the elements x satisfying y at most g(x) highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={30} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x</text>
        <text x={14} y={80} style={{ fill: "var(--text-muted)", fontSize: 11 }}>g(x)</text>
        {XS.map((x) => {
          const ok = y <= G.g(x);
          const least = F === x;
          return (
            <g key={x}>
              <rect x={X(x) - 18} y={14} width={36} height={24} rx={4} style={{ fill: least ? "var(--success)" : ok ? "var(--success-soft)" : "var(--bg-subtle)", stroke: ok ? "var(--success)" : "var(--border)" }} />
              <text x={X(x)} y={31} textAnchor="middle" style={{ fill: least ? "var(--surface)" : "var(--text)", fontSize: 12, fontWeight: least ? 700 : 400 }}>{x}</text>
              <text x={X(x)} y={80} textAnchor="middle" style={{ fill: ok ? "var(--success)" : "var(--text-muted)", fontSize: 12 }}>{G.g(x)}</text>
            </g>
          );
        })}
        <text x={14} y={120} style={{ fill: "var(--text)", fontSize: 12 }}>green: the x with y ≤ g(x). Their meet, the least of them, is the candidate F(y).</text>
        <text x={14} y={150} style={{ fill: F === null ? "var(--danger)" : "var(--success)", fontSize: 13, fontWeight: 700 }}>
          {F === null ? `No x has ${y} ≤ g(x): g misses the top, so there is no left adjoint.` : `F(${y}) = ${F}, and F(${y}) ≤ x exactly when ${y} ≤ g(x).`}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {G.label}, y = {y}: {F === null ? "the set is empty, so F(y) is undefined" : `F(y) = ${F}`}.
      </p>
      <figcaption className="viz-caption">
        In a finite chain every monotone map preserves meets of non-empty sets, which are minima. The empty meet is the top
        element, a terminal object. The map min(x, 6) fails to preserve it, and exactly there the left adjoint fails to
        exist: the formula F(y) = least x with y ≤ g(x) asks for the least element of an empty set.
      </figcaption>
    </figure>
  );
}
