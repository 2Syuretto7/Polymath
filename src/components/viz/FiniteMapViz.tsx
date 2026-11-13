"use client";

import { useState } from "react";

const TOPS: { label: string; opens: number[] }[] = [
  { label: "indiscrete", opens: [0, 7] },
  { label: "discrete", opens: [0, 1, 2, 3, 4, 5, 6, 7] },
  { label: "chain", opens: [0, 1, 3, 7] },
  { label: "one open point", opens: [0, 1, 7] },
];
const XN = ["1", "2", "3"], YN = ["a", "b", "c"];
const nm = (m: number, L: string[]) => (m === 0 ? "∅" : `{${L.filter((_, i) => m & (1 << i)).join(", ")}}`);

/** Continuity between finite spaces: a map is continuous when the preimage of every open set is open. */
export function FiniteMapViz() {
  const [tx, setTx] = useState(2);
  const [ty, setTy] = useState(2);
  const [f, setF] = useState([0, 1, 2]);
  const OX = TOPS[tx].opens, OY = TOPS[ty].opens;
  const pre = (v: number) => f.reduce((m, y, x) => (v & (1 << y) ? m | (1 << x) : m), 0);
  const img = (u: number) => f.reduce((m, y, x) => (u & (1 << x) ? m | (1 << y) : m), 0);
  const fails = OY.filter((v) => !OX.includes(pre(v)));
  const bij = new Set(f).size === 3;
  const openMap = OX.every((u) => OY.includes(img(u)));
  const homeo = bij && !fails.length && openMap;
  const W = 300, H = 170, xs = (i: number) => 40 + i * 45;
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 6 }}>
        <div className="segmented" role="group" aria-label="Topology on X">
          <span style={{ alignSelf: "center", fontSize: 13, padding: "0 8px" }}>X:</span>
          {TOPS.map((t, i) => <button key={t.label} type="button" aria-pressed={tx === i} className={tx === i ? "seg is-on" : "seg"} onClick={() => setTx(i)}>{t.label}</button>)}
        </div>
        <div className="segmented" role="group" aria-label="Topology on Y">
          <span style={{ alignSelf: "center", fontSize: 13, padding: "0 8px" }}>Y:</span>
          {TOPS.map((t, i) => <button key={t.label} type="button" aria-pressed={ty === i} className={ty === i ? "seg is-on" : "seg"} onClick={() => setTy(i)}>{t.label}</button>)}
        </div>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>Click a point of X to change where f sends it.</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The map f from X to Y" style={{ width: "100%", maxWidth: 340, display: "block", margin: "0 auto" }}>
        <defs><marker id="fmA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        <text x={20} y={14} style={{ fill: "var(--text-muted)", fontSize: 12 }}>X</text>
        <text x={250} y={14} style={{ fill: "var(--text-muted)", fontSize: 12 }}>Y</text>
        {f.map((y, x) => <line key={x} x1={60} y1={xs(x)} x2={232} y2={xs(y)} markerEnd="url(#fmA)" style={{ stroke: "var(--accent)", strokeWidth: 1.8 }} />)}
        {XN.map((l, i) => (
          <g key={l} style={{ cursor: "pointer" }} onClick={() => setF(f.map((y, x) => (x === i ? (y + 1) % 3 : y)))}>
            <circle cx={45} cy={xs(i)} r={14} style={{ fill: "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={45} y={xs(i) + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{l}</text>
          </g>
        ))}
        {YN.map((l, i) => (
          <g key={l}>
            <circle cx={250} cy={xs(i)} r={14} style={{ fill: "var(--bg)", stroke: "var(--text-faint)", strokeWidth: 2 }} />
            <text x={250} y={xs(i) + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{l}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13, marginTop: 6 }}>
        <div>open in X: {OX.map((m) => nm(m, XN)).join(", ")}</div>
        {OY.map((v) => (
          <div key={v}>f⁻¹({nm(v, YN)}) = {nm(pre(v), XN)}: {OX.includes(pre(v)) ? "open" : <strong>not open</strong>}</div>
        ))}
        <div style={{ marginTop: 4 }}>continuous: <strong>{fails.length ? "no" : "yes"}</strong>; homeomorphism: <strong>{homeo ? "yes" : "no"}</strong>{!homeo && bij && !fails.length ? " (a continuous bijection whose inverse is not continuous)" : ""}</div>
      </div>
      <figcaption className="viz-caption">
        {"The named topologies follow the same pattern on both sets: a chain has open sets ∅, {1}, {1, 2} and X on one side, and ∅, {a}, {a, b} and Y on the other."} A map is continuous when
        every open set of Y pulls back to an open set of X. A homeomorphism is a bijection that is continuous both ways, so it
        matches the open sets exactly.
      </figcaption>
    </figure>
  );
}
