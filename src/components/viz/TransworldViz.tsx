"use client";

import { useState } from "react";

const SITS = ["offered a bribe", "able to lie for gain", "tempted to steal", "free to break a promise"];

/** Plantinga's free will defence: what Curley would freely do in each situation is not up to God. */
export function TransworldViz() {
  const [cf, setCf] = useState<boolean[]>([true, false, true, false]);
  const [pick, setPick] = useState<number | null>(null);
  const flip = (i: number) => { setCf(cf.map((x, j) => (j === i ? !x : x))); setPick(null); };
  const good = cf.filter(Boolean).length;
  const depraved = good === 0;
  return (
    <figure className="viz">
      <p style={{ fontSize: 14, margin: "0 0 6px" }}>
        <strong>Counterfactuals of freedom.</strong> For each situation, what would Curley freely do if placed in it? Click to
        change. These truths are not up to God.
      </p>
      <div className="viz-controls">
        {SITS.map((s, i) => (
          <button key={s} type="button" className={cf[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => flip(i)}>
            {s}: {cf[i] ? "would do right" : "would do wrong"}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 14, margin: "10px 0 6px" }}><strong>God chooses a world to create.</strong></p>
      <div className="segmented" role="group" aria-label="world">
        {SITS.map((s, i) => <button key={s} type="button" aria-pressed={pick === i} className={pick === i ? "seg is-on" : "seg"} onClick={() => setPick(i)}>Curley free, {s}</button>)}
        <button type="button" aria-pressed={pick === 4} className={pick === 4 ? "seg is-on" : "seg"} onClick={() => setPick(4)}>no free creatures</button>
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="The outcome of the chosen world" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {SITS.map((s, i) => (
          <g key={s}>
            <rect x={10 + i * 102} y={10} width={94} height={44} rx={6} style={{ fill: pick === i ? (cf[i] ? "var(--accent-soft)" : "color-mix(in srgb, var(--danger) 18%, var(--bg))") : "var(--bg-subtle)", stroke: pick === i ? "var(--text)" : "var(--border)" }} />
            <text x={57 + i * 102} y={30} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>world {i + 1}</text>
            <text x={57 + i * 102} y={46} textAnchor="middle" style={{ fill: cf[i] ? "var(--accent)" : "var(--danger)", fontSize: 11, fontWeight: 700 }}>{cf[i] ? "good, no evil" : "moral evil"}</text>
          </g>
        ))}
        <rect x={418} y={10} width={94} height={44} rx={6} style={{ fill: pick === 4 ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: pick === 4 ? "var(--text)" : "var(--border)" }} />
        <text x={465} y={30} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>world 5</text>
        <text x={465} y={46} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11, fontWeight: 700 }}>no moral good</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {pick === null ? "Pick a world. " : pick === 4 ? "No evil, but no free moral agents and no moral good either. " : cf[pick] ? "Curley freely does right: moral good and no moral evil. " : "Curley freely does wrong. God could have stopped it only by removing the freedom. "}
        {depraved
          ? "Curley suffers from transworld depravity: in every world God can create where Curley is free, Curley goes wrong. An omnipotent God cannot create a world with free Curley and no moral evil."
          : `God can create a world with free Curley and no moral evil: ${good} of the 4 situations would do.`}
      </p>
      <figcaption className="viz-caption">
        God can strongly actualise the situation, but not Curley&rsquo;s free response to it, or the response would not be
        free. If the counterfactuals fall badly for every creature God could create, no world with free creatures and no
        evil is within God&rsquo;s power, and God and evil are consistent after all.
      </figcaption>
    </figure>
  );
}
