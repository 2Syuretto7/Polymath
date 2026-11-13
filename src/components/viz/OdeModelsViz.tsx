"use client";

import { useState } from "react";

const MODELS = ["cooling tea", "logistic growth", "mixing tank"];

/** Three first-order models with their exact solutions: Newton's cooling, logistic growth and a mixing tank. */
export function OdeModelsViz() {
  const [m, setM] = useState(0);
  const [p1, setP1] = useState([0.1, 0.5, 2]);
  const [p2, setP2] = useState([25, 100, 0.5]);
  const [p3, setP3] = useState([90, 5, 0]);
  const set = (arr: number[], f: (v: number[]) => void, i: number, v: number) => { const c = [...arr]; c[i] = v; f(c); };
  let T = 60, ymax = 100, g: (t: number) => number = () => 0, formula = "", eq = "", sl: [string, number, number, number, number, (v: number) => void][] = [];
  if (m === 0) {
    const [k, Ta, T0] = [p1[0], p2[0], p3[0]];
    T = 60; ymax = 100;
    g = (t) => Ta + (T0 - Ta) * Math.exp(-k * t);
    eq = "dT/dt = −k(T − Tₐ)";
    formula = `T(t) = ${Ta} + ${T0 - Ta} e^(−${k}t); after 10 minutes T = ${g(10).toFixed(1)} °C`;
    sl = [["cooling constant k (per minute)", k, 0.02, 0.3, 0.01, (v) => set(p1, setP1, 0, v)], ["room temperature Tₐ (°C)", Ta, 0, 40, 1, (v) => set(p2, setP2, 0, v)], ["starting temperature (°C)", T0, 40, 100, 1, (v) => set(p3, setP3, 0, v)]];
  } else if (m === 1) {
    const [r, K, P0] = [p1[1], p2[1], p3[1]];
    T = 30; ymax = 200;
    g = (t) => K / (1 + ((K - P0) / P0) * Math.exp(-r * t));
    eq = "dP/dt = rP(1 − P/K)";
    formula = `P(t) = ${K}/(1 + ${((K - P0) / P0).toFixed(2)} e^(−${r}t)); fastest growth at P = K/2 = ${K / 2}`;
    sl = [["growth rate r", r, 0.1, 1.5, 0.05, (v) => set(p1, setP1, 1, v)], ["carrying capacity K", K, 50, 190, 10, (v) => set(p2, setP2, 1, v)], ["starting population P₀", P0, 1, 40, 1, (v) => set(p3, setP3, 1, v)]];
  } else {
    const [rate, cin, A0] = [p1[2], p2[2], p3[2]];
    const V = 100;
    T = 200; ymax = 100;
    g = (t) => cin * V + (A0 - cin * V) * Math.exp(-(rate / V) * t);
    eq = "dA/dt = r·c − (r/V)A, with V = 100 litres";
    formula = `A(t) = ${(cin * V).toFixed(0)} + ${(A0 - cin * V).toFixed(0)} e^(−${(rate / V).toFixed(3)}t); salt approaches ${(cin * V).toFixed(0)} g`;
    sl = [["flow rate r (litres per minute)", rate, 0.5, 6, 0.5, (v) => set(p1, setP1, 2, v)], ["inflow concentration c (g per litre)", cin, 0, 1, 0.05, (v) => set(p2, setP2, 2, v)], ["starting salt A₀ (g)", A0, 0, 100, 5, (v) => set(p3, setP3, 2, v)]];
  }
  const W = 520, H = 220, pad = 34;
  const X = (t: number) => pad + (t / T) * (W - 2 * pad);
  const Y = (v: number) => H - 22 - (Math.max(0, Math.min(ymax, v)) / ymax) * (H - 36);
  const path = Array.from({ length: 301 }, (_, i) => (T * i) / 300).map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(g(t)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Model">
        {MODELS.map((nm, i) => <button key={nm} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{nm}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        {sl.map(([lab, v, lo, hi, st, on]) => (
          <label key={lab}><span>{lab}: <span className="mono">{v}</span></span>
            <input type="range" min={lo} max={hi} step={st} value={v} onChange={(e) => on(Number(e.target.value))} /></label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Solution of the chosen model over time" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={pad} y1={Y(0)} x2={pad} y2={Y(ymax)} style={{ stroke: "var(--border)" }} />
        {[0, ymax / 2, ymax].map((v) => <text key={v} x={pad - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{v}</text>)}
        {[0, T / 2, T].map((t) => <text key={t} x={X(t)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>{eq}</p>
      <p className="mono" style={{ margin: "4px 0" }}>{formula}</p>
      <figcaption className="viz-caption">
        Each model turns a rule about rates of change into an equation. Cooling and the mixing tank are linear and approach their equilibrium exponentially. Logistic growth is separable but nonlinear: it starts almost exponentially, then bends into an S as the population nears its carrying capacity.
      </figcaption>
    </figure>
  );
}
