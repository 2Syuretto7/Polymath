"use client";

import { useState } from "react";

/** Stalnaker–Lewis semantics: A > C is true when the A-worlds closest to the actual world are all C-worlds. */
export function SphereConditionalViz() {
  const [ax, setAx] = useState(30);
  const [cx0, setCx0] = useState(40);
  const [cr, setCr] = useState(18);
  const pts: [number, number][] = [];
  for (let i = -7; i <= 7; i++) for (let j = -4; j <= 4; j++) pts.push([i * 10, j * 10]);
  const inA = ([x, y]: [number, number]) => Math.hypot(x - ax, y - 10) <= 20;
  const inC = ([x, y]: [number, number]) => Math.hypot(x - cx0, y + 5) <= cr;
  const A = pts.filter(inA);
  const dmin = A.length ? Math.min(...A.map(([x, y]) => Math.hypot(x, y))) : Infinity;
  const closest = A.filter(([x, y]) => Math.abs(Math.hypot(x, y) - dmin) < 1e-6);
  const verdict = A.length === 0 ? "vacuously true: there are no A-worlds" : closest.every(inC) ? "true" : "false";
  const S = 3, ox = 260, oy = 100;
  const X = (x: number) => ox + S * x, Y = (y: number) => oy - S * y;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>A region centre = {ax} <input type="range" min={-50} max={60} value={ax} onChange={(e) => setAx(Number(e.target.value))} aria-label="A centre" /></label>
        <label>C region centre = {cx0} <input type="range" min={-50} max={60} value={cx0} onChange={(e) => setCx0(Number(e.target.value))} aria-label="C centre" /></label>
        <label>C radius = {cr} <input type="range" min={5} max={40} value={cr} onChange={(e) => setCr(Number(e.target.value))} aria-label="C radius" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Worlds arranged by similarity to the actual world" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[15, 30, 45, 60].map((r) => <circle key={r} cx={X(0)} cy={Y(0)} r={S * r} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "3 3" }} />)}
        <circle cx={X(ax)} cy={Y(10)} r={S * 20} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", opacity: 0.8 }} />
        <circle cx={X(cx0)} cy={Y(-5)} r={S * cr} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2 }} />
        {pts.map(([x, y], i) => {
          const isClosest = closest.some(([a, b]) => a === x && b === y);
          return <circle key={i} cx={X(x)} cy={Y(y)} r={isClosest ? 5 : 2} style={{ fill: isClosest ? (inC([x, y]) ? "var(--success)" : "var(--danger)") : "var(--text-faint)" }} />;
        })}
        <circle cx={X(0)} cy={Y(0)} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(0) + 7} y={Y(0) - 7} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>@</text>
        <text x={X(ax) + S * 20 + 6} y={Y(10) + 4} textAnchor="start" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>A</text>
        <text x={X(cx0)} y={Y(-5) + S * cr + 14} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 12, fontWeight: 700 }}>C</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Closest A-worlds: {closest.length}, at distance {Number.isFinite(dmin) ? dmin.toFixed(1) : "—"}. A &gt; C is {verdict}.
      </p>
      <figcaption className="viz-caption">
        Dots are worlds; distance from @, the actual world, measures overall dissimilarity, and the dashed circles are
        Lewis&rsquo;s spheres of similarity. &lsquo;If A were the case, C would be&rsquo; is true when the closest A-worlds,
        drawn large, all lie in C. Moving A changes which worlds are closest, so C can be true at nearby A-worlds and false
        at distant ones.
      </figcaption>
    </figure>
  );
}
