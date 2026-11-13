"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 220, X0 = 30, X1 = 500, Y0 = 110, R = 0.4;
const FS = {
  osc: { name: "sin(1/x)", f: (x: number) => Math.sin(1 / x) },
  damp: { name: "x sin(1/x)", f: (x: number) => x * Math.sin(1 / x) },
};
type K = keyof typeof FS;

/** The sequential criterion: approach 0 along two sequences and compare where the function values go. */
export function TwoSequencesViz() {
  const [k, setK] = useState<K>("osc");
  const [n, setN] = useState(3);
  const f = FS[k].f;
  const X = (x: number) => X0 + ((x + R) / (2 * R)) * (X1 - X0);
  const Y = (y: number) => Y0 - y * 85;
  const pts: string[] = [];
  for (let i = 0; i <= 4000; i++) {
    const x = -R + (2 * R * i) / 4000;
    if (Math.abs(x) < 1e-4) continue;
    pts.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`);
  }
  const xs = Array.from({ length: n }, (_, i) => 1 / ((i + 1) * Math.PI));
  const ys = Array.from({ length: n }, (_, i) => 1 / (2 * (i + 1) * Math.PI + Math.PI / 2));
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>f(x) = {FS[x].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph near 0 with two sequences of points" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <line x1={X(0)} y1={10} x2={X(0)} y2={H - 10} className="viz-axis" />
        <polyline points={pts.join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 0.8 }} />
        {xs.map((x, i) => <circle key={`a${i}`} cx={X(x)} cy={Y(f(x))} r={4.5} style={{ fill: "var(--accent)" }} />)}
        {ys.map((x, i) => <circle key={`b${i}`} cx={X(x)} cy={Y(f(x))} r={4.5} style={{ fill: "var(--danger)" }} />)}
      </svg>
      <div className="viz-sliders">
        <label><span>terms of each sequence: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>xₙ = 1/(nπ) → 0, and f(xₙ) at n = {n}</td><td className="mono">{fm(f(xs[n - 1]))}</td></tr>
          <tr><td>yₙ = 1/(2nπ + π/2) → 0, and f(yₙ) at n = {n}</td><td className="mono">{fm(f(ys[n - 1]))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "osc"
          ? "Along xₙ the values are all 0; along yₙ they are all 1. Two sequences tending to 0 give different limits, so sin(1/x) has no limit at 0."
          : "Now |f(x)| ≤ |x|, so along every sequence tending to 0 the values tend to 0. The limit at 0 exists and equals 0."}
      </figcaption>
    </figure>
  );
}
