"use client";

import { useState } from "react";

const coef = (n: number, p: number) => (2 * Math.sin(n * Math.PI * p)) / (n * n * Math.PI * Math.PI * p * (1 - p));

/** A plucked string as a sum of standing waves, each vibrating at its own frequency. */
export function StringModesViz() {
  const [p, setP] = useState(0.3);
  const [N, setN] = useState(10);
  const [t, setT] = useState(0);
  const u = (x: number) => { let s = 0; for (let k = 1; k <= N; k++) s += coef(k, p) * Math.sin(k * Math.PI * x) * Math.cos(k * Math.PI * t); return s; };
  const u0 = (x: number) => (x < p ? x / p : (1 - x) / (1 - p));
  const W = 520, H = 230;
  const X = (x: number) => 30 + x * 300, Y = (v: number) => 90 - v * 65;
  const xs = Array.from({ length: 301 }, (_, i) => i / 300);
  const path = (g: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`).join(" ");
  const bars = Array.from({ length: N }, (_, i) => coef(i + 1, p));
  const bw = Math.min(14, 150 / N);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>where the string is plucked: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={0.9} step={0.05} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>number of modes: <span className="mono">{N}</span></span>
          <input type="range" min={1} max={30} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={2} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A plucked string and the amplitudes of its modes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(u0)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={path(u)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(0)} cy={Y(0)} r={4} style={{ fill: "var(--text)" }} />
        <circle cx={X(1)} cy={Y(0)} r={4} style={{ fill: "var(--text)" }} />
        <text x={X(0)} y={H - 8} style={{ fill: "var(--text-muted)", fontSize: 11 }}>string from x = 0 to x = 1, c = 1</text>
        <text x={360} y={22} style={{ fill: "var(--text)", fontSize: 12 }}>mode amplitudes aₙ</text>
        <line x1={355} y1={110} x2={510} y2={110} style={{ stroke: "var(--border)" }} />
        {bars.map((b, i) => (
          <rect key={i} x={358 + i * bw} y={b >= 0 ? 110 - b * 70 : 110} width={Math.max(1, bw - 2)} height={Math.abs(b) * 70} style={{ fill: b >= 0 ? "var(--accent)" : "var(--text-muted)" }} />
        ))}
        <text x={360} y={190} style={{ fill: "var(--text)", fontSize: 12 }}>a₁ = {coef(1, p).toFixed(3)}</text>
        <text x={360} y={208} style={{ fill: "var(--text)", fontSize: 12 }}>a₂ = {(Math.abs(coef(2, p)) < 5e-4 ? 0 : coef(2, p)).toFixed(3)}</text>
      </svg>
      <figcaption className="viz-caption">
        A string fixed at both ends, plucked into a triangle (dashed), is a sum of standing waves aₙ sin(nπx) cos(nπt). Mode n
        vibrates with frequency n/2, so every mode returns to its start at t = 2 and so does the string. Plucking at a point
        where a mode has a node, such as the middle for even modes, leaves that mode silent.
      </figcaption>
    </figure>
  );
}
