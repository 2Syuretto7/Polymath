"use client";

import { useState } from "react";

/** Under cutoff c, a height h (in cm) counts as tall when h ≥ c. Admissible cutoffs are the integers lo to hi. */
export function status(h: number, lo: number, hi: number) {
  if (h >= hi) return "super-true";
  if (h < lo) return "super-false";
  return "indeterminate";
}
export const borderlineCount = (lo: number, hi: number) => { let n = 0; for (let h = 150; h <= 200; h++) if (status(h, lo, hi) === "indeterminate") n++; return n; };

/** Supervaluations for ‘tall’: truth on every admissible sharpening. */
export function SupervaluationViz() {
  const [lo, setLo] = useState(170);
  const [hi, setHi] = useState(185);
  const [h, setH] = useState(178);
  const L = Math.min(lo, hi), H = Math.max(lo, hi);
  const px = (v: number) => 30 + (v - 150) * 9.2;
  const st = status(h, L, H);
  const colour = st === "super-true" ? "var(--success)" : st === "super-false" ? "var(--danger)" : "var(--text-muted)";
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>lowest admissible cutoff {lo} cm <input type="range" min={155} max={195} step={1} value={lo} onChange={(e) => setLo(Number(e.target.value))} aria-label="lowest cutoff" /></label>
        <label>highest admissible cutoff {hi} cm <input type="range" min={155} max={195} step={1} value={hi} onChange={(e) => setHi(Number(e.target.value))} aria-label="highest cutoff" /></label>
        <label>Ravi&rsquo;s height {h} cm <input type="range" min={150} max={200} step={1} value={h} onChange={(e) => setH(Number(e.target.value))} aria-label="height" /></label>
      </div>
      <svg viewBox="0 0 540 120" role="img" aria-label="Heights with the range of admissible cutoffs for tall" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(150)} y={40} width={px(L) - px(150)} height={20} style={{ fill: "var(--danger-soft)" }} />
        <rect x={px(L)} y={40} width={px(H) - px(L)} height={20} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <rect x={px(H)} y={40} width={px(200) - px(H)} height={20} style={{ fill: "var(--success-soft)" }} />
        {[150, 160, 170, 180, 190, 200].map((v) => <text key={v} x={px(v)} y={78} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={(px(150) + px(L)) / 2} y={32} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 10 }}>{L > 156 ? "not tall on every sharpening" : ""}</text>
        <text x={(px(L) + px(H)) / 2} y={32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{H - L >= 8 ? "borderline" : ""}</text>
        <text x={(px(H) + px(200)) / 2} y={32} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 10 }}>{H < 194 ? "tall on every sharpening" : ""}</text>
        <line x1={px(h)} y1={34} x2={px(h)} y2={66} style={{ stroke: colour, strokeWidth: 3 }} />
        <text x={px(h)} y={100} textAnchor="middle" style={{ fill: colour, fontSize: 11, fontWeight: 700 }}>Ravi</text>
      </svg>
      <ul style={{ margin: "6px 0", paddingLeft: 18, fontSize: 13 }}>
        <li>&lsquo;Ravi is tall&rsquo;: {st}.</li>
        <li>&lsquo;Ravi is tall or Ravi is not tall&rsquo;: super-true, since it holds on every sharpening.</li>
        <li>&lsquo;There is a height n such that n cm is tall and n − 1 cm is not&rsquo;: super-true, though no particular n makes it so.</li>
      </ul>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {borderlineCount(L, H)} whole-centimetre heights from 150 to 200 are borderline.
      </p>
      <figcaption className="viz-caption">
        A sharpening chooses one exact cutoff for &lsquo;tall&rsquo; within the admissible range. A sentence is super-true if
        it is true on every sharpening, super-false if false on every one, and otherwise neither. Classical logic survives,
        but the sorites premise &lsquo;if n cm is tall, so is n − 1 cm&rsquo; comes out super-false.
      </figcaption>
    </figure>
  );
}
