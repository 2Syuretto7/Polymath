"use client";

import { useState } from "react";

export const FUNCS = [
  { label: "x", div: [[0, 1], ["∞", -1]] as [number | string, number][] },
  { label: "x²/(x − 1)", div: [[0, 2], [1, -1], ["∞", -1]] as [number | string, number][] },
  { label: "(x − 1)/(x + 1)", div: [[1, 1], [-1, -1]] as [number | string, number][] },
  { label: "1/(x(x − 2))", div: [[0, -1], [2, -1], ["∞", 2]] as [number | string, number][] },
  { label: "x³ − x", div: [[-1, 1], [0, 1], [1, 1], ["∞", -3]] as [number | string, number][] },
];

/** The divisor of a rational function on the projective line: zeros minus poles, including the point at infinity. */
export function DivisorP1Viz() {
  const [k, setK] = useState(1);
  const F = FUNCS[k];
  const X = (p: number | string) => (p === "∞" ? 480 : 260 + (p as number) * 70);
  const deg = F.div.reduce((s, [, n]) => s + n, 0);
  const show = (n: number, p: number | string) => `${n === 1 ? "" : n === -1 ? "−" : n < 0 ? `−${-n}` : n}[${p}]`;
  const text = F.div.map(([p, n], i) => (i === 0 ? show(n, p) : n > 0 ? ` + ${show(n, p)}` : ` ${show(n, p).replace("−", "− ")}`)).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="rational function">
        {FUNCS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>f = {f.label}</button>)}
      </div>
      <svg viewBox="0 0 540 185" role="img" aria-label="Zeros and poles of the chosen function on the projective line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={60} y1={85} x2={440} y2={85} style={{ stroke: "var(--border-strong)" }} />
        <line x1={440} y1={85} x2={465} y2={85} style={{ stroke: "var(--border-strong)", strokeDasharray: "3 3" }} />
        {[-2, -1, 0, 1, 2].map((t) => <text key={t} x={X(t)} y={178} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        <text x={480} y={178} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>∞</text>
        {F.div.map(([p, n]) => {
          const up = n > 0;
          const h = Math.abs(n) * 18;
          return (
            <g key={String(p)}>
              <rect x={X(p) - 10} y={up ? 85 - h : 85} width={20} height={h} rx={3} style={{ fill: up ? "var(--success)" : "var(--danger)" }} />
              <text x={X(p)} y={up ? 78 - h : 99 + h} textAnchor="middle" style={{ fill: up ? "var(--success)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>{n > 0 ? `+${n}` : `−${-n}`}</text>
            </g>
          );
        })}
        <text x={20} y={24} style={{ fill: "var(--text-muted)", fontSize: 11 }}>green: zeros, with order; red: poles, with order</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>div(f) = {text}, of degree {deg}.</p>
      <figcaption className="viz-caption">
        Near ∞ use the coordinate 1/x: a function that grows like xⁿ there has a pole of order n. Counting the point at
        infinity, every rational function on the projective line has as many zeros as poles, so principal divisors have
        degree 0, and divisor classes on ℙ¹ are classified by their degree.
      </figcaption>
    </figure>
  );
}
