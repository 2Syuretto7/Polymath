import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TwelveLinksViz } from "@/components/viz/TwelveLinksViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.3",
  minutes: 90,
  links: {
    revisits: ["p20.5.1", "p20.5.2", "p20.1.3"],
    foreshadows: ["p20.5.4", "p20.5.5", "p20.5.6"],
  },

  puzzle: (
    <>
      <p>
        Philosophers have long asked whether the world was made by a god, arose by chance, or has always existed. The Buddha
        set such questions aside, yet he claimed to have understood exactly how suffering comes about. What kind of
        explanation can do without a first cause?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step round the twelve links, then switch to ceasing to read the chain in reverse.</p>
      <TwelveLinksViz />
    </>
  ),

  theory: (
    <>
      <Definition title="dependent origination">
        <p>
          <strong>Dependent origination</strong> (paṭicca-samuppāda, Sanskrit pratītyasamutpāda) is the principle of
          conditionality: &ldquo;When this exists, that comes to be; with the arising of this, that arises. When this does not
          exist, that does not come to be; with the cessation of this, that ceases.&rdquo; Nothing arises from itself, from
          something wholly other, from both, or without causes; everything arises in dependence on conditions.
        </p>
      </Definition>

      <Example title="the twelve links">
        <p>
          Applied to suffering, the principle gives a chain: ignorance, formations, consciousness, name and form, the six sense
          bases, contact, feeling, craving, clinging, becoming, birth, and ageing and death. Buddhaghosa&rsquo;s{" "}
          <em>Path of Purification</em> reads it across three lives: past ignorance and formations condition this life, whose
          craving and clinging lead to a future birth. It can also be read moment by moment, within a single experience.
        </p>
      </Example>

      <Definition title="the middle way in metaphysics">
        <p>
          Dependent origination steers between <strong>eternalism</strong>, that a permanent self persists through change, and{" "}
          <strong>annihilationism</strong>, that a person is wholly destroyed at death so actions have no further fruit. The
          stream of conditioned processes continues, but nothing in it is permanent. As the Buddha told Kaccāna, the world
          mostly relies on the duality of &ldquo;it is&rdquo; and &ldquo;it is not&rdquo;; one who sees arising and ceasing
          with right wisdom holds neither.
        </p>
      </Definition>

      <Remark title="where to cut the chain">
        <p>
          The links are not a fate but a diagnosis with a point of intervention. Feeling arises from contact as long as there
          are senses; but craving need not follow feeling. Mindfulness of feeling as merely pleasant, painful or neutral is
          where practice breaks the chain. Later, Nāgārjuna would declare that dependent origination is emptiness: what arises
          dependently has no being of its own.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "principle",
      rung: "check",
      prompt: <p>What is the general principle of dependent origination?</p>,
      answer: {
        kind: "choice",
        options: ["When this exists, that comes to be; when this ceases, that ceases", "Everything was made by a first cause", "Things arise from nothing", "Everything is predetermined by fate"],
        correct: [0],
      },
    },
    {
      key: "middle",
      rung: "check",
      prompt: <p>Between which two views is dependent origination a middle way?</p>,
      answer: { kind: "choice", options: ["Eternalism and annihilationism", "Realism and idealism", "Theism and atheism", "Hedonism and asceticism only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the eighth link, which arises with feeling as its condition?</p>,
      answer: { kind: "choice", options: ["Craving", "Contact", "Clinging", "Birth"], correct: [0] },
    },
    {
      key: "lives",
      rung: "apply",
      prompt: <p>On the three-lives reading, which links belong to the past life?</p>,
      answer: { kind: "choice", options: ["Ignorance and formations", "Birth and ageing and death", "Craving and clinging", "Contact and feeling"], correct: [0] },
    },
    {
      key: "cut",
      rung: "apply",
      prompt: <p>Where does practice most directly break the chain?</p>,
      answer: { kind: "choice", options: ["Between feeling and craving", "Between birth and ageing", "Between contact and the senses", "Nowhere: the chain is fixed"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can there be an explanation of suffering without a first cause? Argue briefly, using dependent origination.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how conditional relations explain each stage without needing a beginning.",
          "Considers an objection, such as that a beginningless chain leaves the whole unexplained.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the twelve-link chain better read across three lives or within a single moment of experience? What hangs on the choice?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes both readings.",
          "Considers what each emphasises, such as rebirth and karma, or present psychology and practice.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If persons and chariots are only conventional, what is there ultimately? After the Buddha, his followers compiled
        exhaustive lists of the momentary events, dharmas, into which everything can be analysed, and argued about their
        nature for centuries.
      </p>
      <p>
        Next, Abhidharma: the analysis into dharmas, the two truths, momentariness, and the Sarvāstivāda claim that dharmas
        exist in past, present and future, with its own-nature that Nāgārjuna would attack.
      </p>
    </>
  ),
};
