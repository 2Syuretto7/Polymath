"use client";

import { useState } from "react";

type K = "dirichlet" | "fejer" | "poisson";
const NAMES: Record<K, string> = { dirichlet: "Dirichlet", fejer: "Fejér", poisson: "Poisson" };

/** Kernel value at x for parameter n (for Poisson, r = 1 − 1/(n + 1)). */
export function kernel(k: K, n: number, x: number) {
  const s = Math.sin(x / 2);
  if (k === "dirichlet") return Math.abs(s) < 1e-12 ? 2 * n + 1 : Math.sin((n + 0.5) * x) / s;
  if (k === "fejer") return Math.abs(s) < 1e-12 ? n + 1 : (Math.sin(((n + 1) * x) / 2) / s) ** 2 / (n + 1);
  const r = 1 - 1 / (n + 1);
  return (1 - r * r) / (1 - 2 * r * Math.cos(x) + r * r);
}

/** Three averages of the kernel over [−π, π]: total, absolute, and mass outside |x| < δ. */
export function kernelStats(k: K, n: number, delta = 0.3) {
  const M = 12000;
  let tot = 0, abs = 0, out = 0;
  for (let i = 0; i < M; i++) {
    const x = -Math.PI + ((i + 0.5) * 2 * Math.PI) / M, v = kernel(k, n, x);
    tot += v; abs += Math.abs(v); if (Math.abs(x) >= delta) out += Math.abs(v);
  }
  return { tot: tot / M, abs: abs / M, out: out / M };
}

/** Dirichlet, Fejér and Poisson kernels tested against the three properties of a good kernel. */
export function SummabilityViz() {
  const [k, setK] = useState<K>("fejer");
  const [n, setN] = useState(8);
  const st = kernelStats(k, n);
  const X0 = 30, X1 = 510, YM = 200;
  const px = (x: number) => X0 + ((x + Math.PI) / (2 * Math.PI)) * (X1 - X0);
  const peak = k === "dirichlet" ? 2 * n + 1 : k === "fejer" ? n + 1 : (2 - 1 / (n + 1)) * (n + 1);
  const sy = 150 / peak;
  const path = Array.from({ length: 601 }, (_, i) => -Math.PI + (i / 600) * 2 * Math.PI).map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${(YM - kernel(k, n, x) * sy).toFixed(1)}`).join("");
  const ok = (b: boolean) => (b ? "yes" : "no");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="kernel">
        {(Object.keys(NAMES) as K[]).map((key) => <button key={key} type="button" aria-pressed={k === key} className={k === key ? "seg is-on" : "seg"} onClick={() => setK(key)}>{NAMES[key]}</button>)}
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 260" role="img" aria-label="A summability kernel" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(-0.3)} y={40} width={px(0.3) - px(-0.3)} height={200} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X0} y1={YM} x2={X1} y2={YM} style={{ stroke: "var(--border-strong)" }} />
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
        {[-Math.PI, 0, Math.PI].map((x, i) => <text key={i} x={px(x)} y={YM + 50} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{["−π", "0", "π"][i]}</text>)}
        <text x={px(0.3) + 6} y={52} style={{ fill: "var(--text-muted)", fontSize: 10 }}>shaded: |x| &lt; 0.3</text>
        {k === "poisson" && <text x={X0} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>r = 1 − 1/(n + 1) = {(1 - 1 / (n + 1)).toFixed(3)}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Average {st.tot.toFixed(3)} (should be 1). Average of |K| {st.abs.toFixed(3)} (bounded in n? {ok(k !== "dirichlet")}). Mass outside |x| &lt; 0.3: {st.out.toFixed(3)} (tends to 0? {ok(k !== "dirichlet")}).
      </p>
      <figcaption className="viz-caption">
        A family of kernels is good, an approximate identity, if each has average 1, the averages of |K| stay bounded,
        and the mass away from 0 tends to 0. Then K * f → f for every continuous f. The Fejér and Poisson kernels are
        positive and good; the Dirichlet kernel fails the last two, which is why partial sums can misbehave.
      </figcaption>
    </figure>
  );
}
