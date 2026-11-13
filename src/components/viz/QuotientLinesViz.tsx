"use client";

import { useId, useState } from "react";

/** ℝ² divided by a line U: each coset is a parallel line, and adding cosets does not depend on the representatives. */
export function QuotientLinesViz() {
  const [deg, setDeg] = useState(30);
  const [a, setA] = useState(1);
  const [b, setB] = useState(-0.5);
  const [t, setT] = useState(0.8);
  const th = (deg * Math.PI) / 180;
  const u = [Math.cos(th), Math.sin(th)], n = [-Math.sin(th), Math.cos(th)];
  const clip = useId().replace(/:/g, "");
  const S = 46, W = 400, o = W / 2;
  const P = (x: number, y: number) => [o + x * S, o - y * S];
  const lineAt = (c: number, key: string, style: React.CSSProperties) => {
    const [x1, y1] = P(c * n[0] - 6 * u[0], c * n[1] - 6 * u[1]);
    const [x2, y2] = P(c * n[0] + 6 * u[0], c * n[1] + 6 * u[1]);
    return <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} style={style} />;
  };
  const v = [a * n[0] + t * u[0], a * n[1] + t * u[1]];
  const w = [b * n[0] - 1.3 * t * u[0], b * n[1] - 1.3 * t * u[1]];
  const s = [v[0] + w[0], v[1] + w[1]];
  const arrow = (p: number[], col: string, label: string, from = [0, 0]) => {
    const [x1, y1] = P(from[0], from[1]); const [x2, y2] = P(p[0], p[1]);
    return <g key={label}><line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: col, strokeWidth: 2.5 }} /><circle cx={x2} cy={y2} r={4} style={{ fill: col }} /><text x={x2 + 6} y={y2 - 6} style={{ fill: col, fontSize: 12 }}>{label}</text></g>;
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>direction of U: <span className="mono">{deg}°</span></span><input type="range" min={0} max={170} step={5} value={deg} onChange={(e) => setDeg(Math.round(Number(e.target.value)))} /></label>
        <label><span>coset of v: <span className="mono">{a}</span></span><input type="range" min={-2} max={2} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>coset of w: <span className="mono">{b}</span></span><input type="range" min={-2} max={2} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>slide the representatives: <span className="mono">{t.toFixed(1)}</span></span><input type="range" min={-2} max={2} step={0.1} value={t} onChange={(e) => setT(Math.round(Number(e.target.value) * 10) / 10)} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Cosets of a line in the plane" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <defs><clipPath id={clip}><rect x={0} y={0} width={W} height={W} /></clipPath></defs>
        <g clipPath={`url(#${clip})`}>
          {[-4, -3, -2, -1, 1, 2, 3, 4].map((c) => lineAt(c * 0.5, `g${c}`, { stroke: "var(--border)", strokeWidth: 1 }))}
          {lineAt(0, "U", { stroke: "var(--text-muted)", strokeWidth: 2 })}
          {lineAt(a, "a", { stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "5 4" })}
          {lineAt(b, "b", { stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "5 4" })}
          {lineAt(a + b, "s", { stroke: "var(--danger)", strokeWidth: 2.5 })}
          {arrow(v, "var(--accent)", "v")}
          {arrow(w, "var(--text)", "w")}
          {arrow(s, "var(--danger)", "v + w")}
        </g>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>(v + U) + (w + U) = (v + w) + U, the coset at offset {a} + {b} = {a + b}</p>
      <figcaption className="viz-caption">
        The grey line is the subspace U; every other line parallel to it is a coset v + U. Slide the representatives along their cosets: v + w moves, but always stays on the same red line. So adding cosets is well defined, and the quotient ℝ²/U is one-dimensional, just like a line of offsets.
      </figcaption>
    </figure>
  );
}
