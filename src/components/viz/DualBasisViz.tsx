"use client";

import { useId, useState } from "react";

/** A basis of ℝ² and its dual basis, drawn as families of level lines. */
export function DualBasisViz() {
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(60);
  const [px, setPx] = useState(1.5);
  const [py, setPy] = useState(1);
  const r = (d: number) => (d * Math.PI) / 180;
  const v1 = [Math.cos(r(a1)), Math.sin(r(a1))], v2 = [1.2 * Math.cos(r(a2)), 1.2 * Math.sin(r(a2))];
  const det = v1[0] * v2[1] - v1[1] * v2[0];
  const ok = Math.abs(det) > 0.05;
  // dual functionals: rows of the inverse of [v1 v2]
  const phi1 = ok ? [v2[1] / det, -v2[0] / det] : [0, 0];
  const phi2 = ok ? [-v1[1] / det, v1[0] / det] : [0, 0];
  const clip = useId().replace(/:/g, "");
  const S = 50, W = 400, o = W / 2;
  const P = (x: number, y: number) => [o + x * S, o - y * S];
  const level = (dir: number[], base: number[], k: number, col: string, key: string) => {
    const p0 = [base[0] * k, base[1] * k];
    const [x1, y1] = P(p0[0] - 8 * dir[0], p0[1] - 8 * dir[1]);
    const [x2, y2] = P(p0[0] + 8 * dir[0], p0[1] + 8 * dir[1]);
    return <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: col, strokeWidth: k === 0 ? 1.6 : 0.8, opacity: 0.7 }} />;
  };
  const f1 = phi1[0] * px + phi1[1] * py, f2 = phi2[0] * px + phi2[1] * py;
  const arrow = (p: number[], col: string, label: string) => { const [x, y] = P(p[0], p[1]); return <g key={label}><line x1={o} y1={o} x2={x} y2={y} style={{ stroke: col, strokeWidth: 2.5 }} /><circle cx={x} cy={y} r={3.5} style={{ fill: col }} /><text x={x + 6} y={y - 4} style={{ fill: col, fontSize: 12 }}>{label}</text></g>; };
  const [qx, qy] = P(px, py);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>angle of v₁: <span className="mono">{a1}°</span></span><input type="range" min={-60} max={60} step={5} value={a1} onChange={(e) => setA1(Math.round(Number(e.target.value)))} /></label>
        <label><span>angle of v₂: <span className="mono">{a2}°</span></span><input type="range" min={30} max={150} step={5} value={a2} onChange={(e) => setA2(Math.round(Number(e.target.value)))} /></label>
        <label><span>point x: <span className="mono">{px}</span></span><input type="range" min={-3} max={3} step={0.25} value={px} onChange={(e) => setPx(Number(e.target.value))} /></label>
        <label><span>point y: <span className="mono">{py}</span></span><input type="range" min={-3} max={3} step={0.25} value={py} onChange={(e) => setPy(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A basis and the level lines of its dual basis" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <defs><clipPath id={clip}><rect x={0} y={0} width={W} height={W} /></clipPath></defs>
        <g clipPath={`url(#${clip})`}>
          {ok && [-3, -2, -1, 0, 1, 2, 3].map((k) => level(v2, v1, k, "var(--accent)", `a${k}`))}
          {ok && [-3, -2, -1, 0, 1, 2, 3].map((k) => level(v1, v2, k, "var(--text-muted)", `b${k}`))}
          {arrow(v1, "var(--accent)", "v₁")}
          {arrow(v2, "var(--text)", "v₂")}
          <circle cx={qx} cy={qy} r={5} style={{ fill: "var(--danger)" }} />
        </g>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>{ok ? `φ₁(p) = ${f1.toFixed(2)}, φ₂(p) = ${f2.toFixed(2)}, so p = ${f1.toFixed(2)} v₁ + ${f2.toFixed(2)} v₂` : "v₁ and v₂ are almost parallel: not a basis"}</p>
      <figcaption className="viz-caption">
        The dual basis functional φ₁ is 1 on v₁ and 0 on v₂, so its level lines run parallel to v₂, one for each value. Likewise φ₂&rsquo;s level lines run parallel to v₁. Reading off which lines pass through the red point gives its coordinates. Tilt v₂ and the lines of φ₁ tilt with it: each dual vector depends on the whole basis.
      </figcaption>
    </figure>
  );
}
