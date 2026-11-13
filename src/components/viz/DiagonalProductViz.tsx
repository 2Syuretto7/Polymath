"use client";

import { useMemo, useState } from "react";

const N = 20000, D = 6, DEPTH = 2;

/** Points of the cube [0, 1]^6 standing in for [0, 1]^ℕ, from a fixed seeded sequence. */
function points(seed: number): number[][] {
  let s = seed * 7919 + 13;
  const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  return Array.from({ length: N }, () => Array.from({ length: D }, () => r()));
}

/** Coordinate by coordinate, keep the half of each interval holding more of the sequence: the diagonal argument behind Tychonoff for countable products. */
export function DiagonalProductViz() {
  const [stage, setStage] = useState(0);
  const [seed, setSeed] = useState(1);
  const pts = useMemo(() => points(seed), [seed]);
  const steps = useMemo(() => {
    let alive = pts.map((_, i) => i);
    const ivs: [number, number][] = Array.from({ length: D }, () => [0, 1]);
    const out = [{ alive: alive.length, ivs: ivs.map((x) => [...x] as [number, number]) }];
    for (let k = 0; k < D; k++) {
      let [a, b] = ivs[k];
      for (let j = 0; j < DEPTH; j++) {
        const m = (a + b) / 2;
        const lo = alive.filter((i) => pts[i][k] < m), hi = alive.filter((i) => pts[i][k] >= m);
        if (lo.length >= hi.length) { alive = lo; b = m; } else { alive = hi; a = m; }
      }
      ivs[k] = [a, b];
      out.push({ alive: alive.length, ivs: ivs.map((x) => [...x] as [number, number]) });
    }
    return out;
  }, [pts]);
  const S = steps[stage];
  const W = 520, X0 = 110, X1 = 500, X = (v: number) => X0 + v * (X1 - X0);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={stage >= D} onClick={() => setStage(stage + 1)}>Squeeze the next coordinate</button>
        <button type="button" className="btn" onClick={() => setStage(0)}>Start again</button>
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>which sequence: <span className="mono">{seed}</span></span>
          <input type="range" min={1} max={10} step={1} value={seed} onChange={(e) => { setSeed(Number(e.target.value)); setStage(0); }} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${D * 34 + 20}`} role="img" aria-label="For each coordinate, the interval where the chosen terms of the sequence lie" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {S.ivs.map(([a, b], k) => {
          const y = 20 + k * 34;
          return (
            <g key={k}>
              <text x={4} y={y + 4} style={{ fill: "var(--text)", fontSize: 13 }}>coordinate {k + 1}</text>
              <line x1={X(0)} y1={y} x2={X(1)} y2={y} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
              <line x1={X(a)} y1={y} x2={X(b)} y2={y} style={{ stroke: k < stage ? "var(--accent)" : "var(--text-faint)", strokeWidth: 8 }} />
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        after {stage} coordinate{stage === 1 ? "" : "s"}: {S.alive} of {N} terms remain{stage > 0 ? `, each squeezed coordinate now lies in an interval of width 1/${2 ** DEPTH}` : ""}
      </p>
      <figcaption className="viz-caption">
        Here a long sequence in the cube stands in for an infinite one. At each coordinate we halve the interval repeatedly,
        keeping the half that holds more terms; with an infinite sequence one half always holds infinitely many. Taking the nth
        surviving term at stage n gives a subsequence that converges in every coordinate, which is convergence in the product
        topology.
      </figcaption>
    </figure>
  );
}
