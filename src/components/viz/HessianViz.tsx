"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const N = 30, S = 9, R = 2;

/** f = ax² + bxy + cy² near a critical point at the origin: shade its sign, and classify it by the Hessian. */
export function HessianViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const f = (x: number, y: number) => a * x * x + b * x * y + c * y * y;
  const det = 4 * a * c - b * b; // det of Hessian [[2a, b], [b, 2c]]
  const tr = 2 * a + 2 * c;
  const disc = Math.sqrt(Math.max(0, (2 * a - 2 * c) ** 2 + 4 * b * b));
  const l1 = (tr + disc) / 2, l2 = (tr - disc) / 2;
  const kind = det > 0 ? (a > 0 ? "a local minimum" : "a local maximum") : det < 0 ? "a saddle point" : "degenerate: the test is inconclusive";
  const max = Math.max(1e-9, ...[-R, R].flatMap((x) => [-R, R].map((y) => Math.abs(f(x, y)))), Math.abs(f(R, 0)), Math.abs(f(0, R)));
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${N * S} ${N * S}`} role="img" aria-label={`The origin is ${kind}.`} style={{ width: "100%", maxWidth: 300, display: "block", margin: "0 auto" }}>
        {Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => {
          const x = -R + (2 * R * (i + 0.5)) / N, y = R - (2 * R * (j + 0.5)) / N;
          const v = f(x, y) / max;
          return <rect key={`${i}-${j}`} x={i * S} y={j * S} width={S} height={S}
            style={{ fill: v >= 0 ? "var(--accent)" : "var(--danger)", opacity: Math.min(1, Math.abs(v)) * 0.75 + 0.03 }} />;
        }))}
        <line x1={0} y1={(N * S) / 2} x2={N * S} y2={(N * S) / 2} className="viz-axis" />
        <line x1={(N * S) / 2} y1={0} x2={(N * S) / 2} y2={N * S} className="viz-axis" />
        <circle cx={(N * S) / 2} cy={(N * S) / 2} r={4} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono-meta" style={{ textAlign: "center", textTransform: "none", margin: "6px 0 0" }}>
        shading shows f above 0 or, in red, below 0; stronger means further from 0
      </p>
      <div className="viz-sliders">
        <label><span>a = <span className="mono">{a}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b = <span className="mono">{b}</span></span>
          <input type="range" min={-4} max={4} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>c = <span className="mono">{c}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>f(x, y)</td><td className="mono">{fm(a)}x² + {fm(b)}xy + {fm(c)}y²</td></tr>
          <tr><td>Hessian</td><td className="mono">[[{fm(2 * a)}, {fm(b)}], [{fm(b)}, {fm(2 * c)}]]</td></tr>
          <tr><td>determinant, eigenvalues</td><td className="mono">{fm(det)}; {fm(l1)}, {fm(l2)}</td></tr>
          <tr><td>the origin is</td><td>{kind}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Both eigenvalues positive: f rises in every direction, a minimum. Both negative: a maximum. One of each sign: f
        rises in some directions and falls in others, a saddle. A zero eigenvalue leaves the question to higher-order
        terms.
      </figcaption>
    </figure>
  );
}
