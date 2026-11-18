"use client";

import { useState } from "react";

const STAGES = [
  {
    name: "1. consistent Γ",
    rows: ["∃x Px", "∀x (Px → Qx)", "¬Qa"],
    note: "Start with a consistent set of sentences. We must build a structure in which all of them are true, out of nothing but the language itself.",
  },
  {
    name: "2. add witnesses",
    rows: ["∃x Px → Pc₁", "∃x ¬Px → ¬Pc₂", "∃x Qx → Qc₃", "… one new constant for every formula ∃x φ"],
    note: "For each formula ∃x φ, add a new constant c and the sentence ∃x φ → φ(c). If something has a property, c names a thing that does. This keeps the set consistent, because c is new.",
  },
  {
    name: "3. make it complete",
    rows: ["Pc₁ ∈ Δ (from ∃x Px and its witness)", "Qc₁ ∈ Δ (from ∀x (Px → Qx))", "¬Qa ∈ Δ", "¬Pa ∈ Δ (Pa would give Qa)", "… α or ¬α for every sentence α"],
    note: "List all sentences and add each one or its negation, whichever keeps consistency, as in sentential logic. The result Δ decides every sentence.",
  },
  {
    name: "4. the term model",
    rows: ["universe: the closed terms a, c₁, c₂, … (identified when Δ says t = u)", "P is true of exactly the t with Pt ∈ Δ: here c₁", "Q is true of exactly the t with Qt ∈ Δ: here c₁", "check: ∃x Px true (c₁), ∀x (Px → Qx) true, ¬Qa true"],
    note: "Let the terms themselves be the elements, and let atomic sentences be true exactly when they are in Δ. Induction, using the witnesses for the quantifier step, shows every sentence of Δ, so of Γ, is true.",
  },
];

/** The four steps of Henkin's proof that a consistent set of sentences has a model. */
export function HenkinViz() {
  const [s, setS] = useState(0);
  const St = STAGES[s];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage">
        {STAGES.map((st, i) => <button key={st.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{st.name}</button>)}
      </div>
      <div style={{ display: "flex", gap: 4, margin: "10px 0" }}>
        {STAGES.map((_, i) => <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: i <= s ? "var(--accent)" : "var(--border)" }} />)}
      </div>
      <ul className="mono" style={{ fontSize: 14, display: "grid", gap: 4, paddingLeft: 20 }}>
        {St.rows.map((r) => <li key={r}>{r}</li>)}
      </ul>
      <p className="viz-caption" style={{ fontWeight: 600 }}>{St.note}</p>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="btn btn-ghost" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={s === STAGES.length - 1} onClick={() => setS(s + 1)}>Next step</button>
      </div>
      <figcaption className="viz-caption">
        Henkin&rsquo;s idea (1949) is to build the model out of syntax. The witnesses guarantee that every existential claim
        in Δ has a named instance, so the term model gets the quantifiers right.
      </figcaption>
    </figure>
  );
}
