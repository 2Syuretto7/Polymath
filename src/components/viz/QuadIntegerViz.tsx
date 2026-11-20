"use client";

import { useState } from "react";

export const DS = [-15, -14, -13, -11, -10, -7, -6, -5, -3, -2, -1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15];
/** True when the ring of integers of ℚ(√d) is ℤ[(1 + √d)/2], that is, when d ≡ 1 (mod 4). */
export const isOneMod4 = (d: number) => ((d % 4) + 4) % 4 === 1;
/** The minimal polynomial x² + px + q of the generator ω of the ring of integers, as [p, q]. */
export const minPoly = (d: number): [number, number] => (isOneMod4(d) ? [-1, (1 - d) / 4] : [0, -d]);

/** Points a + bω of the ring of integers, drawn in the plane (complex fields) or by their two real embeddings (real fields). */
export function embed(d: number, a: number, b: number): [number, number] {
  const r = Math.sqrt(Math.abs(d));
  const half = isOneMod4(d);
  if (d < 0) return half ? [a + b / 2, (b * r) / 2] : [a, b * r];
  return half ? [a + (b * (1 + r)) / 2, a + (b * (1 - r)) / 2] : [a + b * r, a - b * r];
}

/** The ring of integers of a quadratic field, and the extra integers it has beyond ℤ[√d]. */
export function QuadIntegerViz() {
  const [k, setK] = useState(10);
  const d = DS[k];
  const half = isOneMod4(d);
  const S = 22, X0 = 270, Y0 = 125;
  const pts: [number, number, boolean][] = [];
  for (let b = -12; b <= 12; b++) for (let a = -30; a <= 30; a++) {
    const [x, y] = embed(d, a, b);
    if (Math.abs(x) <= 11.5 && Math.abs(y) <= 4.9) pts.push([x, y, half && b % 2 !== 0]);
  }
  const [p, q] = minPoly(d);
  const ds = String(d).replace("-", "−");
  const poly = `x²${p ? " − x" : ""} ${q < 0 ? "−" : "+"} ${Math.abs(q)}`;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>d = {ds} <input type="range" min={0} max={DS.length - 1} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="The ring of integers of a quadratic field as a lattice" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--grid-line)" }} />
        <line x1={X0} y1={5} x2={X0} y2={245} style={{ stroke: "var(--grid-line)" }} />
        {pts.map(([x, y, extra], i) => (
          <circle key={i} cx={X0 + x * S} cy={Y0 - y * S} r={extra ? 3.6 : 2.8} style={{ fill: extra ? "var(--accent)" : "var(--text-muted)" }} />
        ))}
        <text x={14} y={16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{d < 0 ? "complex plane" : "axes: the two real embeddings"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        d = {ds} ≡ {((d % 4) + 4) % 4} (mod 4). Ring of integers ℤ[ω] with ω = {half ? `(1 + √${ds})/2` : `√${ds}`}, minimal polynomial {poly}. Index of ℤ[√{ds}] in it: {half ? 2 : 1}.
      </p>
      <figcaption className="viz-caption">
        Grey points lie in ℤ[√d]. When d ≡ 1 (mod 4), the number (1 + √d)/2 is a root of a monic polynomial with integer
        coefficients, so it is an algebraic integer, and the ring of integers gains the accented points halfway between
        rows. For real fields each number a + b√d is drawn at the point (a + b√d, a − b√d).
      </figcaption>
    </figure>
  );
}
