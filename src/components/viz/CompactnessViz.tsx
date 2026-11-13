"use client";

import { useState } from "react";

type Mode = "finite" | "whole";

/** Compactness: every finite part of {c > 0, c > 1, c > 2, …} has a model, so the whole set has one too. */
export function CompactnessViz() {
  const [mode, setMode] = useState<Mode>("finite");
  const [n, setN] = useState(5);
  const W = 520, H = 120;
  const X = (k: number) => 20 + k * 15;
  const sents = Array.from({ length: n }, (_, k) => `c > ${k}`);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Which set">
        <button type="button" aria-pressed={mode === "finite"} className={mode === "finite" ? "seg is-on" : "seg"} onClick={() => setMode("finite")}>a finite subset</button>
        <button type="button" aria-pressed={mode === "whole"} className={mode === "whole" ? "seg is-on" : "seg"} onClick={() => setMode("whole")}>the whole set</button>
      </div>
      {mode === "finite" && (
        <div className="viz-sliders" style={{ marginTop: 8 }}>
          <label><span>number of sentences n: <span className="mono">{n}</span></span>
            <input type="range" min={1} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The natural numbers with the interpretation of c" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={60} x2={mode === "finite" ? X(30) : X(22)} y2={60} style={{ stroke: "var(--border)" }} />
        {Array.from({ length: mode === "finite" ? 31 : 23 }, (_, k) => (
          <g key={k}>
            <circle cx={X(k)} cy={60} r={mode === "finite" && k === n ? 7 : 3} style={{ fill: mode === "finite" && k === n ? "var(--accent)" : "var(--text-muted)" }} />
            {k % 5 === 0 && <text x={X(k)} y={84} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>}
          </g>
        ))}
        {mode === "finite" && <text x={X(n)} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>c = {n}</text>}
        {mode === "whole" && (
          <g>
            <text x={X(23)} y={64} style={{ fill: "var(--text-muted)", fontSize: 14 }}>· · ·</text>
            <line x1={X(26)} y1={60} x2={X(33)} y2={60} style={{ stroke: "var(--accent)", strokeDasharray: "3 3" }} />
            {[27, 28, 29, 30, 31, 32].map((k) => <circle key={k} cx={X(k)} cy={60} r={k === 29 ? 7 : 3} style={{ fill: k === 29 ? "var(--accent)" : "var(--text-muted)" }} />)}
            <text x={X(29)} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>c</text>
            <text x={X(29)} y={104} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>nonstandard part</text>
          </g>
        )}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4, overflowWrap: "anywhere" }}>
        {mode === "finite" ? (
          <>
            <div>the subset: {"{"}{sents.join(", ")}{"}"}</div>
            <div style={{ fontWeight: 700 }}>true in the natural numbers when c is {n}: this finite subset has a model</div>
          </>
        ) : (
          <>
            <div>the whole set: {"{c > 0, c > 1, c > 2, …}"} together with all truths of arithmetic</div>
            <div>no natural number can be c: whatever it is, some sentence c &gt; k fails</div>
            <div style={{ fontWeight: 700 }}>by compactness there is a model anyway, with an element above every 0, 1, 2, …</div>
          </>
        )}
      </div>
      <figcaption className="viz-caption">
        The compactness theorem: a set of first-order sentences has a model if every finite subset has one. Add to the true
        sentences of arithmetic a new constant c and the sentences c &gt; 0, c &gt; 1, c &gt; 2 and so on. Any finite subset is
        satisfied in the ordinary numbers by taking c large enough, so the whole set has a model: a nonstandard model of
        arithmetic, satisfying the same first-order sentences as the natural numbers but containing an infinite number.
      </figcaption>
    </figure>
  );
}
