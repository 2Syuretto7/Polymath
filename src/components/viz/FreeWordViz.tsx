"use client";

import { useState } from "react";

type L = { g: "a" | "b"; e: 1 | -1 };
const show = (w: L[]) => (w.length ? w.map((l) => (l.e === 1 ? l.g : `${l.g}⁻¹`)).join(" ") : "1");
const reduce = (w: L[]) => {
  const out: L[] = [];
  for (const l of w) { const t = out[out.length - 1]; if (t && t.g === l.g && t.e === -l.e) out.pop(); else out.push(l); }
  return out;
};
const sup = (n: number) => String(n).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)] ?? (c === "-" ? "⁻" : c)).join("");

/** Loops in the figure eight and in the torus: van Kampen gives the free group on a, b, and adding the relation aba⁻¹b⁻¹ = 1 gives ℤ². */
export function FreeWordViz() {
  const [w, setW] = useState<L[]>([{ g: "a", e: 1 }, { g: "b", e: 1 }, { g: "a", e: -1 }]);
  const [torus, setTorus] = useState(false);
  const r = reduce(w);
  const m = w.filter((l) => l.g === "a").reduce((s, l) => s + l.e, 0), n = w.filter((l) => l.g === "b").reduce((s, l) => s + l.e, 0);
  const torusForm = m === 0 && n === 0 ? "1" : `${m ? `a${m === 1 ? "" : sup(m)}` : ""}${m && n ? " " : ""}${n ? `b${n === 1 ? "" : sup(n)}` : ""}`;
  const add = (g: "a" | "b", e: 1 | -1) => setW([...w, { g, e }]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Space">
        <button type="button" aria-pressed={!torus} className={!torus ? "seg is-on" : "seg"} onClick={() => setTorus(false)}>figure eight</button>
        <button type="button" aria-pressed={torus} className={torus ? "seg is-on" : "seg"} onClick={() => setTorus(true)}>torus</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {(["a", "b"] as const).map((g) => [1, -1].map((e) => (
          <button key={g + e} type="button" className="btn" onClick={() => add(g, e as 1 | -1)}>append {e === 1 ? g : `${g}⁻¹`}</button>
        )))}
        <button type="button" className="btn btn-ghost" onClick={() => setW([])}>clear</button>
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="The figure eight, two circles a and b joined at the base point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={200} cy={65} r={50} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={320} cy={65} r={50} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
        <circle cx={260} cy={65} r={6} style={{ fill: "var(--text)" }} />
        <text x={140} y={70} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 14 }}>a</text>
        <text x={380} y={70} style={{ fill: "var(--text)", fontSize: 14 }}>b</text>
        {torus && <text x={260} y={124} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>plus a disc glued along a b a⁻¹ b⁻¹</text>}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>loop as typed: {show(w)}</div>
        <div>{torus ? `in π₁ of the torus: ${torusForm}` : `reduced word in the free group: ${show(r)}`}</div>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {torus
          ? m === 0 && n === 0 ? "this loop is trivial in the torus" : `this loop is ${torusForm} up to homotopy: only the totals of each letter count`
          : r.length === 0 ? "this loop shrinks to the base point" : "only cancelling neighbours like a a⁻¹ can be removed, so this loop is not trivial"}
      </p>
      <figcaption className="viz-caption">
        Each letter records a trip round one of the circles. In the figure eight, van Kampen&rsquo;s theorem says the only
        simplifications come from cancelling a letter against its inverse next to it, so a b and b a are different loops. Glue
        a disc along a b a⁻¹ b⁻¹ to get the torus, and that word becomes trivial, so a and b commute.
      </figcaption>
    </figure>
  );
}
