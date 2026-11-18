"use client";

import { useState } from "react";

const D36 = [1, 2, 3, 4, 6, 9, 12, 18, 36];
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const P: Record<number, [number, number]> = { 1: [260, 205], 2: [190, 155], 3: [330, 155], 4: [120, 105], 6: [260, 105], 9: [400, 105], 12: [190, 55], 18: [330, 55], 36: [260, 12] };

/** In the divisors of 36, the product of a and b is gcd(a, b) and the coproduct is lcm(a, b). */
export function ProductConeViz() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(18);
  const [co, setCo] = useState(false);
  const g = gcd(a, b), l = (a * b) / g;
  const best = co ? l : g;
  const cone = D36.filter((c) => (co ? c % a === 0 && c % b === 0 : a % c === 0 && b % c === 0));
  const edges = D36.flatMap((x) => D36.filter((y) => y !== x && y % x === 0 && [2, 3].includes(y / x)).map((y) => [x, y]));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="construction">
        <button type="button" aria-pressed={!co} className={!co ? "seg is-on" : "seg"} onClick={() => setCo(false)}>product</button>
        <button type="button" aria-pressed={co} className={co ? "seg is-on" : "seg"} onClick={() => setCo(true)}>coproduct</button>
      </div>
      <svg viewBox="0 0 520 225" role="img" aria-label="Divisors of 36 with the cone over a and b highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {edges.map(([x, y]) => <line key={`${x}-${y}`} x1={P[x][0]} y1={P[x][1]} x2={P[y][0]} y2={P[y][1]} style={{ stroke: "var(--border-strong)" }} />)}
        {D36.map((n) => {
          const inCone = cone.includes(n), isAB = n === a || n === b, isBest = n === best;
          return (
            <g key={n}>
              <circle cx={P[n][0]} cy={P[n][1]} r={isBest ? 15 : 12} style={{ fill: isAB ? "var(--text)" : inCone ? "var(--accent-soft)" : "var(--bg)", stroke: isBest ? "var(--accent)" : inCone ? "var(--accent)" : "var(--border-strong)", strokeWidth: isBest ? 4 : 2 }} />
              <text x={P[n][0]} y={P[n][1] + 4} textAnchor="middle" style={{ fill: isAB ? "var(--bg)" : "var(--text)", fontSize: 11, fontWeight: 700 }}>{n}</text>
            </g>
          );
        })}
      </svg>
      <div className="segmented" role="group" aria-label="a">
        {D36.map((n) => <button key={n} type="button" aria-pressed={a === n} className={a === n ? "seg is-on" : "seg"} onClick={() => setA(n)}>a = {n}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="b" style={{ marginTop: 6 }}>
        {D36.map((n) => <button key={n} type="button" aria-pressed={b === n} className={b === n ? "seg is-on" : "seg"} onClick={() => setB(n)}>b = {n}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {co
          ? `Objects with arrows from both ${a} and ${b}: ${cone.join(", ")}. All receive an arrow from ${l} = lcm(${a}, ${b}), which is the coproduct.`
          : `Objects with arrows to both ${a} and ${b}: ${cone.join(", ")}. All have an arrow to ${g} = gcd(${a}, ${b}), which is the product.`}
      </p>
      <figcaption className="viz-caption">
        A product of a and b is an object with arrows to both, through which every other such object factors uniquely. In
        sets it is the Cartesian product; in groups the direct product; here, with an arrow up when one number divides
        another, it is the greatest common divisor. Reverse the arrows and you get the coproduct.
      </figcaption>
    </figure>
  );
}
