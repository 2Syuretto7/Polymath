"use client";

import { useState } from "react";

/** The quadratic form ⟨Tv, v⟩ of a symmetric 2 by 2 matrix around the unit circle, and the square root when it exists. */
export function PositiveViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [d, setD] = useState(2);
  const tr = a + d, det = a * d - b * b, r = Math.sqrt(Math.max(tr * tr - 4 * det, 0));
  const l1 = (tr + r) / 2, l2 = (tr - r) / 2;
  const pos = l2 >= -1e-9;
  const W = 320, o = W / 2, S = 26;
  const segs: { x1: number; y1: number; x2: number; y2: number; neg: boolean }[] = [];
  const pt = (t: number) => {
    const x = Math.cos(t), y = Math.sin(t), q = a * x * x + 2 * b * x * y + d * y * y;
    return { X: o + Math.abs(q) * S * x, Y: o - Math.abs(q) * S * y, q };
  };
  for (let k = 0; k < 240; k++) {
    const p = pt((k / 240) * 2 * Math.PI), s = pt(((k + 1) / 240) * 2 * Math.PI);
    segs.push({ x1: p.X, y1: p.Y, x2: s.X, y2: s.Y, neg: p.q + s.q < 0 });
  }
  // square root via the spectral decomposition
  let root: number[] | null = null;
  if (pos) {
    let v = Math.abs(b) > 1e-9 ? [b, l1 - a] : a >= d ? [1, 0] : [0, 1];
    const n = Math.hypot(v[0], v[1]);
    v = [v[0] / n, v[1] / n];
    const u = [-v[1], v[0]], s1 = Math.sqrt(l1), s2 = Math.sqrt(Math.max(l2, 0));
    root = [s1 * v[0] * v[0] + s2 * u[0] * u[0], s1 * v[0] * v[1] + s2 * u[0] * u[1], s1 * v[1] * v[1] + s2 * u[1] * u[1]];
  }
  const sl = (nm: string, v: number, set: (x: number) => void) => (
    <label><span>{nm}: <span className="mono">{v}</span></span>
      <input type="range" min={-3} max={3} step={0.5} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">{sl("a", a, setA)}{sl("b", b, setB)}{sl("d", d, setD)}</div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Polar plot of the quadratic form" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={o} cy={o} r={S} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        {segs.map((s, i) => <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} style={{ stroke: s.neg ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5 }} />)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        T = [{a}, {b}; {b}, {d}], eigenvalues {l1.toFixed(2)} and {l2.toFixed(2)}
      </p>
      <p style={{ margin: "4px 0", color: pos ? "var(--accent)" : "var(--danger)" }}>
        {pos
          ? `Positive: ⟨Tv, v⟩ ≥ 0 for every v. Its positive square root is [${root![0].toFixed(2)}, ${root![1].toFixed(2)}; ${root![1].toFixed(2)}, ${root![2].toFixed(2)}].`
          : "Not positive: ⟨Tv, v⟩ < 0 in the directions drawn in red, so T has no positive square root."}
      </p>
      <figcaption className="viz-caption">
        In each direction v on the unit circle, the curve is drawn at distance |⟨Tv, v⟩| from the centre, coloured red where the value is negative. A self-adjoint operator is positive exactly when the curve has no red, which happens exactly when both eigenvalues are at least 0. The longest and shortest reaches of the curve are the two eigenvalues.
      </figcaption>
    </figure>
  );
}
