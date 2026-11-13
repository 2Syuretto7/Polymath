"use client";

import { useState } from "react";

const S = 41;
const ts = Array.from({ length: S }, (_, i) => i / (S - 1));
const p0 = (s: number): [number, number] => [2 * s - 1, 0.8 * Math.sin(Math.PI * s)];
const p1 = (s: number): [number, number] => [2 * s - 1, -0.6 * Math.sin(Math.PI * s) + 0.25 * Math.sin(3 * Math.PI * s)];
const H = (s: number, t: number): [number, number] => { const a = p0(s), b = p1(s); return [(1 - t) * a[0] + t * b[0], (1 - t) * a[1] + t * b[1]]; };

/** The straight-line homotopy between two paths with the same ends, and what goes wrong when the plane has a hole. */
export function HomotopyViz() {
  const [t, setT] = useState(0.3);
  const [hole, setHole] = useState(false);
  const W = 520, Hh = 260, U = 150, cx = W / 2, cy = 130;
  const X = (v: number) => cx + v * U, Y = (v: number) => cy - v * U;
  const d = (fn: (s: number) => [number, number]) => ts.map((s, i) => { const [x, y] = fn(s); return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`; }).join(" ");
  const tHit = 0.8 / 1.65; // the middle point of f is 0.8 above the origin, that of g is 0.85 below
  const crossed = hole && t >= tHit;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>time t in the homotopy: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="Space" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={!hole} className={!hole ? "seg is-on" : "seg"} onClick={() => setHole(false)}>the plane</button>
        <button type="button" aria-pressed={hole} className={hole ? "seg is-on" : "seg"} onClick={() => setHole(true)}>the plane without the origin</button>
      </div>
      <svg viewBox={`0 0 ${W} ${Hh}`} role="img" aria-label="Two paths with common ends and an intermediate path of the homotopy" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0.2, 0.4, 0.6, 0.8].map((u) => <path key={u} d={d((s) => H(s, u))} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1, strokeDasharray: "3 4" }} />)}
        <path d={d(p0)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={d(p1)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <path d={d((s) => H(s, t))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(-1)} cy={Y(0)} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={X(1)} cy={Y(0)} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(-1) - 8} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>P</text>
        <text x={X(1) + 8} y={Y(0) + 4} style={{ fill: "var(--text)", fontSize: 12 }}>Q</text>
        <text x={X(0)} y={Y(0.8) - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>f</text>
        <text x={X(0)} y={Y(-0.85) + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>g</text>
        {hole && <circle cx={X(0)} cy={Y(0)} r={6} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {!hole
          ? "every intermediate path stays in the plane, so f and g are homotopic with ends fixed"
          : crossed
            ? `at t = ${tHit.toFixed(2)} the path ran through the missing origin, so this is not a homotopy in the punctured plane`
            : "so far the paths avoid the origin, but the middle point must cross the line between them"}
      </p>
      <figcaption className="viz-caption">
        The homotopy slides each point of f in a straight line to the matching point of g: H(s, t) = (1 − t) f(s) + t g(s). In
        the plane this always works. With the origin removed it breaks, and no other homotopy can do better, since f passes
        above the hole and g below it. Making that precise is the job of the fundamental group.
      </figcaption>
    </figure>
  );
}
