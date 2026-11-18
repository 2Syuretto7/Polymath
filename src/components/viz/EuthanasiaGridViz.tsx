"use client";

import { useState } from "react";

const CONSENT = ["voluntary", "non-voluntary", "involuntary"];
const ACT = ["passive", "active"];
const DESC: string[][] = [
  ["A competent patient refuses a ventilator or feeding tube and is allowed to die.", "A competent patient asks a doctor to give a lethal injection, and the doctor does."],
  ["A patient in a permanent vegetative state, who left no wishes, has treatment withdrawn.", "A patient who cannot express wishes, such as a newborn with a fatal condition, is given a lethal injection."],
  ["Treatment is withheld from a competent patient who wants it.", "A competent patient who wants to live is killed."],
];
const VIEWS = ["traditional doctrine", "Rachels", "Indian law today"];
const VERD: string[][][] = [
  [["permissible", "permissible", "lawful, by refusal or an advance directive"], ["wrong: intentional killing", "no different in itself from passive", "unlawful"]],
  [["often permissible", "no different in itself from active", "lawful, under procedures set by the Supreme Court"], ["wrong", "can be more humane than letting die slowly", "unlawful"]],
  [["wrong", "wrong", "unlawful"], ["wrong: murder", "wrong: murder", "unlawful: murder"]],
];

/** Kinds of euthanasia by consent and by act, with the verdicts of three positions. */
export function EuthanasiaGridViz() {
  const [c, setC] = useState(0);
  const [a, setA] = useState(0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="consent">
        {CONSENT.map((t, i) => <button key={t} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>{t}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="act" style={{ marginTop: 4 }}>
        {ACT.map((t, i) => <button key={t} type="button" aria-pressed={a === i} className={a === i ? "seg is-on" : "seg"} onClick={() => setA(i)}>{t}</button>)}
      </div>
      <p style={{ fontSize: 14, margin: "8px 0" }}><strong>{CONSENT[c]}, {ACT[a]}.</strong> {DESC[c][a]}</p>
      <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
        <tbody>
          {VIEWS.map((v, i) => {
            const t = VERD[c][a][i];
            const bad = /wrong|unlawful/.test(t);
            return (
              <tr key={v} style={{ borderTop: "1px solid var(--border)" }}>
                <td style={{ padding: "6px 8px", color: "var(--text-muted)", width: "34%" }}>{v}</td>
                <td style={{ padding: "6px 8px", color: bad ? "var(--danger)" : "var(--accent)", fontWeight: 600 }}>{t}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        The traditional doctrine permits letting die but forbids killing. Rachels argues the difference between killing and
        letting die is not in itself morally significant. Indian law, after the Supreme Court&rsquo;s rulings in the Aruna
        Shanbaug (2011) and Common Cause (2018) cases, allows passive euthanasia and living wills, but not active euthanasia.
      </figcaption>
    </figure>
  );
}
