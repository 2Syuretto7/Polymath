"use client";

import { useState } from "react";

const LEVELS = ["individuals", "classes of individuals", "classes of classes of individuals", "classes of type 2 objects"];
type F = "xy" | "yx" | "xx" | "eq";
const FORMULAS: Record<F, string> = { xy: "x ∈ y", yx: "y ∈ x", xx: "x ∈ x", eq: "x = y" };

/** Russell’s simple theory of types: which formulas are allowed once every variable has a type. */
export function TypeLevelViz() {
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(1);
  const [f, setF] = useState<F>("xy");
  let ok = false, why = "";
  if (f === "xy") { ok = ty === tx + 1; why = ok ? "y is exactly one type above x." : `x ∈ y needs y one type above x, but x has type ${tx} and y has type ${ty}.`; }
  if (f === "yx") { ok = tx === ty + 1; why = ok ? "x is exactly one type above y." : `y ∈ x needs x one type above y, but y has type ${ty} and x has type ${tx}.`; }
  if (f === "xx") { ok = false; why = "x ∈ x would need x to be one type above itself, which is impossible. So Russell’s class of all classes not members of themselves cannot even be described."; }
  if (f === "eq") { ok = tx === ty; why = ok ? "Both sides have the same type." : "Identity is only meaningful between things of the same type."; }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Formula">
        {(Object.keys(FORMULAS) as F[]).map((k) => (
          <button key={k} type="button" aria-pressed={f === k} className={f === k ? "seg is-on" : "seg"} onClick={() => setF(k)}>{FORMULAS[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>type of x: <span className="mono">{tx}</span></span>
          <input type="range" min={0} max={3} step={1} value={tx} onChange={(e) => setTx(Number(e.target.value))} /></label>
        <label><span>type of y: <span className="mono">{ty}</span></span>
          <input type="range" min={0} max={3} step={1} value={ty} onChange={(e) => setTy(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="The hierarchy of types" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {LEVELS.map((name, i) => {
          const y = 140 - i * 38;
          return (
            <g key={i}>
              <rect x={20} y={y - 14} width={330} height={28} rx={5} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
              <text x={30} y={y + 4} style={{ fill: "var(--text-muted)", fontSize: 12 }}>type {i}: {name}</text>
              {tx === i && <circle cx={390} cy={y} r={11} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1.5 }} />}
              {tx === i && <text x={390} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>x</text>}
              {ty === i && <circle cx={440} cy={y} r={11} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1.5 }} />}
              {ty === i && <text x={440} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>y</text>}
            </g>
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div style={{ fontWeight: 700 }}>{FORMULAS[f]} is {ok ? "well-formed" : "not well-formed"}</div>
        <div style={{ whiteSpace: "normal" }}>{why}</div>
      </div>
      <figcaption className="viz-caption">
        In the simple theory of types every variable ranges over one type: individuals, classes of individuals, classes of
        those classes, and so on. A formula saying that something is a member of something else is meaningful only when
        the second is exactly one type higher. The rule is about grammar, not truth: a formula that breaks it is not false
        but meaningless.
      </figcaption>
    </figure>
  );
}
