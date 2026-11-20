"use client";

import { useMemo, useState } from "react";

/** Dirichlet kernel Dₙ(x) = sin((N + ½)x) / sin(x/2). */
export const dirichlet = (N: number, x: number) => (Math.abs(Math.sin(x / 2)) < 1e-12 ? 2 * N + 1 : Math.sin((N + 0.5) * x) / Math.sin(x / 2));

/** Lebesgue constant Lₙ = (1/2π) ∫ |Dₙ| over [−π, π], by the midpoint rule. */
export function lebesgueConst(N: number) {
  const M = 20000;
  let s = 0;
  for (let i = 0; i < M; i++) { const x = -Math.PI + ((i + 0.5) * 2 * Math.PI) / M; s += Math.abs(dirichlet(N, x)); }
  return s / M;
}

const NS = Array.from({ length: 30 }, (_, i) => i + 1);

/** The Dirichlet kernel, the worst bounded function sign(Dₙ), and the Lebesgue constants growing like (4/π²) log N. */
export function LebesgueConstViz() {
  const [N, setN] = useState(6);
  const X0 = 20, X1 = 300, YM = 120;
  const px = (x: number) => X0 + ((x + Math.PI) / (2 * Math.PI)) * (X1 - X0);
  const sy = 90 / (2 * N + 1);
  const pts = Array.from({ length: 401 }, (_, i) => -Math.PI + (i / 400) * 2 * Math.PI);
  const kpath = pts.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${(YM - dirichlet(N, x) * sy).toFixed(1)}`).join("");
  const spath = pts.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${(YM - Math.sign(dirichlet(N, x)) * 20).toFixed(1)}`).join("");
  const Ls = useMemo(() => NS.map(lebesgueConst), []);
  const L = Ls[N - 1];
  const gx = (n: number) => 340 + (n / 30) * 180, gy = (v: number) => 220 - (v / 3.5) * 190;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {N} <input type="range" min={1} max={30} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 260" role="img" aria-label="Dirichlet kernel and Lebesgue constants" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={YM} x2={X1} y2={YM} style={{ stroke: "var(--border-strong)" }} />
        <path d={spath} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 1.2 }} />
        <path d={kpath} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
        <text x={X0} y={14} style={{ fill: "var(--accent)", fontSize: 11 }}>blue: Dirichlet kernel Dₙ</text>
        <text x={X0} y={28} style={{ fill: "var(--success)", fontSize: 11 }}>green: f = sign(Dₙ), bounded by 1</text>
        {[-Math.PI, 0, Math.PI].map((x, i) => <text key={i} x={px(x)} y={YM + 105} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{["−π", "0", "π"][i]}</text>)}
        <line x1={340} y1={220} x2={520} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <line x1={340} y1={30} x2={340} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <path d={NS.map((n, i) => `${i ? "L" : "M"}${gx(n).toFixed(1)},${gy((4 / Math.PI ** 2) * Math.log(n) + 1.27).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        {NS.map((n, i) => <circle key={n} cx={gx(n)} cy={gy(Ls[i])} r={n === N ? 5 : 2.5} style={{ fill: n === N ? "var(--danger)" : "var(--accent)" }} />)}
        <text x={430} y={240} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>n from 1 to 30</text>
        <text x={346} y={24} style={{ fill: "var(--text-muted)", fontSize: 10 }}>dots: Lₙ; dashed: (4/π²) ln n + 1.27</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        For n = {N}: Lₙ = (1/2π) ∫ |Dₙ| = {L.toFixed(3)}. So Sₙf(0) = {L.toFixed(3)} for the green f, though |f| ≤ 1.
      </p>
      <figcaption className="viz-caption">
        The partial sum Sₙf(0) is the average of f against the Dirichlet kernel. The bounded function that makes it
        largest is f = sign(Dₙ), which gives the Lebesgue constant Lₙ. Since Lₙ grows without bound, the uniform
        boundedness principle yields a continuous function whose Fourier series diverges at 0.
      </figcaption>
    </figure>
  );
}
