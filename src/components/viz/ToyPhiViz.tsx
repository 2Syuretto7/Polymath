"use client";

import { useState } from "react";

const N = 4;
const NAMES = ["A", "B", "C", "D"];
const ring = [[0, 1], [1, 2], [2, 3], [3, 0]];

/** Four-node architectures, as lists of directed edges. */
export const ARCHS: { label: string; edges: number[][] }[] = [
  { label: "two separate pairs", edges: [[0, 1], [1, 0], [2, 3], [3, 2]] },
  { label: "feedforward chain", edges: [[0, 1], [1, 2], [2, 3]] },
  { label: "one-way ring", edges: ring },
  { label: "two-way ring", edges: [...ring, ...ring.map(([a, b]) => [b, a])] },
  { label: "all to all", edges: [0, 1, 2, 3].flatMap((a) => [0, 1, 2, 3].filter((b) => b !== a).map((b) => [a, b])) },
];

/** A toy integration score: the fewest connections running in the weaker direction across any cut into two parts. */
export function toyPhi(edges: number[][]) {
  let best = Infinity, cut = 0;
  for (let m = 1; m < (1 << N) - 1; m++) {
    if (m & 1) {
      const inS = (v: number) => ((m >> v) & 1) === 1;
      const st = edges.filter(([a, b]) => inS(a) && !inS(b)).length;
      const ts = edges.filter(([a, b]) => !inS(a) && inS(b)).length;
      const v = Math.min(st, ts);
      if (v < best) { best = v; cut = m; }
    }
  }
  return { value: best, cut };
}

/** A toy version of integration: a system is only as integrated as its weakest cut. */
export function ToyPhiViz() {
  const [k, setK] = useState(1);
  const { edges } = ARCHS[k];
  const { value, cut } = toyPhi(edges);
  const pos = [[170, 50], [370, 50], [370, 190], [170, 190]];
  const inS = (v: number) => ((cut >> v) & 1) === 1;
  const S = NAMES.filter((_, v) => inS(v)).join(", "), T = NAMES.filter((_, v) => !inS(v)).join(", ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="architecture">
        {ARCHS.map((a, i) => <button key={a.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{a.label}</button>)}
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="A four-node network and its weakest cut" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="phiarrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        {edges.map(([a, b], i) => {
          const [x1, y1] = pos[a], [x2, y2] = pos[b];
          const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
          const ox = (-dy / L) * 7, oy = (dx / L) * 7;
          const crosses = inS(a) !== inS(b);
          return <line key={i} x1={x1 + (dx / L) * 24 + ox} y1={y1 + (dy / L) * 24 + oy} x2={x2 - (dx / L) * 24 + ox} y2={y2 - (dy / L) * 24 + oy} markerEnd="url(#phiarrow)" style={{ stroke: crosses ? "var(--danger)" : "var(--text-muted)", strokeWidth: crosses ? 2 : 1.5 }} />;
        })}
        {pos.map(([x, y], v) => (
          <g key={v}>
            <circle cx={x} cy={y} r={20} style={{ fill: inS(v) ? "var(--accent-soft)" : "var(--success-soft)", stroke: inS(v) ? "var(--accent)" : "var(--success)", strokeWidth: 2 }} />
            <text x={x} y={y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{NAMES[v]}</text>
          </g>
        ))}
        <text x={270} y={232} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>weakest cut: {"{"}{S}{"}"} against {"{"}{T}{"}"}; crossing connections in red</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {ARCHS[k].label}: toy integration {value}. {value === 0 ? "Some cut leaves one side unable to affect the other, so on the theory the whole is not a single conscious system." : "Every cut severs causal influence in both directions."}
      </p>
      <figcaption className="viz-caption">
        Integrated information theory measures how far a system is more than its parts by the weakest way of cutting it.
        This toy score counts connections running each way across a cut and takes the smaller count at the weakest cut; the
        real measure Φ is far more involved. Like Φ, it is zero for any purely feedforward system, however complex.
      </figcaption>
    </figure>
  );
}
