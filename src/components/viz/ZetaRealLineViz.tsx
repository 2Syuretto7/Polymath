"use client";

import { useMemo, useState } from "react";
import { zeta } from "./ZetaModulusViz";

/** ζ(s) for real s ≠ 1, from the analytic continuation. */
export const zetaReal = (s: number) => zeta([s, 0])[0];
/** The partial sum of n to the power −s for n ≤ 1000, which converges only for s > 1. */
export const partialSum = (s: number) => { let t = 0; for (let n = 1; n <= 1000; n++) t += n ** -s; return t; };

/** The continuation of ζ to the whole real line, against the series that defines it only for s > 1. */
export function ZetaRealLineViz() {
  const [s, setS] = useState(-1);
  const pts = useMemo(() => { const out: [number, number][] = []; for (let x = -4.5; x <= 5; x += 0.01) if (Math.abs(x - 1) > 0.04) out.push([x, zetaReal(x)]); return out; }, []);
  const px = (x: number) => 40 + ((x + 4.5) / 9.5) * 470, py = (v: number) => 150 - v * 40;
  const clip = (v: number) => Math.max(-2, Math.min(3.4, v));
  const left = pts.filter((p) => p[0] < 1), right = pts.filter((p) => p[0] > 1);
  const path = (a: [number, number][]) => a.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(clip(p[1])).toFixed(1)}`).join("");
  const z = zetaReal(s), ps = partialSum(s);
  const fmt = (v: number) => (Math.abs(v) < 1e-9 ? "0" : v.toFixed(4).replace("-", "−"));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>s = {String(s).replace("-", "−")} <input type="range" min={-4} max={4} step={0.5} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="The Riemann zeta function on the real line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[-1, 0, 1, 2, 3].map((v) => (
          <g key={v}>
            <line x1={40} y1={py(v)} x2={510} y2={py(v)} style={{ stroke: v === 0 ? "var(--border-strong)" : "var(--grid-line)" }} />
            <text x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>
          </g>
        ))}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((x) => <text key={x} x={px(x)} y={232} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <line x1={px(1)} y1={10} x2={px(1)} y2={220} style={{ stroke: "var(--danger)", strokeDasharray: "3 3" }} />
        <text x={px(1) - 4} y={20} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 10 }}>pole at s = 1</text>
        <rect x={px(1)} y={10} width={px(5) - px(1)} height={210} style={{ fill: "var(--accent-soft)", opacity: 0.35 }} />
        <text x={px(3)} y={34} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>the series converges here</text>
        <path d={path(left)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={path(right)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {[-2, -4].map((x) => <circle key={x} cx={px(x)} cy={py(0)} r={4} style={{ fill: "var(--success)" }} />)}
        {Math.abs(s - 1) > 1e-9 && <circle cx={px(s)} cy={py(clip(z))} r={5} style={{ fill: "var(--danger)" }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {Math.abs(s - 1) < 1e-9 ? "s = 1 is the pole: ζ(s) has no value there." : `ζ(${String(s).replace("-", "−")}) = ${fmt(z)}; the sum of n to the power −s up to 1000 is ${ps > 1e6 ? ps.toExponential(2) : ps > 1000 ? Math.round(ps).toLocaleString("en-IN") : ps.toFixed(4)}${s > 1 ? ", close to ζ(s)." : ", and grows without bound."}`}
      </p>
      <figcaption className="viz-caption">
        For s &gt; 1 the series Σ n to the power −s converges and equals ζ(s). The curve continues smoothly to the left of the
        pole, though the series diverges there. The green dots mark the trivial zeros at −2 and −4; the values between them
        are tiny, of order one hundredth.
      </figcaption>
    </figure>
  );
}
