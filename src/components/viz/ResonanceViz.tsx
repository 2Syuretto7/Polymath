"use client";

import { useState } from "react";

/** y″ + by′ + y = cos ωt from rest: the amplitude response curve and the motion it predicts. */
export function ResonanceViz() {
  const [w, setW] = useState(0.8);
  const [b, setB] = useState(0.2);
  const amp = (om: number) => 1 / Math.sqrt((1 - om * om) ** 2 + (b * om) ** 2);
  // RK4 from rest
  const T = 60, n = 1200, h = T / n;
  let y = 0, v = 0;
  const ys = [0];
  const f = (t: number, yy: number, vv: number): [number, number] => [vv, Math.cos(w * t) - b * vv - yy];
  for (let i = 0; i < n; i++) {
    const t = i * h;
    const [a1, b1] = f(t, y, v), [a2, b2] = f(t + h / 2, y + (h * a1) / 2, v + (h * b1) / 2), [a3, b3] = f(t + h / 2, y + (h * a2) / 2, v + (h * b2) / 2), [a4, b4] = f(t + h, y + h * a3, v + h * b3);
    y += (h / 6) * (a1 + 2 * a2 + 2 * a3 + a4); v += (h / 6) * (b1 + 2 * b2 + 2 * b3 + b4);
    ys.push(y);
  }
  const W = 520, H = 170, L = 36;
  const oms = Array.from({ length: 301 }, (_, i) => 0.05 + (i / 300) * 2.45);
  const amax = Math.max(...oms.map(amp)) * 1.05;
  const XA = (om: number) => L + ((om - 0.05) / 2.45) * (W - L - 10);
  const YA = (a: number) => 8 + ((amax - a) / amax) * (H - 28);
  const ym = Math.max(...ys.map(Math.abs), 0.1) * 1.05;
  const XT = (t: number) => L + (t / T) * (W - L - 10);
  const YT = (v2: number) => 8 + ((ym - v2) / (2 * ym)) * (H - 28);
  const peak = b < Math.SQRT2 ? Math.sqrt(1 - (b * b) / 2) : 0;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>forcing frequency ω: <span className="mono">{w.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={2.5} step={0.02} value={w} onChange={(e) => setW(Number(e.target.value))} /></label>
        <label><span>damping b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={1.5} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>steady amplitude against forcing frequency</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Amplitude response curve" style={{ width: "100%", display: "block" }}>
        <line x1={L} y1={YA(0)} x2={W - 10} y2={YA(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <line x1={XA(1)} y1={8} x2={XA(1)} y2={H - 20} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <text x={L - 6} y={YA(amax / 1.05) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{(amax / 1.05).toFixed(1)}</text>
        {[0.5, 1, 1.5, 2, 2.5].map((v) => <text key={v} x={XA(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <path d={oms.map((om, i) => `${i ? "L" : "M"}${XA(om).toFixed(1)},${YA(amp(om)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <circle cx={XA(w)} cy={YA(amp(w))} r={6} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "8px 0 0", fontSize: 13 }}>the motion from rest, 0 ≤ t ≤ 60</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Motion of the forced oscillator" style={{ width: "100%", display: "block" }}>
        <line x1={L} y1={YT(0)} x2={W - 10} y2={YT(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        <text x={L - 6} y={YT(ym / 1.05) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{(ym / 1.05).toFixed(1)}</text>
        {[0, 20, 40, 60].map((v) => <text key={v} x={XT(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <path d={ys.map((v2, i) => `${i ? "L" : "M"}${XT(i * h).toFixed(1)},${YT(v2).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        steady amplitude {amp(w).toFixed(2)}; {peak ? `largest at ω = ${peak.toFixed(2)}, where it is ${amp(peak).toFixed(2)}` : "no peak: the response falls as ω grows"}
      </p>
      <figcaption className="viz-caption">
        The natural frequency is 1 (dotted line). Forcing near it builds up a large oscillation; forcing far from it barely moves the system. Less damping makes the peak taller and narrower. Early on, the motion mixes the forced oscillation with a free one that dies away, which shows as beats.
      </figcaption>
    </figure>
  );
}
