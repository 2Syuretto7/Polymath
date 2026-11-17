"use client";

import { useState } from "react";

const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};

const box = (x: number) => (Math.abs(x) <= 1 ? 1 : 0);
const boxHat = (k: number) => (Math.abs(k) < 1e-9 ? 2 : (2 * Math.sin(k)) / k);

/** Solving the heat and wave equations on the line by the Fourier transform: each frequency is multiplied by its own factor. */
export function TransformSolveViz() {
  const [eq, setEq] = useState<"heat" | "wave">("heat");
  const [t, setT] = useState(0.25);
  const mult = (k: number) => (eq === "heat" ? Math.exp(-k * k * t) : Math.cos(k * t));
  const u = (x: number) =>
    eq === "heat"
      ? t <= 0 ? box(x) : 0.5 * (erfc((x - 1) / (2 * Math.sqrt(t))) - erfc((x + 1) / (2 * Math.sqrt(t))))
      : 0.5 * (box(x - t) + box(x + t));
  const ks = Array.from({ length: 481 }, (_, i) => -12 + (i / 480) * 24);
  const xs = Array.from({ length: 601 }, (_, i) => -5 + (i / 600) * 10);
  const KX = (k: number) => 20 + ((k + 12) / 24) * 230, KY = (v: number) => 110 - (v / 2.2) * 80;
  const XX = (x: number) => 280 + ((x + 5) / 10) * 230, XY = (v: number) => 180 - v * 130;
  const path = (pts: [number, number][]) => pts.map(([a, b], i) => `${i ? "L" : "M"}${a.toFixed(1)},${b.toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        <button type="button" aria-pressed={eq === "heat"} className={eq === "heat" ? "seg is-on" : "seg"} onClick={() => setEq("heat")}>heat equation</button>
        <button type="button" aria-pressed={eq === "wave"} className={eq === "wave" ? "seg is-on" : "seg"} onClick={() => setEq("wave")}>wave equation</button>
      </div>
      <div className="viz-sliders">
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={3} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="The transform of the solution and the solution itself" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={16} style={{ fill: "var(--text-muted)", fontSize: 12 }}>frequency side: û(ξ, t)</text>
        <text x={280} y={16} style={{ fill: "var(--text-muted)", fontSize: 12 }}>space side: u(x, t)</text>
        <line x1={KX(-12)} y1={KY(0)} x2={KX(12)} y2={KY(0)} style={{ stroke: "var(--border)" }} />
        <line x1={XX(-5)} y1={XY(0)} x2={XX(5)} y2={XY(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(ks.map((k) => [KX(k), KY(boxHat(k))]))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.4, strokeDasharray: "4 3" }} />
        <path d={path(ks.map((k) => [KX(k), KY(boxHat(k) * mult(k))]))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <path d={path(xs.map((x) => [XX(x), XY(box(x))]))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.4, strokeDasharray: "4 3" }} />
        <path d={path(xs.map((x) => [XX(x), XY(u(x))]))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        {[-10, -5, 0, 5, 10].map((k) => <text key={k} x={KX(k) - 5} y={KY(0) + 70} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>)}
        <text x={KX(0) - 3} y={KY(0) + 84} style={{ fill: "var(--text-muted)", fontSize: 11 }}>ξ</text>
        {[-4, -2, 0, 2, 4].map((x) => <text key={x} x={XX(x) - 4} y={XY(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>multiplier: {eq === "heat" ? "exp(−ξ²t)" : "cos(ξt)"}; at ξ = 1 it is {mult(1).toFixed(3)}, at ξ = 5 it is {mult(5).toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>u(0, t) = {u(0).toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The initial data are a block of height 1 on [−1, 1], dashed on both sides; its transform is 2 sin ξ / ξ. The transform
        changes the PDE into an ordinary differential equation for each frequency ξ, whose solution multiplies the starting
        transform by a factor. For heat the factor exp(−ξ²t) kills high frequencies fast, so the solution becomes smooth at
        once. For waves the factor cos(ξt) only oscillates, so nothing is smoothed and the block splits into two halves
        travelling apart, as d&rsquo;Alembert&rsquo;s formula says.
      </figcaption>
    </figure>
  );
}
