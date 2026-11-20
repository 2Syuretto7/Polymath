"use client";

import { useState } from "react";

const PHI = (Math.sqrt(5) - 1) / 2;
const overlap = (a0: number, a1: number, b0: number, b1: number) => Math.max(0, Math.min(a1, b1) - Math.max(a0, b0));
/** μ(T⁻ⁿA ∩ A) for A = [0, a), computed exactly from the intervals making up T⁻ⁿA. */
export function correlation(map: number, a: number, n: number) {
  if (map === 0) {
    const m = 2 ** n;
    let c = 0;
    for (let j = 0; j < m && j / m < a; j++) c += overlap(j / m, (j + a) / m, 0, a);
    return c;
  }
  const t = (((-n * PHI) % 1) + 1) % 1;
  return overlap(t, t + a, 0, a) + overlap(t - 1, t + a - 1, 0, a);
}
const NMAX = 19;

/** Mixing: does μ(T⁻ⁿA ∩ A) tend to μ(A)²? */
export function MixingViz() {
  const [map, setMap] = useState(0);
  const [a, setA] = useState(0.3);
  const cs = Array.from({ length: NMAX + 1 }, (_, n) => correlation(map, a, n));
  const ces = cs.map((_, n) => cs.slice(1, n + 1).reduce((s, v) => s + v, 0) / Math.max(1, n));
  const px = (n: number) => 50 + (n / NMAX) * 440, py = (v: number) => 200 - (v / a) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        <button type="button" aria-pressed={map === 0} className={map === 0 ? "seg is-on" : "seg"} onClick={() => setMap(0)}>doubling map</button>
        <button type="button" aria-pressed={map === 1} className={map === 1 ? "seg is-on" : "seg"} onClick={() => setMap(1)}>golden rotation</button>
      </div>
      <div className="viz-controls">
        <label>A = [0, {a.toFixed(2)}) <input type="range" min={0.1} max={0.9} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Correlations against n" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={200} x2={490} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={50} y1={30} x2={50} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={50} y1={py(a * a)} x2={490} y2={py(a * a)} style={{ stroke: "var(--danger)", strokeDasharray: "5 3" }} />
        <text x={494} y={py(a * a) + 4} style={{ fill: "var(--danger)", fontSize: 10 }}>μ(A)²</text>
        {[0, 5, 10, 15].map((n) => <text key={n} x={px(n)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n}</text>)}
        <path d={ces.slice(1).map((v, i) => `${i ? "L" : "M"}${px(i + 1).toFixed(1)},${py(v).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 1.5, strokeDasharray: "3 2" }} />
        <path d={cs.map((v, n) => `${n ? "L" : "M"}${px(n).toFixed(1)},${py(v).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {cs.map((v, n) => <circle key={n} cx={px(n)} cy={py(v)} r={3} style={{ fill: "var(--accent)" }} />)}
        <text x={54} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: μ(T⁻ⁿA ∩ A)</text>
        <text x={190} y={22} style={{ fill: "var(--success)", fontSize: 10 }}>green: its average over 1, …, n</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        μ(A)² = {(a * a).toFixed(4)}. At n = 10: {cs[10].toFixed(4)}; average of n = 1 to 19: {ces[NMAX].toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        T is mixing if μ(T⁻ⁿA ∩ B) → μ(A)μ(B): after a long time, being in B tells you nothing about having been in A. The
        doubling map mixes. The irrational rotation is ergodic, so the averages of the correlations converge, but the
        correlations themselves keep oscillating: the set is moved rigidly, never spread out.
      </figcaption>
    </figure>
  );
}
