"use client";

import { useState } from "react";

const CONN = [
  { key: "and", label: "and (∧)", intro: "From A and B, infer A ∧ B.", elim: "From A ∧ B, infer A; from A ∧ B, infer B.", harmonious: true, note: "Elimination returns exactly what introduction required. A detour, introducing then eliminating, can be removed." },
  { key: "or", label: "or (∨)", intro: "From A, infer A ∨ B; from B, infer A ∨ B.", elim: "From A ∨ B, and C derived from A, and C derived from B, infer C.", harmonious: true, note: "The elimination asks only for what follows from either way the disjunction could have been introduced." },
  { key: "tonk", label: "tonk", intro: "From A, infer A tonk B.", elim: "From A tonk B, infer B.", harmonious: false, note: "Prior’s tonk (1960): introduction borrows the rule for ∨, elimination the rule for ∧. Together they let anything follow from anything." },
];
const A = "2 + 2 = 4", B = "the moon is made of cheese";

/** Harmony between introduction and elimination rules: ∧ and ∨ have it; Prior’s tonk does not. */
export function HarmonyViz() {
  const [k, setK] = useState(0);
  const [run, setRun] = useState(false);
  const C = CONN[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="connective">
        {CONN.map((c, i) => <button key={c.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setRun(false); }}>{c.label}</button>)}
      </div>
      <svg viewBox="0 0 520 110" role="img" aria-label="Introduction and elimination rules" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={240} height={90} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={270} y={10} width={240} height={90} rx={8} style={{ fill: "var(--bg-subtle)", stroke: C.harmonious ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
        <text x={130} y={32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>introduction: what it takes to assert</text>
        <text x={390} y={32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>elimination: what you may draw out</text>
        <foreignObject x={20} y={40} width={220} height={58}><p style={{ fontSize: 12, margin: 0, color: "var(--text)" }}>{C.intro}</p></foreignObject>
        <foreignObject x={280} y={40} width={220} height={58}><p style={{ fontSize: 12, margin: 0, color: "var(--text)" }}>{C.elim}</p></foreignObject>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: C.harmonious ? "var(--text)" : "var(--danger)" }}>{C.harmonious ? "In harmony." : "Not in harmony."} {C.note}</p>
      {C.key === "tonk" && (
        <div className="viz-controls">
          <button type="button" className="btn btn-primary" onClick={() => setRun(true)}>derive with tonk</button>
        </div>
      )}
      {C.key === "tonk" && run && (
        <ol className="mono" style={{ fontSize: 13, paddingLeft: 22 }}>
          <li>{A}. (premise)</li>
          <li>{A} tonk {B}. (tonk introduction, from 1)</li>
          <li>{B}. (tonk elimination, from 2)</li>
        </ol>
      )}
      <figcaption className="viz-caption">
        If meaning is use, the rules for a connective fix its meaning. But not any rules will do: what the elimination rule
        lets you draw out must match what the introduction rule required you to put in. Dummett and Prawitz made this
        harmony a test of whether rules confer a coherent meaning, and argued that it favours intuitionistic logic.
      </figcaption>
    </figure>
  );
}
