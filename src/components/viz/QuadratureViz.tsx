"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Fn = { name: string; f: (x: number) => number; a: number; b: number; exact: number; exactLabel: string; v: View };
const FNS: Fn[] = [
  { name: "e^(−x²) on [0, 2]", f: (x) => Math.exp(-x * x), a: 0, b: 2, exact: 0.882081390762422, exactLabel: "0.8820813908", v: { xmin: -0.2, xmax: 2.2, ymin: -0.15, ymax: 1.2, w: 520, h: 200 } },
  { name: "1/x on [1, 2]", f: (x) => 1 / x, a: 1, b: 2, exact: Math.LN2, exactLabel: "ln 2", v: { xmin: 0.9, xmax: 2.1, ymin: -0.1, ymax: 1.1, w: 520, h: 200 } },
  { name: "√x on [0, 1]", f: Math.sqrt, a: 0, b: 1, exact: 2 / 3, exactLabel: "2/3", v: { xmin: -0.1, xmax: 1.1, ymin: -0.1, ymax: 1.1, w: 520, h: 200 } },
];

type Rule = "trapezium" | "midpoint" | "Simpson";

function approx(F: Fn, rule: Rule, n: number) {
  const h = (F.b - F.a) / n;
  let s = 0;
  if (rule === "trapezium") { for (let i = 0; i <= n; i++) s += (i === 0 || i === n ? 0.5 : 1) * F.f(F.a + i * h); return s * h; }
  if (rule === "midpoint") { for (let i = 0; i < n; i++) s += F.f(F.a + (i + 0.5) * h); return s * h; }
  for (let i = 0; i <= n; i++) s += (i === 0 || i === n ? 1 : i % 2 ? 4 : 2) * F.f(F.a + i * h);
  return (s * h) / 3;
}

/** Trapezium, midpoint and Simpson's rules, with their errors as the number of pieces doubles. */
export function QuadratureViz() {
  const [k, setK] = useState(0);
  const [rule, setRule] = useState<Rule>("trapezium");
  const [m, setM] = useState(2);
  const n = 2 ** m;
  const F = FNS[k];
  const { X, Y } = scales(F.v);
  const h = (F.b - F.a) / n;
  const shapes: string[] = [];
  for (let i = 0; i < n; i++) {
    const x0 = F.a + i * h, x1 = x0 + h;
    if (rule === "trapezium") shapes.push(`M${X(x0)} ${Y(0)} L${X(x0)} ${Y(F.f(x0))} L${X(x1)} ${Y(F.f(x1))} L${X(x1)} ${Y(0)} Z`);
    else if (rule === "midpoint") { const y = F.f((x0 + x1) / 2); shapes.push(`M${X(x0)} ${Y(0)} L${X(x0)} ${Y(y)} L${X(x1)} ${Y(y)} L${X(x1)} ${Y(0)} Z`); }
    else if (i % 2 === 0) {
      const xm = x1, x2 = x0 + 2 * h, y0 = F.f(x0), y1 = F.f(xm), y2 = F.f(x2);
      const q = (x: number) => y0 * ((x - xm) * (x - x2)) / ((x0 - xm) * (x0 - x2)) + y1 * ((x - x0) * (x - x2)) / ((xm - x0) * (xm - x2)) + y2 * ((x - x0) * (x - xm)) / ((x2 - x0) * (x2 - xm));
      let d = `M${X(x0)} ${Y(0)} `;
      for (let j = 0; j <= 30; j++) { const x = x0 + (2 * h * j) / 30; d += `L${X(x).toFixed(1)} ${Y(q(x)).toFixed(1)} `; }
      shapes.push(d + `L${X(x2)} ${Y(0)} Z`);
    }
  }
  const rows = [2, 4, 8, 16, 32, 64].map((N) => ({ N, err: approx(F, rule, N) - F.exact }));
  const SUP: Record<string, string> = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  const sci = (e: number) => {
    if (Math.abs(e) < 1e-13) return "0";
    const [m, x] = e.toExponential(2).split("e");
    return `${m.replace("-", "−")} × 10${x.replace("+", "").split("").map((c) => SUP[c] ?? c).join("")}`;
  };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Integral">
        {FNS.map((g, i) => (
          <button key={g.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{g.name}</span>
          </button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 4, flexWrap: "wrap" }} role="group" aria-label="Rule">
        {(["trapezium", "midpoint", "Simpson"] as Rule[]).map((r) => (
          <button key={r} type="button" className={r === rule ? "btn btn-primary" : "btn"} aria-pressed={r === rule} onClick={() => setRule(r)}>
            {r === "Simpson" ? "Simpson's rule" : `${r[0].toUpperCase()}${r.slice(1)} rule`}
          </button>
        ))}
      </div>
      <Axes v={F.v} label={`The ${rule} rule with ${n} pieces for ${F.name}`}>
        {shapes.map((d, i) => <path key={i} d={d} className="viz-region" style={{ strokeWidth: 1 }} />)}
        <path d={curvePath(F.v, (x) => (x >= F.a && x <= F.b ? F.f(x) : NaN), 600)} className="plot-curve" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          pieces n = <span className="mono">{n}</span>
          <input type="range" className="viz-range" min={1} max={6} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <thead><tr><th style={{ textTransform: "none" }}>n</th><th style={{ textTransform: "none" }}>error</th><th style={{ textTransform: "none" }}>error divided by the previous error</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.N} style={r.N === n ? { background: "var(--accent-soft)" } : undefined}>
              <td className="mono">{r.N}</td>
              <td className="mono">{sci(r.err)}</td>
              <td className="mono">{i === 0 || Math.abs(rows[i - 1].err) < 1e-13 ? "" : fmtNum(Number((r.err / rows[i - 1].err).toFixed(3)))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Exact value: {F.exactLabel}{/[a-z/]/.test(F.exactLabel) ? ` ≈ ${fmtNum(Number(F.exact.toFixed(6)))}` : ""}. Each time n doubles, the trapezium and midpoint
        errors shrink by a factor of about 4, and Simpson&rsquo;s by about 16, for smooth functions. For √x, whose slope is
        infinite at 0, every rule converges more slowly than that.
      </figcaption>
    </figure>
  );
}
