"use client";

import { useState } from "react";

export type AmbigItem = { sentence: string; kind: string; readings: { label: string; gloss: string }[]; note: string };

/** Switch between the readings of an ambiguous sentence. */
export function ReadingsViz({ items }: { items: AmbigItem[] }) {
  const [k, setK] = useState(0);
  const [r, setR] = useState(0);
  const A = items[k];
  const R = A.readings[r];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Sentence">
        {items.map((x, i) => (
          <button key={x.sentence} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k}
            onClick={() => { setK(i); setR(0); }}>{i + 1}</button>
        ))}
      </div>
      <p className="tagger-text" style={{ marginTop: 14, fontSize: 19 }}>&ldquo;{A.sentence}&rdquo;</p>
      <p className="mono-meta" style={{ margin: "0 0 10px", textTransform: "none" }}>{A.kind}</p>
      <div className="segmented" role="group" aria-label="Reading">
        {A.readings.map((x, i) => (
          <button key={x.label} type="button" aria-pressed={i === r} className={i === r ? "seg is-on" : "seg"} onClick={() => setR(i)}>{x.label}</button>
        ))}
      </div>
      <p className="tagger-row is-right" style={{ marginTop: 12, fontFamily: "var(--font-serif)", fontSize: 15.5 }}>{R.gloss}</p>
      <figcaption className="viz-caption" aria-live="polite">{A.note}</figcaption>
    </figure>
  );
}
