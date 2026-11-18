"use client";

import { useState } from "react";

// A world of the (finite fragment of the) canonical model: which of p, q, □p, □q it contains.
type Wd = [boolean, boolean, boolean, boolean];
const ALL: Wd[] = Array.from({ length: 16 }, (_, i) => [!!(i & 8), !!(i & 4), !!(i & 2), !!(i & 1)]);
const show = (w: Wd) => [w[0] ? "p" : "¬p", w[1] ? "q" : "¬q", w[2] ? "□p" : "¬□p", w[3] ? "□q" : "¬□q"].join(", ");

/** The canonical relation: w sees v when every φ with □φ in w lies in v. Shown for the fragment p, q, □p, □q. */
export function CanonicalRelViz() {
  const [w, setW] = useState<Wd>([false, true, true, false]);
  const [logic, setLogic] = useState<"K" | "T">("K");
  const consistent = (x: Wd) => logic === "K" || ((!x[2] || x[0]) && (!x[3] || x[1]));
  const sees = (a: Wd, b: Wd) => (!a[2] || b[0]) && (!a[3] || b[1]);
  const ok = consistent(w);
  const worlds = ALL.filter(consistent);
  const acc = worlds.filter((v) => sees(w, v));
  const boxP = acc.every((v) => v[0]);
  const lemma = boxP === w[2] && acc.every((v) => v[1]) === w[3];
  const labels = ["p", "q", "□p", "□q"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="logic">
        {(["K", "T"] as const).map((l) => <button key={l} type="button" aria-pressed={logic === l} className={logic === l ? "seg is-on" : "seg"} onClick={() => setLogic(l)}>logic {l}</button>)}
      </div>
      <div className="viz-controls">
        <span style={{ fontSize: 13 }}>world w contains:</span>
        {labels.map((s, i) => <button key={s} type="button" aria-pressed={w[i]} className={w[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setW(w.map((x, j) => (j === i ? !x : x)) as Wd)}>{s}</button>)}
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="All worlds of the fragment, with those w can see highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ALL.map((v, i) => {
          const c = consistent(v), s = ok && c && sees(w, v);
          return (
            <g key={i}>
              <rect x={10 + (i % 8) * 63} y={8 + Math.floor(i / 8) * 54} width={58} height={46} rx={5} style={{ fill: !c ? "transparent" : s ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: s ? "var(--accent)" : "var(--border)", strokeDasharray: c ? undefined : "3 3" }} />
              {labels.map((l, j) => <text key={l} x={14 + (i % 8) * 63 + (j % 2) * 28} y={24 + Math.floor(i / 8) * 54 + Math.floor(j / 2) * 18} style={{ fill: !c ? "var(--text-faint)" : v[j] ? "var(--text)" : "var(--text-faint)", fontSize: 10, textDecoration: v[j] ? undefined : "line-through" }}>{l}</text>)}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {ok
          ? `w = {${show(w)}} sees ${acc.length} of ${worlds.length} worlds. Truth lemma for □p and □q: ${lemma ? "holds" : "fails"}.${logic === "T" ? ` w sees itself: ${sees(w, w) ? "yes" : "no"}.` : ""}`
          : "This set is inconsistent in T, which proves □p → p and □q → q, so it is not a world of the canonical model for T."}
      </p>
      <figcaption className="viz-caption">
        Here a world records only p, q, □p and □q, and struck-out letters are false. The canonical relation lets w see v
        exactly when v contains every φ with □φ in w. Then □p is in w exactly when p holds at every world w sees: the truth
        lemma. In T every world contains □p → p, so the canonical relation is reflexive.
      </figcaption>
    </figure>
  );
}
