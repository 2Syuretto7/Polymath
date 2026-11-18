"use client";

import { useState } from "react";

const ROWS = [
  { topic: "Why the Buddha left home", old: "He saw an old man, a sick man and a corpse, and set out to end the suffering of old age, sickness and death.", amb: "His clan voted for war with its neighbours over the waters of a river. He refused, and chose exile over taking part in violence." },
  { topic: "Suffering (dukkha)", old: "Suffering lies in all conditioned existence, rooted in craving, and ends in release from rebirth.", amb: "Suffering is above all social: poverty, exploitation and degradation, which people inflict and can remove." },
  { topic: "Karma", old: "Actions in past lives determine one’s birth, including one’s station in life.", amb: "Karma is the moral law that actions have consequences in this life and for society. It never justifies birth into a caste." },
  { topic: "Rebirth", old: "A stream of consciousness passes from life to life.", amb: "There is no transmigrating soul; the elements of a body return to the common stock of matter and energy." },
  { topic: "Nirvāṇa", old: "Final liberation from the cycle of rebirth.", amb: "A righteous life here, free of greed and hatred, lived in a society built on liberty, equality and fraternity." },
  { topic: "The saṅgha", old: "A community of renunciant monks devoted to their own liberation.", amb: "A model of an equal society, and a body of servants of the people." },
];

/** Traditional readings of Buddhist teaching beside Ambedkar’s in The Buddha and His Dhamma. */
export function DhammaReadingViz() {
  const [amb, setAmb] = useState(true);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="reading">
        <button type="button" aria-pressed={!amb} className={!amb ? "seg is-on" : "seg"} onClick={() => setAmb(false)}>a traditional reading</button>
        <button type="button" aria-pressed={amb} className={amb ? "seg is-on" : "seg"} onClick={() => setAmb(true)}>Ambedkar&rsquo;s reading</button>
      </div>
      <dl style={{ margin: "10px 0", display: "grid", gridTemplateColumns: "minmax(110px, 160px) 1fr", gap: "8px 14px", fontSize: 14 }}>
        {ROWS.map((r) => (
          <div key={r.topic} style={{ display: "contents" }}>
            <dt style={{ fontWeight: 700 }}>{r.topic}</dt>
            <dd style={{ margin: 0, color: amb ? "var(--text)" : "var(--text-muted)", borderLeft: `3px solid ${amb ? "var(--accent)" : "var(--border)"}`, paddingLeft: 10 }}>{amb ? r.amb : r.old}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="viz-caption">
        Ambedkar asked of any religion whether it accords with reason, morality, and liberty, equality and fraternity. He
        read the Buddha as a social reformer and rationalist, and set aside doctrines he judged later additions.
      </figcaption>
    </figure>
  );
}
