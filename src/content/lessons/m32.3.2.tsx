import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LineInvariantViz } from "@/components/viz/LineInvariantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.3.2",
  minutes: 90,
  links: {
    revisits: ["m32.3.1", "m14.6.2", "m32.2.1"],
    foreshadows: ["m32.3.3", "m32.5.1", "m32.4.2"],
  },

  puzzle: (
    <>
      <p>
        For a finite group, Maschke&rsquo;s theorem says every invariant subspace has an invariant complement. The upper
        triangular 2 × 2 matrices act on the plane and preserve the x-axis, but no other line, so the x-axis has no
        invariant complement. Which Lie algebras behave like finite groups?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Rotate a line and see which generators keep it in place, for three different algebras.</p>
      <LineInvariantViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple and semisimple">
        <p>
          A Lie algebra is <strong>simple</strong> if it is not abelian and has no ideals other than 0 and itself. It is{" "}
          <strong>semisimple</strong> if its radical, the largest solvable ideal, is 0: equivalently, it has no non-zero
          abelian ideals.
        </p>
      </Definition>

      <Theorem title="structure">
        <ul>
          <li>A semisimple Lie algebra is a direct sum of simple ideals, uniquely.</li>
          <li>Levi: every finite-dimensional Lie algebra over a field of characteristic 0 is a semidirect sum of its radical and a semisimple subalgebra.</li>
          <li>Weyl: every finite-dimensional representation of a semisimple Lie algebra over ℂ is completely reducible.</li>
        </ul>
      </Theorem>

      <Example title="examples">
        <p>
          <M>{"\\mathfrak{sl}(n)"}</M> for n ≥ 2, <M>{"\\mathfrak{so}(n)"}</M> for n ≥ 3 and{" "}
          <M>{"\\mathfrak{sp}(2n)"}</M> are semisimple, and all are simple except{" "}
          <M>{"\\mathfrak{so}(4) \\cong \\mathfrak{so}(3) \\oplus \\mathfrak{so}(3)"}</M>. The algebra{" "}
          <M>{"\\mathfrak{gl}(n) = \\mathfrak{sl}(n) \\oplus \\mathbb{C}I"}</M> is not semisimple: the scalars form an
          abelian ideal. Such a sum of a semisimple algebra and an abelian one is called <strong>reductive</strong>.
        </p>
      </Example>

      <Remark title="why Weyl's theorem is harder">
        <p>
          Maschke averages over the group. A Lie algebra has nothing finite to average over. Weyl&rsquo;s original proof
          integrated over a compact group with the same complexified Lie algebra, the unitarian trick; the algebraic proof
          uses the Casimir element built from the Killing form, the subject of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a Lie algebra semisimple?</p>,
      answer: { kind: "choice", options: ["When it has no non-zero solvable ideals", "When it is abelian", "When it has a non-zero centre", "When every element is nilpotent"], correct: [0] },
    },
    {
      key: "weyl",
      rung: "check",
      prompt: <p>What does Weyl&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["Every finite-dimensional representation of a semisimple Lie algebra is completely reducible", "Every Lie algebra is semisimple", "Every representation is one-dimensional", "Every solvable algebra is nilpotent"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens for the upper triangular algebra b(2)?</p>,
      answer: { kind: "choice", options: ["One invariant line with no invariant complement", "Two complementary invariant lines", "No invariant lines", "Every line is invariant"], correct: [0] },
    },
    {
      key: "gl",
      rung: "apply",
      prompt: <p>Why is gl(n) not semisimple?</p>,
      answer: { kind: "choice", options: ["The scalar matrices form a non-zero abelian ideal", "It is not closed under brackets", "It has no ideals", "It is nilpotent"], correct: [0] },
    },
    {
      key: "so4",
      rung: "apply",
      prompt: <p>Which describes so(4)?</p>,
      answer: { kind: "choice", options: ["Semisimple but not simple", "Simple", "Solvable", "Abelian"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the action of b(2) on ℂ² by matrix multiplication is not completely reducible.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the line spanned by e₁ is invariant under every upper triangular matrix.",
          "Notes an invariant line must be an eigenline of E₁₂, whose only eigenline is the span of e₁.",
          "Concludes the span of e₁ has no invariant complement.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the radical of gl(n) exactly the scalar matrices?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the scalars form an abelian, hence solvable, ideal.",
          "Notes gl(n) modulo the scalars is isomorphic to sl(n), which is semisimple, so the radical can be no larger.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Semisimplicity was defined by the absence of something. A single bilinear form, built from traces, detects it
        directly and gives the algebra a geometry.
      </p>
      <p>Next, the Killing form.</p>
    </>
  ),
};
