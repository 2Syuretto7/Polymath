"use client";

import { useState } from "react";

/** Expected moral patients under uncertainty: credence that one system is sentient, times the number of systems. */
export function SentienceCredenceViz() {
  const [c, setC] = useState(10);
  const [n, setN] = useState(50);
  const expected = (c / 100) * n;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>credence that a system is sentient = {c}% <input type="range" min={0} max={50} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="credence" /></label>
        <label>number of systems = {n} <input type="range" min={10} max={1000} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="systems" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="One hundred squares, with the expected share of sentient systems shaded" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>out of every 100 such systems, the expected number that are sentient</text>
        {Array.from({ length: 100 }, (_, i) => {
          const on = i < c;
          return <rect key={i} x={14 + (i % 20) * 15} y={30 + Math.floor(i / 20) * 15} width={12} height={12} rx={2} style={{ fill: on ? "var(--accent)" : "var(--bg-subtle)", stroke: on ? "var(--accent)" : "var(--border)" }} />;
        })}
        <text x={340} y={60} style={{ fill: "var(--text)", fontSize: 13 }}>expected moral patients</text>
        <text x={340} y={94} style={{ fill: expected >= 1 ? "var(--danger)" : "var(--text)", fontSize: 26, fontWeight: 700 }}>{expected % 1 === 0 ? expected : expected.toFixed(1)}</text>
        <text x={340} y={118} style={{ fill: "var(--text-muted)", fontSize: 11 }}>= {c}% × {n}</text>
        <text x={14} y={130} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Even a small credence, multiplied by many systems, can give a large expected number.</text>
        <text x={14} y={150} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Whether expected numbers are the right guide under deep uncertainty is itself disputed.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Credence {c}% and {n} systems: about {expected % 1 === 0 ? expected : expected.toFixed(1)} expected moral patients.
      </p>
      <figcaption className="viz-caption">
        We may never be certain whether an artificial system is sentient. A precautionary approach asks what we would owe
        such systems if they were, weighted by how likely that is. The calculation is crude, but it shows why a low
        probability need not settle the matter when systems can be copied by the million.
      </figcaption>
    </figure>
  );
}
