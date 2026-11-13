"use client";

import { useState } from "react";

const OUTCOMES = Array.from({ length: 12 }, (_, i) => i);
const THEORIES = [
  { name: "bold theory", allows: [3, 4], note: "predicts a narrow result" },
  { name: "cautious theory", allows: [1, 2, 3, 4, 5, 6], note: "allows half the outcomes" },
  { name: "flexible theory", allows: OUTCOMES, note: "can accommodate anything" },
];

/** Popper: a theory’s empirical content is what it prohibits. Bolder theories prohibit more, so are easier to refute. */
export function ProhibitViz() {
  const [obs, setObs] = useState<number | null>(null);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px", fontSize: 14 }}>Twelve possible results of an experiment. Pick the one that is observed.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4 }}>
        {OUTCOMES.map((o) => (
          <button key={o} type="button" aria-pressed={obs === o} className={obs === o ? "seg is-on" : "seg"} style={{ padding: "6px 0" }} onClick={() => setObs(obs === o ? null : o)}>{o + 1}</button>
        ))}
      </div>
      <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
        {THEORIES.map((T) => {
          const refuted = obs !== null && !T.allows.includes(obs);
          return (
            <div key={T.name} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px", background: refuted ? "var(--danger-soft)" : "var(--bg)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", fontSize: 14 }}>
                <strong>{T.name}</strong>
                <span className="mono">prohibits {12 - T.allows.length} of 12</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4, marginTop: 6 }}>
                {OUTCOMES.map((o) => <div key={o} style={{ height: 12, borderRadius: 3, background: T.allows.includes(o) ? "var(--accent-soft)" : "var(--text-faint)", outline: obs === o ? "2px solid var(--text)" : undefined }} />)}
              </div>
              <div className="mono" style={{ fontSize: 13, marginTop: 4 }}>
                {T.note}: {obs === null ? "untested" : refuted ? "refuted" : T.allows.length === 12 ? "survives, but it risked nothing" : "survives a real test"}
              </div>
            </div>
          );
        })}
      </div>
      <figcaption className="viz-caption">
        Pale cells are outcomes a theory allows, dark ones are outcomes it prohibits. The more a theory prohibits, the more it
        says about the world and the easier it is to refute. A theory that allows every outcome cannot be refuted, and for
        Popper that makes it unscientific, not strong.
      </figcaption>
    </figure>
  );
}
