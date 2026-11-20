"use client";

import { useState } from "react";

const ORDERS = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
const PAIRS: [string, string][] = [["A", "B"], ["B", "C"], ["A", "C"]];
const POS: Record<string, [number, number]> = { A: [330, 40], B: [260, 160], C: [400, 160] };

/** Pairwise majority voting with three voters: Condorcet's paradox. */
export function MajorityCycleViz() {
  const [v, setV] = useState([0, 3, 4]);
  const prefers = (o: string, a: string, b: string) => o.indexOf(a) < o.indexOf(b);
  const edges = PAIRS.map(([a, b]) => {
    const n = v.filter((i) => prefers(ORDERS[i], a, b)).length;
    return n >= 2 ? { w: a, l: b, n } : { w: b, l: a, n: 3 - n };
  });
  const beats = (a: string, b: string) => edges.some((e) => e.w === a && e.l === b);
  const cycle = ["A", "B", "C"].every((a) => ["A", "B", "C"].some((b) => b !== a && beats(b, a)));
  const winner = ["A", "B", "C"].find((a) => ["A", "B", "C"].every((b) => b === a || beats(a, b)));
  const set = (i: number, k: number) => setV(v.map((x, j) => (j === i ? k : x)));
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 6 }}>
        {v.map((sel, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span className="mono" style={{ fontSize: 12, minWidth: 64 }}>voter {i + 1}</span>
            <div className="segmented" role="group" aria-label={`voter ${i + 1}`}>
              {ORDERS.map((o, k) => <button key={o} type="button" aria-pressed={sel === k} className={sel === k ? "seg is-on" : "seg"} onClick={() => set(i, k)}>{o.split("").join(" > ")}</button>)}
            </div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Majority relation between three options" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="mc-head" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        {edges.map((e) => {
          const [x1, y1] = POS[e.w], [x2, y2] = POS[e.l];
          const d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
          return (
            <g key={e.w + e.l}>
              <line x1={x1 + ux * 22} y1={y1 + uy * 22} x2={x2 - ux * 22} y2={y2 - uy * 22} markerEnd="url(#mc-head)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
              <text x={(x1 + x2) / 2 + uy * 14} y={(y1 + y2) / 2 - ux * 14 + 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{e.n}–{3 - e.n}</text>
            </g>
          );
        })}
        {Object.entries(POS).map(([k, [x, y]]) => (
          <g key={k}>
            <circle cx={x} cy={y} r={18} style={{ fill: winner === k ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: winner === k ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />
            <text x={x} y={y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{k}</text>
          </g>
        ))}
        <text x={20} y={30} style={{ fill: "var(--text-muted)", fontSize: 11 }}>arrow X → Y: a majority</text>
        <text x={20} y={46} style={{ fill: "var(--text-muted)", fontSize: 11 }}>prefers X to Y</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {cycle ? "Majority preference is cyclic: every option loses to another. No Condorcet winner." : `Condorcet winner: ${winner}. Majority preference is transitive here.`}
      </p>
      <figcaption className="viz-caption">
        Each voter has a transitive ranking of A, B and C. The group compares each pair by majority vote. With the rankings
        A &gt; B &gt; C, B &gt; C &gt; A and C &gt; A &gt; B, the group prefers A to B, B to C and C to A: individual
        rationality does not add up to group rationality. Arrow&rsquo;s theorem says no voting rule escapes every problem
        of this kind.
      </figcaption>
    </figure>
  );
}
