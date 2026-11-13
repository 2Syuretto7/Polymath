"use client";

import { useMemo, useState } from "react";

const LIMIT = 1_000_000;
let PI_TABLE: Int32Array | null = null;
const piTable = () => {
  if (PI_TABLE) return PI_TABLE;
  const comp = new Uint8Array(LIMIT + 1);
  const t = new Int32Array(LIMIT + 1);
  let c = 0;
  for (let n = 2; n <= LIMIT; n++) {
    if (!comp[n]) { c++; for (let m = n * n; m <= LIMIT; m += n) comp[m] = 1; }
    t[n] = c;
  }
  PI_TABLE = t;
  return t;
};

/** The prime number theorem: π(x) against x/log x and the logarithmic integral Li(x). */
export function PrimeCountViz() {
  const [e, setE] = useState(3);
  const x = Math.round(10 ** e);
  const data = useMemo(() => {
    const t = piTable();
    const S = 400;
    const pts: { u: number; pi: number; xl: number; li: number }[] = [];
    let li = 0, prev = 2;
    for (let k = 0; k <= S; k++) {
      const u = 2 + ((x - 2) * k) / S;
      li += ((u - prev) / 2) * (1 / Math.log(prev) + 1 / Math.log(u));
      prev = u;
      pts.push({ u, pi: t[Math.floor(u)], xl: u / Math.log(u), li });
    }
    return pts;
  }, [x]);
  const last = data[data.length - 1];
  const W = 560, H = 250, top = Math.max(last.li, last.pi) * 1.08;
  const X = (u: number) => 50 + (u / x) * (W - 70), Y = (v: number) => 10 + (1 - v / top) * (H - 40);
  const path = (k: "pi" | "xl" | "li") => data.map((p, i) => `${i ? "L" : "M"}${X(p.u).toFixed(1)},${Y(p[k]).toFixed(1)}`).join(" ");
  const fmt = (v: number) => Math.round(v).toLocaleString("en-IN");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>x: <span className="mono">{fmt(x)}</span></span><input type="range" min={2} max={6} step={0.25} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The prime counting function compared with x over log x and the logarithmic integral" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={50} y1={Y(0)} x2={W - 20} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={50} y1={Y(0)} x2={50} y2={10} style={{ stroke: "var(--border)" }} />
        <text x={46} y={Y(top / 1.08) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{fmt(top / 1.08)}</text>
        <text x={W - 20} y={H - 8} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{fmt(x)}</text>
        <path d={path("li")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "2 3" }} />
        <path d={path("xl")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
        <path d={path("pi")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>π(x) = {fmt(last.pi)} (solid)</div>
        <div>x/log x = {fmt(last.xl)} (dashed); ratio π(x)/(x/log x) = {(last.pi / last.xl).toFixed(4)}</div>
        <div>Li(x) = {fmt(last.li)} (dotted); ratio π(x)/Li(x) = {(last.pi / last.li).toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The prime number theorem says both ratios tend to 1. The first approaches slowly, from above; the logarithmic
        integral is a far better approximation. Its error is governed by the zeros of the zeta function.
      </figcaption>
    </figure>
  );
}
