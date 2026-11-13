"use client";

import { useState } from "react";

const LZ = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
/** The Gamma function on the real line, by the Lanczos approximation and the reflection formula. */
export function gammaReal(x: number): number {
  if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gammaReal(1 - x));
  const y = x - 1;
  let a = LZ[0];
  const t = y + 7.5;
  for (let i = 1; i < 9; i++) a += LZ[i] / (y + i);
  return Math.sqrt(2 * Math.PI) * Math.pow(t, y + 0.5) * Math.exp(-t) * a;
}

/** The Gamma function: interpolating the factorials, with poles at 0, −1, −2, … */
export function GammaViz() {
  const [x, setX] = useState(2.5);
  const W = 560, H = 260, x0 = -4.5, x1 = 5.3, y0 = -8, y1 = 26;
  const X = (u: number) => 30 + ((u - x0) / (x1 - x0)) * (W - 40), Y = (v: number) => 10 + ((y1 - v) / (y1 - y0)) * (H - 30);
  let d = "", pen = false;
  for (let k = 0; k <= 2000; k++) {
    const u = x0 + ((x1 - x0) * k) / 2000;
    const v = gammaReal(u);
    if (!Number.isFinite(v) || v > y1 + 4 || v < y0 - 4) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(u).toFixed(1)},${Y(v).toFixed(1)} `;
    pen = true;
  }
  const pole = x <= 0 && Math.abs(x - Math.round(x)) < 1e-9;
  const g = pole ? NaN : gammaReal(x);
  const show = (v: number) => (Number.isFinite(v) ? (Math.abs(v) < 5e-4 ? "0.0000" : v.toFixed(4)) : "pole");
  // integrand t^{x−1} e^{−t}
  const IW = 260, IH = 120, T = 12;
  const f = (t: number) => Math.pow(t, x - 1) * Math.exp(-t);
  const ts = Array.from({ length: 241 }, (_, k) => 0.02 + ((T - 0.02) * k) / 240);
  const fmax = Math.max(...ts.map(f).filter(Number.isFinite), 1e-9);
  const cap = Math.min(fmax, x < 1 ? 3 : fmax);
  const ix = (t: number) => 10 + (t / T) * (IW - 20), iy = (v: number) => IH - 18 - (Math.min(v, cap) / cap) * (IH - 30);
  const area = `M${ix(ts[0])},${iy(0)} ` + ts.map((t) => `L${ix(t).toFixed(1)},${iy(f(t)).toFixed(1)}`).join(" ") + ` L${ix(T)},${iy(0)} Z`;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>x: <span className="mono">{x.toFixed(1)}</span></span><input type="range" min={-4.4} max={5.2} step={0.1} value={x} onChange={(e) => setX(Math.round(Number(e.target.value) * 10) / 10)} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graph of the Gamma function on the real line" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={30} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={10} x2={X(0)} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[-4, -3, -2, -1, 0].map((p) => <line key={p} x1={X(p)} y1={10} x2={X(p)} y2={H - 20} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 4" }} />)}
        {[-4, -2, 2, 4].map((t) => <text key={t} x={X(t)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        {[10, 20].map((t) => <text key={t} x={24} y={Y(t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {[1, 2, 3, 4, 5].map((n) => <circle key={n} cx={X(n)} cy={Y([1, 1, 2, 6, 24][n - 1])} r={4} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />)}
        {!pole && g < y1 && g > y0 && <circle cx={X(x)} cy={Y(g)} r={5.5} style={{ fill: "var(--text)" }} />}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>Γ({x.toFixed(1)}) = {show(g)}</div>
        <div>{pole ? `Γ has a simple pole at ${x.toFixed(0)}` : `Γ(x + 1) = ${show(gammaReal(x + 1))} and x·Γ(x) = ${show(x * g)}`}</div>
      </div>
      {x > 0 ? (
        <>
          <svg viewBox={`0 0 ${IW} ${IH}`} role="img" aria-label="The integrand t to the x minus 1 times e to the minus t" style={{ width: "100%", maxWidth: 360, display: "block", margin: "8px auto 0" }}>
            <line x1={10} y1={iy(0)} x2={IW - 10} y2={iy(0)} style={{ stroke: "var(--border)" }} />
            <path d={area} style={{ fill: "var(--accent)", fillOpacity: 0.25, stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={IW / 2} y={IH - 3} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>t^(x − 1) e^(−t) for 0 &lt; t &lt; 12: its area is Γ(x)</text>
          </svg>
        </>
      ) : (
        <p style={{ margin: "6px 0", fontSize: 14 }}>For x ≤ 0 the integral diverges at 0; Γ is continued there by Γ(x) = Γ(x + 1)/x.</p>
      )}
      <figcaption className="viz-caption">
        The circles are the factorials: Γ(n) = (n − 1)! at n = 1, 2, 3, 4, 5. The curve passes through them all, satisfies
        Γ(x + 1) = xΓ(x), and has poles at 0 and the negative integers, marked by dashed lines.
      </figcaption>
    </figure>
  );
}
