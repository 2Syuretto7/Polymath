"use client";

import { useState } from "react";

/** Choosing one thing from A or B (sum rule) versus one from A and one from B (product rule). */
export function SumProductViz() {
  const [m, setM] = useState(4);
  const [n, setN] = useState(3);
  const [overlap, setOverlap] = useState(0);
  const [mode, setMode] = useState<"or" | "and">("and");
  const ov = mode === "or" ? Math.min(overlap, m, n) : 0;
  const cell = 26;
  const A = Array.from({ length: m }, (_, i) => `a${i + 1}`);
  const B = Array.from({ length: n }, (_, j) => (j < ov ? `a${m - ov + j + 1}` : `b${j - ov + 1}`));

  const dot = (label: string, kind: "a" | "b" | "both") => (
    <span key={label + kind} className="mono" style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 30, height: 26, margin: 2, borderRadius: 6, fontSize: 12,
      border: `1px solid ${kind === "both" ? "var(--danger)" : kind === "a" ? "var(--accent)" : "var(--border-strong)"}`,
      background: kind === "a" ? "var(--accent-soft)" : "var(--bg-subtle)",
    }}>{label}</span>
  );

  const unionCount = m + n - ov;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Rule">
        <button type="button" className={mode === "and" ? "seg is-on" : "seg"} aria-pressed={mode === "and"} onClick={() => setMode("and")}>one from A and one from B</button>
        <button type="button" className={mode === "or" ? "seg is-on" : "seg"} aria-pressed={mode === "or"} onClick={() => setMode("or")}>one from A or B</button>
      </div>
      <div className="viz-sliders">
        <label><span>|A| = <span className="mono">{m}</span></span><input type="range" min={1} max={6} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
        <label><span>|B| = <span className="mono">{n}</span></span><input type="range" min={1} max={6} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        {mode === "or" && (
          <label><span>shared elements = <span className="mono">{ov}</span></span><input type="range" min={0} max={Math.min(m, n)} value={ov} onChange={(e) => setOverlap(Number(e.target.value))} /></label>
        )}
      </div>
      <div style={{ marginTop: 12, overflowX: "auto" }}>
        {mode === "and" ? (
          <table style={{ borderCollapse: "collapse" }}>
            <tbody>
              <tr><td></td>{B.map((b) => <td key={b} className="mono" style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>{b}</td>)}</tr>
              {A.map((a) => (
                <tr key={a}>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)", paddingRight: 6 }}>{a}</td>
                  {B.map((b) => (
                    <td key={b} style={{ height: cell, padding: "2px 3px", textAlign: "center", whiteSpace: "nowrap" }}>
                      <span className="mono" style={{ fontSize: 11, padding: "2px 4px", borderRadius: 4, background: "var(--accent-soft)" }}>({a}, {b})</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <div>{A.map((a, i) => dot(a, i >= m - ov ? "both" : "a"))}</div>
            <div>{B.map((b, j) => (j < ov ? null : dot(b, "b")))}</div>
          </div>
        )}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {mode === "and"
          ? `Each choice is a pair: ${m} rows of ${n}, so ${m} × ${n} = ${m * n} pairs. The product rule counts a grid.`
          : ov === 0
            ? `A and B share nothing, so there are ${m} + ${n} = ${m + n} choices. The sum rule needs the sets to be disjoint.`
            : `The ${ov} shared element${ov > 1 ? "s are" : " is"} marked in red. Adding ${m} + ${n} counts ${ov > 1 ? "them" : "it"} twice, so the number of choices is ${m} + ${n} − ${ov} = ${unionCount}.`}
      </figcaption>
    </figure>
  );
}
