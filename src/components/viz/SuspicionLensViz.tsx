"use client";

import { useState } from "react";

const CASES = [
  {
    label: "A festival",
    text: "A village spends its savings on a lavish temple festival.",
    faith: "The festival expresses gratitude and hope, a shared meaning the villagers really live by.",
    marx: "It consoles people for their poverty and dignifies the status of those who fund it.",
    nietzsche: "It turns weakness into virtue, honouring humility so that the meek can feel superior.",
    freud: "It channels longings for a protecting father into a public, permitted form.",
  },
  {
    label: "A gift",
    text: "A wealthy man makes a large donation to a school.",
    faith: "It is an act of generosity, to be understood as the giver understands it.",
    marx: "It secures his class’s standing and hides how the wealth was made.",
    nietzsche: "It displays his power: giving is a way of placing others in his debt.",
    freud: "It soothes a guilt he does not admit to himself.",
  },
  {
    label: "A dream",
    text: "Someone dreams of missing a train while their family waves from the platform.",
    faith: "The dream speaks in symbols about change and parting, which can be read for what they reveal.",
    marx: "It mirrors the anxieties of a life ruled by the clock of wage labour.",
    nietzsche: "It shows the drives, not the conscious self, doing the real work of willing.",
    freud: "It is the disguised fulfilment of a wish the dreamer would not avow when awake.",
  },
];

const LENSES = [
  { key: "faith", label: "restoring meaning" },
  { key: "marx", label: "Marx" },
  { key: "nietzsche", label: "Nietzsche" },
  { key: "freud", label: "Freud" },
] as const;

type Lens = (typeof LENSES)[number]["key"];

/** Ricoeur’s two hermeneutic styles: a hermeneutics of faith and the three masters of suspicion. */
export function SuspicionLensViz() {
  const [k, setK] = useState(0);
  const [lens, setLens] = useState<Lens>("faith");
  const C = CASES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((c, i) => (
          <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.label}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="reading" style={{ marginTop: 8 }}>
        {LENSES.map((l) => (
          <button key={l.key} type="button" aria-pressed={lens === l.key} className={lens === l.key ? "seg is-on" : "seg"} onClick={() => setLens(l.key)}>{l.label}</button>
        ))}
      </div>
      <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>{C.text}</div>
      <div style={{ marginTop: 8, padding: "10px 14px", borderRadius: 8, border: `2px solid ${lens === "faith" ? "var(--success)" : "var(--accent)"}`, background: lens === "faith" ? "var(--success-soft)" : "var(--accent-soft)" }}>
        {C[lens]}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {lens === "faith"
          ? "A hermeneutics of faith: listen to what the meaning says, and let it address you."
          : `A hermeneutics of suspicion: the apparent meaning disguises ${lens === "marx" ? "economic interest" : lens === "nietzsche" ? "the will to power" : "unconscious desire"}.`}
      </p>
      <figcaption className="viz-caption">
        Paul Ricoeur called Marx, Nietzsche and Freud the &ldquo;masters of suspicion&rdquo;: each treats consciousness
        as false and reads its meanings as symptoms of hidden forces. Ricoeur held that interpretation needs both moods,
        willingness to suspect and willingness to listen, and that suspicion is a passage to a more critical, second
        naïveté, not a final destination.
      </figcaption>
    </figure>
  );
}
