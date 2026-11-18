"use client";

import { useState } from "react";

/** Largest value of Thomae’s function on [a, b]: 1/q for the least q with a fraction p/q in the interval. */
export function thomaeMax(a: number, b: number): number {
  for (let q = 1; q < 100000; q++) if (Math.ceil(a * q - 1e-12) <= Math.floor(b * q + 1e-12)) return 1 / q;
  return 0;
}

type Kind = "step" | "thomae" | "dirichlet";

export function darboux(kind: Kind, n: number): { lower: number; upper: number } {
  let lower = 0, upper = 0;
  for (let i = 0; i < n; i++) {
    const a = i / n, b = (i + 1) / n;
    if (kind === "step") {
      lower += (b <= 0.5 ? 1 : a >= 0.5 ? 2 : 1) / n;
      upper += (b <= 0.5 ? 1 : a >= 0.5 ? 2 : 2) / n;
    } else if (kind === "thomae") {
      upper += thomaeMax(a, b) / n;
    } else {
      upper += 1 / n;
    }
  }
  return { lower, upper };
}

const NOTES: Record<Kind, string> = {
  step: "A step function: upper and lower sums squeeze together, so it is Riemann integrable, with integral 1.5, the same as its Lebesgue integral.",
  thomae: "Thomae’s function, 1/q at p/q in lowest terms and 0 at irrationals: discontinuous exactly at the rationals, a null set. Upper sums tend to 0, so it is Riemann integrable with integral 0.",
  dirichlet: "The indicator of the rationals: every piece contains both rationals and irrationals, so upper sums are 1 and lower sums 0 forever. Not Riemann integrable, yet its Lebesgue integral is 0.",
};

/** Upper and lower Darboux sums for three functions on [0, 1]. */
export function DarbouxGapViz() {
  const [kind, setKind] = useState<Kind>("thomae");
  const [n, setN] = useState(8);
  const { lower, upper } = darboux(kind, n);
  const X = (x: number) => 40 + x * 460, Y = (y: number) => 170 - (y / 2.2) * 150;
  const bars = Array.from({ length: n }, (_, i) => {
    const a = i / n, b = (i + 1) / n;
    let lo = 0, hi = 1;
    if (kind === "step") { lo = b <= 0.5 ? 1 : a >= 0.5 ? 2 : 1; hi = b <= 0.5 ? 1 : 2; }
    if (kind === "thomae") hi = thomaeMax(a, b);
    return { a, b, lo, hi };
  });
  const dots: [number, number][] = [];
  if (kind === "thomae") for (let q = 1; q <= 30; q++) for (let p = 0; p <= q; p++) { let g = p, h = q; while (h) [g, h] = [h, g % h]; if (g === 1) dots.push([p / q, 1 / q]); }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {(["step", "thomae", "dirichlet"] as Kind[]).map((x) => <button key={x} type="button" aria-pressed={kind === x} className={kind === x ? "seg is-on" : "seg"} onClick={() => setKind(x)}>{x === "step" ? "step function" : x === "thomae" ? "Thomae" : "indicator of ℚ"}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Upper and lower sums" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {bars.map((r) => <rect key={`u${r.a}`} x={X(r.a)} y={Y(r.hi)} width={X(r.b) - X(r.a)} height={Y(0) - Y(r.hi)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1 }} />)}
        {bars.map((r) => r.lo > 0 && <rect key={`l${r.a}`} x={X(r.a)} y={Y(r.lo)} width={X(r.b) - X(r.a)} height={Y(0) - Y(r.lo)} style={{ fill: "var(--accent)", opacity: 0.45 }} />)}
        {kind === "step" && <path d={`M${X(0)} ${Y(1)} H${X(0.5)} M${X(0.5)} ${Y(2)} H${X(1)}`} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />}
        {kind === "thomae" && dots.map(([x, y]) => <circle key={`${x}-${y}`} cx={X(x)} cy={Y(y)} r={1.8} style={{ fill: "var(--text)" }} />)}
        {kind === "dirichlet" && <><line x1={X(0)} y1={Y(1)} x2={X(1)} y2={Y(1)} style={{ stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "1 3" }} /><line x1={X(0)} y1={Y(0) - 1} x2={X(1)} y2={Y(0) - 1} style={{ stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "1 3" }} /></>}
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
      </svg>
      <div className="segmented" role="group" aria-label="pieces">
        {[4, 8, 16, 64].map((x) => <button key={x} type="button" aria-pressed={n === x} className={n === x ? "seg is-on" : "seg"} onClick={() => setN(x)}>{x} pieces</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>lower sum {lower.toFixed(4)}, upper sum {upper.toFixed(4)}, gap {(upper - lower).toFixed(4)}.</p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{NOTES[kind]}</p>
      <figcaption className="viz-caption">
        Light bars: the supremum on each piece (upper sum). Dark bars: the infimum (lower sum). Lebesgue&rsquo;s criterion: a
        bounded function on [a, b] is Riemann integrable exactly when its discontinuities form a null set.
      </figcaption>
    </figure>
  );
}
