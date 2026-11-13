"use client";

import { useState } from "react";

type P = { label: string; f: (x: number, y: number, v: number) => number; next: (a: number[], n: number) => number; L: number; R: number; ym: number; rec: string };
const PS: P[] = [
  { label: "y″ + y = 0", f: (_x, y) => -y, next: (a, n) => -a[n] / ((n + 2) * (n + 1)), L: -10, R: 10, ym: 2, rec: "a(n+2) = −a(n) / ((n + 2)(n + 1)): the series for cos x" },
  { label: "y″ + xy′ + y = 0", f: (x, y, v) => -x * v - y, next: (a, n) => -a[n] / (n + 2), L: -4, R: 4, ym: 1.5, rec: "a(n+2) = −a(n) / (n + 2): the series for e^(−x²/2)" },
  { label: "Airy: y″ = xy", f: (x, y) => x * y, next: (a, n) => (n >= 1 ? a[n - 1] : 0) / ((n + 2) * (n + 1)), L: -9, R: 3, ym: 3, rec: "a(n+2) = a(n−1) / ((n + 2)(n + 1)), with a₂ = 0" },
];

function numeric(f: P["f"], to: number): [number, number][] {
  const out: [number, number][] = [[0, 1]];
  let x = 0, y = 1, v = 0;
  const h = (to > 0 ? 1 : -1) * 0.005, n = Math.abs(to / h);
  for (let i = 0; i < n; i++) {
    const k1 = [v, f(x, y, v)], k2 = [v + (h * k1[1]) / 2, f(x + h / 2, y + (h * k1[0]) / 2, v + (h * k1[1]) / 2)];
    const k3 = [v + (h * k2[1]) / 2, f(x + h / 2, y + (h * k2[0]) / 2, v + (h * k2[1]) / 2)], k4 = [v + h * k3[1], f(x + h, y + h * k3[0], v + h * k3[1])];
    y += (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); v += (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]); x += h;
    if (i % 4 === 3) out.push([x, y]);
  }
  return out;
}

/** Power series solutions: a recurrence for the coefficients, and partial sums approaching the solution. */
export function SeriesSolutionViz() {
  const [pi, setPi] = useState(0);
  const [N, setN] = useState(8);
  const P = PS[pi];
  const a = [1, 0];
  for (let n = 0; a.length < 61; n++) a.push(P.next(a, n));
  const S = (x: number) => { let s = 0, p = 1; for (let k = 0; k <= N; k++) { s += a[k] * p; p *= x; } return s; };
  const exact = [...numeric(P.f, P.L).reverse(), ...numeric(P.f, P.R).slice(1)];
  const W = 520, H = 230, M = 20;
  const X = (x: number) => M + ((x - P.L) / (P.R - P.L)) * (W - 2 * M);
  const Y = (y: number) => H / 2 - (Math.max(-P.ym * 1.3, Math.min(P.ym * 1.3, y)) / P.ym) * (H / 2 - 12);
  const xs = Array.from({ length: 401 }, (_, i) => P.L + (i / 400) * (P.R - P.L));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {PS.map((x, i) => <button key={x.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>terms up to xᴺ, N = <span className="mono">{N}</span></span>
          <input type="range" min={0} max={60} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial sums of the series solution against the solution" style={{ width: "100%", display: "block" }}>
        <defs><clipPath id="series-clip"><rect x={0} y={0} width={W} height={H - 14} /></clipPath></defs>
        <line x1={M} y1={Y(0)} x2={W - M} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={4} x2={X(0)} y2={H - 14} style={{ stroke: "var(--border)" }} />
        {[P.L, 0, P.R].map((v) => <text key={v} x={X(v)} y={H - 2} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <g clipPath="url(#series-clip)">
          <path d={exact.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
          <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(S(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        </g>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>y(0) = 1, y′(0) = 0; {P.rec}</p>
      <p className="mono" style={{ margin: "4px 0" }}>coefficients: {a.slice(0, 8).map((c) => (Math.abs(c) < 1e-12 ? "0" : c.toPrecision(3))).join(", ")}, …</p>
      <figcaption className="viz-caption">
        Substituting y = Σ aₙxⁿ into the equation and matching powers of x gives a recurrence for the coefficients. The thick curve is the partial sum up to xᴺ, the dashed curve the solution computed numerically. Near 0 a few terms suffice; further out you need more, but because the coefficients are polynomials in x, the series converges for every x.
      </figcaption>
    </figure>
  );
}
