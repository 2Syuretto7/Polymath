"use client";

import { useState } from "react";

type Item = { english: string; options: string[]; correct: number[]; why: string };

const ITEMS: Item[] = [
  {
    english: "Asha is at home, but Ben is not.",
    options: ["A ∧ ¬B", "A ∨ ¬B", "¬(A ∧ B)", "A → ¬B"],
    correct: [0],
    why: "'But' signals contrast, which logic ignores: it asserts both parts, just as 'and' does.",
  },
  {
    english: "Asha is at home only if Ben is.",
    options: ["B → A", "A → B", "A ↔ B", "A ∧ B"],
    correct: [1],
    why: "'Only if' introduces a necessary condition. If Asha is at home, then Ben must be: A → B.",
  },
  {
    english: "Asha is at home if Ben is.",
    options: ["A → B", "B → A", "A ↔ B", "A ∨ B"],
    correct: [1],
    why: "'If' introduces a sufficient condition. Ben's being at home is enough for Asha's: B → A.",
  },
  {
    english: "Asha is at home unless Ben is.",
    options: ["A ∨ B", "A ∧ ¬B", "¬B → A", "B → ¬A"],
    correct: [0, 2],
    why: "'A unless B' means: if not B, then A. That is ¬B → A, which says the same as A ∨ B. (Some readers also hear 'and not both', but the weaker reading is the standard one.)",
  },
  {
    english: "Neither Asha nor Ben is at home.",
    options: ["¬A ∨ ¬B", "¬A ∧ ¬B", "¬(A ∨ B)", "¬(A ∧ B)"],
    correct: [1, 2],
    why: "Both are absent: ¬A ∧ ¬B. Equivalently, it is not the case that either is at home: ¬(A ∨ B).",
  },
  {
    english: "Asha and Ben are not both at home.",
    options: ["¬A ∧ ¬B", "¬(A ∧ B)", "¬A ∨ ¬B", "¬(A ∨ B)"],
    correct: [1, 2],
    why: "This denies only the conjunction, so one of them may be at home: ¬(A ∧ B), or equivalently ¬A ∨ ¬B.",
  },
  {
    english: "Asha is at home if and only if Ben is not.",
    options: ["A ↔ ¬B", "¬(A ↔ B)", "A → ¬B", "(A → ¬B) ∧ (¬B → A)"],
    correct: [0, 1, 3],
    why: "'If and only if' is the biconditional, A ↔ ¬B. Spelling out both directions gives the last option, and A ↔ ¬B is true exactly when A and B differ, as ¬(A ↔ B) is.",
  },
];

/** Translate English sentences into sentential logic, choosing every correct symbolisation. */
export function SymboliseViz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const item = ITEMS[i];
  const go = (j: number) => { setI(j); setPicked([]); setChecked(false); };
  const toggle = (o: number) => { setChecked(false); setPicked((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o])); };
  const right = checked && item.correct.length === picked.length && item.correct.every((c) => picked.includes(c));

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0 }}>Key: A = Asha is at home. B = Ben is at home.</p>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, margin: "10px 0" }}>&ldquo;{item.english}&rdquo;</p>
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Symbolisations; choose every correct one">
        {item.options.map((o, j) => {
          const on = picked.includes(j);
          const ok = item.correct.includes(j);
          const style = checked && (on || ok) ? { borderColor: ok ? "var(--accent)" : "var(--danger)", color: ok ? "var(--accent)" : "var(--danger)" } : undefined;
          return (
            <button key={o} type="button" className={on ? "btn btn-primary" : "btn"} aria-pressed={on} onClick={() => toggle(j)} style={on && checked ? undefined : style}>
              <span className="mono">{o}</span>
            </button>
          );
        })}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={picked.length === 0} onClick={() => setChecked(true)}>Check</button>
        <button type="button" className="btn" onClick={() => go((i + 1) % ITEMS.length)}>Next sentence</button>
        <span className="mono-meta">{i + 1} of {ITEMS.length}</span>
      </div>
      {checked && (
        <p className={`viz-verdict ${right ? "viz-verdict-right" : "viz-verdict-wrong"}`} style={{ margin: "8px 0 0" }}>
          {right ? "Right." : `Not quite. The correct ${item.correct.length > 1 ? "choices are" : "choice is"} ${item.correct.map((c) => item.options[c]).join(" and ")}.`}
        </p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {checked ? item.why : "Choose every symbolisation that says the same as the English, then check. Some sentences have more than one."}
      </figcaption>
    </figure>
  );
}
