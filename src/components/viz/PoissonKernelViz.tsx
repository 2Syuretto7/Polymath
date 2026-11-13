"use client";

import { useState } from "react";

/** The Poisson kernel of the unit disc: how much each boundary point contributes to the value at an interior point. */
export function PoissonKernelViz() {
  const [rho, setRho] = useState(0.5);
  const [phiDeg, setPhiDeg] = useState(30);
  const [arc, setArc] = useState(45);
  const phi = (phiDeg * Math.PI) / 180, half = (arc * Math.PI) / 180;
  const P = (t: number) => (1 - rho * rho) / (2 * Math.PI * (1 - 2 * rho * Math.cos(t - phi) + rho * rho));
  const M = 3600;
  let total = 0, u = 0, pmax = 0;
  for (let k = 0; k < M; k++) {
    const t = -Math.PI + ((k + 0.5) / M) * 2 * Math.PI, w = P(t) * ((2 * Math.PI) / M);
    total += w;
    if (Math.abs(t) < half) u += w;
    pmax = Math.max(pmax, P(t));
  }
  const cx = 150, cy = 125, R = 90;
  const ticks = Array.from({ length: 120 }, (_, k) => (k / 120) * 2 * Math.PI - Math.PI);
  const scale = 60 / Math.max(pmax, 0.3);
  const arcPath = (() => {
    const a0 = -half, a1 = half, big = a1 - a0 > Math.PI ? 1 : 0;
    return `M${cx + R * Math.cos(a0)},${cy - R * Math.sin(a0)} A${R},${R} 0 ${big} 0 ${cx + R * Math.cos(a1)},${cy - R * Math.sin(a1)}`;
  })();
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>distance of the point from the centre: <span className="mono">{rho.toFixed(2)}</span></span>
          <input type="range" min={0} max={0.95} step={0.05} value={rho} onChange={(e) => setRho(Number(e.target.value))} /></label>
        <label><span>angle of the point: <span className="mono">{phiDeg}°</span></span>
          <input type="range" min={-180} max={180} step={5} value={phiDeg} onChange={(e) => setPhiDeg(Number(e.target.value))} /></label>
        <label><span>half-width of the hot arc: <span className="mono">{arc}°</span></span>
          <input type="range" min={5} max={175} step={5} value={arc} onChange={(e) => setArc(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 250" role="img" aria-label="The unit disc, a point inside it, and the weights the boundary points receive" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "var(--bg)", stroke: "var(--border)", strokeWidth: 1.5 }} />
        <path d={arcPath} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 6, opacity: 0.35 }} />
        {ticks.map((t, k) => {
          const len = P(t) * scale;
          return <line key={k} x1={cx + R * Math.cos(t)} y1={cy - R * Math.sin(t)} x2={cx + (R + len) * Math.cos(t)} y2={cy - (R + len) * Math.sin(t)} style={{ stroke: "var(--accent)", strokeWidth: 1.6 }} />;
        })}
        <circle cx={cx + R * rho * Math.cos(phi)} cy={cy - R * rho * Math.sin(phi)} r={5} style={{ fill: "var(--text)" }} />
        <text x={330} y={50} style={{ fill: "var(--text)", fontSize: 13 }}>spikes: weight P given to</text>
        <text x={330} y={68} style={{ fill: "var(--text)", fontSize: 13 }}>each boundary point</text>
        <text x={330} y={100} style={{ fill: "var(--text)", fontSize: 13 }}>total weight: {total.toFixed(4)}</text>
        <text x={330} y={124} style={{ fill: "var(--text)", fontSize: 13 }}>largest weight: {pmax.toFixed(4)}</text>
        <text x={330} y={160} style={{ fill: "var(--text)", fontSize: 13 }}>boundary value 1 on the grey arc,</text>
        <text x={330} y={178} style={{ fill: "var(--text)", fontSize: 13 }}>0 elsewhere; temperature at</text>
        <text x={330} y={196} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>the point: {u.toFixed(4)}</text>
      </svg>
      <figcaption className="viz-caption">
        The solution of Laplace&rsquo;s equation in the unit disc with boundary values f is u = ∫ P f, where P(ρ, φ; θ) = (1 −
        ρ²)/(2π(1 − 2ρ cos(θ − φ) + ρ²)) is the Poisson kernel. At the centre every boundary point gets the same weight 1/2π,
        which is the mean value property. As the point nears the boundary the weight piles up on the nearest boundary points,
        so u takes the boundary values continuously. The weights always total 1.
      </figcaption>
    </figure>
  );
}
