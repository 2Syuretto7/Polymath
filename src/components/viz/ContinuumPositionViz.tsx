"use client";

import { useState } from "react";

const ALEPHS = ["ℵ₀", "ℵ₁", "ℵ₂", "ℵ₃", "…", "ℵω", "ℵω+1"];
const MODELS = [
  { name: "Gödel’s L (1938)", pos: 1, ok: true, text: "In the constructible universe L, the continuum is ℵ₁: CH holds. So ZFC cannot refute CH, if ZFC is consistent." },
  { name: "Cohen forcing (1963)", pos: 2, ok: true, text: "Adding ℵ₂ new reals by forcing gives a model where the continuum is ℵ₂: CH fails. So ZFC cannot prove CH either." },
  { name: "more forcing", pos: 3, ok: true, text: "The same method makes the continuum ℵ₃, or ℵ₄, or many larger values. Easton showed almost any value is possible." },
  { name: "try ℵω", pos: 5, ok: false, text: "Impossible. König’s theorem forbids the continuum from having countable cofinality, and ℵω is the limit of ℵ₀, ℵ₁, ℵ₂, …" },
];

/** Where is the size of ℝ among the alephs? Different models of ZFC give different answers. */
export function ContinuumPositionViz() {
  const [m, setM] = useState(0);
  const M = MODELS[m];
  const X = (i: number) => 40 + i * 72;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="model">
        {MODELS.map((x, i) => <button key={x.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 110" role="img" aria-label="The alephs, with the size of the reals marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={60} x2={500} y2={60} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {ALEPHS.map((a, i) => (
          <g key={a}>
            {a !== "…" && <circle cx={X(i)} cy={60} r={5} style={{ fill: "var(--text-muted)" }} />}
            <text x={X(i)} y={90} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{a}</text>
          </g>
        ))}
        <circle cx={X(M.pos)} cy={60} r={10} style={{ fill: M.ok ? "var(--accent)" : "var(--danger)", opacity: 0.85 }} />
        <text x={X(M.pos)} y={30} textAnchor="middle" style={{ fill: M.ok ? "var(--accent)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{M.ok ? "|ℝ| here" : "|ℝ| never here"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{M.text}</p>
      <figcaption className="viz-caption">
        ZFC proves that |ℝ| = 2 to the power ℵ₀ is uncountable, so at least ℵ₁, and not of countable cofinality. Beyond that it
        is silent: each placement above, except the last, holds in some model of ZFC.
      </figcaption>
    </figure>
  );
}
