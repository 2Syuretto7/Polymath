"use client";

import { useState } from "react";

const FNS: { name: string; f: (x: number) => number; k: string; note: string }[] = [
  { name: "|x|", f: (x) => Math.abs(x), k: "C⁰ only", note: "Continuous, but the derivative jumps from −1 to 1 at 0." },
  { name: "x|x|", f: (x) => x * Math.abs(x), k: "C¹, not C²", note: "The derivative 2|x| is continuous; the second derivative jumps from −2 to 2." },
  { name: "x²|x|", f: (x) => x * x * Math.abs(x), k: "C², not C³", note: "Derivatives 3x|x| and 6|x| are continuous; the third jumps from −6 to 6." },
  { name: "exp(−1/x) for x > 0, else 0", f: (x) => (x > 0 ? Math.exp(-1 / x) : 0), k: "C∞, not analytic", note: "Every derivative at 0 is 0, so its Taylor series is 0, yet the function is not 0 to the right: smooth but not analytic." },
  { name: "x³", f: (x) => x * x * x, k: "C∞, analytic", note: "A polynomial: smooth and equal to its Taylor series everywhere." },
];

/** Classes of smoothness: plots of a function and its first two derivatives, computed numerically. */
export function SmoothnessViz() {
  const [k, setK] = useState(1);
  const F = FNS[k];
  const h = 1e-3;
  const d1 = (x: number) => (F.f(x + h) - F.f(x - h)) / (2 * h);
  const d2 = (x: number) => (F.f(x + h) - 2 * F.f(x) + F.f(x - h)) / (h * h);
  const xs = Array.from({ length: 201 }, (_, i) => -1.5 + (3 * i) / 200).filter((x) => Math.abs(x) > 2 * h);
  const panel = (g: (x: number) => number, title: string, x0: number) => {
    const ys = xs.map(g);
    const lo = Math.min(-0.2, ...ys), hi = Math.max(0.2, ...ys);
    const sx = (x: number) => x0 + ((x + 1.5) / 3) * 150;
    const sy = (y: number) => 30 + 140 - ((y - lo) / (hi - lo)) * 140;
    const left = xs.filter((x) => x < 0), right = xs.filter((x) => x > 0);
    return (
      <g>
        <rect x={x0} y={30} width={150} height={140} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={x0} y1={sy(0)} x2={x0 + 150} y2={sy(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={sx(0)} y1={30} x2={sx(0)} y2={170} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={left.map((x) => `${sx(x)},${sy(g(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <polyline points={right.map((x) => `${sx(x)},${sy(g(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={x0 + 75} y={22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{title}</text>
      </g>
    );
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A function and its first two derivatives" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {panel(F.f, "f", 10)}
        {panel(d1, "f′", 185)}
        {panel(d2, "f″", 360)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{F.name}: {F.k}. {F.note}</p>
      <figcaption className="viz-caption">
        A function is Cᵏ if its first k derivatives exist and are continuous, and smooth (C∞) if it is Cᵏ for every k.
        Smooth manifolds and smooth maps use C∞ throughout, so that derivatives of any order make sense in charts.
      </figcaption>
    </figure>
  );
}
