"use client";

import { useState } from "react";

/** d’Alembert’s solution of the wave equation with data supported in [−1, 1]. */
const bump = (x: number) => (Math.abs(x) < 1 ? Math.cos((Math.PI * x) / 2) ** 2 : 0);
/** An antiderivative of the bump, used for initial velocity. */
const B = (x: number) => (x <= -1 ? 0 : x >= 1 ? 1 : (x + 1 + Math.sin(Math.PI * x) / Math.PI) / 2);

export function PropagationConeViz() {
  const [mode, setMode] = useState<"disp" | "vel">("disp");
  const [t10, setT10] = useState(10);
  const t = t10 / 10;
  const u = (x: number) => (mode === "disp" ? (bump(x - t) + bump(x + t)) / 2 : B(x + t) - B(x - t));
  const xs = Array.from({ length: 401 }, (_, i) => -6 + (i * 12) / 400);
  const X = (x: number) => 270 + x * 42;
  const Y = (y: number) => 120 - y * 70;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="initial data">
        <button type="button" aria-pressed={mode === "disp"} className={mode === "disp" ? "seg is-on" : "seg"} onClick={() => setMode("disp")}>initial displacement</button>
        <button type="button" aria-pressed={mode === "vel"} className={mode === "vel" ? "seg is-on" : "seg"} onClick={() => setMode("vel")}>initial velocity</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>t = {t.toFixed(1)} <input type="range" min={0} max={40} step={1} value={t10} onChange={(e) => setT10(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The wave at time t and the region it can have reached" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(-1 - t)} y={20} width={X(1 + t) - X(-1 - t)} height={160} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X(-6)} y1={Y(0)} x2={X(6)} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <line x1={X(-1)} y1={Y(0) + 6} x2={X(1)} y2={Y(0) + 6} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
        {[-1 - t, 1 + t].map((x, i) => (
          <text key={i} x={X(x)} y={196} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{(i === 0 ? "−" : "") + (1 + t).toFixed(1)}</text>
        ))}
        <text x={X(0)} y={Y(0) + 22} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>initial support</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At t = {t.toFixed(1)}, u(·, t) vanishes outside [−{(1 + t).toFixed(1)}, {(1 + t).toFixed(1)}]: the data has spread at speed 1, and no faster.
      </p>
      <figcaption className="viz-caption">
        The initial data lives on [−1, 1], marked in black. By d&rsquo;Alembert&rsquo;s formula a displacement splits into
        two halves moving left and right, while a velocity spreads into a plateau whose edges also move at speed 1. The
        energy method proves the same bound for general hyperbolic equations: the solution at (x, t) depends only on the
        data in [x − t, x + t].
      </figcaption>
    </figure>
  );
}
