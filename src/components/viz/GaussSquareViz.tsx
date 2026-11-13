"use client";

import { useState } from "react";

/** ∫∫ e^(−x²−y²) over a square, squeezed between the same integral over two discs, which polar coordinates make easy. */
export function GaussSquareViz() {
  const [R, setR] = useState(1.2);
  const disc = (r: number) => Math.PI * (1 - Math.exp(-r * r));
  // the square integral is (∫_{−R}^{R} e^{−x²} dx)², computed by Simpson's rule
  const N = 400, h = (2 * R) / N;
  let s = 0; for (let i = 0; i <= N; i++) { const x = -R + i * h, w = i === 0 || i === N ? 1 : i % 2 ? 4 : 2; s += w * Math.exp(-x * x); }
  const sq = ((s * h) / 3) ** 2;
  const W = 320, B = 3.2, C = W / 2, k = (W / 2 - 8) / B;
  const shades = Array.from({ length: 6 }, (_, i) => 3 - i * 0.5);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>half-width R: <span className="mono">{R}</span></span><input type="range" min={0.2} max={2.2} step={0.1} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The square of half-width R between discs of radius R and R√2" style={{ width: "100%", maxWidth: 340, display: "block", margin: "8px auto" }}>
        {shades.map((r, i) => <circle key={r} cx={C} cy={C} r={r * k} style={{ fill: "var(--accent)", fillOpacity: 0.06 + 0.05 * i }} />)}
        <circle cx={C} cy={C} r={R * Math.SQRT2 * k} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
        <rect x={C - R * k} y={C - R * k} width={2 * R * k} height={2 * R * k} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={C} cy={C} r={R * k} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>disc of radius R: π(1 − e^(−R²)) = {disc(R).toFixed(5)}</div>
        <div>square [−R, R]²: (∫ e^(−x²))² = {sq.toFixed(5)}</div>
        <div>disc of radius R√2: π(1 − e^(−2R²)) = {disc(R * Math.SQRT2).toFixed(5)}</div>
        <div>π = {Math.PI.toFixed(5)}</div>
      </div>
      <figcaption className="viz-caption">
        The integrand is positive, so the integral over the square lies between the integrals over the inscribed and
        circumscribed discs. In polar coordinates dx dy = r dr dθ, and the disc integrals are π(1 − e^(−r²)). Both tend to π,
        so (∫ e^(−x²) dx)² = π over the whole line.
      </figcaption>
    </figure>
  );
}
