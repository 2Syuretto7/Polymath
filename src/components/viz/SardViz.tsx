"use client";

import { useState } from "react";

const bump = (x: number) => (Math.abs(x) <= 0.6 ? 0 : Math.sign(x) * 5 * Math.exp(-1 / (Math.abs(x) - 0.6)));
const FNS = [
  { name: "f(x) = x³ − 3x", f: (x: number) => x * x * x - 3 * x, crit: [-1, 1], cv: [2, -2] },
  { name: "flat in the middle", f: bump, crit: [] as number[], cv: [0] },
];

/** Sard's theorem in one dimension: critical points may be many, but critical values are few. */
export function SardViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState(0.5);
  const F = FNS[k];
  const X0 = -2.2, X1 = 2.2, Y0 = -3.2, Y1 = 3.2, W = 300, H = 200;
  const sx = (x: number) => 20 + ((x - X0) / (X1 - X0)) * W;
  const sy = (y: number) => 10 + ((Y1 - y) / (Y1 - Y0)) * H;
  const pts: string[] = [];
  for (let i = 0; i <= 300; i++) { const x = X0 + (i / 300) * (X1 - X0); pts.push(`${sx(x)},${sy(F.f(x))}`); }
  const isCrit = F.cv.some((v) => Math.abs(v - c) < 1e-9);
  let count: string;
  if (k === 0) count = Math.abs(c) < 2 ? "3" : Math.abs(c) === 2 ? "2" : "1";
  else count = c === 0 ? "infinitely many" : "1";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>level c = {c < 0 ? `−${(-c).toFixed(1)}` : c.toFixed(1)} <input type="range" min={-30} max={30} value={Math.round(c * 10)} onChange={(e) => setC(Number(e.target.value) / 10)} aria-label="level" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="The graph of a function with a horizontal level line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={20} y={10} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={sx(X0)} y1={sy(0)} x2={sx(X1)} y2={sy(0)} style={{ stroke: "var(--border)" }} />
        <line x1={sx(0)} y1={sy(Y0)} x2={sx(0)} y2={sy(Y1)} style={{ stroke: "var(--border)" }} />
        {k === 1 && <line x1={sx(-0.6)} y1={sy(0)} x2={sx(0.6)} y2={sy(0)} style={{ stroke: "var(--danger)", strokeWidth: 6, opacity: 0.5 }} />}
        <polyline points={pts.join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={20} y1={sy(c)} x2={20 + W} y2={sy(c)} style={{ stroke: isCrit ? "var(--danger)" : "var(--text)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        {F.crit.map((x) => <circle key={x} cx={sx(x)} cy={sy(F.f(x))} r={4} style={{ fill: "var(--danger)" }} />)}
        {F.cv.map((v) => <circle key={v} cx={sx(0)} cy={sy(v)} r={4} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />)}
        <text x={340} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>{F.name}</text>
        <text x={340} y={62} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k === 0 ? "critical points: x = −1, 1" : "critical points: all of [−0.6, 0.6]"}</text>
        <text x={340} y={80} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k === 0 ? "critical values: 2 and −2" : "critical values: only 0"}</text>
        <text x={340} y={112} style={{ fill: isCrit ? "var(--danger)" : "var(--accent)", fontSize: 13, fontWeight: 700 }}>{isCrit ? "c is a critical value" : "c is a regular value"}</text>
        <text x={340} y={132} style={{ fill: "var(--text-muted)", fontSize: 11 }}>points with f(x) = c: {count}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13 }}>
        {k === 0 ? "Two critical points give two critical values, a set of measure zero on the c-axis." : "The critical points fill an interval of positive length, yet they all map to the single value 0."}
      </p>
      <figcaption className="viz-caption">
        Sard&rsquo;s theorem says the critical values of a smooth map have measure zero, however large the set of critical
        points. Red dots mark critical points on the graph; red rings mark critical values on the vertical axis.
      </figcaption>
    </figure>
  );
}
