"use client";

import { useState } from "react";

const CLAIMS = [
  "Every event, including every choice, is determined by prior causes.",
  "Being responsible requires that you could have done otherwise.",
  "We are sometimes morally responsible for what we do.",
];
const POSITIONS = [
  { name: "libertarianism", who: "Robert Kane, Roderick Chisholm", gist: "Some choices are not determined, and we are responsible for them." },
  { name: "compatibilism", who: "Harry Frankfurt, P. F. Strawson", gist: "Determinism is true, but responsibility needs only the right kind of control, not alternative possibilities." },
  { name: "hard determinism or scepticism", who: "Derk Pereboom, Galen Strawson", gist: "Determinism and the requirement both hold, so no one is ever truly responsible." },
];

/** Mapping a debate as an inconsistent set of plausible claims: each position rejects one. */
export function InconsistentTriadViz() {
  const [reject, setReject] = useState<number | null>(null);
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 8 }}>
        {CLAIMS.map((c, i) => {
          const off = reject === i;
          return (
            <button
              key={i}
              type="button"
              aria-pressed={off}
              onClick={() => setReject(off ? null : i)}
              style={{ textAlign: "left", padding: "10px 12px", borderRadius: 8, cursor: "pointer", border: `2px solid ${off ? "var(--danger)" : "var(--accent)"}`, background: off ? "var(--danger-soft)" : "var(--accent-soft)", color: "var(--text)", textDecoration: off ? "line-through" : "none" }}
            >
              <strong>{i + 1}.</strong> {c}
            </button>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {reject === null
          ? "All three claims are plausible, but they cannot all be true. Click the one you would reject."
          : `Rejecting claim ${reject + 1} gives ${POSITIONS[reject].name} (${POSITIONS[reject].who}). ${POSITIONS[reject].gist}`}
      </p>
      <figcaption className="viz-caption">
        Many debates can be mapped as a small set of claims, each attractive, that are jointly inconsistent. Every position
        in the debate is a choice of which claim to give up, and the main arguments are attempts to show that one claim is
        weaker than it looks. A map like this shows where a new contribution could fit.
      </figcaption>
    </figure>
  );
}
