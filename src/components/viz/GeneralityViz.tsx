"use client";

import { useState } from "react";

type Case = { name: string; story: string; types: [string, number][] };
const CASES: Case[] = [
  {
    name: "the tree at dusk",
    story: "Meera glances out of a train window at dusk and comes to believe, truly, that the tree she passes is a maple.",
    types: [
      ["vision", 0.95],
      ["vision at dusk", 0.85],
      ["identifying trees by sight from a moving train", 0.65],
      ["identifying maples by sight, at dusk, from a moving train", 0.45],
      ["this very process, on this occasion", 1],
    ],
  },
  {
    name: "the lucky hunch",
    story: "Ravi has a hunch that the next card is a heart, and it is.",
    types: [
      ["forming beliefs from hunches", 0.3],
      ["guessing the suit of a card", 0.25],
      ["Ravi's hunches about cards on Tuesdays", 0.5],
      ["this very hunch, on this occasion", 1],
    ],
  },
];

/** The generality problem for reliabilism: one belief-forming event falls under many process types with different reliability. */
export function GeneralityViz() {
  const [ci, setCi] = useState(0);
  const [th, setTh] = useState(0.8);
  const c = CASES[ci];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Case">
        {CASES.map((x, i) => <button key={x.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{x.name}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}>{c.story}</p>
      <div className="viz-sliders">
        <label><span>reliability needed for justification: <span className="mono">{Math.round(th * 100)}%</span></span>
          <input type="range" min={0.5} max={0.95} step={0.05} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
        {c.types.map(([t, r]) => (
          <div key={t}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 14 }}>
              <span>{t}</span>
              <span className="mono" style={{ color: r >= th ? "var(--accent)" : "var(--danger)", whiteSpace: "nowrap" }}>{Math.round(r * 100)}%: {r >= th ? "justified" : "not justified"}</span>
            </div>
            <div style={{ position: "relative", height: 10, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
              <div style={{ width: `${r * 100}%`, height: "100%", background: "var(--accent)", opacity: 0.7 }} />
              <div style={{ position: "absolute", left: `${th * 100}%`, top: -3, bottom: -3, width: 2, background: "var(--text)" }} />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="viz-caption">
        Each row describes the same event as a different type of process, with the proportion of true beliefs that type produces. Reliabilism says the belief is justified if the process is reliable enough, but the verdict changes with the description. Too broad and every belief from vision is justified; too narrow, as in the last row, and every true belief is.
      </figcaption>
    </figure>
  );
}
