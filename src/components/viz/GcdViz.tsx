"use client";

import { useState } from "react";

type Row = { a: number; b: number; q: number; r: number };
function euclid(a: number, b: number): Row[] {
  const rows: Row[] = [];
  while (b > 0) { rows.push({ a, b, q: Math.floor(a / b), r: a % b }); [a, b] = [b, a % b]; }
  return rows;
}
/** Extended Euclid: x, y with ax + by = gcd. */
function bezout(a: number, b: number): [number, number] {
  if (b === 0) return [1, 0];
  const [x, y] = bezout(b, a % b);
  return [y, x - Math.floor(a / b) * y];
}

const W = 600, H = 320;

/** Euclid's algorithm as cutting the largest possible squares off a rectangle, step by step. */
export function GcdViz() {
  const [a, setA] = useState(21);
  const [b, setB] = useState(15);
  const [shown, setShown] = useState(1);
  const A = Math.max(a, b), B = Math.min(a, b);
  const rows = euclid(A, B);
  const g = rows[rows.length - 1].b;
  const [x, y] = bezout(A, B);
  const s = Math.min((W - 20) / A, (H - 20) / B);

  // squares: walk the rectangle, cutting q squares of side b each step
  const squares: { x: number; y: number; side: number; step: number }[] = [];
  let ox = 0, oy = 0, horizontal = true;
  rows.forEach((row, k) => {
    for (let i = 0; i < row.q; i++) {
      squares.push({ x: ox, y: oy, side: row.b, step: k });
      if (horizontal) ox += row.b; else oy += row.b;
    }
    horizontal = !horizontal;
  });
  const set = (f: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => { f(Number(e.target.value)); setShown(1); };

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Euclid's algorithm on ${A} and ${B}`} style={{ width: "100%" }}>
        <rect x={10} y={10} width={A * s} height={B * s} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        {squares.filter((q) => q.step < shown).map((q, i) => (
          <g key={i}>
            <rect x={10 + q.x * s} y={10 + q.y * s} width={q.side * s} height={q.side * s}
              style={{ fill: q.step === shown - 1 ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: q.step === shown - 1 ? "var(--accent)" : "var(--border-strong)", strokeWidth: 1.5 }} />
            {q.side * s > 22 && <text x={10 + (q.x + q.side / 2) * s} y={10 + (q.y + q.side / 2) * s + 4} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{q.side}</text>}
          </g>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>a = <span className="mono">{a}</span></span>
          <input type="range" min={1} max={60} value={a} onChange={set(setA)} /></label>
        <label><span>b = <span className="mono">{b}</span></span>
          <input type="range" min={1} max={60} value={b} onChange={set(setB)} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 12 }}>
        <button type="button" className="btn btn-primary" disabled={shown >= rows.length} onClick={() => setShown(shown + 1)}>Next step</button>
        <button type="button" className="btn" onClick={() => setShown(1)}>Start again</button>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          {rows.slice(0, shown).map((r) => (
            <tr key={`${r.a}-${r.b}`}><td className="mono">{r.a} = {r.q} × {r.b} + {r.r}</td><td>{r.r === 0 ? `remainder 0, so gcd = ${r.b}` : `gcd(${r.a}, ${r.b}) = gcd(${r.b}, ${r.r})`}</td></tr>
          ))}
          {shown >= rows.length && <tr><td>Bézout</td><td className="mono">{g} = {A} × ({x}) + {B} × ({y})</td></tr>}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each step cuts the largest squares it can from the rectangle, leaving a smaller rectangle whose sides are the
        divisor and the remainder. {shown >= rows.length
          ? `The last squares fit exactly: squares of side ${g} tile the whole ${A} by ${B} rectangle, and no larger square does. ${g === 1 ? `So ${A} and ${B} are coprime.` : ""}`
          : "Any square that tiles the whole rectangle also tiles what is left, so the gcd never changes."}
      </figcaption>
    </figure>
  );
}
