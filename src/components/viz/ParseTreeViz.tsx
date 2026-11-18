"use client";

import { useState } from "react";

type Node = { label: string; kids: Node[] };
const FORMULAS = ["((A ∧ B) → C)", "(¬(A ∨ (¬B)))", "((A → B) → ((¬B) → (¬A)))", "((A ∧ B) → C"];

/** Parse a fully parenthesised sentential formula; returns null if it is not well formed. */
export function parse(s: string): Node | null {
  const toks = s.replace(/\s+/g, "").split("");
  let i = 0;
  const go = (): Node | null => {
    const t = toks[i];
    if (t === undefined) return null;
    if (/[A-Z]/.test(t)) { i++; return { label: t, kids: [] }; }
    if (t !== "(") return null;
    i++;
    if (toks[i] === "¬") { i++; const a = go(); if (!a || toks[i] !== ")") return null; i++; return { label: "¬", kids: [a] }; }
    const a = go(); if (!a) return null;
    const op = toks[i]; if (!op || !"∧∨→".includes(op)) return null; i++;
    const b = go(); if (!b || toks[i] !== ")") return null; i++;
    return { label: op, kids: [a, b] };
  };
  const r = go();
  return r && i === toks.length ? r : null;
}

/** A formula, its parse tree, and the running count of left minus right parentheses. */
export function ParseTreeViz() {
  const [fi, setFi] = useState(0);
  const s = FORMULAS[fi];
  const tree = parse(s);
  const syms = s.replace(/\s+/g, "").split("");
  let d = 0;
  const depths = syms.map((c) => (d += c === "(" ? 1 : c === ")" ? -1 : 0));
  const nodes: { x: number; y: number; label: string; px?: number; py?: number }[] = [];
  if (tree) {
    // compute positions; parent links fixed after layout
    const pos = new Map<Node, { x: number; y: number }>();
    const x0 = { v: 40 };
    const place = (n: Node, depth: number): { x: number; y: number } => {
      if (!n.kids.length) { const p = { x: x0.v, y: 24 + depth * 40 }; x0.v += 56; pos.set(n, p); return p; }
      const ks = n.kids.map((k) => place(k, depth + 1));
      const p = { x: ks.reduce((a, k) => a + k.x, 0) / ks.length, y: 24 + depth * 40 }; pos.set(n, p); return p;
    };
    place(tree, 0);
    const walk = (n: Node, par?: { x: number; y: number }) => { const p = pos.get(n)!; nodes.push({ ...p, label: n.label, px: par?.x, py: par?.y }); n.kids.forEach((k) => walk(k, p)); };
    walk(tree);
  }
  const w = Math.max(...nodes.map((n) => n.x), 100) + 40;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="formula">
        {FORMULAS.map((f, i) => <button key={f} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{f}</button>)}
      </div>
      <div style={{ display: "flex", gap: 2, alignItems: "flex-end", marginTop: 10, flexWrap: "wrap" }} aria-label="Parenthesis depth after each symbol">
        {syms.map((c, k) => (
          <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 22 }}>
            <div style={{ width: 14, height: Math.max(depths[k], 0) * 12 + 1, background: depths[k] > 0 || k === syms.length - 1 ? "var(--accent-soft)" : "var(--danger-soft)", border: "1px solid var(--border)" }} />
            <div className="mono" style={{ fontSize: 14 }}>{c}</div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>{depths[k]}</div>
          </div>
        ))}
      </div>
      {tree ? (
        <svg viewBox={`0 0 ${w} 230`} role="img" aria-label="Parse tree of the formula" style={{ width: "100%", maxWidth: w * 1.4, display: "block", marginTop: 8 }}>
          {nodes.map((n, k) => n.px !== undefined && <line key={`l${k}`} x1={n.px} y1={n.py} x2={n.x} y2={n.y} style={{ stroke: "var(--border)", strokeWidth: 1.5 }} />)}
          {nodes.map((n, k) => (
            <g key={k}>
              <circle cx={n.x} cy={n.y} r={14} style={{ fill: /[A-Z]/.test(n.label) ? "var(--bg)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
              <text x={n.x} y={n.y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{n.label}</text>
            </g>
          ))}
        </svg>
      ) : (
        <p className="mono" style={{ color: "var(--danger)", fontWeight: 700 }}>Not a formula: the count never returns to 0, so no parse tree exists.</p>
      )}
      <figcaption className="viz-caption">
        The bars show how many left parentheses are still open after each symbol. In a formula the count is positive at
        every proper initial segment that starts with a parenthesis and returns to 0 exactly at the end. That fact, proved by
        induction, is why every formula has exactly one parse tree: its main connective is the only binary connective read at depth 1, or the ¬ just inside the outer parenthesis.
      </figcaption>
    </figure>
  );
}
