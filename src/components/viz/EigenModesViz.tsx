"use client";

import { useState } from "react";

type BC = "DD" | "NN" | "DN" | "DR";
const LABEL: Record<BC, string> = { DD: "both ends fixed", NN: "both ends free", DN: "fixed, then free", DR: "fixed, then Robin" };

/** The k-th root of k cos k + h sin k = 0, which lies between (n − ½)π and nπ when h > 0. */
const robinRoot = (n: number, h: number) => {
  const g = (k: number) => k * Math.cos(k) + h * Math.sin(k);
  let lo = (n - 0.5) * Math.PI, hi = n * Math.PI;
  for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (g(lo) * g(m) <= 0) hi = m; else lo = m; }
  return (lo + hi) / 2;
};

/** Eigenvalues and eigenfunctions of −X″ = λX on [0, 1] under four kinds of boundary condition. */
export function EigenModesViz() {
  const [bc, setBc] = useState<BC>("DD");
  const [n, setN] = useState(2);
  const [h, setH] = useState(1);
  const mode = (m: number): { lam: number; X: (x: number) => number } => {
    if (bc === "DD") return { lam: (m * Math.PI) ** 2, X: (x) => Math.sin(m * Math.PI * x) };
    if (bc === "NN") return { lam: ((m - 1) * Math.PI) ** 2, X: (x) => Math.cos((m - 1) * Math.PI * x) };
    if (bc === "DN") return { lam: ((m - 0.5) * Math.PI) ** 2, X: (x) => Math.sin((m - 0.5) * Math.PI * x) };
    const k = robinRoot(m, h);
    return { lam: k * k, X: (x) => Math.sin(k * x) };
  };
  const modes = [1, 2, 3, 4].map(mode);
  const xs = Array.from({ length: 301 }, (_, i) => i / 300);
  const X = (x: number) => 30 + x * 300, Y = (v: number) => 110 - v * 80;
  const path = (F: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(F(x)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Boundary conditions">
        {(["DD", "NN", "DN", "DR"] as BC[]).map((k) => (
          <button key={k} type="button" aria-pressed={bc === k} className={bc === k ? "seg is-on" : "seg"} onClick={() => setBc(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>which mode: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={4} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>Robin constant h (used only for Robin): <span className="mono">{h.toFixed(1)}</span></span>
          <input type="range" min={0} max={20} step={0.5} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="The first four eigenfunctions, with one highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {modes.map((m, i) => i + 1 !== n && <path key={i} d={path(m.X)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.2 }} />)}
        <path d={path(modes[n - 1].X)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.6 }} />
        <text x={X(0)} y={210} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x from 0 to 1</text>
        {modes.map((m, i) => (
          <text key={i} x={360} y={50 + i * 34} style={{ fill: "var(--text)", fontSize: 13, fontWeight: i + 1 === n ? 700 : 400 }}>
            λ{["₁", "₂", "₃", "₄"][i]} = {m.lam.toFixed(3)}
          </text>
        ))}
      </svg>
      <figcaption className="viz-caption">
        Fixed means X = 0 at that end; free means X′ = 0; Robin means X′(1) + hX(1) = 0, heat escaping at a rate proportional
        to the temperature. Fixed at both ends gives sin(nπx) with λ = n²π²; free at both ends allows the constant, with λ = 0.
        As h runs from 0 to large values, the Robin eigenvalues move from the free values towards the fixed ones. In every case
        the eigenvalues are real, increase to infinity, and the eigenfunctions are orthogonal, as Sturm–Liouville theory
        promises.
      </figcaption>
    </figure>
  );
}
