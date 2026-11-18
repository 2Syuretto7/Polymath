"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Many studies of effects that are all null: how many come out significant by chance? */
export function MultipleTestsViz() {
  const [m, setM] = useState(20);
  const [seed, setSeed] = useState(7);
  const [bonf, setBonf] = useState(false);
  const r = rng(seed * 7919 + 13);
  const ps = Array.from({ length: 100 }, () => r()).slice(0, m);
  const cut = bonf ? 0.05 / m : 0.05;
  const hits = ps.filter((p) => p < cut).length;
  const atLeastOne = 1 - (1 - cut) ** m;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>number of tests m: <span className="mono">{m}</span></span>
          <input type="range" min={1} max={100} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <div className="segmented" role="group" aria-label="threshold">
          <button type="button" aria-pressed={!bonf} className={!bonf ? "seg is-on" : "seg"} onClick={() => setBonf(false)}>each at 0.05</button>
          <button type="button" aria-pressed={bonf} className={bonf ? "seg is-on" : "seg"} onClick={() => setBonf(true)}>Bonferroni, 0.05/m</button>
        </div>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>Run the studies again</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 4, marginTop: 10, maxWidth: 520 }}>
        {ps.map((p, i) => (
          <div key={i} className="mono" style={{ fontSize: 11, textAlign: "center", padding: "4px 0", borderRadius: 4, border: p < cut ? "1.5px solid var(--danger)" : "1px solid var(--border)", color: p < cut ? "var(--danger)" : "var(--text)", background: p < cut ? "var(--danger-soft)" : "transparent", fontWeight: p < cut ? 700 : 400 }}>
            {p.toFixed(3)}
          </div>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>threshold for each test: {cut.toPrecision(3)}</div>
        <div>expected number of false positives: {(m * cut).toFixed(2)}</div>
        <div>chance of at least one false positive: {atLeastOne.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>&ldquo;significant&rdquo; results this run: {hits} of {m}</div>
      </div>
      <figcaption className="viz-caption">
        Each tile is the p-value of a study in which the null hypothesis is true, so it is uniformly distributed between 0
        and 1. Tested one by one at 0.05, about one study in twenty looks like a discovery. Reporting only those, or trying
        analyses until one works, turns noise into findings. The Bonferroni correction tests each at 0.05/m, which keeps the
        chance of any false positive below 0.05.
      </figcaption>
    </figure>
  );
}
