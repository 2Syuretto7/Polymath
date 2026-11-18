"use client";

import { useState } from "react";

type F = (x: number, y: number) => [number, number];
const FORMS: { name: string; w: F; d: string; dval: (x: number, y: number) => number }[] = [
  { name: "−y dx + x dy", w: (x, y) => [-y, x], d: "2 dx ∧ dy", dval: () => 2 },
  { name: "x dy", w: (x) => [0, x], d: "dx ∧ dy", dval: () => 1 },
  { name: "x² y dx", w: (x, y) => [x * x * y, 0], d: "−x² dx ∧ dy", dval: (x) => -x * x },
  { name: "d(x² + y²)", w: (x, y) => [2 * x, 2 * y], d: "0", dval: () => 0 },
];
const f = (n: number, d = 3) => (Math.abs(n) < 5e-4 ? (0).toFixed(d) : n < 0 ? `−${(-n).toFixed(d)}` : n.toFixed(d));

/** The exterior derivative of a 1-form in the plane, as circulation round a small square divided by its area. */
export function ExtDerivViz() {
  const [k, setK] = useState(0);
  const [cx, setCx] = useState(1);
  const [h, setH] = useState(0.8);
  const cy = 0.5;
  const W = FORMS[k];
  const corners: [number, number][] = [[cx - h / 2, cy - h / 2], [cx + h / 2, cy - h / 2], [cx + h / 2, cy + h / 2], [cx - h / 2, cy + h / 2]];
  let circ = 0;
  const n = 200;
  for (let e = 0; e < 4; e++) {
    const [x1, y1] = corners[e], [x2, y2] = corners[(e + 1) % 4];
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      const [P, Q] = W.w(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
      circ += P * (x2 - x1) / n + Q * (y2 - y1) / n;
    }
  }
  const ratio = circ / (h * h);
  const S = 70, OX = 40, OY = 190;
  const X = (x: number) => OX + S * x, Y = (y: number) => OY - S * y;
  const arrows = [];
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 2; j++) {
    const x = i * 0.6, y = j * 0.8;
    const [P, Q] = W.w(x, y);
    const L = Math.hypot(P, Q);
    if (L < 1e-9) continue;
    const s = 0.25 / Math.max(1, L);
    arrows.push(<line key={`${i},${j}`} x1={X(x)} y1={Y(y)} x2={X(x + P * s)} y2={Y(y + Q * s)} markerEnd="url(#ed-h)" style={{ stroke: "var(--text-faint)", strokeWidth: 1.1 }} />);
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="form">
        {FORMS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>centre x = {cx.toFixed(1)} <input type="range" min={5} max={20} value={cx * 10} onChange={(e) => setCx(Number(e.target.value) / 10)} aria-label="centre" /></label>
        <label>side h = {h.toFixed(2)} <input type="range" min={2} max={80} value={Math.round(h * 100)} onChange={(e) => setH(Number(e.target.value) / 100)} aria-label="side" /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A 1-form and a small square" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="ed-h" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--text-faint)" }} /></marker>
        </defs>
        <line x1={X(0)} y1={Y(0)} x2={X(2.6)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(2.5)} style={{ stroke: "var(--border)" }} />
        {arrows}
        <polygon points={corners.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={270} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>ω = {W.name}</text>
        <text x={270} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>dω = {W.d}</text>
        <text x={270} y={90} style={{ fill: "var(--text-muted)", fontSize: 11 }}>∮ ω round the square (anticlockwise) = {f(circ)}</text>
        <text x={270} y={112} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>∮ ω / area = {f(ratio)}</text>
        <text x={270} y={134} style={{ fill: "var(--text-muted)", fontSize: 11 }}>coefficient of dω at the centre = {f(W.dval(cx, cy))}</text>
      </svg>
      <figcaption className="viz-caption">
        The circulation of ω round a small square, divided by its area, tends to the coefficient of dω at the centre as the
        square shrinks. For an exact form df the circulation is always zero, matching d(df) = 0.
      </figcaption>
    </figure>
  );
}
