"use client";

import { useState } from "react";

// F = (−y³, x³, yz), curl F = (z, 0, 3x² + 3y²)
const SURF = [
  { name: "flat disc", g: () => 0, gr: () => 0 },
  { name: "dome z = h(1 − r²)", g: (r: number, h: number) => h * (1 - r * r), gr: (r: number, h: number) => -2 * h * r },
  { name: "cone z = h(1 − r)", g: (r: number, h: number) => h * (1 - r), gr: (_r: number, h: number) => -h },
];

/** Stokes’s theorem: every surface with the same boundary circle has the same flux of curl F, equal to the circulation round the circle. */
export function CapStokesViz() {
  const [si, setSi] = useState(1);
  const [h, setH] = useState(1);
  const S = SURF[si];
  // flux of curl F through the graph z = g(r), upward normal (−g_x, −g_y, 1)
  const NR = 200, NT = 200;
  let flux = 0;
  for (let i = 0; i < NR; i++) for (let j = 0; j < NT; j++) {
    const r = (i + 0.5) / NR, th = (2 * Math.PI * (j + 0.5)) / NT;
    const x = r * Math.cos(th), y = r * Math.sin(th), z = S.g(r, h), gr = S.gr(r, h);
    const gx = gr * Math.cos(th), gy = gr * Math.sin(th);
    const cx = z, cy = 0, cz = 3 * (x * x + y * y);
    flux += (-cx * gx - cy * gy + cz) * r * (1 / NR) * ((2 * Math.PI) / NT);
  }
  let circ = 0;
  for (let j = 0; j < 2000; j++) {
    const t = (2 * Math.PI * (j + 0.5)) / 2000, x = Math.cos(t), y = Math.sin(t), dt = (2 * Math.PI) / 2000;
    circ += (-(y ** 3) * -Math.sin(t) + x ** 3 * Math.cos(t)) * dt;
  }
  const W = 480, H = 200, X = (r: number) => W / 2 + r * 180, Y = (z: number) => H - 30 - z * 70;
  const prof = Array.from({ length: 81 }, (_, i) => -1 + i / 40).map((r, i) => `${i ? "L" : "M"}${X(r).toFixed(1)},${Y(S.g(Math.abs(r), h)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Surface">
        {SURF.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{s.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>height h: <span className="mono">{h}</span></span><input type="range" min={0} max={2} step={0.25} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Side view of a surface whose boundary is the unit circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <ellipse cx={W / 2} cy={Y(0)} rx={180} ry={18} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <path d={prof} style={{ fill: "var(--accent)", fillOpacity: 0.12, stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={X(1) + 6} y={Y(0) + 4} style={{ fill: "var(--accent)", fontSize: 12 }}>boundary circle</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>flux of curl F through the surface: {flux.toFixed(4)}</div>
        <div>circulation of F round the circle: {circ.toFixed(4)}</div>
        <div>3π/2 = {(1.5 * Math.PI).toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        F = (−y³, x³, yz) and curl F = (z, 0, 3x² + 3y²). Change the surface and its height: the flux stays the same, because
        by Stokes&rsquo;s theorem it equals the integral of F round the boundary, which has not moved. In the language of forms,
        ∫_S dω = ∫_∂S ω.
      </figcaption>
    </figure>
  );
}
