"use client";

import { useState } from "react";

const ALPHAS = [
  { label: "(√5 − 1)/2", v: (Math.sqrt(5) - 1) / 2 },
  { label: "√2 − 1", v: Math.SQRT2 - 1 },
  { label: "π − 3", v: Math.PI - 3 },
  { label: "2/5", v: 0.4 },
  { label: "3/8", v: 0.375 },
];
const COLS = ["var(--accent)", "var(--success)", "var(--danger)"];

/** The first N points of an orbit of the rotation x ↦ x + α mod 1, and the gaps between them. */
export function rotationGaps(alpha: number, N: number) {
  const pts: number[] = [];
  for (let k = 0; k < N; k++) { const p = (k * alpha) % 1; if (!pts.some((q) => Math.abs(q - p) < 1e-9 || Math.abs(Math.abs(q - p) - 1) < 1e-9)) pts.push(p); }
  const s = [...pts].sort((a, b) => a - b);
  const gaps = s.map((p, i) => (i + 1 < s.length ? s[i + 1] - p : 1 + s[0] - p));
  const lengths: number[] = [];
  gaps.forEach((g) => { if (!lengths.some((l) => Math.abs(l - g) < 1e-9)) lengths.push(g); });
  lengths.sort((a, b) => a - b);
  return { pts: s, gaps, lengths };
}

export function ThreeGapViz() {
  const [a, setA] = useState(0);
  const [N, setN] = useState(10);
  const al = ALPHAS[a].v;
  const { pts, gaps, lengths } = rotationGaps(al, N);
  const cx = 160, cy = 150, R = 110;
  const pos = (t: number, r = R) => [cx + r * Math.sin(2 * Math.PI * t), cy - r * Math.cos(2 * Math.PI * t)];
  const arc = (t0: number, g: number) => {
    const [x0, y0] = pos(t0), [x1, y1] = pos(t0 + g);
    return `M${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${g > 0.5 ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)}`;
  };
  const colourOf = (g: number) => COLS[Math.max(0, lengths.findIndex((l) => Math.abs(l - g) < 1e-9)) % 3];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="alpha">
        {ALPHAS.map((x, i) => <button key={x.label} type="button" aria-pressed={a === i} className={a === i ? "seg is-on" : "seg"} onClick={() => setA(i)}>α = {x.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>N = {N} <input type="range" min={2} max={40} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 300" role="img" aria-label="Orbit of a circle rotation and its gaps" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {pts.map((p, i) => <path key={i} d={arc(p, gaps[i])} style={{ fill: "none", stroke: colourOf(gaps[i]), strokeWidth: 6 }} />)}
        {pts.map((p, i) => { const [x, y] = pos(p); return <circle key={i} cx={x} cy={y} r={4} style={{ fill: "var(--text)" }} />; })}
        {(() => { const [x, y] = pos(0, R + 18); return <text x={x} y={y} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>; })()}
        {lengths.slice(0, 3).map((l, i) => (
          <g key={i}>
            <rect x={320} y={70 + i * 34} width={22} height={10} style={{ fill: COLS[i] }} />
            <text x={350} y={80 + i * 34} style={{ fill: "var(--text)", fontSize: 12 }}>gap {l.toFixed(4)} × {gaps.filter((g) => Math.abs(g - l) < 1e-9).length}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {pts.length} distinct points; {lengths.length} distinct gap length{lengths.length === 1 ? "" : "s"}{lengths.length === 3 ? `, and the largest is the sum of the other two (${(lengths[0] + lengths[1]).toFixed(4)})` : ""}.
      </p>
      <figcaption className="viz-caption">
        Mark 0, α, 2α, … around a circle of circumference 1. For rational α the orbit closes up after finitely many
        points. For irrational α the points never repeat and become dense, yet at every stage the gaps between them take
        at most three lengths: the three-gap theorem of Steinhaus, proved by Sós and others in the 1950s.
      </figcaption>
    </figure>
  );
}
