"use client";

import { useState } from "react";

const CX = 200, CY = 165, R = 130;

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }

/** Residues mod n on a clock. Multiplying by a sends each x to ax mod n: a permutation exactly when gcd(a, n) = 1. */
export function ModClockViz() {
  const [n, setN] = useState(12);
  const [a, setA] = useState(5);
  const [op, setOp] = useState<"add" | "mul">("mul");
  const A = a % n;
  const pos = (k: number) => {
    const t = (2 * Math.PI * k) / n - Math.PI / 2;
    return [CX + R * Math.cos(t), CY + R * Math.sin(t)];
  };
  const f = (x: number) => (op === "add" ? (x + A) % n : (x * A) % n);
  const image = new Set(Array.from({ length: n }, (_, x) => f(x)));
  const bij = image.size === n;
  const inverse = op === "mul" && bij ? Array.from({ length: n }, (_, x) => x).find((x) => (A * x) % n === 1) : undefined;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Operation">
        <button type="button" className={op === "add" ? "seg is-on" : "seg"} aria-pressed={op === "add"} onClick={() => setOp("add")}>add a</button>
        <button type="button" className={op === "mul" ? "seg is-on" : "seg"} aria-pressed={op === "mul"} onClick={() => setOp("mul")}>multiply by a</button>
      </div>
      <svg viewBox="0 0 400 330" role="img" aria-label={`The map x to ${op === "add" ? `x + ${A}` : `${A}x`} mod ${n}`} style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
        <defs>
          <marker id="mc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
          </marker>
        </defs>
        <circle cx={CX} cy={CY} r={R} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 1 }} />
        {Array.from({ length: n }, (_, x) => {
          const y = f(x);
          if (y === x) return null;
          const [x1, y1] = pos(x), [x2, y2] = pos(y);
          const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
          return <line key={x} x1={x1 + (dx / L) * 13} y1={y1 + (dy / L) * 13} x2={x2 - (dx / L) * 15} y2={y2 - (dy / L) * 15}
            markerEnd="url(#mc-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 1.4, opacity: 0.75 }} />;
        })}
        {Array.from({ length: n }, (_, k) => {
          const [x, y] = pos(k);
          const hit = image.has(k);
          return (
            <g key={k}>
              <circle cx={x} cy={y} r={12} style={{ fill: hit ? "var(--bg-subtle)" : "var(--danger-soft)", stroke: hit ? "var(--text)" : "var(--danger)", strokeWidth: hit ? 1.2 : 2 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text)", fontFamily: "var(--font-mono)" }}>{k}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>modulus n = <span className="mono">{n}</span></span>
          <input type="range" min={2} max={20} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>a = <span className="mono">{a}</span></span>
          <input type="range" min={0} max={19} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>map</td><td className="mono">x ↦ {op === "add" ? `x + ${A}` : `${A}x`} (mod {n})</td></tr>
          {op === "mul" && <tr><td>gcd(a, n)</td><td className="mono">{gcd(A, n)}</td></tr>}
          <tr><td>every residue hit?</td><td>{bij ? "yes: the map is a bijection" : `no: ${n - image.size} residues are missed (ringed in red)`}</td></tr>
          {op === "mul" && <tr><td>inverse of a</td><td className="mono">{inverse !== undefined ? `${inverse}, since ${A} × ${inverse} ≡ 1` : "none"}</td></tr>}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        {op === "add"
          ? "Adding a just turns the clock, so it always hits every residue: every a has an additive inverse, n − a."
          : `Multiplying by a hits every residue exactly when gcd(a, n) = 1, and then some x has ax ≡ 1: a has an inverse. ${n > 1 && Array.from({ length: n - 1 }, (_, k) => k + 1).every((k) => gcd(k, n) === 1) ? `${n} is prime, so every nonzero a has an inverse.` : `${n} is not prime, so some nonzero a have no inverse.`}`}
      </figcaption>
    </figure>
  );
}
