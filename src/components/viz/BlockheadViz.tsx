"use client";

import { useState } from "react";

/** Block's Blockhead: a machine that passes the Turing test by looking up every possible conversation. How big is the table? */
export function BlockheadViz() {
  const [mins, setMins] = useState(5);
  const [cpm, setCpm] = useState(200);
  const chars = mins * cpm;
  const log10 = chars * Math.log10(27);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        Ned Block imagined a machine that stores, for every possible conversation so far, a sensible next reply. It would pass any Turing test of fixed length. How many conversations must it store?
      </p>
      <div className="viz-sliders">
        <label><span>length of the test, in minutes: <span className="mono">{mins}</span></span>
          <input type="range" min={1} max={60} step={1} value={mins} onChange={(e) => setMins(Number(e.target.value))} /></label>
        <label><span>characters typed per minute: <span className="mono">{cpm}</span></span>
          <input type="range" min={20} max={400} step={20} value={cpm} onChange={(e) => setCpm(Number(e.target.value))} /></label>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        <div>characters in a conversation: {chars.toLocaleString("en-IN")}</div>
        <div>possible strings, with 27 symbols: 27^{chars.toLocaleString("en-IN")} ≈ 10^{Math.floor(log10).toLocaleString("en-IN")}</div>
        <div>atoms in the observable universe: about 10^80</div>
      </div>
      <svg viewBox="0 0 560 60" role="img" aria-label="Comparison of the table size with the number of atoms" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={540} height={14} rx={3} style={{ fill: "var(--accent)" }} />
        <rect x={10} y={34} width={Math.max(1, (80 / log10) * 540)} height={14} rx={3} style={{ fill: "var(--text-muted)" }} />
        <text x={14} y={21} style={{ fill: "var(--bg)", fontSize: 10 }}>digits in the table size: {Math.floor(log10 + 1).toLocaleString("en-IN")}</text>
        <text x={Math.max(16, (80 / log10) * 540 + 16)} y={45} style={{ fill: "var(--text)", fontSize: 10 }}>digits in the number of atoms: 81</text>
      </svg>
      <figcaption className="viz-caption">
        Blockhead could not be built, but it is possible in principle, and it would pass the test while plainly not thinking: it only looks things up. Block concluded that intelligence depends on how behaviour is produced, not just on the behaviour, so the Turing test is not a definition of thinking.
      </figcaption>
    </figure>
  );
}
