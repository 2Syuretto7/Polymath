"use client";

import { useState } from "react";
import { COVERS, deck, inv } from "./coverData";
import { CoverGraphView } from "./CoverGraphView";

type L = "a" | "A" | "b" | "B";
const SHOW: Record<L, string> = { a: "a", A: "a⁻¹", b: "b", B: "b⁻¹" };

/** Covers of the figure eight correspond to subgroups of F(a, b): the words whose lifts from sheet 0 close up. */
export function CoverWordViz() {
  const [k, setK] = useState(4);
  const [w, setW] = useState<L[]>(["a", "a"]);
  const C = COVERS[k];
  const n = C.a.length;
  const ia = inv(C.a), ib = inv(C.b);
  let v = 0;
  const path: [number, number, "a" | "b"][] = [];
  for (const l of w) {
    const nx = l === "a" ? C.a[v] : l === "A" ? ia[v] : l === "b" ? C.b[v] : ib[v];
    path.push(l === "a" || l === "b" ? [v, nx, l] : [nx, v, l.toLowerCase() as "a" | "b"]);
    v = nx;
  }
  const normal = deck(C).length === n;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="cover">
        {COVERS.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.name}</button>)}
      </div>
      <div className="viz-controls">
        {(["a", "A", "b", "B"] as L[]).map((l) => <button key={l} type="button" className="btn btn-ghost" onClick={() => setW([...w, l])}>append {SHOW[l]}</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setW([])}>clear</button>
      </div>
      <CoverGraphView c={C} highlight={v} path={path} />
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Word {w.length ? w.map((l) => SHOW[l]).join("") : "(empty)"}: from sheet 0 the lift ends at sheet {v}. {v === 0 ? "It closes up, so the word lies in the subgroup H of this cover." : "It does not close up, so the word is not in H."}
      </p>
      <p className="mono" style={{ fontSize: 13 }}>
        {n} sheets, so H has index {n} in F(a, b). {normal ? "H is normal: the cover looks the same from every sheet." : "H is not normal: starting from another sheet gives a different, conjugate subgroup."}
      </p>
      <figcaption className="viz-caption">
        Purple edges lift a, green edges lift b; each sheet has exactly one of each leaving and arriving. Every such graph
        is a cover of the figure eight, and the words whose lifts close up form the subgroup that classifies it.
      </figcaption>
    </figure>
  );
}
