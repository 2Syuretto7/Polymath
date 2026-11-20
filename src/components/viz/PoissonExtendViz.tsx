"use client";

import { useMemo, useState } from "react";

export const DATA = [
  { label: "1 on the upper half", f: (t: number) => (Math.sin(t) >= 0 ? 1 : 0) },
  { label: "cos 2θ", f: (t: number) => Math.cos(2 * t) },
  { label: "a single bump", f: (t: number) => Math.max(0, Math.cos(t)) ** 4 },
];
const M = 720;
/** The Poisson integral (1/2π) ∫ P_r(φ − θ) f(θ) dθ, by the trapezium rule. */
export function poissonU(k: number, r: number, phi: number) {
  const f = DATA[k].f;
  let s = 0;
  for (let i = 0; i < M; i++) {
    const th = ((i + 0.5) / M) * 2 * Math.PI;
    s += ((1 - r * r) / (1 - 2 * r * Math.cos(phi - th) + r * r)) * f(th);
  }
  return s / M;
}

/** The harmonic extension of boundary values into the disc, by the Poisson integral. */
export function PoissonExtendViz() {
  const [k, setK] = useState(1);
  const [r, setR] = useState(0.5);
  const [deg, setDeg] = useState(0);
  const cells = useMemo(() => {
    const out: { x: number; y: number; u: number }[] = [];
    const n = 30;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const x = -1 + (2 * (i + 0.5)) / n, y = -1 + (2 * (j + 0.5)) / n, rr = Math.hypot(x, y);
      if (rr < 0.98) out.push({ x, y, u: poissonU(k, rr, Math.atan2(y, x)) });
    }
    return out;
  }, [k]);
  const cx = 130, cy = 120, R = 100, cell = (2 * R) / 30;
  const phi = (deg * Math.PI) / 180, u = poissonU(k, r, phi), centre = poissonU(k, 0, 0);
  const col = (v: number) => (v >= 0 ? "var(--accent)" : "var(--danger)");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="boundary data">
        {DATA.map((d, i) => <button key={d.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>r = {r.toFixed(2)} <input type="range" min={0} max={0.95} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} aria-label="r" /></label>
        <label>angle = {deg}° <input type="range" min={0} max={345} step={15} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle" /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="Harmonic function in the unit disc with given boundary values" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {cells.map((c, i) => <rect key={i} x={cx + c.x * R - cell / 2} y={cy - c.y * R - cell / 2} width={cell + 0.4} height={cell + 0.4} style={{ fill: col(c.u), fillOpacity: Math.min(1, Math.abs(c.u)) * 0.85 }} />)}
        {Array.from({ length: 180 }, (_, i) => { const t = (i / 180) * 2 * Math.PI, v = DATA[k].f(t); return <circle key={i} cx={cx + (R + 6) * Math.cos(t)} cy={cy - (R + 6) * Math.sin(t)} r={2.6} style={{ fill: col(v), fillOpacity: Math.max(0.12, Math.abs(v)) }} />; })}
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <circle cx={cx + r * R * Math.cos(phi)} cy={cy - r * R * Math.sin(phi)} r={5} style={{ fill: "var(--surface)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={270} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>outer ring: boundary values f(θ)</text>
        <text x={270} y={82} style={{ fill: "var(--text)", fontSize: 12 }}>inside: the Poisson integral u</text>
        <text x={270} y={112} style={{ fill: "var(--accent)", fontSize: 12 }}>blue: positive</text>
        <text x={370} y={112} style={{ fill: "var(--danger)", fontSize: 12 }}>red: negative</text>
        <text x={270} y={142} style={{ fill: "var(--text-muted)", fontSize: 11 }}>deeper colour means larger |u|</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        u at r = {r.toFixed(2)}, angle {deg}°: {u.toFixed(4).replace("-", "−")}. Value at the centre: {(Math.abs(centre) < 5e-5 ? 0 : centre).toFixed(4).replace("-", "−")}, the average of f.
      </p>
      <figcaption className="viz-caption">
        Every continuous function on the circle extends to a harmonic function in the disc, by averaging the boundary values
        against the Poisson kernel. Near the boundary u approaches f; at the centre it is the plain average. For f = cos 2θ
        the extension is exactly r² cos 2θ, the real part of z².
      </figcaption>
    </figure>
  );
}
