"use client";

import { useState } from "react";

/** Marx's working day: necessary labour reproduces the wage, surplus labour produces surplus value. */
export function SurplusViz() {
  const [day, setDay] = useState(10);
  const [nec, setNec] = useState(5);
  const n = Math.min(nec, day);
  const s = day - n;
  const rate = n > 0 ? (s / n) * 100 : 0;
  const W = 520, x0 = 20, scale = (W - 40) / 16;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>length of the working day: <span className="mono">{day} h</span></span>
          <input type="range" min={4} max={16} value={day} onChange={(ev) => setDay(Math.round(Number(ev.target.value)))} /></label>
        <label><span>hours needed to produce the value of the wage: <span className="mono">{nec} h</span></span>
          <input type="range" min={1} max={10} value={nec} onChange={(ev) => setNec(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} 80`} role="img" aria-label="The working day divided into necessary and surplus labour" style={{ width: "100%", display: "block" }}>
        <rect x={x0} y={18} width={n * scale} height={32} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {s > 0 && <rect x={x0 + n * scale} y={18} width={s * scale} height={32} rx={4} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />}
        <text x={x0 + (n * scale) / 2} y={39} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>necessary {n} h</text>
        {s > 0 && <text x={x0 + n * scale + (s * scale) / 2} y={39} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>surplus {s} h</text>}
        {Array.from({ length: 17 }, (_, h) => <text key={h} x={x0 + h * scale} y={70} textAnchor="middle" className="mono" style={{ fill: "var(--text-faint)", fontSize: 9 }}>{h}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        rate of surplus value = surplus / necessary = {s} / {n} = {rate.toFixed(0)}%
      </p>
      <p style={{ margin: "4px 0" }}>
        {s === 0 ? "With no surplus labour there is no profit, and no reason for the capitalist to hire." : `The worker is paid the value of their labour-power, yet works ${s} hours beyond what that value costs to produce.`}
      </p>
      <figcaption className="viz-caption">
        Lengthening the day raises surplus value absolutely; Marx records the long struggle over the legal working day. Raising productivity, so that the wage goods take fewer hours to make, shrinks necessary labour and raises surplus value relatively. Try both.
      </figcaption>
    </figure>
  );
}
