"use client";

import { useState } from "react";

const PI = Math.PI;
const FS = [
  { key: "x", label: "f(x) = x", c0: 0, cn: (n: number) => 1 / (n * n), norm: (PI * PI) / 3, series: "∑ 1/n²", term: (n: number) => 1 / n ** 2, exact: (PI * PI) / 6, exactText: "π²/6" },
  { key: "x2", label: "f(x) = x²", c0: (PI ** 4) / 9, cn: (n: number) => 4 / n ** 4, norm: PI ** 4 / 5, series: "∑ 1/n⁴", term: (n: number) => 1 / n ** 4, exact: PI ** 4 / 90, exactText: "π⁴/90" },
  { key: "sq", label: "square wave", c0: 0, cn: (n: number) => (n % 2 ? 4 / (PI * PI * n * n) : 0), norm: 1, series: "∑ 1/n² over odd n", term: (n: number) => (n % 2 ? 1 / n ** 2 : 0), exact: (PI * PI) / 8, exactText: "π²/8" },
  { key: "abs", label: "f(x) = |x|", c0: (PI * PI) / 4, cn: (n: number) => (n % 2 ? 4 / (PI ** 2 * n ** 4) : 0), norm: (PI * PI) / 3, series: "∑ 1/n⁴ over odd n", term: (n: number) => (n % 2 ? 1 / n ** 4 : 0), exact: PI ** 4 / 96, exactText: "π⁴/96" },
];

/** Parseval's identity on [−π, π] turned into exact values of series. cn gives |cₙ|² for n ≥ 1, c0 gives |c₀|². */
export function ParsevalSeriesViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(10);
  const F = FS[k];
  const cum: number[] = [F.c0];
  for (let n = 1; n <= 40; n++) cum.push(cum[n - 1] + 2 * F.cn(n));
  let part = 0;
  for (let n = 1; n <= N; n++) part += F.term(n);
  const gx = (n: number) => 40 + (n / 40) * 460, gy = (v: number) => 220 - (v / F.norm) * 180;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FS.map((f, i) => <button key={f.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>N = {N} <input type="range" min={1} max={40} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Energy captured by Fourier coefficients" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={220} x2={500} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={30} x2={40} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={gy(F.norm)} x2={500} y2={gy(F.norm)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <text x={496} y={gy(F.norm) - 6} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>‖f‖² = average of |f|²</text>
        {cum.map((v, n) => (
          <rect key={n} x={gx(n) - 4} y={gy(v)} width={8} height={220 - gy(v)} style={{ fill: n <= N ? "var(--accent)" : "var(--text-faint)", opacity: n <= N ? 0.85 : 0.35 }} />
        ))}
        <text x={270} y={242} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>bar n: the sum of |cₖ|² over |k| ≤ n</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Captured {(cum[N] / F.norm * 100).toFixed(2)}% of ‖f‖². Parseval gives {F.series} = {F.exactText} = {F.exact.toFixed(4)}; the first {N} terms give {part.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Parseval&rsquo;s identity says the average of |f|² over a period equals the sum of |cₙ|² over all n. For simple
        functions both sides can be computed exactly, and the identity becomes the exact value of a series. Smoother
        functions have faster-decaying coefficients and capture their energy sooner.
      </figcaption>
    </figure>
  );
}
