"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const PRESETS: { name: string; p: number; q: number; a0: number; a1: number; closed: string }[] = [
  { name: "Fibonacci", p: 1, q: 1, a0: 0, a1: 1, closed: "aₙ = (φⁿ − ψⁿ)/√5, with φ, ψ = (1 ± √5)/2" },
  { name: "distinct roots", p: 5, q: -6, a0: 1, a1: 4, closed: "roots 2 and 3; aₙ = 2·3ⁿ − 2ⁿ" },
  { name: "repeated root", p: 4, q: -4, a0: 1, a1: 4, closed: "root 2 twice; aₙ = (1 + n)·2ⁿ" },
  { name: "complex roots", p: 0, q: -1, a0: 1, a1: 0, closed: "roots ±i; the sequence repeats every 4 terms: aₙ = cos(nπ/2)" },
];

/** Second-order linear recurrences aₙ = p aₙ₋₁ + q aₙ₋₂, and the roots of x² = px + q. */
export function LinearRecurrenceViz() {
  const [k, setK] = useState(0);
  const { p, q, a0, a1, closed } = PRESETS[k];
  const terms = [a0, a1];
  for (let n = 2; n < 12; n++) terms.push(p * terms[n - 1] + q * terms[n - 2]);
  const disc = p * p + 4 * q;
  const roots = disc > 0
    ? `${fmtNum(Number(((p + Math.sqrt(disc)) / 2).toFixed(3)))} and ${fmtNum(Number(((p - Math.sqrt(disc)) / 2).toFixed(3)))}`
    : disc === 0 ? `${fmtNum(p / 2)} (twice)` : (() => {
      const im = Number((Math.sqrt(-disc) / 2).toFixed(3));
      const imS = im === 1 ? "i" : `${fmtNum(im)}i`;
      return p === 0 ? `±${imS}` : `${fmtNum(p / 2)} ± ${imS}`;
    })();
  // Write p·u + q·v without "1u" or "0u" terms.
  const lin = (u: string, v: string) => {
    const term = (c: number, x: string, first: boolean) => {
      if (c === 0) return "";
      const mag = x === "1" ? fmtNum(Math.abs(c)) : Math.abs(c) === 1 ? x : `${fmtNum(Math.abs(c))}${x}`;
      return first ? (c < 0 ? `−${mag}` : mag) : (c < 0 ? ` − ${mag}` : ` + ${mag}`);
    };
    const a = term(p, u, true);
    return a + term(q, v, a === "");
  };
  const max = Math.max(...terms.map(Math.abs), 1);
  const W = 360, H = 140, bw = W / terms.length;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Recurrence">
        {PRESETS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 480, display: "block", margin: "10px auto" }} role="img" aria-label="Bar chart of the first twelve terms">
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} style={{ stroke: "var(--border-strong)" }} />
        {terms.map((t, n) => {
          const h = (Math.abs(t) / max) * (H / 2 - 4);
          return <rect key={n} x={n * bw + 3} width={bw - 6} y={t >= 0 ? H / 2 - h : H / 2} height={h} style={{ fill: t >= 0 ? "var(--accent)" : "var(--danger)", opacity: 0.8 }} />;
        })}
      </svg>
      <table className="table mono">
        <tbody>
          <tr><td>recurrence</td><td>aₙ = {lin("aₙ₋₁", "aₙ₋₂")}, a₀ = {a0}, a₁ = {a1}</td></tr>
          <tr><td>terms</td><td>{terms.map(fmtNum).join(", ")}</td></tr>
          <tr><td>x² = {lin("x", "1")}</td><td>roots {roots}</td></tr>
          <tr><td>closed form</td><td>{closed}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The bars show a₀ to a₁₁, scaled to fit. The characteristic equation x² = px + q decides the shape: the largest root controls growth, a repeated root brings in a factor of n, and complex roots make the sequence oscillate.
      </figcaption>
    </figure>
  );
}
