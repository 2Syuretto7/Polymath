"use client";

import { useState } from "react";

/** Sturm–Liouville eigenvalues by shooting: y″ + λy = 0, y(0) = 0, y′(0) = 1, and adjust λ until the far boundary condition holds. */
export function ShootingViz() {
  const [bc, setBc] = useState(0);
  const [lam, setLam] = useState(3);
  const k = Math.sqrt(lam);
  const y = (x: number) => (k < 1e-9 ? x : Math.sin(k * x) / k);
  const dy = (x: number) => Math.cos(k * x);
  const end = bc === 0 ? y(Math.PI) : dy(Math.PI);
  const eig = Array.from({ length: 5 }, (_, n) => (bc === 0 ? (n + 1) ** 2 : (n + 0.5) ** 2));
  const near = eig.find((e) => Math.abs(e - lam) < 0.03);
  const W = 520, H = 200, L = 20;
  const X = (x: number) => L + (x / Math.PI) * (W - 2 * L);
  const Y = (v: number) => H / 2 - (Math.max(-1.6, Math.min(1.6, v)) / 1.2) * (H / 2 - 14);
  const xs = Array.from({ length: 301 }, (_, i) => (i / 300) * Math.PI);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Boundary condition at π">
        {["y(π) = 0 (both ends fixed)", "y′(π) = 0 (right end free)"].map((l, i) => <button key={l} type="button" aria-pressed={bc === i} className={bc === i ? "seg is-on" : "seg"} onClick={() => setBc(i)}>{l}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>λ: <span className="mono">{lam.toFixed(2)}</span></span>
          <input type="range" min={0} max={26} step={0.01} value={lam} onChange={(e) => setLam(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 6 }}>
        {eig.map((e, n) => <button key={e} type="button" className="viz-chip" onClick={() => setLam(e)}>λ{n + 1} = {e}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The solution shot from the left end" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={L} y1={Y(0)} x2={W - L} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(Math.PI)} y1={8} x2={X(Math.PI)} y2={H - 8} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <text x={X(Math.PI) - 4} y={H - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>π</text>
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(0)} cy={Y(0)} r={4} style={{ fill: "var(--accent)" }} />
        <circle cx={X(Math.PI)} cy={Y(y(Math.PI))} r={5} style={{ fill: near ? "var(--accent)" : "var(--danger)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>{bc === 0 ? "y(π)" : "y′(π)"} = {end.toFixed(3)}</p>
      <p style={{ margin: "4px 0", fontWeight: 600, color: near ? "var(--accent)" : undefined }}>
        {near ? `Eigenvalue: the boundary condition holds, and y is an eigenfunction (${bc === 0 ? `sin ${Math.round(Math.sqrt(near))}x` : `sin ${(Math.sqrt(near)).toFixed(1)}x`}, up to a constant).` : "Not an eigenvalue: the solution misses the condition at π. Adjust λ."}
      </p>
      <figcaption className="viz-caption">
        Every λ gives a solution satisfying the left condition, but only special values also satisfy the right one. Those are the eigenvalues: a discrete increasing list, here n² or (n − ½)², whose eigenfunctions have 0, 1, 2, … zeros inside the interval. Changing the boundary condition changes the list.
      </figcaption>
    </figure>
  );
}
