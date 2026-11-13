"use client";

import { useState } from "react";

type S = { name: string; looks: boolean; nature: boolean; note: string };
const TERMS: { term: string; desc: string; essence: string; samples: S[] }[] = [
  {
    term: "water",
    desc: "a clear, drinkable liquid that fills rivers and falls as rain",
    essence: "the same substance as this sample here, which turned out to be H₂O",
    samples: [
      { name: "tap water", looks: true, nature: true, note: "H₂O with a few dissolved salts" },
      { name: "ice", looks: false, nature: true, note: "solid H₂O: not a liquid, yet still water" },
      { name: "steam", looks: false, nature: true, note: "H₂O as a gas" },
      { name: "sea water", looks: false, nature: true, note: "undrinkable, but mostly H₂O" },
      { name: "XYZ on Twin Earth", looks: true, nature: false, note: "fits the description perfectly, but is a different substance" },
      { name: "clear vodka", looks: true, nature: false, note: "clear and drinkable, but mostly ethanol mixed with water" },
    ],
  },
  {
    term: "gold",
    desc: "a yellow, shiny, heavy metal that does not rust",
    essence: "the same substance as these samples, which turned out to be the element with atomic number 79",
    samples: [
      { name: "a gold coin", looks: true, nature: true, note: "element 79" },
      { name: "iron pyrites", looks: true, nature: false, note: "fool’s gold: yellow and shiny, but iron sulphide" },
      { name: "white gold", looks: false, nature: true, note: "gold alloyed with paler metals: not yellow, still gold" },
      { name: "brass", looks: true, nature: false, note: "yellow and shiny, but copper and zinc" },
    ],
  },
];

/** Natural kind terms: does “water” or “gold” apply by a description, or by sharing a hidden nature with actual samples? */
export function KindSamplesViz() {
  const [ti, setTi] = useState(0);
  const [mode, setMode] = useState(0);
  const T = TERMS[ti];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Term">
        {TERMS.map((t, i) => <button key={t.term} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>“{t.term}”</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Theory" style={{ marginTop: 6 }}>
        {["descriptive theory", "Kripke and Putnam"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{l}</button>)}
      </div>
      <p style={{ margin: "10px 0 8px", fontSize: 14 }}>
        &ldquo;{T.term}&rdquo; applies to anything that is {mode === 0 ? T.desc : T.essence}.
      </p>
      <div style={{ display: "grid", gap: 6 }}>
        {T.samples.map((s) => {
          const yes = mode === 0 ? s.looks : s.nature;
          const disagree = s.looks !== s.nature;
          return (
            <div key={s.name} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center", padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: yes ? "var(--accent-soft)" : "var(--bg)" }}>
              <div style={{ fontSize: 14 }}>
                <strong>{s.name}</strong>
                <span style={{ color: "var(--text-muted)" }}>: {s.note}{disagree ? "; the two theories disagree" : ""}</span>
              </div>
              <span className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{yes ? `is ${T.term}` : `not ${T.term}`}</span>
            </div>
          );
        })}
      </div>
      <figcaption className="viz-caption">
        On the descriptive theory, a kind term means its stereotype, and applies to whatever fits it. Kripke and Putnam held that
        the term is introduced by pointing at samples, and applies to whatever shares their underlying nature, which science may
        discover long after. Then &ldquo;water is H₂O&rdquo; is necessary, though learnt by experiment.
      </figcaption>
    </figure>
  );
}
