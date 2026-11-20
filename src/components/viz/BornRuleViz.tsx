"use client";

import { useState } from "react";

/** A small deterministic random number generator, so the simulated runs are the same on every visit. */
function rng(seed: number) {
  let x = seed;
  return () => {
    x = (x * 1664525 + 1013904223) % 4294967296;
    return x / 4294967296;
  };
}

/** A spin state cos θ |up⟩ + sin θ |down⟩, and the Born rule for repeated measurements. */
export function BornRuleViz() {
  const [deg, setDeg] = useState(60);
  const th = (deg * Math.PI) / 180;
  const a = Math.cos(th);
  const b = Math.sin(th);
  const pUp = a * a;
  const r = rng(7);
  const runs = Array.from({ length: 100 }, () => r() < pUp);
  const ups = runs.filter(Boolean).length;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>θ = {deg}° <input type="range" min={0} max={90} step={5} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="theta" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The amplitudes of up and down and the outcomes of one hundred measurements" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={22} style={{ fill: "var(--text)", fontSize: 13 }}>state: {a.toFixed(2)} |up⟩ + {b.toFixed(2)} |down⟩</text>
        <text x={14} y={48} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Born rule: P(up) = {a.toFixed(2)}² = {(pUp * 100).toFixed(0)}%</text>
        <rect x={14} y={58} width={500} height={18} rx={3} style={{ fill: "var(--danger-soft)" }} />
        <rect x={14} y={58} width={500 * pUp} height={18} rx={3} style={{ fill: "var(--success)" }} />
        <text x={14} y={100} style={{ fill: "var(--text-muted)", fontSize: 11 }}>one hundred runs, each ending in a definite outcome</text>
        {runs.map((u, i) => <rect key={i} x={14 + (i % 25) * 20} y={110 + Math.floor(i / 25) * 20} width={16} height={16} rx={3} style={{ fill: u ? "var(--success)" : "var(--danger)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        θ = {deg}°: P(up) = {(pUp * 100).toFixed(0)}%; in this run {ups} of 100 came out up.
      </p>
      <figcaption className="viz-caption">
        The Schrödinger equation evolves the state smoothly and deterministically, and never turns a superposition into one
        definite outcome. Yet every measurement gives a single result, with frequencies matching the squared amplitudes.
        Reconciling these two facts is the measurement problem.
      </figcaption>
    </figure>
  );
}
