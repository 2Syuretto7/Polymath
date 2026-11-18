"use client";

import { useState } from "react";

const DISTS: { name: string; dz: (x: number, y: number, dx: number, dy: number) => number; note: string }[] = [
  { name: "dz = 0", dz: () => 0, note: "Integrable: the planes are tangent to the horizontal planes z = constant." },
  { name: "dz = y dx + x dy", dz: (x, y, dx, dy) => y * dx + x * dy, note: "Integrable: the planes are tangent to the surfaces z = xy + constant." },
  { name: "dz = y dx", dz: (x, y, dx) => y * dx, note: "Not integrable: the planes twist, and the loop does not close. This is the standard contact structure." },
];

/** A distribution of planes in ℝ³ given by dz = α: lift a rectangle in the xy-plane and see whether it closes. */
export function HolonomyLoopViz() {
  const [k, setK] = useState(2);
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const D = DISTS[k];
  const corners: [number, number][] = [[0, 0], [a, 0], [a, b], [0, b], [0, 0]];
  const zs: number[] = [0];
  const path: { s: number; z: number }[] = [{ s: 0, z: 0 }];
  let z = 0, s = 0;
  for (let i = 0; i < 4; i++) {
    const [x1, y1] = corners[i], [x2, y2] = corners[i + 1];
    const n = 30;
    for (let j = 0; j < n; j++) {
      const t = (j + 0.5) / n;
      const x = x1 + t * (x2 - x1), y = y1 + t * (y2 - y1);
      z += D.dz(x, y, (x2 - x1) / n, (y2 - y1) / n);
      s += Math.hypot(x2 - x1, y2 - y1) / n;
      path.push({ s, z });
    }
    zs.push(z);
  }
  const L = 2 * (a + b);
  const PX = (u: number) => 280 + (u / L) * 220;
  const zmax = Math.max(1, a * b);
  const PZ = (v: number) => 95 - v * (55 / zmax);
  const SX = 50, SY = 180, U = 45;
  const gap = zs[4];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="distribution">
        {DISTS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>width a = {a.toFixed(1)} <input type="range" min={1} max={6} value={a * 2} onChange={(e) => setA(Number(e.target.value) / 2)} aria-label="width" /></label>
        <label>height b = {b.toFixed(1)} <input type="range" min={1} max={6} value={b * 2} onChange={(e) => setB(Number(e.target.value) / 2)} aria-label="height" /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A rectangle in the plane and the height of its lift" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polygon points={corners.slice(0, 4).map(([x, y]) => `${SX + U * x},${SY - U * y}`).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={SX} y={SY + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>loop in the xy-plane, anticlockwise from (0, 0)</text>
        <line x1={280} y1={PZ(0)} x2={500} y2={PZ(0)} style={{ stroke: "var(--border)" }} />
        <polyline points={path.map((q) => `${PX(q.s)},${PZ(q.z)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={PX(L)} cy={PZ(gap)} r={4} style={{ fill: Math.abs(gap) > 1e-9 ? "var(--danger)" : "var(--success)" }} />
        <text x={280} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>height z along the lifted path</text>
        <text x={390} y={178} textAnchor="middle" style={{ fill: Math.abs(gap) > 1e-9 ? "var(--danger)" : "var(--success)", fontSize: 13, fontWeight: 700 }}>
          change in z round the loop = {Math.abs(gap) < 1e-9 ? "0" : gap < 0 ? `−${(-gap).toFixed(2)}` : gap.toFixed(2)}
        </text>
      </svg>
      <p style={{ fontSize: 13, margin: "4px 0" }}>{D.note}</p>
      <figcaption className="viz-caption">
        A curve tangent to the planes must climb by dz as it moves. If the planes come from a family of surfaces, a lifted loop
        stays on one surface and closes up. If not, it ends at a different height, and no surface can be tangent to the
        planes. Frobenius says the test is whether the bracket of fields in the planes stays in the planes.
      </figcaption>
    </figure>
  );
}
