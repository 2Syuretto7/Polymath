"use client";

import { useState } from "react";

type M2 = [number, number, number, number]; // [a, b, c, d] for the matrix with rows (a b) and (c d)
const TS: { label: string; m: M2; min: string }[] = [
  { label: "rotation by 90°", m: [0, -1, 1, 0], min: "x² + 1" },
  { label: "shear", m: [1, 1, 0, 1], min: "x² − 2x + 1" },
  { label: "stretch", m: [2, 0, 0, 0.5], min: "x² − 2.5x + 1" },
  { label: "projection", m: [1, 0, 0, 0], min: "x² − x" },
];
const app = (m: M2, v: [number, number]): [number, number] => [m[0] * v[0] + m[1] * v[1], m[2] * v[0] + m[3] * v[1]];
const mm = (p: M2, q: M2): M2 => [p[0] * q[0] + p[1] * q[2], p[0] * q[1] + p[1] * q[3], p[2] * q[0] + p[3] * q[2], p[2] * q[1] + p[3] * q[3]];
const f = (x: number) => (Math.abs(x) < 1e-9 ? "0" : String(parseFloat(x.toFixed(2)))).replace("-", "−");
const poly = (a0: number, a1: number, a2: number) => {
  const terms: string[] = [];
  if (a2) terms.push(`${a2 === 1 ? "" : a2 === -1 ? "−" : f(a2)}x²`);
  if (a1) terms.push(`${a1 === 1 ? "" : a1 === -1 ? "−" : f(a1)}x`);
  if (a0 || !terms.length) terms.push(f(a0));
  return terms.join(" + ").replace(/\+ −/g, "− ");
};

/** A vector space with a linear map T is a module over ℝ[x]: the polynomial p acts on v as p(T)v. */
export function ModuleActionViz() {
  const [ti, setTi] = useState(0);
  const [a0, setA0] = useState(1);
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(0);
  const T = TS[ti].m;
  const v: [number, number] = [1, 0.5];
  const Tv = app(T, v), TTv = app(T, Tv);
  const pv: [number, number] = [a0 * v[0] + a1 * Tv[0] + a2 * TTv[0], a0 * v[1] + a1 * Tv[1] + a2 * TTv[1]];
  const T2 = mm(T, T);
  const P: M2 = [0, 1, 2, 3].map((i) => a0 * (i === 0 || i === 3 ? 1 : 0) + a1 * T[i] + a2 * T2[i]) as M2;
  const zero = P.every((x) => Math.abs(x) < 1e-9);
  const W = 320, B = 4.5, X = (x: number) => W / 2 + (x / B) * (W / 2 - 10), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 10);
  const arrow = (w: [number, number], strong: boolean, label: string) => (
    <g>
      <line x1={X(0)} y1={Y(0)} x2={X(w[0])} y2={Y(w[1])} markerEnd={strong ? "url(#maA)" : "url(#maB)"} style={{ stroke: strong ? "var(--accent)" : "var(--text-faint)", strokeWidth: strong ? 3 : 1.8 }} />
      <text x={X(w[0]) + 6} y={Y(w[1]) - 6} style={{ fill: strong ? "var(--text)" : "var(--text-muted)", fontSize: 12 }}>{label}</text>
    </g>
  );
  const sl = (label: string, val: number, set: (n: number) => void) => (
    <label><span>{label}: <span className="mono">{f(val)}</span></span>
      <input type="range" min={-3} max={3} step={0.5} value={val} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Linear map">
        {TS.map((t, i) => <button key={t.label} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>{t.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        {sl("constant term", a0, setA0)}
        {sl("coefficient of x", a1, setA1)}
        {sl("coefficient of x²", a2, setA2)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The vector v, its images under T and T squared, and p acting on v" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <defs>
          <marker id="maA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker>
          <marker id="maB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-faint)" }} /></marker>
        </defs>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {arrow(v, false, "v")}
        {arrow(Tv, false, "Tv")}
        {arrow(TTv, false, "T²v")}
        {Math.hypot(pv[0], pv[1]) > 1e-9 ? arrow(pv, true, "p·v") : <circle cx={X(0)} cy={Y(0)} r={5} style={{ fill: "var(--accent)" }} />}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>p(x) = {poly(a0, a1, a2)}</div>
        <div>p·v = p(T)v = ({f(pv[0])}, {f(pv[1])})</div>
        <div>p(T) = [[{f(P[0])}, {f(P[1])}], [{f(P[2])}, {f(P[3])}]]{zero ? ": the zero map, so p kills every vector" : ""}</div>
        <div>minimal polynomial of this T: {TS[ti].min}</div>
      </div>
      <figcaption className="viz-caption">
        The scalars are now polynomials. Multiplying v by x means applying T, so x² sends v to T²v, and a polynomial acts by the
        matching combination. Set the coefficients to the minimal polynomial and every vector is sent to zero: the module is
        torsion.
      </figcaption>
    </figure>
  );
}
