"use client";

import { useState } from "react";

type V3 = [number, number, number];
type S = { label: string; formula: string; u: [number, number]; v: [number, number]; x: (u: number, v: number) => V3; uName: string; vName: string };
const SURFACES: S[] = [
  { label: "sphere", formula: "(cos v cos u, cos v sin u, sin v)", u: [0, 2 * Math.PI], v: [-Math.PI / 2, Math.PI / 2], x: (u, v) => [Math.cos(v) * Math.cos(u), Math.cos(v) * Math.sin(u), Math.sin(v)], uName: "longitude u", vName: "latitude v" },
  { label: "torus", formula: "((2 + 0.7 cos v) cos u, (2 + 0.7 cos v) sin u, 0.7 sin v)", u: [0, 2 * Math.PI], v: [0, 2 * Math.PI], x: (u, v) => [(2 + 0.7 * Math.cos(v)) * Math.cos(u), (2 + 0.7 * Math.cos(v)) * Math.sin(u), 0.7 * Math.sin(v)], uName: "u", vName: "v" },
  { label: "cone", formula: "(v cos u, v sin u, v)", u: [0, 2 * Math.PI], v: [0, 1.5], x: (u, v) => [v * Math.cos(u), v * Math.sin(u), v], uName: "u", vName: "v" },
  { label: "helicoid", formula: "(v cos u, v sin u, 0.4u)", u: [0, 2 * Math.PI], v: [-1.2, 1.2], x: (u, v) => [v * Math.cos(u), v * Math.sin(u), 0.4 * u], uName: "u", vName: "v" },
];

const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: V3) => Math.hypot(a[0], a[1], a[2]);

/** A parametrised surface patch: coordinate curves, the partial derivatives, and where they fail to be independent. */
export function ParamPatchViz() {
  const [si, setSi] = useState(0);
  const [a, setA] = useState(0.3);
  const [b, setB] = useState(0.7);
  const [phi, setPhi] = useState(0.5);
  const S = SURFACES[si];
  const U = (s: number) => S.u[0] + s * (S.u[1] - S.u[0]), V = (s: number) => S.v[0] + s * (S.v[1] - S.v[0]);
  const u = U(a), v = V(b);
  const h = 1e-5;
  const p = S.x(u, v);
  const xu: V3 = S.x(u + h, v).map((c, i) => (c - p[i]) / h) as V3;
  const xv: V3 = S.x(u, v + h).map((c, i) => (c - p[i]) / h) as V3;
  const n = norm(cross(xu, xv));
  const regular = n > 1e-3;
  const el = 0.45;
  const proj = ([x, y, z]: V3): [number, number] => {
    const x1 = x * Math.cos(phi) - y * Math.sin(phi), y1 = x * Math.sin(phi) + y * Math.cos(phi);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el))];
  };
  const K = 14, M = 60;
  const lines: [number, number][][] = [];
  for (let i = 0; i <= K; i++) {
    lines.push(Array.from({ length: M + 1 }, (_, j) => proj(S.x(U(i / K), V(j / M)))));
    lines.push(Array.from({ length: M + 1 }, (_, j) => proj(S.x(U(j / M), V(i / K)))));
  }
  const all = lines.flat();
  const minX = Math.min(...all.map((q) => q[0])), maxX = Math.max(...all.map((q) => q[0]));
  const minY = Math.min(...all.map((q) => q[1])), maxY = Math.max(...all.map((q) => q[1]));
  const W = 520, H = 300;
  const sc = Math.min((W - 40) / (maxX - minX), (H - 40) / (maxY - minY));
  const X = (x: number) => (W - sc * (maxX - minX)) / 2 + (x - minX) * sc, Y = (y: number) => (H - sc * (maxY - minY)) / 2 + (y - minY) * sc;
  const path = (q: [number, number][]) => q.map((r, i) => `${i ? "L" : "M"}${X(r[0]).toFixed(1)},${Y(r[1]).toFixed(1)}`).join(" ");
  const [qx, qy] = proj(p);
  const tip = (w: V3) => proj([p[0] + 0.35 * w[0], p[1] + 0.35 * w[1], p[2] + 0.35 * w[2]]);
  const f = (x: number) => (Math.abs(x) < 5e-4 ? "0.000" : x.toFixed(3));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Surface">
        {SURFACES.map((q, i) => <button key={q.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{q.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>{S.uName}: <span className="mono">{u.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>{S.vName}: <span className="mono">{v.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The surface drawn by its coordinate curves, with the two partial derivatives at a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {lines.map((q, i) => <path key={i} d={path(q)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        <path d={path(Array.from({ length: M + 1 }, (_, j) => proj(S.x(U(j / M), v))))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={path(Array.from({ length: M + 1 }, (_, j) => proj(S.x(u, V(j / M)))))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {[xu, xv].map((w, i) => {
          const [tx, ty] = tip(w);
          return (
            <g key={i}>
              <line x1={X(qx)} y1={Y(qy)} x2={X(tx)} y2={Y(ty)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
              <text x={X(tx) + 5} y={Y(ty) - 5} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{i ? "xᵥ" : "xᵤ"}</text>
            </g>
          );
        })}
        <circle cx={X(qx)} cy={Y(qy)} r={5} style={{ fill: regular ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>x(u, v) = {S.formula}</div>
        <div>xᵤ = ({f(xu[0])}, {f(xu[1])}, {f(xu[2])}), xᵥ = ({f(xv[0])}, {f(xv[1])}, {f(xv[2])})</div>
        <div style={{ fontWeight: 700 }}>|xᵤ × xᵥ| = {f(n)}: {regular ? "independent, so the patch is regular here" : "dependent, so the patch is not regular here"}</div>
      </div>
      <figcaption className="viz-caption">
        A parametrised surface is a smooth map x(u, v) from a region of the plane. The thick lines are the coordinate curves
        through the point, and xᵤ, xᵥ their velocities. The patch is regular where these are linearly independent, that is,
        where xᵤ × xᵥ ≠ 0. Latitude and longitude fail at the poles, and the cone fails at its apex.
      </figcaption>
    </figure>
  );
}
