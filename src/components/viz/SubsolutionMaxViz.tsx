"use client";

import { useState } from "react";

/** Solutions of −u″ = f on [0, 1] with u(0) = α and u(1) = β, for a constant source f. */
export function SubsolutionMaxViz() {
  const [f, setF] = useState(-2);
  const [al, setAl] = useState(1);
  const [be, setBe] = useState(0.5);
  const u = (x: number) => al + (be - al) * x + (f / 2) * x * (1 - x);
  const xs = Array.from({ length: 201 }, (_, i) => i / 200);
  let mx = -Infinity;
  let at = 0;
  for (const x of xs) if (u(x) > mx + 1e-12) { mx = u(x); at = x; }
  const onBoundary = at < 1e-9 || at > 1 - 1e-9;
  const X = (x: number) => 40 + x * 460;
  const Y = (y: number) => 170 - (y + 0.5) * 50;
  const kind = f < 0 ? "−Δu ≤ 0: u is a subsolution" : f === 0 ? "−Δu = 0: u is harmonic" : "−Δu ≥ 0: u is a supersolution";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="source">
        {[-2, 0, 4].map((v) => (
          <button key={v} type="button" aria-pressed={f === v} className={f === v ? "seg is-on" : "seg"} onClick={() => setF(v)}>
            f = {v < 0 ? `−${-v}` : v}
          </button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>u(0) = {al} <input type="range" min={0} max={2} step={0.5} value={al} onChange={(e) => setAl(Number(e.target.value))} aria-label="left value" /></label>
        <label>u(1) = {be} <input type="range" min={0} max={2} step={0.5} value={be} onChange={(e) => setBe(Number(e.target.value))} aria-label="right value" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The solution and the point where it is largest" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--grid-line)" }} />
        <line x1={X(0)} y1={10} x2={X(0)} y2={180} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(1)} y1={10} x2={X(1)} y2={180} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(at)} cy={Y(mx)} r={7} style={{ fill: onBoundary ? "var(--success)" : "var(--danger)" }} />
        <text x={X(0) - 6} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
        <text x={X(0)} y={186} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>x = 0</text>
        <text x={X(1)} y={186} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>x = 1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {kind}. The maximum of u is {mx.toFixed(3)}, at x = {at.toFixed(2)}
        {onBoundary ? ", on the boundary." : ", inside the interval."}
      </p>
      <figcaption className="viz-caption">
        Here u = α + (β − α)x + (f/2)x(1 − x). When −u″ ≤ 0 the graph is convex, so it lies below the chord joining its
        end values: the maximum is on the boundary, as the weak maximum principle says. With f &gt; 0 the graph bulges
        upwards and can peak inside, but then the minimum is on the boundary instead.
      </figcaption>
    </figure>
  );
}
