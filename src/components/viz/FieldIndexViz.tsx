"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const conj = (a: C): C => [a[0], -a[1]];

const FIELDS: { label: string; f: (z: C) => C; zeros: C[] }[] = [
  { label: "source", f: (z) => z, zeros: [[0, 0]] },
  { label: "centre", f: (z) => [-z[1], z[0]], zeros: [[0, 0]] },
  { label: "saddle", f: (z) => conj(z), zeros: [[0, 0]] },
  { label: "dipole", f: (z) => mul(z, z), zeros: [[0, 0]] },
  { label: "source and saddle", f: (z) => mul([z[0] - 1, z[1]], conj([z[0] + 1, z[1]])), zeros: [[1, 0], [-1, 0]] },
];

/** The index of a zero of a vector field: how many times the field turns as you walk once round it. */
export function FieldIndexViz() {
  const [fi, setFi] = useState(0);
  const [lx, setLx] = useState(0);
  const [ly, setLy] = useState(0);
  const [lr, setLr] = useState(0.8);
  const F = FIELDS[fi];
  const cx = 150, cy = 130, sc = 48;
  const X = (x: number) => cx + sc * x, Y = (y: number) => cy - sc * y;
  const arrows: { x: number; y: number; ux: number; uy: number }[] = [];
  for (let i = -5; i <= 5; i++) for (let j = -5; j <= 5; j++) {
    const x = i * 0.5, y = j * 0.5;
    const [u, v] = F.f([x, y]);
    const n = Math.hypot(u, v);
    if (n > 1e-9) arrows.push({ x, y, ux: u / n, uy: v / n });
  }
  const M = 400;
  let wind = 0, prev = 0, ok = true;
  for (let k = 0; k <= M; k++) {
    const t = (k / M) * 2 * Math.PI;
    const [u, v] = F.f([lx + lr * Math.cos(t), ly + lr * Math.sin(t)]);
    if (Math.hypot(u, v) < 1e-6) ok = false;
    const ang = Math.atan2(v, u);
    if (k > 0) {
      let d = ang - prev;
      while (d > Math.PI) d -= 2 * Math.PI;
      while (d < -Math.PI) d += 2 * Math.PI;
      wind += d;
    }
    prev = ang;
  }
  const index = Math.round(wind / (2 * Math.PI));
  const inside = F.zeros.filter((z) => Math.hypot(z[0] - lx, z[1] - ly) < lr);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Vector field">
        {FIELDS.map((g, i) => <button key={g.label} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{g.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>loop centre, across: <span className="mono">{lx.toFixed(1)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={lx} onChange={(e) => setLx(Number(e.target.value))} /></label>
        <label><span>loop centre, up: <span className="mono">{ly.toFixed(1)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={ly} onChange={(e) => setLy(Number(e.target.value))} /></label>
        <label><span>loop radius: <span className="mono">{lr.toFixed(1)}</span></span>
          <input type="range" min={0.3} max={2.4} step={0.1} value={lr} onChange={(e) => setLr(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="A vector field in the plane with a loop" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(-2.6)} y={Y(2.6)} width={sc * 5.2} height={sc * 5.2} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
        {arrows.map((a, i) => (
          <g key={i}>
            <line x1={X(a.x - 0.17 * a.ux)} y1={Y(a.y - 0.17 * a.uy)} x2={X(a.x + 0.17 * a.ux)} y2={Y(a.y + 0.17 * a.uy)} style={{ stroke: "var(--text-muted)", strokeWidth: 1.3 }} />
            <circle cx={X(a.x + 0.17 * a.ux)} cy={Y(a.y + 0.17 * a.uy)} r={1.8} style={{ fill: "var(--text-muted)" }} />
          </g>
        ))}
        <circle cx={X(lx)} cy={Y(ly)} r={sc * lr} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5, opacity: 0.8 }} />
        {F.zeros.map((z, i) => <circle key={i} cx={X(z[0])} cy={Y(z[1])} r={5} style={{ fill: "var(--text)" }} />)}
        <text x={320} y={60} style={{ fill: "var(--text)", fontSize: 13 }}>zeros inside the loop: {inside.length}</text>
        <text x={320} y={92} style={{ fill: "var(--text)", fontSize: 13 }}>turning of the field round</text>
        <text x={320} y={110} style={{ fill: "var(--text)", fontSize: 13 }}>the loop: {ok ? `${Math.abs(wind) < 0.01 ? 0 : ((wind * 180) / Math.PI).toFixed(0)}°` : "undefined"}</text>
        <text x={320} y={146} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>index: {ok ? index : "the loop hits a zero"}</text>
      </svg>
      <figcaption className="viz-caption">
        Walk once anticlockwise round the loop and count how many full turns the arrows make: that whole number is the index
        of the loop, and it is the sum of the indices of the zeros inside. A source or a centre has index 1, a saddle −1. The
        Poincaré–Hopf theorem says the indices of a vector field on a closed surface add up to its Euler characteristic χ.
      </figcaption>
    </figure>
  );
}
