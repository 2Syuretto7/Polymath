"use client";

import { useState } from "react";

type F = { name: string; f: (x: number, y: number) => [number, number]; J: (x: number, y: number) => [number, number, number, number] };
const FS: F[] = [
  { name: "z²", f: (x, y) => [x * x - y * y, 2 * x * y], J: (x, y) => [2 * x, -2 * y, 2 * y, 2 * x] },
  { name: "eᶻ", f: (x, y) => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)], J: (x, y) => [Math.exp(x) * Math.cos(y), -Math.exp(x) * Math.sin(y), Math.exp(x) * Math.sin(y), Math.exp(x) * Math.cos(y)] },
  { name: "z̄", f: (x, y) => [x, -y], J: () => [1, 0, 0, -1] },
  { name: "x + 2iy", f: (x, y) => [x, 2 * y], J: () => [1, 0, 0, 2] },
];

/** A small square near z₀ and its image: holomorphic maps send it to a nearly square shape, turned and scaled. */
export function LocalSquareViz() {
  const [fi, setFi] = useState(0);
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(0.5);
  const [s, setS] = useState(0.4);
  const F = FS[fi];
  const [ux, uy, vx, vy] = F.J(x0, y0);
  const cr1 = Math.abs(ux - vy) < 1e-9, cr2 = Math.abs(uy + vx) < 1e-9;
  const N = 30;
  const edge = (a: [number, number], b: [number, number]) => Array.from({ length: N + 1 }, (_, k) => [a[0] + ((b[0] - a[0]) * k) / N, a[1] + ((b[1] - a[1]) * k) / N] as [number, number]);
  const h = s / 2;
  const c: [number, number][] = [[x0 - h, y0 - h], [x0 + h, y0 - h], [x0 + h, y0 + h], [x0 - h, y0 + h]];
  const edges = [edge(c[0], c[1]), edge(c[1], c[2]), edge(c[2], c[3]), edge(c[3], c[0])];
  const img = edges.map((e) => e.map(([x, y]) => F.f(x, y)));
  const [fx, fy] = F.f(x0, y0);
  let R = 0;
  for (const e of img) for (const [u, v] of e) R = Math.max(R, Math.abs(u - fx), Math.abs(v - fy));
  R = Math.max(R * 1.25, 1e-6);
  const P = 220;
  const panel = (pts: [number, number][][], cx: number, cy: number, half: number) => {
    const X = (u: number) => P / 2 + ((u - cx) / half) * (P / 2 - 10);
    const Y = (v: number) => P / 2 - ((v - cy) / half) * (P / 2 - 10);
    const path = (e: [number, number][]) => e.map(([u, v], k) => `${k ? "L" : "M"}${X(u).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
    return (
      <>
        <rect x={0} y={0} width={P} height={P} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <path d={pts.map(path).join(" ")} style={{ fill: "var(--accent)", fillOpacity: 0.12, stroke: "var(--border)", strokeWidth: 1.5 }} />
        <path d={path(pts[0])} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <path d={path(pts[3])} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
      </>
    );
  };
  const k = Math.hypot(ux, vx), ang = (Math.atan2(vx, ux) * 180) / Math.PI;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>x₀: <span className="mono">{x0}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>y₀: <span className="mono">{y0}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
        <label><span>side of square: <span className="mono">{s}</span></span><input type="range" min={0.05} max={0.8} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${2 * P + 40} ${P + 20}`} role="img" aria-label="A small square and its image under f" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <g transform="translate(0,0)">{panel(edges, x0, y0, s * 0.8)}</g>
        <text x={P + 20} y={P / 2 + 5} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 16 }}>→</text>
        <g transform={`translate(${P + 40},0)`}>{panel(img, fx, fy, R)}</g>
        <text x={P / 2} y={P + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>square near z₀ (zoomed)</text>
        <text x={P + 40 + P / 2} y={P + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>its image near f(z₀) (zoomed)</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>u_x = {ux.toFixed(3)}, u_y = {uy.toFixed(3)}, v_x = {vx.toFixed(3)}, v_y = {vy.toFixed(3)}</div>
        <div>u_x = v_y: {cr1 ? "yes" : "no"}; u_y = −v_x: {cr2 ? "yes" : "no"}</div>
        <div>{cr1 && cr2 ? (k < 1e-9 ? "f′(z₀) = 0: angles are not preserved here." : `f′(z₀) = ${ux.toFixed(3)} ${vx < 0 ? "−" : "+"} ${Math.abs(vx).toFixed(3)}i: scale by ${k.toFixed(3)}, turn by ${ang.toFixed(1)}°`) : "The Cauchy–Riemann equations fail: f is not complex differentiable here."}</div>
      </div>
      <figcaption className="viz-caption">
        The two thick edges meet at a right angle in the square. Shrink the square: when the Cauchy–Riemann equations hold and
        f′(z₀) ≠ 0, the image becomes a small square, turned and scaled, with the thick edges still at a right angle in the
        same order. For z̄ the order flips, and for x + 2iy the square is stretched into a rectangle.
      </figcaption>
    </figure>
  );
}
