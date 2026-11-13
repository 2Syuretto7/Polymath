"use client";

import { useState } from "react";

const FACES = [1, 2, 3, 4, 5, 6];

/** A probability on the six faces of a die, events as sets of faces, and the rules that follow from the axioms. */
export function EventWeightsViz() {
  const [w, setW] = useState([1, 1, 1, 1, 1, 1]);
  const [A, setA] = useState([false, true, false, true, false, true]);
  const [B, setB] = useState([false, false, false, true, true, true]);
  const tot = w.reduce((s, x) => s + x, 0);
  const p = w.map((x) => x / tot);
  const P = (S: boolean[]) => S.reduce((s, x, i) => s + (x ? p[i] : 0), 0);
  const pA = P(A), pB = P(B), pAB = P(A.map((x, i) => x && B[i])), pAuB = P(A.map((x, i) => x || B[i])), pAc = P(A.map((x) => !x));
  const f = (x: number) => x.toFixed(3);
  const tog = (S: boolean[], set: (s: boolean[]) => void, i: number) => set(S.map((x, j) => (j === i ? !x : x)));
  const W = 480, H = 120, bw = W / 6;
  const maxp = Math.max(...p, 0.3);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {FACES.map((fc, i) => (
          <label key={fc}><span>weight of {fc}: <span className="mono">{w[i]}</span></span>
            <input type="range" min={0} max={5} step={0.5} value={w[i]} onChange={(e) => setW(w.map((y, j) => (j === i ? Number(e.target.value) : y)))} /></label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H + 20}`} role="img" aria-label="Probabilities of the six faces" style={{ width: "100%", display: "block" }}>
        {FACES.map((fc, i) => {
          const h = (p[i] / maxp) * H;
          const inA = A[i], inB = B[i];
          return (
            <g key={fc}>
              <rect x={i * bw + 8} y={H - h} width={bw - 16} height={h} style={{ fill: inA && inB ? "var(--accent)" : inA || inB ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
              <text x={i * bw + bw / 2} y={H + 15} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{fc}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <span className="mono-meta" style={{ minWidth: 20 }}>A</span>
        {FACES.map((fc, i) => <button key={fc} type="button" aria-pressed={A[i]} className={A[i] ? "viz-chip is-on" : "viz-chip"} onClick={() => tog(A, setA, i)}>{fc}</button>)}
      </div>
      <div className="viz-controls" style={{ alignItems: "center", marginTop: 6 }}>
        <span className="mono-meta" style={{ minWidth: 20 }}>B</span>
        {FACES.map((fc, i) => <button key={fc} type="button" aria-pressed={B[i]} className={B[i] ? "viz-chip is-on" : "viz-chip"} onClick={() => tog(B, setB, i)}>{fc}</button>)}
      </div>
      <table className="table mono" style={{ width: "auto", marginTop: 8 }}>
        <tbody>
          <tr><td>P(A)</td><td>{f(pA)}</td><td>P(Aᶜ) = 1 − P(A)</td><td>{f(pAc)}</td></tr>
          <tr><td>P(B)</td><td>{f(pB)}</td><td>P(A ∩ B)</td><td>{f(pAB)}</td></tr>
          <tr><td>P(A ∪ B)</td><td>{f(pAuB)}</td><td>P(A) + P(B) − P(A ∩ B)</td><td>{f(pA + pB - pAB)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        A probability gives each face a weight, scaled so the total is 1; bar heights show the result. Choose the faces in events A and B: dark bars are in both, light bars in one. However you load the die, the complement rule and inclusion-exclusion hold, because they follow from the axioms alone.
      </figcaption>
    </figure>
  );
}
