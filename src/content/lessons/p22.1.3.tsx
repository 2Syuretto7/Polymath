import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["analytic a priori", "synthetic a posteriori", "synthetic a priori"];
const ITEMS: SortItem[] = [
  { text: "All bodies are extended.", cat: "analytic a priori", why: "Kant’s own example: being extended is already contained in the concept of body." },
  { text: "Some bodies are heavy.", cat: "synthetic a posteriori", why: "Weight is not in the concept of body; we learn it by experience." },
  { text: "7 + 5 = 12.", cat: "synthetic a priori", why: "Kant’s famous case: the concept of the sum of 7 and 5 does not contain 12, yet we know it without experience." },
  { text: "A straight line is the shortest between two points.", cat: "synthetic a priori", why: "Straightness is a quality and shortness a quantity; for Kant, intuition of space joins them." },
  { text: "Every triangle has three sides.", cat: "analytic a priori", why: "Having three sides is part of what ‘triangle’ means." },
  { text: "Every event has a cause.", cat: "synthetic a priori", why: "Not contained in the concept of an event, yet for Kant a condition of possible experience." },
  { text: "Copper conducts electricity.", cat: "synthetic a posteriori", why: "An empirical discovery about a kind of stuff." },
];

export const lesson: LessonContent = {
  id: "p22.1.3",
  minutes: 85,
  links: {
    revisits: ["p22.1.2", "m0.5.1", "p2.1.2"],
    foreshadows: ["p22.1.4", "p22.2.1", "p22.4.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;All bachelors are unmarried&rsquo; is certain, but tells you nothing new. &lsquo;Copper conducts
        electricity&rsquo; tells you something new, but you learned it from experience. Mathematics seems to do both at once:
        it surprises you, and you know it without looking. How is that possible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these judgements as Kant would.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of judgement is it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="two distinctions">
        <p>
          In the <em>Critique of Pure Reason</em> (1781), Kant calls a judgement <strong>analytic</strong> if the predicate is
          contained in the concept of the subject, and <strong>synthetic</strong> if it adds something. Separately, a
          judgement is known <strong>a priori</strong> if independently of experience, and <strong>a posteriori</strong> if
          through it. Analytic judgements are all a priori. The great question is whether there are synthetic a priori
          judgements, and Kant says mathematics is full of them.
        </p>
      </Definition>

      <Example title="7 + 5 = 12">
        <p>
          Analyse the concept of the sum of 7 and 5 as long as you like, says Kant, and you will not find 12 in it. You must
          go beyond the concept, &lsquo;calling in the aid of intuition&rsquo;, such as five fingers, adding the units of 5
          one by one to 7, and so see the number 12 arise. With larger numbers this is plainer still. So arithmetic is
          synthetic, yet necessary and universal, hence a priori.
        </p>
      </Example>

      <Definition title="construction in pure intuition">
        <p>
          Philosophy, for Kant, analyses concepts; mathematics <strong>constructs</strong> them, exhibiting an object
          corresponding to the concept in intuition. A geometer drawing a triangle, even in imagination, sees in that one
          figure what holds of every triangle. This works a priori because space and time are not features of things in
          themselves, but forms of our own sensibility: geometry describes the form of outer intuition, and arithmetic draws
          on the successive synthesis of units in time.
        </p>
      </Definition>

      <Remark title="challenges">
        <p>
          Non-Euclidean geometries, found by Lobachevsky, Bolyai and Riemann, are consistent, and general relativity uses a
          curved space; so Euclidean geometry is not obviously necessary truth about space. Frege argued that arithmetic, at
          least, is analytic, derivable from logic and definitions, while agreeing with Kant about geometry. Brouwer kept
          Kant&rsquo;s intuition of time as the root of arithmetic, and gave up space.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "analytic",
      rung: "check",
      prompt: <p>When is a judgement analytic, for Kant?</p>,
      answer: { kind: "choice", options: ["When the predicate is contained in the concept of the subject", "When it is known by experience", "When it is about numbers", "When it is false"], correct: [0] },
    },
    {
      key: "math",
      rung: "check",
      prompt: <p>How does Kant classify the truths of mathematics?</p>,
      answer: { kind: "choice", options: ["Synthetic a priori", "Analytic a priori", "Synthetic a posteriori", "Neither true nor false"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the seven judgements are synthetic a priori?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "space",
      rung: "apply",
      prompt: <p>Why can geometry be known a priori, according to Kant?</p>,
      answer: { kind: "choice", options: ["Space is a form of our sensibility, not a property of things in themselves", "Geometry is about words", "Space is learned from experience", "God guarantees it"], correct: [0] },
    },
    {
      key: "frege",
      rung: "apply",
      prompt: <p>On which point did Frege disagree with Kant?</p>,
      answer: { kind: "choice", options: ["Frege held arithmetic to be analytic", "Frege held geometry to be analytic", "Frege denied a priori knowledge", "Frege held mathematics to be empirical"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Kant right that 7 + 5 = 12 is synthetic? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kant’s argument that the concept of the sum of 7 and 5 does not contain 12.",
          "Considers a reply, such as Frege’s view that it follows from definitions and logic, or that ‘contained in’ is too psychological a test.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the discovery of non-Euclidean geometry refute Kant&rsquo;s view of geometry?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that consistent non-Euclidean geometries suggest Euclid’s parallel postulate is not necessary.",
          "Considers a defence, such as that Kant was describing the form of human visual intuition rather than physical space.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Kant made mathematics a priori. John Stuart Mill went the other way: even 2 + 2 = 4 is a generalisation from
        experience, very well confirmed but no different in kind from a law of nature.
      </p>
      <p>
        Next, Mill&rsquo;s empiricism: arithmetic as inductive, the pebbles behind the numerals, and Frege&rsquo;s scornful
        reply.
      </p>
    </>
  ),
};
