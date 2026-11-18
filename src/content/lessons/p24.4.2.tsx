import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RasaViz } from "@/components/viz/RasaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.4.2",
  minutes: 90,
  links: {
    revisits: ["p24.4.1", "p24.3.2", "p24.2.2"],
    foreshadows: ["p25.1.1", "p25.2.1", "p25.4.1"],
  },

  puzzle: (
    <>
      <p>
        A tragedy shows us grief, and we leave the theatre saying we enjoyed it. Real grief is not enjoyable. So what we savour
        in the theatre cannot simply be grief, yet it is not simply something else either. Classical Indian aesthetics built a
        whole theory around this: the theory of rasa, &lsquo;taste&rsquo; or &lsquo;flavour&rsquo;.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a rasa to see its stable emotion and an example. Bharata&rsquo;s formula shows how a performance produces it.
      </p>
      <RasaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Bharata's sūtra">
        <p>
          The <em>Nāṭyaśāstra</em>, attributed to Bharata (compiled roughly between 200 BCE and 200 CE), is a treatise on drama,
          dance and music. Its central sūtra: rasa arises from the union of <strong>vibhāva</strong> (the causes and setting of
          an emotion, such as the beloved or a moonlit garden), <strong>anubhāva</strong> (its outward signs, such as tears or
          trembling) and <strong>vyabhicāribhāva</strong> (passing feelings, such as anxiety or longing). Bharata names eight
          rasas, each grounded in a <strong>sthāyibhāva</strong>, a stable emotion: love, mirth, grief, anger, energy, fear,
          disgust and astonishment.
        </p>
      </Definition>

      <Example title="whose emotion?">
        <p>
          Commentators asked where rasa is. Bhaṭṭa Lollaṭa located it in the original character, Rāma, intensified and imitated
          by the actor. Śaṅkuka said the spectator infers the emotion in the actor, as one infers a horse in a painted horse.
          Bhaṭṭa Nāyaka argued that poetry has a special power of <strong>generalisation</strong> (sādhāraṇīkaraṇa): the
          emotion is freed from its particular owner, neither Rāma&rsquo;s, nor the actor&rsquo;s, nor mine.
        </p>
      </Example>

      <Definition title="Abhinavagupta">
        <p>
          Abhinavagupta (c. 950–1016), in the commentary <em>Abhinavabhāratī</em>, gave the classic account. Each spectator
          carries latent impressions (<strong>vāsanā</strong>) of every emotion. The play awakens them in a generalised form,
          free from personal interest and from the obstacles of practical life. Rasa is the relishing (<strong>āsvāda</strong>)
          of this generalised emotion, a state of absorbed, self-aware delight. That is why karuṇa, the compassionate rasa, can
          be relished though grief cannot. He also defended a ninth rasa, <strong>śānta</strong>, the peaceful, as the deepest.
        </p>
      </Definition>

      <Remark title="comparisons">
        <p>
          Rasa theory answers questions the Western debates raised separately. It agrees with Kant that aesthetic pleasure is
          disinterested, and offers a solution to the paradox of fiction: what we feel is genuine emotion, but generalised, so
          it does not call for action. It is closer to the expression theory&rsquo;s &lsquo;expressive of&rsquo; than to
          Tolstoy&rsquo;s infection, since the spectator does not simply catch the actor&rsquo;s feeling. It still shapes
          Indian classical music and dance, where a performance aims at a rasa.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sutra",
      rung: "check",
      prompt: <p>According to Bharata, rasa arises from the union of which three?</p>,
      answer: { kind: "choice", options: ["Vibhāva, anubhāva and vyabhicāribhāva", "Rāga, tāla and laya", "Sattva, rajas and tamas", "Dharma, artha and kāma"], correct: [0] },
    },
    {
      key: "gen",
      rung: "check",
      prompt: <p>What is sādhāraṇīkaraṇa?</p>,
      answer: { kind: "choice", options: ["Generalisation: the emotion is freed from belonging to any particular person", "The actor’s imitation of the hero", "The spectator’s inference about the actor", "The music accompanying a play"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many rasas did Bharata himself name, before śānta was added?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "karuna",
      rung: "apply",
      prompt: <p>Which sthāyibhāva underlies karuṇa rasa?</p>,
      answer: { kind: "choice", options: ["Śoka, grief", "Rati, love", "Krodha, anger", "Vismaya, astonishment"], correct: [0] },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>An actor&rsquo;s tears and trembling voice are which element of Bharata&rsquo;s formula?</p>,
      answer: { kind: "choice", options: ["Anubhāva, the outward signs", "Vibhāva, the causes", "Vyabhicāribhāva, the passing feelings", "Sthāyibhāva, the stable emotion"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Abhinavagupta&rsquo;s theory of generalised emotion solve the paradox of fiction better than Walton&rsquo;s make-believe? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States both accounts: generalised, relished emotion; and quasi-emotion within make-believe.",
          "Compares how each explains genuine feeling without belief or action.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Think of a film song or a performance that left you with a clear rasa. Which one, and what produced it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names a work and a rasa.",
          "Points to some vibhāva, anubhāva or vyabhicāribhāva in it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Aesthetics asked what art is, how we judge it and why it moves us. The course ends here. Philosophy now turns from
        contemplation to practice: the hardest moral questions people face in their lives and laws.
      </p>
      <p>Next, applied ethics, beginning with abortion.</p>
    </>
  ),
};
