"use client";

import { useState } from "react";

const PR = [7, 11, 13, 17, 19, 23, 29];

/** Gauss's lemma: (a / p) = (−1)^μ, where μ counts the multiples a, 2a, …, ((p − 1)/2)a whose least residue exceeds p/2. */
export function GaussLemmaViz() {
  const [p, setP] = useState(13);
  const [a, setA] = useState(2);
  const A = Math.min(a, p - 1);
  const h = (p - 1) / 2;
  const ks = Array.from({ length: h }, (_, i) => i + 1);
  const rs = ks.map((k) => (k * A) % p);
  const mu = rs.filter((r) => r > p / 2).length;
  const W = 560, X = (r: number) => 20 + (r / p) * (W - 40);
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>prime p:</span>
        {PR.map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "viz-chip is-on" : "viz-chip"} onClick={() => setP(q)}>{q}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>a: <span className="mono">{A}</span></span>
          <input type="range" min={1} max={p - 1} step={1} value={A} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 110`} role="img" aria-label="Least residues of the first half of the multiples of a" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <rect x={X(p / 2)} y={30} width={X(p) - X(p / 2)} height={44} style={{ fill: "var(--danger)", fillOpacity: 0.08 }} />
        <line x1={X(0)} y1={52} x2={X(p)} y2={52} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        <line x1={X(p / 2)} y1={26} x2={X(p / 2)} y2={78} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <text x={X(p / 2)} y={20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>p/2</text>
        {Array.from({ length: p + 1 }, (_, r) => <text key={r} x={X(r)} y={94} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 9 }}>{r}</text>)}
        {rs.map((r, i) => (
          <g key={i}>
            <circle cx={X(r)} cy={52} r={9} style={{ fill: r > p / 2 ? "var(--danger)" : "var(--accent)" }} />
            <text x={X(r)} y={56} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 9, fontWeight: 700 }}>{ks[i]}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 13 }}>
        {ks.map((k, i) => `${k}·${A} ≡ ${rs[i]}`).join(",  ")}
      </p>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>μ = {mu}, so ({A} / {p}) = (−1)^{mu} = {mu % 2 ? "−1" : "+1"}</p>
      <figcaption className="viz-caption">
        Each circle is k·a modulo p for k = 1 to (p − 1)/2, labelled by k. Those beyond p/2 are counted in μ. Replacing each of them by p minus itself gives exactly the numbers 1 to (p − 1)/2 again, which is the heart of Gauss&rsquo;s proof.
      </figcaption>
    </figure>
  );
}
