"use client";

import { useState } from "react";

type V3 = [number, number, number];

/** Parallel transport round a circle of latitude: the vector comes back rotated by the area of the cap it encloses. */
export function ParallelTransportViz() {
  const [latDeg, setLatDeg] = useState(40);
  const [u, setU] = useState(0.6);
  const lat = (latDeg * Math.PI) / 180;
  const az = 0.3, el = 0.55;
  const proj = ([x, y, z]: V3): [number, number, number] => {
    const x1 = x * Math.cos(az) - y * Math.sin(az), y1 = x * Math.sin(az) + y * Math.cos(az);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el)), -(y1 * Math.cos(el) - z * Math.sin(el))];
  };
  const pt = (f: number): V3 => [Math.cos(lat) * Math.cos(f), Math.cos(lat) * Math.sin(f), Math.sin(lat)];
  const vec = (f: number): V3 => {
    const psi = Math.PI / 2 - f * Math.sin(lat);
    const e: V3 = [-Math.sin(f), Math.cos(f), 0];
    const n: V3 = [-Math.sin(lat) * Math.cos(f), -Math.sin(lat) * Math.sin(f), Math.cos(lat)];
    return [Math.cos(psi) * e[0] + Math.sin(psi) * n[0], Math.cos(psi) * e[1] + Math.sin(psi) * n[1], Math.cos(psi) * e[2] + Math.sin(psi) * n[2]];
  };
  const cx = 200, cy = 140, r = 110, L = 0.35;
  const phi = u * 2 * Math.PI;
  const circle = Array.from({ length: 121 }, (_, i) => proj(pt((i / 120) * 2 * Math.PI)));
  const arrow = (f: number, strong: boolean, key: string) => {
    const a = pt(f), v = vec(f);
    const [x1, y1, z1] = proj(a), [x2, y2] = proj([a[0] + L * v[0], a[1] + L * v[1], a[2] + L * v[2]]);
    const vis = z1 >= -0.05;
    return (
      <g key={key} style={{ opacity: strong ? 1 : vis ? 0.55 : 0.25 }}>
        <line x1={cx + r * x1} y1={cy + r * y1} x2={cx + r * x2} y2={cy + r * y2} style={{ stroke: strong ? "var(--accent)" : "var(--text-muted)", strokeWidth: strong ? 3.5 : 2 }} />
        <circle cx={cx + r * x2} cy={cy + r * y2} r={strong ? 4 : 2.5} style={{ fill: strong ? "var(--accent)" : "var(--text-muted)" }} />
      </g>
    );
  };
  const ghosts = Array.from({ length: 12 }, (_, i) => (i / 12) * 2 * Math.PI).filter((f) => f <= phi + 1e-9);
  const turn = phi * Math.sin(lat);
  const holonomy = 2 * Math.PI * (1 - Math.sin(lat));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>latitude of the circle: <span className="mono">{latDeg}°</span></span>
          <input type="range" min={0} max={85} step={1} value={latDeg} onChange={(e) => setLatDeg(Number(e.target.value))} /></label>
        <label><span>distance round the circle: <span className="mono">{(u * 360).toFixed(0)}°</span></span>
          <input type="range" min={0} max={1} step={0.005} value={u} onChange={(e) => setU(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 280" role="img" aria-label="A vector carried by parallel transport round a circle of latitude" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={r} style={{ fill: "var(--bg)", stroke: "var(--border)", strokeWidth: 1.5 }} />
        <path d={circle.map((q, i) => `${i ? "L" : "M"}${(cx + r * q[0]).toFixed(1)},${(cy + r * q[1]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
        {ghosts.map((f, i) => arrow(f, false, `g${i}`))}
        {arrow(phi, true, "now")}
        <text x={340} y={60} style={{ fill: "var(--text)", fontSize: 13 }}>vector starts pointing north</text>
        <text x={340} y={90} style={{ fill: "var(--text)", fontSize: 13 }}>turned against the local</text>
        <text x={340} y={108} style={{ fill: "var(--text)", fontSize: 13 }}>east and north: {((turn * 180) / Math.PI).toFixed(1)}°</text>
        <text x={340} y={140} style={{ fill: "var(--text)", fontSize: 13 }}>after a full circuit:</text>
        <text x={340} y={158} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>rotation {((holonomy * 180) / Math.PI).toFixed(1)}°</text>
        <text x={340} y={190} style={{ fill: "var(--text)", fontSize: 13 }}>area of the cap above</text>
        <text x={340} y={208} style={{ fill: "var(--text)", fontSize: 13 }}>the circle: {holonomy.toFixed(4)}</text>
      </svg>
      <figcaption className="viz-caption">
        Parallel transport moves a tangent vector along a curve with zero covariant derivative: it changes only as much as
        needed to stay tangent. Round a circle of latitude λ the vector turns, relative to east and north, at rate sin λ per
        radian, and after one circuit it is rotated by 2π(1 − sin λ), which equals the area of the cap enclosed, since K = 1.
        On the equator, a geodesic, the enclosed hemisphere has area 2π, a full turn, so the vector returns unchanged.
      </figcaption>
    </figure>
  );
}
