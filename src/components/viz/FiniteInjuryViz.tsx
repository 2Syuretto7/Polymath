"use client";

import { useMemo, useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** A toy run of a finite injury construction: when Rⱼ acts it injures every Rₖ with k > j, which must act again. */
export function injuryRun(reqs: number, stages: number, seed = 3) {
  const r = rng(seed);
  const satisfied = Array(reqs).fill(false);
  const injuries = Array(reqs).fill(0);
  const acts = Array(reqs).fill(0);
  const history: { satisfied: boolean[]; injuries: number[]; actor: number }[] = [];
  for (let s = 0; s < stages; s++) {
    const waiting = satisfied.map((x, i) => (x ? -1 : i)).filter((i) => i >= 0);
    let actor = -1;
    if (waiting.length && r() < 0.55) {
      actor = waiting[Math.floor(r() * waiting.length)];
      satisfied[actor] = true;
      acts[actor]++;
      for (let k = actor + 1; k < reqs; k++) if (satisfied[k]) { satisfied[k] = false; injuries[k]++; }
    }
    history.push({ satisfied: [...satisfied], injuries: [...injuries], actor });
  }
  return history;
}

export function FiniteInjuryViz() {
  const [s, setS] = useState(12);
  const [seed, setSeed] = useState(3);
  const R = 5;
  const hist = useMemo(() => injuryRun(R, 80, seed), [seed]);
  const h = hist[s - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="run">
        {[3, 11, 29].map((v, i) => <button key={v} type="button" aria-pressed={seed === v} className={seed === v ? "seg is-on" : "seg"} onClick={() => setSeed(v)}>run {i + 1}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>stage s = {s} <input type="range" min={1} max={80} step={1} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Requirements in priority order, with their injuries so far" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: R }, (_, i) => {
          const y = 18 + i * 30;
          const bound = 2 ** i - 1;
          return (
            <g key={i}>
              <text x={10} y={y + 14} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>R{"₀₁₂₃₄"[i]}</text>
              <rect x={44} y={y} width={22} height={20} rx={4} style={{ fill: h.satisfied[i] ? "var(--success)" : "var(--surface)", stroke: h.actor === i ? "var(--accent)" : "var(--border-strong)", strokeWidth: h.actor === i ? 3 : 1 }} />
              {Array.from({ length: Math.max(bound, 1) }, (_, j) => (
                <rect key={j} x={90 + j * 20} y={y + 3} width={15} height={14} rx={3} style={{ fill: j < h.injuries[i] ? "var(--danger)" : "var(--bg-subtle)", stroke: "var(--border)", opacity: bound === 0 ? 0.3 : 1 }} />
              ))}
              <text x={530} y={y + 14} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{h.injuries[i]} of at most {bound}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Stage {s}: {h.actor >= 0 ? `R${"₀₁₂₃₄"[h.actor]} acts, injuring every satisfied requirement below it.` : "no requirement acts."} {h.satisfied.filter(Boolean).length} of {R} are currently satisfied.
      </p>
      <figcaption className="viz-caption">
        Green squares are satisfied requirements, and red cells count injuries. R₀ has top priority and is never injured.
        Each requirement acts finitely often once those above it have settled, so Rᵢ is injured at most 2ⁱ − 1 times and is
        eventually satisfied for good.
      </figcaption>
    </figure>
  );
}
