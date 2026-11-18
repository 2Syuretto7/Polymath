"use client";

import { useState } from "react";

const TREES = 14;

/** Mencius 6A8: Ox Mountain, stripped by axes and cattle, though sprouts return each night. */
export function OxMountainViz() {
  const [trees, setTrees] = useState(TREES);
  const [sprouts, setSprouts] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const day = () => {
    const cut = Math.min(trees, 3);
    setTrees(trees - cut);
    setSprouts(0);
    setLog([`Day: axes fell ${cut} tree${cut === 1 ? "" : "s"}; cattle and sheep graze every new sprout.`, ...log].slice(0, 4));
  };
  const night = () => {
    setSprouts(Math.min(TREES - trees, sprouts + 4));
    setLog(["Night: rain and dew; new shoots appear where trees once stood.", ...log].slice(0, 4));
  };
  const rest = () => {
    setTrees(Math.min(TREES, trees + Math.ceil(sprouts / 2)));
    setSprouts(0);
    setLog(["Left alone for a season, the sprouts grow into young trees.", ...log].slice(0, 4));
  };
  const reset = () => { setTrees(TREES); setSprouts(0); setLog([]); };
  const slots = Array.from({ length: TREES }, (_, i) => i);
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 190" role="img" aria-label="Ox Mountain with trees and sprouts" style={{ width: "100%", display: "block" }}>
        <path d="M20 170 Q140 40 260 40 Q380 40 500 170 Z" style={{ fill: "var(--bg-subtle)", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {slots.map((i) => {
          const x = 70 + i * 28, y = 170 - Math.max(0, 125 - Math.abs(x - 260) * 0.62);
          if (i < trees) return <g key={i}><line x1={x} y1={y} x2={x} y2={y - 8} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} /><circle cx={x} cy={y - 16} r={10} style={{ fill: "var(--success)", opacity: 0.8 }} /></g>;
          if (i < trees + sprouts) return <path key={i} d={`M${x} ${y} L${x - 3} ${y - 7} M${x} ${y} L${x + 3} ${y - 7}`} style={{ stroke: "var(--success)", strokeWidth: 2 }} />;
          return <line key={i} x1={x - 4} y1={y} x2={x + 4} y2={y} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />;
        })}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={day}>a day of axes and grazing</button>
        <button type="button" className="btn btn-ghost" onClick={night}>a night of rest</button>
        <button type="button" className="btn btn-primary" onClick={rest} disabled={sprouts === 0}>leave it alone for a season</button>
        <button type="button" className="btn btn-ghost" onClick={reset}>reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>trees: {trees} of {TREES}. new sprouts: {sprouts}.</p>
      <ul style={{ fontSize: 14, margin: "4px 0", paddingLeft: 20 }}>{log.map((l, i) => <li key={i} style={{ color: i ? "var(--text-muted)" : "var(--text)" }}>{l}</li>)}</ul>
      <figcaption className="viz-caption">
        Mencius: people see the bare mountain and think it never had trees, but that is not its nature. So too with people:
        the &lsquo;night air&rsquo; restores the sprouts of goodness, but if they are cut down day after day, nothing
        remains.
      </figcaption>
    </figure>
  );
}
