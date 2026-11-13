"use client";

import { useState } from "react";

/** Marx's account of exploitation: the working day splits into necessary labour, which reproduces the wage, and surplus labour. */
export function SurplusValueViz() {
  const [day, setDay] = useState(10);
  const [rate, setRate] = useState(100);
  const [wage, setWage] = useState(500);
  const nec = Math.min(day, wage / rate);
  const sur = day - nec;
  const W = 560, H = 90, X = (h: number) => 20 + (h / 14) * (W - 40);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>length of the working day: <span className="mono">{day} hours</span></span><input type="range" min={6} max={14} step={1} value={day} onChange={(e) => setDay(Number(e.target.value))} /></label>
        <label><span>value produced per hour: <span className="mono">₹{rate}</span></span><input type="range" min={50} max={250} step={10} value={rate} onChange={(e) => setRate(Number(e.target.value))} /></label>
        <label><span>daily wage: <span className="mono">₹{wage}</span></span><input type="range" min={200} max={1000} step={50} value={wage} onChange={(e) => setWage(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The working day divided into necessary and surplus labour" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <rect x={X(0)} y={20} width={X(nec) - X(0)} height={34} style={{ fill: "var(--text-faint)" }} />
        <rect x={X(nec)} y={20} width={X(day) - X(nec)} height={34} style={{ fill: "var(--accent)" }} />
        <rect x={X(0)} y={20} width={X(14) - X(0)} height={34} style={{ fill: "none", stroke: "var(--border)" }} />
        {nec > 1.2 && <text x={(X(0) + X(nec)) / 2} y={42} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>necessary {nec.toFixed(1)} h</text>}
        {sur > 1.2 && <text x={(X(nec) + X(day)) / 2} y={42} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 12 }}>surplus {sur.toFixed(1)} h</text>}
        {[0, 2, 4, 6, 8, 10, 12, 14].map((h) => <text key={h} x={X(h)} y={72} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{h}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>value produced in the day: ₹{day * rate}; paid as wages: ₹{Math.min(wage, day * rate)}; surplus value kept by the owner: ₹{Math.max(0, day * rate - wage)}</div>
        <div>rate of surplus value s/v = {nec > 0 ? (sur / nec).toFixed(2) : "∞"}{sur === 0 ? ": the wage absorbs everything produced" : ""}</div>
      </div>
      <figcaption className="viz-caption">
        Marx held that labour power is sold at its value, the cost of the worker&rsquo;s subsistence, yet labour creates more
        value than that. Lengthening the day raises absolute surplus value; raising productivity shortens the necessary part
        and raises relative surplus value. No one is cheated in the exchange, yet, Marx argued, the worker is exploited.
      </figcaption>
    </figure>
  );
}
