"use client";

import { useState } from "react";

type G = boolean[][];
type Claim = { name: string; prem: { s: string; f: (E: G, D: number[]) => boolean }[]; concl: { s: string; f: (E: G, D: number[]) => boolean } };
const all = (D: number[], p: (x: number) => boolean) => D.every(p);
const some = (D: number[], p: (x: number) => boolean) => D.some(p);
const CLAIMS: Claim[] = [
  {
    name: "∀∃ to ∃∀",
    prem: [{ s: "∀x ∃y Exy", f: (E, D) => all(D, (x) => some(D, (y) => E[x][y])) }],
    concl: { s: "∃y ∀x Exy", f: (E, D) => some(D, (y) => all(D, (x) => E[x][y])) },
  },
  {
    name: "∃∀ to ∀∃",
    prem: [{ s: "∃y ∀x Exy", f: (E, D) => some(D, (y) => all(D, (x) => E[x][y])) }],
    concl: { s: "∀x ∃y Exy", f: (E, D) => all(D, (x) => some(D, (y) => E[x][y])) },
  },
  {
    name: "symmetric to reflexive",
    prem: [{ s: "∀x ∀y (Exy → Eyx)", f: (E, D) => all(D, (x) => all(D, (y) => !E[x][y] || E[y][x])) }],
    concl: { s: "∀x Exx", f: (E, D) => all(D, (x) => E[x][x]) },
  },
  {
    name: "strict order is asymmetric",
    prem: [
      { s: "∀x ¬Exx", f: (E, D) => all(D, (x) => !E[x][x]) },
      { s: "∀x∀y∀z ((Exy ∧ Eyz) → Exz)", f: (E, D) => all(D, (x) => all(D, (y) => all(D, (z) => !(E[x][y] && E[y][z]) || E[x][z]))) },
    ],
    concl: { s: "∀x∀y (Exy → ¬Eyx)", f: (E, D) => all(D, (x) => all(D, (y) => !E[x][y] || !E[y][x])) },
  },
];

/** Search every structure with 1, 2 or 3 elements for one making the premises true and the conclusion false. */
export function findCountermodel(c: Claim): { D: number[]; E: G; searched: number } | { D: null; searched: number } {
  let searched = 0;
  for (let n = 1; n <= 3; n++) {
    const D = Array.from({ length: n }, (_, i) => i);
    for (let m = 0; m < 1 << (n * n); m++) {
      searched++;
      const E = D.map((i) => D.map((j) => ((m >> (i * n + j)) & 1) === 1));
      if (c.prem.every((p) => p.f(E, D)) && !c.concl.f(E, D)) return { D, E, searched };
    }
  }
  return { D: null, searched };
}

const DERIV: Record<number, string> = {
  1: "Proof sketch: take y with ∀x Exy; for any x, Exy holds, so ∃y Exy. Generalise on x.",
  3: "Proof sketch: suppose Exy and Eyx. Transitivity gives Exx, contradicting ∀x ¬Exx. So Exy → ¬Eyx; generalise.",
};

/** Either a deduction exists or a countermodel does: the completeness theorem as a dichotomy. */
export function CountermodelViz() {
  const [ci, setCi] = useState(0);
  const c = CLAIMS[ci];
  const r = findCountermodel(c);
  const P = [[60, 40], [180, 40], [120, 130]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="claim">
        {CLAIMS.map((cl, i) => <button key={cl.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{cl.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 14, margin: "8px 0" }}>{c.prem.map((p) => p.s).join(", ")} ⊨ {c.concl.s} ?</p>
      {r.D ? (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <svg viewBox="0 0 240 170" role="img" aria-label="A countermodel" style={{ width: 240, maxWidth: "100%", display: "block" }}>
            <defs><marker id="cm-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--danger)" }} /></marker></defs>
            {r.D.flatMap((i) => r.D!.map((j) => {
              if (!r.E[i][j]) return null;
              const [x1, y1] = P[i], [x2, y2] = P[j];
              if (i === j) return <circle key={`${i}${j}`} cx={x1 - 20} cy={y1 - 14} r={11} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />;
              const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ox = (-dy / L) * 5, oy = (dx / L) * 5;
              return <line key={`${i}${j}`} x1={x1 + (dx / L) * 17 + ox} y1={y1 + (dy / L) * 17 + oy} x2={x2 - (dx / L) * 17 + ox} y2={y2 - (dy / L) * 17 + oy} markerEnd="url(#cm-arrow)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />;
            }))}
            {r.D.map((i) => (
              <g key={i}>
                <circle cx={P[i][0]} cy={P[i][1]} r={15} style={{ fill: "var(--bg)", stroke: "var(--text)" }} />
                <text x={P[i][0]} y={P[i][1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{i}</text>
              </g>
            ))}
          </svg>
          <div className="mono" style={{ fontSize: 13, display: "grid", gap: 4 }}>
            <div style={{ fontWeight: 700, color: "var(--danger)" }}>Countermodel found with {r.D.length} element{r.D.length > 1 ? "s" : ""}.</div>
            <div>The premises are true here and the conclusion is false.</div>
            <div>So the conclusion does not follow, and by soundness no deduction exists.</div>
            <div style={{ color: "var(--text-muted)" }}>structures checked: {r.searched}</div>
          </div>
        </div>
      ) : (
        <div className="mono" style={{ fontSize: 13, display: "grid", gap: 4 }}>
          <div style={{ fontWeight: 700, color: "var(--accent)" }}>No countermodel among all {r.searched} structures with at most 3 elements.</div>
          <div>That alone proves nothing about larger structures. But here the conclusion does follow, and so, by completeness, a deduction exists.</div>
          <div>{DERIV[ci]}</div>
        </div>
      )}
      <figcaption className="viz-caption">
        For each claim, either some structure makes the premises true and the conclusion false, or every model of the
        premises satisfies the conclusion. Completeness says that in the second case there is always a deduction. A search
        through small structures can find countermodels but can never by itself establish validity.
      </figcaption>
    </figure>
  );
}
