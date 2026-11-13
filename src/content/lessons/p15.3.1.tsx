import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["analytic", "empirically verifiable", "meaningless"];
const ITEMS: SortItem[] = [
  {
    text: "All bachelors are unmarried.",
    cat: "analytic",
    why: "True by the meanings of the words alone, so meaningful though it says nothing about the world.",
  },
  {
    text: "There are mountains on the far side of the moon.",
    cat: "empirically verifiable",
    why: "Ayer’s own example, written before any spacecraft: no one could check it then, but it was verifiable in principle.",
  },
  {
    text: "The Absolute enters into, but is itself incapable of, evolution and progress.",
    cat: "meaningless",
    why: "Ayer’s example from the idealist F. H. Bradley. No observation could count for or against it.",
  },
  {
    text: "Water boils at 100 °C at sea level.",
    cat: "empirically verifiable",
    why: "Observation could confirm or disconfirm it, so it is a meaningful empirical hypothesis.",
  },
  {
    text: "7 + 5 = 12.",
    cat: "analytic",
    why: "For the logical positivists, mathematics is analytic: true in virtue of the meanings of its symbols.",
  },
  {
    text: "Stealing money is wrong.",
    cat: "meaningless",
    why: "For Ayer it states no fact. It expresses the speaker’s disapproval, as if one said “Stealing money!!” in a shocked tone.",
  },
  {
    text: "A statement is meaningful only if it is analytic or empirically verifiable.",
    cat: "meaningless",
    why: "The principle itself seems neither analytic nor verifiable by observation. By its own test it would be meaningless.",
  },
];

export const lesson: LessonContent = {
  id: "p15.3.1",
  minutes: 75,
  links: {
    revisits: ["p15.1.2", "p10.2.2", "p11.2.1"],
    foreshadows: ["p15.3.2", "p15.3.3", "p22.4.3"],
  },

  puzzle: (
    <>
      <p>
        Two philosophers argue for years about whether the world is ultimately one or many. Nothing either of them could ever
        observe would settle the dispute. The Vienna Circle in the 1920s proposed a short way with such quarrels: if no possible
        experience could decide a question, the question has no meaning. Were they right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For A. J. Ayer, sort each sentence as analytic, empirically verifiable, or meaningless.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="How would Ayer classify it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the verification principle">
        <p>
          The logical positivists of the Vienna Circle, including Moritz Schlick and Rudolf Carnap, and A. J. Ayer in{" "}
          <em>Language, Truth and Logic</em> (1936), held that a statement is <strong>literally meaningful</strong> only if it is
          either analytic or empirically verifiable. Schlick put it as: the meaning of a proposition is its method of
          verification. Statements of traditional metaphysics, theology and ethics fail the test, and so are neither true nor
          false.
        </p>
      </Definition>

      <Example title="strong and weak verification">
        <p>
          Strong verification demands that experience could conclusively establish a statement. That excludes general laws,
          like &ldquo;all metals expand when heated&rdquo;, which no finite set of observations proves. Ayer therefore adopted a{" "}
          <strong>weak</strong> version: a statement is meaningful if some possible observations would make it more or less
          probable. He also required only verifiability in principle, as with the far side of the moon.
        </p>
      </Example>

      <Remark title="the collapse">
        <p>
          Every precise version proved either too strict or too loose. Ayer&rsquo;s attempt to define indirect verifiability was
          shown by Alonzo Church to admit any statement at all. The principle also seems to fail its own test, since it is
          neither analytic nor an empirical claim; Ayer replied that it was a proposal, not a statement. Quine attacked the
          analytic and synthetic distinction itself, and argued that statements face experience only as a whole body of
          theory, never one at a time.
        </p>
      </Remark>

      <Remark title="what survived">
        <p>
          Few now hold the principle, but its spirit lasts: in Popper&rsquo;s falsifiability as a mark of science, in
          Dummett&rsquo;s view that meaning is tied to what can be recognised as establishing a statement, and in the use of
          verification conditions in some theories of meaning.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to the verification principle, when is a statement literally meaningful?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is analytic or empirically verifiable.",
          "When it is true.",
          "When most people understand it.",
          "When it is about physical objects.",
        ],
        correct: [0],
      },
    },
    {
      key: "ethics",
      rung: "check",
      prompt: <p>What did Ayer say about moral statements like &ldquo;stealing is wrong&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "They state no fact and express the speaker’s feelings.",
          "They are analytic.",
          "They are empirically verifiable.",
          "They are true by convention.",
        ],
        correct: [0],
      },
    },
    {
      key: "moon",
      rung: "apply",
      prompt: <p>Why did Ayer count &ldquo;there are mountains on the far side of the moon&rdquo; as meaningful in 1936?</p>,
      answer: {
        kind: "choice",
        options: [
          "It was verifiable in principle, even though no one could check it then.",
          "It was analytic.",
          "Astronomers had already seen the far side.",
          "All statements about the moon are meaningful.",
        ],
        correct: [0],
      },
    },
    {
      key: "weak",
      rung: "apply",
      prompt: <p>Why did Ayer reject strong, conclusive verification?</p>,
      answer: {
        kind: "choice",
        options: [
          "It would make general scientific laws meaningless, since no finite observations prove them.",
          "It was too permissive.",
          "It allowed metaphysics back in.",
          "It applied only to mathematics.",
        ],
        correct: [0],
      },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>What is the self-refutation objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "The principle is neither analytic nor empirically verifiable, so by its own test it is meaningless.",
          "The principle is false because some statements are unverifiable.",
          "Verification is impossible.",
          "Ayer did not believe it.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there anything right about the verification principle? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle and its aim.",
          "Considers an objection, such as self-refutation or the difficulty of a precise formulation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Statements about the distant past, like &ldquo;Julius Caesar sneezed on the morning he crossed the Rubicon&rdquo;, may be unverifiable even in principle. Are they meaningless?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why such a statement seems unverifiable now.",
          "Considers a verificationist reply, such as verifiability in principle by someone who was there, and whether it works.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the verification principle and the logical positivists' aims, the difference between strong and weak verification, Ayer's view of ethics and metaphysics, and why the principle collapsed.",

  glimpse: (
    <p>
      The next lesson presents Davidson&rsquo;s view that meaning is given by truth conditions, and then use theories in the
      spirit of the later Wittgenstein. Dummett revived a version of verificationism in his case against realism.
    </p>
  ),
};
