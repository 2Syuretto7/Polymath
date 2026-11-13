"use client";

import { useState } from "react";

const STONES = ["block", "pillar", "slab", "beam"] as const;
type Stone = (typeof STONES)[number];
const NUM = ["", "two", "three", "four"];
const shape = (s: Stone) => (s === "block" ? [22, 22] : s === "pillar" ? [14, 40] : s === "slab" ? [40, 10] : [56, 8]);

/** Wittgenstein’s builders: a language of four words whose meaning is the part they play in building. */
export function BuildersGameViz() {
  const [stage, setStage] = useState(0);
  const [n, setN] = useState(1);
  const [pile, setPile] = useState<Stone[]>([]);
  const [last, setLast] = useState("");
  const call = (s: Stone) => {
    const k = stage === 0 ? 1 : n;
    setPile([...pile, ...Array(k).fill(s)].slice(-24));
    setLast(`${stage === 1 && k > 1 ? `${NUM[k - 1]} ` : ""}${s}${stage === 1 && k > 1 ? "s" : ""}!`);
  };
  const W = 520, H = 120;
  let xpos = 10;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Language game">
        {["the first game: four words", "with numerals added"].map((l, i) => <button key={l} type="button" aria-pressed={stage === i} className={stage === i ? "seg is-on" : "seg"} onClick={() => { setStage(i); setN(1); }}>{l}</button>)}
      </div>
      {stage === 1 && (
        <div className="segmented" role="group" aria-label="Numeral" style={{ marginTop: 6 }}>
          {[1, 2, 3, 4].map((k) => <button key={k} type="button" aria-pressed={n === k} className={n === k ? "seg is-on" : "seg"} onClick={() => setN(k)}>{k === 1 ? "no numeral" : NUM[k - 1]}</button>)}
        </div>
      )}
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {STONES.map((s) => <button key={s} type="button" className="btn btn-primary" onClick={() => call(s)}>A calls: {s}!</button>)}
        <button type="button" className="btn" onClick={() => { setPile([]); setLast(""); }}>Clear the site</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The stones B has brought" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={0} y1={H - 10} x2={W} y2={H - 10} style={{ stroke: "var(--border)" }} />
        {pile.map((s, i) => {
          const [w, h] = shape(s);
          const el = <rect key={i} x={xpos} y={H - 10 - h} width={w} height={h} rx={2} style={{ fill: i >= pile.length - (stage === 1 ? n : 1) ? "var(--accent)" : "var(--text-faint)" }} />;
          xpos += w + 4;
          return xpos < W ? el : null;
        })}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {last ? `A: “${last}”  B brings ${stage === 1 && n > 1 ? `${NUM[n - 1]} of them` : "one"}, learnt by training, not by definition.` : "Call for a stone."}
      </p>
      <figcaption className="viz-caption">
        In the opening of the <em>Philosophical Investigations</em>, builder A calls out and assistant B brings the stone. There
        is no more to the meaning of &ldquo;slab!&rdquo; than its role in this activity: it is an order, not a label. Adding
        numerals changes the game, and &ldquo;three&rdquo; gets its meaning from the counting B does, not from an object it names.
      </figcaption>
    </figure>
  );
}
