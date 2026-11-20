"use client";

import { useMemo, useState } from "react";

const N = 20000;
const mu = (() => {
  const m = new Int8Array(N + 1).fill(1), comp = new Uint8Array(N + 1);
  for (let p = 2; p <= N; p++) if (!comp[p]) { for (let j = p; j <= N; j += p) { if (j > p) comp[j] = 1; m[j] = -m[j]; } for (let j = p * p; j <= N; j += p * p) m[j] = 0; }
  return m;
})();
const d = (() => { const t = new Int32Array(N + 1); for (let i = 1; i <= N; i++) for (let j = i; j <= N; j += i) t[j]++; return t; })();
const zeta = (s: number) => { let z = 0; for (let n = 1; n <= 100000; n++) z += n ** -s; return z + (100000 ** (1 - s)) / (s - 1) - 0.5 * 100000 ** -s; };
const SERIES = [
  { label: "1 (ζ)", a: () => 1, limit: (s: number) => zeta(s), lname: "ζ(s)", abs: 1 },
  { label: "(−1)ⁿ⁺¹ (η)", a: (n: number) => (n % 2 ? 1 : -1), limit: (s: number) => (s === 1 ? Math.LN2 : (1 - 2 ** (1 - s)) * zeta(s)), lname: "(1 − 2¹⁻ˢ)ζ(s)", abs: 0 },
  { label: "μ(n) (1/ζ)", a: (n: number) => mu[n], limit: (s: number) => 1 / zeta(s), lname: "1/ζ(s)", abs: 1 },
  { label: "d(n) (ζ²)", a: (n: number) => d[n], limit: (s: number) => zeta(s) ** 2, lname: "ζ(s)²", abs: 1 },
];
export const partialSum = (k: number, s: number, M: number) => { let t = 0; for (let n = 1; n <= M; n++) t += SERIES[k].a(n) * n ** -s; return t; };
export const limitOf = (k: number, s: number) => SERIES[k].limit(s);

/** Partial sums of Dirichlet series Σ aₙ n⁻ˢ for real s. */
export function DirichletSeriesViz() {
  const [k, setK] = useState(3);
  const [s, setS] = useState(2);
  const pts = useMemo(() => {
    const out: [number, number][] = [];
    let t = 0, next = 1;
    for (let n = 1; n <= N; n++) { t += SERIES[k].a(n) * n ** -s; if (n >= next) { out.push([n, t]); next = Math.ceil(next * 1.07); } }
    return out;
  }, [k, s]);
  const conv = s > SERIES[k].abs;
  const L = conv ? SERIES[k].limit(s) : NaN;
  const last = pts[pts.length - 1][1];
  const vals = pts.map((p) => p[1]).concat(conv ? [L] : []);
  const lo = Math.min(...vals), hi = Math.max(...vals);
  const px = (n: number) => 40 + (Math.log10(n) / Math.log10(N)) * 460, py = (v: number) => 200 - ((v - lo) / (hi - lo || 1)) * 165;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="coefficients">
        {SERIES.map((S, i) => <button key={S.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>aₙ = {S.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>s = {s.toFixed(2)} <input type="range" min={0.5} max={3} step={0.25} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Partial sums of a Dirichlet series" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[1, 10, 100, 1000, 10000].map((n) => <text key={n} x={px(n)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n.toLocaleString("en-IN")}</text>)}
        {conv && <line x1={40} y1={py(L)} x2={500} y2={py(L)} style={{ stroke: "var(--danger)", strokeDasharray: "5 3" }} />}
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={44} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: partial sums up to N (log scale)</text>
        {conv && <text x={260} y={22} style={{ fill: "var(--danger)", fontSize: 10 }}>red: the limit {SERIES[k].lname}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Partial sum up to {N.toLocaleString("en-IN")}: {last.toFixed(4)}. {conv ? `Limit ${SERIES[k].lname} = ${L.toFixed(4)}.` : "Here s is at or below the abscissa of convergence: the partial sums do not settle."}
      </p>
      <figcaption className="viz-caption">
        A Dirichlet series converges in a half-plane Re s &gt; σ₀. Multiplying two series convolves their coefficients,
        so the series with coefficients d(n), the number of divisors, is ζ(s)². Since the sum of μ over the divisors of n is
        1 for n = 1 and 0 otherwise, the Möbius series is 1/ζ(s). The alternating series converges for every s &gt; 0.
      </figcaption>
    </figure>
  );
}
