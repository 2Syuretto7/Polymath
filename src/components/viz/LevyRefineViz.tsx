"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

/** Lévy's construction: refine a Brownian path on [0, 1] by random midpoint displacements. */
export function LevyRefineViz() {
  const [lvl, setLvl] = useState(3);
  const [seed, setSeed] = useState(4);
  const r = seededRng(seed * 977 + 13);
  let pts = [0, normalDraw(r)];
  const levels: number[][] = [pts];
  for (let k = 1; k <= 10; k++) {
    const next: number[] = [];
    const sd = Math.sqrt(1 / 2 ** (k + 1));
    for (let i = 0; i < pts.length - 1; i++) {
      next.push(pts[i]);
      next.push((pts[i] + pts[i + 1]) / 2 + sd * normalDraw(r));
    }
    next.push(pts[pts.length - 1]);
    pts = next;
    levels.push(pts);
  }
  const cur = levels[lvl], prev = lvl > 0 ? levels[lvl - 1] : null;
  const fine = levels[10];
  const lo = Math.min(...fine) - 0.2, hi = Math.max(...fine) + 0.2;
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const x = (s: number) => X0 + s * W;
  const y = (v: number) => Y0 + ((hi - v) / (hi - lo)) * H;
  const line = (a: number[]) => a.map((v, i) => `${x(i / (a.length - 1))},${y(v)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>level {lvl}: {2 ** lvl} pieces <input type="range" min={0} max={10} value={lvl} onChange={(e) => setLvl(Number(e.target.value))} aria-label="level" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A piecewise linear approximation to a Brownian path" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <text x={X0 - 6} y={y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        {prev && <polyline points={line(prev)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.2, strokeDasharray: "4 3" }} />}
        <polyline points={line(cur)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: lvl > 6 ? 1.2 : 2 }} />
        {lvl <= 5 && cur.map((v, i) => <circle key={i} cx={x(i / (cur.length - 1))} cy={y(v)} r={2.5} style={{ fill: "var(--accent)" }} />)}
        <text x={X0} y={Y0 + H + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>t = 0</text>
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>t = 1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        B(1) = {cur[cur.length - 1].toFixed(3)}. New midpoints at this level have standard deviation {lvl === 0 ? "1 (the endpoint)" : Math.sqrt(1 / 2 ** (lvl + 1)).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Start with B(0) = 0 and a normal B(1). At each level, put the midpoint of every piece at the average of its ends
        plus an independent normal with variance 2⁻⁽ᵏ⁺¹⁾. Earlier values never change (dashed: the previous level). The
        corrections shrink fast enough that the polygons converge uniformly to a continuous path.
      </figcaption>
    </figure>
  );
}
