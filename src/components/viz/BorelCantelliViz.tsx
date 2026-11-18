"use client";

import { useState } from "react";

const N = 2000;
function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Independent events Aₙ with P(Aₙ) = 1/nᵖ: finitely many occur when the sum converges, infinitely many when it diverges. */
export function BorelCantelliViz() {
  const [p10, setP10] = useState(15);
  const [seed, setSeed] = useState(7);
  const p = p10 / 10;
  const r = rng(seed);
  const hits: number[] = [];
  let sum = 0;
  for (let n = 1; n <= N; n++) {
    const q = Math.pow(n, -p);
    sum += q;
    if (r() < q) hits.push(n);
  }
  const X0 = 20, W = 480;
  const x = (n: number) => X0 + (Math.log(n) / Math.log(N)) * W;
  const last = hits[hits.length - 1];
  const late = hits.filter((n) => n > 100).length;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>p = {p.toFixed(1)} <input type="range" min={3} max={25} value={p10} onChange={(e) => setP10(Number(e.target.value))} aria-label="p" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new sample</button>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="Which events occurred, on a logarithmic scale" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={50} x2={X0 + W} y2={50} style={{ stroke: "var(--border-strong)" }} />
        {hits.map((n) => <line key={n} x1={x(n)} y1={34} x2={x(n)} y2={50} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
        {[1, 10, 100, 1000].map((n) => <text key={n} x={x(n)} y={68} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n}</text>)}
        <text x={X0 + W} y={68} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>2000</text>
        <text x={X0} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>n on a log scale; a tick where Aₙ occurred</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Σ P(Aₙ) up to 2000 = {sum.toFixed(2)} ({p > 1 ? "the full series converges" : "the full series diverges"}). Occurred: {hits.length}; after n = 100: {late}; last at n = {last ?? "none"}.
      </p>
      <figcaption className="viz-caption">
        The events are independent with P(Aₙ) = 1/nᵖ. For p &gt; 1 the series converges, and by the first Borel–Cantelli
        lemma only finitely many Aₙ occur, almost surely. For p ≤ 1 it diverges, and by the second lemma infinitely many
        occur; on a log scale they keep appearing at every scale.
      </figcaption>
    </figure>
  );
}
