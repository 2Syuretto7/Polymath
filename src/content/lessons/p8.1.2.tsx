import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["analytic a priori", "synthetic a posteriori", "synthetic a priori"];
const ITEMS: SortItem[] = [
  { text: "All bachelors are unmarried.", cat: "analytic a priori", why: "The predicate is contained in the subject: being unmarried is part of being a bachelor. Denying it is a contradiction." },
  { text: "All bodies are extended.", cat: "analytic a priori", why: "Kant's own example. Extension is part of the concept of body, so analysing the concept is enough." },
  { text: "This table is made of oak.", cat: "synthetic a posteriori", why: "Nothing in the concept of a table says oak. You have to look." },
  { text: "Water boils at 100 degrees at sea level.", cat: "synthetic a posteriori", why: "An empirical discovery, learnt by observation and open to revision." },
  { text: "7 + 5 = 12.", cat: "synthetic a priori", why: "Kant's famous example. The concept of the sum of 7 and 5 does not contain 12, he says; we must count, constructing the sum in intuition. Yet it is necessary." },
  { text: "A straight line is the shortest path between two points.", cat: "synthetic a priori", why: "Straightness is a matter of direction, not length, so the concept does not contain shortness; yet we know it holds necessarily." },
  { text: "Every event has a cause.", cat: "synthetic a priori", why: "The concept of an event does not contain the concept of a cause, yet Kant holds we know this necessarily, as a condition of experience." },
];

export const lesson: LessonContent = {
  id: "p8.1.2",
  minutes: 85,
  links: {
    revisits: ["p8.1.1", "p7.5.2", "m0.5.1"],
    foreshadows: ["p8.2.3", "p10.5.4", "p18.6.1"],
  },

  puzzle: (
    <>
      <p>
        Hume divided all knowledge into relations of ideas, certain but empty, and matters of fact, informative but uncertain.
        Mathematics, he thought, belonged with the first. But <em>7 + 5 = 12</em> does not feel empty: it tells you what you
        will get when you put seven things next to five. And you know it will hold for every collection, without checking
        any. Kant thought Hume&rsquo;s division left out exactly the most important kind of knowledge.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each judgement into one of Kant&rsquo;s three kinds. Then open each to see his reason.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is each judgement analytic or synthetic, a priori or a posteriori?" />
    </>
  ),

  theory: (
    <>
      <Definition title="two distinctions">
        <p>
          A judgement is <strong>a priori</strong> if it can be known independently of experience, and{" "}
          <strong>a posteriori</strong> if it rests on experience. The marks of the a priori are necessity and strict
          universality, which experience can never supply. Separately, a judgement is <strong>analytic</strong> if its
          predicate is contained in the concept of its subject, so that denying it is a contradiction, and{" "}
          <strong>synthetic</strong> if the predicate adds something new.
        </p>
      </Definition>

      <Definition title="the third kind">
        <p>
          Analytic judgements are all a priori, and they only clarify what we already think. Synthetic a posteriori judgements
          are ordinary empirical knowledge. Analytic a posteriori judgements are impossible. That leaves the{" "}
          <strong>synthetic a priori</strong>: informative, yet necessary. Kant holds that arithmetic, geometry, the basic
          principles of physics such as the conservation of substance and universal causation, and the claims of metaphysics
          all aim to be of this kind.
        </p>
      </Definition>

      <Example title="why 7 + 5 = 12 is synthetic">
        <p>
          Think as hard as you like about the concept of the sum of seven and five, Kant says, and you will find only the
          thought of uniting the two numbers, not the number 12. To reach 12 you must go beyond the concepts, counting on
          your fingers or on points, adding units one at a time. That act of construction in intuition is what makes the
          judgement synthetic; its necessity is what makes it a priori.
        </p>
      </Example>

      <Remark title="the question and its critics">
        <p>
          Kant&rsquo;s central question becomes: how are synthetic a priori judgements possible? His answer, developed over the
          rest of the Critique, is that they express conditions of possible experience. Frege later argued that arithmetic is
          analytic after all, given a richer logic than Kant&rsquo;s. Non-Euclidean geometry suggested that the geometry of
          physical space is a posteriori. The logical positivists denied that there is any synthetic a priori, and Quine
          questioned whether the analytic and synthetic can be cleanly separated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "analytic",
      rung: "check",
      prompt: <p>When is a judgement analytic, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is learnt from experience.",
          "When its predicate is contained in the concept of its subject.",
          "When it is about numbers.",
          "When it is probably true.",
        ],
        correct: [1],
      },
    },
    {
      key: "marks",
      rung: "check",
      prompt: <p>What are the marks of a priori knowledge? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Necessity", "Strict universality", "Vividness", "Being learnt by observation"], correct: [0, 1] },
    },
    {
      key: "impossible",
      rung: "apply",
      prompt: <p>Which combination does Kant think impossible?</p>,
      answer: {
        kind: "choice",
        options: ["Analytic a priori", "Synthetic a posteriori", "Synthetic a priori", "Analytic a posteriori"],
        correct: [3],
      },
    },
    {
      key: "sort",
      rung: "apply",
      prompt: <p>Which of these does Kant classify as synthetic a priori? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["7 + 5 = 12", "All bodies are extended", "Every event has a cause", "Gold is yellow", "In all change, substance is conserved"],
        correct: [0, 2, 4],
      },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>Where does Kant&rsquo;s classification disagree with Hume&rsquo;s fork?</p>,
      answer: {
        kind: "choice",
        options: [
          "Kant thinks all knowledge is empirical.",
          "Kant thinks some knowledge is both informative about the world and necessary, which Hume's fork does not allow.",
          "Kant denies that there are relations of ideas.",
          "They agree completely.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, give Kant&rsquo;s reason for thinking that 7 + 5 = 12 is synthetic a priori.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says it is a priori because it is necessary and universal, not learnt from experience.",
          "Says it is synthetic because the concept of the sum of 7 and 5 does not contain 12; we must go beyond the concepts, for example by counting. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "frege",
      rung: "stretch",
      prompt: (
        <p>
          Frege argued that arithmetic follows from logic and definitions, and so is analytic. If he is right, how much of
          Kant&rsquo;s project survives?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that Kant's flagship example would no longer be synthetic a priori.",
          "Considers whether other candidates remain, such as causation, geometry of experience, or moral principles.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's two distinctions, analytic and synthetic and a priori and a posteriori, why he thought 7 + 5 = 12 is synthetic a priori, and why the possibility of such judgements became his central question.",

  glimpse: (
    <p>
      The next lesson gives Kant&rsquo;s answer in outline: transcendental idealism. The following chapter shows how space and
      time make geometry and arithmetic possible, and the Philosophy of Mathematics course returns to Frege&rsquo;s attempt to
      show arithmetic analytic.
    </p>
  ),
};
