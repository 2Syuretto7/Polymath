"use client";

import { useState } from "react";

const ALPHAS = [
  { name: "α = 1/2", a: 0.5 },
  { name: "α = 2/5", a: 0.4 },
  { name: "α = √2 − 1", a: Math.SQRT2 - 1 },
  { name: "α = golden ratio − 1", a: (Math.sqrt(5) - 1) / 2 },
];

/** Rotation of the circle by α: time averages of the arc [0, 1/4) along an orbit, against its length. */
export function RotationErgodicViz() {
  const [k, setK] = useState(2);
  const [n, setN] = useState(40);
  const [x10, setX10] = useState(10);
  const a = ALPHAS[k].a, x0 = x10 / 100;
  const pts = Array.from({ length: n }, (_, i) => (x0 + i * a) % 1);
  const avg = pts.filter((t) => t < 0.25).length / n;
  const cx = 120, cy = 110, R = 80;
  const P = (t: number): [number, number] => [cx + R * Math.cos(2 * Math.PI * t), cy - R * Math.sin(2 * Math.PI * t)];
  const arcEnd = P(0.25);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="rotation" style={{ flexWrap: "wrap" }}>
        {ALPHAS.map((s, i) => <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>steps n = {n} <input type="range" min={1} max={400} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="steps" /></label>
        <label>start x₀ = {x0.toFixed(2)} <input type="range" min={0} max={99} value={x10} onChange={(e) => setX10(Number(e.target.value))} aria-label="start" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="An orbit of the rotation on the circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <path d={`M ${cx + R} ${cy} A ${R} ${R} 0 0 0 ${arcEnd[0]} ${arcEnd[1]}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 6, opacity: 0.5 }} />
        {pts.map((t, i) => { const [px, py] = P(t); return <circle key={i} cx={px} cy={py} r={3} style={{ fill: t < 0.25 ? "var(--accent)" : "var(--text-muted)" }} />; })}
        <text x={260} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>time average of [0, 1/4): {avg.toFixed(3)}</text>
        <text x={260} y={84} style={{ fill: "var(--text)", fontSize: 12 }}>space average (its length): 0.250</text>
        <text x={260} y={116} style={{ fill: avg > 0.2 && avg < 0.3 ? "var(--accent)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{a === 0.5 || a === 0.4 ? "rational α: the orbit is periodic" : "irrational α: the orbit is dense"}</text>
      </svg>
      <figcaption className="viz-caption">
        The rotation x ↦ x + α mod 1 preserves length. When α is irrational it is ergodic, and the time average along
        almost every orbit tends to the space average. When α is rational, every orbit is a finite cycle, and the time
        average depends on where you start.
      </figcaption>
    </figure>
  );
}
