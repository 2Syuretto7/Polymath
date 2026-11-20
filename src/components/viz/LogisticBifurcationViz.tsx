"use client";

import { useMemo, useState } from "react";

const R0 = 2.8, R1 = 4;

/** The period of the attractor of x ↦ rx(1 − x) from x₀ = 0.2, or 0 if none up to 64 is found. */
export function attractorPeriod(r: number) {
  let x = 0.2;
  for (let i = 0; i < 4000; i++) x = r * x * (1 - x);
  const x0 = x;
  for (let p = 1; p <= 64; p++) { x = r * x * (1 - x); if (Math.abs(x - x0) < 1e-6) return p; }
  return 0;
}

export function LogisticBifurcationViz() {
  const [r, setR] = useState(3.5);
  const W = 250, H = 200, X0 = 30, Y0 = 20;
  const diagram = useMemo(() => {
    const cells = new Set<string>();
    for (let i = 0; i < W; i++) {
      const rr = R0 + ((i + 0.5) / W) * (R1 - R0);
      let x = 0.2;
      for (let k = 0; k < 500; k++) x = rr * x * (1 - x);
      for (let k = 0; k < 120; k++) { x = rr * x * (1 - x); cells.add(`${i},${Math.round((1 - x) * (H - 1))}`); }
    }
    return Array.from(cells).map((c) => { const [i, j] = c.split(",").map(Number); return `M${X0 + i},${Y0 + j}h1v1h-1z`; }).join("");
  }, []);
  const period = attractorPeriod(r);
  const f = (x: number) => r * x * (1 - x);
  const cx = (x: number) => 310 + x * 200, cy = (y: number) => 220 - y * 200;
  let x = 0.2;
  let web = `M${cx(x)},${cy(0)}`;
  for (let k = 0; k < 80; k++) { const y = f(x); web += `L${cx(x).toFixed(1)},${cy(y).toFixed(1)}L${cx(y).toFixed(1)},${cy(y).toFixed(1)}`; x = y; }
  const parab = Array.from({ length: 101 }, (_, i) => i / 100).map((t, i) => `${i ? "L" : "M"}${cx(t).toFixed(1)},${cy(f(t)).toFixed(1)}`).join("");
  const rx = X0 + ((r - R0) / (R1 - R0)) * W;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>r = {r.toFixed(3)} <input type="range" min={R0} max={R1} step={0.005} value={r} onChange={(e) => setR(Number(e.target.value))} aria-label="r" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Bifurcation diagram and cobweb of the logistic map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={Y0} width={W} height={H} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <path d={diagram} style={{ fill: "var(--accent)" }} />
        <line x1={rx} y1={Y0} x2={rx} y2={Y0 + H} style={{ stroke: "var(--danger)" }} />
        <text x={X0} y={Y0 + H + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>r = 2.8</text>
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>r = 4</text>
        <text x={X0} y={12} style={{ fill: "var(--text-muted)", fontSize: 10 }}>long-run values of x against r</text>
        <rect x={310} y={20} width={200} height={200} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <line x1={cx(0)} y1={cy(0)} x2={cx(1)} y2={cy(1)} style={{ stroke: "var(--grid-line)" }} />
        <path d={parab} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={web} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 0.9 }} />
        <text x={310} y={12} style={{ fill: "var(--text-muted)", fontSize: 10 }}>cobweb from x₀ = 0.2, 80 steps</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        r = {r.toFixed(3)}: {period ? `the orbit settles on a cycle of period ${period}.` : "no attracting cycle of period up to 64 found; the orbit looks chaotic."}
      </p>
      <figcaption className="viz-caption">
        For the logistic map x ↦ rx(1 − x), the fixed point is attracting up to r = 3. Then it gives way to a cycle of
        period 2, then 4, 8, …, at values of r that crowd together at the Feigenbaum rate 4.669… and accumulate near
        3.5699. Beyond lies chaos, interrupted by windows such as the period-3 window near r = 3.83.
      </figcaption>
    </figure>
  );
}
