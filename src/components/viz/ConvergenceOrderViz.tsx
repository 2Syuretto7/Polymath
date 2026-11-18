"use client";

import { useState } from "react";

const f = (x: number) => x ** 3 - 2 * x - 5;
const df = (x: number) => 3 * x * x - 2;
const ROOT = 2.0945514815423265;
const N = 30;

function run(method: string): number[] {
  const xs: number[] = [];
  if (method === "bisection") {
    let a = 2, b = 3;
    for (let i = 0; i < N; i++) { const c = (a + b) / 2; xs.push(c); if (f(c) > 0) b = c; else a = c; }
  } else if (method === "fixed point") {
    let x = 3;
    for (let i = 0; i < N; i++) { x = Math.cbrt(2 * x + 5); xs.push(x); }
  } else if (method === "secant") {
    let x0 = 3, x1 = 2.5;
    for (let i = 0; i < N; i++) { if (f(x1) === f(x0)) { xs.push(x1); continue; } const x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0)); x0 = x1; x1 = x2; xs.push(x2); }
  } else {
    let x = 3;
    for (let i = 0; i < N; i++) { x = x - f(x) / df(x); xs.push(x); }
  }
  return xs.map((x) => Math.abs(x - ROOT));
}

const METHODS = ["bisection", "fixed point", "secant", "Newton"];
const COLS = ["var(--text-muted)", "var(--danger)", "var(--accent)", "var(--text)"];

/** Four root-finding methods for x³ − 2x − 5: errors on a log scale, and their estimated orders. */
export function ConvergenceOrderViz() {
  const [sel, setSel] = useState(2);
  const errs = METHODS.map(run);
  const X = (n: number) => 40 + (n / (N - 1)) * 460, Y = (le: number) => 10 + ((0 - le) / 16) * 170;
  const e = errs[sel];
  const orders: string[] = [];
  for (let n = 2; n < N && orders.length < 5; n++) {
    if (e[n] > 1e-15 && e[n - 1] > 1e-15 && e[n - 2] > 1e-15) orders.push((Math.log(e[n] / e[n - 1]) / Math.log(e[n - 1] / e[n - 2])).toFixed(2));
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="method">
        {METHODS.map((m, i) => <button key={m} type="button" aria-pressed={sel === i} className={sel === i ? "seg is-on" : "seg"} onClick={() => setSel(i)}>{m}</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Logarithm of the error against the step" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, -4, -8, -12, -16].map((t) => (
          <g key={t}>
            <line x1={40} y1={Y(t)} x2={500} y2={Y(t)} style={{ stroke: "var(--border)" }} />
            <text x={34} y={Y(t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "1" : `1e${t}`}</text>
          </g>
        ))}
        {[0, 10, 20, 29].map((t) => <text key={t} x={X(t) - 4} y={198} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t + 1}</text>)}
        {errs.map((es, i) => {
          const pts = es.map((v, n) => [n, Math.log10(Math.max(v, 1e-16))] as const).filter(([, le]) => le > -16);
          return (
            <path key={i} d={pts.map(([n, le], k) => `${k ? "L" : "M"}${X(n).toFixed(1)},${Y(le).toFixed(1)}`).join(" ")}
              style={{ fill: "none", stroke: COLS[i], strokeWidth: i === sel ? 3 : 1.3, opacity: i === sel ? 1 : 0.5 }} />
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>first errors: {e.slice(0, 6).map((v) => v.toExponential(1)).join(", ")}</div>
        <div style={{ fontWeight: 700 }}>estimated order log(eₙ₊₁/eₙ) / log(eₙ/eₙ₋₁): {orders.join(", ")}</div>
      </div>
      <figcaption className="viz-caption">
        All four methods solve x³ − 2x − 5 = 0. On a logarithmic scale, linear convergence (bisection, and the fixed-point
        iteration x ← ∛(2x + 5)) gives straight lines; faster orders give curves that plunge. The secant method&rsquo;s order
        approaches the golden ratio 1.618, and Newton&rsquo;s approaches 2, until rounding error at about 10⁻¹⁶ stops
        progress.
      </figcaption>
    </figure>
  );
}
