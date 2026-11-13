"use client";

import { useState } from "react";

const PRESETS: { f: number[]; g: number[] }[] = [
  { f: [1, -2, 0, -4], g: [1, -3] },
  { f: [1, 0, 0, 0, 1], g: [1, 1, 1] },
  { f: [2, 3, -1, 5], g: [1, 0, -1] },
  { f: [1, 0, -7, 6], g: [1, -1] },
];

const term = (c: number, k: number, first: boolean) => {
  if (c === 0) return "";
  const sign = c < 0 ? (first ? "−" : " − ") : first ? "" : " + ";
  const a = Math.abs(c);
  const coef = a === 1 && k > 0 ? "" : String(a);
  const x = k === 0 ? "" : k === 1 ? "x" : `x${"⁰¹²³⁴⁵⁶⁷⁸⁹"[k]}`;
  return sign + coef + x;
};
/** Coefficients listed from the highest degree down. */
const show = (p: number[]) => {
  const d = p.length - 1;
  const parts = p.map((c, i) => ({ c, k: d - i })).filter(({ c }) => c !== 0);
  if (!parts.length) return "0";
  return parts.map(({ c, k }, j) => term(c, k, j === 0)).join("");
};
const trim = (p: number[]) => { let i = 0; while (i < p.length - 1 && p[i] === 0) i++; return p.slice(i); };

/** Polynomial long division by a monic polynomial, one step at a time. */
export function PolyDivViz() {
  const [pi, setPi] = useState(0);
  const [step, setStep] = useState(0);
  const { f, g } = PRESETS[pi];
  const dg = g.length - 1;
  const steps: { q: number[]; r: number[]; sub: string }[] = [];
  let r = f.slice();
  const q = Array(Math.max(1, f.length - dg)).fill(0);
  steps.push({ q: q.slice(), r: r.slice(), sub: "" });
  while (trim(r).length - 1 >= dg && trim(r).some((c) => c !== 0)) {
    const rr = trim(r);
    const k = rr.length - 1 - dg, c = rr[0] / g[0];
    q[q.length - 1 - k] += c;
    const prod = g.map((x) => x * c).concat(Array(k).fill(0));
    const nr = rr.map((x, i) => x - (prod[i] ?? 0));
    steps.push({ q: q.slice(), r: trim(nr.slice(1).length ? nr.slice(1) : [0]), sub: `subtract (${term(c, k, true) || "1"})(${show(g)}) = ${show(prod)}` });
    r = trim(nr.slice(1).length ? nr.slice(1) : [0]);
  }
  const s = steps[Math.min(step, steps.length - 1)];
  const done = step >= steps.length - 1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Choose a division">
        {PRESETS.map((p, i) => <button key={i} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setStep(0); }}>({show(p.f)}) ÷ ({show(p.g)})</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <tbody>
          <tr><td style={{ width: "30%" }}>step</td><td className="mono">{Math.min(step, steps.length - 1)} of {steps.length - 1}</td></tr>
          <tr><td>last move</td><td className="mono">{s.sub || "start: remainder is the dividend"}</td></tr>
          <tr><td>quotient so far</td><td className="mono">{show(trim(s.q))}</td></tr>
          <tr><td>remainder so far</td><td className="mono" style={{ color: done ? "var(--accent)" : "var(--text)" }}>{show(s.r)}{done ? `  (degree below ${dg}, so stop)` : ""}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn" onClick={() => setStep(0)} disabled={step === 0}>Start again</button>
        <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)} disabled={done}>Next step</button>
      </div>
      <figcaption className="viz-caption">
        Each step cancels the leading term of the remainder, lowering its degree. Over a field the leading coefficient of the divisor can always be inverted, so the process ends with f = qg + r and deg r &lt; deg g. This is why F[x] is a Euclidean domain, and why x − a divides f exactly when f(a) = 0.
      </figcaption>
    </figure>
  );
}
