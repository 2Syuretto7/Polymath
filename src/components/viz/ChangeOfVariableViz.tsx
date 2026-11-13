"use client";

import { useState } from "react";

type G = { name: string; g: (x: number) => number; ginv: (y: number) => number; dginv: (y: number) => number; ymin: number; ymax: number; ftop: number };
const GS: G[] = [
  { name: "Y = 2X + 1", g: (x) => 2 * x + 1, ginv: (y) => (y - 1) / 2, dginv: () => 0.5, ymin: 0, ymax: 3, ftop: 1.2 },
  { name: "Y = X²", g: (x) => x * x, ginv: (y) => Math.sqrt(y), dginv: (y) => 0.5 / Math.sqrt(y), ymin: 0, ymax: 1, ftop: 4 },
  { name: "Y = √X", g: (x) => Math.sqrt(x), ginv: (y) => y * y, dginv: (y) => 2 * y, ymin: 0, ymax: 1, ftop: 2.4 },
  { name: "Y = −ln X", g: (x) => -Math.log(x), ginv: (y) => Math.exp(-y), dginv: (y) => Math.exp(-y), ymin: 0, ymax: 4, ftop: 1.2 },
];

/** X uniform on (0, 1) pushed through g: equal-probability strips of X land as strips of Y with different widths. */
export function ChangeOfVariableViz() {
  const [gi, setGi] = useState(1);
  const G = GS[gi];
  const W = 520, H = 250, pad = 34, split = 160;
  const Xx = (x: number) => pad + x * (split - pad - 20);
  const Xy = (y: number) => split + 20 + ((y - G.ymin) / (G.ymax - G.ymin)) * (W - split - 20 - pad);
  const Yf = (f: number) => H - 30 - (Math.min(f, G.ftop) / G.ftop) * (H - 70);
  const strips = Array.from({ length: 10 }, (_, k) => [k / 10, (k + 1) / 10]);
  const ys = Array.from({ length: 300 }, (_, i) => G.ymin + ((G.ymax - G.ymin) * (i + 0.5)) / 300).filter((y) => { const x = G.ginv(y); return x > 0 && x < 1; });
  const dens = ys.map((y, i) => `${i ? "L" : "M"}${Xy(y).toFixed(1)},${Yf(G.dginv(y)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Transformation">
        {GS.map((x, i) => <button key={x.name} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => setGi(i)}>{x.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Strips of equal probability for X and where they land for Y, with the density of Y" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <text x={Xx(0.5)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>X uniform on (0, 1)</text>
        <text x={Xy((G.ymin + G.ymax) / 2)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>density of Y</text>
        {strips.map(([a, b], k) => (
          <g key={k}>
            <rect x={Xx(a)} y={Yf(1)} width={Xx(b) - Xx(a)} height={H - 30 - Yf(1)} style={{ fill: "var(--accent)", fillOpacity: k % 2 ? 0.25 : 0.5 }} />
            {(() => { const y1 = Math.min(G.g(Math.max(a, 1e-4)), G.ymax), y2 = Math.min(G.g(b), G.ymax); const lo = Math.min(y1, y2), hi = Math.max(y1, y2); return <rect x={Xy(lo)} y={H - 26} width={Math.max(Xy(hi) - Xy(lo), 0.5)} height={8} style={{ fill: "var(--accent)", fillOpacity: k % 2 ? 0.25 : 0.6 }} />; })()}
          </g>
        ))}
        <line x1={Xx(0)} y1={H - 30} x2={Xx(1)} y2={H - 30} style={{ stroke: "var(--border)" }} />
        <line x1={Xy(G.ymin)} y1={H - 30} x2={Xy(G.ymax)} y2={H - 30} style={{ stroke: "var(--border)" }} />
        <path d={dens} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {[0, 1].map((t) => <text key={t} x={Xx(t)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        {[G.ymin, (G.ymin + G.ymax) / 2, G.ymax].map((t) => <text key={t} x={Xy(t)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <figcaption className="viz-caption">
        Each band on the left holds probability 0.1 of X. The matching band under the right axis shows where those values of X land after the transformation. Where bands are squeezed together, the same probability sits in less room, so the density of Y is high; that rate of squeezing is the factor |dx/dy| in f_Y(y) = f_X(x) |dx/dy|.
      </figcaption>
    </figure>
  );
}
