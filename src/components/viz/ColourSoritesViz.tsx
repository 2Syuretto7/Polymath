"use client";

import { useState } from "react";

export const N = 41;
/** Hue of patch k, from pure red (0°) to yellow (60°) in steps of 1.5°. */
export const hue = (k: number) => k * 1.5;
export const JND = 2;

/** A sorites series of colour patches, each indiscriminable from its neighbours. */
export function ColourSoritesViz() {
  const [k, setK] = useState(20);
  const w = 480 / N;
  const fill = (j: number) => `hsl(${hue(j)}, 90%, 50%)`;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>patch {k + 1} of {N} <input type="range" min={0} max={N - 2} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="patch" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A series of colour patches from red to yellow" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: N }, (_, j) => <rect key={j} x={20 + j * w} y={20} width={w + 0.5} height={40} style={{ fill: fill(j) }} />)}
        <rect x={20 + k * w} y={16} width={2 * w} height={48} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={20} y={78} style={{ fill: "var(--text-muted)", fontSize: 10 }}>patch 1: hue 0°</text>
        <text x={500} y={78} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>patch {N}: hue 60°</text>
        <rect x={150} y={96} width={100} height={70} rx={6} style={{ fill: fill(k) }} />
        <rect x={270} y={96} width={100} height={70} rx={6} style={{ fill: fill(k + 1) }} />
        <text x={200} y={182} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>patch {k + 1}</text>
        <text x={320} y={182} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>patch {k + 2}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Patches {k + 1} and {k + 2} differ in hue by 1.5°, below a just noticeable difference of about {JND}°. If patch {k + 1} is red, how could patch {k + 2} fail to be?
      </p>
      <figcaption className="viz-caption">
        The first patch is clearly red and the last clearly yellow, yet no neighbouring pair can be told apart by eye. The
        tolerance premise, &lsquo;if a patch is red, so is any patch indiscriminable from it&rsquo;, applied 40 times,
        leads from a true premise to a false conclusion.
      </figcaption>
    </figure>
  );
}
