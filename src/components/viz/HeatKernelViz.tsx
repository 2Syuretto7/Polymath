"use client";

import { useState } from "react";

/** erfc with small relative error everywhere (Chebyshev fit), so that tiny tails are computed accurately. */
const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};

/** The heat kernel on the line, and a block of heat spread by it: smoothing, conservation and infinite speed. */
export function HeatKernelViz() {
  const [mode, setMode] = useState<"kernel" | "box">("kernel");
  const [t, setT] = useState(0.25);
  const K = (x: number) => Math.exp((-x * x) / (4 * t)) / Math.sqrt(4 * Math.PI * t);
  const box = (x: number) => 0.5 * (erfc((x - 1) / (2 * Math.sqrt(t))) - erfc((x + 1) / (2 * Math.sqrt(t))));
  const f = mode === "kernel" ? K : box;
  const xs = Array.from({ length: 601 }, (_, i) => -6 + (i / 600) * 12);
  const vals = xs.map(f);
  const peak = Math.max(...vals);
  const fine = Array.from({ length: 8001 }, (_, i) => -40 + (i / 8000) * 80);
  const total = fine.reduce((s, x, i) => s + (i === 0 || i === 8000 ? f(x) / 2 : f(x)), 0) * (80 / 8000);
  const at5 = f(5);
  const top = mode === "kernel" ? Math.max(peak, 0.6) : 1.1;
  const X = (x: number) => 260 + x * 38, Y = (v: number) => 190 - (v / top) * 160;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="What to show">
        <button type="button" aria-pressed={mode === "kernel"} className={mode === "kernel" ? "seg is-on" : "seg"} onClick={() => setMode("kernel")}>the heat kernel</button>
        <button type="button" aria-pressed={mode === "box"} className={mode === "box" ? "seg is-on" : "seg"} onClick={() => setMode("box")}>a block of heat on [−1, 1]</button>
      </div>
      <div className="viz-sliders">
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={3} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="Temperature on the whole line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-6)} y1={Y(0)} x2={X(6)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {mode === "box" && <path d={`M${X(-6)},${Y(0)} L${X(-1)},${Y(0)} L${X(-1)},${Y(1)} L${X(1)},${Y(1)} L${X(1)},${Y(0)} L${X(6)},${Y(0)}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />}
        <path d={vals.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <line x1={X(5)} y1={Y(0) - 6} x2={X(5)} y2={Y(0) + 6} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={X(5) - 14} y={Y(0) + 20} style={{ fill: "var(--text)", fontSize: 11 }}>x = 5</text>
        {[-6, -4, -2, 0, 2, 4, 6].map((x) => x !== 4 && x !== 6 ? <text key={x} x={X(x) - 4} y={Y(0) + 20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text> : null)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>{mode === "kernel" ? "peak height 1/√(4πt)" : "temperature at the centre"}: {peak.toFixed(4)}</div>
        <div>total heat (area under the curve): {total.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>temperature at x = 5: {at5.toExponential(3)}, never exactly zero</div>
      </div>
      <figcaption className="viz-caption">
        The fundamental solution Φ(x, t) = exp(−x²/4t)/√(4πt) is the temperature that results from one unit of heat placed at
        the origin. It is a bell curve whose width grows like √t and whose area stays 1. Any initial temperature φ evolves
        into the convolution u = Φ ∗ φ; for the block, u is a difference of error functions. At every positive time the
        temperature far away is positive, though tiny: heat, unlike sound, travels at infinite speed.
      </figcaption>
    </figure>
  );
}
