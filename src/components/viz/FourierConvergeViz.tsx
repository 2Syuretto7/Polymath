"use client";

import { useMemo, useState } from "react";

type Kind = "square" | "tri" | "smooth";
const LABEL: Record<Kind, string> = { square: "a jump", tri: "a corner", smooth: "smooth: exp(cos x)" };
const f = (k: Kind, x: number) => (k === "square" ? Math.sign(x) : k === "tri" ? Math.abs(x) : Math.exp(Math.cos(x)));
const NMAX = 60, Q = 4096;

/** Partial sums against Fejér means for three functions: pointwise, uniform and mean-square convergence compared. */
export function FourierConvergeViz() {
  const [kind, setKind] = useState<Kind>("square");
  const [N, setN] = useState(10);
  const [fejer, setFejer] = useState(false);
  const { a, b } = useMemo(() => {
    const a = new Array(NMAX + 1).fill(0), b = new Array(NMAX + 1).fill(0);
    for (let j = 0; j < Q; j++) {
      const x = -Math.PI + ((j + 0.5) / Q) * 2 * Math.PI, v = f(kind, x);
      for (let n = 0; n <= NMAX; n++) { a[n] += (v * Math.cos(n * x) * 2) / Q; b[n] += (v * Math.sin(n * x) * 2) / Q; }
    }
    return { a, b };
  }, [kind]);
  const S = (x: number) => {
    let s = a[0] / 2;
    for (let n = 1; n <= N; n++) {
      const w = fejer ? 1 - n / (N + 1) : 1;
      s += w * (a[n] * Math.cos(n * x) + b[n] * Math.sin(n * x));
    }
    return s;
  };
  const xs = Array.from({ length: 1201 }, (_, i) => -Math.PI + (i / 1200) * 2 * Math.PI);
  const vals = xs.map(S);
  const errs = vals.map((v, i) => Math.abs(v - f(kind, xs[i])));
  const sup = Math.max(...errs);
  const ms = Math.sqrt(errs.reduce((s, e) => s + e * e, 0) / errs.length);
  const smax = Math.max(...vals);
  const lo = kind === "square" ? -1.4 : kind === "tri" ? -0.3 : 0, hi = kind === "square" ? 1.4 : kind === "tri" ? 3.5 : 3;
  const X = (x: number) => 30 + ((x + Math.PI) / (2 * Math.PI)) * 460, Y = (v: number) => 190 - ((v - lo) / (hi - lo)) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(["square", "tri", "smooth"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Kind of approximation" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={!fejer} className={!fejer ? "seg is-on" : "seg"} onClick={() => setFejer(false)}>partial sums</button>
        <button type="button" aria-pressed={fejer} className={fejer ? "seg is-on" : "seg"} onClick={() => setFejer(true)}>Fejér means</button>
      </div>
      <div className="viz-sliders">
        <label><span>number of terms N: <span className="mono">{N}</span></span>
          <input type="range" min={1} max={NMAX} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 215" role="img" aria-label="A function and an approximation by its Fourier series" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-Math.PI)} y1={Y(0)} x2={X(Math.PI)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(kind, x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={vals.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <text x={X(-Math.PI) - 6} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>−π</text>
        <text x={X(0) - 3} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(Math.PI) - 6} y={208} style={{ fill: "var(--text-muted)", fontSize: 11 }}>π</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>largest error anywhere: {sup.toFixed(4)}</div>
        <div>root-mean-square error: {ms.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>highest value of the approximation: {smax.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        For the smooth function both kinds of approximation converge uniformly, and very fast. At a corner the partial sums
        still converge uniformly, more slowly. At a jump the largest error never falls below about 1, yet the root-mean-square
        error tends to 0: convergence in mean square without uniform convergence. Fejér&rsquo;s averages of the partial sums
        never overshoot, because they are convolutions with a positive kernel, and for any continuous function they converge
        uniformly.
      </figcaption>
    </figure>
  );
}
