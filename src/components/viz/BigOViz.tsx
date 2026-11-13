"use client";

import { useState } from "react";

type F = { name: string; f: (n: number) => number; example: string };
const FUNCS: F[] = [
  { name: "log n", f: (n) => Math.log2(n), example: "binary search" },
  { name: "n", f: (n) => n, example: "scanning a list" },
  { name: "n log n", f: (n) => n * Math.log2(n), example: "merge sort" },
  { name: "n²", f: (n) => n * n, example: "insertion sort, worst case" },
  { name: "n³", f: (n) => n ** 3, example: "multiplying n × n matrices naively" },
  { name: "2ⁿ", f: (n) => 2 ** n, example: "trying every subset" },
];
const OPS = 1e9; // steps per second

function duration(steps: number): string {
  const s = steps / OPS;
  if (!isFinite(s)) return "longer than the age of the universe";
  if (s < 1e-6) return "under a microsecond";
  if (s < 1e-3) return `${(s * 1e6).toFixed(0)} microseconds`;
  if (s < 1) return `${(s * 1e3).toFixed(0)} milliseconds`;
  if (s < 60) return `${s.toFixed(1)} seconds`;
  if (s < 3600) return `${(s / 60).toFixed(1)} minutes`;
  if (s < 86400) return `${(s / 3600).toFixed(1)} hours`;
  if (s < 3.15e7) return `${(s / 86400).toFixed(1)} days`;
  const y = s / 3.15e7;
  if (y > 1.4e10) return "longer than the age of the universe";
  return y < 1e6 ? `${y.toFixed(y < 10 ? 1 : 0)} years` : `${y.toExponential(1)} years`;
}

const NS = [10, 20, 50, 100, 1000, 1e4, 1e5, 1e6, 1e9];

/** How long algorithms with different growth rates take, at a billion steps a second. */
export function BigOViz() {
  const [k, setK] = useState(2);
  const n = NS[k];
  const vals = FUNCS.map((g) => g.f(n));
  const maxLog = Math.log10(Math.max(...vals.filter(isFinite), 10)) || 1;

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>input size n = <span className="mono">{n.toLocaleString("en-IN")}</span></span>
          <input type="range" min={0} max={NS.length - 1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead><tr><th>growth</th><th>steps</th><th>time at 10⁹ steps a second</th></tr></thead>
        <tbody>
          {FUNCS.map((g, i) => {
            const v = vals[i];
            const width = isFinite(v) ? Math.max(2, (Math.log10(Math.max(v, 1)) / maxLog) * 100) : 100;
            return (
              <tr key={g.name}>
                <td><span className="mono">{g.name}</span><br /><span style={{ fontSize: 12, color: "var(--text-muted)" }}>{g.example}</span></td>
                <td style={{ width: "36%" }}>
                  <div style={{ height: 10, width: `${width}%`, background: isFinite(v) && v / OPS < 3.15e7 ? "var(--accent)" : "var(--danger)", borderRadius: 3 }} />
                  <span className="mono" style={{ fontSize: 12 }}>{isFinite(v) ? (v < 1e6 ? Math.round(v).toLocaleString("en-IN") : v.toExponential(1)) : "∞"}</span>
                </td>
                <td>{duration(v)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Bars are on a logarithmic scale, so each extra bar length means many times more steps. Faster hardware multiplies
        every row by the same constant; it does not change which rows are hopeless. That is why big-O ignores constants
        and keeps only the growth rate.
      </figcaption>
    </figure>
  );
}
