"use client";

import { useState } from "react";

type Ops = "field" | "roots";

/** Closing a countable set under countably many operations, stage by stage, never leaves the countable. */
export function SkolemHullViz() {
  const [ops, setOps] = useState<Ops>("field");
  const [stage, setStage] = useState(2);
  const key = (x: number) => Math.round(x * 1e9) / 1e9;
  let S = new Map<number, number>([[0, 0], [1, 1]]);
  const sizes = [S.size];
  for (let k = 0; k < stage; k++) {
    const arr = [...S.values()];
    const next = new Map(S);
    const add = (v: number) => { if (Number.isFinite(v) && Math.abs(v) < 1e6) { const kk = key(v); if (!next.has(kk)) next.set(kk, v); } };
    for (const a of arr) {
      for (const b of arr) { add(a + b); add(a - b); add(a * b); if (b !== 0) add(a / b); }
      if (ops === "roots" && a > 0) add(Math.sqrt(a));
    }
    S = next;
    sizes.push(S.size);
  }
  const vals = [...S.values()];
  const W = 520, H = 120, R = 4;
  const X = (x: number) => 20 + ((x + R) / (2 * R)) * 480;
  const inWin = vals.filter((v) => Math.abs(v) <= R);
  const irr = vals.filter((v) => { for (let q = 1; q <= 400; q++) if (Math.abs(v * q - Math.round(v * q)) < 1e-7) return false; return true; }).length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Operations">
        <button type="button" aria-pressed={ops === "field"} className={ops === "field" ? "seg is-on" : "seg"} onClick={() => setOps("field")}>+, −, ×, ÷</button>
        <button type="button" aria-pressed={ops === "roots"} className={ops === "roots" ? "seg is-on" : "seg"} onClick={() => setOps("roots")}>+, −, ×, ÷ and √</button>
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>stages of closure: <span className="mono">{stage}</span></span>
          <input type="range" min={0} max={3} step={1} value={stage} onChange={(e) => setStage(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The elements generated so far, on the number line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-R)} y1={60} x2={X(R)} y2={60} style={{ stroke: "var(--border)" }} />
        {[-4, -2, 0, 2, 4].map((k) => <text key={k} x={X(k)} y={92} textAnchor={k === -4 ? "start" : k === 4 ? "end" : "middle"} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>)}
        {inWin.map((v, i) => <line key={i} x1={X(v)} y1={48} x2={X(v)} y2={72} style={{ stroke: "var(--accent)", strokeWidth: 1, opacity: 0.7 }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>elements after each stage: {sizes.join(", ")}</div>
        <div>shown between −4 and 4: {inWin.length}; irrational: {irr}</div>
        <div style={{ fontWeight: 700 }}>every stage is finite, so the union of all stages is countable</div>
      </div>
      <figcaption className="viz-caption">
        Start with 0 and 1 and repeatedly throw in the results of the operations. Each stage is finite, and the union of
        countably many finite stages is countable; with +, −, × and ÷ it is the rationals, a countable substructure of the
        reals closed under the field operations. The downward Löwenheim–Skolem theorem works the same way: close a countable
        set under witnesses for every existential sentence, and you get a countable elementary substructure.
      </figcaption>
    </figure>
  );
}
