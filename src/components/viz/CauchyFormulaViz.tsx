"use client";

import { useState } from "react";

type C = [number, number];
const FS: { name: string; f: (z: C) => C }[] = [
  { name: "eᶻ", f: ([x, y]) => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)] },
  { name: "z³", f: ([x, y]) => [x * x * x - 3 * x * y * y, 3 * x * x * y - y * y * y] },
  { name: "cos z", f: ([x, y]) => [Math.cos(x) * Math.cosh(y), -Math.sin(x) * Math.sinh(y)] },
];

/** The Cauchy integral formula: values on a circle determine the value at every point inside. */
export function CauchyFormulaViz() {
  const [fi, setFi] = useState(0);
  const [R, setR] = useState(1.5);
  const [x0, setX0] = useState(0.5);
  const [y0, setY0] = useState(0.25);
  const F = FS[fi];
  const N = 1024;
  let sr = 0, si = 0;
  for (let k = 0; k < N; k++) {
    const t = (2 * Math.PI * k) / N;
    const z: C = [R * Math.cos(t), R * Math.sin(t)];
    const [fr, fim] = F.f(z);
    const dr = z[0] - x0, di = z[1] - y0, dd = dr * dr + di * di;
    // f(ζ)/(ζ − z₀) · dζ/dt with dζ/dt = iζ, and the 1/(2πi) factor folded in: (1/2π) · f(ζ) ζ /(ζ − z₀)
    const qr = (fr * dr + fim * di) / dd, qi = (fim * dr - fr * di) / dd;
    sr += (qr * z[0] - qi * z[1]) / N;
    si += (qr * z[1] + qi * z[0]) / N;
  }
  const [vr, vi] = F.f([x0, y0]);
  const inside = Math.hypot(x0, y0) < R;
  const near = Math.abs(Math.hypot(x0, y0) - R) < 0.05;
  const W = 400, B = 2.6, pad = 10;
  const X = (u: number) => W / 2 + (u / B) * (W / 2 - pad);
  const Y = (v: number) => W / 2 - (v / B) * (W / 2 - pad);
  const sc = (W / 2 - pad) / B;
  const fmt = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  const c = (a: number, b: number) => `${fmt(a)} ${b < -5e-4 ? "−" : "+"} ${fmt(Math.abs(b))}i`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>f(z) = {f.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>radius of circle: <span className="mono">{R}</span></span><input type="range" min={0.5} max={2.25} step={0.25} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>point, real part: <span className="mono">{x0}</span></span><input type="range" min={-2} max={2} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>point, imaginary part: <span className="mono">{y0}</span></span><input type="range" min={-2} max={2} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A circle and a point" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {Array.from({ length: 16 }, (_, k) => { const t = (2 * Math.PI * k) / 16; return <line key={k} x1={X(x0)} y1={Y(y0)} x2={X(R * Math.cos(t))} y2={Y(R * Math.sin(t))} style={{ stroke: "var(--text-faint)", strokeWidth: 0.8 }} />; })}
        <circle cx={X(0)} cy={Y(0)} r={R * sc} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(x0)} cy={Y(y0)} r={6} style={{ fill: inside ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={X(x0) + 9} y={Y(y0) - 8} style={{ fill: "var(--text)", fontSize: 13 }}>z₀</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>{near ? "z₀ lies on the circle: the integral is not defined." : `(1/2πi) ∮ f(ζ)/(ζ − z₀) dζ = ${c(sr, si)}`}</div>
        <div>f(z₀) = {c(vr, vi)}</div>
        <div>{near ? "" : inside ? "z₀ is inside: the two agree." : "z₀ is outside: the integral is 0, by Cauchy’s theorem."}</div>
      </div>
      <figcaption className="viz-caption">
        The integral uses only the values of f on the circle, yet it reproduces f at every point inside. The faint lines show
        that every boundary point contributes, weighted by 1/(ζ − z₀). With z₀ at the centre the formula says f(0) is the
        average of f round the circle.
      </figcaption>
    </figure>
  );
}
