"use client";

import { useState } from "react";

type T = "A" | "E" | "I" | "O";
type Term = "S" | "M" | "P";
const TYPES: T[] = ["A", "E", "I", "O"];
// Figures as Aristotle has them: [subject, predicate] of the major premise, then of the minor premise.
const FIGURES: { name: string; major: [Term, Term]; minor: [Term, Term] }[] = [
  { name: "first figure", major: ["M", "P"], minor: ["S", "M"] },
  { name: "second figure", major: ["P", "M"], minor: ["S", "M"] },
  { name: "third figure", major: ["M", "P"], minor: ["M", "S"] },
];
const NAMES: Record<string, string> = {
  "1AAA": "Barbara", "1EAE": "Celarent", "1AII": "Darii", "1EIO": "Ferio", "1AAI": "Barbari", "1EAO": "Celaront",
  "2EAE": "Cesare", "2AEE": "Camestres", "2EIO": "Festino", "2AOO": "Baroco", "2EAO": "Cesaro", "2AEO": "Camestrop",
  "3AAI": "Darapti", "3IAI": "Disamis", "3AII": "Datisi", "3EAO": "Felapton", "3OAO": "Bocardo", "3EIO": "Ferison",
};

// Regions of the Venn diagram: membership in S, M, P, as bits.
const REGIONS = [1, 2, 3, 4, 5, 6, 7];
const has = (r: number, t: Term) => (r & (t === "S" ? 1 : t === "M" ? 2 : 4)) !== 0;
const SPOT: Record<number, [number, number]> = {
  1: [105, 100], 4: [295, 100], 2: [200, 258], 5: [200, 92], 3: [148, 186], 6: [252, 186], 7: [200, 150],
};

function holds(model: number[], t: T, x: Term, y: Term) {
  if (t === "A") return !model.some((r) => has(r, x) && !has(r, y));
  if (t === "E") return !model.some((r) => has(r, x) && has(r, y));
  if (t === "I") return model.some((r) => has(r, x) && has(r, y));
  return model.some((r) => has(r, x) && !has(r, y));
}

function sentence(t: T, x: Term, y: Term) {
  const [X, Y] = [x, y];
  return t === "A" ? `Every ${X} is ${Y}.` : t === "E" ? `No ${X} is ${Y}.` : t === "I" ? `Some ${X} is ${Y}.` : `Some ${X} is not ${Y}.`;
}

function describe(r: number) {
  const all = ["S", "M", "P"] as Term[];
  const inside = all.filter((t) => has(r, t)), outside = all.filter((t) => !has(r, t));
  return `in ${inside.join(" and ")}${outside.length ? ` but not in ${outside.join(" or ")}` : ""}`;
}

/** Choose a figure and mood; every possible situation is checked for one where the premises are true and the conclusion false. */
export function validMoods(withImport: boolean) {
  const out: string[] = [];
  FIGURES.forEach((F, fig) => {
    for (const a of TYPES) for (const b of TYPES) for (const c of TYPES) {
      let ok = true;
      for (let mask = 0; mask < 128 && ok; mask++) {
        const model = REGIONS.filter((_, i) => mask & (1 << i));
        if (withImport && !(["S", "M", "P"] as Term[]).every((t) => model.some((r) => has(r, t)))) continue;
        if (holds(model, a, ...F.major) && holds(model, b, ...F.minor) && !holds(model, c, "S", "P")) ok = false;
      }
      if (ok) out.push(`${fig + 1}${a}${b}${c}`);
    }
  });
  return out;
}

export function SyllogismViz() {
  const [fig, setFig] = useState(0);
  const [mood, setMood] = useState<[T, T, T]>(["A", "A", "A"]);
  const [imp, setImp] = useState(true);
  const F = FIGURES[fig];
  let counter: number[] | null = null;
  for (let mask = 0; mask < 128 && !counter; mask++) {
    const model = REGIONS.filter((_, i) => mask & (1 << i));
    if (imp && !(["S", "M", "P"] as Term[]).every((t) => model.some((r) => has(r, t)))) continue;
    if (holds(model, mood[0], ...F.major) && holds(model, mood[1], ...F.minor) && !holds(model, mood[2], "S", "P")) counter = model;
  }
  const name = NAMES[`${fig + 1}${mood.join("")}`];
  const set = (i: number, t: T) => setMood(mood.map((m, j) => (j === i ? t : m)) as [T, T, T]);
  const row = (label: string, i: number) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
      <span className="mono-meta" style={{ minWidth: 92 }}>{label}</span>
      <div className="segmented" role="group" aria-label={label}>
        {TYPES.map((t) => (
          <button key={t} type="button" className={mood[i] === t ? "seg is-on" : "seg"} aria-pressed={mood[i] === t} onClick={() => set(i, t)}>{t}</button>
        ))}
      </div>
    </div>
  );

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Figure">
        {FIGURES.map((f, i) => (
          <button key={f.name} type="button" className={i === fig ? "seg is-on" : "seg"} aria-pressed={i === fig} onClick={() => setFig(i)}>{f.name}</button>
        ))}
      </div>
      {row("major premise", 0)}
      {row("minor premise", 1)}
      {row("conclusion", 2)}
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        S is the subject of the conclusion, P its predicate, and M the middle term, which appears in both premises but not in the conclusion.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start", marginTop: 12 }}>
        <ol style={{ flex: "1 1 260px", margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li>{sentence(mood[0], ...F.major)}</li>
          <li>{sentence(mood[1], ...F.minor)}</li>
          <li style={{ listStyle: "none", marginLeft: -20 }}>So: {sentence(mood[2], "S", "P")}</li>
        </ol>
        <svg viewBox="0 0 400 320" role="img" aria-label={counter ? "Venn diagram with a counter-example" : "Venn diagram"} style={{ flex: "1 1 260px", maxWidth: 380 }}>
          {([["S", 150, 120], ["P", 250, 120], ["M", 200, 205]] as [Term, number, number][]).map(([t, cx, cy]) => (
            <g key={t}>
              <circle cx={cx} cy={cy} r={82} style={{ fill: "none", stroke: t === "M" ? "var(--text-muted)" : "var(--accent)", strokeWidth: 2 }} />
              <text x={t === "S" ? cx - 92 : t === "P" ? cx + 92 : cx} y={t === "M" ? cy + 100 : cy - 70} textAnchor={t === "S" ? "end" : t === "P" ? "start" : "middle"}
                style={{ fill: "var(--text)", fontSize: 15 }}>{t}</text>
            </g>
          ))}
          {counter?.map((r) => <circle key={r} cx={SPOT[r][0]} cy={SPOT[r][1]} r={8} style={{ fill: "var(--danger)" }} />)}
        </svg>
      </div>
      <div className="viz-controls">
        <button type="button" className={imp ? "viz-chip is-on" : "viz-chip"} aria-pressed={imp} onClick={() => setImp(!imp)}>
          Aristotle&rsquo;s assumption that every term applies to something: {imp ? "on" : "off"}
        </button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {counter
          ? `Invalid. The red dots mark kinds of thing that exist in a situation where both premises are true and the conclusion is false: ${counter.map((r) => `something ${describe(r)}`).join("; ")}.`
          : `Valid${name ? `: the medieval name is ${name}` : ""}. Every possible way of filling the diagram that makes the premises true makes the conclusion true.${!name ? " (This one has no traditional name.)" : ""}`}
      </figcaption>
    </figure>
  );
}
