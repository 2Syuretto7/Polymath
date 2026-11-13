"use client";

import { useState } from "react";
import { abs, add, div, mul, type C } from "./complexTools";

const rot: C = [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)];
const FS: { name: string; f: (z: C) => C; d0: number }[] = [
  { name: "(1 + i)z/√2", f: (z) => mul(rot, z), d0: 1 },
  { name: "z²", f: (z) => mul(z, z), d0: 0 },
  { name: "z(z + ½)/(1 + ½z)", f: (z) => div(mul(z, add(z, [0.5, 0])), add([1, 0], mul([0.5, 0], z))), d0: 0.5 },
  { name: "z(1 + z)/2", f: (z) => mul([0.5, 0], mul(z, add([1, 0], z))), d0: 0.5 },
];

/** The Schwarz lemma: a holomorphic self-map of the disc fixing 0 sends each circle |z| = r inside itself. */
export function SchwarzViz() {
  const [fi, setFi] = useState(2);
  const [r, setR] = useState(0.7);
  const F = FS[fi];
  const W = 260, X = (x: number) => W / 2 + x * (W / 2 - 10), Y = (y: number) => W / 2 - y * (W / 2 - 10);
  const circ = (rr: number): C[] => Array.from({ length: 361 }, (_, k) => [rr * Math.cos((Math.PI * k) / 180), rr * Math.sin((Math.PI * k) / 180)]);
  const path = (pts: C[]) => pts.map(([a, b], k) => `${k ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ");
  const Mr = (rr: number) => Math.max(...circ(rr).map((z) => abs(F.f(z))));
  const m = Mr(r);
  // graph of M(r) against r
  const G = 230, gx = (u: number) => 30 + u * (G - 40), gy = (v: number) => G - 20 - v * (G - 40);
  const curve = Array.from({ length: 51 }, (_, k) => { const u = k / 50 * 0.98; return `${k ? "L" : "M"}${gx(u).toFixed(1)},${gy(Mr(u)).toFixed(1)}`; }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, k) => <button key={f.name} type="button" aria-pressed={fi === k} className={fi === k ? "seg is-on" : "seg"} onClick={() => setFi(k)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius r: <span className="mono">{r.toFixed(2)}</span></span><input type="range" min={0.1} max={0.95} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W + 30 + G} ${W + 20}`} role="img" aria-label="The circle of radius r and its image, and the graph of the largest modulus on each circle" style={{ width: "100%", maxWidth: 560, display: "block", margin: "6px auto" }}>
        <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <path d={path(circ(1))} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 1.5 }} />
        <path d={path(circ(r))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <path d={path(circ(r).map(F.f))} style={{ fill: "var(--accent)", fillOpacity: 0.15, stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
        <text x={W / 2} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: |z| = r; solid: its image</text>
        <g transform={`translate(${W + 30},0)`}>
          <line x1={gx(0)} y1={gy(0)} x2={gx(1)} y2={gy(0)} style={{ stroke: "var(--border)" }} />
          <line x1={gx(0)} y1={gy(0)} x2={gx(0)} y2={gy(1)} style={{ stroke: "var(--border)" }} />
          <line x1={gx(0)} y1={gy(0)} x2={gx(1)} y2={gy(1)} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
          <text x={gx(0.62)} y={gy(0.78)} style={{ fill: "var(--text-muted)", fontSize: 11 }}>M = r</text>
          <path d={curve} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
          <circle cx={gx(r)} cy={gy(m)} r={5} style={{ fill: "var(--text)" }} />
          <text x={gx(0)} y={gy(0) + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
          <text x={gx(1)} y={gy(0) + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
          <text x={gx(0) - 6} y={gy(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
          <text x={gx(0.5)} y={W + 15} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>largest |f| on |z| = r, against r</text>
        </g>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>largest |f(z)| on |z| = {r.toFixed(2)}: {m.toFixed(3)} {m <= r + 1e-9 ? "≤" : ">"} {r.toFixed(2)}</div>
        <div>|f′(0)| = {F.d0.toFixed(2)} {F.d0 === 1 ? ": equality, and f is a rotation" : "< 1"}</div>
      </div>
      <figcaption className="viz-caption">
        Each f maps the unit disc into itself and fixes 0. The Schwarz lemma says the image of every circle |z| = r stays
        within that circle, so the graph never rises above the diagonal, and |f′(0)| ≤ 1. Equality anywhere forces a rotation.
      </figcaption>
    </figure>
  );
}
