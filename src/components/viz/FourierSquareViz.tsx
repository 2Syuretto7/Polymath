"use client";

import { useState } from "react";

type Kind = "square" | "saw" | "tri";

const LABEL: Record<Kind, string> = { square: "square wave", saw: "sawtooth", tri: "triangle wave" };
const f = (k: Kind, x: number): number => (k === "square" ? Math.sign(x) : k === "saw" ? x : Math.abs(x));
/** Coefficients on [−π, π]: [a₀/2 term, aₙ, bₙ]. */
const an = (k: Kind, n: number): number => (k === "tri" && n % 2 === 1 ? -4 / (Math.PI * n * n) : 0);
const bn = (k: Kind, n: number): number => (k === "square" ? (n % 2 ? 4 / (n * Math.PI) : 0) : k === "saw" ? (2 * (n % 2 ? 1 : -1)) / n : 0);

/** Partial sums of Fourier series for three periodic functions, with the Gibbs overshoot at jumps. */
export function FourierSquareViz() {
  const [kind, setKind] = useState<Kind>("square");
  const [N, setN] = useState(5);
  const a0 = kind === "tri" ? Math.PI / 2 : 0;
  const S = (x: number) => {
    let s = a0;
    for (let n = 1; n <= N; n++) s += an(kind, n) * Math.cos(n * x) + bn(kind, n) * Math.sin(n * x);
    return s;
  };
  const xs = Array.from({ length: 801 }, (_, i) => -Math.PI + (i / 800) * 2 * Math.PI);
  const vals = xs.map(S);
  const fine = Array.from({ length: 4001 }, (_, i) => (i / 4000) * Math.PI);
  const smax = Math.max(...fine.map(S));
  const fsup = kind === "square" ? 1 : Math.PI;
  const errs = fine.map((x) => (x > 0.3 && x < Math.PI - 0.3 ? Math.abs(S(x) - f(kind, x)) : 0));
  const errAway = Math.max(...errs);
  const lo = kind === "tri" ? -0.5 : kind === "saw" ? -4.2 : -1.4, hi = kind === "tri" ? 3.6 : kind === "saw" ? 4.2 : 1.4;
  const X = (x: number) => 30 + ((x + Math.PI) / (2 * Math.PI)) * 330, Y = (v: number) => 190 - ((v - lo) / (hi - lo)) * 170;
  const coefs = Array.from({ length: 15 }, (_, i) => { const n = i + 1; return Math.abs(an(kind, n)) + Math.abs(bn(kind, n)); });
  const cmax = Math.max(...coefs);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(["square", "saw", "tri"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>number of terms N: <span className="mono">{N}</span></span>
          <input type="range" min={1} max={60} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A periodic function and a partial sum of its Fourier series" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-Math.PI)} y1={Y(0)} x2={X(Math.PI)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(kind, x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={vals.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <text x={X(-Math.PI) - 6} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>−π</text>
        <text x={X(0) - 3} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(Math.PI) - 6} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>π</text>
        <text x={390} y={24} style={{ fill: "var(--text)", fontSize: 12 }}>coefficient sizes</text>
        {coefs.map((c, i) => (
          <rect key={i} x={390 + i * 8} y={190 - (c / cmax) * 150} width={6} height={(c / cmax) * 150} style={{ fill: i < N ? "var(--accent)" : "var(--text-faint)" }} />
        ))}
        <text x={390} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = 1 to 15</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>largest error on [0.3, π − 0.3]: {errAway.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>max of the partial sum on [0, π]: {smax.toFixed(4)}, against {kind === "tri" ? "max f = π" : "the top of the jump"} {fsup === 1 ? "1" : "π = 3.1416"}</div>
      </div>
      <figcaption className="viz-caption">
        On [−π, π] the square wave is (4/π)(sin x + sin 3x/3 + sin 5x/5 + ⋯), the sawtooth x is 2(sin x − sin 2x/2 + sin 3x/3
        − ⋯) and the triangle wave |x| is π/2 − (4/π)(cos x + cos 3x/9 + ⋯). Coefficients that shrink like 1/n² give
        uniform convergence; like 1/n, convergence away from the jumps only, with an overshoot near each jump that never
        dies away but tends to about 9% of the jump: the Gibbs phenomenon.
      </figcaption>
    </figure>
  );
}
