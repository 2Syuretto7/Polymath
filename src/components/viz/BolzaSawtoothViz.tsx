"use client";

import { useState } from "react";

/** Sawtooth functions with slopes ±1 and n teeth on [0, 1], and two energies evaluated on them. */
export function BolzaSawtoothViz() {
  const [n, setN] = useState(3);
  const [conv, setConv] = useState(false);
  const h = 1 / (2 * n);
  const saw = (x: number) => {
    const y = (x * n) % 1;
    return y < 0.5 ? y / n : (1 - y) / n;
  };
  const xs = Array.from({ length: 401 }, (_, i) => i / 400);
  const L2 = (h * h) / 3; // ∫ u² for the sawtooth
  const In = conv ? 1 + L2 : L2;
  const I0 = conv ? 0 : 1;
  const X = (x: number) => 30 + x * 480;
  const Y = (y: number) => 112 - y * 200;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="energy">
        <button type="button" aria-pressed={!conv} className={!conv ? "seg is-on" : "seg"} onClick={() => setConv(false)}>I = ∫ (u′² − 1)² + u²</button>
        <button type="button" aria-pressed={conv} className={conv ? "seg is-on" : "seg"} onClick={() => setConv(true)}>I = ∫ u′² + u²</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>teeth n = {n} <input type="range" min={1} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="teeth" /></label>
      </div>
      <svg viewBox="0 0 540 135" role="img" aria-label="A sawtooth function and its weak limit, the zero function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--success)", strokeWidth: 3 }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(saw(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X(1)} y={Y(0) + 16} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>weak limit u = 0</text>
        <text x={X(0)} y={Y(0) + 16} style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        I[uₙ] = {In.toFixed(4)}, but I[0] = {I0}.{" "}
        {conv ? "Here the limit has lower energy: the convex energy is weakly lower semicontinuous." : "The energies tend to 0, yet the limit has energy 1: the infimum 0 is never attained."}
      </p>
      <figcaption className="viz-caption">
        The sawtooth uₙ has slope ±1 everywhere, so (u′² − 1)² vanishes and only ∫u² = 1/(12n²) remains. As n grows, uₙ
        converges weakly in H¹ to 0, whose slope is 0, not ±1. The first energy is not convex in u′, and the infimum
        escapes into ever finer oscillations; the convex energy has no such gap.
      </figcaption>
    </figure>
  );
}
