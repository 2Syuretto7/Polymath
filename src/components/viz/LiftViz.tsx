"use client";

import { useState } from "react";

/** Lifting through the surjection ℤ → ℤ/n: always possible from ℤ, never from ℤ/n. */
export function LiftViz() {
  const [n, setN] = useState(3);
  const [src, setSrc] = useState<"Z" | "Zn">("Z");
  const [k, setK] = useState(2);
  const mod = (a: number) => ((a % n) + n) % n;
  const hom = src === "Z" || k === 0;
  const commutes = mod(k) === 1;
  const ok = hom && commutes;
  const P = src === "Z" ? "ℤ" : `ℤ/${n}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="modulus">
        {[2, 3, 4].map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>n = {m}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="source" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={src === "Z"} className={src === "Z" ? "seg is-on" : "seg"} onClick={() => setSrc("Z")}>P = ℤ (free)</button>
        <button type="button" aria-pressed={src === "Zn"} className={src === "Zn" ? "seg is-on" : "seg"} onClick={() => setSrc("Zn")}>P = ℤ/{n}</button>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="A lifting diagram" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="lift-arrow" markerWidth={8} markerHeight={8} refX={7} refY={4} orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--text-muted)" }} /></marker>
          <marker id="lift-arrow-a" markerWidth={8} markerHeight={8} refX={7} refY={4} orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 z" style={{ fill: ok ? "var(--accent)" : "var(--danger)" }} /></marker>
        </defs>
        <text x={330} y={34} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 15, fontWeight: 700 }}>{P}</text>
        <text x={150} y={144} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 15, fontWeight: 700 }}>ℤ</text>
        <text x={330} y={144} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 15, fontWeight: 700 }}>ℤ/{n}</text>
        <line x1={175} y1={139} x2={300} y2={139} markerEnd="url(#lift-arrow)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={238} y={160} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>g: reduce mod {n} (onto)</text>
        <line x1={330} y1={44} x2={330} y2={122} markerEnd="url(#lift-arrow)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={340} y={88} style={{ fill: "var(--text-muted)", fontSize: 11 }}>f: 1 to 1</text>
        <line x1={310} y1={42} x2={165} y2={124} markerEnd="url(#lift-arrow-a)" style={{ stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <text x={210} y={74} textAnchor="end" style={{ fill: ok ? "var(--accent)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>h: 1 to {k}</text>
      </svg>
      <div className="viz-controls">
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((v) => <button key={v} type="button" className={k === v ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setK(v)}>h(1) = {v}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "4px 0", color: hom ? "var(--text)" : "var(--danger)" }}>
        Is h a homomorphism? {src === "Z" ? "Yes: ℤ is free, so 1 may go anywhere." : hom ? `Yes: ${n} · 0 = 0.` : `No: in ℤ/${n}, ${n} · 1 = 0, so h needs ${n} · ${k} = 0 in ℤ, forcing h(1) = 0.`}
      </p>
      <p className="mono" style={{ fontSize: 13, margin: "4px 0", color: commutes ? "var(--text)" : "var(--danger)" }}>
        Does g ∘ h = f? g(h(1)) = {k} mod {n} = {mod(k)}{commutes ? ", which is f(1) = 1. Yes." : ", not 1. No."}
      </p>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{ok ? "A lift." : src === "Zn" ? "No choice works: ℤ/" + n + " is not projective." : "Not a lift; try a value congruent to 1 mod " + n + "."}</p>
      <figcaption className="viz-caption">
        P is projective when every map from P into the target of a surjection lifts through it. Free modules are projective:
        send each basis element to any preimage. ℤ/n is not, because the only homomorphism from ℤ/n to ℤ is zero.
      </figcaption>
    </figure>
  );
}
