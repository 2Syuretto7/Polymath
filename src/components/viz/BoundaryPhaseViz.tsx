"use client";

import { useState } from "react";

/** p = −i d/dx on L²[0, 1]: the boundary condition decides whether it is self-adjoint and what its eigenvalues are. */
export function BoundaryPhaseViz() {
  const [mode, setMode] = useState<"phase" | "zero">("phase");
  const [deg, setDeg] = useState(0);
  const th = (deg * Math.PI) / 180;
  const eig = Array.from({ length: 9 }, (_, i) => th + 2 * Math.PI * (i - 4));
  const X = (v: number) => 260 + v * 9;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="boundary condition">
        <button type="button" aria-pressed={mode === "phase"} className={mode === "phase" ? "seg is-on" : "seg"} onClick={() => setMode("phase")}>f(1) = eⁱᶿ f(0)</button>
        <button type="button" aria-pressed={mode === "zero"} className={mode === "zero" ? "seg is-on" : "seg"} onClick={() => setMode("zero")}>f(0) = f(1) = 0</button>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="Eigenvalues on the real line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={45} x2={510} y2={45} style={{ stroke: "var(--text-muted)" }} />
        {[-24, -12, 0, 12, 24].map((v) => <g key={v}><line x1={X(v)} y1={40} x2={X(v)} y2={50} style={{ stroke: "var(--text-muted)" }} /><text x={X(v)} y={68} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text></g>)}
        {mode === "phase" && eig.filter((v) => X(v) > 10 && X(v) < 510).map((v, i) => <circle key={i} cx={X(v)} cy={45} r={6} style={{ fill: "var(--accent)" }} />)}
        {mode === "zero" && <text x={260} y={28} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>no eigenvalues; the spectrum is all of ℂ</text>}
      </svg>
      {mode === "phase" && (
        <div className="viz-controls">
          <label className="mono" style={{ fontSize: 13 }}>
            θ = {deg}°{" "}
            <input type="range" min={0} max={360} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="phase theta" />
          </label>
        </div>
      )}
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {mode === "phase"
          ? `Self-adjoint. Eigenfunctions exp(iλx) with λ = θ + 2πk; smallest non-negative eigenvalue ${(((th % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)).toFixed(3)}.`
          : "Symmetric but not self-adjoint: the domain is too small, and the adjoint drops both conditions."}
      </p>
      <figcaption className="viz-caption">
        The same formula, −i times the derivative, gives different operators on different domains. Requiring f to vanish
        at both ends makes it symmetric, ⟨pf, g⟩ = ⟨f, pg⟩, but not self-adjoint. Each phase θ gives a self-adjoint
        extension, with real eigenvalues θ + 2πk that slide as θ turns.
      </figcaption>
    </figure>
  );
}
