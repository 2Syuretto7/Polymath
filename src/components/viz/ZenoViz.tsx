"use client";

import { useState } from "react";
import { fmtNum } from "./format";

/** Achilles and the tortoise: infinitely many catching-up stages that take a finite total time. */
export function ZenoViz() {
  const [n, setN] = useState(3);
  // Achilles runs 10 m/s, the tortoise 1 m/s, with a 90 m head start.
  const stages = Array.from({ length: n }, (_, i) => ({ dist: 90 / 10 ** i, time: 9 / 10 ** i }));
  const tSum = stages.reduce((s, x) => s + x.time, 0);
  const aPos = 10 * tSum, tPos = 90 + tSum;
  const X = (m: number) => 20 + (m / 110) * 480;
  const f = (x: number) => fmtNum(Number(x.toPrecision(8)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 110" style={{ width: "100%", display: "block" }} role="img"
        aria-label={`After ${n} stages Achilles is at ${f(aPos)} metres and the tortoise at ${f(tPos)} metres`}>
        <line x1={X(0)} x2={X(110)} y1={70} y2={70} className="viz-axis" />
        {[0, 20, 40, 60, 80, 100].map((m) => (
          <g key={m}><line x1={X(m)} x2={X(m)} y1={66} y2={74} className="viz-axis" /><text x={X(m)} y={90} textAnchor="middle" className="plot-tick">{m}</text></g>
        ))}
        <line x1={X(100)} x2={X(100)} y1={20} y2={70} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <circle cx={X(aPos)} cy={50} r={7} style={{ fill: "var(--accent)" }} />
        <text x={X(aPos)} y={34} textAnchor="middle" className="viz-label is-on">A</text>
        <rect x={X(tPos) - 6} y={56} width={12} height={8} rx={3} style={{ fill: "var(--text)" }} />
        <text x={X(tPos)} y={50} textAnchor="middle" className="viz-label">T</text>
      </svg>
      <div className="viz-sliders">
        <label><span>stages completed: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>time used so far: 9 + 0.9 + 0.09 + …</td><td className="mono">{f(tSum)} s</td></tr>
          <tr><td>gap still to close</td><td className="mono">{f(tPos - aPos)} m</td></tr>
          <tr><td>the limit of the times</td><td className="mono">10 s, where both are at 100 m</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each stage ends with the tortoise a little ahead, and there is no last stage. But the stages shrink geometrically, and their times add up to 10 seconds. Achilles passes the tortoise at the 100 metre mark.
      </figcaption>
    </figure>
  );
}
