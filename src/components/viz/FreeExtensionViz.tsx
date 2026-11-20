"use client";

import { useState } from "react";

const NAMES = ["a", "b", "c"];

/** A vector of the space with d coordinates over 𝔽₂, written as a string of bits. */
export function bits(v: number, d: number) {
  return "(" + Array.from({ length: d }, (_, i) => (v >> (d - 1 - i)) & 1).join(", ") + ")";
}

/** The free–forgetful adjunction for vector spaces over 𝔽₂: a function on generators extends uniquely to a linear map. */
export function FreeExtensionViz() {
  const [k, setK] = useState(2);
  const [d, setD] = useState(2);
  const [val, setVal] = useState([1, 2, 3]);
  const m = 1 << d;
  const v = (i: number) => val[i] % m;
  const rows = Array.from({ length: 1 << k }, (_, s) => s);
  const img = (s: number) => NAMES.slice(0, k).reduce((acc, _, i) => ((s >> i) & 1 ? acc ^ v(i) : acc), 0);
  const name = (s: number) => (s === 0 ? "0" : NAMES.slice(0, k).filter((_, i) => (s >> i) & 1).join(" + "));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>generators k = {k} <input type="range" min={1} max={3} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
        <label>dimension d = {d} <input type="range" min={1} max={3} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <div className="segmented" role="group" aria-label="images of generators" style={{ marginTop: 8 }}>
        {NAMES.slice(0, k).map((g, i) => (
          <button key={g} type="button" className="seg" onClick={() => setVal(val.map((x, j) => (j === i ? (x + 1) % 8 : x)))}>
            {g} ↦ {bits(v(i), d)}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 540 ${40 + rows.length * 24}`} role="img" aria-label="The linear map determined by the chosen images of the generators" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={40} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>element of the free space on {"{"}{NAMES.slice(0, k).join(", ")}{"}"}</text>
        <text x={330} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>its image, forced by linearity</text>
        {rows.map((s, r) => {
          const gen = s !== 0 && (s & (s - 1)) === 0;
          return (
            <g key={s}>
              <rect x={30} y={30 + r * 24} width={200} height={20} rx={3} style={{ fill: gen ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: gen ? "var(--accent)" : "var(--border)" }} />
              <text x={130} y={44 + r * 24} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{name(s)}</text>
              <line x1={236} y1={40 + r * 24} x2={314} y2={40 + r * 24} style={{ stroke: "var(--text-faint)" }} />
              <rect x={320} y={30 + r * 24} width={150} height={20} rx={3} style={{ fill: gen ? "var(--accent-soft)" : "var(--success-soft)", stroke: gen ? "var(--accent)" : "var(--success)" }} />
              <text x={395} y={44 + r * 24} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{bits(img(s), d)}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Functions from the {k} generators to the {m} vectors of V: {m ** k}. Linear maps from F(S) to V: {m ** k}.
      </p>
      <figcaption className="viz-caption">
        Click a generator to change where it goes. Only the generators, shaded, are free to choose; every other row is forced.
        So functions S → U(V) correspond exactly to linear maps F(S) → V, naturally in S and V: the free functor F is left
        adjoint to the forgetful functor U.
      </figcaption>
    </figure>
  );
}
