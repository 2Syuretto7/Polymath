"use client";

import { useState } from "react";

const f = (x: number) => 0.15 + 0.7 * Math.exp(-((x - 0.35) ** 2) / 0.03) + 0.35 * Math.exp(-((x - 0.78) ** 2) / 0.01);
const N = 2000;
const xs = Array.from({ length: N }, (_, i) => (i + 0.5) / N);
const exact = xs.reduce((s, x) => s + f(x), 0) / N;

/** Riemann slices the domain; Lebesgue slices the range. */
export function LayerCakeViz() {
  const [mode, setMode] = useState<"riemann" | "lebesgue">("lebesgue");
  const [n, setN] = useState(6);
  const X = (x: number) => 40 + x * 450, Y = (y: number) => 180 - y * 160;
  const top = 1;
  let approx = 0;
  const shapes: { x: number; y: number; w: number; h: number }[] = [];
  if (mode === "riemann") {
    for (let i = 0; i < n; i++) {
      const a = i / n, b = (i + 1) / n;
      const m = Math.min(...xs.filter((x) => x >= a && x < b).map(f));
      approx += m * (b - a);
      shapes.push({ x: X(a), y: Y(m), w: X(b) - X(a), h: Y(0) - Y(m) });
    }
  } else {
    for (let j = 1; j <= n; j++) {
      const t = (j * top) / n, t0 = ((j - 1) * top) / n;
      // the set {f ≥ t}, drawn as horizontal strips between heights t0 and t
      let start = -1;
      xs.forEach((x, i) => {
        const on = f(x) >= t;
        if (on && start < 0) start = i;
        if ((!on || i === N - 1) && start >= 0) { const e = on ? i : i - 1; shapes.push({ x: X(xs[start]), y: Y(t), w: X(xs[e]) - X(xs[start]), h: Y(t0) - Y(t) }); start = -1; }
      });
      approx += (top / n) * (xs.filter((x) => f(x) >= t).length / N);
    }
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="method">
        <button type="button" aria-pressed={mode === "riemann"} className={mode === "riemann" ? "seg is-on" : "seg"} onClick={() => setMode("riemann")}>slice the domain (Riemann)</button>
        <button type="button" aria-pressed={mode === "lebesgue"} className={mode === "lebesgue" ? "seg is-on" : "seg"} onClick={() => setMode("lebesgue")}>slice the range (Lebesgue)</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Rectangles under a curve" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {shapes.map((r, i) => <rect key={i} x={r.x} y={r.y} width={Math.max(0.5, r.w)} height={r.h} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1 }} />)}
        <polyline points={xs.filter((_, i) => i % 10 === 0).map((x) => `${X(x)},${Y(f(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
      </svg>
      <div className="segmented" role="group" aria-label="number of slices">
        {[3, 6, 12, 24].map((x) => <button key={x} type="button" aria-pressed={n === x} className={n === x ? "seg is-on" : "seg"} onClick={() => setN(x)}>{x} slices</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        lower sum with {n} slices: {approx.toFixed(4)}. Integral: {exact.toFixed(4)}.
        {mode === "lebesgue" ? " Each layer is (height step) × λ{f ≥ t}." : " Each strip is (width) × (least value on it)."}
      </p>
      <figcaption className="viz-caption">
        Riemann asks how high the graph is over each piece of the domain. Lebesgue asks, for each height t, how much of the
        domain lies above it, and adds up the layers. For simple functions this is just a weighted sum of measures, and it
        works for functions far too wild for vertical strips.
      </figcaption>
    </figure>
  );
}
