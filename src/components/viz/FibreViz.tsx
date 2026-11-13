"use client";

import { useState } from "react";

const SUBD = "₀₁₂₃₄₅₆₇₈₉";
const sub = (m: number) => String(m).split("").map((c) => SUBD[Number(c)]).join("");
const MAPS = [
  { m: 4, k: 1 }, { m: 6, k: 2 }, { m: 3, k: 1 }, { m: 12, k: 3 }, { m: 2, k: 1 },
];

/** The first isomorphism theorem: a homomorphism sorts the group into fibres, which are the cosets of its kernel, and each fibre goes to one element of the image. */
export function FibreViz() {
  const [i, setI] = useState(0);
  const { m, k } = MAPS[i];
  const phi = (x: number) => (k * x) % m;
  const img = [...new Set(Array.from({ length: 12 }, (_, x) => phi(x)))].sort((a, b) => a - b);
  const fib = img.map((y) => Array.from({ length: 12 }, (_, x) => x).filter((x) => phi(x) === y));
  const ker = fib[0];
  const cw = 480 / img.length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Homomorphism">
        {MAPS.map((q, j) => (
          <button key={j} type="button" className={j === i ? "seg is-on" : "seg"} aria-pressed={j === i} onClick={() => setI(j)}>x ↦ {q.k === 1 ? "" : q.k}x, ℤ₁₂ → ℤ{sub(q.m)}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="Fibres of the homomorphism above their images" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={10} y={16} style={{ fontSize: 11, fill: "var(--text-muted)" }}>ℤ₁₂, sorted into fibres</text>
        <text x={10} y={204} style={{ fontSize: 11, fill: "var(--text-muted)" }}>image in ℤ{sub(m)}</text>
        {fib.map((f, c) => {
          const x0 = 20 + c * cw + cw / 2;
          return <g key={c}>
            <rect x={x0 - Math.min(cw * 0.4, 40)} y={24} width={Math.min(cw * 0.8, 80)} height={136} rx={8} style={{ fill: c === 0 ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: c === 0 ? "var(--accent)" : "var(--border)" }} />
            {f.map((x, r) => {
              const cols = f.length > 6 ? 2 : 1;
              const cx = x0 + (cols === 2 ? (r % 2 ? 12 : -12) : 0);
              const cy = 40 + (cols === 2 ? Math.floor(r / 2) : r) * 20;
              return <text key={x} x={cx} y={cy + 4} textAnchor="middle" className="mono" style={{ fontSize: 12, fill: "var(--text)" }}>{x}</text>;
            })}
            <line x1={x0} y1={162} x2={x0} y2={180} style={{ stroke: "var(--text-muted)" }} />
            <circle cx={x0} cy={194} r={11} style={{ fill: "var(--bg)", stroke: "var(--accent)" }} />
            <text x={x0} y={198} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>{img[c]}</text>
            <text x={x0} y={222} textAnchor="middle" className="mono" style={{ fontSize: 10, fill: "var(--text-muted)" }}>{f[0]} + K</text>
          </g>;
        })}
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>kernel K, the shaded fibre</td><td className="mono">{`{${ker.join(", ")}}`}</td></tr>
          <tr><td>each fibre is a coset of K, with</td><td className="mono">{ker.length} elements</td></tr>
          <tr><td>number of fibres = |image|</td><td className="mono">{img.length} = 12 / {ker.length}</td></tr>
          <tr><td>so</td><td className="mono">ℤ₁₂ / K ≅ image ≅ ℤ{sub(img.length)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Two elements land on the same image exactly when they differ by an element of the kernel. So the fibres are the cosets of the kernel, and sending each coset to its image is a well-defined isomorphism from G/K onto the image.
      </figcaption>
    </figure>
  );
}
