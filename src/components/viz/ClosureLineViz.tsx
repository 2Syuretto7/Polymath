"use client";

import { useState } from "react";

type Piece =
  | { k: "int"; a: number; b: number; ca: boolean; cb: boolean }
  | { k: "pt"; x: number }
  | { k: "seq" }
  | { k: "dense"; a: number; b: number };
type Row = { label: string; set: Piece[]; text: string };
const iv = (a: number, b: number, ca: boolean, cb: boolean): Piece => ({ k: "int", a, b, ca, cb });
const pt = (x: number): Piece => ({ k: "pt", x });
const SETS: { label: string; rows: Row[] }[] = [
  {
    label: "(0, 1)",
    rows: [
      { label: "A", set: [iv(0, 1, false, false)], text: "(0, 1)" },
      { label: "interior", set: [iv(0, 1, false, false)], text: "(0, 1): A is open" },
      { label: "closure", set: [iv(0, 1, true, true)], text: "[0, 1]" },
      { label: "boundary", set: [pt(0), pt(1)], text: "{0, 1}" },
      { label: "limit points", set: [iv(0, 1, true, true)], text: "[0, 1]" },
    ],
  },
  {
    label: "[0, 1) ∪ {2}",
    rows: [
      { label: "A", set: [iv(0, 1, true, false), pt(2)], text: "[0, 1) ∪ {2}" },
      { label: "interior", set: [iv(0, 1, false, false)], text: "(0, 1)" },
      { label: "closure", set: [iv(0, 1, true, true), pt(2)], text: "[0, 1] ∪ {2}" },
      { label: "boundary", set: [pt(0), pt(1), pt(2)], text: "{0, 1, 2}" },
      { label: "limit points", set: [iv(0, 1, true, true)], text: "[0, 1]: 2 is an isolated point" },
    ],
  },
  {
    label: "{1/n}",
    rows: [
      { label: "A", set: [{ k: "seq" }], text: "{1, 1/2, 1/3, …}" },
      { label: "interior", set: [], text: "∅" },
      { label: "closure", set: [{ k: "seq" }, pt(0)], text: "A ∪ {0}" },
      { label: "boundary", set: [{ k: "seq" }, pt(0)], text: "A ∪ {0}" },
      { label: "limit points", set: [pt(0)], text: "{0}: every point of A is isolated" },
    ],
  },
  {
    label: "ℚ ∩ [0, 1]",
    rows: [
      { label: "A", set: [{ k: "dense", a: 0, b: 1 }], text: "the rationals in [0, 1]" },
      { label: "interior", set: [], text: "∅: every interval contains irrationals" },
      { label: "closure", set: [iv(0, 1, true, true)], text: "[0, 1]" },
      { label: "boundary", set: [iv(0, 1, true, true)], text: "[0, 1]" },
      { label: "limit points", set: [iv(0, 1, true, true)], text: "[0, 1]" },
    ],
  },
  {
    label: "[1, 2]",
    rows: [
      { label: "A", set: [iv(1, 2, true, true)], text: "[1, 2]" },
      { label: "interior", set: [iv(1, 2, false, false)], text: "(1, 2)" },
      { label: "closure", set: [iv(1, 2, true, true)], text: "[1, 2]: A is closed" },
      { label: "boundary", set: [pt(1), pt(2)], text: "{1, 2}" },
      { label: "limit points", set: [iv(1, 2, true, true)], text: "[1, 2]" },
    ],
  },
];
const W = 520, X0 = 120, X1 = 500, LO = -0.3, HI = 2.3;
const X = (v: number) => X0 + ((v - LO) / (HI - LO)) * (X1 - X0);

/** Interior, closure, boundary and limit points of subsets of the real line. */
export function ClosureLineViz() {
  const [si, setSi] = useState(0);
  const S = SETS[si];
  const rowH = 40, H = S.rows.length * rowH + 30;
  const draw = (p: Piece, y: number, i: number) => {
    if (p.k === "int") return (
      <g key={i}>
        <line x1={X(p.a)} y1={y} x2={X(p.b)} y2={y} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />
        <circle cx={X(p.a)} cy={y} r={5} style={{ fill: p.ca ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X(p.b)} cy={y} r={5} style={{ fill: p.cb ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
      </g>
    );
    if (p.k === "pt") return <circle key={i} cx={X(p.x)} cy={y} r={5} style={{ fill: "var(--accent)" }} />;
    if (p.k === "seq") return <g key={i}>{Array.from({ length: 40 }, (_, n) => <circle key={n} cx={X(1 / (n + 1))} cy={y} r={n < 8 ? 3.5 : 2} style={{ fill: "var(--accent)" }} />)}</g>;
    return <line key={i} x1={X(p.a)} y1={y} x2={X(p.b)} y2={y} style={{ stroke: "var(--accent)", strokeWidth: 4, strokeDasharray: "1 3" }} />;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        {SETS.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.label}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The set and its interior, closure, boundary and limit points on the real line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 1, 2].map((t) => (
          <g key={t}>
            <line x1={X(t)} y1={6} x2={X(t)} y2={H - 18} style={{ stroke: "var(--border)", strokeDasharray: "3 3" }} />
            <text x={X(t)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>
          </g>
        ))}
        {S.rows.map((r, i) => {
          const y = 20 + i * rowH;
          return (
            <g key={r.label}>
              <text x={4} y={y + 4} style={{ fill: "var(--text)", fontSize: 13, fontWeight: i === 0 ? 600 : 400 }}>{r.label}</text>
              <line x1={X(LO)} y1={y} x2={X(HI)} y2={y} style={{ stroke: "var(--border)" }} />
              {r.set.map((p, j) => draw(p, y, j))}
            </g>
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13, marginTop: 6 }}>
        {S.rows.map((r) => <div key={r.label}>{r.label}: {r.text}</div>)}
      </div>
      <figcaption className="viz-caption">
        The interior is the largest open set inside A, and the closure the smallest closed set containing it. A limit point is
        one whose every neighbourhood meets A at some other point. The closure is A together with its limit points, and the
        boundary is the closure minus the interior. Hollow circles are missing endpoints; the dotted line is the rationals.
      </figcaption>
    </figure>
  );
}
