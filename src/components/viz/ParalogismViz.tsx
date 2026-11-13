"use client";

import { useState } from "react";

const PS = {
  substance: {
    name: "substance",
    major: "What cannot be thought otherwise than as subject does not exist otherwise than as subject, and so is substance.",
    minor: "A thinking being, considered merely as such, cannot be thought otherwise than as subject.",
    concl: "So a thinking being exists only as subject, that is, as substance.",
    term: "subject",
    diag: "In the major premise, subject means a thing given in intuition that persists as the bearer of properties. In the minor, it means only the logical subject of the I think, which is given in no intuition at all. The middle term shifts meaning, so the syllogism is invalid.",
  },
  simple: {
    name: "simplicity",
    major: "A thing whose action can never be regarded as the concurrence of many acting things is simple.",
    minor: "The soul, the thinking I, is such a thing.",
    concl: "So the soul is simple.",
    term: "acting thing",
    diag: "The unity of the I think is the logical unity of a single consciousness, not knowledge of a simple substance doing the thinking. Nothing in the bare I tells us what kind of thing, if any, underlies it.",
  },
  person: {
    name: "personality",
    major: "What is conscious of its numerical identity at different times is a person.",
    minor: "The soul is conscious of the numerical identity of itself at different times.",
    concl: "So the soul is a person, a persisting substance.",
    term: "numerical identity",
    diag: "The identity of the I across my thoughts is a formal condition of their belonging together. It is compatible with a series of substances passing their states along, as one elastic ball passes its motion to the next. It does not show that one substance persists.",
  },
  outer: {
    name: "the ideality of outer relation",
    major: "That whose existence can only be inferred as a cause of given perceptions has only a doubtful existence.",
    minor: "All outer appearances are such that their existence can only be inferred as the cause of perceptions.",
    concl: "So the existence of all objects of the outer senses is doubtful.",
    term: "outer",
    diag: "This is Descartes's sceptical step. Kant replies that it treats outer objects as things in themselves behind our perceptions. As appearances in space they are perceived immediately, so no doubtful inference is needed.",
  },
};
type K = keyof typeof PS;

/** The paralogisms of rational psychology: syllogisms about the soul that look valid, but whose middle term shifts its meaning. */
export function ParalogismViz() {
  const [k, setK] = useState<K>("substance");
  const [show, setShow] = useState(false);
  const P = PS[k];
  const pick = (q: K) => { setK(q); setShow(false); };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Paralogism">
        {(Object.keys(PS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => pick(q)}>{PS[q].name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td className="mono-meta">major premise</td><td>{P.major}</td></tr>
          <tr><td className="mono-meta">minor premise</td><td>{P.minor}</td></tr>
          <tr><td className="mono-meta">conclusion</td><td style={{ color: show ? "var(--danger)" : "var(--text)" }}>{P.concl}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className={show ? "btn" : "btn btn-primary"} onClick={() => setShow(!show)}>{show ? "Hide the diagnosis" : "Show Kant's diagnosis"}</button>
      </div>
      {show && <p style={{ margin: "10px 0 0", lineHeight: 1.55 }} aria-live="polite"><span className="mono-meta" style={{ textTransform: "none" }}>the shifting term: {P.term}. </span>{P.diag}</p>}
      <figcaption className="viz-caption">
        Rational psychology tries to prove, from the bare I think, that the soul is a simple, persisting substance distinct from the body. Each argument has the form of a valid syllogism, but trades on an ambiguity, so the conclusion does not follow.
      </figcaption>
    </figure>
  );
}
