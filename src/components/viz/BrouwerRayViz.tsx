"use client";

import { useMemo, useState } from "react";

type P = [number, number];
const map = (z: P, phi: number): P => {
  const s = 0.5 + 0.4 * (z[0] * z[0] + z[1] * z[1]);
  const w: P = [s * z[0], s * z[1]];
  const c = Math.cos(phi), d = Math.sin(phi);
  return [c * w[0] - d * w[1] + 0.1 * Math.cos(2 * phi), d * w[0] + c * w[1] + 0.1 * Math.sin(2 * phi)];
};
/** Where the ray from f(x) through x leaves the unit disc. */
const ray = (x: P, fx: P): P | null => {
  const u: P = [x[0] - fx[0], x[1] - fx[1]], L = Math.hypot(u[0], u[1]);
  if (L < 1e-6) return null;
  u[0] /= L; u[1] /= L;
  const b = x[0] * u[0] + x[1] * u[1], c = x[0] * x[0] + x[1] * x[1] - 1;
  const t = -b + Math.sqrt(b * b - c);
  return [x[0] + t * u[0], x[1] + t * u[1]];
};

/** Brouwer in the disc: a map with no fixed point would give a retraction of the disc onto its boundary circle. */
export function BrouwerRayViz() {
  const [phi, setPhi] = useState(1);
  const [r, setR] = useState(0.7);
  const [a, setA] = useState(2.2);
  const x: P = [r * Math.cos(a), r * Math.sin(a)];
  const fx = map(x, phi);
  const hit = ray(x, fx);
  const fixed = useMemo(() => {
    let best: P = [0, 0], bd = Infinity;
    for (let i = 0; i <= 200; i++) for (let j = 0; j <= 200; j++) {
      const z: P = [-1 + i / 100, -1 + j / 100];
      if (z[0] * z[0] + z[1] * z[1] > 1) continue;
      const f = map(z, phi), dd = Math.hypot(f[0] - z[0], f[1] - z[1]);
      if (dd < bd) { bd = dd; best = z; }
    }
    return best;
  }, [phi]);
  const W = 520, H = 280, U = 120, cx = 260, cy = 140;
  const X = (v: number) => cx + v * U, Y = (v: number) => cy - v * U;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>twist of the map f: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
        <label><span>distance of x from the centre: <span className="mono">{r.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>direction of x: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The unit disc, a point x, its image f(x), and the ray from f(x) through x to the boundary" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={U} style={{ fill: "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        {hit && <line x1={X(fx[0])} y1={Y(fx[1])} x2={X(hit[0])} y2={Y(hit[1])} style={{ stroke: "var(--accent)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />}
        <circle cx={X(fx[0])} cy={Y(fx[1])} r={5} style={{ fill: "var(--text-muted)" }} />
        <text x={X(fx[0]) + 8} y={Y(fx[1]) + 4} style={{ fill: "var(--text-muted)", fontSize: 12 }}>f(x)</text>
        <circle cx={X(x[0])} cy={Y(x[1])} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(x[0]) + 8} y={Y(x[1]) - 6} style={{ fill: "var(--text)", fontSize: 12 }}>x</text>
        {hit && <circle cx={X(hit[0])} cy={Y(hit[1])} r={6} style={{ fill: "var(--accent)" }} />}
        {hit && <text x={X(hit[0]) + (hit[0] >= 0 ? 10 : -10)} y={Y(hit[1]) + 4} textAnchor={hit[0] >= 0 ? "start" : "end"} style={{ fill: "var(--accent-text)", fontSize: 12 }}>r(x)</text>}
        <rect x={X(fixed[0]) - 5} y={Y(fixed[1]) - 5} width={10} height={10} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }} />
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        fixed point of f near ({fixed[0].toFixed(2)}, {fixed[1].toFixed(2)}), marked by the square; move x onto it and r(x) is undefined
      </p>
      <figcaption className="viz-caption">
        If f had no fixed point, the ray from f(x) through x would always exist, and r(x) would move continuously with x. Points
        already on the circle stay put, so r would be a retraction of the disc onto its boundary, which the fundamental group
        rules out. So every continuous map of the disc to itself has a fixed point.
      </figcaption>
    </figure>
  );
}
