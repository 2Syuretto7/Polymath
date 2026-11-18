"use client";

import { useState } from "react";

const PREMS = [
  { text: "We ought to believe in all and only the entities indispensable to our best scientific theories.", who: "Maddy and Sober reject this", why: "Maddy: scientists do not treat every part of a successful theory as confirmed; they use idealisations, such as continuous fluids, they know are false. Sober: the mathematics is common to all the competing theories, so the evidence that favours one theory over another cannot confirm it." },
  { text: "Mathematical entities are indispensable to our best scientific theories.", who: "Field rejects this", why: "Field: physics can be rewritten without numbers, quantifying over space-time points instead, with mathematics only a conservative shortcut." },
];

/** The Quine-Putnam indispensability argument, and where its critics push back. */
export function IndispensabilityViz() {
  const [rej, setRej] = useState<number | null>(null);
  return (
    <figure className="viz">
      <ol style={{ paddingLeft: 22, margin: "4px 0" }}>
        {PREMS.map((p, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <span style={{ textDecoration: rej === i ? "line-through" : "none", color: rej === i ? "var(--danger)" : "var(--text)" }}>{p.text}</span>
            <div className="viz-controls" style={{ marginTop: 4 }}>
              <button type="button" className={rej === i ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setRej(rej === i ? null : i)}>{rej === i ? "restore premise " + (i + 1) : "reject premise " + (i + 1)}</button>
            </div>
          </li>
        ))}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: rej === null ? "var(--accent)" : "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 6 }}>
        {rej === null ? "Therefore: we ought to believe in mathematical entities." : "The conclusion no longer follows."}
      </p>
      {rej !== null && <p style={{ fontSize: 14, margin: "4px 0" }}><strong>{PREMS[rej].who}.</strong> {PREMS[rej].why}</p>}
      {rej === null && <p style={{ fontSize: 14, margin: "4px 0" }}>The argument is valid. Premise 1 rests on naturalism and confirmational holism; premise 2 on the practice of science. To resist the conclusion, reject a premise.</p>}
      <figcaption className="viz-caption">
        Quine and Putnam argued that the same evidence that supports physics supports the mathematics woven into it. The
        enhanced version, due to Baker and Colyvan, adds that mathematics sometimes explains physical facts, such as why
        periodical cicadas have prime life cycles of 13 and 17 years.
      </figcaption>
    </figure>
  );
}
