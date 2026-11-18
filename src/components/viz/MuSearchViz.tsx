"use client";

import { useState } from "react";

const FNS = [
  { name: "integer square root", rule: "μy [ (y + 1)² > x ]", test: (x: number, y: number) => (y + 1) * (y + 1) > x },
  { name: "half, if even", rule: "μy [ 2y = x ]", test: (x: number, y: number) => 2 * y === x },
];
const CAP = 14;

/** Minimisation: search y = 0, 1, 2, … for the first y passing a test; if none passes, the search never ends. */
export function MuSearchViz() {
  const [fi, setFi] = useState(0);
  const [x, setX] = useState(10);
  const F = FNS[fi];
  const tried: { y: number; ok: boolean }[] = [];
  let found: number | null = null;
  for (let y = 0; y < CAP; y++) {
    const ok = F.test(x, y);
    tried.push({ y, ok });
    if (ok) { found = y; break; }
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.name}</button>)}
      </div>
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
        <span className="mono" style={{ minWidth: 60 }}>x = {x}</span>
        <input type="range" min={0} max={20} step={1} value={x} onChange={(e) => setX(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <p className="mono" style={{ fontSize: 13 }}>f(x) = {F.rule}</p>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {tried.map((t) => (
          <div key={t.y} className="mono" style={{ padding: "4px 8px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 13, background: t.ok ? "var(--accent-soft)" : "transparent", color: t.ok ? "var(--accent)" : "var(--text-muted)", fontWeight: t.ok ? 700 : 400 }}>
            y={t.y} {t.ok ? "✓" : "✗"}
          </div>
        ))}
        {found === null && <div className="mono" style={{ padding: "4px 8px", color: "var(--danger)", fontSize: 13, fontWeight: 700 }}>… and on forever</div>}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        {found === null ? `No y passes, so f(${x}) is undefined: the search never halts.` : `f(${x}) = ${found}, after testing ${found + 1} values.`}
      </p>
      <figcaption className="viz-caption">
        Primitive recursion only uses loops whose length is fixed in advance, so it always halts. Minimisation adds an
        open-ended search. It brings in every computable function, and with them partial functions that are undefined
        where the search runs forever.
      </figcaption>
    </figure>
  );
}
