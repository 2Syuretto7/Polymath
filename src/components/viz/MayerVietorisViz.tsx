"use client";

import { useId, useState } from "react";

type Ex = { name: string; shape: "circle" | "sphere" | "torus" | "wedge" | "klein"; pieces: string; rows: Record<number, [string, string, string]>; why: string };

const EXS: Ex[] = [
  { name: "circle", shape: "circle", pieces: "A, B: two arcs. A ∩ B: two small arcs.", rows: { 1: ["0", "0", "ℤ"], 0: ["ℤ²", "ℤ²", "ℤ"] }, why: "H₁ of the circle is the kernel of ℤ² → ℤ² in degree 0, (x, y) ↦ (x + y, −x − y): the two overlap pieces counted with opposite signs. That kernel is ℤ." },
  { name: "sphere", shape: "sphere", pieces: "A, B: two discs. A ∩ B: a band round the equator, a circle up to homotopy.", rows: { 2: ["0", "0", "ℤ"], 1: ["ℤ", "0", "0"], 0: ["ℤ", "ℤ²", "ℤ"] }, why: "The discs have no H₁ or H₂, so ∂: H₂(S²) → H₁(A ∩ B) = ℤ is an isomorphism. The equator bounds on both sides." },
  { name: "torus", shape: "torus", pieces: "A, B: two cylinders. A ∩ B: two cylinders, two circles up to homotopy.", rows: { 2: ["0", "0", "ℤ"], 1: ["ℤ²", "ℤ²", "ℤ²"], 0: ["ℤ²", "ℤ²", "ℤ"] }, why: "In degree 1, ℤ² → ℤ² sends both overlap circles to the core of each cylinder, so it has rank 1. H₂ is its kernel, ℤ. H₁ gets ℤ from its cokernel and ℤ from the kernel in degree 0: ℤ²." },
  { name: "figure eight", shape: "wedge", pieces: "A, B: each circle with a little of the other. A ∩ B: a small cross, contractible.", rows: { 1: ["0", "ℤ²", "ℤ²"], 0: ["ℤ", "ℤ²", "ℤ"] }, why: "The overlap is contractible, so in positive degrees the homology of the union is the direct sum: H₁ = ℤ ⊕ ℤ." },
  { name: "Klein bottle", shape: "klein", pieces: "A, B: two Möbius bands. A ∩ B: an annulus whose core wraps twice round each band.", rows: { 2: ["0", "0", "0"], 1: ["ℤ", "ℤ²", "ℤ ⊕ ℤ/2"], 0: ["ℤ", "ℤ²", "ℤ"] }, why: "In degree 1 the map is x ↦ (2x, −2x), which is injective, so H₂ = 0, and H₁ = ℤ²/⟨(2, −2)⟩ ≅ ℤ ⊕ ℤ/2. Torsion appears from a map that multiplies by 2." },
];

const SUB = "₀₁₂";

/** The Mayer–Vietoris sequence for five spaces, each cut into two open pieces A and B. */
export function MayerVietorisViz() {
  const [k, setK] = useState(0);
  const uid = useId().replace(/:/g, "");
  const e = EXS[k];
  const cx = 110, cy = 95;
  const degs = Object.keys(e.rows).map(Number).sort((a, b) => b - a);
  const clipA = `${uid}a`, clipB = `${uid}b`;
  const vertical = e.shape === "circle" || e.shape === "sphere" || e.shape === "klein";
  const body = (() => {
    if (e.shape === "circle") return <circle cx={cx} cy={cy} r={60} style={{ fill: "none", strokeWidth: 14 }} />;
    if (e.shape === "sphere") return <circle cx={cx} cy={cy} r={62} />;
    if (e.shape === "torus") return <ellipse cx={cx} cy={cy} rx={78} ry={52} style={{ fill: "none", strokeWidth: 26 }} />;
    if (e.shape === "wedge") return <g style={{ fill: "none", strokeWidth: 12 }}><circle cx={cx - 42} cy={cy} r={42} /><circle cx={cx + 42} cy={cy} r={42} /></g>;
    return <rect x={cx - 70} y={cy - 60} width={140} height={120} />;
  })();
  const piece = (clip: string, col: string) => <g clipPath={`url(#${clip})`} style={{ fill: col, stroke: col, opacity: 0.55 }}>{body}</g>;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        {EXS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A space cut into two open pieces" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <clipPath id={clipA}>{vertical ? <rect x={0} y={0} width={240} height={cy + 14} /> : <rect x={0} y={0} width={cx + 14} height={190} />}</clipPath>
          <clipPath id={clipB}>{vertical ? <rect x={0} y={cy - 14} width={240} height={190} /> : <rect x={cx - 14} y={0} width={240} height={190} />}</clipPath>
        </defs>
        {piece(clipA, "var(--accent)")}
        {piece(clipB, "var(--success)")}
        {e.shape === "klein" && (
          <g style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }}>
            <rect x={cx - 70} y={cy - 60} width={140} height={120} />
            <path d={`M ${cx - 6} ${cy - 66} l 10 6 l -10 6`} /><path d={`M ${cx - 6} ${cy + 54} l 10 6 l -10 6`} />
            <path d={`M ${cx - 76} ${cy - 4} l 6 -10 l 6 10`} /><path d={`M ${cx + 64} ${cy + 4} l 6 10 l 6 -10`} />
          </g>
        )}
        <text x={vertical ? cx + 92 : cx - 70} y={vertical ? cy - 40 : 182} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>A</text>
        <text x={vertical ? cx + 92 : cx + 62} y={vertical ? cy + 50 : 182} style={{ fill: "var(--success)", fontSize: 13, fontWeight: 700 }}>B</text>
        <foreignObject x={250} y={20} width={260} height={160}>
          <p style={{ margin: 0, fontSize: 12, color: "var(--text)", lineHeight: 1.5 }}>{e.pieces}</p>
          <p style={{ margin: "8px 0 0", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>The overlap is where the two colours mix.</p>
        </foreignObject>
      </svg>
      <div className="mono" style={{ fontSize: 13, margin: "6px 0", lineHeight: 2 }}>
        {degs.map((n) => (
          <div key={n}>
            H{SUB[n]}(A ∩ B) <b style={{ color: "var(--accent)" }}>{e.rows[n][0]}</b> → H{SUB[n]}(A) ⊕ H{SUB[n]}(B) <b style={{ color: "var(--accent)" }}>{e.rows[n][1]}</b> → H{SUB[n]}(X) <b style={{ color: "var(--accent)" }}>{e.rows[n][2]}</b>{n > 0 ? <span style={{ color: "var(--text-muted)" }}> →∂</span> : " → 0"}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{e.why}</p>
      <figcaption className="viz-caption">
        Each row continues into the next through the connecting map ∂, which takes a cycle in X, splits it into a chain in A
        and a chain in B, and returns their common boundary in A ∩ B. Knowing the pieces and the maps between them pins down
        the homology of the whole.
      </figcaption>
    </figure>
  );
}
