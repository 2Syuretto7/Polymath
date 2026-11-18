"use client";

import { useState } from "react";

const lnC = (n: number, k: number) => { let s = 0; for (let i = 0; i < k; i++) s += Math.log(n - i) - Math.log(i + 1); return s; };
/** log10 of the expected number of one-colour K_k in a random two-colouring of K_n. */
export const log10Expected = (n: number, k: number) => (lnC(n, k) + (1 - (k * (k - 1)) / 2) * Math.LN2) / Math.LN10;

/** Expected one-colour cliques in a random colouring, and the lower bound it gives. */
export function RandomRamseyViz() {
  const [k, setK] = useState(6);
  let best = k;
  while (log10Expected(best + 1, k) < 0) best++;
  const top = Math.max(2 * best, k + 12);
  const ns = Array.from({ length: top - k + 1 }, (_, i) => k + i);
  const ys = ns.map((n) => log10Expected(n, k));
  const lo = Math.min(-3, Math.floor(Math.min(...ys))), hi = Math.max(3, Math.ceil(Math.max(...ys)));
  const X = (n: number) => 50 + ((n - k) / (top - k)) * 440;
  const Y = (y: number) => 190 - ((y - lo) / (hi - lo)) * 170;
  const sup = (x: number) => String(x).split("").map((d) => (d === "-" ? "⁻" : "⁰¹²³⁴⁵⁶⁷⁸⁹"[+d])).join("");
  const sub = (x: number) => String(x).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[+d]).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="clique size">
        {[4, 6, 8, 10, 12].map((x) => <button key={x} type="button" aria-pressed={k === x} className={k === x ? "seg is-on" : "seg"} onClick={() => setK(x)}>k = {x}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="Expected number of one-colour cliques against n, on a log scale" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={Y(0)} x2={490} y2={Y(0)} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
        <text x={46} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={46} y={Y(hi) + 10} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>10{sup(hi)}</text>
        <text x={46} y={Y(lo)} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>10{sup(lo)}</text>
        <rect x={X(k)} y={20} width={X(best) - X(k)} height={170} style={{ fill: "var(--accent-soft)" }} />
        <polyline points={ns.map((n, i) => `${X(n)},${Y(ys[i])}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={X(best)} y1={20} x2={X(best)} y2={190} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={X(best) + 4} y={34} style={{ fill: "var(--danger)", fontSize: 12 }}>n = {best}</text>
        <text x={X(k)} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>
        <text x={X(top)} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{top}</text>
        <text x={270} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n, the number of vertices</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        For n ≤ {best}, a random red-blue colouring of K{sub(best)} has on average fewer than one one-colour K{sub(k)}, so some
        colouring has none: R({k}, {k}) &gt; {best}. Compare 2 to the power k/2 = {Math.round(2 ** (k / 2))}.
      </p>
      <figcaption className="viz-caption">
        The curve is the expected count, C(n, k) times 2 to the power 1 − C(k, 2), on a log scale. Wherever it lies below the
        dashed line at 1, a colouring with no one-colour K{sub(k)} must exist, though the argument never shows one.
      </figcaption>
    </figure>
  );
}
