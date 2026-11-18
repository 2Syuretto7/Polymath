"use client";

import { useState } from "react";

const RASAS: { rasa: string; gloss: string; bhava: string; bgloss: string; ex: string }[] = [
  { rasa: "śṛṅgāra", gloss: "the erotic", bhava: "rati", bgloss: "love", ex: "Śakuntalā and Duṣyanta meeting in the hermitage garden, in Kālidāsa’s play." },
  { rasa: "hāsya", gloss: "the comic", bhava: "hāsa", bgloss: "mirth", ex: "The vidūṣaka, the hero’s gluttonous Brahmin companion, complaining about his aching legs." },
  { rasa: "karuṇa", gloss: "the compassionate", bhava: "śoka", bgloss: "grief", ex: "Vālmīki seeing a hunter kill one of a pair of cranes; his grief (śoka) became verse (śloka)." },
  { rasa: "raudra", gloss: "the furious", bhava: "krodha", bgloss: "anger", ex: "Bhīma’s vow to drink Duḥśāsana’s blood after the insult to Draupadī." },
  { rasa: "vīra", gloss: "the heroic", bhava: "utsāha", bgloss: "energy", ex: "Arjuna, roused by Kṛṣṇa, taking up his bow at Kurukṣetra." },
  { rasa: "bhayānaka", gloss: "the terrible", bhava: "bhaya", bgloss: "fear", ex: "The deer fleeing Duṣyanta’s chariot, looking back over its shoulder." },
  { rasa: "bībhatsa", gloss: "the odious", bhava: "jugupsā", bgloss: "disgust", ex: "A cremation ground at night, described in loathsome detail." },
  { rasa: "adbhuta", gloss: "the marvellous", bhava: "vismaya", bgloss: "astonishment", ex: "Arjuna seeing Kṛṣṇa’s universal form in the eleventh chapter of the Gītā." },
  { rasa: "śānta", gloss: "the peaceful", bhava: "śama", bgloss: "calm", ex: "A sage turning away from worldly life; added later and defended by Abhinavagupta." },
];

/** The rasas of Indian aesthetics, each with the stable emotion it savours, and Bharata's formula for producing it. */
export function RasaViz() {
  const [k, setK] = useState(2);
  const R = RASAS[k];
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        {RASAS.map((r, i) => <button key={r.rasa} type="button" className={k === i ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setK(i)}>{r.rasa}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="How a rasa arises from the stable emotion" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[["vibhāva", "causes and setting"], ["anubhāva", "outward signs"], ["vyabhicāribhāva", "passing feelings"]].map(([t, g], i) => (
          <g key={t}>
            <rect x={10} y={10 + i * 44} width={150} height={36} rx={5} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
            <text x={85} y={26 + i * 44} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{t}</text>
            <text x={85} y={40 + i * 44} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{g}</text>
            <line x1={160} y1={28 + i * 44} x2={200} y2={72} style={{ stroke: "var(--border-strong)" }} />
          </g>
        ))}
        <rect x={200} y={50} width={130} height={44} rx={6} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <text x={265} y={69} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>sthāyibhāva: {R.bhava}</text>
        <text x={265} y={85} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>stable emotion: {R.bgloss}</text>
        <line x1={330} y1={72} x2={370} y2={72} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <rect x={370} y={44} width={140} height={56} rx={6} style={{ fill: "var(--accent)" }} />
        <text x={440} y={68} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 14, fontWeight: 700 }}>{R.rasa}</text>
        <text x={440} y={86} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 11 }}>{R.gloss}</text>
      </svg>
      <p style={{ fontSize: 14, margin: "4px 0" }}><strong>Example.</strong> {R.ex}</p>
      <figcaption className="viz-caption">
        Bharata&rsquo;s formula: rasa arises from the union of causes, outward signs and passing feelings. The spectator does
        not feel their own grief, but savours grief made general, which is why karuṇa can be relished.
      </figcaption>
    </figure>
  );
}
