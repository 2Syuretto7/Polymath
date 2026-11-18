import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["real (finitary)", "ideal"];
const ITEMS: SortItem[] = [
  { text: "2 + 3 = 5.", cat: "real (finitary)", why: "Checked by putting together strokes: || and ||| make |||||." },
  { text: "17 is prime.", cat: "real (finitary)", why: "Decided by a finite search through possible divisors." },
  { text: "For any numerals a and b, a + b = b + a.", cat: "real (finitary)", why: "Hilbert counted such general statements as finitary when read as schemas, checkable for each given a and b." },
  { text: "There is an odd perfect number.", cat: "ideal", why: "An unbounded existential claim: no finite search can establish its falsity." },
  { text: "Every bounded set of real numbers has a least upper bound.", cat: "ideal", why: "It quantifies over arbitrary infinite sets." },
  { text: "The natural numbers form a completed infinite totality.", cat: "ideal", why: "The actual infinite, which finitism does not treat as contentful." },
  { text: "No sequence of formulas is a proof of 0 = 1 in this formal system.", cat: "real (finitary)", why: "A general claim about finite strings of symbols, the kind Hilbert hoped to prove finitarily." },
];

export const lesson: LessonContent = {
  id: "p22.3.1",
  minutes: 85,
  links: {
    revisits: ["p22.2.2", "p17.1.1", "m0.5.1"],
    foreshadows: ["p22.3.2", "p22.4.1", "p22.6.3"],
  },

  puzzle: (
    <>
      <p>
        After the paradoxes, some mathematicians wanted to give up the infinite sets that caused trouble. Hilbert refused.
        Imaginary numbers were once suspect too, yet they give true results about real numbers. Could infinite mathematics
        be justified in the same way, as a reliable instrument, without asking whether infinite sets really exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these statements as Hilbert would.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Real or ideal?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the axiomatic method">
        <p>
          David Hilbert&rsquo;s <em>Foundations of Geometry</em> (1899) gave Euclid&rsquo;s geometry complete axioms, and
          proved their independence and consistency relative to arithmetic. One must always be able to say &lsquo;tables,
          chairs and beer mugs&rsquo; in place of points, lines and planes: proofs use only the axioms, not the meaning of
          the words. Against Frege, Hilbert held that consistent axioms need no further guarantee that their objects exist.
        </p>
      </Definition>

      <Definition title="real and ideal">
        <p>
          <strong>Finitary</strong> mathematics deals with concrete, surveyable objects, such as strings of strokes, and its{" "}
          <strong>real</strong> statements can be checked. <strong>Ideal</strong> statements, about completed infinities,
          are like the imaginary unit or points at infinity: not themselves meaningful, but added to make the theory
          simpler. In 1926 Hilbert declared that &lsquo;no one shall expel us from the paradise that Cantor has created&rsquo;.
        </p>
      </Definition>

      <Example title="the programme">
        <p>
          First, formalise all of mathematics in a system whose proofs are finite strings, mechanically checkable. Second,
          prove by finitary means that the system is consistent: no proof ends in 0 = 1. Then ideal methods are safe: if they
          proved a false real statement, such as a false equation, a finitary check would refute it, and together these
          would give a proof of a contradiction.
        </p>
      </Example>

      <Remark title="optimism">
        <p>
          With Ackermann, Bernays and von Neumann, Hilbert&rsquo;s school proved consistency for fragments of arithmetic. At
          Königsberg in September 1930 he ended an address with &lsquo;we must know, we will know&rsquo;. At the same
          conference, a day earlier, a young logician named Kurt Gödel had briefly announced a result that would change the
          programme for ever.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aim",
      rung: "check",
      prompt: <p>What was the central aim of Hilbert&rsquo;s programme?</p>,
      answer: { kind: "choice", options: ["A finitary proof that formalised mathematics is consistent", "To reduce mathematics to logic", "To abolish infinite sets", "To prove every statement is decidable by experiment"], correct: [0] },
    },
    {
      key: "ideal",
      rung: "check",
      prompt: <p>How did Hilbert regard statements about completed infinities?</p>,
      answer: { kind: "choice", options: ["As ideal elements, justified by their usefulness if consistent", "As false", "As empirical hypotheses", "As meaningless and banned"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the seven statements are real (finitary)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "mugs",
      rung: "apply",
      prompt: <p>What is the point of Hilbert&rsquo;s tables, chairs and beer mugs?</p>,
      answer: { kind: "choice", options: ["Proofs depend only on the axioms, not on what the primitive terms mean", "Geometry is about furniture", "Axioms must be obvious", "Points are physical objects"], correct: [0] },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why would a finitary consistency proof justify ideal methods for real statements?</p>,
      answer: { kind: "choice", options: ["An ideal proof of a false real statement, plus its finitary refutation, would yield a contradiction", "Because ideal statements are real", "Because consistency proves completeness", "Because all real statements are axioms"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is consistency enough to justify ideal mathematics, as Hilbert claimed? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hilbert’s view that consistent ideal methods cannot yield false real statements.",
          "Considers a reply, such as Frege’s view that consistency does not give existence or truth, or that ideal statements then lack meaning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is finitary reasoning about strings of strokes really more secure than ordinary mathematics? Why might Hilbert think so?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the appeal: finitary objects are concrete and surveyable, and claims about them can be checked.",
          "Considers a doubt, such as that very long strings are not surveyable either, or that finitary induction already needs some trust.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Gödel&rsquo;s second incompleteness theorem says that a consistent system of this kind cannot prove its own
        consistency, let alone by weaker, finitary means.
      </p>
      <p>
        Next, the impact of Gödel: why the original programme failed, Gentzen&rsquo;s consistency proof by transfinite
        induction, reverse mathematics as a partial realisation, and Gödel&rsquo;s own philosophical conclusions.
      </p>
    </>
  ),
};
