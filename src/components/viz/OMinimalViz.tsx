"use client";

import { useState } from "react";

type Piece = { kind: "point"; at: number } | { kind: "interval"; lo: number; hi: number };

export const SETS: { label: string; structure: string; pieces: Piece[]; finite: boolean; note: string }[] = [
  { label: "x³ − x > 0", structure: "(ℝ, <, +, ·)", pieces: [{ kind: "interval", lo: -1, hi: 0 }, { kind: "interval", lo: 1, hi: Infinity }], finite: true, note: "two open intervals, (−1, 0) and (1, ∞)" },
  { label: "x²(x − 1) ≥ 0", structure: "(ℝ, <, +, ·)", pieces: [{ kind: "point", at: 0 }, { kind: "point", at: 1 }, { kind: "interval", lo: 1, hi: Infinity }], finite: true, note: "the points 0 and 1 and the interval (1, ∞)" },
  { label: "∃y (y² = x)", structure: "(ℝ, <, +, ·)", pieces: [{ kind: "point", at: 0 }, { kind: "interval", lo: 0, hi: Infinity }], finite: true, note: "the point 0 and the interval (0, ∞)" },
  { label: "sin x = 0", structure: "(ℝ, <, +, ·, sin)", pieces: Array.from({ length: 41 }, (_, i) => ({ kind: "point" as const, at: (i - 20) * Math.PI })), finite: false, note: "the points kπ for every integer k" },
];

/** Definable subsets of the line in an o-minimal structure are finite unions of points and open intervals. */
export function OMinimalViz() {
  const [k, setK] = useState(0);
  const S = SETS[k];
  const X = (x: number) => 270 + Math.max(-6.5, Math.min(6.5, x)) * 38;
  const shown = S.pieces.filter((p) => (p.kind === "point" ? Math.abs(p.at) <= 6.3 : true));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="formula">
        {SETS.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 540 110" role="img" aria-label="The defined subset of the real line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={55} x2={520} y2={55} style={{ stroke: "var(--border-strong)" }} />
        {[-6, -4, -2, 0, 2, 4, 6].map((t) => (
          <g key={t}>
            <line x1={X(t)} y1={51} x2={X(t)} y2={59} style={{ stroke: "var(--text-faint)" }} />
            <text x={X(t)} y={80} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>
          </g>
        ))}
        {shown.map((p, i) =>
          p.kind === "point" ? (
            <circle key={i} cx={X(p.at)} cy={55} r={5} style={{ fill: "var(--accent)" }} />
          ) : (
            <g key={i}>
              <line x1={X(p.lo)} y1={55} x2={X(p.hi)} y2={55} style={{ stroke: "var(--accent)", strokeWidth: 5 }} />
              {Number.isFinite(p.lo) && <circle cx={X(p.lo)} cy={55} r={5} style={{ fill: "var(--surface)", stroke: "var(--accent)", strokeWidth: 2 }} />}
              {Number.isFinite(p.hi) && <circle cx={X(p.hi)} cy={55} r={5} style={{ fill: "var(--surface)", stroke: "var(--accent)", strokeWidth: 2 }} />}
            </g>
          ),
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        In {S.structure}, {S.label} defines {S.note}:{" "}
        {S.finite ? <span style={{ color: "var(--success)" }}>{S.pieces.length} pieces, a finite union.</span> : <span style={{ color: "var(--danger)" }}>infinitely many pieces, so this structure is not o-minimal.</span>}
      </p>
      <figcaption className="viz-caption">
        An ordered structure is o-minimal when every definable subset of the line, with parameters, is a finite union of
        points and open intervals. The real field is o-minimal by Tarski&rsquo;s quantifier elimination; adding the sine
        function destroys this, because its zero set is an infinite discrete set.
      </figcaption>
    </figure>
  );
}
