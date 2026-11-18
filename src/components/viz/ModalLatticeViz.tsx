"use client";

import { useState } from "react";

const SYS = [
  { name: "K", x: 260, y: 200, ax: "K: □(p → q) → (□p → □q), with necessitation", frame: "all frames", ex: "□p → p fails on a world that does not see itself." },
  { name: "D", x: 160, y: 150, ax: "K + D: □p → ◇p", frame: "serial: every world sees some world", ex: "Suits obligation: what is obligatory is permitted." },
  { name: "K4", x: 360, y: 150, ax: "K + 4: □p → □□p", frame: "transitive", ex: "Suits provability: Löb’s logic GL contains 4." },
  { name: "T", x: 160, y: 100, ax: "K + T: □p → p", frame: "reflexive", ex: "Suits knowledge and metaphysical necessity: what must be, is." },
  { name: "B", x: 80, y: 50, ax: "T + B: p → □◇p", frame: "reflexive and symmetric", ex: "Whatever is actual is necessarily possible." },
  { name: "S4", x: 300, y: 50, ax: "T + 4", frame: "reflexive and transitive (preorders)", ex: "Gödel read □ as ‘it is provable that’ in S4; intuitionistic logic embeds into it." },
  { name: "S5", x: 190, y: 12, ax: "T + 5: ◇p → □◇p (equivalently T + B + 4)", frame: "equivalence relations, or simply all worlds see all worlds", ex: "Iterated modalities collapse: any string of □ and ◇ before p is equivalent to its last operator, so □◇p is equivalent to ◇p." },
];
const EDGES: [string, string][] = [["K", "D"], ["K", "K4"], ["D", "T"], ["T", "B"], ["T", "S4"], ["K4", "S4"], ["B", "S5"], ["S4", "S5"]];
const AT = Object.fromEntries(SYS.map((s) => [s.name, s]));

/** The modal systems from K to S5, ordered by inclusion, with their axioms and frame conditions. */
export function ModalLatticeViz() {
  const [k, setK] = useState(5);
  const S = SYS[k];
  const below = new Set<string>([S.name]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const [a, b] of EDGES) if (below.has(b) && !below.has(a)) { below.add(a); grew = true; }
  }
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 230" role="img" aria-label="The modal systems ordered by inclusion" style={{ width: "100%", display: "block" }}>
        {EDGES.map(([a, b]) => <line key={a + b} x1={AT[a].x} y1={AT[a].y} x2={AT[b].x} y2={AT[b].y + 22} style={{ stroke: below.has(a) && below.has(b) ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />)}
        {SYS.map((s, i) => (
          <g key={s.name} onClick={() => setK(i)} style={{ cursor: "pointer" }} role="button" aria-label={`system ${s.name}`}>
            <rect x={s.x - 24} y={s.y} width={48} height={22} rx={6} style={{ fill: i === k ? "var(--accent)" : below.has(s.name) ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={s.x} y={s.y + 15} textAnchor="middle" style={{ fill: i === k ? "var(--bg)" : "var(--text)", fontSize: 12, fontWeight: 700 }}>{s.name}</text>
          </g>
        ))}
        <text x={510} y={214} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>stronger systems higher</text>
      </svg>
      <div className="segmented" role="group" aria-label="system" style={{ flexWrap: "wrap" }}>
        {SYS.map((s, i) => <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.name}</button>)}
      </div>
      <div style={{ fontSize: 13, display: "grid", gap: 4, marginTop: 8 }}>
        <div><strong>Axioms:</strong> {S.ax}.</div>
        <div><strong>Sound and complete for:</strong> {S.frame}.</div>
        <div><strong>Contains:</strong> {[...below].join(", ")}.</div>
        <div>{S.ex}</div>
      </div>
      <figcaption className="viz-caption">
        Each line joins a system to a stronger one directly above it. Every system contains K, and each is sound and
        complete with respect to the class of frames shown.
      </figcaption>
    </figure>
  );
}
