"use client";

import { useState } from "react";

/** Weight multiplicities of the sl(3) representation with highest weight aω₁ + bω₂, counted by Gelfand–Tsetlin patterns. */
export function sl3Weights(a: number, b: number) {
  const l1 = a + b, l2 = b, l3 = 0, tot = l1 + l2 + l3;
  const mult = new Map<string, { w: [number, number, number]; c: number }>();
  for (let m1 = l2; m1 <= l1; m1++) for (let m2 = l3; m2 <= l2; m2++) for (let nu = m2; nu <= m1; nu++) {
    const w: [number, number, number] = [nu, m1 + m2 - nu, tot - m1 - m2];
    const key = w.join(",");
    const e = mult.get(key);
    if (e) e.c++; else mult.set(key, { w, c: 1 });
  }
  return Array.from(mult.values());
}

const U = [[0, -1], [-Math.sqrt(3) / 2, 0.5], [Math.sqrt(3) / 2, 0.5]];

export function Sl3WeightViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const ws = sl3Weights(a, b);
  const dim = ws.reduce((s, e) => s + e.c, 0);
  const third = (a + 2 * b) / 3;
  const R = Math.min(48, 140 / Math.max(a + b, 1));
  const pos = (w: number[]) => {
    const c = w.map((v) => v - third);
    return [270 + R * (c[0] * U[0][0] + c[1] * U[1][0] + c[2] * U[2][0]), 160 + R * (c[0] * U[0][1] + c[1] * U[1][1] + c[2] * U[2][1])];
  };
  const hw = pos([a + b, b, 0]);
  const zero = ws.find((e) => e.w.every((v) => Math.abs(v - third) < 1e-9));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a} <input type="range" min={0} max={4} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {b} <input type="range" min={0} max={4} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
      </div>
      <svg viewBox="0 0 540 330" role="img" aria-label="Weight diagram of an sl(3) representation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ws.map((e) => {
          const [px, py] = pos(e.w);
          return (
            <g key={e.w.join(",")}>
              {Array.from({ length: e.c }, (_, k) => (
                <circle key={k} cx={px} cy={py} r={3 + k * 4} style={{ fill: k === 0 ? "var(--accent)" : "none", stroke: "var(--accent)", strokeWidth: 1.4 }} />
              ))}
            </g>
          );
        })}
        <circle cx={hw[0]} cy={hw[1]} r={8} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={hw[0] - 12} y={hw[1] + 4} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>highest weight</text>
        <text x={20} y={320} style={{ fill: "var(--text-muted)", fontSize: 11 }}>one ring for each unit of multiplicity</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Highest weight {a}ω₁ + {b}ω₂: {ws.length} distinct weights, dimension {dim}, zero weight {zero ? `has multiplicity ${zero.c}` : "does not occur"}.
      </p>
      <figcaption className="viz-caption">
        Each irreducible representation of sl(3) is fixed by its highest weight aω₁ + bω₂ with a, b ≥ 0 whole numbers.
        Its weights fill a hexagon (a triangle when a or b is 0) symmetric under the Weyl group. Multiplicities grow by one
        on each inner hexagonal layer until the layers become triangles, then stay constant.
      </figcaption>
    </figure>
  );
}
