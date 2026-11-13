"use client";

import { useState } from "react";

/** A 2 by 2 matrix applied to the unit circle. For a symmetric matrix the eigenvectors are perpendicular and are the axes of the ellipse. */
export function SpectralViz() {
  const [sym, setSym] = useState(true);
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c0, setC] = useState(0);
  const [d, setD] = useState(1);
  const c = sym ? b : c0;
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  const W = 320, o = W / 2, S = 36;
  const ell = Array.from({ length: 181 }, (_, k) => {
    const t = (k / 180) * 2 * Math.PI, x = Math.cos(t), y = Math.sin(t);
    return `${(o + (a * x + b * y) * S).toFixed(1)},${(o - (c * x + d * y) * S).toFixed(1)}`;
  }).join(" ");
  let eig: { l: number; v: number[] }[] = [];
  if (disc >= -1e-9) {
    const r = Math.sqrt(Math.max(disc, 0));
    for (const l of disc < 1e-9 ? [tr / 2] : [(tr + r) / 2, (tr - r) / 2]) {
      let v = Math.abs(b) > 1e-9 ? [b, l - a] : Math.abs(c) > 1e-9 ? [l - d, c] : Math.abs(l - a) < 1e-9 ? [1, 0] : [0, 1];
      const n = Math.hypot(v[0], v[1]);
      v = [v[0] / n, v[1] / n];
      eig.push({ l, v });
    }
    if (disc < 1e-9 && Math.abs(b) < 1e-9 && Math.abs(c) < 1e-9) eig = [{ l: a, v: [1, 0] }, { l: a, v: [0, 1] }];
  }
  const angle = eig.length === 2 ? (Math.acos(Math.min(1, Math.abs(eig[0].v[0] * eig[1].v[0] + eig[0].v[1] * eig[1].v[1]))) * 180) / Math.PI : null;
  const sl = (nm: string, v: number, set: (x: number) => void) => (
    <label><span>{nm}: <span className="mono">{v}</span></span>
      <input type="range" min={-2} max={3} step={0.5} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Kind of matrix">
        <button type="button" aria-pressed={sym} className={sym ? "seg is-on" : "seg"} onClick={() => setSym(true)}>symmetric</button>
        <button type="button" aria-pressed={!sym} className={!sym ? "seg is-on" : "seg"} onClick={() => setSym(false)}>any matrix</button>
      </div>
      <div className="viz-sliders">
        {sl("a", a, setA)}{sl("b", b, setB)}{sym ? null : sl("c", c0, setC)}{sl("d", d, setD)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Image of the unit circle with eigenvector lines" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={o} cy={o} r={S} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={ell} style={{ fill: "var(--accent-soft)", fillOpacity: 0.45, stroke: "var(--accent)", strokeWidth: 2 }} />
        {eig.map((e, i) => (
          <g key={i}>
            <line x1={o - e.v[0] * 200} y1={o + e.v[1] * 200} x2={o + e.v[0] * 200} y2={o - e.v[1] * 200} style={{ stroke: "var(--text-muted)", strokeDasharray: "6 4" }} />
            <line x1={o} y1={o} x2={o + e.v[0] * e.l * S} y2={o - e.v[1] * e.l * S} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        matrix [{a}, {b}; {c}, {d}]: {eig.length === 0 ? "no real eigenvalues" : `eigenvalues ${eig.map((e) => e.l.toFixed(2)).join(" and ")}`}
        {angle !== null ? `, angle between eigenvector lines ${angle.toFixed(1)}°` : ""}
      </p>
      <figcaption className="viz-caption">
        The shaded shape is the image of the unit circle. The dashed lines are eigenvector lines, and the solid segments show each eigenvector stretched by its eigenvalue. For a symmetric matrix there are always two perpendicular eigenvector lines, and they are the axes of the ellipse. Switch to any matrix and the lines tilt towards each other, or vanish when the eigenvalues are complex.
      </figcaption>
    </figure>
  );
}
