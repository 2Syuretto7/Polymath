"use client";

import { useState } from "react";

type G = boolean[][];
const D = [0, 1, 2];
const a = 0, b = 1;
const mk = (pairs: [number, number][]): G => D.map((i) => D.map((j) => pairs.some(([p, q]) => p === i && q === j)));
const STRUCTS: { name: string; E: G }[] = [
  { name: "symmetric, with a–b", E: mk([[0, 1], [1, 0], [1, 2], [2, 1]]) },
  { name: "a → b only", E: mk([[0, 1], [1, 2], [2, 1]]) },
  { name: "symmetric, no a–b", E: mk([[1, 2], [2, 1], [0, 0]]) },
];
const sym = (E: G) => D.every((x) => D.every((y) => !E[x][y] || E[y][x]));
const LINES: { f: string; why: string; val: (E: G) => boolean }[] = [
  { f: "∀x∀y (Exy → Eyx)", why: "hypothesis", val: sym },
  { f: "∀x∀y (Exy → Eyx) → ∀y (Eay → Eya)", why: "axiom: substitute a for x", val: (E) => !sym(E) || D.every((y) => !E[a][y] || E[y][a]) },
  { f: "∀y (Eay → Eya)", why: "modus ponens 1, 2", val: (E) => D.every((y) => !E[a][y] || E[y][a]) },
  { f: "∀y (Eay → Eya) → (Eab → Eba)", why: "axiom: substitute b for y", val: (E) => !D.every((y) => !E[a][y] || E[y][a]) || !E[a][b] || E[b][a] },
  { f: "Eab → Eba", why: "modus ponens 3, 4", val: (E) => !E[a][b] || E[b][a] },
  { f: "Eab", why: "hypothesis", val: (E) => E[a][b] },
  { f: "Eba", why: "modus ponens 5, 6", val: (E) => E[b][a] },
];

/** Check every line of a deduction in a chosen structure: in a model of the hypotheses, every line is true. */
export function SoundnessCheckViz() {
  const [si, setSi] = useState(0);
  const E = STRUCTS[si].E;
  const isModel = LINES[0].val(E) && LINES[5].val(E);
  const P = [[60, 40], [180, 40], [120, 130]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="structure">
        {STRUCTS.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{s.name}</button>)}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start", marginTop: 8 }}>
        <svg viewBox="0 0 240 170" role="img" aria-label="The structure" style={{ width: 240, maxWidth: "100%", display: "block" }}>
          <defs><marker id="sc-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
          {D.flatMap((i) => D.map((j) => {
            if (!E[i][j]) return null;
            const [x1, y1] = P[i], [x2, y2] = P[j];
            if (i === j) return <circle key={`${i}${j}`} cx={x1 - 20} cy={y1 - 14} r={11} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />;
            const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ox = (-dy / L) * 5, oy = (dx / L) * 5;
            return <line key={`${i}${j}`} x1={x1 + (dx / L) * 17 + ox} y1={y1 + (dy / L) * 17 + oy} x2={x2 - (dx / L) * 17 + ox} y2={y2 - (dy / L) * 17 + oy} markerEnd="url(#sc-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />;
          }))}
          {D.map((i) => (
            <g key={i}>
              <circle cx={P[i][0]} cy={P[i][1]} r={15} style={{ fill: "var(--bg)", stroke: "var(--text)" }} />
              <text x={P[i][0]} y={P[i][1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{i === a ? "a" : i === b ? "b" : "2"}</text>
            </g>
          ))}
        </svg>
        <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3, flex: 1, minWidth: 260 }}>
          {LINES.map((l, k) => {
            const v = l.val(E);
            return (
              <div key={k} style={{ padding: "2px 6px", borderRadius: 4, background: v ? "var(--accent-soft)" : "var(--danger-soft)" }}>
                {k + 1}. {l.f} <span style={{ color: "var(--text-muted)" }}>[{l.why}]</span> <strong>{v ? "true" : "false"}</strong>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mono" style={{ fontWeight: 700, fontSize: 13 }}>
        {isModel ? "This structure is a model of both hypotheses, and every line is true in it." : "This structure is not a model of the hypotheses, so soundness promises nothing about it."}
      </p>
      <figcaption className="viz-caption">
        The deduction derives Eba from the hypotheses that E is symmetric and Eab. Axioms are true in every structure;
        modus ponens carries truth forward. So in any structure where the hypotheses are true, every line is true. That
        induction along the deduction is the soundness theorem.
      </figcaption>
    </figure>
  );
}
