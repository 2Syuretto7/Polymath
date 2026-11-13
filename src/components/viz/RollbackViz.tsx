"use client";

import { useState } from "react";
import { seededRng } from "./seededRng";

/** Van Inwagen's rollback: replay the world from the same moment many times; an undetermined choice comes out differently, in proportions. */
export function RollbackViz() {
  const [p, setP] = useState(0.7);
  const [runs, setRuns] = useState<boolean[]>([]);
  const [seed, setSeed] = useState(7);
  const roll = (k: number) => {
    const r = seededRng(seed);
    const add = Array.from({ length: k }, () => r() < p);
    setSeed(seed + 101);
    setRuns([...runs, ...add].slice(-400));
  };
  const tell = runs.filter(Boolean).length;
  const W = 560, cols = 40, cs = W / cols;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        Alice is deciding whether to tell the truth or to lie. On libertarian views her choice is not determined by the prior state of the world. God rolls the world back to just before her choice and lets it run again.
      </p>
      <div className="viz-sliders">
        <label><span>chance she tells the truth on each replay: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={p} onChange={(e) => { setP(Number(e.target.value)); setRuns([]); }} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => roll(1)}>Roll back once</button>
        <button type="button" className="btn" onClick={() => roll(10)}>10 times</button>
        <button type="button" className="btn" onClick={() => roll(100)}>100 times</button>
        <button type="button" className="btn" onClick={() => setRuns([])}>Clear</button>
      </div>
      <svg viewBox={`0 0 ${W} ${Math.max(1, Math.ceil(runs.length / cols)) * cs + 4}`} role="img" aria-label="Outcomes of the replays" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {runs.map((t, i) => <rect key={i} x={(i % cols) * cs + 1} y={Math.floor(i / cols) * cs + 1} width={cs - 2} height={cs - 2} rx={2} style={{ fill: t ? "var(--accent)" : "var(--bg)", stroke: t ? "none" : "var(--text-faint)" }} />)}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>
        replays: {runs.length}; truth: {tell}; lie: {runs.length - tell}{runs.length ? `; proportion telling the truth: ${(tell / runs.length).toFixed(2)}` : ""}
      </p>
      <figcaption className="viz-caption">
        Filled squares are replays in which Alice tells the truth, open ones are lies. Nothing about Alice or her reasons differs between replays; only the outcome does. After many replays, van Inwagen says, we would think that what happens on any one occasion is a matter of chance. This is the luck objection to libertarianism.
      </figcaption>
    </figure>
  );
}
