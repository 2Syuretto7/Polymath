"use client";

import { useState } from "react";

type Kind = "displacement" | "velocity";
const phi = (x: number) => Math.max(0, 1 - Math.abs(x));
const overlap = (a: number, b: number) => Math.max(0, Math.min(b, 1) - Math.max(a, -1));

/** D'Alembert's formula, and the backward light cone that determines the solution at a point. */
export function DalembertViz() {
  const [kind, setKind] = useState<Kind>("displacement");
  const [t, setT] = useState(2);
  const [x0, setX0] = useState(1.5);
  const u = (x: number) => (kind === "displacement" ? 0.5 * (phi(x - t) + phi(x + t)) : 0.5 * overlap(x - t, x + t));
  const W = 520;
  const X = (x: number) => 20 + ((x + 6) / 12) * 480;
  const Yu = (v: number) => 95 - v * 70;
  const Tt = (s: number) => 230 - s * 28;
  const xs = Array.from({ length: 481 }, (_, i) => -6 + (i / 480) * 12);
  const d = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Yu(u(x)).toFixed(1)}`).join(" ");
  const init = (x: number) => (kind === "displacement" ? phi(x) : Math.abs(x) <= 1 ? 1 : 0);
  const d0 = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Yu(init(x)).toFixed(1)}`).join(" ");
  const a = x0 - t, b = x0 + t;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Initial data">
        {(["displacement", "velocity"] as Kind[]).map((k) => <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{k === "displacement" ? "initial displacement only" : "initial velocity only"}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={4} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>point x₀: <span className="mono">{x0.toFixed(2)}</span></span>
          <input type="range" min={-5} max={5} step={0.05} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 250`} role="img" aria-label="The solution at time t and the domain of dependence of a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-6)} y1={Yu(0)} x2={X(6)} y2={Yu(0)} style={{ stroke: "var(--border)" }} />
        <path d={d0} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3", strokeWidth: 1.5 }} />
        <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(x0)} cy={Yu(u(x0))} r={4} style={{ fill: "var(--text)" }} />
        <text x={X(-5.9)} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>u(x, t); dashed: the initial data</text>
        <line x1={X(-6)} y1={Tt(0)} x2={X(6)} y2={Tt(0)} style={{ stroke: "var(--border)" }} />
        <polygon points={`${X(-1)},${Tt(0)} ${X(1)},${Tt(0)} ${X(1 + 4)},${Tt(4)} ${X(-1 - 4)},${Tt(4)}`} style={{ fill: "var(--accent-soft)", opacity: 0.6 }} />
        <line x1={X(a)} y1={Tt(0)} x2={X(x0)} y2={Tt(t)} style={{ stroke: "var(--text)", strokeWidth: 1.8 }} />
        <line x1={X(b)} y1={Tt(0)} x2={X(x0)} y2={Tt(t)} style={{ stroke: "var(--text)", strokeWidth: 1.8 }} />
        <line x1={X(a)} y1={Tt(0)} x2={X(b)} y2={Tt(0)} style={{ stroke: "var(--text)", strokeWidth: 4 }} />
        <circle cx={X(x0)} cy={Tt(t)} r={4} style={{ fill: "var(--text)" }} />
        <text x={X(-5.9)} y={Tt(4) + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x–t plane, t up to 4</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>u(x₀, t) = {u(x0).toFixed(3)}</div>
        <div>domain of dependence: [{a.toFixed(2)}, {b.toFixed(2)}]</div>
      </div>
      <figcaption className="viz-caption">
        D&rsquo;Alembert&rsquo;s formula u = ½[φ(x − ct) + φ(x + ct)] + (1/2c)∫ψ, taken over [x − ct, x + ct], with c = 1 here.
        The value at (x₀, t) depends only on the data in the interval cut out by the two characteristics through it, its
        domain of dependence. The shaded wedge is the domain of influence of the initial data on [−1, 1]: outside it the
        string has not yet been disturbed.
      </figcaption>
    </figure>
  );
}
