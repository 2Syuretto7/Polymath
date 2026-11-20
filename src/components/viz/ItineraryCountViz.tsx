"use client";

import { useMemo, useState } from "react";

const MAPS = [
  { name: "rotation by (√5 − 1)/2", f: (x: number) => (x + (Math.sqrt(5) - 1) / 2) % 1, h: "0" },
  { name: "doubling", f: (x: number) => (2 * x) % 1, h: "log 2 ≈ 0.693" },
  { name: "tripling", f: (x: number) => (3 * x) % 1, h: "log 3 ≈ 1.099" },
  { name: "logistic, r = 3.5", f: (x: number) => 3.5 * x * (1 - x), h: "0" },
  { name: "logistic, r = 4", f: (x: number) => 4 * x * (1 - x), h: "log 2 ≈ 0.693" },
];
const NMAX = 12, M = 120000;

/** Number of distinct itineraries of length n through boxes of width 1/B, over a fine grid of starting points; stops before the grid runs out. */
export function itineraryCounts(f: (x: number) => number, B: number) {
  const xs = Array.from({ length: M }, (_, i) => (i + 0.5) / M);
  const code = new Array(M).fill(0);
  const out: number[] = [];
  for (let n = 1; n <= NMAX; n++) {
    const seen = new Set<number>();
    for (let i = 0; i < M; i++) {
      code[i] = code[i] * B + Math.min(B - 1, Math.floor(xs[i] * B));
      seen.add(code[i]);
      xs[i] = f(xs[i]);
    }
    out.push(seen.size);
    if (seen.size > M / 8) break;
  }
  return out;
}

/** Topological entropy as the growth rate of the number of distinguishable orbit segments. */
export function ItineraryCountViz() {
  const [k, setK] = useState(1);
  const [B, setB] = useState(8);
  const C = useMemo(() => itineraryCounts(MAPS[k].f, B), [k, B]);
  const L = C.length;
  const slope = Math.log(C[L - 1]) - Math.log(C[L - 2]);
  const lmax = Math.log(C[L - 1]) * 1.1 + 0.5;
  const gx = (n: number) => 60 + ((n - 1) / (NMAX - 1)) * 420, gy = (v: number) => 210 - (v / lmax) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {MAPS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="boxes" style={{ marginTop: 8 }}>
        {[4, 8, 16].map((b) => <button key={b} type="button" aria-pressed={B === b} className={B === b ? "seg is-on" : "seg"} onClick={() => setB(b)}>{b} boxes</button>)}
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Logarithm of itinerary counts against n" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={60} y1={210} x2={480} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={60} y1={30} x2={60} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <path d={C.map((c, i) => `${i ? "L" : "M"}${gx(i + 1).toFixed(1)},${gy(Math.log(c)).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {C.map((c, i) => <circle key={i} cx={gx(i + 1)} cy={gy(Math.log(c))} r={3.5} style={{ fill: "var(--accent)" }} />)}
        {[1, 4, 8, 12].map((n) => <text key={n} x={gx(n)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>n = {n}</text>)}
        <text x={66} y={22} style={{ fill: "var(--text-muted)", fontSize: 11 }}>log of the number of distinct box itineraries of length n</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Counts for n = 1 to {L}: {C.join(", ")}. Slope at n = {L}: {slope.toFixed(3)}. Entropy of this map: {MAPS[k].h}.
      </p>
      <figcaption className="viz-caption">
        Cut the space into small boxes and record which box each of the first n points of an orbit visits. The number of
        different records grows like exp(hn), and the rate h, in the limit of small boxes, is the topological entropy.
        Isometries and maps settling on a cycle have h = 0; the doubling map has h = log 2.
      </figcaption>
    </figure>
  );
}
