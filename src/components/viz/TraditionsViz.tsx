"use client";

import { useState } from "react";

const QS = ["ultimate reality", "a creator God?", "the self", "liberation"];
const TRAD: { name: string; a: string[] }[] = [
  { name: "Theravāda Buddhism", a: [
    "No eternal substance. Reality is a flow of conditioned, impermanent events (dependent origination).",
    "No. The Buddha set aside questions about a creator as not leading to liberation; gods exist but are mortal beings within saṃsāra.",
    "No permanent self (anattā): a person is five changing aggregates of body, feeling, perception, formations and consciousness.",
    "Nirvāṇa: the ending of craving and of rebirth, reached by the Noble Eightfold Path.",
  ] },
  { name: "Advaita Vedānta", a: [
    "Brahman: one undivided consciousness, without qualities (nirguṇa). The world of many things is māyā, appearance.",
    "Only at the conventional level: Īśvara, Brahman with qualities, is creator and lord. Ultimately there is nothing apart from Brahman to create.",
    "The true self, ātman, is identical with Brahman: ‘thou art that’ (tat tvam asi). The individual ego is a superimposition.",
    "Mokṣa: knowledge that ātman is Brahman, which dissolves ignorance (avidyā). Śaṅkara held that knowledge, not action, liberates.",
  ] },
  { name: "Jainism", a: [
    "An uncreated, eternal universe of living souls (jīva) and non-living matter (ajīva).",
    "No. The universe has no beginning and needs no creator; the omniscient Jinas are perfected humans, not creators.",
    "Each jīva is an eternal, individual soul, innately omniscient and blissful but weighed down by karmic matter.",
    "Kevala: shedding all karma through non-violence (ahiṃsā), asceticism and right knowledge, after which the soul rises to the top of the universe.",
  ] },
  { name: "Sāṃkhya", a: [
    "Two eternal principles: puruṣa, pure consciousness (many of them), and prakṛti, unconscious nature.",
    "Classical Sāṃkhya, in Īśvarakṛṣṇa’s Kārikā, has no God: prakṛti evolves of itself. Yoga adds a special puruṣa, Īśvara.",
    "The self is puruṣa, a witness that does not act; we mistake the workings of mind, which belong to prakṛti, for our own.",
    "Kaivalya, isolation: discriminating puruṣa from prakṛti, so that consciousness rests in itself.",
  ] },
  { name: "Daoism", a: [
    "The Dao: the nameless source and way of all things. ‘The Dao that can be told is not the eternal Dao.’",
    "No personal creator. The Dao gives rise to the myriad things spontaneously (ziran), without intending or ruling them.",
    "The self is part of the flow of nature, to be lived without striving or fixed distinctions (Zhuangzi).",
    "Harmony with the Dao through wu wei, effortless action. Later religious Daoism added practices aimed at immortality.",
  ] },
  { name: "Confucianism", a: [
    "Tian, Heaven: a moral order of the cosmos, more often a source of the moral mandate than a person.",
    "Not in the theistic sense. Confucius spoke of Tian but would not speak of spirits: ‘respect them, but keep them at a distance’.",
    "A self constituted by relationships and roles, to be cultivated into the junzi, the exemplary person.",
    "Not escape but cultivation: ren (humaneness) and li (ritual propriety), realised in family and society.",
  ] },
];

/** Six traditions with no creator God in the theistic sense, compared on four questions. */
export function TraditionsViz() {
  const [t, setT] = useState(0);
  const [q, setQ] = useState(1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="tradition">
        {TRAD.map((x, i) => <button key={x.name} type="button" aria-pressed={t === i} className={t === i ? "seg is-on" : "seg"} onClick={() => setT(i)}>{x.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="question" style={{ marginTop: 6 }}>
        {QS.map((x, i) => <button key={x} type="button" aria-pressed={q === i} className={q === i ? "seg is-on" : "seg"} onClick={() => setQ(i)}>{x}</button>)}
      </div>
      <div style={{ marginTop: 10, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-subtle)" }}>
        <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>{TRAD[t].name}: {QS[q]}</p>
        <p style={{ margin: "6px 0 0", fontSize: 15 }}>{TRAD[t].a[q]}</p>
      </div>
      <p className="mono" style={{ fontSize: 13, marginTop: 10 }}>
        Compare across traditions: keep the question fixed and switch traditions, or keep the tradition and switch questions.
      </p>
      <figcaption className="viz-caption">
        Each summary is brief and each tradition is internally diverse. What they share is that the ultimate, whether
        Brahman, nirvāṇa, the Dao or the soul freed of karma, is not a personal creator who made the world from nothing.
      </figcaption>
    </figure>
  );
}
