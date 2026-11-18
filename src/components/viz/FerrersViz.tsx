"use client";

import { useState } from "react";

/** All partitions of n, largest parts first, in reverse lexicographic order. */
export function partitions(n: number, max = n): number[][] {
  if (n === 0) return [[]];
  const out: number[][] = [];
  for (let p = Math.min(n, max); p >= 1; p--) for (const rest of partitions(n - p, p)) out.push([p, ...rest]);
  return out;
}
export const conjugate = (lam: number[]) => Array.from({ length: lam[0] ?? 0 }, (_, j) => lam.filter((x) => x > j).length);

/** Ferrers diagrams: step through the partitions of n and flip them. */
export function FerrersViz() {
  const [n, setN] = useState(6);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const all = partitions(n);
  const lam = all[i % all.length];
  const shown = flip ? conjugate(lam) : lam;
  const odd = all.filter((p) => p.every((x) => x % 2 === 1)).length;
  const distinct = all.filter((p) => new Set(p).size === p.length).length;
  const S = 22;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="n">
        {[4, 5, 6, 7, 8].map((x) => <button key={x} type="button" aria-pressed={n === x} className={n === x ? "seg is-on" : "seg"} onClick={() => { setN(x); setI(0); setFlip(false); }}>n = {x}</button>)}
      </div>
      <svg viewBox={`0 0 520 ${Math.max(60, 20 + shown.length * S)}`} role="img" aria-label="A Ferrers diagram of dots" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {shown.map((row, r) => Array.from({ length: row }, (_, c) => (
          <circle key={`${r}-${c}`} cx={200 + c * S} cy={20 + r * S} r={8} style={{ fill: flip ? "var(--danger)" : "var(--accent)" }} />
        )))}
        <text x={180} y={24} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 12 }}>{shown.join(" + ")}</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => { setI((i + 1) % all.length); setFlip(false); }}>Next partition</button>
        <button type="button" className={flip ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={flip} onClick={() => setFlip(!flip)}>Conjugate</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        partition {(i % all.length) + 1} of p({n}) = {all.length}: {lam.join(" + ")}{flip ? `; its conjugate, read by columns, is ${conjugate(lam).join(" + ")}` : ""}.
        Into odd parts: {odd}. Into distinct parts: {distinct}.
      </p>
      <figcaption className="viz-caption">
        Each row of dots is a part. Conjugating swaps rows and columns, so it matches partitions with at most m parts to
        partitions with no part larger than m. The counts into odd parts and into distinct parts always agree: Euler&rsquo;s theorem.
      </figcaption>
    </figure>
  );
}
