"use client";

import { useState } from "react";

type V = [boolean, boolean, boolean];
type F = { s: string; f: (v: V) => boolean };
const imp = (a: boolean, b: boolean) => !a || b;
const START: { label: string; set: F[] }[] = [
  { label: "{P → Q, ¬Q ∨ R, P}", set: [{ s: "P → Q", f: ([p, q]) => imp(p, q) }, { s: "¬Q ∨ R", f: ([, q, r]) => !q || r }, { s: "P", f: ([p]) => p }] },
  { label: "{P ∨ Q, ¬P}", set: [{ s: "P ∨ Q", f: ([p, q]) => p || q }, { s: "¬P", f: ([p]) => !p }] },
  { label: "{¬(P ∧ Q), Q → R}", set: [{ s: "¬(P ∧ Q)", f: ([p, q]) => !(p && q) }, { s: "Q → R", f: ([, q, r]) => imp(q, r) }] },
];
const ENUM: F[] = [
  { s: "P ∨ Q", f: ([p, q]) => p || q },
  { s: "¬P", f: ([p]) => !p },
  { s: "Q → R", f: ([, q, r]) => imp(q, r) },
  { s: "P", f: ([p]) => p },
  { s: "Q", f: ([, q]) => q },
  { s: "R", f: ([, , r]) => r },
];
const ROWS: V[] = [];
for (const p of [true, false]) for (const q of [true, false]) for (const r of [true, false]) ROWS.push([p, q, r]);
const neg = (x: F): F => ({ s: x.s.length > 2 ? `¬(${x.s})` : `¬${x.s}`, f: (v) => !x.f(v) });

/** Lindenbaum's lemma in miniature: extend a consistent set, one formula at a time, to a maximal consistent set. */
export function LindenbaumViz() {
  const [si, setSi] = useState(0);
  const [step, setStep] = useState(0);
  let gamma = [...START[si].set];
  const log: { s: string; added: string; rejected: boolean }[] = [];
  for (let i = 0; i < step; i++) {
    const phi = ENUM[i];
    const ok = ROWS.some((v) => gamma.every((g) => g.f(v)) && phi.f(v));
    const add = ok ? phi : neg(phi);
    gamma = [...gamma, add];
    log.push({ s: phi.s, added: add.s, rejected: !ok });
  }
  const models = ROWS.filter((v) => gamma.every((g) => g.f(v)));
  const done = step === ENUM.length;
  const tf = (b: boolean) => (b ? "true" : "false");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting set">
        {START.map((s0, i) => <button key={s0.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => { setSi(i); setStep(0); }}>{s0.label}</button>)}
      </div>
      <div className="viz-controls" style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button type="button" className="btn btn-ghost" disabled={done} onClick={() => setStep(step + 1)}>consider the next formula</button>
        <button type="button" className="btn btn-ghost" onClick={() => setStep(0)}>start again</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        <div>start: {START[si].label}</div>
        {log.map((l, i) => (
          <div key={i} style={{ color: l.rejected ? "var(--text)" : "var(--text-muted)" }}>
            step {i + 1}: {l.s} {l.rejected ? `would be inconsistent, so add ${l.added}` : "is consistent with the set, so add it"}
          </div>
        ))}
        <div style={{ marginTop: 4 }}>valuations satisfying the set so far: {models.length} of 8</div>
        {done && models.length === 1 && (
          <div style={{ fontWeight: 700 }}>the maximal set fixes a valuation: P {tf(models[0][0])}, Q {tf(models[0][1])}, R {tf(models[0][2])}</div>
        )}
        {!done && <div style={{ fontWeight: 700 }}>next to consider: {ENUM[step].s}</div>}
      </div>
      <figcaption className="viz-caption">
        List every formula, then go through the list: add each formula if the set stays consistent, and otherwise add its
        negation. The result is maximal consistent: for every formula it contains either it or its negation. Making an atom
        true exactly when the set contains it gives a valuation satisfying the whole set, which is the heart of the
        completeness proof. Here consistency is tested by truth tables only to keep the picture small.
      </figcaption>
    </figure>
  );
}
