"use client";

import { useState } from "react";

/** The unit square as a sample space: A is a vertical strip, B is shaded within and outside A. */
export function IndepSquareViz() {
  const [pa, setPa] = useState(0.4);
  const [ba, setBa] = useState(0.6);
  const [bn, setBn] = useState(0.3);
  const pb = pa * ba + (1 - pa) * bn;
  const pab = pa * ba;
  const indep = Math.abs(ba - bn) < 1e-9;
  const W = 300, S = 260, o = 20;
  const sl = (nm: string, v: number, set: (x: number) => void) => (
    <label><span>{nm}: <span className="mono">{v.toFixed(2)}</span></span>
      <input type="range" min={0} max={1} step={0.05} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">{sl("P(A)", pa, setPa)}{sl("P(B | A)", ba, setBa)}{sl("P(B | Aᶜ)", bn, setBn)}</div>
      <svg viewBox={`0 0 ${W} ${S + 2 * o}`} role="img" aria-label="Unit square with events A and B" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
        <rect x={o} y={o} width={S} height={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <rect x={o} y={o + S * (1 - ba)} width={S * pa} height={S * ba} style={{ fill: "var(--accent)", fillOpacity: 0.75 }} />
        <rect x={o + S * pa} y={o + S * (1 - bn)} width={S * (1 - pa)} height={S * bn} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1 }} />
        <line x1={o + S * pa} y1={o} x2={o + S * pa} y2={o + S} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={o + (S * pa) / 2} y={o - 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>A</text>
        <text x={o + S * pa + (S * (1 - pa)) / 2} y={o - 6} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>Aᶜ</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        P(A ∩ B) = {pab.toFixed(3)}; P(A)P(B) = {pa.toFixed(2)} × {pb.toFixed(3)} = {(pa * pb).toFixed(3)}
      </p>
      <p style={{ margin: "4px 0", color: indep ? "var(--accent)" : "var(--text-muted)" }}>
        {indep ? "Independent: learning A leaves the chance of B unchanged." : `Dependent: learning A moves the chance of B from ${pb.toFixed(3)} to ${ba.toFixed(2)}.`}
      </p>
      <figcaption className="viz-caption">
        Area is probability. The strip on the left is A; B is shaded in both strips, darker inside A. The events are independent exactly when B fills the same fraction of A as of the whole square, which happens when P(B | A) = P(B | Aᶜ). Then P(A ∩ B) = P(A)P(B).
      </figcaption>
    </figure>
  );
}
