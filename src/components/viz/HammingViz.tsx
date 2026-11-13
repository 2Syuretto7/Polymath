"use client";

import { useState } from "react";

// positions 1..7; parity bits at 1, 2, 4
const DATA_POS = [3, 5, 6, 7];

/** The Hamming [7, 4] code over 𝔽₂: encode four bits, flip one, and let the syndrome find it. */
export function HammingViz() {
  const [data, setData] = useState([1, 0, 1, 1]);
  const [flip, setFlip] = useState<number | null>(null);
  const word = Array(8).fill(0);
  DATA_POS.forEach((p, i) => { word[p] = data[i]; });
  for (const pb of [1, 2, 4]) word[pb] = [3, 5, 6, 7].filter((p) => p & pb).reduce((s, p) => s ^ word[p], 0);
  const recv = word.map((b, i) => (i === flip ? 1 - b : b));
  const syn = [1, 2, 4].reduce((s, pb) => s + pb * [1, 2, 3, 4, 5, 6, 7].filter((p) => p & pb).reduce((t, p) => t ^ recv[p], 0), 0);
  const fixed = recv.map((b, i) => (i === syn ? 1 - b : b));
  const decoded = DATA_POS.map((p) => fixed[p]);
  const cell = (b: number, i: number, mark: boolean, onClick?: () => void) => (
    <button key={i} type="button" onClick={onClick} className={mark ? "viz-chip is-on" : "viz-chip"} aria-pressed={mark}
      style={{ minWidth: 40, fontFamily: "var(--font-mono, monospace)", color: [1, 2, 4].includes(i) ? "var(--text-muted)" : undefined }}>
      {b}
    </button>
  );
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
        <div>
          <div style={{ marginBottom: 4 }}>1. Message: click to change the four data bits</div>
          <div className="viz-controls">{data.map((b, i) => cell(b, i, false, () => { setData(data.map((x, j) => (j === i ? 1 - x : x))); setFlip(null); }))}</div>
        </div>
        <div>
          <div style={{ marginBottom: 4 }}>2. Codeword, positions 1 to 7 (parity bits at 1, 2, 4 shown fainter): click a bit to corrupt it in transit</div>
          <div className="viz-controls">{[1, 2, 3, 4, 5, 6, 7].map((i) => cell(recv[i], i, flip === i, () => setFlip(flip === i ? null : i)))}</div>
        </div>
        <div className="mono">
          <div>syndrome = {syn.toString(2).padStart(3, "0")} = {syn}{syn ? `: the error is at position ${syn}` : ": no error detected"}</div>
          <div>decoded message: {decoded.join(" ")} {decoded.join() === data.join() ? "(correct)" : "(wrong)"}</div>
        </div>
      </div>
      <figcaption className="viz-caption">
        The code is the null space of a 3 × 7 matrix over 𝔽₂ whose columns are the numbers 1 to 7 in binary. A single flipped
        bit at position i changes the syndrome by column i, so the syndrome spells out where the error is. Any two codewords
        differ in at least 3 places.
      </figcaption>
    </figure>
  );
}
