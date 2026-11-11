"use client";

import { useState } from "react";

type Shape = "square" | "circle" | "triangle";
type Obj = { shape: Shape; filled: boolean } | null;

const NAMES = ["a", "b", "c", "d", "e", "f"];
const CYCLE: Obj[] = [
  { shape: "square", filled: true }, { shape: "square", filled: false },
  { shape: "circle", filled: true }, { shape: "circle", filled: false },
  { shape: "triangle", filled: true }, { shape: "triangle", filled: false },
  null,
];

const S = (o: NonNullable<Obj>) => o.shape === "square";
const C = (o: NonNullable<Obj>) => o.shape === "circle";
const F = (o: NonNullable<Obj>) => o.filled;

type Sentence = { f: string; en: string; kind: "all" | "some" | "none"; test: (o: NonNullable<Obj>) => boolean; trap?: string };

const SENTENCES: Sentence[] = [
  { f: "∀x(Sx → Fx)", en: "Every square is filled.", kind: "all", test: (o) => !S(o) || F(o) },
  { f: "∀x(Sx ∧ Fx)", en: "Everything is a filled square.", kind: "all", test: (o) => S(o) && F(o), trap: "A common wrong attempt at “every square is filled”." },
  { f: "∃x(Sx ∧ Fx)", en: "Some square is filled.", kind: "some", test: (o) => S(o) && F(o) },
  { f: "∃x(Sx → Fx)", en: "Something is either not a square or filled.", kind: "some", test: (o) => !S(o) || F(o), trap: "A common wrong attempt at “some square is filled”: any circle makes it true." },
  { f: "¬∃x(Cx ∧ Fx)", en: "No circle is filled.", kind: "none", test: (o) => C(o) && F(o) },
  { f: "∀x(Cx → ¬Fx)", en: "Every circle is unfilled.", kind: "all", test: (o) => !C(o) || !F(o) },
];

function Glyph({ o }: { o: NonNullable<Obj> }) {
  const st = { fill: o.filled ? "var(--accent)" : "var(--surface)", stroke: "var(--accent)", strokeWidth: 2.5 };
  if (o.shape === "square") return <rect x={12} y={12} width={36} height={36} style={st} />;
  if (o.shape === "circle") return <circle cx={30} cy={30} r={19} style={st} />;
  return <polygon points="30,10 51,48 9,48" style={st} />;
}

/** A small world of shapes, and quantified sentences that are true or false in it. */
export function WorldViz() {
  const [world, setWorld] = useState<number[]>([0, 3, 4, 1, 2, 6]);
  const objs = world.map((i, n) => ({ name: NAMES[n], o: CYCLE[i] })).filter((x): x is { name: string; o: NonNullable<Obj> } => x.o !== null);
  const bump = (n: number) => setWorld(world.map((v, i) => (i === n ? (v + 1) % CYCLE.length : v)));

  const verdict = (s: Sentence) => {
    const hits = objs.filter((x) => s.test(x.o)).map((x) => x.name);
    const misses = objs.filter((x) => !s.test(x.o)).map((x) => x.name);
    if (s.kind === "all") return misses.length ? { v: false, why: `fails for ${misses.join(", ")}` } : { v: true, why: objs.length ? "holds for every object" : "nothing to check: the domain is empty" };
    if (s.kind === "some") return hits.length ? { v: true, why: `witness: ${hits.join(", ")}` } : { v: false, why: "no object qualifies" };
    return hits.length ? { v: false, why: hits.length > 1 ? `but ${hits.join(", ")} are filled circles` : `but ${hits[0]} is a filled circle` } : { v: true, why: "no object is a filled circle" };
  };

  return (
    <figure className="viz">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {world.map((i, n) => {
          const o = CYCLE[i];
          return (
            <button key={n} type="button" className="btn" onClick={() => bump(n)} style={{ height: "auto", padding: 6, display: "grid", justifyItems: "center", minWidth: 72 }}
              aria-label={`Object ${NAMES[n]}: ${o ? `${o.filled ? "filled" : "unfilled"} ${o.shape}` : "empty slot"}. Click to change.`}>
              <svg viewBox="0 0 60 60" width={52} height={52} aria-hidden="true">
                {o ? <Glyph o={o} /> : <rect x={12} y={12} width={36} height={36} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "3 3" }} />}
              </svg>
              <span className="mono-meta">{o ? NAMES[n] : "empty"}</span>
            </button>
          );
        })}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead><tr><th>Sentence</th><th>Reads as</th><th>In this world</th></tr></thead>
        <tbody>
          {SENTENCES.map((s) => {
            const r = verdict(s);
            return (
              <tr key={s.f}>
                <td className="mono" style={{ whiteSpace: "nowrap" }}>{s.f}</td>
                <td>{s.en}{s.trap && <><br /><span className="mono-meta">{s.trap}</span></>}</td>
                <td><span className={r.v ? "viz-verdict viz-verdict-info" : "viz-verdict viz-verdict-right"} style={{ fontWeight: 600 }}>{r.v ? "true" : "false"}</span> <span className="mono-meta">{r.why}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Click an object to change its shape or shading, or to empty its slot. Sx: x is a square. Cx: x is a circle. Fx: x
        is filled. Try a world with no squares at all, and watch the first sentence.
      </figcaption>
    </figure>
  );
}
