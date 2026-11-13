"use client";

import { useState } from "react";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const R = 110, CX = 150, CY = 140;

/** Colour the edges of a complete graph at random with two colours, and count the triangles whose edges all match. */
export function RamseyViz() {
  const [n, setN] = useState(6);
  const [seed, setSeed] = useState(3);
  const pts = Array.from({ length: n }, (_, i) => ({ x: CX + R * Math.sin((2 * Math.PI * i) / n), y: CY - R * Math.cos((2 * Math.PI * i) / n) }));
  const r = rng(seed * 31 + n);
  const col: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { col[i][j] = col[j][i] = r() < 0.5 ? 0 : 1; }
  const mono: [number, number, number][] = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) for (let k = j + 1; k < n; k++)
    if (col[i][j] === col[j][k] && col[j][k] === col[i][k]) mono.push([i, j, k]);
  const triangles = (n * (n - 1) * (n - 2)) / 6;
  const inMono = (a: number, b: number) => mono.some((t) => t.includes(a) && t.includes(b));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number of points">
        {[5, 6, 8].map((m) => (
          <button key={m} type="button" className={m === n ? "seg is-on" : "seg"} aria-pressed={m === n} onClick={() => setN(m)}>{m} points</button>
        ))}
      </div>
      <svg viewBox="0 0 300 280" role="img" aria-label={`A random two-colouring of the complete graph on ${n} points with ${mono.length} single-colour triangles.`} style={{ width: "100%", maxWidth: 360, display: "block", margin: "8px auto 0" }}>
        {pts.map((p, i) => pts.map((q, j) => j > i && (
          <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y}
            style={{ stroke: col[i][j] ? "var(--accent)" : "var(--danger)", strokeWidth: inMono(i, j) ? 3 : 1.2, strokeDasharray: col[i][j] ? "none" : "5 3", opacity: mono.length && !inMono(i, j) ? 0.35 : 1 }} />
        )))}
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={6} style={{ fill: "var(--text)" }} />)}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSeed(seed + 1)}>Colour again at random</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>triangles in all</td><td className="mono">{triangles}</td></tr>
          <tr><td>single-colour triangles in this colouring</td><td className="mono">{mono.length}</td></tr>
          <tr><td>expected number, {triangles} × 1/4</td><td className="mono">{(triangles / 4).toFixed(2)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each triangle has all three edges the same colour with probability 2 × (1/2)³ = 1/4. With 5 points, the expected
        number is 2.5, and some colourings have none. With 6 points, however often you recolour, you will never find a
        colouring with none: that is Ramsey&rsquo;s theorem for triangles.
      </figcaption>
    </figure>
  );
}
