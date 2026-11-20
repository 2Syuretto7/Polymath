"use client";

import { useMemo, useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const div = (a: C, b: C): C => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
const npow = (n: number, s: C): C => { const m = n ** -s[0], th = -s[1] * Math.log(n); return [m * Math.cos(th), m * Math.sin(th)]; };
const B = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730];
/** ζ(s) by Euler–Maclaurin summation with N = 30 and six Bernoulli terms. */
export function zeta(s: C): C {
  const N = 30;
  let z: C = [0, 0];
  for (let n = 1; n < N; n++) { const t = npow(n, s); z = [z[0] + t[0], z[1] + t[1]]; }
  const nS = npow(N, s);
  const tail = div(mul([N, 0], nS), [s[0] - 1, s[1]]);
  z = [z[0] + tail[0] + nS[0] / 2, z[1] + tail[1] + nS[1] / 2];
  let poch: C = [s[0], s[1]], fact = 2;
  for (let k = 1; k <= 6; k++) {
    const term = mul(poch, npow(N, [s[0] + 2 * k - 1, s[1]]));
    z = [z[0] + (B[k - 1] / fact) * term[0], z[1] + (B[k - 1] / fact) * term[1]];
    poch = mul(mul(poch, [s[0] + 2 * k - 1, s[1]]), [s[0] + 2 * k, s[1]]);
    fact *= (2 * k + 1) * (2 * k + 2);
  }
  return z;
}
export const absZeta = (sigma: number, t: number) => Math.hypot(...zeta([sigma, t]));
/** Local minima of |ζ(σ + it)| below 0.05 for t in [1, 40], refined by golden-section search. */
export function zerosOn(sigma: number) {
  const out: number[] = [];
  const f = (t: number) => absZeta(sigma, t);
  for (let t = 1; t < 40; t += 0.05) {
    if (f(t) < f(t - 0.05) && f(t) < f(t + 0.05)) {
      let a = t - 0.05, b = t + 0.05;
      for (let i = 0; i < 50; i++) { const c = a + 0.382 * (b - a), d = a + 0.618 * (b - a); if (f(c) < f(d)) b = d; else a = c; }
      const m = (a + b) / 2;
      if (f(m) < 0.05) out.push(m);
    }
  }
  return out;
}
const SIGMAS = [0.5, 0.75, 1, 1.5];

/** |ζ(σ + it)| along vertical lines: zeros on the critical line, none on Re s = 1. */
export function ZetaModulusViz() {
  const [sigma, setSigma] = useState(0.5);
  const ts = useMemo(() => Array.from({ length: 781 }, (_, i) => 1 + i * 0.05), []);
  const vals = useMemo(() => ts.map((t) => absZeta(sigma, t)), [sigma, ts]);
  const zs = useMemo(() => zerosOn(sigma), [sigma]);
  const minV = Math.min(...vals);
  const px = (t: number) => 40 + ((t - 1) / 39) * 460, py = (v: number) => 200 - (Math.min(v, 4) / 4) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sigma">
        {SIGMAS.map((s) => <button key={s} type="button" aria-pressed={sigma === s} className={sigma === s ? "seg is-on" : "seg"} onClick={() => setSigma(s)}>σ = {s}</button>)}
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Modulus of zeta along a vertical line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={30} x2={40} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[0, 1, 2, 3, 4].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        {[1, 10, 20, 30, 40].map((t) => <text key={t} x={px(t)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
        <path d={ts.map((t, i) => `${i ? "L" : "M"}${px(t).toFixed(1)},${py(vals[i]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
        {zs.map((t) => <circle key={t} cx={px(t)} cy={py(0)} r={4.5} style={{ fill: "var(--danger)" }} />)}
        <text x={44} y={22} style={{ fill: "var(--text-muted)", fontSize: 10 }}>|ζ(σ + it)| for t from 1 to 40; red dots: zeros</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {zs.length ? `${zs.length} zeros with t < 40, at t ≈ ${zs.map((t) => t.toFixed(2)).join(", ")}.` : `No zeros: the smallest value of |ζ| here is ${minV.toFixed(3)}.`}
      </p>
      <figcaption className="viz-caption">
        The prime number theorem is equivalent to ζ(1 + it) ≠ 0 for every real t. On the line σ = 1 the modulus dips but
        never reaches 0. On the critical line σ = ½ it touches 0 again and again; the Riemann hypothesis says that every
        nontrivial zero lies there.
      </figcaption>
    </figure>
  );
}
