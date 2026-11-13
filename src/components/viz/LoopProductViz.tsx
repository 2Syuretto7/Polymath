"use client";

import { useState } from "react";

/** Loops in the punctured plane based at a point: composing loops adds how many times they wind round the hole. */
function loopPoint(m: number, s: number, r0: number): [number, number] {
  if (m === 0) { const a = 2 * Math.PI * s; return [1 + 0.35 * (Math.cos(a) - 1), 0.35 * Math.sin(a)]; }
  const ang = 2 * Math.PI * m * s, r = 1 + r0 * Math.sin(Math.PI * s);
  return [r * Math.cos(ang), r * Math.sin(ang)];
}

export function LoopProductViz() {
  const [m, setM] = useState(1);
  const [n, setN] = useState(-2);
  const [t, setT] = useState(1);
  const W = 520, H = 280, U = 70, cx = W / 2, cy = 140;
  const X = (v: number) => cx + v * U, Y = (v: number) => cy - v * U;
  const comp = (s: number): [number, number] => (s <= 0.5 ? loopPoint(m, 2 * s, 0.35) : loopPoint(n, 2 * s - 1, 0.8));
  const N = 600;
  const pts = Array.from({ length: Math.round(N * t) + 1 }, (_, i) => comp(i / N));
  const first = pts.filter((_, i) => i / N <= 0.5), second = pts.filter((_, i) => i / N >= 0.5);
  const d = (ps: [number, number][]) => ps.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
  const cur = pts[pts.length - 1];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>times the first loop α winds round the hole: <span className="mono">{m}</span></span>
          <input type="range" min={-3} max={3} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
        <label><span>times the second loop β winds: <span className="mono">{n}</span></span>
          <input type="range" min={-3} max={3} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>trace α · β up to time: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The composite loop α followed by β round a hole at the origin" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={d(first)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <path d={d(second)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "6 3" }} />
        <circle cx={X(0)} cy={Y(0)} r={7} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <circle cx={X(1)} cy={Y(0)} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(1) + 8} y={Y(0) + 16} style={{ fill: "var(--text)", fontSize: 12 }}>base point</text>
        <circle cx={X(cur[0])} cy={Y(cur[1])} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        α winds {m}, β winds {n}, so α · β winds {m + n}{m + n === 0 ? ": it can be shrunk to the base point" : ""}
      </p>
      <figcaption className="viz-caption">
        The product α · β runs α at double speed during the first half of the time, shown solid, then β during the second,
        shown dashed. Up to homotopy, only the number of turns round the hole matters, and turns add. This makes the
        fundamental group of the punctured plane the integers under addition.
      </figcaption>
    </figure>
  );
}
