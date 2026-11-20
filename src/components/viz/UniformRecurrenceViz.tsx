"use client";

import { useState } from "react";

const L = 4000;
const tm = Array.from({ length: L }, (_, n) => { let c = 0, m = n; while (m) { c += m & 1; m >>= 1; } return c % 2; }).join("");
const fib = (() => { let s = "0"; while (s.length < L) s = s.replace(/./g, (ch) => (ch === "0" ? "01" : "0")); return s.slice(0, L); })();
const sq = Array.from({ length: L }, (_, n) => (Math.round(Math.sqrt(n)) ** 2 === n ? "1" : "0")).join("");

const SEQS = [
  { name: "Thue–Morse", s: tm, words: ["1", "11", "101", "0110"], note: "Each term is the parity of the number of 1s in the binary expansion of n." },
  { name: "Fibonacci word", s: fib, words: ["0", "1", "00", "010"], note: "The limit of 0 → 01, 1 → 0." },
  { name: "squares", s: sq, words: ["0", "1", "000", "1001"], note: "A 1 exactly at the perfect squares 0, 1, 4, 9, 16, …." },
];

/** Starting positions of w in s and the largest gap between consecutive ones. */
export function gaps(s: string, w: string) {
  const pos: number[] = [];
  for (let i = s.indexOf(w); i >= 0; i = s.indexOf(w, i + 1)) pos.push(i);
  let g = 0;
  for (let i = 1; i < pos.length; i++) g = Math.max(g, pos[i] - pos[i - 1]);
  return { pos, g };
}

/** Uniform recurrence: every word that occurs reappears within a bounded gap exactly when the orbit closure is minimal. */
export function UniformRecurrenceViz() {
  const [k, setK] = useState(0);
  const [w, setW] = useState(1);
  const S = SEQS[k];
  const word = S.words[w];
  const { pos, g } = gaps(S.s, word);
  const lastHalf = gaps(S.s.slice(L / 2), word).g;
  const firstHalf = gaps(S.s.slice(0, L / 2), word).g;
  const shown = 64;
  const mark = new Array(shown).fill(false);
  pos.filter((p) => p < shown).forEach((p) => { for (let j = 0; j < word.length && p + j < shown; j++) mark[p + j] = true; });
  const growing = pos.length < 2 || lastHalf > firstHalf * 1.5;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sequence">
        {SEQS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setW(0); }}>{x.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="word" style={{ marginTop: 8 }}>
        {S.words.map((x, i) => <button key={x} type="button" aria-pressed={w === i} className={w === i ? "seg is-on" : "seg"} onClick={() => setW(i)}>word {x}</button>)}
      </div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>{S.note}</p>
      <div className="mono" style={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 6 }}>
        {S.s.slice(0, shown).split("").map((ch, i) => (
          <span key={i} style={{ width: 16, textAlign: "center", padding: "2px 0", borderRadius: 3, background: mark[i] ? "var(--accent-soft)" : "transparent", color: mark[i] ? "var(--accent)" : "var(--text)", fontWeight: mark[i] ? 700 : 400 }}>{ch}</span>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        In the first {L} terms, {word} occurs {pos.length} time{pos.length === 1 ? "" : "s"}. {pos.length < 2 ? "It does not recur." : `Largest gap between occurrences: ${g} (first half ${firstHalf}, second half ${lastHalf}).`} {growing ? "The gaps are not bounded." : "The gaps stay bounded."}
      </p>
      <figcaption className="viz-caption">
        A point of a shift is uniformly recurrent if every word in it reappears with bounded gaps. Its orbit closure is
        then a minimal set: closed, invariant, and with every orbit dense. The Thue–Morse and Fibonacci sequences pass;
        the squares sequence fails, so its orbit closure contains the smaller invariant set {"{000…}"}.
      </figcaption>
    </figure>
  );
}
