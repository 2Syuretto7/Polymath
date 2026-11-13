"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const N = 7, C = 58, L = 44, T = 26;
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));

/** The Cauchy product of the series for eˣ and eʸ: the terms aᵢbⱼ fill a grid, and the n-th product term collects the diagonal i + j = n. */
export function CauchyProductViz() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(0.5);
  const [n, setN] = useState(3);
  const a = (i: number) => Math.pow(x, i) / fact(i);
  const b = (j: number) => Math.pow(y, j) / fact(j);
  const c = (m: number) => { let s = 0; for (let i = 0; i <= m; i++) s += a(i) * b(m - i); return s; };
  let partial = 0;
  for (let m = 0; m <= n; m++) partial += c(m);
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));
  const f3 = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${L + N * C + 6} ${T + N * C + 6}`} role="img" aria-label="A grid of products of terms with one diagonal highlighted" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
        {Array.from({ length: N }, (_, i) => (
          <g key={i}>
            <text x={L - 6} y={T + i * C + C / 2 + 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>a{i}</text>
            <text x={L + i * C + C / 2} y={T - 8} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>b{i}</text>
            {Array.from({ length: N }, (_, j) => {
              const on = i + j === n, before = i + j < n;
              return (
                <g key={j}>
                  <rect x={L + j * C} y={T + i * C} width={C - 2} height={C - 2} rx={4}
                    style={{ fill: on ? "var(--accent-soft)" : before ? "var(--bg-subtle)" : "none", stroke: on ? "var(--accent)" : "var(--border)" }} />
                  <text x={L + j * C + C / 2 - 1} y={T + i * C + C / 2 + 4} textAnchor="middle" style={{ fontSize: 11, fill: on || before ? "var(--text)" : "var(--text-faint)" }}>{f3(a(i) * b(j))}</text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>x: <span className="mono">{fm(x)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
        <label><span>y: <span className="mono">{fm(y)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
        <label><span>diagonal n: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={N - 1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>cₙ, the sum along diagonal {n}</td><td className="mono">{fm(c(n))}</td></tr>
          <tr><td>(x + y)ⁿ / n!</td><td className="mono">{fm(Math.pow(x + y, n) / fact(n))}</td></tr>
          <tr><td>c₀ + c₁ + ⋯ + cₙ</td><td className="mono">{fm(partial)}</td></tr>
          <tr><td>eˣ⁺ʸ</td><td className="mono">{fm(Math.exp(x + y))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Here aᵢ = xⁱ/i! and bⱼ = yʲ/j!. By the binomial theorem each diagonal sums to (x + y)ⁿ/n!, so the Cauchy product of the series for eˣ and eʸ is the series for eˣ⁺ʸ. Shaded cells are the diagonals already counted.
      </figcaption>
    </figure>
  );
}
