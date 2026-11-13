"use client";

import { useState, type CSSProperties } from "react";

type D = { label: string; sol: (t: number, y0: number) => number; note: string };
const DS: D[] = [
  { label: "y′ = y", sol: (t, y0) => y0 * Math.exp(t), note: "Here the gap is exactly δeᵗ: the bound is sharp." },
  { label: "y′ = −y", sol: (t, y0) => y0 * Math.exp(-t), note: "Here the gap shrinks like δe⁻ᵗ: the bound holds but is far from sharp." },
  { label: "y′ = y(1 − y)", sol: (t, y0) => 1 / (1 + (1 / y0 - 1) * Math.exp(-t)), note: "The gap first grows, then shrinks as both solutions approach the equilibrium 1." },
];
const T = 3, LIP = 1;

/** Two solutions started δ apart, with the Gronwall bound |y(t) − z(t)| ≤ δ e^(Lt). */
export function InitialDataViz() {
  const [di, setDi] = useState(0);
  const [y0, setY0] = useState(0.2);
  const [d, setD] = useState(0.1);
  const D = DS[di];
  const ts = Array.from({ length: 201 }, (_, i) => (i / 200) * T);
  const a = ts.map((t) => D.sol(t, y0)), b = ts.map((t) => D.sol(t, y0 + d));
  const gap = ts.map((_, i) => Math.abs(b[i] - a[i]));
  const bound = ts.map((t) => d * Math.exp(LIP * t));
  const W = 520, H = 170, L = 40;
  const X = (t: number) => L + (t / T) * (W - L - 10);
  const panel = (series: { ys: number[]; style: CSSProperties }[], top: number, label: string) => {
    const ym = Math.max(...series.flatMap((s) => s.ys), 1e-9) * 1.05;
    const Y = (y: number) => 8 + ((ym - y) / ym) * (H - 28);
    return (
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{ width: "100%", display: "block", marginTop: top }}>
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <text x={L - 6} y={Y(ym / 1.05) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{(ym / 1.05).toPrecision(2)}</text>
        <text x={L - 6} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        {[0, 1, 2, 3].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        {series.map((s, k) => <path key={k} d={s.ys.map((y, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", ...s.style }} />)}
      </svg>
    );
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {DS.map((x, i) => <button key={x.label} type="button" aria-pressed={di === i} className={di === i ? "seg is-on" : "seg"} onClick={() => setDi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>starting value y(0): <span className="mono">{y0.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={0.8} step={0.05} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
        <label><span>change δ in the start: <span className="mono">{d.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.15} step={0.01} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>the two solutions</p>
      {panel([{ ys: a, style: { stroke: "var(--text-muted)", strokeWidth: 2 } }, { ys: b, style: { stroke: "var(--accent)", strokeWidth: 2 } }], 0, "Two nearby solutions")}
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>their gap (solid) and the Gronwall bound δe^(Lt), L = 1 (dashed)</p>
      {panel([{ ys: bound, style: { stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" } }, { ys: gap, style: { stroke: "var(--accent)", strokeWidth: 2.5 } }], 0, "Gap between solutions and its bound")}
      <p className="mono" style={{ margin: "4px 0" }}>at t = 3: gap = {gap[200].toFixed(4)}, bound = {bound[200].toFixed(4)}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{D.note}</p>
      <figcaption className="viz-caption">
        Each right-hand side here has Lipschitz constant 1 on the region shown (for the logistic equation, |1 − 2y| ≤ 1 when 0 ≤ y ≤ 1). Gronwall&rsquo;s inequality then guarantees the gap never exceeds δeᵗ. Halve δ and the whole gap curve halves: solutions depend continuously on where they start.
      </figcaption>
    </figure>
  );
}
