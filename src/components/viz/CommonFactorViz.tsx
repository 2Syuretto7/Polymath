"use client";

import { useState } from "react";

export const CASES = ["Seeing a lemon", "Illusion: the lemon looks orange", "Hallucinating a lemon"];

/** What each theory says is present in each case. */
export const THEORIES = [
  {
    name: "common factor view",
    rows: [
      ["inner experience of a yellow lemon", "the lemon itself, as its cause"],
      ["inner experience of an orange lemon", "the lemon itself, as its cause"],
      ["inner experience of a yellow lemon", "no lemon"],
    ],
    same: "The seeing and the hallucination share their fundamental kind of experience; they differ only in what lies outside it.",
  },
  {
    name: "disjunctivism",
    rows: [
      ["the lemon and its yellowness, presented to you", "the lemon is part of the experience"],
      ["the lemon, presented as orange", "the lemon is part of the experience"],
      ["a state indiscriminable by reflection from seeing a lemon", "no lemon, and nothing more in common"],
    ],
    same: "The seeing and the hallucination are fundamentally different; all they share is that you cannot tell them apart from the inside.",
  },
];

/** Common factor views against disjunctivism, case by case. */
export function CommonFactorViz() {
  const [t, setT] = useState(1);
  const T = THEORIES[t];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="theory">
        {THEORIES.map((v, i) => <button key={v.name} type="button" aria-pressed={t === i} className={t === i ? "seg is-on" : "seg"} onClick={() => setT(i)}>{v.name}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 10, marginBottom: 10 }}>
        {CASES.map((c, i) => {
          const match = t === 0 ? i !== 1 : i === 0;
          return (
            <div key={c} style={{ border: "1px solid var(--border-strong)", borderRadius: 6, padding: "10px 12px", background: "var(--bg-subtle)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{c}</div>
              <div style={{ fontSize: 13, color: "var(--text)", padding: "6px 8px", borderRadius: 4, marginBottom: 6, background: match ? "var(--accent-soft)" : "var(--surface)", border: `1px solid ${match ? "var(--accent)" : "var(--border)"}` }}>{T.rows[i][0]}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{T.rows[i][1]}</div>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{T.name}: {T.same}</p>
      <figcaption className="viz-caption">
        Highlighted boxes show what the theory counts as the same fundamental experience as seeing the lemon. On a common
        factor view, a perfect hallucination of a lemon is the same kind of state as seeing one. On disjunctivism, seeing
        the lemon is a relation to the lemon itself, and the hallucination is something else that merely seems the same.
      </figcaption>
    </figure>
  );
}
