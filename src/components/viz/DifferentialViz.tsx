"use client";

import { useState } from "react";

const MAPS: { name: string; F: (x: number, y: number) => [number, number]; J: (x: number, y: number) => [number, number, number, number] }[] = [
  { name: "squaring z ↦ z²", F: (x, y) => [x * x - y * y, 2 * x * y], J: (x, y) => [2 * x, -2 * y, 2 * y, 2 * x] },
  { name: "polar (r, θ) ↦ (r cos θ, r sin θ)", F: (r, t) => [r * Math.cos(t), r * Math.sin(t)], J: (r, t) => [Math.cos(t), -r * Math.sin(t), Math.sin(t), r * Math.cos(t)] },
  { name: "fold (x, y) ↦ (x², y)", F: (x, y) => [x * x, y], J: (x) => [2 * x, 0, 0, 1] },
];

/** The differential of a smooth map of the plane: a tiny square near p and its image, against the linear map dF at p. */
export function DifferentialViz() {
  const [k, setK] = useState(0);
  const [px, setPx] = useState(1);
  const [py, setPy] = useState(1);
  const M = MAPS[k];
  const [a, b, c, d] = M.J(px, py);
  const det = a * d - b * c;
  const eps = 0.25;
  const sq: [number, number][] = [];
  for (let i = 0; i <= 20; i++) sq.push([px + (eps * i) / 20, py]);
  for (let i = 0; i <= 20; i++) sq.push([px + eps, py + (eps * i) / 20]);
  for (let i = 20; i >= 0; i--) sq.push([px + (eps * i) / 20, py + eps]);
  for (let i = 20; i >= 0; i--) sq.push([px, py + (eps * i) / 20]);
  const img = sq.map(([x, y]) => M.F(x, y));
  const [fx, fy] = M.F(px, py);
  const lin = [[0, 0], [a * eps, c * eps], [(a + b) * eps, (c + d) * eps], [b * eps, d * eps]].map(([u, v]) => [fx + u, fy + v]);
  const S = 34;
  const L = (x: number, y: number, ox: number) => `${ox + S * x},${115 - S * y}`;
  const f = (n: number) => (Math.abs(n) < 5e-4 ? "0.00" : (n < 0 ? "−" : "") + Math.abs(n).toFixed(2));
  const cx2 = 380;
  const span = Math.max(3, Math.abs(fx) + 1.2, Math.abs(fy) + 1.2);
  const S2 = Math.min(34, 100 / span);
  const L2 = (x: number, y: number) => `${cx2 + S2 * x},${115 - S2 * y}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {MAPS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>p₁ = {px.toFixed(1)} <input type="range" min={-15} max={15} step={5} value={px * 10} onChange={(e) => setPx(Number(e.target.value) / 10)} aria-label="p1" /></label>
        <label>p₂ = {py.toFixed(1)} <input type="range" min={-15} max={15} step={5} value={py * 10} onChange={(e) => setPy(Number(e.target.value) / 10)} aria-label="p2" /></label>
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A small square and its image under a smooth map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={115} x2={220} y2={115} style={{ stroke: "var(--border)" }} />
        <line x1={120} y1={15} x2={120} y2={215} style={{ stroke: "var(--border)" }} />
        <polygon points={sq.map(([x, y]) => L(x, y, 120)).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={120 + S * px} cy={115 - S * py} r={4} style={{ fill: "var(--text)" }} />
        <text x={120} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>domain: a small square at p</text>
        <text x={250} y={115} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 18 }}>→</text>
        <line x1={cx2 - 120} y1={115} x2={cx2 + 120} y2={115} style={{ stroke: "var(--border)" }} />
        <line x1={cx2} y1={15} x2={cx2} y2={215} style={{ stroke: "var(--border)" }} />
        <polygon points={img.map(([x, y]) => L2(x, y)).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <polygon points={lin.map(([x, y]) => L2(x, y)).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <circle cx={cx2 + S2 * fx} cy={115 - S2 * fy} r={4} style={{ fill: "var(--text)" }} />
        <text x={cx2} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>image (solid) and dF at p (dashed)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        dF at p = [[{f(a)}, {f(b)}], [{f(c)}, {f(d)}]], determinant {f(det)}. {Math.abs(det) < 1e-9 ? "dF is not invertible here: the map folds or crushes the square." : "dF is invertible, so by the inverse function theorem F is a local diffeomorphism near p."}
      </p>
      <figcaption className="viz-caption">
        The differential is the linear map that best approximates F near p. The dashed parallelogram is the image of the
        square under dF; the solid curve is its true image under F. They agree to first order, and the smaller the square,
        the closer they are.
      </figcaption>
    </figure>
  );
}
