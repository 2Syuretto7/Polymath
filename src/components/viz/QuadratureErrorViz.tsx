"use client";

import { useState } from "react";

type Fn = { name: string; f: (x: number) => number; a: number; b: number; exact: number };
const FNS: Fn[] = [
  { name: "eˣ on [0, 1]", f: Math.exp, a: 0, b: 1, exact: Math.E - 1 },
  { name: "√x on [0, 1]", f: Math.sqrt, a: 0, b: 1, exact: 2 / 3 },
  { name: "exp(cos x) on [0, 2π]", f: (x) => Math.exp(Math.cos(x)), a: 0, b: 2 * Math.PI, exact: 7.954926521012845 },
];
const RULES = ["trapezium", "midpoint", "Simpson"] as const;
const COLS = ["var(--danger)", "var(--text-muted)", "var(--accent)"];
const NS = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

function rule(F: Fn, r: (typeof RULES)[number], n: number) {
  const h = (F.b - F.a) / n;
  let s = 0;
  if (r === "trapezium") { for (let i = 0; i <= n; i++) s += (i === 0 || i === n ? 0.5 : 1) * F.f(F.a + i * h); return s * h; }
  if (r === "midpoint") { for (let i = 0; i < n; i++) s += F.f(F.a + (i + 0.5) * h); return s * h; }
  for (let i = 0; i <= n; i++) s += (i === 0 || i === n ? 1 : i % 2 ? 4 : 2) * F.f(F.a + i * h);
  return (s * h) / 3;
}

/** Errors of three composite rules against the number of panels, on logarithmic scales. */
export function QuadratureErrorViz() {
  const [fi, setFi] = useState(0);
  const F = FNS[fi];
  const errs = RULES.map((r) => NS.map((n) => Math.max(Math.abs(rule(F, r, n) - F.exact), 1e-17)));
  const X = (n: number) => 40 + (Math.log2(n / 2) / 9) * 460, Y = (e: number) => 10 + (-Math.log10(e) / 17) * 170;
  const slope = (es: number[]) => (Math.log10(es[5]) - Math.log10(es[7])) / Math.log10(4);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="integrand">
        {FNS.map((g, i) => <button key={g.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{g.name}</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Error against number of panels" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, -4, -8, -12, -16].map((t) => (
          <g key={t}>
            <line x1={40} y1={Y(10 ** t)} x2={500} y2={Y(10 ** t)} style={{ stroke: "var(--border)" }} />
            <text x={34} y={Y(10 ** t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "1" : `1e${t}`}</text>
          </g>
        ))}
        {NS.filter((_, i) => i % 3 === 0).map((n) => <text key={n} x={X(n)} y={200} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = {n}</text>)}
        {errs.map((es, i) => (
          <g key={i}>
            <path d={es.map((e, j) => `${j ? "L" : "M"}${X(NS[j]).toFixed(1)},${Y(e).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: COLS[i], strokeWidth: 2 }} />
            {es.map((e, j) => <circle key={j} cx={X(NS[j])} cy={Y(e)} r={2.5} style={{ fill: COLS[i] }} />)}
            <text x={496} y={24 + 16 * i} textAnchor="end" style={{ fill: COLS[i], fontSize: 12 }}>{RULES[i]}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        {RULES.map((r, i) => <div key={r}>{r}: error at n = 64 is {errs[i][5].toExponential(1)}; {errs[i][7] < 1e-13 ? "already at rounding level" : `observed order ${slope(errs[i]).toFixed(1)}`}</div>)}
      </div>
      <figcaption className="viz-caption">
        Each composite rule splits the interval into n panels. For the smooth eˣ, the trapezium and midpoint errors fall
        like 1/n² and Simpson&rsquo;s like 1/n⁴, until rounding stops it. For √x, whose derivative blows up at 0, every
        rule slows to about 1/n¹·⁵. For the smooth periodic exp(cos x), the plain trapezium rule converges faster than any
        power of n.
      </figcaption>
    </figure>
  );
}
