"use client";

import { useState } from "react";

const NM = 400;
const coef = (n: number, p: number) => (2 * Math.sin(n * Math.PI * p)) / (n * n * Math.PI * Math.PI * p * (1 - p));

/** Kinetic and potential energy of a vibrating string slosh back and forth, but their sum never changes. */
export function WaveEnergyViz() {
  const [p, setP] = useState(0.5);
  const [t, setT] = useState(0.25);
  const En = Array.from({ length: NM }, (_, i) => { const n = i + 1, b = coef(n, p); return (n * n * Math.PI * Math.PI * b * b) / 4; });
  const ke = (s: number) => En.reduce((acc, e, i) => acc + e * Math.sin((i + 1) * Math.PI * s) ** 2, 0);
  const total = En.reduce((a, e) => a + e, 0);
  const K = ke(t), P = total - K;
  const W = 520, H = 220;
  const X = (s: number) => 30 + (s / 2) * 300, Y = (v: number) => 180 - (v / total) * 150;
  const ts = Array.from({ length: 201 }, (_, i) => (i / 200) * 2);
  const kes = ts.map(ke);
  const pk = ts.map((s, i) => `${i ? "L" : "M"}${X(s).toFixed(1)},${Y(kes[i]).toFixed(1)}`).join(" ");
  const pp = ts.map((s, i) => `${i ? "L" : "M"}${X(s).toFixed(1)},${Y(total - kes[i]).toFixed(1)}`).join(" ");
  const bar = (x: number, v: number, label: string, strong: boolean) => (
    <g>
      <rect x={x} y={Y(v)} width={34} height={180 - Y(v)} style={{ fill: strong ? "var(--accent)" : "var(--text-muted)" }} />
      <text x={x + 17} y={198} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{label}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>where the string is plucked: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={0.9} step={0.05} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={2} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Kinetic and potential energy of the string over time" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={180} x2={X(2)} y2={180} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(total)} x2={X(2)} y2={Y(total)} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
        <path d={pk} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={pp} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <line x1={X(t)} y1={20} x2={X(t)} y2={180} style={{ stroke: "var(--text-faint)" }} />
        <text x={X(0)} y={198} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = 0</text>
        <text x={X(2)} y={198} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = 2</text>
        {bar(380, K, "kinetic", true)}
        {bar(430, P, "potential", false)}
        <text x={380} y={Y(total) - 6} style={{ fill: "var(--text)", fontSize: 11 }}>total</text>
        <line x1={372} y1={Y(total)} x2={472} y2={Y(total)} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>kinetic ½∫uₜ² dx = {K.toFixed(3)}, potential ½∫uₓ² dx = {P.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>total energy = {total.toFixed(3)}</div>
      </div>
      <figcaption className="viz-caption">
        For the plucked string of the earlier lesson, computed from its first {NM} modes. The string starts at rest, so all
        its energy is potential; as it moves, energy passes into kinetic form and back. The total E = ½∫(uₜ² + c²uₓ²) dx is
        constant in time, which is the starting point of the energy method.
      </figcaption>
    </figure>
  );
}
