"use client";

import { useState } from "react";
import { divisors, mu, phi } from "./ntTools";

/** Möbius inversion: the sum of μ(d) over the divisors of n vanishes unless n = 1, and φ(n) is recovered from n = Σ φ(d). */
export function MobiusSumViz() {
  const [mode, setMode] = useState(0);
  const [n, setN] = useState(12);
  const ds = divisors(n);
  const rows = ds.map((d) => ({ d, m: mu(d), q: n / d, ph: phi(d) }));
  const total = mode === 0 ? rows.reduce((a, r) => a + r.m, 0) : mode === 1 ? rows.reduce((a, r) => a + r.ph, 0) : rows.reduce((a, r) => a + r.m * r.q, 0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sum">
        {["Σ μ(d)", "Σ φ(d)", "Σ μ(d) · n/d"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{l}</button>)}
      </div>
      <div className="viz-controls">
        <span className="viz-stepper"><span className="viz-stepper-label">n</span>
          <button type="button" className="btn" onClick={() => setN(Math.max(1, n - 1))} disabled={n <= 1} aria-label="Smaller n">−</button>
          <span className="mono viz-stepper-value">{n}</span>
          <button type="button" className="btn" onClick={() => setN(Math.min(120, n + 1))} disabled={n >= 120} aria-label="Larger n">+</button>
        </span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "auto", marginTop: 6 }}>
          <thead>
            <tr>
              <th style={{ textTransform: "none" }}>d</th>
              {mode !== 1 && <th style={{ textTransform: "none" }}>μ(d)</th>}
              {mode === 2 && <th style={{ textTransform: "none" }}>n/d</th>}
              {mode === 1 && <th style={{ textTransform: "none" }}>φ(d)</th>}
              <th style={{ textTransform: "none" }}>term</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const term = mode === 0 ? r.m : mode === 1 ? r.ph : r.m * r.q;
              return (
                <tr key={r.d} style={{ color: term === 0 ? "var(--text-faint)" : undefined }}>
                  <td className="mono">{r.d}</td>
                  {mode !== 1 && <td className="mono">{r.m}</td>}
                  {mode === 2 && <td className="mono">{r.q}</td>}
                  {mode === 1 && <td className="mono">{r.ph}</td>}
                  <td className="mono">{term > 0 && mode !== 1 ? `+${term}` : term}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "8px 0", fontSize: 15 }}>
        sum = {total}{mode === 0 ? (n === 1 ? " (n = 1)" : " (n > 1)") : mode === 1 ? ` = n` : ` = φ(${n})`}
      </p>
      <figcaption className="viz-caption">
        {mode === 0 && "The divisors with μ(d) ≠ 0 are the squarefree ones; those with an even number of prime factors cancel those with an odd number, so the sum is 0 for every n > 1."}
        {mode === 1 && "Sort the fractions 1/n, 2/n, …, n/n by their denominator in lowest terms: exactly φ(d) of them have denominator d. So the φ(d) add up to n."}
        {mode === 2 && "Möbius inversion turns n = Σ φ(d) round: φ(n) = Σ μ(d) · n/d. Rows with μ(d) = 0 drop out, leaving inclusion and exclusion over the primes dividing n."}
      </figcaption>
    </figure>
  );
}
