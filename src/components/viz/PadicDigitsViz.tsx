"use client";

import { useState } from "react";

/** The first n p-adic digits of num/den, where p does not divide den. */
export function padicDigits(num: number, den: number, p: number, n: number) {
  const inv = (x: number) => { x = ((x % p) + p) % p; for (let y = 1; y < p; y++) if ((x * y) % p === 1) return y; return 0; };
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const d = ((((num % p) + p) % p) * inv(den)) % p;
    out.push(d);
    num = (num - d * den) / p;
  }
  return out;
}
/** The p-adic absolute value p to the −v of a non-zero integer, v the power of p dividing it. */
export function padicAbs(n: number, p: number) {
  if (n === 0) return 0;
  let v = 0;
  while (n % p === 0) { n /= p; v++; }
  return p ** -v;
}

const NUMS: [number, number, string][] = [[-1, 1, "−1"], [1, 3, "1/3"], [-1, 2, "−½"], [2, 3, "2/3"], [-3, 4, "−3/4"]];
const PS = [2, 3, 5, 7];

/** p-adic expansions of rational numbers, and the shrinking p-adic distance to their partial sums. */
export function PadicDigitsViz() {
  const [pi, setPi] = useState(2);
  const [xi, setXi] = useState(1);
  const p = PS[pi];
  const [num, den, label] = NUMS[xi];
  const ok = den % p !== 0;
  const digs = ok ? padicDigits(num, den, p, 10) : [];
  const S = 46;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime">
        {PS.map((v, i) => <button key={v} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>p = {v}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="number" style={{ marginTop: 6 }}>
        {NUMS.map((v, i) => <button key={v[2]} type="button" aria-pressed={xi === i} className={xi === i ? "seg is-on" : "seg"} onClick={() => setXi(i)}>{v[2]}</button>)}
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="p-adic digits and distances" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ok ? digs.map((dg, i) => {
          const x = 500 - i * S;
          const dist = p ** -(i + 1);
          return (
            <g key={i}>
              <rect x={x - 20} y={10} width={40} height={40} rx={4} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
              <text x={x} y={36} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 16, fontWeight: 700 }}>{dg}</text>
              <text x={x} y={66} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{p}{String(i).split("").map((ch) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(ch)]).join("")}</text>
              <rect x={x - 8} y={140 - 60 * Math.sqrt(dist)} width={16} height={60 * Math.sqrt(dist)} style={{ fill: "var(--success)" }} />
            </g>
          );
        }) : <text x={270} y={70} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>{p} divides the denominator: the expansion starts at a negative power of {p}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {ok ? `${label} = ${digs.map((dg, i) => (i === 0 ? `${dg}` : `${dg}·${p}${["", "", "²", "³", "⁴"][i] ?? ` to the ${i}`}`)).slice(0, 5).join(" + ")} + ⋯ in ℚ${["₂", "₃", "₅", "₇"][pi]}. After n digits the error has p-adic size ${p} to the −n.` : "Choose another prime."}
      </p>
      <figcaption className="viz-caption">
        Digits are read from right to left, lowest power first, the opposite of decimals. The green bars show the p-adic
        distance from the number to each partial sum, which shrinks by a factor of p with every digit: in the p-adic
        metric, high powers of p are small. So −1 = (p − 1)(1 + p + p² + ⋯), a geometric series that converges p-adically.
      </figcaption>
    </figure>
  );
}
