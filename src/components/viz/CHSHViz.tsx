"use client";

import { useState } from "react";

/** The singlet-state correlation between spin measurements along directions at angles a and b, in degrees. */
export function E(a: number, b: number) {
  return -Math.cos(((a - b) * Math.PI) / 180);
}

/** The CHSH combination |E(a, b) + E(a, b′) + E(a′, b) − E(a′, b′)|. */
export function chsh(a: number, a2: number, b: number, b2: number) {
  return Math.abs(E(a, b) + E(a, b2) + E(a2, b) - E(a2, b2));
}

export function CHSHViz() {
  const [ang, setAng] = useState([0, 90, 45, -45]);
  const [a, a2, b, b2] = ang;
  const S = chsh(a, a2, b, b2);
  const names = ["a", "a′", "b", "b′"];
  const set = (i: number, v: number) => setAng(ang.map((x, j) => (j === i ? v : x)));
  const W = (v: number) => (v / 3) * 420;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="presets">
        <button type="button" className="seg" onClick={() => setAng([0, 90, 45, -45])}>best angles</button>
        <button type="button" className="seg" onClick={() => setAng([0, 0, 0, 0])}>all aligned</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {names.map((n, i) => <label key={n}>{n} = {ang[i]}° <input type="range" min={-180} max={180} step={5} value={ang[i]} onChange={(e) => set(i, Number(e.target.value))} aria-label={n} /></label>)}
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="The CHSH value against the local bound 2 and the quantum bound" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={40} width={420} height={36} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={60} y={40} width={W(S)} height={36} rx={4} style={{ fill: S > 2.0001 ? "var(--danger)" : "var(--success)" }} />
        <line x1={60 + W(2)} y1={30} x2={60 + W(2)} y2={90} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={60 + W(2)} y={106} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>2: local bound</text>
        <line x1={60 + W(2 * Math.SQRT2)} y1={30} x2={60 + W(2 * Math.SQRT2)} y2={90} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <text x={60 + W(2 * Math.SQRT2)} y={124} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>2√2: quantum maximum</text>
        <text x={60} y={24} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>S = {S.toFixed(3)}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        E(a, b) = {E(a, b).toFixed(2)}, E(a, b′) = {E(a, b2).toFixed(2)}, E(a′, b) = {E(a2, b).toFixed(2)}, E(a′, b′) = {E(a2, b2).toFixed(2)}; S = {S.toFixed(3)}{S > 2.0001 ? ", above every local theory" : ", within the local bound"}.
      </p>
      <figcaption className="viz-caption">
        Alice measures spin along a or a′, Bob along b or b′, on pairs in the singlet state, where quantum mechanics
        predicts correlation −cos of the angle between the directions. Any theory in which outcomes are fixed by local
        variables gives S ≤ 2. Quantum mechanics reaches 2√2, and experiments agree with it.
      </figcaption>
    </figure>
  );
}
