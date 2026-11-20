"use client";

import { useState } from "react";

const COLS = ["var(--accent)", "var(--success)", "var(--danger)", "var(--text-muted)", "var(--accent)", "var(--success)", "var(--danger)"];

/** Weights of V(m) ⊗ V(n) for sl(2), peeled into irreducible strings V(m + n), V(m + n − 2), …, V(|m − n|). */
export function ClebschGordanViz() {
  const [m, setM] = useState(3);
  const [n, setN] = useState(2);
  const mult = new Map<number, number>();
  for (let i = 0; i <= m; i++) for (let j = 0; j <= n; j++) {
    const w = m - 2 * i + n - 2 * j;
    mult.set(w, (mult.get(w) ?? 0) + 1);
  }
  const tops: number[] = [];
  for (let t = m + n; t >= Math.abs(m - n); t -= 2) tops.push(t);
  const top = m + n;
  const X0 = 270, S = Math.min(26, 230 / Math.max(top, 1));
  const x = (w: number) => X0 + w * S;
  const H = 18, Y0 = 40 + tops.length * H;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={0} max={6} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={0} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox={`0 0 540 ${Y0 + 40}`} role="img" aria-label="Weight multiplicities of a tensor product of sl(2) representations" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={Y0} x2={520} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        {Array.from(mult.keys()).sort((a, b) => a - b).map((w) => (
          <text key={w} x={x(w)} y={Y0 + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(w).replace("-", "−")}</text>
        ))}
        {tops.map((t, layer) => (
          <g key={t}>
            {Array.from({ length: t + 1 }, (_, k) => t - 2 * k).map((w) => (
              <rect key={w} x={x(w) - S * 0.4} y={Y0 - (layer + 1) * H} width={S * 0.8} height={H - 3} rx={3} style={{ fill: COLS[layer % COLS.length], opacity: 0.75 }} />
            ))}
            <text x={x(t) + S * 0.5 + 4} y={Y0 - layer * H - 6} style={{ fill: "var(--text)", fontSize: 11 }}>V({t})</text>
          </g>
        ))}
        <text x={20} y={Y0 + 34} style={{ fill: "var(--text-muted)", fontSize: 11 }}>weight (eigenvalue of h); each column&rsquo;s height is the multiplicity of that weight</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        V({m}) ⊗ V({n}) = {tops.map((t) => `V(${t})`).join(" ⊕ ")}. Dimensions: {(m + 1) * (n + 1)} = {tops.map((t) => t + 1).join(" + ")}.
      </p>
      <figcaption className="viz-caption">
        The weights of V(m) ⊗ V(n) are the sums of a weight of V(m) and a weight of V(n). The highest, m + n, must start a
        copy of V(m + n); remove its string of weights and repeat with the highest weight left. Each layer is one
        irreducible summand.
      </figcaption>
    </figure>
  );
}
