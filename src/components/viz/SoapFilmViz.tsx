"use client";

import { useState } from "react";

const XSTAR = 1.19967864;

function root(h: number, lo: number, hi: number) {
  const g = (x: number) => x / Math.cosh(x) - h;
  let a = lo, b = hi;
  for (let i = 0; i < 80; i++) {
    const m = (a + b) / 2;
    if (g(a) * g(m) <= 0) b = m; else a = m;
  }
  return (a + b) / 2;
}

/** A soap film between two coaxial rings: two catenoids, the flat discs, and the separation at which the film must break. */
export function SoapFilmViz() {
  const [h, setH] = useState(0.5);
  const hmax = XSTAR / Math.cosh(XSTAR);
  const exists = h < hmax;
  const sols = exists ? [root(h, 1e-6, XSTAR), root(h, XSTAR, 30)].map((x) => h / x) : [];
  const area = (a: number) => Math.PI * a * (2 * h + a * Math.sinh((2 * h) / a));
  const discs = 2 * Math.PI;
  const W = 520, H = 250, cx = W / 2, cy = H / 2, s = 95;
  const prof = (a: number, sgn: number) => Array.from({ length: 101 }, (_, i) => -h + (2 * h * i) / 100).map((z, i) => `${i ? "L" : "M"}${(cx + z * s * 2).toFixed(1)},${(cy - sgn * a * Math.cosh(z / a) * s).toFixed(1)}`).join(" ");
  const best = exists && area(sols[0]) < discs ? "the wide catenoid" : "the two flat discs";
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>half the distance between rings of radius 1: <span className="mono">{h.toFixed(3)}</span></span>
          <input type="range" min={0.05} max={0.8} step={0.005} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Side view of two rings and the catenoids spanning them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={cx - 0.85 * 2 * s} y1={cy} x2={cx + 0.85 * 2 * s} y2={cy} style={{ stroke: "var(--border)", strokeDasharray: "4 3" }} />
        {[-1, 1].map((sg) => <line key={sg} x1={cx + sg * h * 2 * s} y1={cy - s} x2={cx + sg * h * 2 * s} y2={cy + s} style={{ stroke: "var(--text)", strokeWidth: 4 }} />)}
        {sols.map((a, i) => [1, -1].map((sg) => (
          <path key={`${i}${sg}`} d={prof(a, sg)} style={{ fill: "none", stroke: i === 0 ? "var(--accent)" : "var(--text-muted)", strokeWidth: i === 0 ? 3 : 2, strokeDasharray: i === 0 ? undefined : "5 4" }} />
        )))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        {exists ? (
          <>
            <div>wide catenoid: neck radius {sols[0].toFixed(3)}, area {area(sols[0]).toFixed(3)}</div>
            <div>narrow catenoid (unstable): neck radius {sols[1].toFixed(3)}, area {area(sols[1]).toFixed(3)}</div>
          </>
        ) : (
          <div>no catenoid spans the rings: they are more than {(2 * hmax).toFixed(3)} apart</div>
        )}
        <div>two flat discs: area 2π = {discs.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>least area: {best}</div>
      </div>
      <figcaption className="viz-caption">
        A soap film minimises area, so it is a minimal surface, with mean curvature H = 0. Between two rings the candidates
        are catenoids r = a cosh(z/a). Pull the rings apart and the two catenoids approach each other, merge at a separation of
        about 1.325 times the radius, and vanish; the film snaps into two discs. Even before that, the discs have less area.
      </figcaption>
    </figure>
  );
}
