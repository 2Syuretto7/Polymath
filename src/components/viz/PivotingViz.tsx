"use client";

import { useState } from "react";

const fmt = (v: number) => (Math.abs(v) >= 1e5 || (Math.abs(v) < 1e-3 && v !== 0) ? v.toExponential(3) : Number(v.toPrecision(8)).toString());

/** Solving εx + y = 1, x + y = 2 in double precision, with and without a row swap. */
export function PivotingViz() {
  const [k, setK] = useState(4);
  const eps = 10 ** -k;
  const trueX = 1 / (1 - eps), trueY = (1 - 2 * eps) / (1 - eps);
  // no pivoting: eliminate x from row 2 using row 1
  const m1 = 1 / eps, u22a = 1 - m1 * 1, ra = 2 - m1 * 1;
  const ya = ra / u22a, xa = (1 - ya) / eps;
  // partial pivoting: swap so that the larger entry 1 is the pivot
  const m2 = eps / 1, u22b = 1 - m2 * 1, rb = 1 - m2 * 2;
  const yb = rb / u22b, xb = 2 - yb;
  const card = (title: string, lines: string[], x: number, y: number, bad: boolean) => (
    <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 10, background: bad ? "var(--danger-soft)" : "var(--accent-soft)" }}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        {lines.map((l) => <div key={l}>{l}</div>)}
        <div style={{ fontWeight: 700 }}>x = {fmt(x)}, y = {fmt(y)}</div>
        <div>error in x: {fmt(Math.abs(x - trueX))}</div>
      </div>
    </div>
  );
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono">ε = 1e−{k}</span>
        <input type="range" min={1} max={20} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <p className="mono" style={{ fontSize: 13, margin: "6px 0" }}>εx + y = 1,  x + y = 2.  True solution: x = {fmt(trueX)}, y = {fmt(trueY)}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
        {card("no pivoting (pivot ε)", [`multiplier 1/ε = ${fmt(m1)}`, `new row 2: (${fmt(u22a)}) y = ${fmt(ra)}`, "back-substitute x = (1 − y)/ε"], xa, ya, Math.abs(xa - trueX) > 1e-6)}
        {card("partial pivoting (swap, pivot 1)", [`multiplier ε = ${fmt(m2)}`, `new row 2: (${fmt(u22b)}) y = ${fmt(rb)}`, "back-substitute x = 2 − y"], xb, yb, Math.abs(xb - trueX) > 1e-6)}
      </div>
      <figcaption className="viz-caption">
        Without pivoting, the tiny pivot ε produces a huge multiplier, and the 1 and 2 in the second row are swamped by
        numbers of size 1/ε. The computed y is still excellent, but x = (1 − y)/ε magnifies its rounding error by 1/ε.
        At ε = 1e−16 the computed x is 2.22, and from 1e−17 on it is 0 instead of 1. Swapping rows first keeps every multiplier at most 1
        and the answer stays accurate.
      </figcaption>
    </figure>
  );
}
