"use client";

import { useState } from "react";

const NODES: { id: string; label: string; x: number; y: number }[] = [
  { id: "", label: "∅", x: 260, y: 180 },
  { id: "u", label: "{u}", x: 140, y: 110 },
  { id: "v", label: "{v}", x: 260, y: 110 },
  { id: "w", label: "{w}", x: 380, y: 110 },
  { id: "uv", label: "{u, v}", x: 140, y: 40 },
  { id: "uw", label: "{u, w}", x: 260, y: 40 },
  { id: "vw", label: "{v, w}", x: 380, y: 40 },
];
const below = (a: string, b: string) => a.length < b.length && [...a].every((c) => b.includes(c));

/** Linearly independent subsets of {u, v, w} with w = u + v, ordered by inclusion: climb a chain to a maximal element. */
export function ZornChainViz() {
  const [chain, setChain] = useState<string[]>([""]);
  const top = chain[chain.length - 1];
  const nexts = NODES.filter((n) => n.id.length === top.length + 1 && below(top, n.id));
  const maximal = nexts.length === 0;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 210" role="img" aria-label="Independent subsets ordered by inclusion" style={{ width: "100%", display: "block" }}>
        {NODES.flatMap((a) => NODES.filter((b) => b.id.length === a.id.length + 1 && below(a.id, b.id)).map((b) => {
          const on = chain.includes(a.id) && chain.includes(b.id);
          return <line key={a.id + b.id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} style={{ stroke: on ? "var(--accent)" : "var(--border)", strokeWidth: on ? 3 : 1.5 }} />;
        }))}
        {NODES.map((n) => {
          const inC = chain.includes(n.id), can = nexts.some((m) => m.id === n.id);
          return (
            <g key={n.id} style={{ cursor: can ? "pointer" : "default" }} onClick={() => can && setChain([...chain, n.id])}>
              <rect x={n.x - 34} y={n.y - 14} width={68} height={28} rx={14} style={{ fill: inC ? "var(--accent)" : can ? "var(--accent-soft)" : "var(--bg)", stroke: can ? "var(--accent)" : "var(--border)" }} />
              <text x={n.x} y={n.y + 5} textAnchor="middle" style={{ fill: inC ? "var(--bg)" : "var(--text)", fontSize: 13, pointerEvents: "none" }}>{n.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {nexts.map((n) => <button key={n.id} type="button" className="btn btn-primary" onClick={() => setChain([...chain, n.id])}>add to chain: {n.label}</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setChain([""])}>Start again</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        chain: {chain.map((c) => NODES.find((n) => n.id === c)!.label).join(" ⊂ ")}
        {maximal ? `. ${NODES.find((n) => n.id === top)!.label} is maximal: no independent set contains it. It is a basis.` : ". Every chain has an upper bound: its largest member."}
      </p>
      <figcaption className="viz-caption">
        In ℝ², take u, v and w = u + v. The independent subsets, ordered by inclusion, form a partial order. {"{"}u, v, w{"}"} is
        missing because it is dependent. Zorn&rsquo;s lemma says that if every chain has an upper bound, a maximal element
        exists. In an infinite-dimensional space no one can climb to the top step by step; Zorn guarantees the top is there.
      </figcaption>
    </figure>
  );
}
