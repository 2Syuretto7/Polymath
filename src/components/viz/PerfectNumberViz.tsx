"use client";

import { useState } from "react";
import { sigma } from "./ntTools";

const MERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
const isPrime = (n: number) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };

/** Abundancy σ(n)/n for n up to 600, with the perfect numbers at exactly 2; and Euclid's construction from Mersenne primes. */
export function PerfectNumberViz() {
  const [mode, setMode] = useState(0);
  const [sel, setSel] = useState(28);
  const N = 600, W = 560, H = 240, L = 30;
  const X = (n: number) => L + ((n - 1) / (N - 1)) * (W - L - 10);
  const Y = (r: number) => H - 20 - ((r - 1) / 2.6) * (H - 30);
  const ab = (n: number) => sigma(n) / n;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="View">
        {["abundancy σ(n)/n", "Mersenne primes"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{l}</button>)}
      </div>
      {mode === 0 ? (
        <>
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Abundancy of n up to 600" style={{ width: "100%", display: "block", marginTop: 8 }}>
            <line x1={L} y1={Y(2)} x2={W - 10} y2={Y(2)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
            <text x={L - 4} y={Y(2) + 4} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 10 }}>2</text>
            <text x={L - 4} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
            <text x={L - 4} y={Y(3) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>3</text>
            {Array.from({ length: N }, (_, i) => i + 1).map((n) => {
              const r = ab(n), perfect = sigma(n) === 2 * n;
              return <circle key={n} cx={X(n)} cy={Y(r)} r={perfect ? 5 : n === sel ? 4 : 1.6} onClick={() => setSel(n)} style={{ fill: perfect || n === sel ? "var(--accent)" : "var(--text-faint)", cursor: "pointer" }} />;
            })}
            <text x={X(6) + 8} y={Y(2) - 8} style={{ fill: "var(--text)", fontSize: 11 }}>6</text>
            <text x={X(28) + 8} y={Y(2) - 8} style={{ fill: "var(--text)", fontSize: 11 }}>28</text>
            <text x={X(496)} y={Y(2) - 10} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>496</text>
          </svg>
          <div className="viz-sliders">
            <label><span>n: <span className="mono">{sel}</span></span>
              <input type="range" min={1} max={N} step={1} value={sel} onChange={(e) => setSel(Number(e.target.value))} /></label>
          </div>
          <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
            σ({sel}) = {sigma(sel)}, σ(n)/n = {ab(sel).toFixed(3)}: {sigma(sel) === 2 * sel ? "perfect" : sigma(sel) > 2 * sel ? "abundant" : "deficient"}
          </p>
        </>
      ) : (
        <table className="table" style={{ width: "auto", marginTop: 8 }}>
          <thead><tr><th style={{ textTransform: "none" }}>p</th><th style={{ textTransform: "none" }}>2ᵖ − 1</th><th style={{ textTransform: "none" }}>prime?</th><th style={{ textTransform: "none" }}>2ᵖ⁻¹(2ᵖ − 1)</th></tr></thead>
          <tbody>
            {MERS.map((p) => {
              const m = 2 ** p - 1, pr = isPrime(m);
              return (
                <tr key={p} style={{ color: pr ? undefined : "var(--text-faint)" }}>
                  <td className="mono">{p}</td><td className="mono">{m.toLocaleString("en-IN")}</td><td>{pr ? "yes" : "no"}</td>
                  <td className="mono">{pr ? (2 ** (p - 1) * m).toLocaleString("en-IN") + ", perfect" : "not perfect"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <figcaption className="viz-caption">
        {mode === 0
          ? "A number is perfect when σ(n) = 2n, so its abundancy is exactly 2. Most numbers fall below the line; multiples of 6 tend to lie above. Only 6, 28 and 496 hit it below 600."
          : "Every Mersenne prime 2ᵖ − 1 gives an even perfect number, and Euler proved every even perfect number arises this way. For 2ᵖ − 1 to be prime, p must be prime, but that is not enough: 2¹¹ − 1 = 2047 = 23 · 89."}
      </figcaption>
    </figure>
  );
}
