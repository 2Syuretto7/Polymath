"use client";

import { useMemo, useState } from "react";

/** The topologist’s sine curve: connected, since it is the closure of a connected set, but not path-connected. */
export function SineCurveViz() {
  const [z, setZ] = useState(0);
  const [p, setP] = useState(0.5);
  const w = Math.pow(10, -z); // the window shows 0 ≤ x ≤ w
  const W = 520, H = 240, L = 30, R = 510, T = 20, B = 220;
  const X = (x: number) => L + (x / w) * (R - L), Y = (y: number) => (T + B) / 2 - y * ((B - T) / 2 - 4);
  const uMax = 1 / w + 500;
  const d = useMemo(() => {
    const pts: string[] = [];
    for (let u = 1 / w; u <= uMax; u += 0.15) pts.push(`${pts.length ? "L" : "M"}${X(1 / u).toFixed(1)},${Y(Math.sin(u)).toFixed(1)}`);
    return pts.join(" ");
  }, [w]); // eslint-disable-line react-hooks/exhaustive-deps
  const px = p * w, py = Math.sin(1 / px);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>zoom towards x = 0: window width <span className="mono">{w < 0.01 ? w.toExponential(0) : w.toFixed(w < 1 ? 2 : 0)}</span></span>
          <input type="range" min={0} max={4} step={0.5} value={z} onChange={(e) => setZ(Number(e.target.value))} /></label>
        <label><span>a point on the curve, as a fraction of the window: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={1} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph of sin(1/x) near zero, with the vertical segment at x = 0" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={L} y1={Y(0)} x2={R} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <rect x={L} y={Y(1)} width={Math.max(0, X(1 / uMax) - L)} height={Y(-1) - Y(1)} style={{ fill: "var(--text-faint)", fillOpacity: 0.5 }} />
        <path d={d} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1 }} />
        <line x1={L} y1={Y(1)} x2={L} y2={Y(-1)} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />
        <circle cx={X(px)} cy={Y(py)} r={6} style={{ fill: "var(--accent)" }} />
        <text x={L + 6} y={T - 6} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 0: the segment {"{0}"} × [−1, 1]</text>
        <text x={R} y={H - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = {w < 0.01 ? w.toExponential(0) : w.toFixed(2)}</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>point: x = {px.toExponential(2)}, sin(1/x) = {py.toFixed(3)}</p>
      <figcaption className="viz-caption">
        However far you zoom, the curve still sweeps between −1 and 1 infinitely often, so every point of the segment is a limit
        of points on the curve. The union is the closure of a connected set, hence connected. But a path from the curve to the
        segment would have to settle on a y-value as x reaches 0, and sin(1/x) never settles. The shaded strip stands for
        oscillations too fine to draw.
      </figcaption>
    </figure>
  );
}
