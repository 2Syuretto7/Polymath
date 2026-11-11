"use client";

import { useState } from "react";

type Obj = { F: boolean; G: boolean };
type Arg = { name: string; premises: { f: string; v: (w: Obj[]) => boolean }[]; conclusion: { f: string; v: (w: Obj[]) => boolean }; valid: boolean; hint: string };

const all = (w: Obj[], p: (o: Obj) => boolean) => w.every(p);
const some = (w: Obj[], p: (o: Obj) => boolean) => w.some(p);

const ARGS: Arg[] = [
  {
    name: "Affirming the consequent",
    premises: [{ f: "∀x(Fx → Gx)", v: (w) => all(w, (o) => !o.F || o.G) }, { f: "∃xGx", v: (w) => some(w, (o) => o.G) }],
    conclusion: { f: "∃xFx", v: (w) => some(w, (o) => o.F) },
    valid: false, hint: "Try a world where nothing is F.",
  },
  {
    name: "Two existentials",
    premises: [{ f: "∃xFx", v: (w) => some(w, (o) => o.F) }, { f: "∃xGx", v: (w) => some(w, (o) => o.G) }],
    conclusion: { f: "∃x(Fx ∧ Gx)", v: (w) => some(w, (o) => o.F && o.G) },
    valid: false, hint: "The F and the G need not be the same object.",
  },
  {
    name: "Splitting a universal",
    premises: [{ f: "∀x(Fx ∨ Gx)", v: (w) => all(w, (o) => o.F || o.G) }],
    conclusion: { f: "∀xFx ∨ ∀xGx", v: (w) => all(w, (o) => o.F) || all(w, (o) => o.G) },
    valid: false, hint: "You need at least two objects.",
  },
  {
    name: "A valid one",
    premises: [{ f: "∀x(Fx → Gx)", v: (w) => all(w, (o) => !o.F || o.G) }, { f: "∃xFx", v: (w) => some(w, (o) => o.F) }],
    conclusion: { f: "∃xGx", v: (w) => some(w, (o) => o.G) },
    valid: true, hint: "Keep trying, and ask yourself why you cannot succeed.",
  },
];

const NAMES = ["a", "b", "c", "d"];

/** Build a small world that makes the premises true and the conclusion false, if you can. */
export function CounterexampleViz() {
  const [k, setK] = useState(0);
  const [size, setSize] = useState(2);
  const [w, setW] = useState<Obj[]>(NAMES.map(() => ({ F: false, G: false })));
  const [hint, setHint] = useState(false);
  const A = ARGS[k];
  const world = w.slice(0, size);
  const ps = A.premises.map((p) => p.v(world));
  const c = A.conclusion.v(world);
  const found = ps.every(Boolean) && !c;
  const flip = (i: number, key: "F" | "G") => setW(w.map((o, j) => (j === i ? { ...o, [key]: !o[key] } : o)));
  const pick = (i: number) => { setK(i); setHint(false); setW(NAMES.map(() => ({ F: false, G: false }))); };
  const tv = (v: boolean) => <span className={v ? "viz-verdict viz-verdict-info" : "viz-verdict viz-verdict-right"} style={{ fontWeight: 600 }}>{v ? "true" : "false"}</span>;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Argument">
        {ARGS.map((a, i) => (
          <button key={a.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{a.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 4px" }}>{A.premises.map((p) => p.f).join(", ")} ∴ {A.conclusion.f}</p>
      <div className="viz-controls" style={{ marginTop: 4 }}>
        <span style={{ fontSize: 14 }}>Objects in the domain:</span>
        {[1, 2, 3, 4].map((n) => (
          <button key={n} type="button" className={n === size ? "btn btn-primary" : "btn"} aria-pressed={n === size} onClick={() => setSize(n)}>{n}</button>
        ))}
      </div>
      <table className="table" style={{ width: "auto", marginTop: 8, textAlign: "center" }}>
        <thead><tr><th style={{ textTransform: "none" }}>object</th><th className="mono" style={{ textTransform: "none" }}>F</th><th className="mono" style={{ textTransform: "none" }}>G</th></tr></thead>
        <tbody>
          {world.map((o, i) => (
            <tr key={i}>
              <td className="mono">{NAMES[i]}</td>
              {(["F", "G"] as const).map((key) => (
                <td key={key} style={{ padding: 3 }}>
                  <button type="button" onClick={() => flip(i, key)} aria-pressed={o[key]} aria-label={`${NAMES[i]} is ${key}`}
                    style={{ width: 34, height: 30, borderRadius: 6, border: "1px solid var(--border-strong)", background: o[key] ? "var(--accent)" : "var(--surface)", cursor: "pointer" }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {A.premises.map((p, i) => <tr key={p.f + i}><td>premise <span className="mono">{p.f}</span></td><td>{tv(ps[i])}</td></tr>)}
          <tr><td>conclusion <span className="mono">{A.conclusion.f}</span></td><td>{tv(c)}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setHint(!hint)}>{hint ? "Hide the hint" : "Show a hint"}</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {found
          ? <span className="viz-verdict viz-verdict-info">Counterexample found: every premise is true and the conclusion is false in this world, so the argument is invalid.</span>
          : <>Click the squares to decide which objects are F and which are G. Your aim is a world where every premise is true and the conclusion false.{hint ? ` ${A.hint}` : ""}{hint && A.valid ? " This argument is valid: no such world exists, of any size." : ""}</>}
      </figcaption>
    </figure>
  );
}
