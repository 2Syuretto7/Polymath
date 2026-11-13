"use client";

import { useState } from "react";

/** A quadratic form in two bases: the matrix changes, the signature does not (Sylvester's law of inertia). */
export function SignatureViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(-1);
  const [s, setS] = useState(0);
  // new basis f1 = e1, f2 = s e1 + e2; matrix PᵀAP with P = [[1, s], [0, 1]]
  const A2 = [a, a * s + b, a * s + b, a * s * s + 2 * b * s + c];
  const tr = a + c, det = a * c - b * b, r = Math.sqrt(Math.max(tr * tr - 4 * det, 0));
  const l = [(tr + r) / 2, (tr - r) / 2];
  const pos = l.filter((x) => x > 1e-9).length, neg = l.filter((x) => x < -1e-9).length, zer = 2 - pos - neg;
  const W = 320, o = W / 2, S = 50, R = 3;
  const curves: { pts: string; sign: number }[] = [];
  let cur: string[] = [], curSign = 0;
  for (let k = 0; k <= 720; k++) {
    const t = (k / 720) * 2 * Math.PI, x = Math.cos(t), y = Math.sin(t);
    const q = a * x * x + 2 * b * x * y + c * y * y;
    const sg = q > 1e-6 ? 1 : q < -1e-6 ? -1 : 0;
    const rr = sg ? 1 / Math.sqrt(Math.abs(q)) : Infinity;
    if (sg === 0 || rr > R || sg !== curSign) {
      if (cur.length > 1) curves.push({ pts: cur.join(" "), sign: curSign });
      cur = [];
      curSign = sg;
      if (sg === 0 || rr > R) continue;
    }
    cur.push(`${(o + rr * x * S).toFixed(1)},${(o - rr * y * S).toFixed(1)}`);
  }
  if (cur.length > 1) curves.push({ pts: cur.join(" "), sign: curSign });
  const kind = pos === 2 ? "positive definite: q = 1 is an ellipse" : neg === 2 ? "negative definite: q = −1 is an ellipse" : pos === 1 && neg === 1 ? "indefinite: q = ±1 are hyperbolas" : zer === 2 ? "zero form" : "degenerate: the level sets are pairs of lines";
  const f2 = [s, 1];
  const sl = (nm: string, v: number, set: (x: number) => void, min = -2, max = 2) => (
    <label><span>{nm}: <span className="mono">{v}</span></span>
      <input type="range" min={min} max={max} step={0.5} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">{sl("a", a, setA)}{sl("b", b, setB)}{sl("c", c, setC)}{sl("shear the basis, s", s, setS)}</div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Level sets q = 1 and q = −1" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {curves.map((cv, i) => <polyline key={i} points={cv.pts} style={{ fill: "none", stroke: cv.sign > 0 ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />)}
        <line x1={o} y1={o} x2={o + S} y2={o} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <line x1={o} y1={o} x2={o + f2[0] * S} y2={o - f2[1] * S} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <text x={o + S + 4} y={o - 6} style={{ fill: "var(--text)", fontSize: 12 }}>f₁</text>
        <text x={o + f2[0] * S + 4} y={o - f2[1] * S - 4} style={{ fill: "var(--text)", fontSize: 12 }}>f₂</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        matrix in the standard basis [{a}, {b}; {b}, {c}]; in the basis f₁, f₂: [{A2[0]}, {A2[1]}; {A2[2]}, {A2[3]}]
      </p>
      <p className="mono" style={{ margin: "4px 0" }}>
        signature: {pos} positive, {neg} negative, {zer} zero; {kind}
      </p>
      <figcaption className="viz-caption">
        The curve q = 1 is drawn in the main colour and q = −1 in red. Shearing the basis changes every entry of the matrix that represents the form, but not the curves themselves, and not the number of positive, negative and zero entries a diagonal matrix for the form can have. That count is the signature, and Sylvester’s law of inertia says it never depends on the basis.
      </figcaption>
    </figure>
  );
}
