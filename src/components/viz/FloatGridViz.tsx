"use client";

import { useState } from "react";

/** A toy binary floating-point system: the representable numbers, their spacing, and rounding error. */
export function FloatGridViz() {
  const [p, setP] = useState(3);
  const [x, setX] = useState(5.3);
  const nums: number[] = [];
  for (let e = -2; e <= 2; e++) for (let k = 0; k < 2 ** (p - 1); k++) nums.push((1 + k / 2 ** (p - 1)) * 2 ** e);
  nums.push(8);
  let fl = nums[0];
  nums.forEach((v) => { if (Math.abs(v - x) < Math.abs(fl - x)) fl = v; });
  const rel = Math.abs(fl - x) / x;
  const u = 2 ** -p;
  const X = (v: number) => 20 + (v / 8) * 480;
  const inOneTwo = 2 ** (p - 1);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>precision p (binary digits): <span className="mono">{p}</span></span>
          <input type="range" min={2} max={5} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>number to store x: <span className="mono">{x.toFixed(2)}</span></span>
          <input type="range" min={0.25} max={7.9} step={0.01} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="Representable numbers between 0 and 8" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={45} x2={X(8)} y2={45} style={{ stroke: "var(--border)" }} />
        {nums.map((v, i) => <line key={i} x1={X(v)} y1={34} x2={X(v)} y2={56} style={{ stroke: v === fl ? "var(--accent)" : "var(--text-muted)", strokeWidth: v === fl ? 3 : 1.2 }} />)}
        <circle cx={X(x)} cy={45} r={4} style={{ fill: "var(--danger)" }} />
        {[0, 1, 2, 4, 8].map((t) => <text key={t} x={X(t) - 3} y={76} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        {[0.5, 1, 2, 4].map((t) => <line key={`b${t}`} x1={X(t)} y1={24} x2={X(t)} y2={62} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 2" }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>numbers stored between 1 and 2: {inOneTwo}; spacing there {(1 / inOneTwo).toString()}</div>
        <div>x = {x.toFixed(4)} is stored as fl(x) = {fl}</div>
        <div>relative error |fl(x) − x| / x = {rel.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>unit roundoff u = 2⁻ᵖ = {u}: the relative error never exceeds it</div>
      </div>
      <figcaption className="viz-caption">
        Each tick is a number of the form m × 2ᵉ with a significand m of p binary digits between 1 and 2. The ticks are evenly
        spaced within each binade, from one power of two to the next, and the spacing doubles from one binade to the next. So
        the absolute error of rounding grows with the size of x while the relative error stays below u. Double precision has
        p = 53, so u is about 1.1 × 10⁻¹⁶.
      </figcaption>
    </figure>
  );
}
