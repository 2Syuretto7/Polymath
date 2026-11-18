"use client";

import { useState } from "react";

/** Gauss–Legendre nodes and weights on [−1, 1], by Newton's method on the Legendre polynomial. */
export function gaussLegendre(n: number): { x: number[]; w: number[] } {
  const x: number[] = [], w: number[] = [];
  for (let i = 1; i <= n; i++) {
    let z = Math.cos((Math.PI * (i - 0.25)) / (n + 0.5)), dp = 1;
    for (let it = 0; it < 100; it++) {
      let p0 = 1, p1 = z;
      for (let k = 2; k <= n; k++) { const p2 = ((2 * k - 1) * z * p1 - (k - 1) * p0) / k; p0 = p1; p1 = p2; }
      const p = n === 1 ? z : p1, pm = n === 1 ? 1 : p0;
      dp = n === 1 ? 1 : (n * (z * p - pm)) / (z * z - 1);
      const dz = p / dp; z -= dz;
      if (Math.abs(dz) < 1e-15) break;
    }
    x.push(z); w.push(2 / ((1 - z * z) * dp * dp));
  }
  return { x: x.reverse(), w: w.reverse() };
}

/** Closed Newton–Cotes weights for n equally spaced nodes on [−1, 1] (the midpoint rule when n = 1). */
export function newtonCotes(n: number): { x: number[]; w: number[] } {
  const x = n === 1 ? [0] : Array.from({ length: n }, (_, j) => -1 + (2 * j) / (n - 1));
  const A = Array.from({ length: n }, (_, k) => [...x.map((xj) => xj ** k), (1 - (-1) ** (k + 1)) / (k + 1)]);
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]];
    for (let r = c + 1; r < n; r++) { const m = A[r][c] / A[c][c]; for (let k = c; k <= n; k++) A[r][k] -= m * A[c][k]; }
  }
  const w = new Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) { let s = A[r][n]; for (let k = r + 1; k < n; k++) s -= A[r][k] * w[k]; w[r] = s / A[r][r]; }
  return { x, w };
}

const FNS = [
  { name: "eˣ", f: Math.exp, exact: Math.E - 1 / Math.E },
  { name: "1/(1 + 25x²)", f: (t: number) => 1 / (1 + 25 * t * t), exact: (2 / 5) * Math.atan(5) },
];

/** Gauss nodes and weights against equally spaced Newton–Cotes nodes, with the errors of each. */
export function GaussNodesViz() {
  const [n, setN] = useState(4);
  const [fi, setFi] = useState(0);
  const F = FNS[fi];
  const G = gaussLegendre(n), NC = newtonCotes(n);
  const q = (R: { x: number[]; w: number[] }) => R.x.reduce((s, xi, i) => s + R.w[i] * F.f(xi), 0);
  const X = (t: number) => 40 + ((t + 1) / 2) * 440;
  const row = (R: { x: number[]; w: number[] }, y0: number, col: string, label: string) => (
    <g>
      <line x1={X(-1)} y1={y0} x2={X(1)} y2={y0} style={{ stroke: "var(--border)" }} />
      <text x={X(-1)} y={y0 - 52} style={{ fill: "var(--text-muted)", fontSize: 12 }}>{label}</text>
      {R.x.map((xi, i) => {
        const hgt = Math.max(-30, Math.min(48, R.w[i] * 100));
        return (
          <g key={i}>
            <rect x={X(xi) - 4} y={hgt >= 0 ? y0 - hgt : y0} width={8} height={Math.abs(hgt)} style={{ fill: R.w[i] < 0 ? "var(--danger)" : col, opacity: 0.8 }} />
            <circle cx={X(xi)} cy={y0} r={3.5} style={{ fill: "var(--text)" }} />
          </g>
        );
      })}
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center", flex: 1, minWidth: 200 }}>
          <span className="mono">nodes n: {n}</span>
          <input type="range" min={1} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
        <div className="segmented" role="group" aria-label="integrand">
          {FNS.map((g, i) => <button key={g.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{g.name}</button>)}
        </div>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="Nodes and weights for Gauss and Newton–Cotes rules" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {row(G, 90, "var(--accent)", "Gauss–Legendre: bar height is the weight (capped)")}
        {row(NC, 190, "var(--text-muted)", "equally spaced (Newton–Cotes): red bars are negative weights")}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div style={{ fontWeight: 700 }}>Gauss error: {Math.abs(q(G) - F.exact).toExponential(2)}</div>
        <div>Newton–Cotes error: {Math.abs(q(NC) - F.exact).toExponential(2)}</div>
      </div>
      <figcaption className="viz-caption">
        Both rules integrate {F.name} over [−1, 1] using n function values. Gauss places its nodes at the zeros of the
        Legendre polynomial, bunched towards the ends, with positive weights, and is exact for polynomials of degree
        2n − 1. Equally spaced nodes are exact only to degree about n, and from n = 9 some weights turn negative, so the
        rule amplifies rounding and, for Runge&rsquo;s function, fails to converge.
      </figcaption>
    </figure>
  );
}
