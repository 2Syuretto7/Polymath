"use client";

import { useState } from "react";

const LINES = [
  "The bank was quiet that morning.",
  "Water lapped at its muddy edge.",
  "An old man untied his boat from a post.",
  "He counted the coins he would earn ferrying people across.",
  "By noon the current had carried him to the far shore.",
];

const OPEN = [
  { whole: "a story about a quiet day at a financial bank", bank: "a place where money is kept" },
  { whole: "a story set beside a river", bank: "the side of a river" },
  { whole: "a story about a boatman by a river", bank: "the side of a river" },
  { whole: "a story about a ferryman’s working day", bank: "the side of a river" },
  { whole: "a story about a ferryman’s working day", bank: "the side of a river" },
];

/** Reading a text line by line: the projection of the whole is revised in the light of the parts. */
export function HermeneuticCircleViz() {
  const [n, setN] = useState(1);
  const [open, setOpen] = useState(true);
  const P = open ? OPEN[n - 1] : OPEN[0];
  const revisions = open ? (n >= 2 ? 1 : 0) + (n >= 3 ? 1 : 0) + (n >= 4 ? 1 : 0) : 0;
  const clash = !open && n >= 2;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="reader">
        <button type="button" aria-pressed={open} className={open ? "seg is-on" : "seg"} onClick={() => setOpen(true)}>open to the text</button>
        <button type="button" aria-pressed={!open} className={!open ? "seg is-on" : "seg"} onClick={() => setOpen(false)}>holding the first guess</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>lines read = {n} <input type="range" min={1} max={5} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="lines read" /></label>
      </div>
      <div style={{ marginTop: 10, padding: "10px 14px", borderRadius: 8, background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>
        {LINES.map((l, i) => (
          <div key={i} style={{ color: i < n ? "var(--text)" : "var(--text-faint)", opacity: i < n ? 1 : 0.4, padding: "2px 0" }}>{l}</div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        Projected whole: {P.whole}. So &ldquo;bank&rdquo; means {P.bank}. Revisions so far: {revisions}.
        {clash ? " The parts no longer fit this whole, but the reader does not notice." : ""}
      </p>
      <figcaption className="viz-caption">
        Every reading begins with a projection of the meaning of the whole, which guides how each part is understood. When
        a part does not fit, an open reader revises the projection, and the parts are read anew. Gadamer holds that such
        fore-projections are not a defect to be eliminated: they are the condition of understanding anything, provided we
        let the text pull us up.
      </figcaption>
    </figure>
  );
}
