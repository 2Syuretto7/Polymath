"use client";

import { useState } from "react";

type G = { name: string; el: string[] };
const Z = (n: number): G => ({ name: `ℤ/${n}`, el: Array.from({ length: n }, (_, i) => String(i)) });
const V4: G = { name: "ℤ/2 ⊕ ℤ/2", el: ["(0,0)", "(1,0)", "(0,1)", "(1,1)"] };
const SEQS: { label: string; A: G; B: G; C: G; f: number[]; g: number[]; fl: string; gl: string; split: string }[] = [
  { label: "ℤ/2 → ℤ/4 → ℤ/2", A: Z(2), B: Z(4), C: Z(2), f: [0, 2], g: [0, 1, 0, 1], fl: "times 2", gl: "mod 2", split: "Exact but not split: ℤ/4 is not ℤ/2 ⊕ ℤ/2, since it has an element of order 4." },
  { label: "ℤ/2 → ℤ/2 ⊕ ℤ/2 → ℤ/2", A: Z(2), B: V4, C: Z(2), f: [0, 1], g: [0, 0, 1, 1], fl: "a to (a, 0)", gl: "(a, b) to b", split: "Exact and split: the middle term is the direct sum of the ends." },
  { label: "ℤ/3 → ℤ/6 → ℤ/2", A: Z(3), B: Z(6), C: Z(2), f: [0, 2, 4], g: [0, 1, 0, 1, 0, 1], fl: "times 2", gl: "mod 2", split: "Exact and split: ℤ/6 ≅ ℤ/3 ⊕ ℤ/2, since 2 and 3 are coprime." },
  { label: "ℤ/2 → ℤ/4 → ℤ/4", A: Z(2), B: Z(4), C: Z(4), f: [0, 2], g: [0, 2, 0, 2], fl: "times 2", gl: "times 2", split: "Not a short exact sequence, so the question of splitting does not arise." },
];
const set = (xs: number[]) => Array.from(new Set(xs)).sort((a, b) => a - b);
const same = (a: number[], b: number[]) => a.length === b.length && a.every((x, i) => x === b[i]);

/** Exactness checked element by element: at each spot, image of the incoming map = kernel of the outgoing one. */
export function ExactSeqViz() {
  const [k, setK] = useState(0);
  const S = SEQS[k];
  const kerF = S.f.map((t, i) => (t === 0 ? i : -1)).filter((i) => i >= 0);
  const imF = set(S.f), kerG = S.g.map((t, i) => (t === 0 ? i : -1)).filter((i) => i >= 0), imG = set(S.g);
  const allC = S.C.el.map((_, i) => i);
  const checks = [
    { at: S.A.name, ok: same(kerF, [0]), text: `kernel of the first map is {${kerF.map((i) => S.A.el[i]).join(", ")}}; it should be {0}, the image of 0 → ${S.A.name}` },
    { at: S.B.name, ok: same(imF, kerG), text: `image {${imF.map((i) => S.B.el[i]).join(", ")}}, kernel {${kerG.map((i) => S.B.el[i]).join(", ")}}` },
    { at: S.C.name, ok: same(imG, allC), text: `image {${imG.map((i) => S.C.el[i]).join(", ")}}; it should be all of ${S.C.name}, the kernel of ${S.C.name} → 0` },
  ];
  const cols = [S.A, S.B, S.C];
  const X = [110, 260, 410];
  const Y = (j: number, n: number) => 40 + j * (n > 4 ? 22 : 30);
  const exact = checks.every((c) => c.ok);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sequence">
        {SEQS.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>0 → {s.label} → 0</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Elements of three groups and the maps between them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {cols.map((c, ci) => <text key={ci} x={X[ci]} y={20} textAnchor="middle" style={{ fill: checks[ci].ok ? "var(--text)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>{c.name}</text>)}
        <text x={185} y={182} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{S.fl}</text>
        <text x={335} y={182} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{S.gl}</text>
        {S.f.map((t, i) => <line key={`f${i}`} x1={X[0] + 22} y1={Y(i, S.A.el.length)} x2={X[1] - 26} y2={Y(t, S.B.el.length)} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
        {S.g.map((t, i) => <line key={`g${i}`} x1={X[1] + 26} y1={Y(i, S.B.el.length)} x2={X[2] - 22} y2={Y(t, S.C.el.length)} style={{ stroke: kerG.includes(i) ? "var(--accent)" : "var(--text-faint)", strokeWidth: 1.5 }} />)}
        {cols.map((c, ci) => c.el.map((e, j) => {
          const hit = ci === 1 && imF.includes(j);
          return (
            <g key={`${ci}-${j}`}>
              <rect x={X[ci] - 22} y={Y(j, c.el.length) - 9} width={44} height={18} rx={4} style={{ fill: hit ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: hit ? "var(--accent)" : "var(--border)" }} />
              <text x={X[ci]} y={Y(j, c.el.length) + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{e}</text>
            </g>
          );
        }))}
      </svg>
      <ol className="mono" style={{ fontSize: 13, paddingLeft: 22, margin: "4px 0" }}>
        {checks.map((c) => <li key={c.at} style={{ color: c.ok ? "var(--text)" : "var(--danger)" }}>At {c.at}: {c.text}. {c.ok ? "Exact." : "Not exact."}</li>)}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{exact ? "Short exact." : "Not short exact."} {S.split}</p>
      <figcaption className="viz-caption">
        Shaded boxes in the middle form the image of the first map; accent lines on the right leave the kernel of the second.
        A sequence is exact at a spot when these coincide: what arrives is exactly what dies next.
      </figcaption>
    </figure>
  );
}
