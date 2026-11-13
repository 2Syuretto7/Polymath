"use client";

import { useState } from "react";

const GROUPS = {
  quantity: {
    note: "How many things the judgement is about. The categories of quantity let us count objects as units, pluralities and wholes.",
    rows: [
      ["universal", "All bodies are divisible.", "unity"],
      ["particular", "Some bodies are heavy.", "plurality"],
      ["singular", "This body is heavy.", "totality"],
    ],
  },
  quality: {
    note: "Whether the judgement affirms or denies. The categories of quality concern whether something is real in experience, or lacking, or limited in degree.",
    rows: [
      ["affirmative", "The soul is mortal.", "reality"],
      ["negative", "The soul is not mortal.", "negation"],
      ["infinite", "The soul is non-mortal.", "limitation"],
    ],
  },
  relation: {
    note: "How the parts of the judgement are connected. These are the categories that matter most for Hume's challenge: substance, cause and interaction.",
    rows: [
      ["categorical", "God is just.", "inherence and subsistence: substance and accident"],
      ["hypothetical", "If there is perfect justice, the wicked are punished.", "causality and dependence: cause and effect"],
      ["disjunctive", "The world exists through blind chance, inner necessity or an external cause.", "community: reciprocal interaction"],
    ],
  },
  modality: {
    note: "How the judgement is held: as possible, as actual, or as necessary. Modality adds nothing to the content, only to its relation to our thinking.",
    rows: [
      ["problematic", "It may be that the soul is immortal.", "possibility and impossibility"],
      ["assertoric", "The soul is immortal.", "existence and non-existence"],
      ["apodictic", "The soul must be immortal.", "necessity and contingency"],
    ],
  },
};
type K = keyof typeof GROUPS;

/** Kant's metaphysical deduction: each logical form of judgement corresponds to a pure concept of the understanding. */
export function CategoryTableViz() {
  const [k, setK] = useState<K>("relation");
  const [show, setShow] = useState(false);
  const G = GROUPS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Heading of the table">
        {(Object.keys(GROUPS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{q}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead><tr><th>form of judgement</th><th>example</th><th>category</th></tr></thead>
        <tbody>
          {G.rows.map(([form, ex, cat]) => (
            <tr key={form}><td>{form}</td><td>{ex}</td><td style={{ color: show ? "var(--text)" : "var(--text-faint)" }}>{show ? cat : "?"}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className={show ? "btn" : "btn btn-primary"} onClick={() => setShow(!show)}>{show ? "Hide the categories" : "Reveal the categories"}</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {G.note} The same functions of unity that give a judgement its form, Kant says, give unity to the manifold of intuition, so there are exactly as many categories as forms of judgement: twelve.
      </figcaption>
    </figure>
  );
}
