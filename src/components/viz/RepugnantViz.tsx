"use client";

import { useState } from "react";

/** Population A: 10 people at welfare 100. Z: n people at welfare w. Values under three axiologies. */
export function values(n: number, w: number, c: number) {
  const A = { n: 10, w: 100 };
  return {
    totalA: A.n * A.w, totalZ: n * w,
    avgA: A.w, avgZ: w,
    critA: A.n * (A.w - c), critZ: n * (w - c),
  };
}

/** The total, average and critical-level views compare a small excellent population with a huge one barely worth living. */
export function RepugnantViz() {
  const [n, setN] = useState(1000);
  const [w, setW] = useState(2);
  const [c, setC] = useState(0);
  const v = values(n, w, c);
  const H = 150, maxN = 2000;
  const sx = (k: number) => (k / maxN) * 360;
  const sy = (k: number) => (k / 100) * (H - 30);
  const verdict = (a: number, z: number) => (z > a ? "Z is better" : z < a ? "A is better" : "equally good");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>people in Z = {n.toLocaleString("en-IN")} <input type="range" min={100} max={2000} step={100} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="size of Z" /></label>
        <label>welfare in Z = {w} <input type="range" min={1} max={20} step={1} value={w} onChange={(e) => setW(Number(e.target.value))} aria-label="welfare in Z" /></label>
        <label>critical level = {c} <input type="range" min={0} max={10} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="critical level" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Two populations as rectangles of width size and height welfare" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={H} x2={530} y2={H} style={{ stroke: "var(--border-strong)" }} />
        <rect x={20} y={H - sy(100)} width={Math.max(2, sx(10) * 4)} height={sy(100)} style={{ fill: "var(--accent)" }} />
        <text x={30} y={H - sy(100) - 6} style={{ fill: "var(--text)", fontSize: 11 }}>A: 10 people at 100</text>
        <rect x={140} y={H - Math.max(1, sy(w))} width={sx(n)} height={Math.max(1, sy(w))} style={{ fill: "var(--success)" }} />
        <text x={140} y={H - sy(w) - 6} style={{ fill: "var(--text)", fontSize: 11 }}>Z: {n.toLocaleString("en-IN")} people at {w}</text>
        {c > 0 && <line x1={20} y1={H - sy(c)} x2={530} y2={H - sy(c)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />}
        <text x={20} y={166} style={{ fill: "var(--text-muted)", fontSize: 10 }}>width: number of people (A drawn four times wider so it shows); height: welfare</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Total: A {v.totalA.toLocaleString("en-IN")}, Z {v.totalZ.toLocaleString("en-IN")} ({verdict(v.totalA, v.totalZ)}). Average: A {v.avgA}, Z {v.avgZ} ({verdict(v.avgA, v.avgZ)}). Critical level {c}: A {v.critA.toLocaleString("en-IN")}, Z {v.critZ.toLocaleString("en-IN")} ({verdict(v.critA, v.critZ)}).
      </p>
      <figcaption className="viz-caption">
        On the total view, a large enough population of lives barely worth living is better than any small population of
        excellent lives: Parfit&rsquo;s repugnant conclusion. The average view avoids it, and a positive critical level
        makes extra lives below that level count against an outcome, at the price of other strange verdicts.
      </figcaption>
    </figure>
  );
}
