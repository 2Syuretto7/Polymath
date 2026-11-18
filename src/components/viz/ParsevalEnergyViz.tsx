"use client";

import { useState } from "react";

/** Fraction of ‖f‖² captured by the odd sine coefficients up to N, for the square wave sign(x) on [−π, π]. */
export function capturedEnergy(N: number): number {
  let s = 0;
  for (let k = 1; k <= N; k += 2) s += 8 / (Math.PI * Math.PI * k * k);
  return s;
}

/** Partial sums of the Fourier series of a square wave, and Parseval’s identity. */
export function ParsevalEnergyViz() {
  const [N, setN] = useState(5);
  const X = (x: number) => 30 + ((x + Math.PI) / (2 * Math.PI)) * 460, Y = (y: number) => 90 - y * 55;
  const S = (x: number) => { let s = 0; for (let k = 1; k <= N; k += 2) s += (4 / (Math.PI * k)) * Math.sin(k * x); return s; };
  const xs = Array.from({ length: 801 }, (_, i) => -Math.PI + (i / 800) * 2 * Math.PI);
  const frac = capturedEnergy(N);
  const bars = Array.from({ length: 15 }, (_, i) => 2 * i + 1);
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 280" role="img" aria-label="A square wave, a Fourier partial sum and the energy of each term" style={{ width: "100%", display: "block" }}>
        <path d={`M${X(-Math.PI)} ${Y(-1)} H${X(0)} V${Y(1)} H${X(Math.PI)}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(S(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(-Math.PI)} y1={Y(0)} x2={X(Math.PI)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <text x={30} y={184} style={{ fill: "var(--text-muted)", fontSize: 11 }}>share of ‖f‖² in each coefficient, k = 1, 3, 5, …</text>
        {bars.map((k, i) => {
          const v = 8 / (Math.PI * Math.PI * k * k);
          return <rect key={k} x={30 + i * 30} y={270 - v * 90} width={22} height={v * 90} style={{ fill: k <= N ? "var(--accent)" : "var(--border)" }} />;
        })}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          terms up to k = {N}{" "}
          <input type="range" min={1} max={29} step={2} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="number of terms" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Σ |⟨f, eₖ⟩|² / ‖f‖² up to k = {N}: {frac.toFixed(4)}. Squared error ‖f − Sₙf‖² / ‖f‖² = {(1 - frac).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Grey: the square wave. Blue: the partial sum of its Fourier series in the orthonormal basis of sines. Bessel&rsquo;s
        inequality says the captured shares never exceed 1; Parseval&rsquo;s identity, because the basis is complete, says
        they add up to exactly 1, even though the partial sums overshoot near the jump.
      </figcaption>
    </figure>
  );
}
