"use client";

import { useState } from "react";

const D12 = [1, 2, 3, 4, 6, 12];
const D6 = [1, 2, 3, 6];
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const POS12: Record<number, [number, number]> = { 1: [120, 190], 2: [60, 135], 3: [180, 135], 4: [30, 80], 6: [150, 80], 12: [120, 25] };
const POS6: Record<number, [number, number]> = { 1: [400, 190], 2: [340, 120], 3: [460, 120], 6: [400, 50] };

/** Divisors of 12 as a category (an arrow a → b when a divides b), and the functor a ↦ gcd(a, 6). */
export function DivisorFunctorViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(12);
  const arrow = b % a === 0;
  const Fa = gcd(a, 6), Fb = gcd(b, 6);
  const edges12 = D12.flatMap((x) => D12.filter((y) => y !== x && y % x === 0 && !D12.some((z) => z !== x && z !== y && z % x === 0 && y % z === 0)).map((y) => [x, y]));
  const edges6 = D6.flatMap((x) => D6.filter((y) => y !== x && y % x === 0 && !D6.some((z) => z !== x && z !== y && z % x === 0 && y % z === 0)).map((y) => [x, y]));
  const node = (n: number, p: [number, number], on: boolean) => (
    <g key={n}>
      <circle cx={p[0]} cy={p[1]} r={16} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: on ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />
      <text x={p[0]} y={p[1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{n}</text>
    </g>
  );
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 220" role="img" aria-label="Divisor lattices of 12 and 6, with a chosen arrow and its image" style={{ width: "100%", display: "block" }}>
        <defs><marker id="df-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 Z" style={{ fill: "var(--accent)" }} /></marker></defs>
        {edges12.map(([x, y]) => <line key={`${x}-${y}`} x1={POS12[x][0]} y1={POS12[x][1]} x2={POS12[y][0]} y2={POS12[y][1]} style={{ stroke: "var(--border-strong)" }} />)}
        {edges6.map(([x, y]) => <line key={`s${x}-${y}`} x1={POS6[x][0]} y1={POS6[x][1]} x2={POS6[y][0]} y2={POS6[y][1]} style={{ stroke: "var(--border-strong)" }} />)}
        {arrow && a !== b && <line x1={POS12[a][0]} y1={POS12[a][1]} x2={POS12[b][0]} y2={POS12[b][1]} markerEnd="url(#df-arr)" style={{ stroke: "var(--accent)", strokeWidth: 3, strokeDasharray: "6 3" }} />}
        {arrow && Fa !== Fb && <line x1={POS6[Fa][0]} y1={POS6[Fa][1]} x2={POS6[Fb][0]} y2={POS6[Fb][1]} markerEnd="url(#df-arr)" style={{ stroke: "var(--accent)", strokeWidth: 3, strokeDasharray: "6 3" }} />}
        {D12.map((n) => node(n, POS12[n], n === a || n === b))}
        {D6.map((n) => node(n, POS6[n], arrow && (n === Fa || n === Fb)))}
        <text x={120} y={215} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>divisors of 12</text>
        <text x={400} y={215} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>divisors of 6</text>
        <text x={270} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>F(n) = gcd(n, 6)</text>
      </svg>
      <div className="segmented" role="group" aria-label="source">
        {D12.map((n) => <button key={n} type="button" aria-pressed={a === n} className={a === n ? "seg is-on" : "seg"} onClick={() => setA(n)}>from {n}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="target" style={{ marginTop: 6 }}>
        {D12.map((n) => <button key={n} type="button" aria-pressed={b === n} className={b === n ? "seg is-on" : "seg"} onClick={() => setB(n)}>to {n}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {arrow
          ? `${a} divides ${b}, so there is exactly one arrow ${a} → ${b}. F sends it to the arrow ${Fa} → ${Fb}${Fa === Fb ? ", an identity" : ""}.`
          : `${a} does not divide ${b}: no arrow from ${a} to ${b}.`}
      </p>
      <figcaption className="viz-caption">
        A partially ordered set is a category with at most one arrow between any two objects; composition is
        transitivity and identities are reflexivity. A functor between such categories is just an order-preserving map:
        if a divides b, then gcd(a, 6) divides gcd(b, 6).
      </figcaption>
    </figure>
  );
}
