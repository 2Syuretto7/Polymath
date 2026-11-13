import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["a priori, necessary", "a posteriori, contingent", "a posteriori, necessary", "a priori, contingent"];
const ITEMS: SortItem[] = [
  {
    text: "All bachelors are unmarried.",
    cat: "a priori, necessary",
    why: "Known by understanding the words, and true in every possible world.",
  },
  {
    text: "7 + 5 = 12.",
    cat: "a priori, necessary",
    why: "Known by calculation, not observation, and could not have been otherwise. Kant thought it synthetic as well.",
  },
  {
    text: "There is a mango tree outside my window.",
    cat: "a posteriori, contingent",
    why: "Known only by looking, and it might not have been there.",
  },
  {
    text: "Tigers have stripes.",
    cat: "a posteriori, contingent",
    why: "Learnt from experience; on most views, tigers could have evolved differently.",
  },
  {
    text: "Water is H₂O.",
    cat: "a posteriori, necessary",
    why: "Kripke: discovered by chemistry, yet if water is H₂O it is H₂O in every possible world, since that is what water is.",
  },
  {
    text: "Hesperus is Phosphorus.",
    cat: "a posteriori, necessary",
    why: "Astronomers discovered that the evening star and the morning star are one planet, Venus; and nothing can fail to be itself.",
  },
  {
    text: "The standard metre bar is one metre long (when the length is fixed by it).",
    cat: "a priori, contingent",
    why: "Kripke's example: whoever fixes the metre by this bar knows the claim without measuring, yet the bar could have had a different length.",
  },
];

export const lesson: LessonContent = {
  id: "p10.5.4",
  minutes: 85,
  links: {
    revisits: ["p8.1.2", "p7.3.1", "p10.5.3"],
    foreshadows: ["p18.6.1", "p15.2.1", "p18.7.2"],
  },

  puzzle: (
    <>
      <p>
        You know that 7 + 5 = 12, and that no triangle has four sides, without surveying any piles of pebbles or triangles.
        Experience may have taught you the words, but it does not seem to be your evidence. Yet these truths apply to the world.
        How can thinking alone tell us anything, and what kind of knowledge is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by how it is known and whether it could have been false.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="How is it known, and could it have been otherwise?" />
    </>
  ),

  theory: (
    <>
      <Definition title="a priori and a posteriori">
        <p>
          Knowledge is <strong>a priori</strong> if its justification does not depend on experience, beyond what is needed to
          grasp the concepts involved, and <strong>a posteriori</strong> if it does. This is a distinction in how something is
          known, unlike necessity, which concerns whether it could have been false, and analyticity, which concerns whether it
          is true in virtue of meaning.
        </p>
      </Definition>

      <Example title="the traditional alignment">
        <p>
          Hume and the logical empiricists held that the a priori, the necessary and the analytic coincide: a priori knowledge
          is knowledge of meanings, and says nothing about the world. Kant disagreed, arguing that arithmetic and geometry are
          synthetic a priori. Rationalists hold that rational intuition grasps substantive necessary truths.
        </p>
      </Example>

      <Remark title="Kripke's separation">
        <p>
          In <em>Naming and Necessity</em> (1980), Saul Kripke argued that the categories come apart. Identities such as
          &ldquo;water is H₂O&rdquo; are necessary but known a posteriori, and some statements fixing a reference, such as that
          the metre bar is a metre long, are known a priori but contingent.
        </p>
      </Remark>

      <Remark title="is there any a priori knowledge?">
        <p>
          Quine argued that no belief is immune to revision in the light of experience, not even logic, so the a priori
          dissolves. Defenders reply that revisability does not show dependence on experience, and that knowledge of
          mathematics and logic is best explained by understanding or intuition, not observation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What makes knowledge a priori?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is learnt early in life.",
          "Its justification does not depend on experience beyond grasping the concepts.",
          "It is about the future.",
          "It is certain.",
        ],
        correct: [1],
      },
    },
    {
      key: "distinct",
      rung: "check",
      prompt: <p>Which distinction concerns whether a truth could have been false?</p>,
      answer: { kind: "choice", options: ["A priori and a posteriori", "Necessary and contingent", "Analytic and synthetic", "Basic and inferred"], correct: [1] },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>What did Kant claim about 7 + 5 = 12?</p>,
      answer: {
        kind: "choice",
        options: ["It is analytic a posteriori", "It is synthetic a priori", "It is analytic a priori", "It is synthetic a posteriori"],
        correct: [1],
      },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>Why does Kripke say &ldquo;water is H₂O&rdquo; is necessary but a posteriori?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because chemists might be wrong.",
          "Because it was discovered by experiment, yet water could not have failed to be H₂O.",
          "Because it is true by definition.",
          "Because water is contingent.",
        ],
        correct: [1],
      },
    },
    {
      key: "quine",
      rung: "apply",
      prompt: <p>What was Quine&rsquo;s challenge to the a priori?</p>,
      answer: {
        kind: "choice",
        options: [
          "That mathematics is false.",
          "That no belief is immune to revision in the light of experience.",
          "That all knowledge is innate.",
          "That experience is unreliable.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is mathematical knowledge a priori? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what being a priori would mean for mathematics.",
          "Considers a challenge, such as Quine's or the role of empirical checking.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "colour",
      rung: "stretch",
      prompt: <p>Nothing can be red all over and green all over at the same time. Is this known a priori? Is it analytic? What does your answer suggest about Kant&rsquo;s synthetic a priori?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether it is known without experience beyond grasping colour concepts.",
          "Considers whether it is true merely by the meanings of the words.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the a priori and a posteriori, how they differ from necessary and contingent and from analytic and synthetic, Kant's synthetic a priori, Kripke's examples of the necessary a posteriori and the contingent a priori, and Quine's challenge.",

  glimpse: (
    <p>
      The next chapter turns from the sources of knowledge to the knower: intellectual virtue, disagreement and injustice.
      Quine&rsquo;s attack on analyticity and Kripke&rsquo;s theory of naming return in later courses.
    </p>
  ),
};
