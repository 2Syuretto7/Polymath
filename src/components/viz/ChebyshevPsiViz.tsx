"use client";

import { useMemo, useState } from "react";

const MAX = 100000;
let CACHE: { psi: Float64Array; theta: Float64Array; pi: Int32Array } | null = null;
function tables() {
  if (CACHE) return CACHE;
  const comp = new Uint8Array(MAX + 1), lam = new Float64Array(MAX + 1);
  for (let p = 2; p <= MAX; p++) if (!comp[p]) { for (let j = p * p; j <= MAX; j += p) comp[j] = 1; for (let q = p; q <= MAX; q *= p) lam[q] = Math.log(p); }
  const psi = new Float64Array(MAX + 1), theta = new Float64Array(MAX + 1), pi = new Int32Array(MAX + 1);
  for (let n = 2; n <= MAX; n++) { psi[n] = psi[n - 1] + lam[n]; const pr = !comp[n]; theta[n] = theta[n - 1] + (pr ? Math.log(n) : 0); pi[n] = pi[n - 1] + (pr ? 1 : 0); }
  CACHE = { psi, theta, pi };
  return CACHE;
}
const FNS = [
  { label: "ψ(x)/x", f: (x: number) => tables().psi[x] / x },
  { label: "θ(x)/x", f: (x: number) => tables().theta[x] / x },
  { label: "π(x) log x / x", f: (x: number) => (tables().pi[x] * Math.log(x)) / x },
];
export const valueAt = (k: number, x: number) => FNS[k].f(x);

/** Chebyshev’s functions, normalised so that the prime number theorem says they tend to 1. */
export function ChebyshevPsiViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(3);
  const X = Math.round(10 ** e);
  const pts = useMemo(() => { const out: [number, number][] = []; for (let x = 10; x <= MAX; x = Math.ceil(x * 1.03)) out.push([x, FNS[k].f(x)]); return out; }, [k]);
  const px = (x: number) => 40 + ((Math.log10(x) - 1) / 4) * 460, py = (v: number) => 200 - ((v - 0.5) / 1.1) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((F, i) => <button key={F.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{F.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>x = {X.toLocaleString("en-IN")} <input type="range" min={1} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log x" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Chebyshev functions against x" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[10, 100, 1000, 10000, 100000].map((x) => <text key={x} x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        {[[Math.LN2, "log 2"], [1, "1"], [2 * Math.LN2, "2 log 2"]].map(([v, l]) => (
          <g key={String(l)}>
            <line x1={40} y1={py(v as number)} x2={500} y2={py(v as number)} style={{ stroke: v === 1 ? "var(--success)" : "var(--danger)", strokeDasharray: "5 3" }} />
            <text x={504} y={py(v as number) + 4} style={{ fill: v === 1 ? "var(--success)" : "var(--danger)", fontSize: 10 }}>{l}</text>
          </g>
        ))}
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(X)} cy={py(FNS[k].f(X))} r={5} style={{ fill: "var(--accent)" }} />
        <text x={44} y={22} style={{ fill: "var(--text-muted)", fontSize: 10 }}>red: Chebyshev’s elementary bounds; green: the limit given by the prime number theorem</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At x = {X.toLocaleString("en-IN")}: ψ(x)/x = {FNS[0].f(X).toFixed(4)}, θ(x)/x = {FNS[1].f(X).toFixed(4)}, π(x) log x / x = {FNS[2].f(X).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        ψ(x) adds log p for every prime power pᵏ ≤ x, and θ(x) adds log p for every prime p ≤ x. All three ratios have the
        same limit if any of them has one. Chebyshev proved that they stay between constants close to 1, using nothing
        more than the prime factorisation of the binomial coefficient C(2n, n).
      </figcaption>
    </figure>
  );
}
