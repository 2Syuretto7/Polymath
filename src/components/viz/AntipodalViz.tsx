"use client";

import { useState } from "react";

const TEMPS: [number, number, number, number, number][] = [
  [1.0, 0.4, 0.6, -0.3, 0.2],
  [-0.6, 1.1, 0.2, 0.5, -0.4],
  [0.3, -0.2, 1.2, 0.7, 0.3],
  [1.3, -0.9, -0.2, 0.1, 0.6],
  [0.1, 0.6, -0.9, -0.8, 0.5],
];

/** Borsuk–Ulam on the circle: any continuous temperature on the equator agrees at some pair of antipodal points. */
export function AntipodalViz() {
  const [k, setK] = useState(0);
  const [a, b, c2, d3, e1] = TEMPS[k];
  const T = (t: number) => 15 + 6 * (a * Math.cos(t) + b * Math.sin(t) + c2 * Math.cos(2 * t + 0.7) + d3 * Math.sin(3 * t) + e1 * Math.cos(t + 1.3));
  const h = (t: number) => T(t) - T(t + Math.PI);
  const TAU = 2 * Math.PI, N = 720;
  const ts = Array.from({ length: N + 1 }, (_, i) => (TAU * i) / N);
  const zeros: number[] = [];
  for (let i = 0; i < N; i++) { const u = h(ts[i]), v = h(ts[i + 1]); if (u === 0 || u * v < 0) zeros.push(ts[i] + (ts[i + 1] - ts[i]) * (u / (u - v || 1))); }
  const all = ts.map(T);
  const lo = Math.min(...all) - 1, hi = Math.max(...all) + 1;
  const X0 = 230, W = 270, Y0 = 20, H = 170;
  const sx = (t: number) => X0 + (W * t) / TAU;
  const sy = (v: number) => Y0 + H - (H * (v - lo)) / (hi - lo);
  const cx = 105, cy = 105, R = 72;
  const z0 = zeros[0] ?? 0;
  const P = (t: number) => [cx + R * Math.cos(t), cy - R * Math.sin(t)];
  const [px, py] = P(z0), [qx, qy] = P(z0 + Math.PI);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="temperature">
        {TEMPS.map((_, i) => <button key={i} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>day {i + 1}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A temperature on a circle and a pair of antipodal points with the same temperature" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ts.slice(0, N).map((t, i) => {
          const [x1, y1] = P(t), [x2, y2] = P(ts[i + 1]);
          const s = (T(t) - lo) / (hi - lo);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: `color-mix(in srgb, var(--danger) ${Math.round(100 * s)}%, var(--accent))`, strokeWidth: 8 }} />;
        })}
        <line x1={px} y1={py} x2={qx} y2={qy} style={{ stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <circle cx={px} cy={py} r={7} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={qx} cy={qy} r={7} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={cx} y={cy + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{T(z0).toFixed(1)}°</text>
        <rect x={X0} y={Y0} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <polyline points={ts.map((t) => `${sx(t)},${sy(T(t))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <polyline points={ts.map((t) => `${sx(t)},${sy(T(t + Math.PI))}`).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        {zeros.map((z, i) => <circle key={i} cx={sx(z)} cy={sy(T(z))} r={5} style={{ fill: "var(--text)" }} />)}
        <text x={X0 + 4} y={Y0 + H + 16} style={{ fill: "var(--accent)", fontSize: 11 }}>solid: T(θ)</text>
        <text x={X0 + 110} y={Y0 + H + 16} style={{ fill: "var(--danger)", fontSize: 11 }}>dashed: T(θ + π)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        h(θ) = T(θ) − T(θ + π) has {zeros.length} zeros in [0, 2π). At each, two opposite points of the equator have the same
        temperature.
      </p>
      <figcaption className="viz-caption">
        The function h satisfies h(θ + π) = −h(θ). So if it is positive somewhere, it is negative at the opposite point, and
        by the intermediate value theorem it vanishes in between. The zeros come in pairs θ, θ + π: the one-dimensional case
        of the Borsuk–Ulam theorem.
      </figcaption>
    </figure>
  );
}
