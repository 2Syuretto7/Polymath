"use client";

import { useState } from "react";

const CANDS: { name: string; f: (x: number, y: number) => number; verdict: string; ok: boolean }[] = [
  { name: "|x| + |y|", f: (x, y) => Math.abs(x) + Math.abs(y), ok: true, verdict: "A norm: the 1-norm. Its ball is a diamond, convex and symmetric." },
  { name: "max(|x|, |y|)", f: (x, y) => Math.max(Math.abs(x), Math.abs(y)), ok: true, verdict: "A norm: the sup-norm. Its ball is a square." },
  { name: "2|x| + |y|", f: (x, y) => 2 * Math.abs(x) + Math.abs(y), ok: true, verdict: "A norm: a weighted 1-norm. Any convex, symmetric, bounded ball with the origin inside gives a norm." },
  { name: "|x|", f: (x) => Math.abs(x), ok: false, verdict: "Not a norm: (0, 1) is non-zero but has size 0. It is a seminorm, and its ‘ball’ is an infinite strip." },
  { name: "(√|x| + √|y|)²", f: (x, y) => (Math.sqrt(Math.abs(x)) + Math.sqrt(Math.abs(y))) ** 2, ok: false, verdict: "Not a norm: the triangle inequality fails, e.g. for (1, 0) + (0, 1), size 4 > 1 + 1. The ball is not convex." },
];

/** Is it a norm? Draw the set where the candidate is at most 1. */
export function NormCheckViz() {
  const [k, setK] = useState(0);
  const C = CANDS[k];
  const S = 70, O = 130;
  const pts = Array.from({ length: 721 }, (_, i) => {
    const t = (i / 720) * 2 * Math.PI, c = Math.cos(t), s = Math.sin(t);
    const n = C.f(c, s);
    const r = n === 0 ? 3 : Math.min(3, 1 / n);
    return `${(O + S * r * c).toFixed(1)},${(O - S * r * s).toFixed(1)}`;
  }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="candidate">
        {CANDS.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.name}</button>)}
      </div>
      <svg viewBox="0 0 260 260" role="img" aria-label="The set where the candidate is at most 1" style={{ width: "100%", maxWidth: 300, display: "block", margin: "8px auto" }}>
        <defs><clipPath id="nc-clip"><rect x={0} y={0} width={260} height={260} /></clipPath></defs>
        <line x1={0} y1={O} x2={260} y2={O} style={{ stroke: "var(--border)" }} />
        <line x1={O} y1={0} x2={O} y2={260} style={{ stroke: "var(--border)" }} />
        <polygon points={pts} clipPath="url(#nc-clip)" style={{ fill: C.ok ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: C.ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
        <text x={O + S + 3} y={O + 14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={O + 4} y={O - S - 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
      </svg>
      <p style={{ fontSize: 14, margin: "4px 0", color: C.ok ? "var(--text)" : "var(--danger)" }}>{C.verdict}</p>
      <figcaption className="viz-caption">
        A norm must be positive on non-zero vectors, scale as ‖cv‖ = |c|‖v‖, and satisfy ‖u + v‖ ≤ ‖u‖ + ‖v‖. In pictures:
        the unit ball must be bounded, symmetric about the origin, and convex.
      </figcaption>
    </figure>
  );
}
