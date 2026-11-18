"use client";

import { useState } from "react";

const NAMES = ["a", "b", "c", "d", "e"];
const START = [
  [true, false, true, false, false],
  [false, false, true, true, false],
  [true, true, true, false, true],
  [false, false, false, false, true],
  [false, true, false, true, true],
];

/** Russell’s set R = {y : y ∉ y} flips the diagonal, so it differs from every set at that set’s own place. */
export function RussellMatrixViz() {
  const [M, setM] = useState(START.map((r) => [...r]));
  const [askR, setAskR] = useState(false);
  const R = NAMES.map((_, j) => !M[j][j]);
  const flip = (i: number, j: number) => setM(M.map((r, a) => r.map((v, b) => (a === i && b === j ? !v : v))));
  const S = 52, O = 70;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 400" role="img" aria-label="Membership table for five sets, and the row for Russell's set" style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        <text x={O + 2.5 * S} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>is y a member of x? (click a cell to change it)</text>
        {NAMES.map((n, j) => <text key={n} x={O + j * S + S / 2} y={50} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>y = {n}</text>)}
        {M.map((r, i) => (
          <g key={i}>
            <text x={O - 12} y={O + i * S + S / 2 + 5} textAnchor="end" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>x = {NAMES[i]}</text>
            {r.map((v, j) => (
              <g key={j} onClick={() => flip(i, j)} style={{ cursor: "pointer" }}>
                <rect x={O + j * S} y={O + i * S} width={S - 4} height={S - 4} rx={6} style={{ fill: v ? "var(--accent-soft)" : "var(--bg)", stroke: i === j ? "var(--text)" : "var(--border)", strokeWidth: i === j ? 2.5 : 1 }} />
                <text x={O + j * S + (S - 4) / 2} y={O + i * S + S / 2 + 2} textAnchor="middle" style={{ fill: v ? "var(--accent)" : "var(--text-faint)", fontSize: 14, fontWeight: 700 }}>{v ? "∈" : "∉"}</text>
              </g>
            ))}
          </g>
        ))}
        <text x={O - 12} y={O + 5 * S + 30 + 5} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>x = R</text>
        {R.map((v, j) => (
          <g key={j}>
            <rect x={O + j * S} y={O + 5 * S + 6} width={S - 4} height={S - 4} rx={6} style={{ fill: v ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--danger)", strokeWidth: 2 }} />
            <text x={O + j * S + (S - 4) / 2} y={O + 5 * S + 6 + S / 2 - 2} textAnchor="middle" style={{ fill: v ? "var(--accent)" : "var(--text-faint)", fontSize: 14, fontWeight: 700 }}>{v ? "∈" : "∉"}</text>
          </g>
        ))}
        <text x={O + 5 * S + 6} y={O + 5 * S + 36} style={{ fill: "var(--text-muted)", fontSize: 11 }}>flips the diagonal</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setAskR(true)}>ask: is R a member of R?</button>
        <button type="button" className="btn btn-ghost" onClick={() => { setM(START.map((r) => [...r])); setAskR(false); }}>reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        R differs from {NAMES.map((n) => n).join(", ")} at their own diagonal places, so R is none of them.
        {askR ? " If R were in the table, its diagonal cell would read R ∈ R exactly when R ∉ R: a contradiction. R is not a set." : ""}
      </p>
      <figcaption className="viz-caption">
        Row R lists, for each y, whether y is outside itself. Whatever the table says, R disagrees with each row on the
        diagonal: Cantor&rsquo;s diagonal argument. Frege&rsquo;s Basic Law V guaranteed that every concept has an
        extension, so R would have to be in the table, and the system was inconsistent.
      </figcaption>
    </figure>
  );
}
