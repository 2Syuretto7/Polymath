"use client";

import { useState } from "react";

/** With sharp cutoff c and margin m, n grains are known to be a heap iff n ≥ c + m, and known not to be iff n < c − m. */
export function verdict(n: number, c: number, m: number) {
  if (n >= c + m) return "known heap";
  if (n < c - m) return "known non-heap";
  return n >= c ? "a heap, but not knowably" : "not a heap, but not knowably";
}
export const unknowable = (c: number, m: number) => 2 * m;

/** Williamson’s epistemicism: a sharp cutoff surrounded by a margin within which nothing can be known. */
export function MarginForErrorViz() {
  const [c, setC] = useState(300);
  const [m, setM] = useState(20);
  const [n, setN] = useState(310);
  const px = (v: number) => 30 + ((v - 150) / 300) * 480;
  const v = verdict(n, c, m);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>hidden cutoff {c} grains <input type="range" min={200} max={400} step={10} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="cutoff" /></label>
        <label>margin for error {m} <input type="range" min={0} max={50} step={5} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="margin" /></label>
        <label>this pile: {n} grains <input type="range" min={150} max={450} step={5} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="grains" /></label>
      </div>
      <svg viewBox="0 0 540 120" role="img" aria-label="Number line of grains with the cutoff and the margin for error" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(150)} y={40} width={px(c - m) - px(150)} height={22} style={{ fill: "var(--danger-soft)" }} />
        <rect x={px(c - m)} y={40} width={px(c + m) - px(c - m)} height={22} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <rect x={px(c + m)} y={40} width={px(450) - px(c + m)} height={22} style={{ fill: "var(--success-soft)" }} />
        <line x1={px(c)} y1={30} x2={px(c)} y2={72} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={px(c)} y={24} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>cutoff</text>
        {[150, 200, 250, 300, 350, 400, 450].map((x) => <text key={x} x={px(x)} y={86} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>)}
        <line x1={px(n)} y1={36} x2={px(n)} y2={66} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={px(n)} y={106} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11, fontWeight: 700 }}>this pile</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {n} grains: {v}. {unknowable(c, m)} pile sizes lie within the margin, where the truth cannot be known.
      </p>
      <figcaption className="viz-caption">
        On Williamson&rsquo;s view &lsquo;heap&rsquo; has a sharp cutoff, fixed by the overall pattern of use. To know that a
        pile is a heap, your belief must be safe: it must still be true for piles you could easily have mistaken it for. So
        near the cutoff you cannot know either way, which is what borderline cases are.
      </figcaption>
    </figure>
  );
}
