"use client";

import { useState } from "react";

const bump = (x: number) => (Math.abs(x) <= 1 ? 0 : 1.6 * Math.exp(-1 / (Math.abs(x) - 1)));

/** Pairs of functions on the line, and the radius of the largest interval about p on which they agree. */
export const PAIRS = [
  { label: "0 and a smooth bump", f: () => 0, g: bump, radius: (p: number) => Math.max(0, 1 - Math.abs(p)) },
  { label: "x and |x|", f: (x: number) => x, g: (x: number) => Math.abs(x), radius: (p: number) => Math.max(0, p) },
];

/** Germs at p: two functions have the same germ when they agree on some neighbourhood of p. */
export function GermViz() {
  const [k, setK] = useState(0);
  const [p, setP] = useState(0);
  const P = PAIRS[k];
  const r = P.radius(p);
  const X0 = 270, S = 55, Y0 = 150;
  const px = (x: number) => X0 + x * S, py = (y: number) => Y0 - y * S;
  const path = (h: (x: number) => number) => {
    let d = "";
    for (let i = 0; i <= 200; i++) { const x = -4.5 + (i / 200) * 9; d += `${i ? "L" : "M"}${px(x).toFixed(1)},${py(Math.max(-2, Math.min(2.3, h(x)))).toFixed(1)}`; }
    return d;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="pair of functions">
        {PAIRS.map((v, i) => <button key={v.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{v.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>point p = {p.toFixed(2).replace("-", "−")} <input type="range" min={-2} max={2} step={0.25} value={p} onChange={(e) => setP(Number(e.target.value))} aria-label="p" /></label>
      </div>
      <svg viewBox="0 0 540 296" role="img" aria-label="Two functions and the interval about p on which they agree" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        {r > 0 && <rect x={px(p - r)} y={14} width={2 * r * S} height={252} style={{ fill: "var(--success-soft)", opacity: 0.7 }} />}
        <path d={path(P.f)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <path d={path(P.g)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
        <line x1={px(p)} y1={14} x2={px(p)} y2={266} style={{ stroke: "var(--danger)" }} />
        <text x={px(p) + 5} y={26} style={{ fill: "var(--danger)", fontSize: 11 }}>p</text>
        <text x={14} y={290} style={{ fill: "var(--text-muted)", fontSize: 10 }}>solid: first function; dashed: second; shaded: largest interval about p where they agree</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At p = {p.toFixed(2).replace("-", "−")}: {r > 0 ? `they agree on (p − ${r.toFixed(2)}, p + ${r.toFixed(2)}), so their germs at p are equal.` : "they agree on no open interval about p, so their germs at p differ."}
      </p>
      <figcaption className="viz-caption">
        The stalk at p collects functions defined near p, identifying two when they agree on some smaller neighbourhood.
        The zero function and a smooth bump are different functions with the same germ at 0, which cannot happen for
        analytic functions; x and |x| have the same germ at every positive point but different germs at 0.
      </figcaption>
    </figure>
  );
}
