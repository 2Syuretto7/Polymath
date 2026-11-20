"use client";

import { useState } from "react";

/** Čech cohomology of the constant sheaf on a circle or an interval, from a cover by n arcs. */
export function cech(n: number, closed: boolean) {
  const c0 = n;
  const c1 = closed ? n : n - 1;
  const rank = n - 1;
  return { c0, c1, h0: c0 - rank, h1: c1 - rank };
}

export function CechCircleViz() {
  const [n, setN] = useState(4);
  const [closed, setClosed] = useState(true);
  const r = cech(n, closed);
  const cx = 150;
  const cy = 120;
  const R = 80;
  const ang = (i: number) => (2 * Math.PI * i) / n - Math.PI / 2;
  const half = Math.PI / n + 0.25;
  const arc = (i: number, rr: number) => {
    if (!closed) {
      const x0 = 30 + (i * 240) / n;
      const w = 240 / n + 24;
      return `M ${x0} ${cy - 20 + (i % 2) * 14} h ${w}`;
    }
    const a0 = ang(i) - half;
    const a1 = ang(i) + half;
    return `M ${cx + rr * Math.cos(a0)} ${cy + rr * Math.sin(a0)} A ${rr} ${rr} 0 0 1 ${cx + rr * Math.cos(a1)} ${cy + rr * Math.sin(a1)}`;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        <button type="button" aria-pressed={closed} className={closed ? "seg is-on" : "seg"} onClick={() => setClosed(true)}>circle</button>
        <button type="button" aria-pressed={!closed} className={!closed ? "seg is-on" : "seg"} onClick={() => setClosed(false)}>interval</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>arcs n = {n} <input type="range" min={3} max={8} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="A cover of the space by overlapping arcs, and the dimensions of the Čech complex" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {closed && <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border-strong)" }} />}
        {!closed && <line x1={30} y1={cy} x2={294} y2={cy} style={{ stroke: "var(--border-strong)" }} />}
        {Array.from({ length: n }, (_, i) => (
          <path key={i} d={arc(i, R + 10 + (i % 2) * 8)} style={{ fill: "none", stroke: i % 2 ? "var(--accent)" : "var(--success)", strokeWidth: 5, strokeLinecap: "round", opacity: 0.8 }} />
        ))}
        <text x={330} y={50} style={{ fill: "var(--text)", fontSize: 12 }}>C⁰: {r.c0} values, one constant on each arc</text>
        <text x={330} y={76} style={{ fill: "var(--text)", fontSize: 12 }}>C¹: {r.c1} values, one per overlap</text>
        <text x={330} y={102} style={{ fill: "var(--text-muted)", fontSize: 12 }}>δ(f)ᵢⱼ = fⱼ − fᵢ, of rank {n - 1}</text>
        <text x={330} y={140} style={{ fill: "var(--success)", fontSize: 14, fontWeight: 700 }}>dim H⁰ = {r.h0}</text>
        <text x={330} y={166} style={{ fill: r.h1 ? "var(--danger)" : "var(--success)", fontSize: 14, fontWeight: 700 }}>dim H¹ = {r.h1}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {closed ? "Circle" : "Interval"}, {n} arcs: H⁰ has dimension {r.h0} and H¹ has dimension {r.h1}, whatever n is.
      </p>
      <figcaption className="viz-caption">
        A Čech cochain assigns a value to each open set of the cover and to each overlap. On the circle the overlaps close up
        into a loop, so one condition on the differences cannot be met: H¹ is one-dimensional. On the interval every choice
        of differences comes from a choice of values, and H¹ vanishes. Refining the cover does not change the answer.
      </figcaption>
    </figure>
  );
}
