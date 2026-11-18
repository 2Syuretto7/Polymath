"use client";

import { useState } from "react";

const zer = (n: number): string => (n === 0 ? "∅" : `{${zer(n - 1)}}`);
const vn = (n: number): string => (n === 0 ? "∅" : `{${Array.from({ length: n }, (_, i) => vn(i)).join(", ")}}`);

/** Benacerraf’s two candidates for the numbers: Zermelo’s and von Neumann’s sets agree on arithmetic but not on membership. */
export function NumeralSetsViz() {
  const [n, setN] = useState(3);
  const [m, setM] = useState(1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={0} max={4} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>m = {m} <input type="range" min={0} max={4} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
      </div>
      <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", margin: "8px 0", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ padding: "4px 8px", borderBottom: "1px solid var(--border)", textAlign: "left" }}></th>
            <th style={{ padding: "4px 8px", borderBottom: "1px solid var(--border)", textAlign: "left" }}>Zermelo (1908)</th>
            <th style={{ padding: "4px 8px", borderBottom: "1px solid var(--border)", textAlign: "left" }}>von Neumann (1923)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: "4px 8px" }}>n = {n}</td><td style={{ padding: "4px 8px", overflowWrap: "anywhere" }}>{zer(n)}</td><td style={{ padding: "4px 8px", overflowWrap: "anywhere" }}>{vn(n)}</td></tr>
          <tr><td style={{ padding: "4px 8px" }}>successor of n</td><td style={{ padding: "4px 8px" }}>{"{n}"}</td><td style={{ padding: "4px 8px" }}>n ∪ {"{n}"}</td></tr>
          <tr><td style={{ padding: "4px 8px" }}>elements of n</td><td style={{ padding: "4px 8px" }}>{n === 0 ? 0 : 1}</td><td style={{ padding: "4px 8px" }}>{n}</td></tr>
          <tr><td style={{ padding: "4px 8px" }}>is {m} ∈ {n}?</td><td style={{ padding: "4px 8px", color: "var(--accent)" }}>{n === m + 1 ? "yes" : "no"}</td><td style={{ padding: "4px 8px", color: "var(--accent)" }}>{m < n ? "yes" : "no"}</td></tr>
          <tr><td style={{ padding: "4px 8px" }}>is {n} + {m} = {n + m}?</td><td style={{ padding: "4px 8px" }}>yes</td><td style={{ padding: "4px 8px" }}>yes</td></tr>
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Both progressions satisfy every truth of arithmetic. They disagree on whether {m} ∈ {n}, a question arithmetic never asks.
      </p>
      <figcaption className="viz-caption">
        Benacerraf (1965): if numbers were sets, there would be a fact about which sets they are, and nothing decides it.
        So numbers are not sets, and perhaps not objects at all. What matters about 3 is only its place in the progression:
        the structuralist&rsquo;s conclusion.
      </figcaption>
    </figure>
  );
}
