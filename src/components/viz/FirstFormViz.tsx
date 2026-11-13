"use client";

import { useState } from "react";

const R = Math.PI / 180;

/** Lengths on the sphere from a map: the first fundamental form E du² + 2F du dv + G dv² converts map steps into true lengths. */
export function FirstFormViz() {
  const [lat1, setLat1] = useState(60);
  const [lat2, setLat2] = useState(60);
  const [span, setSpan] = useState(90);
  const du = span * R, dv = (lat2 - lat1) * R;
  const N = 2000;
  let L = 0;
  for (let i = 0; i < N; i++) {
    const v = (lat1 + ((i + 0.5) / N) * (lat2 - lat1)) * R;
    L += Math.sqrt(Math.cos(v) ** 2 * du * du + dv * dv) / N;
  }
  const mapL = Math.hypot(du, dv);
  const c = Math.sin(lat1 * R) * Math.sin(lat2 * R) + Math.cos(lat1 * R) * Math.cos(lat2 * R) * Math.cos(du);
  const great = Math.acos(Math.max(-1, Math.min(1, c)));
  const W = 520, H = 220, x0 = 30, x1 = 490, y0 = 20, y1 = 200;
  const X = (u: number) => x0 + ((u + 180) / 360) * (x1 - x0), Y = (v: number) => y1 - ((v + 90) / 180) * (y1 - y0);
  const E = Math.cos(lat1 * R) ** 2;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>start latitude: <span className="mono">{lat1}°</span></span>
          <input type="range" min={-85} max={85} step={1} value={lat1} onChange={(e) => setLat1(Number(e.target.value))} /></label>
        <label><span>end latitude: <span className="mono">{lat2}°</span></span>
          <input type="range" min={-85} max={85} step={1} value={lat2} onChange={(e) => setLat2(Number(e.target.value))} /></label>
        <label><span>change in longitude: <span className="mono">{span}°</span></span>
          <input type="range" min={0} max={180} step={1} value={span} onChange={(e) => setSpan(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A latitude and longitude map with a straight segment drawn on it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
        {[-60, -30, 0, 30, 60].map((v) => <line key={`v${v}`} x1={x0} y1={Y(v)} x2={x1} y2={Y(v)} style={{ stroke: "var(--border)" }} />)}
        {[-120, -60, 0, 60, 120].map((u) => <line key={`u${u}`} x1={X(u)} y1={y0} x2={X(u)} y2={y1} style={{ stroke: "var(--border)" }} />)}
        {[-60, 0, 60].map((v) => <text key={`t${v}`} x={x0 - 4} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}°</text>)}
        <line x1={X(-span / 2)} y1={Y(lat1)} x2={X(span / 2)} y2={Y(lat2)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(-span / 2)} cy={Y(lat1)} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={X(span / 2)} cy={Y(lat2)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>at the start: E = cos²v = {E.toFixed(3)}, F = 0, G = 1</div>
        <div>length on the map = {mapL.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>true length of this path on the unit sphere = {L.toFixed(4)}</div>
        <div>shortest path between the two points (great circle) = {great.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The sphere is parametrised by longitude u and latitude v, with angles in radians. A step (du, dv) on the map has true
        length √(cos²v du² + dv²), so the map stretches distances east to west by 1/cos v. Integrating gives the true length
        of the straight map segment, which is never shorter than the great circle route.
      </figcaption>
    </figure>
  );
}
