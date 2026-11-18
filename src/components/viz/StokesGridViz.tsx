"use client";

import { useState } from "react";

type F = (x: number, y: number) => [number, number];
const FORMS: { name: string; w: F; d: (x: number, y: number) => number; dn: string }[] = [
  { name: "−y dx + x dy", w: (x, y) => [-y, x], d: () => 2, dn: "2 dx ∧ dy" },
  { name: "x dy", w: (x) => [0, x], d: () => 1, dn: "dx ∧ dy" },
  { name: "xy² dy", w: (x, y) => [0, x * y * y], d: (x, y) => y * y, dn: "y² dx ∧ dy" },
];
const f = (n: number) => (Math.abs(n) < 5e-4 ? "0.000" : n < 0 ? `−${(-n).toFixed(3)}` : n.toFixed(3));

function lineInt(w: F, x1: number, y1: number, x2: number, y2: number) {
  let s = 0;
  const m = 40;
  for (let i = 0; i < m; i++) {
    const t = (i + 0.5) / m;
    const [P, Q] = w(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    s += (P * (x2 - x1) + Q * (y2 - y1)) / m;
  }
  return s;
}

/** Stokes' theorem on the unit square: cell circulations add up, interior edges cancel, and the boundary integral equals ∫ dω. */
export function StokesGridViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const W = FORMS[k];
  const h = 1 / n;
  let cells = 0, area = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x = i * h, y = j * h;
    cells += lineInt(W.w, x, y, x + h, y) + lineInt(W.w, x + h, y, x + h, y + h) + lineInt(W.w, x + h, y + h, x, y + h) + lineInt(W.w, x, y + h, x, y);
    area += W.d(x + h / 2, y + h / 2) * h * h;
  }
  const bnd = lineInt(W.w, 0, 0, 1, 0) + lineInt(W.w, 1, 0, 1, 1) + lineInt(W.w, 1, 1, 0, 1) + lineInt(W.w, 0, 1, 0, 0);
  const S = 170, OX = 30, OY = 190;
  const X = (x: number) => OX + S * x, Y = (y: number) => OY - S * y;
  const lines = [];
  for (let i = 1; i < n; i++) {
    lines.push(<line key={`v${i}`} x1={X(i * h)} y1={Y(0)} x2={X(i * h)} y2={Y(1)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />);
    lines.push(<line key={`h${i}`} x1={X(0)} y1={Y(i * h)} x2={X(1)} y2={Y(i * h)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />);
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="form">
        {FORMS.map((q, i) => <button key={q.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{q.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>grid n × n, n = {n} <input type="range" min={1} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="grid" /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="The unit square cut into cells" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(0)} y={Y(1)} width={S} height={S} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 3 }} />
        {lines}
        <text x={230} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>ω = {W.name}, dω = {W.dn}</text>
        <text x={230} y={68} style={{ fill: "var(--text-muted)", fontSize: 11 }}>sum of the {n * n} cell circulations = {f(cells)}</text>
        <text x={230} y={88} style={{ fill: "var(--text-muted)", fontSize: 11 }}>(shared dashed edges cancel in pairs)</text>
        <text x={230} y={116} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>∮ ω over the boundary = {f(bnd)}</text>
        <text x={230} y={140} style={{ fill: "var(--text)", fontSize: 12 }}>Σ dω(cell centre) × cell area = {f(area)}</text>
      </svg>
      <figcaption className="viz-caption">
        Each cell&rsquo;s circulation is about dω times its area. Adding them, the shared edges cancel and only the outer
        boundary survives. In the limit of fine grids this is Stokes&rsquo; theorem: ∫ over M of dω equals ∫ over ∂M of ω.
      </figcaption>
    </figure>
  );
}
