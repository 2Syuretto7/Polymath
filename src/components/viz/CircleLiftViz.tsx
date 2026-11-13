"use client";

import { useState } from "react";

const PATHS = [
  { label: "twice round", f: (t: number) => 2 * t },
  { label: "there and back", f: (t: number) => 0.7 * Math.sin(Math.PI * t) },
  { label: "once backwards", f: (t: number) => -t },
  { label: "wander", f: (t: number) => 1.6 * t - 0.5 * Math.sin(4 * Math.PI * t) },
];

/** The covering map from the line to the circle, s ↦ (cos 2πs, sin 2πs), and the unique lift of a path starting at 0. */
export function CircleLiftViz() {
  const [pi, setPi] = useState(0);
  const [t, setT] = useState(0.6);
  const P = PATHS[pi];
  const W = 520, H = 280, cx = 130, cy = 120, R = 80;
  const N = 200;
  const ts = Array.from({ length: Math.round(N * t) + 1 }, (_, i) => i / N);
  const s = P.f(t);
  const circ = (u: number): [number, number] => [cx + R * Math.cos(2 * Math.PI * u), cy - R * Math.sin(2 * Math.PI * u)];
  const lo = -2, hi = 3, LX = (v: number) => 260 + ((v - lo) / (hi - lo)) * 240, LY = 240;
  const [px, py] = circ(s);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Path">
        {PATHS.map((p, i) => <button key={p.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{p.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 6 }}>
        <label><span>time: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A path on the circle and its lift to the real line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 2 }} />
        <path d={ts.map((u, i) => { const r = R + 6 * P.f(u); const a = 2 * Math.PI * P.f(u); return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)},${(cy - r * Math.sin(a)).toFixed(1)}`; }).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px} cy={py} r={6} style={{ fill: "var(--accent)" }} />
        <circle cx={cx + R} cy={cy} r={4} style={{ fill: "var(--text)" }} />
        <text x={cx} y={cy + R + 26} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>the path on the circle</text>
        <line x1={LX(lo)} y1={LY} x2={LX(hi)} y2={LY} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {[-2, -1, 0, 1, 2, 3].map((k) => (
          <g key={k}>
            <line x1={LX(k)} y1={LY - 5} x2={LX(k)} y2={LY + 5} style={{ stroke: "var(--text-muted)" }} />
            <text x={LX(k)} y={LY + 20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>
          </g>
        ))}
        <path d={ts.map((u, i) => `${i ? "L" : "M"}${LX(P.f(u)).toFixed(1)},${(LY - 20 - 150 * u).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={LX(s)} cy={LY - 20 - 150 * t} r={6} style={{ fill: "var(--accent)" }} />
        <text x={380} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>the lift to ℝ, time running upwards</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        lift at this time: {s.toFixed(3)}{t === 1 ? (Math.abs(s - Math.round(s)) < 1e-6 ? `; the loop's lift ends at the integer ${Math.round(s)}, its number of turns` : "; this path is not a loop, so its lift need not end at an integer") : ""}
      </p>
      <figcaption className="viz-caption">
        Each point of the circle has one preimage in every interval [k, k + 1) of the line, and a small arc round it has a
        preimage made of disjoint copies of the arc. That is what makes the map a covering, and it lets any path starting at the base
        point be lifted, in exactly one way, to a path on the line starting at 0.
      </figcaption>
    </figure>
  );
}
