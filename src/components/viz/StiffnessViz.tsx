"use client";

import { useState } from "react";

const T = 5;

/** Forward and backward Euler on y′ = −λ(y − cos t) − sin t, y(0) = 0, whose solution is cos t − e^(−λt). */
export function eulerPaths(lam: number, h: number) {
  const n = Math.round(T / h);
  const f: number[] = [0], b: number[] = [0];
  for (let k = 0; k < n; k++) {
    const t = k * h, t1 = t + h;
    f.push(f[k] + h * (-lam * (f[k] - Math.cos(t)) - Math.sin(t)));
    b.push((b[k] + h * (lam * Math.cos(t1) - Math.sin(t1))) / (1 + h * lam));
  }
  return { f, b, n };
}

/** Explicit against implicit Euler on a stiff problem: stability, not accuracy, limits the explicit step. */
export function StiffnessViz() {
  const [lg, setLg] = useState(2);
  const [h, setH] = useState(0.05);
  const lam = 10 ** lg;
  const { f, b, n } = eulerPaths(lam, h);
  const X = (t: number) => 40 + (t / T) * 460, Y = (y: number) => 100 - Math.max(-2.2, Math.min(2.2, y)) * 40;
  const path = (ys: number[]) => { const stop = ys.findIndex((y) => !(Math.abs(y) < 2.2)); const keep = stop < 0 ? ys : ys.slice(0, stop + 1); return keep.map((y, k) => `${k ? "L" : "M"}${X(k * h).toFixed(1)},${Y(y).toFixed(1)}`).join(" "); };
  const exact = Array.from({ length: 201 }, (_, i) => { const t = (i / 200) * T; return `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(Math.cos(t) - Math.exp(-lam * t)).toFixed(1)}`; }).join(" ");
  const amp = Math.abs(1 - h * lam);
  const endErr = (ys: number[]) => Math.abs(ys[n] - (Math.cos(n * h) - Math.exp(-lam * n * h)));
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "grid", gap: 6 }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 130 }}>λ = {lam.toFixed(0)}</span>
          <input type="range" min={0} max={3} step={0.5} value={lg} onChange={(e) => setLg(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 130 }}>step h = {h.toFixed(3)}</span>
          <input type="range" min={0.005} max={0.5} step={0.005} value={h} onChange={(e) => setH(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Forward and backward Euler solutions against the exact solution" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={Y(0)} x2={500} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[-2, -1, 1, 2].map((v) => <text key={v} x={34} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        {[0, 1, 2, 3, 4, 5].map((t) => <text key={t} x={X(t)} y={196} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = {t}</text>)}
        <path d={exact} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 5 }} />
        <path d={path(f)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.8 }} />
        <path d={path(b)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={50} y={166} style={{ fill: "var(--danger)", fontSize: 12 }}>forward Euler{amp >= 1 ? " (leaves the chart)" : ""}</text>
        <text x={50} y={182} style={{ fill: "var(--accent)", fontSize: 12 }}>backward Euler</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>hλ = {(h * lam).toFixed(2)}; forward Euler multiplies the transient by |1 − hλ| = {amp.toFixed(2)} each step: {amp < 1 ? "stable" : "unstable"}</div>
        <div>error at t = 5: forward {endErr(f) < 1e6 ? endErr(f).toExponential(1) : "blown up"}, backward {endErr(b).toExponential(1)}</div>
      </div>
      <figcaption className="viz-caption">
        The exact solution (thick grey) dies to cos t almost at once when λ is large. Forward Euler is stable only when
        hλ &lt; 2, so for λ = 1000 it needs h &lt; 0.002 even though the smooth solution would be well resolved with h = 0.1.
        Backward Euler is stable for every h &gt; 0.
      </figcaption>
    </figure>
  );
}
