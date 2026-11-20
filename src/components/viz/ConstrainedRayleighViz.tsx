"use client";

import { useState } from "react";

/** Trial functions u = cos θ sin x + sin θ sin 2x on (0, π), normalised in L², and their Dirichlet energy. */
export function ConstrainedRayleighViz() {
  const [deg, setDeg] = useState(30);
  const th = (deg * Math.PI) / 180;
  const a = Math.cos(th);
  const b = Math.sin(th);
  const R = (t: number) => Math.cos(t) ** 2 + 4 * Math.sin(t) ** 2;
  const norm = Math.sqrt(Math.PI / 2);
  const u = (x: number) => (a * Math.sin(x) + b * Math.sin(2 * x)) / norm;
  const xs = Array.from({ length: 181 }, (_, i) => (i * Math.PI) / 180);
  const ths = Array.from({ length: 181 }, (_, i) => i);
  const X = (x: number) => 20 + (x / Math.PI) * 250;
  const Y = (y: number) => 95 - y * 60;
  const TX = (d: number) => 310 + (d / 180) * 210;
  const TY = (r: number) => 170 - (r - 0.5) * 38;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>θ = {deg}° <input type="range" min={0} max={180} step={15} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="theta" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="A normalised trial function and its Dirichlet energy" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(Math.PI)} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(Math.PI / 2)} y={182} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>u on (0, π), with ∫u² = 1</text>
        <line x1={TX(0)} y1={TY(1)} x2={TX(180)} y2={TY(1)} style={{ stroke: "var(--success)", strokeDasharray: "5 3" }} />
        <text x={TX(0) - 4} y={TY(1) + 4} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>1</text>
        <text x={TX(0) - 4} y={TY(4) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>4</text>
        <polyline points={ths.map((d) => `${TX(d)},${TY(R((d * Math.PI) / 180))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <circle cx={TX(deg)} cy={TY(R(th))} r={6} style={{ fill: "var(--accent)" }} />
        <text x={TX(90)} y={182} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>∫u′² against θ</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∫u′² = cos²θ + 4 sin²θ = {R(th).toFixed(3)}.{" "}
        {deg % 180 === 0 ? "This is the minimum, λ₁ = 1, attained by the first eigenfunction." : "The minimum over the constraint is 1, at θ = 0°."}
      </p>
      <figcaption className="viz-caption">
        Minimising ∫u′² subject to ∫u² = 1 and zero boundary values leads, with a Lagrange multiplier λ, to −u″ = λu: the
        minimiser is an eigenfunction and the minimum value is the first eigenvalue. On (0, π) that is sin x, with λ₁ = 1;
        mixing in sin 2x, with eigenvalue 4, only raises the energy.
      </figcaption>
    </figure>
  );
}
