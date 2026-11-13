"use client";

import { useState } from "react";

type Form = { name: string; P: (x: number, y: number) => number; Q: (x: number, y: number) => number };
const FORMS: Form[] = [
  { name: "−y dx + x dy", P: (_x, y) => -y, Q: (x) => x },
  { name: "y dx + x dy  (= d(xy))", P: (_x, y) => y, Q: (x) => x },
  { name: "(−y dx + x dy)/(x² + y²)", P: (x, y) => -y / (x * x + y * y), Q: (x, y) => x / (x * x + y * y) },
];
type Path = { name: string; c: (t: number) => [number, number] };
const PATHS: Path[] = [
  { name: "straight segment from (1, 0) to (−1, 0)", c: (t) => [1 - 2 * t, 0.0001] },
  { name: "upper semicircle from (1, 0) to (−1, 0)", c: (t) => [Math.cos(Math.PI * t), Math.sin(Math.PI * t)] },
  { name: "lower semicircle from (1, 0) to (−1, 0)", c: (t) => [Math.cos(Math.PI * t), -Math.sin(Math.PI * t)] },
  { name: "the chain: upper minus lower (a full loop)", c: (t) => [Math.cos(2 * Math.PI * t), Math.sin(2 * Math.PI * t)] },
];

/** Integrating a 1-form along curves and chains: exact forms give the same answer on paths with the same ends. */
export function ChainIntegralViz() {
  const [fi, setFi] = useState(0);
  const [pi, setPi] = useState(1);
  const F = FORMS[fi], Pt = PATHS[pi];
  const N = 2000;
  let s = 0;
  for (let i = 0; i < N; i++) {
    const [x0, y0] = Pt.c(i / N), [x1, y1] = Pt.c((i + 1) / N), xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
    s += F.P(xm, ym) * (x1 - x0) + F.Q(xm, ym) * (y1 - y0);
  }
  const W = 320, C = W / 2, k = 110;
  const X = (x: number) => C + x * k, Y = (y: number) => C - y * k;
  const d = Array.from({ length: 101 }, (_, i) => Pt.c(i / 100)).map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
  const [ex, ey] = Pt.c(0.97), [fx, fy] = Pt.c(1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Form">
        {FORMS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {PATHS.map((p, i) => <button key={p.name} type="button" aria-pressed={pi === i} className={pi === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setPi(i)}>{p.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The chosen curve or chain" style={{ width: "100%", maxWidth: 340, display: "block", margin: "8px auto" }}>
        <line x1={0} y1={C} x2={W} y2={C} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={0} x2={C} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={C} cy={C} r={3} style={{ fill: "var(--text-muted)" }} />
        <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <line x1={X(ex)} y1={Y(ey)} x2={X(fx)} y2={Y(fy)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} markerEnd="url(#ci-arrow)" />
        <defs><marker id="ci-arrow" viewBox="0 0 10 10" refX={5} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>∫ ω over this {pi === 3 ? "chain" : "curve"} = {s.toFixed(4)}{Math.abs(s - Math.PI) < 0.01 ? " = π" : Math.abs(s - 2 * Math.PI) < 0.01 ? " = 2π" : Math.abs(s + Math.PI) < 0.01 ? " = −π" : ""}</p>
      <figcaption className="viz-caption">
        ∫_c ω = ∫₀¹ ω_c(t)(c′(t)) dt. For the exact form d(xy), every path between the same endpoints gives the same value,
        f(end) − f(start) = 0, and every loop gives 0. The other forms are not exact, so the upper and lower semicircles differ.
        The last form is closed (dω = 0) away from the origin, yet its loop integral is 2π, because the loop goes round the hole.
      </figcaption>
    </figure>
  );
}
