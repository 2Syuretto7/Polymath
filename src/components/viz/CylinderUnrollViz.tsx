"use client";

import { useState } from "react";

type V3 = [number, number, number];

/** Rolling a sheet into a cylinder is an isometry: straight segments become helices of the same length. */
export function CylinderUnrollViz() {
  const [ang, setAng] = useState(25);
  const [len, setLen] = useState(5);
  const [phi, setPhi] = useState(0.4);
  const a = (ang * Math.PI) / 180;
  const u0 = 0.4, v0 = 0.3;
  const N = 200;
  const seg = Array.from({ length: N + 1 }, (_, i) => [u0 + (i / N) * len * Math.cos(a), v0 + (i / N) * len * Math.sin(a)] as [number, number]);
  const inStrip = seg.filter(([, v]) => v <= 3);
  const cyl = ([u, v]: [number, number]): V3 => [Math.cos(u), Math.sin(u), v];
  const el = 0.35;
  const proj = ([x, y, z]: V3): [number, number] => {
    const x1 = x * Math.cos(phi) - y * Math.sin(phi), y1 = x * Math.sin(phi) + y * Math.cos(phi);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el))];
  };
  let L3 = 0;
  for (let i = 1; i < inStrip.length; i++) {
    const p = cyl(inStrip[i]), q = cyl(inStrip[i - 1]);
    L3 += Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
  }
  const L2 = inStrip.length > 1 ? Math.hypot(inStrip[inStrip.length - 1][0] - u0, inStrip[inStrip.length - 1][1] - v0) : 0;
  const W = 520, H = 260;
  const PX = (u: number) => 20 + u * 34, PY = (v: number) => 230 - v * 60;
  const CX = (x: number) => 410 + x * 60, CY = (y: number) => 200 + y * 60;
  const segPath = inStrip.map(([u, v], i) => `${i ? "L" : "M"}${PX(u).toFixed(1)},${PY(v).toFixed(1)}`).join(" ");
  const helix = inStrip.map((q, i) => { const [x, y] = proj(cyl(q)); return `${i ? "L" : "M"}${CX(x).toFixed(1)},${CY(y).toFixed(1)}`; }).join(" ");
  const ring = (v: number) => Array.from({ length: 61 }, (_, i) => { const [x, y] = proj(cyl([(i / 60) * 2 * Math.PI, v])); return `${i ? "L" : "M"}${CX(x).toFixed(1)},${CY(y).toFixed(1)}`; }).join(" ");
  const seam = [0, 3].map((v) => proj(cyl([0, v])));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>angle of the segment: <span className="mono">{ang}°</span></span>
          <input type="range" min={0} max={80} step={1} value={ang} onChange={(e) => setAng(Number(e.target.value))} /></label>
        <label><span>length of the segment: <span className="mono">{len.toFixed(1)}</span></span>
          <input type="range" min={0.5} max={6} step={0.1} value={len} onChange={(e) => setLen(Number(e.target.value))} /></label>
        <label><span>turn the cylinder: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A strip of the plane and the cylinder it rolls up into" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={PX(0)} y={PY(3)} width={PX(2 * Math.PI) - PX(0)} height={PY(0) - PY(3)} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
        <path d={segPath} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={PX(Math.PI)} y={PY(0) + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>plane strip, width 2π</text>
        <path d={ring(0)} style={{ fill: "none", stroke: "var(--text-faint)" }} />
        <path d={ring(3)} style={{ fill: "none", stroke: "var(--text-faint)" }} />
        <line x1={CX(seam[0][0])} y1={CY(seam[0][1])} x2={CX(seam[1][0])} y2={CY(seam[1][1])} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <path d={helix} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={410} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>cylinder of radius 1</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>length in the plane = {L2.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>length on the cylinder = {L3.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The map (u, v) ↦ (cos u, sin u, v) wraps the strip round the cylinder. Its first fundamental form is du² + dv², the same
        as the plane&rsquo;s, so it preserves the length of every curve: it is a local isometry. Straight segments become
        helices, which are therefore the shortest paths on the cylinder between nearby points.
      </figcaption>
    </figure>
  );
}
