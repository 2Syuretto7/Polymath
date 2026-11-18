"use client";

import { useState } from "react";

/** Frege’s waiter: lay a knife by each plate and you know there are as many, without counting either. */
export function EquinumerousViz() {
  const [plates, setPlates] = useState(6);
  const [knives, setKnives] = useState(5);
  const [paired, setPaired] = useState(false);
  const m = Math.min(plates, knives);
  const same = plates === knives;
  const row = (count: number, y: number, kind: "plate" | "knife") => Array.from({ length: count }, (_, i) => {
    const x = 40 + i * 48;
    const left = paired && i >= m;
    return kind === "plate"
      ? <circle key={i} cx={x} cy={y} r={16} style={{ fill: "var(--bg-subtle)", stroke: left ? "var(--danger)" : "var(--border-strong)", strokeWidth: 2 }} />
      : <rect key={i} x={x - 3} y={y - 18} width={6} height={36} rx={3} style={{ fill: left ? "var(--danger)" : "var(--text-muted)" }} />;
  });
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 150" role="img" aria-label="Plates and knives, paired one to one" style={{ width: "100%", display: "block" }}>
        {row(plates, 40, "plate")}
        {row(knives, 110, "knife")}
        {paired && Array.from({ length: m }, (_, i) => <line key={i} x1={40 + i * 48} y1={58} x2={40 + i * 48} y2={90} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />)}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          plates{" "}
          <input type="range" min={0} max={10} value={plates} onChange={(e) => { setPlates(Number(e.target.value)); setPaired(false); }} aria-label="plates" />
        </label>
        <label className="mono" style={{ fontSize: 13 }}>
          knives{" "}
          <input type="range" min={0} max={10} value={knives} onChange={(e) => { setKnives(Number(e.target.value)); setPaired(false); }} aria-label="knives" />
        </label>
        <button type="button" className="btn btn-primary" onClick={() => setPaired(true)}>lay one knife by each plate</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {paired
          ? same
            ? "Nothing is left over: the plates and knives are equinumerous. By Hume’s principle, the number of plates is the number of knives."
            : `Something is left over (in red): not equinumerous, so the numbers differ, and no counting was needed to see it.`
          : "Pair them off, without counting."}
      </p>
      <figcaption className="viz-caption">
        Frege&rsquo;s example: a waiter can be sure of laying as many knives as plates without counting either, by laying a
        knife to the right of each plate. One-to-one correspondence is a logical notion, and Frege uses it to say when two
        concepts have the same number. Set both to 0: the concept &lsquo;not identical with itself&rsquo; has the number 0.
      </figcaption>
    </figure>
  );
}
