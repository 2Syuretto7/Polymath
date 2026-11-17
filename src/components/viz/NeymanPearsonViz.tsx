"use client";

import { useState } from "react";

const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};
const Phi = (x: number) => 0.5 * erfc(-x / Math.SQRT2);
const zUpper = (alpha: number) => {
  let lo = -10, hi = 10;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (1 - Phi(m) > alpha) lo = m; else hi = m; }
  return (lo + hi) / 2;
};

type Kind = "upper" | "both" | "lower";
const LABEL: Record<Kind, string> = { upper: "upper tail (likelihood ratio)", both: "both tails", lower: "lower tail" };
const MU1 = 1;

/** Three tests of the same size for H₀: μ = 0 against H₁: μ = 1; only the likelihood-ratio region is most powerful. */
export function NeymanPearsonViz() {
  const [n, setN] = useState(4);
  const [alpha, setAlpha] = useState(0.05);
  const [kind, setKind] = useState<Kind>("upper");
  const sd = 1 / Math.sqrt(n);
  const z1 = zUpper(alpha), z2 = zUpper(alpha / 2);
  const inRegion = (x: number) => (kind === "upper" ? x > z1 * sd : kind === "lower" ? x < -z1 * sd : Math.abs(x) > z2 * sd);
  const powerOf = (k: Kind) => {
    const r = MU1 / sd;
    if (k === "upper") return 1 - Phi(z1 - r);
    if (k === "lower") return Phi(-z1 - r);
    return 1 - Phi(z2 - r) + Phi(-z2 - r);
  };
  const lo = -1.5, hi = 2.5;
  const xs = Array.from({ length: 401 }, (_, i) => lo + ((hi - lo) * i) / 400);
  const dens = (x: number, m: number) => Math.exp(-((x - m) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
  const peak = dens(0, 0);
  const X = (x: number) => 20 + ((x - lo) / (hi - lo)) * 480, Y = (v: number) => 170 - (v / peak) * 140;
  const curve = (m: number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(dens(x, m)).toFixed(1)}`).join(" ");
  const shade = (m: number) => {
    const out: string[] = [];
    let cur: number[] = [];
    const flush = () => {
      if (cur.length > 1) out.push(`M${X(cur[0]).toFixed(1)},${Y(0)} ` + cur.map((x) => `L${X(x).toFixed(1)},${Y(dens(x, m)).toFixed(1)}`).join(" ") + ` L${X(cur[cur.length - 1]).toFixed(1)},${Y(0)} Z`);
      cur = [];
    };
    xs.forEach((x) => (inRegion(x) ? cur.push(x) : flush()));
    flush();
    return out.join(" ");
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>size α: <span className="mono">{alpha.toFixed(3)}</span></span>
          <input type="range" min={0.01} max={0.2} step={0.01} value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="rejection region" style={{ marginTop: 8 }}>
        {(Object.keys(LABEL) as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Sampling densities of the mean under the two hypotheses" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={shade(MU1)} style={{ fill: "var(--accent-soft)" }} />
        <path d={shade(0)} style={{ fill: "var(--danger-soft)" }} />
        <line x1={X(lo)} y1={Y(0)} x2={X(hi)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={curve(0)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={curve(MU1)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <text x={X(0) - 30} y={Y(peak) - 6} style={{ fill: "var(--text-muted)", fontSize: 11 }}>null, μ = 0</text>
        <text x={X(MU1) - 10} y={Y(peak) - 6} style={{ fill: "var(--accent)", fontSize: 11 }}>alternative, μ = 1</text>
        {[-1, 0, 1, 2].map((m) => <text key={m} x={X(m) - 4} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{m}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>size of the chosen test: {alpha.toFixed(3)}</div>
        {(Object.keys(LABEL) as Kind[]).map((k) => (
          <div key={k} style={{ fontWeight: k === kind ? 700 : 400 }}>power, {LABEL[k]}: {powerOf(k).toFixed(4)}</div>
        ))}
      </div>
      <figcaption className="viz-caption">
        The curves are the densities of the sample mean of n observations from N(μ, 1). Each region has chance α under the
        null (red shading). The blue shading is the power, its chance under the alternative. The likelihood ratio grows with
        the sample mean, so the Neyman-Pearson region is the upper tail, and no other region of the same size has more
        power.
      </figcaption>
    </figure>
  );
}
