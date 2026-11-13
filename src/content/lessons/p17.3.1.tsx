import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GodelNumberViz } from "@/components/viz/GodelNumberViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.3.1",
  minutes: 80,
  links: {
    revisits: ["p17.2.3", "m3.7.2", "p17.1.2"],
    foreshadows: ["p17.3.2", "m20.4.3", "p22.3.2"],
  },

  puzzle: (
    <>
      <p>
        Gödel&rsquo;s incompleteness theorems are cited to show that truth outruns proof, that mathematics rests on faith,
        that minds are not machines, even that no legal code or theology can be complete. Which of these, if any, did Gödel
        actually prove?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build a formula from the symbols and watch it become a single number.</p>
      <GodelNumberViz />
    </>
  ),

  theory: (
    <>
      <Definition title="arithmetisation">
        <p>
          Gödel (1931) assigned a number to every formula and every proof, so that statements about formulas become statements
          about numbers. The relation &ldquo;n is the number of a proof of the formula with number m&rdquo; is decidable, and
          so can be expressed in the language of arithmetic. By a diagonal construction, related to Cantor&rsquo;s, one then
          finds a sentence G that says, in effect, &ldquo;G is not provable in F&rdquo;.
        </p>
      </Definition>

      <Theorem title="the incompleteness theorems">
        <p>
          <strong>First.</strong> Let F be a consistent theory whose axioms can be listed by a mechanical procedure and which
          contains a modest amount of arithmetic. Then there is a sentence G of arithmetic that F neither proves nor refutes.
          (Gödel assumed ω-consistency; Rosser in 1936 showed that consistency suffices.)
        </p>
        <p>
          <strong>Second.</strong> Such an F, if consistent, cannot prove the sentence Con(F) that expresses its own
          consistency.
        </p>
      </Theorem>

      <Example title="what the theorems do not show">
        <p>
          They do not show that some truths are unprovable by any means: G is provable in the stronger theory F + Con(F), which
          has a Gödel sentence of its own. They do not say every theory is incomplete: Presburger arithmetic, which lacks
          multiplication, and the theory of real closed fields are complete and decidable. They do not show that mathematics
          is inconsistent or uncertain. And they apply to formal theories of arithmetic, not to legal codes or worldviews,
          which are neither formal nor about arithmetic.
        </p>
      </Example>

      <Remark title="is G true?">
        <p>
          If F is consistent, G is unprovable in F, and since that is what G says, G is true. So the truth of G is not seen
          outright but follows from the consistency of F. Torkel Franzén&rsquo;s <em>Gödel&rsquo;s Theorem: An Incomplete
          Guide to Its Use and Abuse</em> (2005) catalogues the many misreadings that ignore this conditional.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>Which of these is a hypothesis of Gödel&rsquo;s first incompleteness theorem, in Rosser&rsquo;s form?</p>,
      answer: {
        kind: "choice",
        options: [
          "The theory is consistent, its axioms can be mechanically listed, and it contains some arithmetic.",
          "The theory is complete.",
          "The theory has finitely many models.",
          "The theory contains no arithmetic.",
        ],
        correct: [0],
      },
    },
    {
      key: "second",
      rung: "check",
      prompt: <p>What does the second incompleteness theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "A consistent theory of this kind cannot prove its own consistency.",
          "Every theory is inconsistent.",
          "Arithmetic has no models.",
          "The Gödel sentence is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the Gödel number of the formula 0 = 0?</p>,
      answer: { kind: "numeric", value: 2430 },
    },
    {
      key: "not",
      rung: "apply",
      prompt: <p>Which of these does NOT follow from Gödel&rsquo;s theorems?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some arithmetical truths can never be proved by any means at all.",
          "Peano arithmetic, if consistent, does not prove its own consistency.",
          "Peano arithmetic, if consistent, does not decide every arithmetical sentence.",
          "Adding Con(PA) to Peano arithmetic gives a theory that is still incomplete, if consistent.",
        ],
        correct: [0],
      },
    },
    {
      key: "complete",
      rung: "apply",
      prompt: <p>Which of these theories is complete, despite Gödel?</p>,
      answer: {
        kind: "choice",
        options: ["Presburger arithmetic, the arithmetic of addition alone", "Peano arithmetic", "Zermelo–Fraenkel set theory", "Peano arithmetic plus Con(PA)"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Someone says: &ldquo;Gödel proved that there are true statements that can never be proved.&rdquo; Is this right? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States that G is unprovable in a particular consistent formal theory F.",
          "Notes that G is provable in a stronger theory such as F + Con(F), so it is not unprovable by any means.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>We say G is true because it says it is unprovable, and it is. How confident should we be of this, given that it rests on the consistency of F?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the truth of G is equivalent, provably in F, to Con(F).",
          "Considers our grounds for believing F consistent, such as having a model in mind or a consistency proof in a stronger system.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Gödel numbering, the two incompleteness theorems, and two things they are often wrongly said to show.",

  glimpse: (
    <p>
      Next, the Lucas–Penrose argument: the claim that because we can see the truth of Gödel sentences, our minds cannot be
      machines, and the replies that turn on consistency.
    </p>
  ),
};
