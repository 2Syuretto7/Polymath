"use client";

import { useState } from "react";

/** The quantifier-free condition equivalent to ∃x (ax² + bx + c = 0) over the reals. */
export function qfCondition(a: number, b: number, c: number) {
  return a !== 0 ? b * b - 4 * a * c >= 0 : b !== 0 || c === 0;
}

/** Quantifier elimination for real closed fields, in its simplest instance. */
export function QERealViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const qf = qfCondition(a, b, c);
  const f = (x: number) => a * x * x + b * x + c;
  const pts = Array.from({ length: 121 }, (_, i) => -6 + i * 0.1).map((x) => [270 + x * 40, 100 - Math.max(-90, Math.min(90, f(x))) * 10] as [number, number]);
  const roots: number[] = [];
  if (a !== 0) { const d = b * b - 4 * a * c; if (d >= 0) { roots.push((-b - Math.sqrt(d)) / (2 * a)); if (d > 0) roots.push((-b + Math.sqrt(d)) / (2 * a)); } }
  else if (b !== 0) roots.push(-c / b);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a} <input type="range" min={-3} max={3} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {b} <input type="range" min={-4} max={4} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
        <label>c = {c} <input type="range" min={-4} max={4} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="c" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The graph of the quadratic, with its real roots marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={100} x2={520} y2={100} style={{ stroke: "var(--border-strong)" }} />
        <line x1={270} y1={10} x2={270} y2={190} style={{ stroke: "var(--grid-line)" }} />
        <polyline points={pts.map((p) => p.join(",")).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {roots.filter((r) => Math.abs(r) <= 6).map((r) => <circle key={r} cx={270 + r * 40} cy={100} r={6} style={{ fill: "var(--success)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∃x ({a}x² + {b}x + {c} = 0) is {roots.length || (a === 0 && b === 0 && c === 0) ? "true" : "false"}; quantifier-free side: {a !== 0 ? `b² − 4ac = ${b * b - 4 * a * c} ${b * b - 4 * a * c >= 0 ? "≥" : "<"} 0` : "a = 0, so check b ≠ 0 or c = 0"}, which is {qf ? "true" : "false"}.
      </p>
      <figcaption className="viz-caption">
        Over the reals, the formula ∃x (ax² + bx + c = 0) is equivalent to (a ≠ 0 ∧ b² − 4ac ≥ 0) ∨ (a = 0 ∧ (b ≠ 0 ∨ c = 0)),
        which has no quantifiers. Tarski proved that every formula in the language of ordered fields has such an equivalent.
      </figcaption>
    </figure>
  );
}
