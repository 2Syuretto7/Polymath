"use client";

import { useState } from "react";

const QS = [
  {
    q: "Is there a prime number between 10 and 20?",
    carnap: "Internal to the number framework. Answered by its rules alone: yes, 11. Analytic.",
    quine: "Answered by arithmetic, part of our total theory. Yes, and nothing deeper is at stake.",
  },
  {
    q: "Are there numbers?",
    carnap: "Read internally, trivially yes: it follows from ‘there is a prime between 10 and 20’. Read externally, as a question about reality beyond the framework, it has no cognitive content.",
    quine: "A real question about what exists, answered like any scientific question. Our best theory quantifies over numbers and cannot do without them, so yes.",
  },
  {
    q: "Should we adopt the language of numbers?",
    carnap: "External and practical: a matter of convenience and fruitfulness, not of truth.",
    quine: "Not a separate kind of question. Choosing a theory on grounds of simplicity and fruitfulness is how all questions of existence are settled.",
  },
  {
    q: "Are there electrons?",
    carnap: "Internal to the framework of physical things: answered by observation and theory within it.",
    quine: "Answered by our best theory, in exactly the way the question about numbers is.",
  },
];

/** Carnap's internal and external questions, and Quine's reply, applied to sample questions. */
export function FrameworkViz() {
  const [k, setK] = useState(1);
  const Q = QS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="question">
        {QS.map((d, i) => <button key={d.q} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>Q{i + 1}</button>)}
      </div>
      <p style={{ fontWeight: 700, marginTop: 10 }}>{Q.q}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 8 }}>
        <div style={{ border: "1px solid var(--accent)", borderRadius: 8, padding: 12, background: "var(--accent-soft)" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Carnap, &lsquo;Empiricism, Semantics, and Ontology&rsquo; (1950)</p>
          <p style={{ margin: "6px 0 0" }}>{Q.carnap}</p>
        </div>
        <div style={{ border: "1px solid var(--border-strong)", borderRadius: 8, padding: 12, background: "var(--bg-subtle)" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Quine, &lsquo;On Carnap&rsquo;s Views on Ontology&rsquo; (1951)</p>
          <p style={{ margin: "6px 0 0" }}>{Q.quine}</p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Carnap splits questions into internal ones, settled by the rules of a linguistic framework, and external ones,
        which are practical choices of framework. Quine rejects the split because it rests on the analytic–synthetic
        distinction, which he also rejects; for him ontology is continuous with science.
      </figcaption>
    </figure>
  );
}
