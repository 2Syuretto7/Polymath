"use client";

import { useState } from "react";

/** The Catalan number C(n − 1): the number of ways to bracket a product of n objects. */
export function bracketings(n: number): number {
  if (n <= 1) return 1;
  let s = 0;
  for (let k = 1; k < n; k++) s += bracketings(k) * bracketings(n - k);
  return s;
}

const PENT: [string, number, number][] = [
  ["((A ⊗ B) ⊗ C) ⊗ D", 270, 30],
  ["(A ⊗ B) ⊗ (C ⊗ D)", 450, 110],
  ["A ⊗ (B ⊗ (C ⊗ D))", 380, 200],
  ["A ⊗ ((B ⊗ C) ⊗ D)", 160, 200],
  ["(A ⊗ (B ⊗ C)) ⊗ D", 90, 110],
];
const EDGES: [number, number, string][] = [[0, 1, "α"], [1, 2, "α"], [0, 4, "α ⊗ 1"], [4, 3, "α"], [3, 2, "1 ⊗ α"]];

/** Mac Lane’s pentagon: the two ways of rebracketing four objects with associators must agree. */
export function BracketingViz() {
  const [n, setN] = useState(4);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="number of objects">
        {[3, 4, 5, 6].map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>n = {m}</button>)}
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="The bracketings of a product of objects joined by associator arrows" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {n === 3 && <>
          <rect x={60} y={95} width={150} height={30} rx={5} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
          <text x={135} y={115} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>(A ⊗ B) ⊗ C</text>
          <line x1={215} y1={110} x2={320} y2={110} style={{ stroke: "var(--text-muted)" }} markerEnd="url(#brk-arr)" />
          <text x={268} y={100} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>α</text>
          <rect x={330} y={95} width={150} height={30} rx={5} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
          <text x={405} y={115} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>A ⊗ (B ⊗ C)</text>
        </>}
        {n === 4 && <>
          {EDGES.map(([a, b, l]) => {
            const [, x1, y1] = PENT[a];
            const [, x2, y2] = PENT[b];
            return (
              <g key={`${a}-${b}`}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--text-muted)" }} />
                <text x={(x1 + x2) / 2 + (a === 0 && b === 4 ? -24 : 10)} y={(y1 + y2) / 2 - 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{l}</text>
              </g>
            );
          })}
          {PENT.map(([s, x, y]) => (
            <g key={s}>
              <rect x={x - 70} y={y - 13} width={140} height={26} rx={5} style={{ fill: "var(--surface)", stroke: "var(--accent)" }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11.5 }}>{s}</text>
            </g>
          ))}
        </>}
        {n > 4 && <>
          <text x={270} y={100} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 30, fontWeight: 700 }}>{bracketings(n)}</text>
          <text x={270} y={130} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>bracketings of {n} objects: the vertices of {n === 5 ? "a three-dimensional associahedron" : "a higher associahedron"}</text>
          <text x={270} y={155} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>every face commutes once the pentagon and the unit triangle do</text>
        </>}
        <defs>
          <marker id="brk-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        n = {n}: {bracketings(n)} ways to bracket a product of {n} objects.
      </p>
      <figcaption className="viz-caption">
        In a monoidal category the associator α rebrackets three objects. With four objects there are two routes around the
        pentagon from the left-most bracketing to the right-most; the pentagon axiom says they agree. Mac Lane&rsquo;s
        coherence theorem says that then all such diagrams commute, however many objects there are.
      </figcaption>
    </figure>
  );
}
