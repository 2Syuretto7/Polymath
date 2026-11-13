"use client";

import { useState } from "react";

type F = { name: string; P: (x: number, y: number) => number; Q: (x: number, y: number) => number; d: (x: number, y: number) => number; dname: string };
const FS: F[] = [
  { name: "x dy", P: () => 0, Q: (x) => x, d: () => 1, dname: "dx ∧ dy" },
  { name: "−y dx + x dy", P: (_x, y) => -y, Q: (x) => x, d: () => 2, dname: "2 dx ∧ dy" },
  { name: "2x dx + dy  (= d(x² + y))", P: (x) => 2 * x, Q: () => 1, d: () => 0, dname: "0" },
  { name: "y² dx", P: (_x, y) => y * y, Q: () => 0, d: (_x, y) => -2 * y, dname: "−2y dx ∧ dy" },
];

/** A 1-form eats a vector at each point and returns a number; its exterior derivative measures the failure of mixed partials to agree. */
export function OneFormViz() {
  const [fi, setFi] = useState(1);
  const [px, setPx] = useState(0.5);
  const [py, setPy] = useState(0.5);
  const [ang, setAng] = useState(30);
  const F = FS[fi];
  const W = 340, B = 1.5, C = W / 2, k = (W / 2 - 10) / B;
  const X = (x: number) => C + x * k, Y = (y: number) => C - y * k;
  const grid = Array.from({ length: 7 }, (_, i) => -1.2 + i * 0.4);
  const t = (ang * Math.PI) / 180, v: [number, number] = [Math.cos(t), Math.sin(t)];
  const val = F.P(px, py) * v[0] + F.Q(px, py) * v[1];
  const dmax = Math.max(...grid.flatMap((x) => grid.map((y) => Math.abs(F.d(x, y)))), 1e-9);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="1-form">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>point x: <span className="mono">{px}</span></span><input type="range" min={-1} max={1} step={0.25} value={px} onChange={(e) => setPx(Number(e.target.value))} /></label>
        <label><span>point y: <span className="mono">{py}</span></span><input type="range" min={-1} max={1} step={0.25} value={py} onChange={(e) => setPy(Number(e.target.value))} /></label>
        <label><span>vector direction: <span className="mono">{ang}°</span></span><input type="range" min={0} max={360} step={15} value={ang} onChange={(e) => setAng(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The 1-form drawn as arrows, shaded by its exterior derivative" style={{ width: "100%", maxWidth: 360, display: "block", margin: "8px auto" }}>
        {grid.map((x) => grid.map((y) => { const dv = F.d(x, y) / dmax; return <rect key={`${x},${y}`} x={X(x - 0.2)} y={Y(y + 0.2)} width={0.4 * k} height={0.4 * k} style={{ fill: dv >= 0 ? "var(--accent)" : "var(--danger)", fillOpacity: Math.abs(dv) * 0.25 }} />; }))}
        {grid.map((x) => grid.map((y) => {
          const p = F.P(x, y), q = F.Q(x, y), n = Math.hypot(p, q) || 1, L = Math.min(0.17, 0.17 * n);
          return <line key={`a${x},${y}`} x1={X(x)} y1={Y(y)} x2={X(x + (p / n) * L)} y2={Y(y + (q / n) * L)} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />;
        }))}
        <line x1={X(px)} y1={Y(py)} x2={X(px + 0.5 * v[0])} y2={Y(py + 0.5 * v[1])} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <circle cx={X(px + 0.5 * v[0])} cy={Y(py + 0.5 * v[1])} r={3.5} style={{ fill: "var(--text)" }} />
        <circle cx={X(px)} cy={Y(py)} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>ω = P dx + Q dy with P = {F.P(px, py).toFixed(2)}, Q = {F.Q(px, py).toFixed(2)} at the point</div>
        <div>ω(v) = P v₁ + Q v₂ = {val.toFixed(3)} for v = ({v[0].toFixed(2)}, {v[1].toFixed(2)})</div>
        <div>dω = (∂Q/∂x − ∂P/∂y) dx ∧ dy = {F.dname}</div>
      </div>
      <figcaption className="viz-caption">
        The short grey strokes point along (P, Q), the direction in which ω gives its largest value on unit vectors. The cell
        shading shows the coefficient of dω, positive in one shade and negative in the other. The third form is d of a
        function, so its exterior derivative is zero everywhere: d(df) = 0.
      </figcaption>
    </figure>
  );
}
