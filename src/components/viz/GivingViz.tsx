"use client";

import { useState } from "react";

/** How much should you give? With diminishing marginal utility, maximising total welfare asks for a great deal. */
export function GivingViz() {
  const [d, setD] = useState(10);
  const [sat, setSat] = useState(0.8);
  const Wd = 100, k = 10;
  const total = (x: number) => Math.log(Wd - x) + k * Math.log(1 + x / k);
  const dOpt = (Wd - 1) / (1 + 1 / k);
  const gainMax = total(dOpt) - total(0);
  // smallest gift that achieves the chosen fraction of the best possible improvement
  let dSat = 0; while (dSat < dOpt && total(dSat) - total(0) < sat * gainMax) dSat += 0.5;
  const xs = Array.from({ length: 200 }, (_, i) => (i / 199) * 99);
  const lo = total(0), hi = total(dOpt);
  const W = 560, H = 200, pl = 30;
  const X = (x: number) => pl + (x / 100) * (W - pl - 10), Y = (v: number) => H - 24 - ((v - lo) / (hi - lo)) * (H - 44);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        You have 100 units of income a month. Ten strangers have 1 unit each. Each person&rsquo;s wellbeing grows with the
        logarithm of their income, so a unit matters far more to the poor.
      </p>
      <div className="viz-sliders">
        <label><span>you give: <span className="mono">{d}</span></span><input type="range" min={0} max={99} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
        <label><span>satisficing level: <span className="mono">{Math.round(sat * 100)}%</span></span><input type="range" min={0.5} max={0.99} step={0.01} value={sat} onChange={(e) => setSat(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Total wellbeing against the amount given" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={H - 24} x2={W - 10} y2={H - 24} style={{ stroke: "var(--border)" }} />
        <text x={W - 10} y={H - 8} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>amount given →</text>
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(total(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={X(dOpt)} y1={10} x2={X(dOpt)} y2={H - 24} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        <text x={X(dOpt) - 4} y={H - 30} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>best total</text>
        <line x1={X(dSat)} y1={30} x2={X(dSat)} y2={H - 24} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <text x={X(dSat) + 4} y={H - 46} style={{ fill: "var(--text-muted)", fontSize: 11 }}>good enough</text>
        <circle cx={X(d)} cy={Y(total(d))} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>you keep {100 - d}; each stranger has {(1 + d / k).toFixed(1)}</div>
        <div>maximising consequentialism: give {dOpt.toFixed(0)}, leaving you with {(100 - dOpt).toFixed(0)}</div>
        <div>satisficing at {Math.round(sat * 100)}% of the best improvement: give about {dSat.toFixed(0)}</div>
      </div>
      <figcaption className="viz-caption">
        Maximising the total asks you to give until your last unit matters no more to you than to them, here leaving you
        no better off than the strangers. This is the demandingness objection. Satisficing consequentialism requires only
        good enough outcomes; scalar consequentialism drops &ldquo;required&rdquo; altogether and ranks acts as better or
        worse.
      </figcaption>
    </figure>
  );
}
