"use client";

import { useState } from "react";

/** h⁰ and h¹ of the line bundle O(d) on the projective line. */
export function h(d: number) {
  return { h0: Math.max(d + 1, 0), h1: Math.max(-d - 1, 0) };
}

/** Cohomology of O(d) on ℙ¹: sections are homogeneous polynomials of degree d, and Serre duality supplies h¹. */
export function LineBundleCohomologyViz() {
  const [d, setD] = useState(2);
  const X = (t: number) => 270 + t * 34;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>d = {d} <input type="range" min={-6} max={6} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox="0 0 540 210" role="img" aria-label="Bars showing h0 above and h1 below for each degree d" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={110} x2={510} y2={110} style={{ stroke: "var(--border-strong)" }} />
        <text x={14} y={40} style={{ fill: "var(--success)", fontSize: 11 }}>h⁰</text>
        <text x={14} y={190} style={{ fill: "var(--danger)", fontSize: 11 }}>h¹</text>
        {Array.from({ length: 13 }, (_, i) => i - 6).map((t) => {
          const v = h(t);
          const on = t === d;
          return (
            <g key={t} onClick={() => setD(t)} style={{ cursor: "pointer" }}>
              {v.h0 > 0 && <rect x={X(t) - 11} y={110 - v.h0 * 12} width={22} height={v.h0 * 12} rx={2} style={{ fill: "var(--success)", opacity: on ? 1 : 0.35 }} />}
              {v.h1 > 0 && <rect x={X(t) - 11} y={110} width={22} height={v.h1 * 12} rx={2} style={{ fill: "var(--danger)", opacity: on ? 1 : 0.35 }} />}
              <text x={X(t)} y={on ? 205 : 205} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 11, fontWeight: on ? 700 : 400 }}>{t}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        O({d}) on ℙ¹: h⁰ = {h(d).h0}, h¹ = {h(d).h1}, and h⁰ − h¹ = {h(d).h0 - h(d).h1} = d + 1.
      </p>
      <figcaption className="viz-caption">
        Global sections of O(d) are the homogeneous polynomials of degree d in two variables, so h⁰ = d + 1 for d ≥ 0. The
        first cohomology vanishes for d ≥ −1 and, by Serre duality with O(−2), equals h⁰ of O(−d − 2) otherwise. The
        alternating sum is always d + 1, the simplest case of Riemann-Roch.
      </figcaption>
    </figure>
  );
}
