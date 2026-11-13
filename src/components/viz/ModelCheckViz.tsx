"use client";

import { useState } from "react";

const D = [0, 1, 2];
const NAMES = ["a", "b", "c"];
type St = { R: boolean[][]; P: boolean[] };
const SENTS: { s: string; f: (m: St) => boolean }[] = [
  { s: "∀x ∃y Rxy", f: ({ R }) => D.every((x) => D.some((y) => R[x][y])) },
  { s: "∃x ∀y Rxy", f: ({ R }) => D.some((x) => D.every((y) => R[x][y])) },
  { s: "∀x Rxx", f: ({ R }) => D.every((x) => R[x][x]) },
  { s: "∀x ∀y (Rxy → Ryx)", f: ({ R }) => D.every((x) => D.every((y) => !R[x][y] || R[y][x])) },
  { s: "∃x (Px ∧ ¬Rxx)", f: ({ R, P }) => D.some((x) => P[x] && !R[x][x]) },
  { s: "∀x (Px → ∃y (Rxy ∧ ¬Py))", f: ({ R, P }) => D.every((x) => !P[x] || D.some((y) => R[x][y] && !P[y])) },
];
const POS = [[110, 40], [50, 150], [170, 150]];

/** A three-element structure: change the relation and the property, and see which sentences come out true. */
export function ModelCheckViz() {
  const [R, setR] = useState<boolean[][]>([[false, true, false], [false, false, true], [true, false, false]]);
  const [P, setP] = useState<boolean[]>([true, false, false]);
  const m = { R, P };
  const flip = (x: number, y: number) => setR(R.map((row, i) => row.map((v, j) => (i === x && j === y ? !v : v))));
  const arrow = (x: number, y: number) => {
    const [x1, y1] = POS[x], [x2, y2] = POS[y];
    if (x === y) return <circle key={`${x}${y}`} cx={x1} cy={y1 - 26} r={11} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />;
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
    const ox = -uy * 5, oy = ux * 5;
    const sx = x1 + ux * 20 + ox, sy = y1 + uy * 20 + oy, ex = x2 - ux * 20 + ox, ey = y2 - uy * 20 + oy;
    return (
      <g key={`${x}${y}`}>
        <line x1={sx} y1={sy} x2={ex} y2={ey} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <polygon points={`${ex},${ey} ${ex - ux * 9 - uy * 5},${ey - uy * 9 + ux * 5} ${ex - ux * 9 + uy * 5},${ey - uy * 9 - ux * 5}`} style={{ fill: "var(--accent)" }} />
      </g>
    );
  };
  return (
    <figure className="viz">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start" }}>
        <svg viewBox="0 0 220 190" role="img" aria-label="A structure with three elements and a relation R" style={{ width: 220, maxWidth: "100%" }}>
          {D.flatMap((x) => D.filter((y) => R[x][y]).map((y) => arrow(x, y)))}
          {D.map((x) => (
            <g key={x}>
              <circle cx={POS[x][0]} cy={POS[x][1]} r={16} style={{ fill: P[x] ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--text)", strokeWidth: P[x] ? 3 : 1.5 }} />
              <text x={POS[x][0]} y={POS[x][1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{NAMES[x]}</text>
            </g>
          ))}
        </svg>
        <div className="mono" style={{ fontSize: 13, display: "grid", gap: 6 }}>
          <div>R (click to toggle):</div>
          {D.map((x) => (
            <div key={x} style={{ display: "flex", gap: 4 }}>
              {D.map((y) => <button key={y} type="button" aria-pressed={R[x][y]} className={R[x][y] ? "seg is-on" : "seg"} onClick={() => flip(x, y)}>R{NAMES[x]}{NAMES[y]}</button>)}
            </div>
          ))}
          <div style={{ marginTop: 4 }}>P (thick circles):</div>
          <div style={{ display: "flex", gap: 4 }}>
            {D.map((x) => <button key={x} type="button" aria-pressed={P[x]} className={P[x] ? "seg is-on" : "seg"} onClick={() => setP(P.map((v, i) => (i === x ? !v : v)))}>P{NAMES[x]}</button>)}
          </div>
        </div>
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 10 }}>
        {SENTS.map((s) => {
          const v = s.f(m);
          return <div key={s.s} style={{ fontWeight: v ? 700 : 400, color: v ? "var(--text)" : "var(--text-muted)", whiteSpace: "pre" }}>{`${v ? "true " : "false"}  ${s.s}`}</div>;
        })}
      </div>
      <figcaption className="viz-caption">
        A first-order structure is a domain with an interpretation of each predicate. Here the domain is {"{a, b, c}"}, R is
        drawn as arrows and P as thick circles. A sentence is true in the structure when the quantifiers, read as ranging over
        the domain, make it so. Soundness and completeness say that Γ ⊢ φ exactly when φ is true in every structure in which
        all of Γ is true.
      </figcaption>
    </figure>
  );
}
