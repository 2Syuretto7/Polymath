"use client";

import { useMemo, useState } from "react";

const MAX = 1000000;
let DATA: { xs: number[]; count: number[]; sum: number[] } | null = null;
/** Twin prime pairs (p, p + 2) with p + 2 ≤ x: running count and running sum of 1/p + 1/(p + 2), sampled at every pair. */
export function twinData() {
  if (DATA) return DATA;
  const c = new Uint8Array(MAX + 1);
  for (let p = 2; p * p <= MAX; p++) if (!c[p]) for (let j = p * p; j <= MAX; j += p) c[j] = 1;
  const xs: number[] = [], count: number[] = [], sum: number[] = [];
  let n = 0, s = 0;
  for (let p = 3; p + 2 <= MAX; p += 2) if (!c[p] && !c[p + 2]) { n++; s += 1 / p + 1 / (p + 2); xs.push(p + 2); count.push(n); sum.push(s); }
  DATA = { xs, count, sum };
  return DATA;
}
const C2 = 0.6601618158;
/** The Hardy–Littlewood prediction 2C₂ ∫ from 2 to x of dt/(log t)². */
export function hl(x: number) {
  const n = 2000, a = 2, h = (x - a) / n;
  let s = 0;
  for (let i = 0; i <= n; i++) { const t = a + i * h, w = i === 0 || i === n ? 1 : i % 2 ? 4 : 2; s += w / Math.log(t) ** 2; }
  return 2 * C2 * (s * h) / 3;
}
export const at = (x: number) => { const d = twinData(); let i = -1; for (let j = 0; j < d.xs.length && d.xs[j] <= x; j++) i = j; return i < 0 ? { count: 0, sum: 0 } : { count: d.count[i], sum: d.sum[i] }; };

/** Brun’s theorem: the sum of reciprocals of twin primes converges, though very slowly. */
export function TwinPrimeSumViz() {
  const [e, setE] = useState(6);
  const d = useMemo(() => twinData(), []);
  const X = Math.round(10 ** e), cur = at(X);
  const px = (x: number) => 50 + ((Math.log10(x) - 1) / 5) * 450, py = (v: number) => 190 - ((v - 0.4) / 1.6) * 170;
  const step = Math.max(1, Math.floor(d.xs.length / 600));
  const path = d.xs.map((_, j) => j).filter((j) => j % step === 0 || j < 30).map((j, i) => `${i ? "L" : "M"}${px(d.xs[j]).toFixed(1)},${py(d.sum[j]).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>x = {X.toLocaleString("en-IN")} <input type="range" min={1.5} max={6} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log x" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Partial sums of reciprocals of twin primes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0.4, 0.8, 1.2, 1.6, 2].map((v) => (
          <g key={v}>
            <line x1={50} y1={py(v)} x2={500} y2={py(v)} style={{ stroke: "var(--grid-line)" }} />
            <text x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v.toFixed(1)}</text>
          </g>
        ))}
        <line x1={50} y1={py(1.902)} x2={500} y2={py(1.902)} style={{ stroke: "var(--success)", strokeDasharray: "5 3", strokeWidth: 2 }} />
        <text x={496} y={py(1.902) - 6} textAnchor="end" style={{ fill: "var(--success)", fontSize: 10 }}>Brun&rsquo;s constant ≈ 1.902</text>
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {[10, 100, 1000, 10000, 100000, 1000000].map((x) => <text key={x} x={px(x)} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        <line x1={px(X)} y1={20} x2={px(X)} y2={190} style={{ stroke: "var(--border-strong)", strokeDasharray: "2 3" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Up to {X.toLocaleString("en-IN")}: {cur.count.toLocaleString("en-IN")} twin pairs (Hardy–Littlewood predicts {hl(X).toFixed(0)}); sum of reciprocals {cur.sum.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Brun proved in 1919 that the sum of 1/p + 1/(p + 2) over twin primes converges, so twin primes are much sparser than
        primes, whose reciprocals diverge. The convergence is so slow that even with all twin primes below 10¹⁶ the sum is
        still visibly short of its limit.
      </figcaption>
    </figure>
  );
}
