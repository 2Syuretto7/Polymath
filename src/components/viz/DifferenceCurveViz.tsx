"use client";

import { useState } from "react";

const xa = (t: number) => 10 + 60 * t; // most advantaged
const ya = (t: number) => 10 + 40 * t - 50 * t * t; // least advantaged

/** Rawls’s difference principle: inequality is allowed only as far as it raises the position of the least advantaged. */
export function DifferenceCurveViz() {
  const [t, setT] = useState(0.2);
  const W = 400, H = 300, L = 40, B = 34;
  const X = (v: number) => L + (v / 75) * (W - L - 10), Y = (v: number) => H - B - (v / 25) * (H - B - 10);
  const pts = Array.from({ length: 101 }, (_, k) => k / 100);
  const tm = 0.4;
  const zone = t < tm - 1e-9 ? "Below the peak: more inequality would help the worst off too, so justice requires it." : t > tm + 1e-9 ? "Beyond the peak: the extra inequality lowers the worst off’s position, so the difference principle forbids it, even though total income rises." : "At the peak: the worst off are as well off as they can be. This is the point the difference principle selects.";
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>degree of inequality: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Income of the least advantaged against income of the most advantaged" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        {[0, 25, 50, 75].map((v) => <text key={v} x={X(v)} y={H - B + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        {[0, 10, 20].map((v) => <text key={v} x={L - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={Y(0)} x2={L} y2={10} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(25)} y2={Y(25)} style={{ stroke: "var(--text-faint)", strokeDasharray: "5 4" }} />
        <text x={X(22)} y={Y(23)} style={{ fill: "var(--text-muted)", fontSize: 10 }}>equality</text>
        <path d={pts.map((s, k) => `${k ? "L" : "M"}${X(xa(s)).toFixed(1)},${Y(ya(s)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={X(xa(tm))} y1={Y(ya(tm))} x2={X(xa(tm))} y2={Y(0)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <circle cx={X(xa(t))} cy={Y(ya(t))} r={6} style={{ fill: "var(--text)" }} />
        <text x={(W + L) / 2} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>income of the most advantaged</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>most advantaged: {xa(t).toFixed(1)}; least advantaged: {ya(t).toFixed(1)}; total: {(xa(t) + ya(t)).toFixed(1)}</div>
      </div>
      <p style={{ margin: "6px 0 4px", fontSize: 15 }}>{zone}</p>
      <figcaption className="viz-caption">
        The curve shows how the two groups fare as incentives allow more inequality: at first everyone gains, then the best
        off keep gaining at the worst off&rsquo;s expense. The vertical dashed line marks the peak. A utilitarian maximising
        the total would go to the far end of the curve; the difference principle stops at the peak.
      </figcaption>
    </figure>
  );
}
