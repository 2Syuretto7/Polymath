"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

type B = { name: string; draw: (r: () => number) => number; mu: number; sd: number };
const BS: B[] = [
  { name: "fair die", draw: (r) => 1 + Math.floor(6 * r()), mu: 3.5, sd: Math.sqrt(35 / 12) },
  { name: "exponential", draw: (r) => -Math.log(1 - r()), mu: 1, sd: 1 },
  { name: "Bernoulli(0.1)", draw: (r) => (r() < 0.1 ? 1 : 0), mu: 0.1, sd: 0.3 },
];
const REPS = 5000, BINS = 40, LO = -4, HI = 4;

/** The central limit theorem: standardised sums of n draws, compared with the standard normal density. */
export function SumHistogramViz() {
  const [bi, setBi] = useState(1);
  const [n, setN] = useState(1);
  const B = BS[bi];
  const hist = useMemo(() => {
    const r = seededRng(1000 * bi + n), h = Array(BINS).fill(0) as number[];
    for (let k = 0; k < REPS; k++) {
      let s = 0;
      for (let i = 0; i < n; i++) s += B.draw(r);
      const z = (s - n * B.mu) / (B.sd * Math.sqrt(n));
      const j = Math.floor(((z - LO) / (HI - LO)) * BINS);
      if (j >= 0 && j < BINS) h[j]++;
    }
    return h;
  }, [bi, n, B]);
  const bw = (HI - LO) / BINS, top = 0.6;
  const W = 520, H = 220, pad = 24;
  const X = (z: number) => pad + ((z - LO) / (HI - LO)) * (W - 2 * pad);
  const Y = (d: number) => H - 22 - (Math.min(d, top) / top) * (H - 36);
  const phi = (z: number) => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
  const curve = Array.from({ length: 201 }, (_, i) => LO + ((HI - LO) * i) / 200).map((z, i) => `${i ? "L" : "M"}${X(z).toFixed(1)},${Y(phi(z)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Distribution of each draw">
        {BS.map((x, i) => <button key={x.name} type="button" aria-pressed={bi === i} className={bi === i ? "seg is-on" : "seg"} onClick={() => setBi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>draws added together n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={60} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Histogram of standardised sums with the standard normal density" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {hist.map((c, j) => { const d = c / (REPS * bw); return <rect key={j} x={X(LO + j * bw) + 0.5} y={Y(d)} width={X(bw) - X(0) - 1} height={Y(0) - Y(d)} style={{ fill: "var(--accent)", fillOpacity: 0.5 }} />; })}
        <path d={curve} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.8 }} />
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[-3, -2, -1, 0, 1, 2, 3].map((z) => <text key={z} x={X(z)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{z}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>{REPS} simulated sums of {n} draws, each standardised as (S − nμ)/(σ√n)</p>
      <figcaption className="viz-caption">
        Whatever the shape of a single draw, lopsided like the exponential or spiky like the Bernoulli, the standardised sum looks more and more like the standard normal curve as n grows. For discrete draws the bars stay a little jagged, because a sum of whole numbers can only take certain values, but their outline follows the curve.
      </figcaption>
    </figure>
  );
}
