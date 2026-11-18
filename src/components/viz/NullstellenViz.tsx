"use client";

import { useState } from "react";

type Root = [number, number, number]; // real part, imaginary part, multiplicity
const CASES: { label: string; roots: Root[]; rad: string }[] = [
  { label: "(x − 1)²(x + 2)", roots: [[1, 0, 2], [-2, 0, 1]], rad: "(x − 1)(x + 2)" },
  { label: "x³", roots: [[0, 0, 3]], rad: "x" },
  { label: "x² + 1", roots: [[0, 1, 1], [0, -1, 1]], rad: "x² + 1" },
  { label: "(x² + 1)²(x − 2)", roots: [[0, 1, 2], [0, -1, 2], [2, 0, 1]], rad: "(x² + 1)(x − 2)" },
  { label: "1", roots: [], rad: "1" },
];
const lin = (a: number) => (a === 0 ? "x" : a > 0 ? `(x − ${a})` : `(x + ${-a})`);
const pt = ([a, b]: Root) => (b === 0 ? `${a}` : b > 0 ? "i" : "−i");

/** Zeros of a polynomial, and the ideal of everything vanishing there, over ℝ and over ℂ. */
export function NullstellenViz() {
  const [k, setK] = useState(0);
  const [field, setField] = useState<"C" | "R">("C");
  const C = CASES[k];
  const V = C.roots.filter((r) => field === "C" || r[1] === 0);
  const allSeen = V.length === C.roots.length;
  const gen = V.length === 0 ? "1" : allSeen ? C.rad : V.map((r) => lin(r[0])).join("");
  const X = (a: number) => 260 + a * 60, Y = (b: number) => 80 - b * 50;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="polynomial">
        {CASES.map((c, i) => <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>f = {c.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="field" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={field === "C"} className={field === "C" ? "seg is-on" : "seg"} onClick={() => setField("C")}>over ℂ</button>
        <button type="button" aria-pressed={field === "R"} className={field === "R" ? "seg is-on" : "seg"} onClick={() => setField("R")}>over ℝ</button>
      </div>
      <svg viewBox="0 0 520 160" role="img" aria-label="Zeros of f in the plane" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {field === "C" && <line x1={X(0)} y1={10} x2={X(0)} y2={150} style={{ stroke: "var(--border)" }} />}
        <line x1={40} y1={Y(0)} x2={480} y2={Y(0)} style={{ stroke: field === "R" ? "var(--text-muted)" : "var(--border)", strokeWidth: field === "R" ? 2 : 1 }} />
        {[-3, -2, -1, 0, 1, 2, 3].map((a) => <text key={a} x={X(a)} y={Y(0) + 16} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{a}</text>)}
        {field === "C" && <text x={X(0) + 6} y={20} style={{ fill: "var(--text-faint)", fontSize: 10 }}>imaginary axis</text>}
        {C.roots.map((r, i) => {
          const on = field === "C" || r[1] === 0;
          return (
            <g key={i}>
              <circle cx={X(r[0])} cy={Y(r[1])} r={5 + 3 * r[2]} style={{ fill: on ? "var(--accent-soft)" : "none", stroke: on ? "var(--accent)" : "var(--text-faint)", strokeWidth: 2, strokeDasharray: on ? undefined : "3 3" }} />
              <text x={X(r[0]) + 14 + 3 * r[2]} y={Y(r[1]) - 6} style={{ fill: on ? "var(--accent)" : "var(--text-faint)", fontSize: 11 }}>{pt(r)}{r[2] > 1 ? `, multiplicity ${r[2]}` : ""}{on ? "" : " (not in ℝ)"}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        V(f) = {V.length ? "{" + V.map(pt).join(", ") + "}" : "∅"}. I(V(f)) = ({gen}){gen === "1" ? ", the whole ring" : ""}. The radical of (f) is ({C.rad}).{" "}
        {gen === C.rad ? "They agree: I(V(f)) is the radical." : "They differ: over ℝ the zeros are too few to recover the ideal."}
      </p>
      <figcaption className="viz-caption">
        The circle&rsquo;s size shows multiplicity. Vanishing on a set forgets multiplicity, so the best one can hope to recover
        from V(f) is the radical. Over ℂ that hope is met; over ℝ, x² + 1 has no zeros at all, yet (x² + 1) is not the whole
        ring.
      </figcaption>
    </figure>
  );
}
