"use client";

import { useState } from "react";

const PARTS = [[5], [4, 1], [3, 2], [3, 1, 1], [2, 2, 1], [2, 1, 1, 1], [1, 1, 1, 1, 1]];

/** Nilpotent operators on a 5-dimensional space, built from chains v → Nv → N²v → … → 0. */
export function NilpotentViz() {
  const [pi, setPi] = useState(2);
  const part = PARTS[pi];
  // matrix: block shift with 1s just above the diagonal inside each block
  const n = 5;
  const Mx = Array.from({ length: n }, () => Array(n).fill(0));
  let off = 0;
  for (const len of part) { for (let i = 0; i < len - 1; i++) Mx[off + i][off + i + 1] = 1; off += len; }
  const nullDim = (k: number) => part.reduce((s, len) => s + Math.min(len, k), 0);
  const idx = part.length > 0 ? Math.max(...part) : 0;
  const W = 300, H = 200, gap = W / (part.length + 1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        {PARTS.map((p, i) => <button key={i} type="button" aria-pressed={pi === i} className={pi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setPi(i)}>{p.join(" + ")}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", marginTop: 8 }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chains of basis vectors" style={{ width: "100%", maxWidth: 300 }}>
          {part.map((len, j) => {
            const x = gap * (j + 1);
            return (
              <g key={j}>
                {Array.from({ length: len }, (_, i) => {
                  const y = 20 + i * 34;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r={7} style={{ fill: i === 0 ? "var(--accent)" : "var(--text)" }} />
                      {i < len - 1 && <line x1={x} y1={y + 9} x2={x} y2={y + 25} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
                      {i === len - 1 && <g><line x1={x} y1={y + 9} x2={x} y2={y + 18} style={{ stroke: "var(--text-faint)", strokeWidth: 1.5 }} /><text x={x} y={y + 30} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 12 }}>0</text></g>}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
        <div>
          <table className="table mono" style={{ width: "auto" }}>
            <tbody>
              {Mx.map((r, i) => <tr key={i}>{r.map((x, j) => <td key={j} style={{ color: x ? "var(--accent)" : "var(--text-faint)", padding: "2px 8px" }}>{x}</td>)}</tr>)}
            </tbody>
          </table>
          <table className="table mono" style={{ width: "auto", marginTop: 8 }}>
            <tbody>
              <tr><td>k</td>{[1, 2, 3, 4, 5].map((k) => <td key={k}>{k}</td>)}</tr>
              <tr><td>dim null Nᵏ</td>{[1, 2, 3, 4, 5].map((k) => <td key={k}>{nullDim(k)}</td>)}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ margin: "6px 0" }}>
        Chains of lengths {part.join(", ")}: N<sup>{idx}</sup> = 0 but N<sup>{idx - 1}</sup> ≠ 0{idx === 1 ? " (N is the zero operator)" : ""}; null N has dimension {part.length}, one for each chain.
      </p>
      <figcaption className="viz-caption">
        Each column is a chain: N sends each dot to the one below, and the last to 0. In the basis listed chain by chain, from the bottom of each chain to the top, N has 1s just above the diagonal and 0s elsewhere. Every nilpotent operator has such a basis, and the chain lengths, read off from the dimensions of null Nᵏ, determine it up to change of basis.
      </figcaption>
    </figure>
  );
}
