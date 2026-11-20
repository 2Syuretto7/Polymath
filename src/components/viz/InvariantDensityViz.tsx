"use client";

import { useMemo, useState } from "react";

const PHI = (Math.sqrt(5) - 1) / 2;
const MAPS = [
  { label: "logistic, r = 4", f: (x: number) => 4 * x * (1 - x), rho: (x: number) => 1 / (Math.PI * Math.sqrt(x * (1 - x))), mass: (a: number) => (2 / Math.PI) * Math.asin(Math.sqrt(a)), name: "1/(π√(x(1 − x)))" },
  { label: "Gauss map", f: (x: number) => { const y = 1 / x; return y - Math.floor(y); }, rho: (x: number) => 1 / ((1 + x) * Math.LN2), mass: (a: number) => Math.log2(1 + a), name: "1/((1 + x) log 2)" },
  { label: "golden rotation", f: (x: number) => (x + PHI) % 1, rho: () => 1, mass: (a: number) => a, name: "1" },
];
/** The fraction of the first N points of the orbit of x₀ that lie in [0, 0.1]. */
export function orbitFraction(k: number, x0: number, N: number) {
  let x = x0, c = 0;
  for (let i = 0; i < N; i++) { if (x < 0.1) c++; x = MAPS[k].f(x); if (x <= 0 || x >= 1) x = (x0 * (i + 2)) % 1 || 0.123; }
  return c / N;
}
export const predicted = (k: number) => MAPS[k].mass(0.1);

/** A histogram of one long orbit against the invariant density. */
export function InvariantDensityViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(4);
  const N = Math.round(10 ** e), B = 40;
  const hist = useMemo(() => {
    const h = new Array(B).fill(0);
    let x = 0.2345, c = 0;
    for (let i = 0; i < N; i++) { h[Math.min(B - 1, Math.floor(x * B))]++; if (x < 0.1) c++; x = MAPS[k].f(x); if (x <= 0 || x >= 1) x = (0.2345 * (i + 2)) % 1 || 0.123; }
    return { h: h.map((v) => (v / N) * B), frac: c / N };
  }, [k, N]);
  const px = (x: number) => 40 + x * 460, py = (v: number) => 200 - Math.min(v, 4) * 42;
  const curve = Array.from({ length: 199 }, (_, i) => (i + 1) / 200).map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(MAPS[k].rho(x)).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {MAPS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>orbit length N = {N.toLocaleString("en-IN")} <input type="range" min={2} max={6} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log N" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Histogram of an orbit and the invariant density" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={32} x2={40} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {hist.h.map((v, i) => <rect key={i} x={px(i / B) + 0.5} y={py(v)} width={460 / B - 1} height={200 - py(v)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 0.5 }} />)}
        <path d={curve} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        {[0, 0.5, 1].map((x) => <text key={x} x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>)}
        {[1, 2, 3, 4].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={50} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>bars: where the orbit of 0.2345 spends its time</text>
        <text x={320} y={22} style={{ fill: "var(--danger)", fontSize: 10 }}>red: density {MAPS[k].name}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Fraction of the orbit in [0, 0.1]: {hist.frac.toFixed(4)}. The invariant measure gives [0, 0.1] mass {predicted(k).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        A measure μ is invariant under T if μ(T⁻¹A) = μ(A) for every set A. For these three maps there is an invariant
        measure with a density, and a typical orbit distributes itself according to it: the orbit&rsquo;s histogram
        approaches the red curve as N grows.
      </figcaption>
    </figure>
  );
}
