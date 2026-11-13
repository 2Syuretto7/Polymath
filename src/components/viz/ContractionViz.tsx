"use client";

import { useState } from "react";

const FS = [
  { name: "cos x on [0, 1]", f: (x: number) => Math.cos(x), a: 0, b: 1, k: Math.sin(1), note: "|cos x − cos y| ≤ sin 1 · |x − y| on [0, 1], and sin 1 ≈ 0.84 < 1." },
  { name: "x/2 + 1/x on [1, 2]", f: (x: number) => x / 2 + 1 / x, a: 1, b: 2, k: 0.5, note: "The Babylonian method for √2. Its derivative 1/2 − 1/x² lies in [−1/2, 1/4], so k = 1/2." },
  { name: "(x + 2)/3 on ℝ", f: (x: number) => (x + 2) / 3, a: -1, b: 3, k: 1 / 3, note: "A line of slope 1/3: distances shrink by exactly a third each step." },
  { name: "x² near 1 (not a contraction)", f: (x: number) => x * x, a: 0.6, b: 1.4, k: NaN, note: "The fixed point 1 repels: slope 2 there, so iterates starting nearby run away." },
];

/** Iterating a contraction: the cobweb, and errors shrinking at least as fast as kⁿ. */
export function ContractionViz() {
  const [fi, setFi] = useState(0);
  const [x0, setX0] = useState(0.2);
  const F = FS[fi];
  const start = Math.min(F.b, Math.max(F.a, x0));
  const it: number[] = [start];
  for (let i = 0; i < 12; i++) { const v = F.f(it[i]); if (!isFinite(v) || Math.abs(v) > 50) break; it.push(v); }
  const fix = isNaN(F.k) ? 1 : it[it.length - 1];
  let fp = fix; for (let i = 0; i < 200 && !isNaN(F.k); i++) fp = F.f(fp);
  const W = 340, pad = 26;
  const S = (v: number) => pad + ((v - F.a) / (F.b - F.a)) * (W - 2 * pad), T = (v: number) => W - pad - ((v - F.a) / (F.b - F.a)) * (W - 2 * pad);
  const xs = Array.from({ length: 80 }, (_, i) => F.a + (i / 79) * (F.b - F.a));
  const clip = (v: number) => Math.min(F.b + 0.5, Math.max(F.a - 0.5, v));
  let cob = `M${S(it[0])},${T(F.a)}`;
  for (let i = 0; i + 1 < it.length; i++) cob += ` L${S(it[i])},${T(clip(it[i + 1]))} L${S(clip(it[i + 1]))},${T(clip(it[i + 1]))}`;
  const target = isNaN(F.k) ? 1 : fp;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Map">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => { setFi(i); setX0(Number(((q.a + q.b) / 2 + 0.15).toFixed(2))); }}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>start x₀: <span className="mono">{start.toFixed(2)}</span></span><input type="range" min={F.a} max={F.b} step={0.05} value={start} onChange={(e) => setX0(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", marginTop: 8 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Cobweb diagram of the iteration" style={{ width: "100%", maxWidth: 340, display: "block" }}>
          <rect x={pad} y={pad} width={W - 2 * pad} height={W - 2 * pad} style={{ fill: "none", stroke: "var(--border)" }} />
          <line x1={S(F.a)} y1={T(F.a)} x2={S(F.b)} y2={T(F.b)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
          <path d={xs.map((x, i) => `${i ? "L" : "M"}${S(x).toFixed(1)},${T(clip(F.f(x))).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
          <path d={cob} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
          <text x={W - pad} y={W - 8} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: y = x</text>
        </svg>
        <table className="table" style={{ fontSize: 13, flex: "1 1 200px" }}>
          <thead><tr><th style={{ textTransform: "none" }}>n</th><th style={{ textTransform: "none" }}>xₙ</th><th style={{ textTransform: "none" }}>|xₙ − x*|</th></tr></thead>
          <tbody>
            {it.slice(0, 9).map((v, i) => <tr key={i}><td className="mono">{i}</td><td className="mono">{v.toFixed(6)}</td><td className="mono">{Math.abs(v - target).toExponential(2)}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {isNaN(F.k) ? "" : `Contraction constant k ≈ ${F.k.toFixed(3)}; fixed point x* ≈ ${fp.toFixed(6)}. `}{F.note}
      </p>
      <figcaption className="viz-caption">
        Each step of the cobweb goes up to the graph and across to the line y = x. For a contraction, d(f(x), f(y)) ≤ k·d(x, y)
        with k &lt; 1, so the error is multiplied by at most k at every step, and the iterates converge to the unique fixed point
        from any start.
      </figcaption>
    </figure>
  );
}
