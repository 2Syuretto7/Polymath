"use client";

import { useState } from "react";

type V = { A: boolean; B: boolean; C: boolean };
type F = { s: string; f: (v: V) => boolean };
const imp = (p: boolean, q: boolean) => !p || q;
const ARGS: { name: string; prem: F[]; concl: F }[] = [
  { name: "modus ponens", prem: [{ s: "A → B", f: (v) => imp(v.A, v.B) }, { s: "A", f: (v) => v.A }], concl: { s: "B", f: (v) => v.B } },
  { name: "affirming the consequent", prem: [{ s: "A → B", f: (v) => imp(v.A, v.B) }, { s: "B", f: (v) => v.B }], concl: { s: "A", f: (v) => v.A } },
  { name: "resolution", prem: [{ s: "A ∨ B", f: (v) => v.A || v.B }, { s: "¬A ∨ C", f: (v) => !v.A || v.C }], concl: { s: "B ∨ C", f: (v) => v.B || v.C } },
  { name: "Peirce’s law", prem: [{ s: "(A → B) → A", f: (v) => imp(imp(v.A, v.B), v.A) }], concl: { s: "A", f: (v) => v.A } },
  { name: "no premises", prem: [], concl: { s: "(A → B) ∨ (B → C)", f: (v) => imp(v.A, v.B) || imp(v.B, v.C) } },
];
const ROWS: V[] = [];
for (const A of [true, false]) for (const B of [true, false]) for (const C of [true, false]) ROWS.push({ A, B, C });
const tf = (b: boolean) => (b ? "T" : "F");

/** A truth table for an argument: rows satisfying every premise are checked for the conclusion. */
export function ConsequenceViz() {
  const [ai, setAi] = useState(0);
  const arg = ARGS[ai];
  const counter = ROWS.filter((v) => arg.prem.every((p) => p.f(v)) && !arg.concl.f(v));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="argument">
        {ARGS.map((a, i) => <button key={a.name} type="button" aria-pressed={ai === i} className={ai === i ? "seg is-on" : "seg"} onClick={() => setAi(i)}>{a.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 14, margin: "8px 0" }}>
        {"{"}{arg.prem.map((p) => p.s).join(", ")}{"}"} ⊨ {arg.concl.s} ?
      </p>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              {["A", "B", "C", ...arg.prem.map((p) => p.s), arg.concl.s].map((h, k) => (
                <th key={k} style={{ padding: "3px 10px", borderBottom: "1px solid var(--border)", borderLeft: k === 3 || k === 3 + arg.prem.length ? "1px solid var(--border)" : undefined }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((v, r) => {
              const all = arg.prem.every((p) => p.f(v));
              const bad = all && !arg.concl.f(v);
              return (
                <tr key={r} style={{ background: bad ? "var(--danger-soft)" : all ? "var(--accent-soft)" : undefined, opacity: all ? 1 : 0.55 }}>
                  {[v.A, v.B, v.C, ...arg.prem.map((p) => p.f(v)), arg.concl.f(v)].map((b, k) => (
                    <td key={k} style={{ padding: "2px 10px", textAlign: "center", borderLeft: k === 3 || k === 3 + arg.prem.length ? "1px solid var(--border)" : undefined }}>{tf(b)}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontWeight: 700, marginTop: 8 }}>
        {counter.length === 0 ? "Valid: the conclusion is true in every row where all premises are true." : `Not valid: ${counter.length} row${counter.length > 1 ? "s" : ""} make every premise true and the conclusion false.`}
      </p>
      <figcaption className="viz-caption">
        Σ ⊨ φ, read &ldquo;Σ tautologically implies φ&rdquo;, means every truth assignment satisfying all of Σ satisfies φ.
        Highlighted rows satisfy every premise; a red row is a counterexample. With no premises, the question is whether
        φ is a tautology.
      </figcaption>
    </figure>
  );
}
