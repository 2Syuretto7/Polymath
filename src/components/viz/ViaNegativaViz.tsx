"use client";

import { useState } from "react";

const STEPS = [
  { neg: "It is not an accident, like a colour.", left: "substances of every kind" },
  { neg: "It is not a mineral.", left: "plants, animals and made things" },
  { neg: "It is not a living body.", left: "made things of every kind" },
  { neg: "It is not flat, like a board.", left: "made things with hollow shapes" },
  { neg: "It is not a sphere.", left: "hollow made things of other shapes" },
  { neg: "It is not pointed.", left: "large hollow made things, neither round nor pointed" },
  { neg: "It is not round in section, and not straight-sided like a box.", left: "something close to the right idea: a ship" },
];

/** Maimonides's ship: each denial narrows down what a thing is, without ever saying what it is. */
export function ViaNegativaViz() {
  const [k, setK] = useState(0);
  const done = k === STEPS.length;

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ textTransform: "none", margin: "0 0 8px" }}>
        someone has heard the word ship but has never seen one; they are told only what a ship is not
      </p>
      <ol style={{ margin: 0, paddingLeft: 22 }}>
        {STEPS.slice(0, k).map((s, i) => (
          <li key={i} style={{ margin: "4px 0" }}>{s.neg}</li>
        ))}
      </ol>
      <div style={{ margin: "12px 0", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: 8, background: done ? "var(--accent-soft)" : "var(--bg-subtle)" }}>
        <span className="mono-meta" style={{ textTransform: "none" }}>what is left open: </span>
        {k === 0 ? "anything at all" : STEPS[k - 1].left}
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }} aria-hidden="true">
        {STEPS.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 8, borderRadius: 4, background: i < k ? "var(--accent)" : "var(--border)" }} />
        ))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setK(k + 1)}>Deny one more thing</button>
        <button type="button" className="btn" onClick={() => setK(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {done
          ? "Maimonides says such a person has almost reached the true idea of a ship by negations alone. Each denial was knowledge, though none said what a ship is. In the same way, he holds, we come nearer to God by learning what God is not."
          : "Each denial removes possibilities. None of them says what the thing is, yet each one adds to what you know."}
      </figcaption>
    </figure>
  );
}
