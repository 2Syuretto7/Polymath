"use client";

import { useState } from "react";

type Shape = "sphere" | "torus";

/** Total curvature of a surface of revolution: dent and stretch it, and ∫K dA stays 2πχ. */
export function GaussBonnetViz() {
  const [shape, setShape] = useState<Shape>("sphere");
  const [a, setA] = useState(0.4);
  const [b, setB] = useState(1);
  const prof = (t: number): [number, number] =>
    shape === "sphere"
      ? [Math.sin(t) * (1 + a * Math.cos(2 * t)), -b * Math.cos(t)]
      : [2 + 0.8 * Math.cos(t) + 0.3 * a * Math.cos(2 * t), 0.8 * b * Math.sin(t)];
  const T1 = shape === "sphere" ? Math.PI : 2 * Math.PI;
  const N = 2000, h = 1e-4;
  let tot = 0, pos = 0, neg = 0;
  const kSign: number[] = [];
  const pts: [number, number][] = [];
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * T1;
    const tc = Math.min(Math.max(t, h), T1 - h);
    const [f0, g0] = prof(tc), [f1, g1] = prof(tc + h), [fm, gm] = prof(tc - h);
    const fp = (f1 - fm) / (2 * h), gp = (g1 - gm) / (2 * h);
    const fpp = (f1 - 2 * f0 + fm) / (h * h), gpp = (g1 - 2 * g0 + gm) / (h * h);
    const sp = fp * fp + gp * gp;
    const dens = (gp * (fp * gpp - fpp * gp)) / Math.pow(sp, 1.5);
    const wgt = i === 0 || i === N ? 0.5 : 1;
    const c = 2 * Math.PI * dens * (T1 / N) * wgt;
    tot += c;
    if (c > 0) pos += c; else neg += c;
    kSign.push(dens);
    pts.push(prof(t));
  }
  const chi = shape === "sphere" ? 2 : 0;
  const cx = 160, cy = 130, s = shape === "sphere" ? 55 : 42;
  const segs = pts.slice(0, -1).map((p, i) => ({ p, q: pts[i + 1], k: kSign[i] }));
  const ring = (t: number) => {
    const [f, g] = prof(t);
    return { rx: s * f, ry: s * f * 0.25, y: cy - s * g };
  };
  const rings = (shape === "sphere" ? [0.5, 1.05, 1.57, 2.1, 2.65] : [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]).map(ring);
  const fmt = (x: number) => (Math.abs(x) < 5e-4 ? 0 : x).toFixed(3);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Surface">
        {(["sphere", "torus"] as Shape[]).map((k) => (
          <button key={k} type="button" aria-pressed={shape === k} className={shape === k ? "seg is-on" : "seg"} onClick={() => setShape(k)}>
            {k === "sphere" ? "deformed sphere" : "deformed torus"}
          </button>
        ))}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>dent or bulge: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={-0.6} max={0.6} step={0.02} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>stretch along the axis: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0.5} max={1.8} step={0.02} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="A surface of revolution with its regions of positive and negative curvature" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {rings.map((r, i) => <ellipse key={i} cx={cx} cy={r.y} rx={Math.abs(r.rx)} ry={Math.abs(r.ry)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        {[1, -1].map((side) => segs.map((g, i) => (
          <line key={`${side}-${i}`} x1={cx + side * s * g.p[0]} y1={cy - s * g.p[1]} x2={cx + side * s * g.q[0]} y2={cy - s * g.q[1]}
            style={{ stroke: g.k >= 0 ? "var(--accent)" : "var(--text)", strokeWidth: 3, strokeDasharray: g.k >= 0 ? undefined : "2 2" }} />
        )))}
        <line x1={320} y1={40} x2={345} y2={40} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={352} y={44} style={{ fill: "var(--text)", fontSize: 12 }}>K &gt; 0</text>
        <line x1={420} y1={40} x2={445} y2={40} style={{ stroke: "var(--text)", strokeWidth: 3, strokeDasharray: "2 2" }} />
        <text x={452} y={44} style={{ fill: "var(--text)", fontSize: 12 }}>K &lt; 0</text>
        <text x={320} y={84} style={{ fill: "var(--text)", fontSize: 13 }}>positive part: {fmt(pos)}</text>
        <text x={320} y={106} style={{ fill: "var(--text)", fontSize: 13 }}>negative part: {fmt(neg)}</text>
        <text x={320} y={140} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>∫K dA = {fmt(tot)}</text>
        <text x={320} y={164} style={{ fill: "var(--text)", fontSize: 13 }}>= {fmt(tot / Math.PI)} π</text>
        <text x={320} y={198} style={{ fill: "var(--text)", fontSize: 13 }}>Euler characteristic χ = {chi}</text>
        <text x={320} y={220} style={{ fill: "var(--text)", fontSize: 13 }}>2πχ = {fmt(2 * Math.PI * chi)}</text>
      </svg>
      <figcaption className="viz-caption">
        The surface is obtained by rotating the drawn profile about the vertical axis. Denting it creates regions of negative
        curvature, but the positive curvature grows to compensate exactly: the total, computed here by integrating K over the
        surface, is always 4π for anything shaped like a sphere and 0 for anything shaped like a torus. That is the
        Gauss–Bonnet theorem, ∫K dA = 2πχ.
      </figcaption>
    </figure>
  );
}
