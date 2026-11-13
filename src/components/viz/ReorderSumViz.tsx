"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 220, X0 = 40, X1 = 500, Y0 = 200, Y1 = 16, M = 90;
const SER = {
  harmonic: { name: "1 − 1/2 + 1/3 − 1/4 + ⋯", s: 1, lim: [Math.LN2, 1.5 * Math.LN2], ymin: 0.3, ymax: 1.4 },
  squares: { name: "1 − 1/4 + 1/9 − 1/16 + ⋯", s: 2, lim: [Math.PI ** 2 / 12, Math.PI ** 2 / 12], ymin: 0.6, ymax: 1.15 },
};
type K = keyof typeof SER;

function sums(s: number, n: number, reorder: boolean) {
  const out: number[] = [];
  let t = 0, p = 1, q = 2;
  for (let i = 0; i < n; i++) {
    if (!reorder) { const k = i + 1; t += (k % 2 ? 1 : -1) / Math.pow(k, s); }
    else if (i % 3 < 2) { t += 1 / Math.pow(p, s); p += 2; }
    else { t -= 1 / Math.pow(q, s); q += 2; }
    out.push(t);
  }
  return out;
}

/** The same terms in two orders: the original, and two positive terms then one negative. The order matters only when the series is not absolutely convergent. */
export function ReorderSumViz() {
  const [k, setK] = useState<K>("harmonic");
  const c = SER[k];
  const a = sums(c.s, 30000, false), b = sums(c.s, 30000, true);
  const X = (n: number) => X0 + (n / (M - 1)) * (X1 - X0);
  const Y = (v: number) => Y0 - ((v - c.ymin) / (c.ymax - c.ymin)) * (Y0 - Y1);
  const path = (s: number[]) => s.slice(0, M).map((v, i) => `${i ? "L" : "M"}${X(i).toFixed(1)},${Y(Math.min(c.ymax, Math.max(c.ymin, v))).toFixed(1)}`).join(" ");
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Series">
        {(Object.keys(SER) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>{SER[x].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial sums of the series in two orders" style={{ width: "100%", display: "block", marginTop: 12 }}>
        {c.lim.map((L, i) => (
          <line key={i} x1={X0} y1={Y(L)} x2={X1} y2={Y(L)} style={{ stroke: i ? "var(--accent)" : "var(--text-muted)", strokeDasharray: "4 4", opacity: 0.8 }} />
        ))}
        <path d={path(a)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={path(b)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={X0} y={Y0 + 14} style={{ fontSize: 11, fill: "var(--text-muted)" }}>first {M} partial sums</text>
      </svg>
      <p className="mono-meta" style={{ margin: "4px 0 0", textTransform: "none" }}>grey: original order · accent: two positive terms, then one negative</p>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>original order, after 30000 terms</td><td className="mono">{fm(a[a.length - 1])}</td></tr>
          <tr><td>rearranged, after 30000 terms</td><td className="mono">{fm(b[b.length - 1])}</td></tr>
          <tr><td>sum of the absolute values</td><td className="mono">{k === "harmonic" ? "diverges" : fm(Math.PI ** 2 / 6)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "harmonic"
          ? "Same terms, different sums: ln 2 in the original order, (3/2) ln 2 when the positives come twice as often. The series converges only conditionally."
          : "The series converges absolutely, and reordering changes nothing: both orders tend to π²/12."}
      </figcaption>
    </figure>
  );
}
