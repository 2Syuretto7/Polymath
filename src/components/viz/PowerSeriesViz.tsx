"use client";

import { useId, useState } from "react";
import { fmtNum } from "./format";

const SER = {
  geo: { name: "Σ xᵏ", R: 1, f: (x: number) => 1 / (1 - x), term: (x: number, k: number) => Math.pow(x, k), ylo: -2, yhi: 6, fname: "1/(1 − x)" },
  exp: { name: "Σ xᵏ/k!", R: Infinity, f: (x: number) => Math.exp(x), term: (x: number, k: number) => { let t = 1; for (let i = 1; i <= k; i++) t *= x / i; return t; }, ylo: -2, yhi: 8, fname: "eˣ" },
  lor: { name: "Σ (−1)ᵏ x²ᵏ", R: 1, f: (x: number) => 1 / (1 + x * x), term: (x: number, k: number) => (k % 2 ? -1 : 1) * Math.pow(x, 2 * k), ylo: -1.5, yhi: 2.5, fname: "1/(1 + x²)" },
};
type K = keyof typeof SER;
const W = 520, H = 220, X0 = 20, X1 = 500, Y0 = 200, Y1 = 12, A = -2, B = 2;

/** Partial sums of a power series hug the function inside the radius of convergence and fly off outside it. */
export function PowerSeriesViz() {
  const [k, setK] = useState<K>("geo");
  const [N, setN] = useState(6);
  const [x0, setX0] = useState(0.5);
  const clip = useId().replace(/:/g, "");
  const S = SER[k];
  const X = (x: number) => X0 + ((x - A) / (B - A)) * (X1 - X0);
  const Y = (y: number) => Y0 - ((y - S.ylo) / (S.yhi - S.ylo)) * (Y0 - Y1);
  const part = (x: number) => { let s = 0; for (let i = 0; i <= N; i++) s += S.term(x, i); return s; };
  const grid = Array.from({ length: 401 }, (_, i) => A + ((B - A) * i) / 400);
  const cl = (y: number) => Math.max(S.ylo - 5, Math.min(S.yhi + 5, y));
  const fpts = grid.filter((x) => !(k === "geo" && Math.abs(x - 1) < 0.01));
  const fLeft = fpts.filter((x) => k !== "geo" || x < 1), fRight = fpts.filter((x) => k === "geo" && x > 1);
  const pl = (xs: number[], g: (x: number) => number) => xs.map((x) => `${X(x).toFixed(1)},${Y(cl(g(x))).toFixed(1)}`).join(" ");
  const fm = (v: number) => (Math.abs(v) > 1e6 ? "very large" : fmtNum(Number(v.toFixed(4))));
  const inside = Math.abs(x0) < S.R;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Series">
        {(Object.keys(SER) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{SER[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial sums of a power series against the function it represents" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs><clipPath id={clip}><rect x={X0} y={Y1} width={X1 - X0} height={Y0 - Y1} /></clipPath></defs>
        {S.R < Infinity && <rect x={X(-S.R)} y={Y1} width={X(S.R) - X(-S.R)} height={Y0 - Y1} style={{ fill: "var(--accent-soft)", opacity: 0.6 }} />}
        <line x1={X0} y1={Y(0)} x2={X1} y2={Y(0)} className="viz-axis" />
        <line x1={X(0)} y1={Y1} x2={X(0)} y2={Y0} className="viz-axis" />
        <g clipPath={`url(#${clip})`}>
          <polyline points={pl(fLeft, S.f)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
          {fRight.length > 0 && <polyline points={pl(fRight, S.f)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />}
          <polyline points={pl(grid, part)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        </g>
        <line x1={X(x0)} y1={Y1} x2={X(x0)} y2={Y0} style={{ stroke: inside ? "var(--text-faint)" : "var(--danger)", strokeDasharray: "2 3" }} />
        {[-2, -1, 1, 2].map((t) => <text key={t} x={X(t)} y={Y0 + 14} textAnchor="middle" style={{ fontSize: 10, fill: "var(--text-muted)" }}>{fmtNum(t)}</text>)}
      </svg>
      <div className="viz-sliders">
        <label><span>terms up to k = <span className="mono">{N}</span></span>
          <input type="range" min={0} max={30} value={N} onChange={(ev) => setN(Number(ev.target.value))} /></label>
        <label><span>x: <span className="mono">{fmtNum(x0)}</span></span>
          <input type="range" min={-1.9} max={1.9} step={0.1} value={x0} onChange={(ev) => setX0(Math.round(Number(ev.target.value) * 10) / 10)} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>radius of convergence</td><td className="mono">{S.R === Infinity ? "∞" : "1"}</td></tr>
          <tr><td>partial sum at x</td><td className="mono">{fm(part(x0))}</td></tr>
          <tr><td>{S.fname} at x</td><td className="mono">{k === "geo" && x0 === 1 ? "undefined" : fm(S.f(x0))}</td></tr>
          <tr><td>does the series converge at x?</td><td>{inside ? "yes" : "no: the terms do not tend to 0"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "geo"
          ? "Inside the shaded interval the partial sums settle on 1/(1 − x). Outside it they diverge, and the function blowing up at 1 explains why the radius is 1."
          : k === "exp"
            ? "The exponential series converges everywhere, and uniformly on every bounded interval. More terms carry the agreement further out."
            : "The function 1/(1 + x²) is smooth on the whole line, yet its series stops converging at ±1. The reason is invisible here: in the complex plane the function blows up at ±i, a distance 1 from 0."}
      </figcaption>
    </figure>
  );
}
