"use client";

import { useState } from "react";

const SUB = "₀₁₂₃₄₅₆₇₈₉";
const sub = (n: number) => String(n).split("").map((d) => SUB[Number(d)]).join("");

/** The tower F₀ ⊂ F₁ ⊂ …, each adding the consistency of the last: every system on it has a Gödel sentence of its own. */
export function ConsistencyTowerViz() {
  const [k, setK] = useState(2);
  const [cons, setCons] = useState(true);
  const levels = Array.from({ length: k + 1 }, (_, n) => n);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Is the starting system consistent">
        <button type="button" aria-pressed={cons} className={cons ? "seg is-on" : "seg"} onClick={() => setCons(true)}>F₀ is consistent</button>
        <button type="button" aria-pressed={!cons} className={!cons ? "seg is-on" : "seg"} onClick={() => setCons(false)}>F₀ is secretly inconsistent</button>
      </div>
      <div className="viz-sliders">
        <label><span>systems added on top of F₀ = Peano arithmetic: <span className="mono">{k}</span></span>
          <input type="range" min={0} max={6} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {[...levels].reverse().map((n) => (
          <div key={n} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "6px 10px", background: n === k ? "var(--accent-soft)" : "var(--bg)" }}>
            <div className="mono" style={{ fontSize: 14, fontWeight: n === k ? 700 : 400 }}>
              F{sub(n)} = {n === 0 ? "Peano arithmetic" : `F${sub(n - 1)} + Con(F${sub(n - 1)})`}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {cons
                ? `F${sub(n)} does not prove its Gödel sentence G${sub(n)}${n < k ? `; F${sub(n + 1)} proves it` : "; a stronger system would"}.`
                : `F${sub(n)} proves everything, including G${sub(n)} and its negation.`}
            </div>
          </div>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 10 }}>
        <div>systems on the tower: {k + 1}; unproved Gödel sentences: {cons ? 1 : 0}</div>
        <div style={{ fontWeight: 700 }}>
          {cons
            ? `to see that G${sub(k)} is true, you must know F${sub(k)} is consistent, which is to reason in F${sub(k + 1)}`
            : "no Gödel sentence is unprovable here: the argument needs consistency as a premise"}
        </div>
      </div>
      <figcaption className="viz-caption">
        Lucas argued that for any machine, that is any formal system F, a human can see that its Gödel sentence is true while F
        cannot prove it, so the human is not that machine. But G is true only if F is consistent. Knowing that is exactly the
        extra axiom Con(F), and adding it gives a new system with a new Gödel sentence. The human who climbs the tower is
        always one step up, which shows nothing unless they can know, of their own system, that it is consistent.
      </figcaption>
    </figure>
  );
}
