"use client";

import { useState } from "react";

/** An oracle computation: Φᴬ(n) is the parity of A(0) + ⋯ + A(n), so it queries exactly the bits 0 to n. */
export function parityWithOracle(bits: boolean[], n: number) {
  let s = 0;
  for (let i = 0; i <= n; i++) if (bits[i]) s++;
  return { out: s % 2, use: n + 1 };
}

export function OracleUseViz() {
  const [bits, setBits] = useState([true, false, true, true, false, false, true, false, true, true]);
  const [n, setN] = useState(3);
  const { out, use } = parityWithOracle(bits, n);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>input n = {n} <input type="range" min={0} max={9} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "10px 0 6px" }}>Oracle A: click a bit to change it.</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {bits.map((b, i) => {
          const queried = i <= n;
          return (
            <button
              key={i}
              type="button"
              aria-label={`bit ${i}`}
              aria-pressed={b}
              onClick={() => setBits(bits.map((x, j) => (j === i ? !x : x)))}
              style={{
                width: 42, height: 48, borderRadius: 6, cursor: "pointer", fontFamily: "inherit",
                border: `2px solid ${queried ? "var(--accent)" : "var(--border)"}`,
                background: queried ? "var(--accent-soft)" : "var(--surface)",
                color: "var(--text)",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700 }}>{b ? 1 : 0}</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)" }}>A({i})</div>
            </button>
          );
        })}
        <div style={{ alignSelf: "center", color: "var(--text-faint)", marginLeft: 4 }}>⋯</div>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Φᴬ({n}) = {out}. The computation asked {use} question{use === 1 ? "" : "s"} of the oracle, about A(0) to A({n}); changing any later bit leaves the answer unchanged.
      </p>
      <figcaption className="viz-caption">
        An oracle machine may ask, at any step, whether a number lies in A. A halting computation asks only finitely many
        questions, so its result depends only on a finite part of A: the use principle. Here the machine outputs whether
        A contains an odd number of the elements 0 to n.
      </figcaption>
    </figure>
  );
}
