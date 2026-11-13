"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

const B = 1.8;

/** A trapping annulus for r′ = r(1 − r²) + μr cos θ, θ′ = 1: if the flow points inwards on both circles, a closed orbit lies between. */
export function TrappingViz() {
  const [mu, setMu] = useState(0.5);
  const [r1, setR1] = useState(0.6);
  const [r2, setR2] = useState(1.4);
  const rdot = (r: number, th: number) => r * (1 - r * r) + mu * r * Math.cos(th);
  const F = (x: number, y: number): [number, number] => { const r = Math.hypot(x, y) || 1e-9, th = Math.atan2(y, x), rd = rdot(r, th); return [rd * Math.cos(th) - r * Math.sin(th), rd * Math.sin(th) + r * Math.cos(th)]; };
  const ths = Array.from({ length: 24 }, (_, k) => (2 * Math.PI * k) / 24);
  const innerMin = Math.min(...Array.from({ length: 360 }, (_, k) => rdot(r1, (2 * Math.PI * k) / 360)));
  const outerMax = Math.max(...Array.from({ length: 360 }, (_, k) => rdot(r2, (2 * Math.PI * k) / 360)));
  const ok = r1 < r2 && innerMin > 0 && outerMax < 0;
  const W = 380, X = (x: number) => W / 2 + (x / B) * (W / 2 - 8), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 8), S = (W / 2 - 8) / B;
  const traj = rk4Path(F, 0.05, 0, 0.01, 4000, [-B, B, -B, B]);
  const arrow = (r: number, th: number) => {
    const x = r * Math.cos(th), y = r * Math.sin(th), rd = rdot(r, th), good = r === r1 ? rd > 0 : rd < 0;
    const L = 0.12 * Math.sign(rd) * Math.min(1, Math.abs(rd) * 4 + 0.3);
    return <line key={`${r}-${th}`} x1={X(x)} y1={Y(y)} x2={X(x + L * Math.cos(th))} y2={Y(y + L * Math.sin(th))} style={{ stroke: good ? "var(--accent)" : "var(--danger)", strokeWidth: 2.2 }} />;
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>μ: <span className="mono">{mu.toFixed(2)}</span></span>
          <input type="range" min={0} max={0.9} step={0.05} value={mu} onChange={(e) => setMu(Number(e.target.value))} /></label>
        <label><span>inner radius: <span className="mono">{r1.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={1.2} step={0.05} value={r1} onChange={(e) => setR1(Number(e.target.value))} /></label>
        <label><span>outer radius: <span className="mono">{r2.toFixed(2)}</span></span>
          <input type="range" min={0.8} max={1.7} step={0.05} value={r2} onChange={(e) => setR2(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="An annulus and the radial component of the flow on its boundary" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <circle cx={X(0)} cy={Y(0)} r={r2 * S} style={{ fill: ok ? "var(--accent-soft)" : "none", fillOpacity: 0.3, stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <circle cx={X(0)} cy={Y(0)} r={r1 * S} style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={traj.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />
        {ths.map((th) => arrow(r1, th))}
        {ths.map((th) => arrow(r2, th))}
        <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>smallest r′ on the inner circle: {innerMin.toFixed(3)}; largest r′ on the outer circle: {outerMax.toFixed(3)}</p>
      <p style={{ margin: "4px 0", fontWeight: 600, color: ok ? "var(--accent)" : "var(--danger)" }}>
        {ok ? "Trapping region: the flow enters the annulus across both circles. It contains no equilibrium, so Poincaré–Bendixson gives a closed orbit inside." : "Not a trapping region: somewhere on the boundary the flow points out of the annulus."}
      </p>
      <figcaption className="viz-caption">
        Short strokes show the radial part of the flow on each circle; strokes pointing out of the annulus are flagged as failures. The faint curve is one solution, which winds onto the closed orbit. The theory predicts the inner radius √(1 − μ) and outer radius √(1 + μ) always work.
      </figcaption>
    </figure>
  );
}
