"use client";

import { useState } from "react";

const FORMULAS: string[] = [
  "∀ x ( E x y → ∃ y E y x )",
  "∃ x E x x ∧ E x z",
  "∀ x ∀ y ( E x y → E y x )",
  "( ∀ x P x ) → P x",
];
const VARS = new Set(["x", "y", "z"]);

type Tok = { t: string; kind: "var" | "binder" | "other"; binder: number };

/** Mark each variable occurrence as free (binder −1) or bound by the quantifier with the given number. */
export function analyse(src: string): Tok[] {
  const raw = src.split(" ");
  const out: Tok[] = raw.map((t) => ({ t, kind: "other", binder: -1 }));
  let i = 0, q = 0;
  const formula = (env: Record<string, number>) => { unary(env); if (["→", "∧", "∨"].includes(raw[i])) { i++; formula(env); } };
  const unary = (env: Record<string, number>) => {
    const t = raw[i];
    if (t === "¬") { i++; unary(env); return; }
    if (t === "∀" || t === "∃") {
      const v = raw[i + 1]; q++;
      out[i + 1] = { t: v, kind: "binder", binder: q };
      i += 2; unary({ ...env, [v]: q }); return;
    }
    if (t === "(") { i++; formula(env); i++; return; }
    const arity = t === "E" ? 2 : 1;
    i++;
    for (let k = 0; k < arity; k++) { const v = raw[i]; if (VARS.has(v)) out[i] = { t: v, kind: "var", binder: env[v] ?? -1 }; i++; }
  };
  formula({});
  return out;
}

/** Colour every variable occurrence in a formula as free or bound, and say which quantifier binds it. */
export function FreeBoundViz() {
  const [fi, setFi] = useState(0);
  const toks = analyse(FORMULAS[fi]);
  const free = [...new Set(toks.filter((t) => t.kind === "var" && t.binder < 0).map((t) => t.t))].sort();
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="formula">
        {FORMULAS.map((f, i) => <button key={f} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f.replace(/ /g, "").replace(/([→∧∨])/g, " $1 ")}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 26, display: "flex", gap: 6, flexWrap: "wrap", margin: "16px 0", alignItems: "baseline" }}>
        {toks.map((t, k) => (
          <span key={k} style={{
            padding: "0 3px", borderRadius: 4,
            color: t.kind === "other" ? "var(--text)" : t.binder < 0 ? "var(--danger)" : "var(--accent)",
            background: t.kind === "var" && t.binder < 0 ? "var(--danger-soft)" : t.kind !== "other" ? "var(--accent-soft)" : undefined,
            fontWeight: t.kind === "binder" ? 700 : 400,
          }}>
            {t.t}{t.kind !== "other" && t.binder > 0 && <sub style={{ fontSize: 12 }}>{t.binder}</sub>}
          </span>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>free variables: {free.length ? free.join(", ") : "none"}</div>
        <div style={{ fontWeight: 700 }}>{free.length ? "This is a formula but not a sentence." : "This is a sentence: no variable occurs free."}</div>
      </div>
      <figcaption className="viz-caption">
        Each quantifier carries a number, and every occurrence it binds carries the same number, in blue. Red occurrences are
        free. A quantifier binds only within its scope, the formula immediately after it, so the same letter can be free in
        one place and bound in another.
      </figcaption>
    </figure>
  );
}
