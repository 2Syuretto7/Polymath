"use client";

import { useState } from "react";

// f(z) = 1/((z − 1)(z − 2)) = 1/(z − 2) − 1/(z − 1), expanded about 0 in three regions
const REG = [
  { name: "|z| < 1", lo: 0, hi: 1, a: (n: number) => (n >= 0 ? 1 - Math.pow(2, -(n + 1)) : 0) },
  { name: "1 < |z| < 2", lo: 1, hi: 2, a: (n: number) => (n >= 0 ? -Math.pow(2, -(n + 1)) : -1) },
  { name: "|z| > 2", lo: 2, hi: Infinity, a: (n: number) => (n >= 0 ? 0 : Math.pow(2, -n - 1) - 1) },
];

/** Laurent series of 1/((z − 1)(z − 2)) about 0: a different series in each annulus, with negative powers outside |z| = 1. */
export function LaurentAnnulusViz() {
  const [ri, setRi] = useState(1);
  const [N, setN] = useState(6);
  const Rg = REG[ri];
  const r = ri === 0 ? 0.6 : ri === 1 ? 1.5 : 3;
  const th = 0.7;
  const z = [r * Math.cos(th), r * Math.sin(th)];
  // exact value
  const mul = (a: number[], b: number[]) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  const inv = (a: number[]) => { const d = a[0] * a[0] + a[1] * a[1]; return [a[0] / d, -a[1] / d]; };
  const ex = inv(mul([z[0] - 1, z[1]], [z[0] - 2, z[1]]));
  const pw = (n: number) => { const m = Math.pow(r, n); return [m * Math.cos(n * th), m * Math.sin(n * th)]; };
  let s = [0, 0];
  for (let n = -N; n <= N; n++) { const c = Rg.a(n); if (c) { const p = pw(n); s = [s[0] + c * p[0], s[1] + c * p[1]]; } }
  const err = Math.hypot(s[0] - ex[0], s[1] - ex[1]);
  const W = 300, B = 3.6, X = (u: number) => W / 2 + (u / B) * (W / 2 - 6), Y = (v: number) => W / 2 - (v / B) * (W / 2 - 6), sc = (W / 2 - 6) / B;
  const ns = Array.from({ length: 11 }, (_, k) => k - 5);
  const BW = 300, BH = 150, bx = (n: number) => 20 + (n + 5) * 25, amax = Math.max(...Array.from({ length: 11 }, (_, k) => Math.abs(Rg.a(k - 5)))) || 1, by = (v: number) => BH / 2 - (v / amax) * (BH / 2 - 14);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Region">
        {REG.map((g, i) => <button key={g.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{g.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>terms each side, N: <span className="mono">{N}</span></span>
          <input type="range" min={1} max={20} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 6 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The three regions and a test point" style={{ width: "100%", maxWidth: 300 }}>
          {isFinite(Rg.hi) ? <circle cx={X(0)} cy={Y(0)} r={Rg.hi * sc} style={{ fill: "var(--accent)", fillOpacity: 0.15 }} /> : <rect x={0} y={0} width={W} height={W} style={{ fill: "var(--accent)", fillOpacity: 0.15 }} />}
          {Rg.lo > 0 && <circle cx={X(0)} cy={Y(0)} r={Rg.lo * sc} style={{ fill: "var(--bg)" }} />}
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
          {[1, 2].map((p) => <g key={p} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }}><line x1={X(p) - 5} y1={Y(0) - 5} x2={X(p) + 5} y2={Y(0) + 5} /><line x1={X(p) - 5} y1={Y(0) + 5} x2={X(p) + 5} y2={Y(0) - 5} /></g>)}
          <circle cx={X(z[0])} cy={Y(z[1])} r={5} style={{ fill: "var(--text)" }} />
        </svg>
        <svg viewBox={`0 0 ${BW} ${BH + 20}`} role="img" aria-label="Laurent coefficients from power −5 to 5" style={{ width: "100%", maxWidth: 300 }}>
          <line x1={10} y1={BH / 2} x2={BW - 10} y2={BH / 2} style={{ stroke: "var(--border)" }} />
          {ns.map((n) => { const v = Rg.a(n); return <g key={n}><rect x={bx(n) - 8} y={Math.min(by(v), BH / 2)} width={16} height={Math.abs(by(v) - BH / 2)} style={{ fill: n < 0 ? "var(--danger)" : "var(--accent)", fillOpacity: 0.8 }} /><text x={bx(n)} y={BH + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n}</text></g>; })}
        </svg>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>coefficients a_(−3) … a_3: {[-3, -2, -1, 0, 1, 2, 3].map((n) => Rg.a(n).toFixed(3)).join(", ")}</div>
        <div>at the test point, |z| = {r}: partial sum differs from f(z) by {err.toExponential(2)}</div>
      </div>
      <figcaption className="viz-caption">
        The function 1/((z − 1)(z − 2)) has poles at 1 and 2, which cut the plane into three regions about 0. In each region
        it has its own Laurent series; the bars show the coefficients, with negative powers on the left. Inside |z| = 1 it is
        an ordinary power series. Increase N and watch the partial sums converge at the test point.
      </figcaption>
    </figure>
  );
}
