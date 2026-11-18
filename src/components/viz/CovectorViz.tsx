"use client";

import { useState } from "react";

const f = (n: number) => (n < 0 ? `−${-n}` : `${n}`);

/** A covector as a stack of parallel lines; its value on a vector counts the lines the arrow crosses. */
export function CovectorViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [v1, setV1] = useState(3);
  const [v2, setV2] = useState(-1);
  const S = 26, CX = 140, CY = 110;
  const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
  const val = a * v1 + b * v2;
  const lines = [];
  for (let c = -12; c <= 12; c++) {
    let x1: number, y1: number, x2: number, y2: number;
    if (b !== 0) { x1 = -4; y1 = (c - a * x1) / b; x2 = 4; y2 = (c - a * x2) / b; }
    else if (a !== 0) { x1 = x2 = c / a; y1 = -4; y2 = 4; }
    else continue;
    lines.push(<line key={c} x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} style={{ stroke: c === 0 ? "var(--text-muted)" : "var(--border-strong)", strokeWidth: c === 0 ? 1.5 : 1 }} />);
  }
  const sl = (label: string, v: number, set: (n: number) => void, aria: string) => (
    <label>{label} = {f(v)} <input type="range" min={-3} max={3} value={v} onChange={(e) => set(Number(e.target.value))} aria-label={aria} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        {sl("α₁", a, setA, "a1")}
        {sl("α₂", b, setB, "a2")}
        {sl("v¹", v1, setV1, "v1")}
        {sl("v²", v2, setV2, "v2")}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A covector drawn as level lines, and a vector" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <clipPath id="cov-clip"><rect x={X(-4)} y={Y(4)} width={8 * S} height={8 * S} /></clipPath>
          <marker id="cov-h" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={10} markerHeight={10} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        <rect x={X(-4)} y={Y(4)} width={8 * S} height={8 * S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <g clipPath="url(#cov-clip)">{lines}</g>
        {(v1 !== 0 || v2 !== 0) && <line x1={X(0)} y1={Y(0)} x2={X(v1)} y2={Y(v2)} markerEnd="url(#cov-h)" style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
        <text x={380} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>α = {f(a)} dx {b < 0 ? "−" : "+"} {Math.abs(b)} dy</text>
        <text x={380} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>v = ({f(v1)}, {f(v2)})</text>
        <text x={380} y={90} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>α(v) = α₁v¹ + α₂v²</text>
        <text x={380} y={118} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 15, fontWeight: 700 }}>α(v) = {f(val)}</text>
        <text x={380} y={140} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>lines crossed, with sign</text>
      </svg>
      <figcaption className="viz-caption">
        A covector is not an arrow but a stack of level lines α = 0, ±1, ±2, …. Its value on a vector counts how many lines
        the arrow crosses, positive when it crosses in the increasing direction. Bigger α means more tightly packed lines.
      </figcaption>
    </figure>
  );
}
