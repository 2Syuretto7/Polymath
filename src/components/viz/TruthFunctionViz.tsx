"use client";

import { useState } from "react";

type W = { p: boolean; q: boolean; r: boolean };
const ATOMS: { key: keyof W; text: string }[] = [
  { key: "p", text: "p: this patch is red" },
  { key: "q", text: "q: this patch is round" },
  { key: "r", text: "r: this patch is left of that one" },
];
const MOLECULES: { text: string; f: (w: W) => boolean }[] = [
  { text: "not p", f: (w) => !w.p },
  { text: "p and q", f: (w) => w.p && w.q },
  { text: "p or r", f: (w) => w.p || w.r },
  { text: "if q then r", f: (w) => !w.q || w.r },
  { text: "(p and q) or not r", f: (w) => (w.p && w.q) || !w.r },
  { text: "p if and only if q", f: (w) => w.p === w.q },
];

/** Logical atomism in miniature: fix the atomic facts and every molecular proposition is settled. */
export function TruthFunctionViz() {
  const [w, setW] = useState<W>({ p: true, q: false, r: true });
  const trueCount = MOLECULES.filter((m) => m.f(w)).length;
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>Choose which atomic facts obtain.</p>
      <div style={{ display: "grid", gap: 6 }}>
        {ATOMS.map((a) => (
          <div key={a.key} style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ minWidth: 230 }}>{a.text}</span>
            <div className="segmented" role="group" aria-label={a.text}>
              <button type="button" aria-pressed={w[a.key]} className={w[a.key] ? "seg is-on" : "seg"} onClick={() => setW({ ...w, [a.key]: true })}>obtains</button>
              <button type="button" aria-pressed={!w[a.key]} className={!w[a.key] ? "seg is-on" : "seg"} onClick={() => setW({ ...w, [a.key]: false })}>does not</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gap: 4, marginTop: 12 }}>
        {MOLECULES.map((m) => {
          const v = m.f(w);
          return (
            <div key={m.text} style={{ display: "flex", justifyContent: "space-between", padding: "4px 10px", borderRadius: 6, background: v ? "var(--accent-soft)" : "transparent", border: "1px solid var(--border)" }}>
              <span>{m.text}</span>
              <span className="mono" style={{ fontWeight: 700 }}>{v ? "true" : "false"}</span>
            </div>
          );
        })}
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8, fontWeight: 700 }}>molecular propositions true: {trueCount} of {MOLECULES.length}</div>
      <figcaption className="viz-caption">
        For Russell and the early Wittgenstein, the world is the totality of atomic facts, and every complex proposition is a
        truth function of atomic ones: once the atomic facts are fixed, nothing more is needed to settle whether a
        molecular proposition is true. Russell doubted that the same holds for general propositions such as &ldquo;all
        patches are red&rdquo;, which seem to need an extra fact saying that the listed patches are all there are.
      </figcaption>
    </figure>
  );
}
