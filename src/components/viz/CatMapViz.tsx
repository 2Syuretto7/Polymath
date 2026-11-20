"use client";

import { useState } from "react";

const NS = [11, 20, 37, 50, 61];

/** Smallest k ≥ 1 with [[2, 1], [1, 1]]ᵏ ≡ identity mod N: every point of the N × N grid returns after k steps. */
export function catPeriod(N: number) {
  let a = 2, b = 1, c = 1, d = 1;
  for (let k = 1; k < 10000; k++) {
    if (a % N === 1 % N && b % N === 0 && c % N === 0 && d % N === 1 % N) return k;
    [a, b, c, d] = [(2 * a + c) % N, (2 * b + d) % N, (a + c) % N, (b + d) % N];
  }
  return -1;
}

const inPicture = (x: number, y: number, N: number) => {
  const u = x / N, v = y / N;
  return (u - 0.35) ** 2 + (v - 0.6) ** 2 < 0.05 || (u > 0.6 && u < 0.75 && v > 0.15 && v < 0.85);
};

/** Arnold's cat map on an N × N grid: the picture is scrambled, yet every point comes back. */
export function CatMapViz() {
  const [ni, setNi] = useState(2);
  const N = NS[ni];
  const P = catPeriod(N);
  const [k, setK] = useState(0);
  const kk = Math.min(k, P);
  // where does the cell that starts at (x, y) sit after kk steps?
  const cells: { x: number; y: number; on: boolean }[] = [];
  for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
    let u = x, v = y;
    for (let s = 0; s < kk; s++) [u, v] = [(2 * u + v) % N, (u + v) % N];
    cells.push({ x: u, y: v, on: inPicture(x, y, N) });
  }
  const S = 220 / N;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="grid size">
        {NS.map((n, i) => <button key={n} type="button" aria-pressed={ni === i} className={ni === i ? "seg is-on" : "seg"} onClick={() => { setNi(i); setK(0); }}>N = {n}</button>)}
      </div>
      <div className="viz-controls">
        <label>step k = {kk} <input type="range" min={0} max={P} step={1} value={kk} onChange={(e) => setK(Number(e.target.value))} aria-label="step" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setK(Math.min(P, kk + 1))}>Next step</button>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A picture on a grid under the cat map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={20} y={15} width={220} height={220} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {cells.filter((c) => c.on).map((c, i) => <rect key={i} x={20 + c.x * S} y={15 + (N - 1 - c.y) * S} width={S} height={S} style={{ fill: "var(--accent)" }} />)}
        <text x={270} y={50} style={{ fill: "var(--text)", fontSize: 12 }}>(x, y) ↦ (2x + y, x + y) mod {N}</text>
        <text x={270} y={80} style={{ fill: "var(--text)", fontSize: 12 }}>Every cell returns after {P} steps.</text>
        <text x={270} y={110} style={{ fill: "var(--text-muted)", fontSize: 12 }}>{kk === 0 ? "Step 0: the starting picture." : kk === P ? "The picture is back exactly." : "Scrambled, but nothing is lost."}</text>
        <text x={270} y={140} style={{ fill: "var(--text-muted)", fontSize: 11 }}>The map has determinant 1, so it permutes</text>
        <text x={270} y={156} style={{ fill: "var(--text-muted)", fontSize: 11 }}>the {N * N} cells; a permutation of a finite set</text>
        <text x={270} y={172} style={{ fill: "var(--text-muted)", fontSize: 11 }}>returns every point.</text>
      </svg>
      <figcaption className="viz-caption">
        Arnold&rsquo;s cat map preserves area. On the continuous torus it is chaotic, yet Poincaré&rsquo;s recurrence
        theorem says almost every point returns arbitrarily close to where it started. On a finite grid the return is
        exact: the scrambled picture reassembles itself.
      </figcaption>
    </figure>
  );
}
