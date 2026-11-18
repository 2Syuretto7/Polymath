"use client";

import { useState } from "react";

const PLACES = ["Christ Church", "Balliol", "the Bodleian Library", "the Ashmolean Museum", "the Examination Schools", "the Sheldonian Theatre", "the science laboratories", "the University Parks"];

/** Ryle’s visitor to Oxford, who has seen everything and asks where the University is. */
export function UniversityTourViz() {
  const [seen, setSeen] = useState<string[]>([]);
  const [asked, setAsked] = useState(false);
  const all = seen.length === PLACES.length;
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>You are showing a visitor round Oxford. Click each place to visit it.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 6 }}>
        {PLACES.map((p) => {
          const on = seen.includes(p);
          return (
            <button key={p} type="button" aria-pressed={on} onClick={() => !on && setSeen([...seen, p])}
              style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid var(--border)", background: on ? "var(--accent-soft)" : "var(--bg)", color: "var(--text)", cursor: on ? "default" : "pointer", textAlign: "left" }}>
              {p}{on ? " (visited)" : ""}
            </button>
          );
        })}
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8 }}>places visited: {seen.length} of {PLACES.length}</div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setAsked(true)}>The visitor asks: &ldquo;But where is the University?&rdquo;</button>
        <button type="button" className="btn btn-ghost" onClick={() => { setSeen([]); setAsked(false); }}>Start again</button>
      </div>
      {asked && (
        <div style={{ marginTop: 6, padding: "8px 12px", borderRadius: 6, background: all ? "var(--danger-soft)" : "var(--accent-soft)" }}>
          {all
            ? "The visitor has seen everything there is to see. The University is not one more building alongside these; it is the way they are organised. To look for it among them is a category mistake."
            : "There are still places to visit, but no amount of further visiting will turn up the University as one more building."}
        </div>
      )}
      <figcaption className="viz-caption">
        Ryle&rsquo;s example in <em>The Concept of Mind</em> (1949). He argued that Descartes made the same kind of mistake about
        the mind: having described bodies and behaviour, the dualist looks for the mind as a further, ghostly thing, when
        talk of minds is talk of how bodies and behaviour are organised.
      </figcaption>
    </figure>
  );
}
