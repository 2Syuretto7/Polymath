"use client";

import { useState } from "react";

/** Infinite coin tossing as the unit interval: each finite run of tosses is a dyadic interval of length 2⁻ⁿ. */
export function CoinIntervalViz() {
  const [seq, setSeq] = useState<string[]>(["H", "T"]);
  const n = seq.length;
  const lo = seq.reduce((acc, c, i) => acc + (c === "H" ? Math.pow(2, -(i + 1)) : 0), 0);
  const len = Math.pow(2, -n);
  const X0 = 30, W = 460;
  const add = (c: string) => setSeq(seq.length < 10 ? [...seq, c] : seq);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => add("H")} disabled={n >= 10}>toss H</button>
        <button type="button" className="btn btn-ghost" onClick={() => add("T")} disabled={n >= 10}>toss T</button>
        <button type="button" className="btn btn-ghost" onClick={() => setSeq(seq.slice(0, -1))} disabled={n === 0}>undo</button>
        <button type="button" className="btn btn-ghost" onClick={() => setSeq([])}>clear</button>
      </div>
      <svg viewBox="0 0 520 110" role="img" aria-label="The unit interval with the event highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 9 }, (_, i) => (
          <g key={i}>
            <line x1={X0 + (i * W) / 8} y1={50} x2={X0 + (i * W) / 8} y2={70} style={{ stroke: "var(--border-strong)" }} />
            <text x={X0 + (i * W) / 8} y={88} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i === 0 ? "0" : i === 8 ? "1" : `${i}/8`}</text>
          </g>
        ))}
        <line x1={X0} y1={60} x2={X0 + W} y2={60} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <rect x={X0 + lo * W} y={50} width={Math.max(len * W, 1.5)} height={20} style={{ fill: "var(--accent)", opacity: 0.8 }} />
        <text x={X0} y={28} style={{ fill: "var(--text)", fontSize: 12 }}>tosses: {n ? seq.join(" ") : "none yet"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Event: the first {n} tosses are {n ? seq.join("") : "anything"}. Binary digits 0.{n ? seq.map((c) => (c === "H" ? 1 : 0)).join("") : ""}…, interval
        [{lo.toFixed(4)}, {(lo + len).toFixed(4)}), length 1/{Math.pow(2, n)} = probability.
      </p>
      <figcaption className="viz-caption">
        Write H as the binary digit 1 and T as 0. An infinite sequence of tosses is then a point of [0, 1], and fixing the
        first n tosses picks out a dyadic interval whose length is the probability of that event. Lebesgue measure on [0, 1]
        is the probability measure for fair coin tossing.
      </figcaption>
    </figure>
  );
}
