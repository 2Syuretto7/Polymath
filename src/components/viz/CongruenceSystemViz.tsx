"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const lcm = (a: number, b: number) => (a / gcd(a, b)) * b;

/** A system of congruences: each row marks the numbers satisfying one congruence; the columns marked in every row solve the system. */
export function CongruenceSystemViz() {
  const [mods, setMods] = useState([3, 5, 7]);
  const [res, setRes] = useState([2, 3, 2]);
  const [k, setK] = useState(3);
  const ms = mods.slice(0, k), rs = res.slice(0, k).map((r, i) => r % ms[i]);
  const L = ms.reduce(lcm, 1);
  const shown = Math.min(L, 120);
  const sols = Array.from({ length: L }, (_, x) => x).filter((x) => ms.every((m, i) => x % m === rs[i]));
  const coprime = ms.every((a, i) => ms.every((b, j) => i === j || gcd(a, b) === 1));
  const W = 560, rowH = 22, top = 8, H = top + k * rowH + 30;
  const cw = (W - 70) / shown;
  const setM = (i: number, v: number) => setMods(mods.map((m, j) => (j === i ? v : m)));
  const setR = (i: number, v: number) => setRes(res.map((r, j) => (j === i ? v : r)));
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>number of congruences:</span>
        {[2, 3].map((v) => <button key={v} type="button" aria-pressed={k === v} className={k === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setK(v)}>{v}</button>)}
      </div>
      <div className="viz-sliders">
        {ms.map((m, i) => (
          <div key={i} style={{ display: "contents" }}>
            <label><span>modulus m{"₁₂₃"[i]}: <span className="mono">{m}</span></span>
              <input type="range" min={2} max={12} step={1} value={m} onChange={(e) => setM(i, Number(e.target.value))} /></label>
            <label><span>residue a{"₁₂₃"[i]}: <span className="mono">{rs[i]}</span></span>
              <input type="range" min={0} max={m - 1} step={1} value={rs[i]} onChange={(e) => setR(i, Number(e.target.value))} /></label>
          </div>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Which numbers satisfy each congruence" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ms.map((m, i) => (
          <g key={i}>
            <text x={4} y={top + i * rowH + 15} style={{ fill: "var(--text)", fontSize: 11 }}>≡ {rs[i]} mod {m}</text>
            {Array.from({ length: shown }, (_, x) => x % m === rs[i] && (
              <rect key={x} x={66 + x * cw} y={top + i * rowH + 3} width={Math.max(cw - 1, 1)} height={rowH - 6} rx={1} style={{ fill: sols.includes(x) ? "var(--accent)" : "var(--text-faint)", fillOpacity: sols.includes(x) ? 1 : 0.5 }} />
            ))}
          </g>
        ))}
        {sols.filter((x) => x < shown).map((x) => <text key={x} x={66 + x * cw + cw / 2} y={top + k * rowH + 16} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11, fontWeight: 600 }}>{x}</text>)}
        <text x={W - 4} y={H - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{shown < L ? `showing 0 to ${shown - 1} of ${L}` : `0 to ${L - 1}`}</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>lcm of the moduli = {L}{coprime ? " = their product, since they are pairwise coprime" : ""}</p>
      <p className={sols.length ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "6px 0" }}>
        {sols.length === 1 ? `Exactly one solution modulo ${L}: x ≡ ${sols[0]}.` : sols.length ? `Solutions modulo ${L}: ${sols.join(", ")}.` : "No solution: two of the congruences contradict each other on a common factor of their moduli."}
      </p>
      <figcaption className="viz-caption">
        Each row marks the numbers that satisfy one congruence; a column marked in every row solves the system. With pairwise coprime moduli there is always exactly one solution modulo the product. Make two moduli share a factor, such as 4 and 6, and the system is solvable only when the residues agree modulo that factor.
      </figcaption>
    </figure>
  );
}
