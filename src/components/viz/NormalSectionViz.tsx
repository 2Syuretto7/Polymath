"use client";

import { useState } from "react";

/** The second fundamental form at a point: the normal section in direction θ bends with curvature II(w). */
export function NormalSectionViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0.4);
  const [c, setC] = useState(-0.5);
  const [deg, setDeg] = useState(30);
  const t = (deg * Math.PI) / 180;
  const ct = Math.cos(t), st = Math.sin(t);
  const kn = a * ct * ct + 2 * b * ct * st + c * st * st;
  const W = 520, H = 230;
  const L = { cx: 110, cy: 115, r: 90 };
  const R = { x0: 240, x1: 510, cy: 130, s: 75 };
  const PX = (s: number) => (R.x0 + R.x1) / 2 + s * R.s, PY = (z: number) => R.cy - z * R.s;
  const prof = Array.from({ length: 121 }, (_, i) => -1.7 + (3.4 * i) / 120).map((s, i) => {
    const z = 0.5 * kn * s * s;
    return `${i ? "L" : "M"}${PX(s).toFixed(1)},${PY(Math.max(-1.4, Math.min(1.4, z))).toFixed(1)}`;
  }).join(" ");
  const rad = Math.abs(kn) > 1e-3 ? 1 / kn : Infinity;
  const level = (sgn: number) => Array.from({ length: 361 }, (_, i) => (i * Math.PI) / 180).map((th) => {
    const q = a * Math.cos(th) ** 2 + 2 * b * Math.cos(th) * Math.sin(th) + c * Math.sin(th) ** 2;
    return sgn * q > 1e-6 ? [th, 1 / Math.sqrt(sgn * q)] : null;
  });
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>e: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={-2} max={2} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>f: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={-2} max={2} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>g: <span className="mono">{c.toFixed(2)}</span></span>
          <input type="range" min={-2} max={2} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
        <label><span>direction θ: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={180} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The tangent plane with a chosen direction, and the normal section in that direction" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={L.cx} cy={L.cy} r={L.r} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
        {[1, -1].map((sgn) => {
          const pts = level(sgn);
          const segs: string[] = [];
          let cur = "";
          pts.forEach((p) => {
            if (!p || p[1] > 3) { if (cur) segs.push(cur); cur = ""; return; }
            const x = L.cx + 30 * p[1] * Math.cos(p[0]), y = L.cy - 30 * p[1] * Math.sin(p[0]);
            cur += `${cur ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)} `;
          });
          if (cur) segs.push(cur);
          return segs.map((d, i) => <path key={`${sgn}-${i}`} d={d} style={{ fill: "none", stroke: sgn > 0 ? "var(--text-muted)" : "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: sgn > 0 ? undefined : "4 3" }} />);
        })}
        <line x1={L.cx - L.r * ct} y1={L.cy + L.r * st} x2={L.cx + L.r * ct} y2={L.cy - L.r * st} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={L.cx} y={L.cy + L.r + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>tangent plane, from above</text>
        <line x1={R.x0} y1={PY(0)} x2={R.x1} y2={PY(0)} style={{ stroke: "var(--border)" }} />
        <line x1={PX(0)} y1={PY(1.4)} x2={PX(0)} y2={PY(-1.4)} style={{ stroke: "var(--border)" }} />
        <text x={PX(0) + 4} y={PY(1.4) + 10} style={{ fill: "var(--text-muted)", fontSize: 11 }}>N</text>
        {Number.isFinite(rad) && Math.abs(rad) < 6 && (
          <circle cx={PX(0)} cy={PY(rad)} r={Math.abs(rad) * R.s} style={{ fill: "none", stroke: "var(--accent)", strokeDasharray: "4 3" }} />
        )}
        <path d={prof} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={PX(0)} cy={PY(0)} r={4} style={{ fill: "var(--text)" }} />
        <text x={(R.x0 + R.x1) / 2} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>normal section in direction θ</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>surface near p: z = ½(e x² + 2f xy + g y²), with E = G = 1, F = 0 at p</div>
        <div>w = (cos θ, sin θ), II(w) = e cos²θ + 2f cos θ sin θ + g sin²θ</div>
        <div style={{ fontWeight: 700 }}>normal curvature κₙ = II(w) / I(w) = {kn.toFixed(3)}{kn > 1e-3 ? ": bends towards N" : kn < -1e-3 ? ": bends away from N" : ": an asymptotic direction"}</div>
      </div>
      <figcaption className="viz-caption">
        Slice the surface by the plane containing the normal N and the direction w. The curve cut out bends with curvature
        κₙ = II(w)/I(w); the dashed circle is its osculating circle. On the left, the solid curve is where II = 1 and the dashed
        curve where II = −1, which together form Dupin&rsquo;s indicatrix.
      </figcaption>
    </figure>
  );
}
