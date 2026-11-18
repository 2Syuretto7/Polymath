"use client";

import { useState } from "react";
import { COVERS, deck } from "./coverData";
import { CoverGraphView } from "./CoverGraphView";

/** Deck transformations of a cover: symmetries of the sheets that respect the a- and b-edges. */
export function DeckViz() {
  const [k, setK] = useState(2);
  const [d, setD] = useState(0);
  const C = COVERS[k];
  const D = deck(C);
  const p = D[Math.min(d, D.length - 1)];
  const n = C.a.length;
  const labels = Array.from({ length: n }, (_, i) => String(p[i]));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="cover">
        {COVERS.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setD(0); }}>{c.name}</button>)}
      </div>
      <div className="viz-controls">
        {D.map((q, i) => <button key={q.join("")} type="button" className={i === d ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setD(i)}>{q.every((x, j) => x === j) ? "identity" : `sheet 0 to sheet ${q[0]}`}</button>)}
      </div>
      <CoverGraphView c={C} labels={labels} highlight={p[0]} />
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {D.length} deck transformation{D.length === 1 ? "" : "s"} for {n} sheets. {D.length === n ? "They act transitively on the sheets: the cover is normal, and the deck group is the quotient of π₁ by the subgroup." : "They do not reach every sheet: the cover is not normal."}
      </p>
      <figcaption className="viz-caption">
        Each sheet is relabelled with the sheet it is sent to. A deck transformation must carry a-edges to a-edges and b-edges
        to b-edges, so it is fixed by where it sends sheet 0. For a normal cover every choice works; otherwise few or none do.
      </figcaption>
    </figure>
  );
}
