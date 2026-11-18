"use client";

import { useState } from "react";

const CASES = [
  { name: "growing [0, 1 − 1/n]", a: (n: number) => 0, b: (n: number) => 1 - 1 / n, lim: "[0, 1)", limMu: "1", note: "Continuity from below: the measures 1 − 1/n rise to the measure of the union, 1." },
  { name: "shrinking [0, 1/n]", a: (n: number) => 0, b: (n: number) => 1 / n, lim: "{0}", limMu: "0", note: "Continuity from above: the measures 1/n fall to the measure of the intersection, the single point 0, which has measure 0." },
  { name: "shrinking [n, ∞)", a: (n: number) => n, b: () => Infinity, lim: "∅", limMu: "0", note: "Every set has infinite measure, but the intersection is empty. Continuity from above needs some set of finite measure." },
];

/** Continuity of measure along increasing and decreasing sequences of sets. */
export function MeasureLimitViz() {
  const [c, setC] = useState(0);
  const [n, setN] = useState(1);
  const C = CASES[c];
  const X = (x: number) => 30 + Math.min(x, 6.2) * 75;
  const a = C.a(n), b = C.b(n);
  const mu = b === Infinity ? "∞" : (b - a).toFixed(3);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sequence" style={{ flexWrap: "wrap" }}>
        {CASES.map((x, i) => <button key={x.name} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => { setC(i); setN(1); }}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="A set on the number line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={50} x2={505} y2={50} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        {[0, 1, 2, 3, 4, 5, 6].map((t) => (
          <g key={t}>
            <line x1={X(t)} y1={45} x2={X(t)} y2={55} style={{ stroke: "var(--text-muted)" }} />
            <text x={X(t)} y={72} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>
          </g>
        ))}
        <rect x={X(a)} y={38} width={Math.max(2, X(b) - X(a))} height={12} rx={3} style={{ fill: "var(--accent)" }} />
        {b === Infinity && <text x={500} y={32} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 12 }}>continues for ever</text>}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" disabled={n === 1} onClick={() => setN(n - 1)}>n − 1</button>
        <button type="button" className="btn btn-primary" disabled={n === 6} onClick={() => setN(n + 1)}>n + 1</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        n = {n}: λ(Aₙ) = {mu}. The limit set is {C.lim}, of measure {C.limMu}. {C.note}
      </p>
      <figcaption className="viz-caption">
        Here λ is length, Lebesgue measure on the line. Countable additivity gives both continuity properties; the third
        sequence shows why the finiteness condition cannot be dropped.
      </figcaption>
    </figure>
  );
}
