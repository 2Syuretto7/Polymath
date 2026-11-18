"use client";

import { useState } from "react";

const PRESETS: { name: string; m: [number, number, number, number] }[] = [
  { name: "identity", m: [1, 0, 0, 1] },
  { name: "doubling", m: [2, 0, 0, 2] },
  { name: "cat map", m: [2, 1, 1, 1] },
  { name: "x ↦ −x", m: [-1, 0, 0, -1] },
  { name: "a shear", m: [1, 1, 0, 1] },
];

/** The Lefschetz number of a linear map of the torus, L = det(I − A), against its actual fixed points. */
export function LefschetzViz() {
  const [m, setM] = useState<[number, number, number, number]>([2, 1, 1, 1]);
  const [a, b, c, d] = m;
  const tr = a + d, det = a * d - b * c;
  const L = 1 - tr + det;
  const p = a - 1, q = b, r = c, s = d - 1;
  const D = p * s - q * r;
  const pts: [number, number][] = [];
  if (D !== 0) {
    const R = Math.abs(p) + Math.abs(q) + Math.abs(r) + Math.abs(s) + 1;
    for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) {
      const x = (s * i - q * j) / D, y = (-r * i + p * j) / D;
      if (x >= -1e-9 && x < 1 - 1e-9 && y >= -1e-9 && y < 1 - 1e-9) pts.push([x, y]);
    }
  }
  const bump = (k: number, v: number) => setM(m.map((x, i) => (i === k ? Math.max(-3, Math.min(3, x + v)) : x)) as [number, number, number, number]);
  const S = 170, X0 = 30, Y0 = 20;
  const f = (n: number) => (n < 0 ? `−${-n}` : `${n}`);
  return (
    <figure className="viz">
      <div className="viz-controls">
        {PRESETS.map((x) => <button key={x.name} type="button" className="btn btn-ghost" onClick={() => setM(x.m)}>{x.name}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginTop: 8 }}>
        <div className="mono" style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", gap: 6, fontSize: 14 }}>
          {m.map((v, k) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <button type="button" className="btn btn-ghost" onClick={() => bump(k, -1)} aria-label={`decrease entry ${k + 1}`}>−</button>
              <b style={{ minWidth: 22, textAlign: "center" }}>{f(v)}</b>
              <button type="button" className="btn btn-ghost" onClick={() => bump(k, 1)} aria-label={`increase entry ${k + 1}`}>+</button>
            </span>
          ))}
        </div>
        <svg viewBox="0 0 230 210" role="img" aria-label="Fixed points of a linear map of the torus" style={{ width: "100%", maxWidth: 260, display: "block" }}>
          <rect x={X0} y={Y0} width={S} height={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
          <text x={X0 + S / 2} y={Y0 + S + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the torus, opposite sides glued</text>
          {D === 0 ? (
            <text x={X0 + S / 2} y={Y0 + S / 2} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12, fontWeight: 700 }}>whole circles of fixed points</text>
          ) : pts.length <= 40 ? (
            pts.map(([x, y], i) => <circle key={i} cx={X0 + S * x} cy={Y0 + S * (1 - y)} r={5} style={{ fill: "var(--accent)", stroke: "var(--bg)", strokeWidth: 1 }} />)
          ) : (
            <text x={X0 + S / 2} y={Y0 + S / 2} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{pts.length} fixed points</text>
          )}
        </svg>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        On H₀, H₁, H₂ the map acts by 1, A, det A. L(f) = 1 − tr A + det A = 1 − ({f(tr)}) + ({f(det)}) = {f(L)}. {D === 0 ? "Since det(A − I) = 0 the fixed points are not isolated." : `Fixed points: ${pts.length} = |L|, each of index ${D > 0 ? "+1" : "−1"}.`}
      </p>
      <figcaption className="viz-caption">
        An integer matrix A gives a map of the torus ℝ²/ℤ². Its fixed points solve (A − I)x ∈ ℤ². The Lefschetz number is
        computed from homology alone, yet here it counts the fixed points exactly, with signs. When L ≠ 0, every map
        homotopic to this one has a fixed point too.
      </figcaption>
    </figure>
  );
}
