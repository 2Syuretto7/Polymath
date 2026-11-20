"use client";

import { useState } from "react";

// worlds: g = you go to help your neighbour, t = you tell them you are coming. Lower rank = more ideal.
const W = [
  { g: true, t: true, rank: 0 },
  { g: false, t: false, rank: 1 },
  { g: true, t: false, rank: 2 },
  { g: false, t: true, rank: 3 },
];
const lab = (w: { g: boolean; t: boolean }) => `${w.g ? "go" : "stay"}, ${w.t ? "tell" : "don’t tell"}`;
const CONDS = [
  { name: "no condition", f: (_w: { g: boolean; t: boolean }) => true },
  { name: "given you go", f: (w: { g: boolean; t: boolean }) => w.g },
  { name: "given you stay", f: (w: { g: boolean; t: boolean }) => !w.g },
];

/** Preference semantics for conditional obligation: O(φ | ψ) holds when φ is true in the best ψ-worlds. */
export function DyadicOughtViz() {
  const [c, setC] = useState(0);
  const live = W.filter(CONDS[c].f);
  const best = Math.min(...live.map((w) => w.rank));
  const top = live.filter((w) => w.rank === best);
  const ought = (f: (w: { g: boolean; t: boolean }) => boolean) => top.every(f);
  const rows: [string, boolean][] = [
    ["you ought to go", ought((w) => w.g)],
    ["you ought to tell", ought((w) => w.t)],
    ["you ought not to tell", ought((w) => !w.t)],
  ];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="condition">
        {CONDS.map((x, i) => <button key={x.name} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Four worlds ranked from best to worst" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>best</text>
        <text x={500} y={16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>worst</text>
        {W.map((w, i) => {
          const isLive = CONDS[c].f(w), isTop = top.includes(w);
          return (
            <g key={i} style={{ opacity: isLive ? 1 : 0.3 }}>
              <rect x={20 + i * 122} y={30} width={110} height={70} rx={8} style={{ fill: isTop ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: isTop ? "var(--accent)" : "var(--border-strong)", strokeWidth: isTop ? 2 : 1 }} />
              <text x={75 + i * 122} y={60} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{lab(w)}</text>
              <text x={75 + i * 122} y={82} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>rank {w.rank + 1}</text>
            </g>
          );
        })}
        <text x={20} y={128} style={{ fill: "var(--text-muted)", fontSize: 11 }}>faded worlds are excluded by the condition; outlined worlds are the best that remain</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        {rows.map(([s, v]) => <div key={s}>{CONDS[c].name}, {s}: <span style={{ color: v ? "var(--accent)" : "var(--danger)", fontWeight: 700 }}>{v ? "true" : "false"}</span></div>)}
      </div>
      <figcaption className="viz-caption">
        Chisholm&rsquo;s example: you ought to go and help; if you go, you ought to tell them you are coming; if you do
        not go, you ought not to tell them; and in fact you do not go. Ranking worlds by how good they are makes all four
        claims consistent: conditional obligations look only at the best worlds where the condition holds.
      </figcaption>
    </figure>
  );
}
