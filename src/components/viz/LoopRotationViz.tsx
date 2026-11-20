"use client";

import { useState } from "react";

const SP = [
  { name: "sphere, K = 1", K: 1, area: (r: number) => 2 * Math.PI * (1 - Math.cos(r)) },
  { name: "plane, K = 0", K: 0, area: (r: number) => Math.PI * r * r },
  { name: "hyperbolic plane, K = −1", K: -1, area: (r: number) => 2 * Math.PI * (Math.cosh(r) - 1) },
];

/** Parallel transport around a geodesic circle turns a vector by K times the enclosed area. */
export function LoopRotationViz() {
  const [s, setS] = useState(0);
  const [r100, setR] = useState(60);
  const r = r100 / 100;
  const A = SP[s].area(r);
  const ang = SP[s].K * A;
  const cx = 200, cy = 100, R = 30 + r100 * 0.45;
  const pts = Array.from({ length: 12 }, (_, i) => i / 12);
  const arrow = (px: number, py: number, th: number, key: string | number, strong: boolean) => {
    const L = 22, ex = px + L * Math.cos(th), ey = py - L * Math.sin(th);
    return <line key={key} x1={px} y1={py} x2={ex} y2={ey} markerEnd={strong ? "url(#lr-head-s)" : "url(#lr-head)"} style={{ stroke: strong ? "var(--danger)" : "var(--accent)", strokeWidth: strong ? 2.5 : 1.5 }} />;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space" style={{ flexWrap: "wrap" }}>
        {SP.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>radius r = {r.toFixed(2)} <input type="range" min={5} max={150} value={r100} onChange={(e) => setR(Number(e.target.value))} aria-label="radius" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A loop with a vector transported around it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="lr-head" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--accent)" }} /></marker>
          <marker id="lr-head-s" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" style={{ fill: "var(--danger)" }} /></marker>
        </defs>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "var(--accent-soft)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        {pts.map((t, i) => {
          const a = 2 * Math.PI * t;
          return arrow(cx + R * Math.cos(a), cy - R * Math.sin(a), Math.PI / 2 + t * ang, i, false);
        })}
        {arrow(cx + R, cy, Math.PI / 2 + ang, "end", true)}
        <circle cx={cx + R} cy={cy} r={3.5} style={{ fill: "var(--text)" }} />
        <text x={cx + R + 10} y={cy + 32} style={{ fill: "var(--text)", fontSize: 11 }}>start</text>
        <text x={360} y={60} style={{ fill: "var(--text-muted)", fontSize: 11 }}>violet: the vector along the way</text>
        <text x={360} y={78} style={{ fill: "var(--danger)", fontSize: 11 }}>red: the vector on return</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Enclosed area A = {A.toFixed(3)}. Rotation on return = {(ang * 180 / Math.PI).toFixed(1)}°. Rotation ÷ area = {SP[s].K === 0 ? "0" : (ang / A).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        A vector is carried by parallel transport once round a geodesic circle of radius r, anticlockwise. The picture is a
        schematic of the loop, with each vector drawn at the angle it has turned so far. By Gauss–Bonnet the vector comes
        back turned by K·A, so rotation divided by area recovers the curvature, however small the loop.
      </figcaption>
    </figure>
  );
}
