"use client";

import { useState } from "react";

function perms(n: number): number[][] {
  if (n === 0) return [[]];
  const out: number[][] = [];
  for (const p of perms(n - 1)) for (let i = 0; i <= p.length; i++) out.push([...p.slice(0, i), n, ...p.slice(i)]);
  return out.sort((a, b) => a.join("").localeCompare(b.join("")));
}
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
/** Derangements by the recurrence D(n) = (n − 1)(D(n − 1) + D(n − 2)). */
export const derangements = (n: number): number => (n === 0 ? 1 : n === 1 ? 0 : (n - 1) * (derangements(n - 1) + derangements(n - 2)));

/** Permutations with no fixed point, and how their share tends to 1/e. */
export function DerangementViz() {
  const [n, setN] = useState(4);
  const show = n <= 4;
  const all = show ? perms(n) : [];
  const D = derangements(n);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="n">
        {[2, 3, 4, 5, 6, 7, 8].map((x) => <button key={x} type="button" aria-pressed={n === x} className={n === x ? "seg is-on" : "seg"} onClick={() => setN(x)}>n = {x}</button>)}
      </div>
      {show ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
          {all.map((p) => {
            const der = p.every((x, i) => x !== i + 1);
            return (
              <span key={p.join("")} className="mono" style={{ fontSize: 13, padding: "3px 7px", borderRadius: 4, border: "1px solid var(--accent)", background: der ? "var(--accent)" : "transparent", color: der ? "var(--bg)" : "var(--text-muted)" }}>
                {p.map((x, i) => <span key={i} style={{ textDecoration: !der && x === i + 1 ? "underline" : undefined }}>{x}</span>)}
              </span>
            );
          })}
        </div>
      ) : (
        <p className="mono" style={{ fontSize: 13, marginTop: 10 }}>Too many to list: {fact(n).toLocaleString("en-IN")} permutations.</p>
      )}
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        n! = {fact(n).toLocaleString("en-IN")}, derangements D({n}) = {D.toLocaleString("en-IN")}, n!/e = {(fact(n) / Math.E).toFixed(3)}.
        Share without a fixed point: {(D / fact(n)).toFixed(5)} (1/e = 0.36788).
      </p>
      <figcaption className="viz-caption">
        Each permutation is written in one line; filled ones move every item, and underlined digits are fixed points. The
        exponential generating function of derangements is e to the −x over (1 − x), and D(n) is always the integer nearest n!/e.
      </figcaption>
    </figure>
  );
}
