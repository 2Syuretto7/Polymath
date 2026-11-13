"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const div = (a: C, b: C): C => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
const cexp = (a: C): C => [Math.exp(a[0]) * Math.cos(a[1]), Math.exp(a[0]) * Math.sin(a[1])];
const FS: { name: string; f: (z: C) => C; hol: boolean }[] = [
  { name: "z²", f: (z) => mul(z, z), hol: true },
  { name: "eᶻ", f: cexp, hol: true },
  { name: "z̄", f: (z) => [z[0], -z[1]], hol: false },
  { name: "|z|²", f: (z) => [z[0] * z[0] + z[1] * z[1], 0], hol: false },
];
const HS = [1, 0.5, 0.2, 0.1, 0.01];
const Z0: C = [1, 0.5];

/** The complex difference quotient (f(z₀ + h) − f(z₀))/h as h approaches 0 from every direction. */
export function DiffQuotientViz() {
  const [fi, setFi] = useState(0);
  const [hi, setHi] = useState(1);
  const [phi, setPhi] = useState(45);
  const F = FS[fi];
  const t = HS[hi];
  const q = (p: number): C => { const h: C = [t * Math.cos(p), t * Math.sin(p)]; const fz = F.f(Z0); const fh = F.f([Z0[0] + h[0], Z0[1] + h[1]]); return div([fh[0] - fz[0], fh[1] - fz[1]], h); };
  const W = 400, x0 = -1.5, x1 = 4.5, y0 = -3, y1 = 3;
  const X = (u: number) => ((u - x0) / (x1 - x0)) * W;
  const Y = (v: number) => W - ((v - y0) / (y1 - y0)) * W;
  const cl = (u: number, lo: number, hi2: number) => Math.max(lo, Math.min(hi2, u));
  const ring = Array.from({ length: 121 }, (_, k) => q((2 * Math.PI * k) / 120));
  const d = ring.map(([a, b], k) => `${k ? "L" : "M"}${X(cl(a, x0 - 1, x1 + 1)).toFixed(1)},${Y(cl(b, y0 - 1, y1 + 1)).toFixed(1)}`).join(" ");
  const cur = q((phi * Math.PI) / 180);
  let spread = 0;
  for (const p of ring) spread = Math.max(spread, Math.hypot(p[0] - ring[0][0], p[1] - ring[0][1]));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>size |h|: <span className="mono">{t}</span></span>
          <input type="range" min={0} max={4} step={1} value={hi} onChange={(e) => setHi(Number(e.target.value))} /></label>
        <label><span>direction of h: <span className="mono">{phi}°</span></span>
          <input type="range" min={0} max={345} step={15} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Values of the difference quotient for every direction of h" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {[1, 2, 3, 4].map((k) => <text key={k} x={X(k)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{k}</text>)}
        <path d={d} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
        <circle cx={X(cl(cur[0], x0, x1))} cy={Y(cl(cur[1], y0, y1))} r={6} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>z₀ = 1 + 0.5i; quotient for this h = {cur[0].toFixed(3)} {cur[1] < 0 ? "−" : "+"} {Math.abs(cur[1]).toFixed(3)}i</div>
        <div>spread of the quotient over all directions: {spread.toFixed(3)}</div>
        <div>{F.hol ? "As |h| shrinks the loop shrinks to one point: f′(z₀) exists." : "As |h| shrinks the loop does not shrink: the limit depends on the direction, so f is not complex differentiable here."}</div>
      </div>
      <figcaption className="viz-caption">
        The grey loop shows the difference quotient for every direction of h of the chosen size; the dot is the direction set
        by the slider. A complex derivative must be the same limit from every direction at once, which is far stronger than
        having partial derivatives.
      </figcaption>
    </figure>
  );
}
