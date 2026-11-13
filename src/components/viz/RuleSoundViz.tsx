"use client";

import { useState, type CSSProperties } from "react";

type V = [boolean, boolean, boolean];
const imp = (a: boolean, b: boolean) => !a || b;
const RULES: { label: string; prem: { s: string; f: (v: V) => boolean }[]; conc: { s: string; f: (v: V) => boolean } }[] = [
  { label: "modus ponens", prem: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "P", f: ([p]) => p }], conc: { s: "Q", f: ([, q]) => q } },
  { label: "modus tollens", prem: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "¬Q", f: ([, q]) => !q }], conc: { s: "¬P", f: ([p]) => !p } },
  { label: "disjunctive syllogism", prem: [{ s: "P ∨ Q", f: ([p, q]) => p || q }, { s: "¬P", f: ([p]) => !p }], conc: { s: "Q", f: ([, q]) => q } },
  { label: "hypothetical syllogism", prem: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "Q → R", f: ([, q, r]) => imp(q, r) }], conc: { s: "P → R", f: ([p, , r]) => imp(p, r) } },
  { label: "affirming the consequent", prem: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "Q", f: ([, q]) => q }], conc: { s: "P", f: ([p]) => p } },
  { label: "denying the antecedent", prem: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "¬P", f: ([p]) => !p }], conc: { s: "¬Q", f: ([, q]) => !q } },
];
const ROWS: V[] = [];
for (const p of [true, false]) for (const q of [true, false]) for (const r of [true, false]) ROWS.push([p, q, r]);
const tf = (b: boolean) => (b ? "T" : "F");

/** Checking that a rule of inference is truth-preserving: the base case and inductive step of soundness. */
export function RuleSoundViz() {
  const [ri, setRi] = useState(0);
  const rule = RULES[ri];
  const bad = ROWS.filter((v) => rule.prem.every((p) => p.f(v)) && !rule.conc.f(v));
  const cell: CSSProperties = { padding: "3px 8px", textAlign: "center", borderBottom: "1px solid var(--border)" };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Rule">
        {RULES.map((r, i) => <button key={r.label} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{r.label}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 15, margin: "10px 0 6px" }}>
        {rule.prem.map((p) => p.s).join(",   ")}   ⊢   {rule.conc.s}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              {["P", "Q", "R"].map((h) => <th key={h} style={cell}>{h}</th>)}
              {rule.prem.map((p) => <th key={p.s} style={cell}>{p.s}</th>)}
              <th style={cell}>{rule.conc.s}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((v, i) => {
              const allP = rule.prem.every((p) => p.f(v));
              const isBad = allP && !rule.conc.f(v);
              return (
                <tr key={i} style={{ background: isBad ? "var(--danger-soft)" : allP ? "var(--accent-soft)" : undefined }}>
                  {v.map((b, j) => <td key={j} style={cell}>{tf(b)}</td>)}
                  {rule.prem.map((p) => <td key={p.s} style={cell}>{tf(p.f(v))}</td>)}
                  <td style={{ ...cell, fontWeight: 700 }}>{tf(rule.conc.f(v))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8, fontWeight: 700 }}>
        {bad.length === 0
          ? "truth-preserving: in every row where all the premises are true, so is the conclusion"
          : `not truth-preserving: ${bad.length} row${bad.length > 1 ? "s" : ""} with true premises and a false conclusion`}
      </div>
      <figcaption className="viz-caption">
        Shaded rows are those in which every premise is true; a row in the darker shade has a false conclusion and is a
        counterexample. Soundness of a proof system is proved by checking that every rule is truth-preserving like this, and
        then arguing by induction on the length of a derivation that every derivable conclusion follows semantically from its
        premises.
      </figcaption>
    </figure>
  );
}
