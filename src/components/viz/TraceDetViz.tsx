"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

function classify(T: number, D: number): string {
  if (Math.abs(D) < 1e-9) return "degenerate: a line of equilibria (determinant 0)";
  if (D < 0) return "saddle: real eigenvalues of opposite signs";
  const disc = T * T - 4 * D;
  if (Math.abs(T) < 1e-9) return "centre: purely imaginary eigenvalues, closed orbits";
  const st = T < 0 ? "stable" : "unstable";
  if (Math.abs(disc) < 1e-9) return `${st} degenerate node: a repeated eigenvalue`;
  return disc > 0 ? `${st} node: real eigenvalues of the same sign` : `${st} spiral: complex eigenvalues with real part ${(T / 2).toFixed(2)}`;
}

/** The trace–determinant plane: where A sits decides the phase portrait of x′ = Ax. */
export function TraceDetViz() {
  const [T, setT] = useState(-1);
  const [D, setD] = useState(2);
  const A = [0, 1, -D, T];
  const F = (x: number, y: number): [number, number] => [A[0] * x + A[1] * y, A[2] * x + A[3] * y];
  const B = 2.5, W = 300;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - 8), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 8);
  const starts: [number, number][] = Array.from({ length: 12 }, (_, k) => { const a = (2 * Math.PI * k) / 12 + 0.2; return [2.2 * Math.cos(a), 2.2 * Math.sin(a)]; });
  // normalise speed so slow and fast systems both draw well
  const sys = (sg: number) => (x: number, y: number): [number, number] => { const [u, v] = F(x, y); const n = Math.hypot(u, v) || 1; return [(sg * u) / Math.max(n, 0.05), (sg * v) / Math.max(n, 0.05)]; };
  const paths = starts.map(([x, y]) => [...rk4Path(sys(-1), x, y, 0.03, 200, [-B, B, -B, B]).reverse(), ...rk4Path(sys(1), x, y, 0.03, 400, [-B, B, -B, B]).slice(1)]);
  const P = 300, TR = 4, DR = 4;
  const PX = (t: number) => P / 2 + (t / TR) * (P / 2 - 10), PY = (d: number) => P - 20 - ((d + 1.5) / (DR + 1.5)) * (P - 30);
  const par = Array.from({ length: 101 }, (_, i) => { const t = -TR + (2 * TR * i) / 100; return `${i ? "L" : "M"}${PX(t).toFixed(1)},${PY(Math.min(DR + 0.5, (t * t) / 4)).toFixed(1)}`; }).join(" ");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>trace T: <span className="mono">{T.toFixed(1)}</span></span>
          <input type="range" min={-3} max={3} step={0.1} value={T} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>determinant D: <span className="mono">{D.toFixed(1)}</span></span>
          <input type="range" min={-1.5} max={4} step={0.1} value={D} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 8 }}>
        <svg viewBox={`0 0 ${P} ${P}`} role="img" aria-label="Trace–determinant plane" style={{ flex: "1 1 240px", maxWidth: 320, minWidth: 0 }}>
          <line x1={0} y1={PY(0)} x2={P} y2={PY(0)} style={{ stroke: "var(--border)" }} />
          <line x1={PX(0)} y1={0} x2={PX(0)} y2={P - 20} style={{ stroke: "var(--border)" }} />
          <path d={par} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
          <text x={P - 6} y={PY(0) - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>T</text>
          <text x={PX(0) + 4} y={12} style={{ fill: "var(--text-muted)", fontSize: 11 }}>D</text>
          <text x={PX(0)} y={PY(3.2)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>spirals</text>
          <text x={PX(-3.4)} y={PY(1)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>nodes</text>
          <text x={PX(3.4)} y={PY(1)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>nodes</text>
          <text x={PX(0)} y={PY(-1)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>saddles</text>
          <text x={PX(-2)} y={P - 6} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>stable</text>
          <text x={PX(2)} y={P - 6} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>unstable</text>
          <circle cx={PX(T)} cy={PY(D)} r={6} style={{ fill: "var(--accent)" }} />
        </svg>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Phase portrait" style={{ flex: "1 1 240px", maxWidth: 320, minWidth: 0 }}>
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
          {paths.map((ps, k) => <path key={k} d={ps.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.4 }} />)}
          {starts.map(([x, y], k) => { const [u, v] = F(x, y), n = Math.hypot(u, v) || 1; return <line key={k} x1={X(x)} y1={Y(y)} x2={X(x + (0.25 * u) / n)} y2={Y(y + (0.25 * v) / n)} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />; })}
          <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
        </svg>
      </div>
      <p className="mono" style={{ margin: "6px 0 2px" }}>A = [[0, 1], [{(-D).toFixed(1)}, {T.toFixed(1)}]]; T² − 4D = {(T * T - 4 * D).toFixed(2)}</p>
      <p style={{ margin: "2px 0 4px", fontWeight: 600 }}>{classify(T, D)}</p>
      <figcaption className="viz-caption">
        The eigenvalues solve λ² − Tλ + D = 0, so the trace and determinant alone decide the portrait. Below the axis, saddles; above the dashed parabola T² = 4D, spirals; between, nodes. The left half is stable, the right unstable. The short dark strokes show the direction of motion at each starting point.
      </figcaption>
    </figure>
  );
}
