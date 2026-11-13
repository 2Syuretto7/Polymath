"use client";

import { useState } from "react";

/** Contours of a bivariate normal density, with the regression line E(Y | X = x). */
export function BivariateNormalViz() {
  const [sx, setSx] = useState(1);
  const [sy, setSy] = useState(1);
  const [rho, setRho] = useState(0.6);
  const [x0, setX0] = useState(1);
  const W = 360, H = 360, L = 4.5;
  const X = (x: number) => W / 2 + (x / L) * (W / 2 - 10);
  const Y = (y: number) => H / 2 - (y / L) * (H / 2 - 10);
  // eigen-decomposition of the covariance matrix
  const a = sx * sx, d = sy * sy, b = rho * sx * sy;
  const tr = a + d, det = a * d - b * b, disc = Math.sqrt(Math.max(tr * tr / 4 - det, 0));
  const l1 = tr / 2 + disc, l2 = Math.max(tr / 2 - disc, 1e-6);
  const ang = Math.abs(b) < 1e-9 ? (a >= d ? 0 : Math.PI / 2) : Math.atan2(l1 - a, b);
  const ellipse = (c: number) => Array.from({ length: 121 }, (_, i) => {
    const t = (2 * Math.PI * i) / 120, u = c * Math.sqrt(l1) * Math.cos(t), v = c * Math.sqrt(l2) * Math.sin(t);
    const x = u * Math.cos(ang) - v * Math.sin(ang), y = u * Math.sin(ang) + v * Math.cos(ang);
    return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`;
  }).join(" ");
  const slope = (rho * sy) / sx;
  const cm = slope * x0, csd = sy * Math.sqrt(1 - rho * rho);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>σ of X: <span className="mono">{sx}</span></span>
          <input type="range" min={0.5} max={1.5} step={0.1} value={sx} onChange={(e) => setSx(Number(e.target.value))} /></label>
        <label><span>σ of Y: <span className="mono">{sy}</span></span>
          <input type="range" min={0.5} max={1.5} step={0.1} value={sy} onChange={(e) => setSy(Number(e.target.value))} /></label>
        <label><span>correlation ρ: <span className="mono">{rho.toFixed(2)}</span></span>
          <input type="range" min={-0.95} max={0.95} step={0.05} value={rho} onChange={(e) => setRho(Number(e.target.value))} /></label>
        <label><span>condition on X = <span className="mono">{x0}</span></span>
          <input type="range" min={-2} max={2} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Contour ellipses of a bivariate normal density" style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={H} style={{ stroke: "var(--border)" }} />
        {[1, 2].map((c) => <path key={c} d={ellipse(c)} style={{ fill: "var(--accent)", fillOpacity: 0.08, stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
        <line x1={X(-L)} y1={Y(-L * slope)} x2={X(L)} y2={Y(L * slope)} style={{ stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <line x1={X(x0)} y1={Y(cm - 2 * csd)} x2={X(x0)} y2={Y(cm + 2 * csd)} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
        <circle cx={X(x0)} cy={Y(cm)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        given X = {x0}: Y is normal with mean ρ(σ_Y/σ_X)x = {cm.toFixed(3)} and SD σ_Y√(1 − ρ²) = {csd.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        The ellipses are curves of equal density, at 1 and 2 &ldquo;standard deviations&rdquo;. The dashed line is E(Y | X = x). It passes through the points where the ellipses have vertical tangents, and it is flatter than a line of slope ±σ_Y/σ_X: this is regression towards the mean. The solid vertical bar spans two conditional standard deviations either side of the conditional mean, and it is the same length for every x.
      </figcaption>
    </figure>
  );
}
