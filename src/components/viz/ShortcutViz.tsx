"use client";

import { useState } from "react";
import { FitchBox, type FitchLine } from "./SubproofViz";

type Pair = { name: string; claim: string; basic: FitchLine[]; derived: FitchLine[]; note: string };

const P = (s: string): FitchLine => ({ s, depth: 0, why: "premise" });

const PAIRS: Pair[] = [
  {
    name: "A chain and a denial",
    claim: "A → B, B → C, ¬C ⊢ ¬A",
    basic: [
      P("A → B"), P("B → C"), P("¬C"),
      { s: "A", depth: 1, why: "assumption", assume: true },
      { s: "B", depth: 1, why: "→E 1, 4" },
      { s: "C", depth: 1, why: "→E 2, 5" },
      { s: "¬C", depth: 1, why: "R 3" },
      { s: "¬A", depth: 0, why: "¬I 4–7" },
    ],
    derived: [
      P("A → B"), P("B → C"), P("¬C"),
      { s: "A → C", depth: 0, why: "HS 1, 2", hot: true },
      { s: "¬A", depth: 0, why: "MT 4, 3", hot: true },
    ],
    note: "HS chains the two conditionals in one step, and MT finishes. The subproof of the basic version is still there in spirit: MT is justified by exactly that pattern of ¬I.",
  },
  {
    name: "De Morgan",
    claim: "¬(A ∨ B) ⊢ ¬A ∧ ¬B",
    basic: [
      P("¬(A ∨ B)"),
      { s: "A", depth: 1, why: "assumption", assume: true },
      { s: "A ∨ B", depth: 1, why: "∨I 2" },
      { s: "¬(A ∨ B)", depth: 1, why: "R 1" },
      { s: "¬A", depth: 0, why: "¬I 2–4" },
      { s: "B", depth: 1, why: "assumption", assume: true },
      { s: "A ∨ B", depth: 1, why: "∨I 6" },
      { s: "¬(A ∨ B)", depth: 1, why: "R 1" },
      { s: "¬B", depth: 0, why: "¬I 6–8" },
      { s: "¬A ∧ ¬B", depth: 0, why: "∧I 5, 9" },
    ],
    derived: [
      P("¬(A ∨ B)"),
      { s: "¬A ∧ ¬B", depth: 0, why: "DeM 1", hot: true },
    ],
    note: "Ten lines become two. The two subproofs in the basic version have the same shape, which is the sign that a derived rule is worth having.",
  },
  {
    name: "Inside a subproof",
    claim: "A → B ⊢ ¬B → ¬A",
    basic: [
      P("A → B"),
      { s: "¬B", depth: 1, why: "assumption", assume: true },
      { s: "A", depth: 2, why: "assumption", assume: true },
      { s: "B", depth: 2, why: "→E 1, 3" },
      { s: "¬B", depth: 2, why: "R 2" },
      { s: "¬A", depth: 1, why: "¬I 3–5" },
      { s: "¬B → ¬A", depth: 0, why: "→I 2–6" },
    ],
    derived: [
      P("A → B"),
      { s: "¬B", depth: 1, why: "assumption", assume: true },
      { s: "¬A", depth: 1, why: "MT 1, 2", hot: true },
      { s: "¬B → ¬A", depth: 0, why: "→I 2–3" },
    ],
    note: "A derived rule can be used anywhere a basic rule can, including inside a subproof, as long as the lines it cites are available there.",
  },
];

/** The same result proved with the basic rules only, and again with derived rules. */
export function ShortcutViz() {
  const [k, setK] = useState(0);
  const [d, setD] = useState(false);
  const X = PAIRS[k];
  const lines = d ? X.derived : X.basic;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Example">
        {PAIRS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => { setK(i); setD(false); }}>{p.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 8px" }}>{X.claim}</p>
      <FitchBox lines={lines} />
      <div className="viz-controls" role="group" aria-label="Rules allowed">
        <button type="button" className={!d ? "btn btn-primary" : "btn"} aria-pressed={!d} onClick={() => setD(false)}>Basic rules only</button>
        <button type="button" className={d ? "btn btn-primary" : "btn"} aria-pressed={d} onClick={() => setD(true)}>With derived rules</button>
        <span className="mono-meta">{lines.length} lines (the other version has {(d ? X.basic : X.derived).length})</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {d ? X.note : "Every step here uses a basic rule. Switch to the derived rules to see the same result in fewer lines; the shaded lines use derived rules."}
      </figcaption>
    </figure>
  );
}
