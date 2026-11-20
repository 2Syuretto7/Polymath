"use client";

import { useState } from "react";
import { ALGEBRAS, killing, symEigen } from "./lieTools";

const PICK = ["sl(2)", "so(3)", "gl(2)", "b(2)", "Heisenberg", "sl(3)"];
const sg = (x: number) => String(Math.round(x * 100) / 100).replace("-", "−");

/** The Killing form B(x, y) = tr(ad x ad y) of matrix Lie algebras, with its signature and Cartan's criterion. */
export function KillingFormViz() {
  const [k, setK] = useState(0);
  const alg = ALGEBRAS.find((a) => a.name === PICK[k])!;
  const B = killing(alg.basis);
  const ev = symEigen(B);
  const pos = ev.filter((v) => v > 1e-6).length, neg = ev.filter((v) => v < -1e-6).length, zero = ev.length - pos - neg;
  const n = B.length, cs = Math.min(34, 260 / n), X0 = 20, Y0 = 14;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Lie algebra">
        {PICK.map((p, i) => <button key={p} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p}</button>)}
      </div>
      <svg viewBox={`0 0 520 ${Math.max(130, Y0 + n * cs + 10)}`} role="img" aria-label="The matrix of the Killing form" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {B.map((r, i) => r.map((v, j) => (
          <g key={`${i}-${j}`}>
            <rect x={X0 + j * cs} y={Y0 + i * cs} width={cs - 2} height={cs - 2} rx={3} style={{ fill: v > 0 ? "var(--accent-soft)" : v < 0 ? "var(--danger-soft)" : "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={X0 + j * cs + cs / 2 - 1} y={Y0 + i * cs + cs / 2 + 4} textAnchor="middle" className="mono" style={{ fill: v === 0 ? "var(--text-faint)" : "var(--text)", fontSize: n > 6 ? 10 : 12 }}>{sg(v)}</text>
          </g>
        )))}
        <text x={320} y={40} style={{ fill: "var(--text-muted)", fontSize: 12 }}>eigenvalue signs</text>
        <text x={320} y={64} className="mono" style={{ fill: "var(--accent)", fontSize: 13 }}>positive: {pos}</text>
        <text x={320} y={86} className="mono" style={{ fill: "var(--danger)", fontSize: 13 }}>negative: {neg}</text>
        <text x={320} y={108} className="mono" style={{ fill: "var(--text-muted)", fontSize: 13 }}>zero: {zero}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Killing form {zero ? "degenerate" : "non-degenerate"}, signature ({pos}, {neg}){zero ? `, radical of dimension ${zero}` : ""}. By Cartan&rsquo;s criterion: {zero ? "not semisimple" : "semisimple"}.
      </p>
      <figcaption className="viz-caption">
        Entry (i, j) is tr(ad eᵢ ad eⱼ) for the standard basis of matrices. Cartan&rsquo;s criterion: a Lie algebra is
        semisimple exactly when this form is non-degenerate. A negative definite form, as for so(3), signals a compact
        group.
      </figcaption>
    </figure>
  );
}
