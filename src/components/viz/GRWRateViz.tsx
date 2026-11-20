"use client";

import { useState } from "react";

const LAMBDA = 1e-16;

export function collapseTime(exp: number) {
  return 1 / (Math.pow(10, exp) * LAMBDA);
}

const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup = (k: number) => (k < 0 ? "⁻" : "") + String(Math.abs(k)).split("").map((d) => SUP[Number(d)]).join("");

function sci(v: number) {
  if (v >= 0.1 && v < 1000) return v.toPrecision(2).replace(/\.0$/, "");
  const k = Math.floor(Math.log10(v) + 1e-9);
  const m = v / Math.pow(10, k);
  return `${Math.abs(m - 1) < 0.05 ? "" : `${m.toFixed(1)} × `}10${sup(k)}`;
}

function human(sec: number) {
  if (sec >= 3.15e7) return `${sci(sec / 3.15e7)} years`;
  if (sec >= 86400) return `${sci(sec / 86400)} days`;
  const s = sci(sec);
  return `${s} ${s === "1" ? "second" : "seconds"}`;
}

/** GRW amplification: N particles each localise at rate λ, so a superposition of N-particle positions collapses at rate Nλ. */
export function GRWRateViz() {
  const [e, setE] = useState(0);
  const sec = collapseTime(e);
  const logT = Math.log10(sec);
  const X = (l: number) => 40 + ((l + 8) / 26) * 440;
  const marks: [number, string][] = [[-6, "a microsecond"], [0, "a second"], [7.5, "a year"], [17.6, "age of the universe"]];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>particles N = 10{sup(e)} <input type="range" min={0} max={24} step={1} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="exponent" /></label>
      </div>
      <svg viewBox="0 0 540 110" role="img" aria-label="Mean time to a collapse on a logarithmic scale" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-8)} y1={50} x2={X(18)} y2={50} style={{ stroke: "var(--border-strong)" }} />
        {marks.map(([l, s]) => (
          <g key={s}>
            <line x1={X(l)} y1={44} x2={X(l)} y2={56} style={{ stroke: "var(--text-faint)" }} />
            <text x={X(l)} y={75} textAnchor={l > 15 ? "end" : "middle"} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s}</text>
          </g>
        ))}
        <circle cx={X(Math.min(18, logT))} cy={50} r={8} style={{ fill: e >= 16 ? "var(--success)" : "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        With N = 10{sup(e)} particles displaced, the mean time to the first collapse is 1/(Nλ) = {human(sec)}.
      </p>
      <figcaption className="viz-caption">
        In the GRW theory each particle suffers a spontaneous localisation about once every 10¹⁶ seconds. A single particle
        can stay in superposition for hundreds of millions of years, but if a pointer made of 10²³ particles is in a
        superposition of two positions, a hit on any one of them localises the whole pointer within a fraction of a
        microsecond.
      </figcaption>
    </figure>
  );
}
