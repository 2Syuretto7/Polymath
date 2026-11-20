"use client";

import { useState } from "react";

const MODES = [
  { name: "equal scales", a: (_k: number, _n: number) => 1 },
  { name: "scales grow like √k", a: (k: number, _n: number) => Math.sqrt(k) },
  { name: "one giant summand", a: (k: number, n: number) => (k === 1 ? 3 * Math.sqrt(n) : 1) },
];
function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Sums of independent uniform variables on [−aₖ, aₖ], standardised: normal when no summand dominates. */
export function LindebergViz() {
  const [m, setM] = useState(2);
  const [n, setN] = useState(20);
  const A = Array.from({ length: n }, (_, i) => MODES[m].a(i + 1, n));
  const vars = A.map((a) => (a * a) / 3);
  const s2 = vars.reduce((p, v) => p + v, 0);
  const share = Math.max(...vars) / s2;
  const r = rng(11);
  const B = 40, lo = -4, hi = 4, counts = new Array(B).fill(0);
  const M = 20000;
  for (let j = 0; j < M; j++) {
    let s = 0;
    for (const a of A) s += (2 * r() - 1) * a;
    const z = s / Math.sqrt(s2);
    const b = Math.floor(((z - lo) / (hi - lo)) * B);
    if (b >= 0 && b < B) counts[b]++;
  }
  const w = (hi - lo) / B;
  const dens = counts.map((c) => c / (M * w));
  const X0 = 30, W = 460, Y0 = 15, H = 150;
  const x = (z: number) => X0 + ((z - lo) / (hi - lo)) * W;
  const y = (d: number) => Y0 + H - (d / 0.5) * H;
  const zs = Array.from({ length: 161 }, (_, i) => lo + ((hi - lo) * i) / 160);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="scales" style={{ flexWrap: "wrap" }}>
        {MODES.map((d, i) => <button key={d.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={40} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Histogram of the standardised sum against the normal density" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {dens.map((d, i) => <rect key={i} x={x(lo + i * w) + 0.5} y={y(Math.min(d, 0.5))} width={(W / B) - 1} height={Y0 + H - y(Math.min(d, 0.5))} style={{ fill: "var(--accent)", opacity: 0.55 }} />)}
        <polyline points={zs.map((z) => `${x(z)},${y(Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI))}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4].map((z) => <text key={z} x={x(z)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{z < 0 ? `−${-z}` : z}</text>)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Largest single variance as a share of the total: {(share * 100).toFixed(1)}%. {share > 0.2 ? "One summand dominates: Lindeberg fails." : "No summand dominates."}
      </p>
      <figcaption className="viz-caption">
        Bars: 20 000 simulated values of Sₙ/sₙ, where Xₖ is uniform on [−aₖ, aₖ] and sₙ² is the total variance. In the third case a₁ = 3√n, so X₁ always carries about 90% of the variance. Curve: the
        standard normal density. With one giant summand, the sum keeps the flat shape of that summand however large n is.
      </figcaption>
    </figure>
  );
}
