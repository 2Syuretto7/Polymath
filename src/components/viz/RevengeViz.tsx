"use client";

import { useState } from "react";

export const SENTENCES = [
  "Snow is white.",
  "L: This sentence is false.",
  "T: This sentence is true.",
  "R: This sentence is not true.",
];
export const THEORIES = [
  { label: "Tarski", values: ["true", "not a sentence of the language", "not a sentence of the language", "not a sentence of the language"], note: "Each language has its truth predicate in a richer metalanguage, so no sentence can speak of its own truth. The price: no single truth predicate for the whole hierarchy." },
  { label: "Kripke", values: ["true", "neither true nor false", "neither true nor false", "no stable value"], note: "L and T get no value at the least fixed point. But then L is not true, which is what R says; so R is true, and so not true. The revenge sentence can only be stated in the metalanguage." },
  { label: "Field", values: ["true", "value ½", "value ½", "not determinately true, but not determinately not true either"], note: "Field’s logic has a determinately operator D, and R is defective in a sense that needs DD to express, which needs DDD, and so on. There is no single notion of defectiveness that covers all the paradoxes." },
  { label: "Priest", values: ["true", "both true and false", "true, or false, or both", "both true and not true"], note: "Dialetheism accepts that some contradictions are true. Revenge is not a refutation but one more true contradiction, provided explosion fails, as it does in the logic of paradox." },
];
export const consistent = (k: number) => THEORIES[k].values[3] !== "no stable value";

/** Four theories of truth and how each fares against the revenge sentence. */
export function RevengeViz() {
  const [k, setK] = useState(1);
  const th = THEORIES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="theory">
        {THEORIES.map((t, i) => <button key={t.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{t.label}</button>)}
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10, fontSize: 13 }}>
        <tbody>
          {SENTENCES.map((s, i) => {
            const v = th.values[i];
            const bg = v === "true" ? "var(--success-soft)" : v === "no stable value" ? "var(--danger-soft)" : "var(--bg-subtle)";
            return (
              <tr key={s} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "6px 8px", fontWeight: i === 3 ? 700 : 400 }}>{s}</td>
                <td style={{ padding: "6px 8px", background: bg }}>{v}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10 }}>
        {th.label}: the revenge sentence R {consistent(k) ? "is handled inside the theory, at a price." : "cannot be classified without contradiction."}
      </p>
      <figcaption className="viz-caption">{th.note}</figcaption>
    </figure>
  );
}
