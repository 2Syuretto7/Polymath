"use client";

import { useState } from "react";

/** log M(r), the logarithm of the maximum modulus on |z| = r, written to avoid overflow. */
export const FUNCS = [
  { label: "e to the z", logM: (r: number) => r, zeros: () => 0, order: 1 },
  { label: "sin z", logM: (r: number) => r + Math.log1p(-Math.exp(-2 * r)) - Math.LN2, zeros: (r: number) => 2 * Math.floor(r / Math.PI) + 1, order: 1 },
  { label: "cos √z", logM: (r: number) => Math.sqrt(r) + Math.log1p(Math.exp(-2 * Math.sqrt(r))) - Math.LN2, zeros: (r: number) => Math.max(0, Math.floor(Math.sqrt(r) / Math.PI + 0.5)), order: 0.5 },
  { label: "e to the z²", logM: (r: number) => r * r, zeros: () => 0, order: 2 },
];
/** The estimate log log M(r) / log r, which tends to the order. */
export const orderEstimate = (k: number, r: number) => Math.log(FUNCS[k].logM(r)) / Math.log(r);

/** The order of an entire function, read off from the growth of its maximum modulus. */
export function GrowthOrderViz() {
  const [k, setK] = useState(2);
  const [e, setE] = useState(4);
  const r = 10 ** e;
  const px = (t: number) => 50 + ((t - 1) / 7) * 450, py = (v: number) => 190 - (v / 2.5) * 170;
  const pts = Array.from({ length: 141 }, (_, i) => 1 + i * 0.05).map((t) => [t, orderEstimate(k, 10 ** t)] as const);
  const z = FUNCS[k].zeros(r);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FUNCS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>r = 10 to the {e} <input type="range" min={1} max={8} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log r" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Estimated order of growth against radius" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 0.5, 1, 1.5, 2, 2.5].map((v) => (
          <g key={v}>
            <line x1={50} y1={py(v)} x2={500} y2={py(v)} style={{ stroke: "var(--grid-line)" }} />
            <text x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>
          </g>
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((t) => <text key={t} x={px(t)} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>10 to the {t}</text>)}
        <line x1={50} y1={py(FUNCS[k].order)} x2={500} y2={py(FUNCS[k].order)} style={{ stroke: "var(--success)", strokeDasharray: "5 3", strokeWidth: 2 }} />
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(e)} cy={py(orderEstimate(k, r))} r={5} style={{ fill: "var(--danger)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        log log M(r) / log r = {orderEstimate(k, r).toFixed(4)} at r = 10 to the {e}; zeros with |z| ≤ r: {z === 0 ? "none" : `about ${z.toLocaleString("en-IN")}`}.
      </p>
      <figcaption className="viz-caption">
        An entire function has order ρ if its maximum modulus grows roughly like exp(r to the ρ). The ratio plotted settles
        to the order, slowly. Zeros are tied to growth: a function of order ρ has at most about r to the ρ zeros in the disc
        of radius r, and Hadamard&rsquo;s theorem rebuilds it from those zeros and a polynomial in the exponent.
      </figcaption>
    </figure>
  );
}
