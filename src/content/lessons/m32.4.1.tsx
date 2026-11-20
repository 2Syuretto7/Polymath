import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RootValuesViz } from "@/components/viz/RootValuesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.4.1",
  minutes: 90,
  links: {
    revisits: ["m32.3.3", "m32.3.2", "m26.7.2"],
    foreshadows: ["m32.4.2", "m32.5.1", "m32.5.2"],
  },

  puzzle: (
    <>
      <p>
        A single matrix can be understood by diagonalising it. A Lie algebra is a whole space of matrices that do not
        commute, so they cannot all be diagonalised at once. What is the largest family that can be, and what do the
        rest of the matrices look like from its point of view?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move h around the diagonal of sl(3) and read the eigenvalues of ad h on the off-diagonal matrices.</p>
      <RootValuesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Cartan subalgebras">
        <p>
          Let <M>{"\\mathfrak{g}"}</M> be a complex semisimple Lie algebra. An element x is <strong>semisimple</strong> if
          ad x is diagonalisable. A <strong>Cartan subalgebra</strong> <M>{"\\mathfrak{h}"}</M> is a maximal abelian
          subalgebra consisting of semisimple elements. Then the operators ad h, for h in <M>{"\\mathfrak{h}"}</M>, commute
          and can be diagonalised simultaneously.
        </p>
      </Definition>

      <Theorem title="the root space decomposition">
        <p>
          <M>{"\\mathfrak{g} = \\mathfrak{h} \\oplus \\bigoplus_{\\alpha \\in \\Phi} \\mathfrak{g}_\\alpha"}</M>, where{" "}
          <M>{"\\mathfrak{g}_\\alpha = \\{x : [h, x] = \\alpha(h)x \\text{ for all } h\\}"}</M> and the{" "}
          <strong>roots</strong> Φ are the non-zero α in <M>{"\\mathfrak{h}^*"}</M> with <M>{"\\mathfrak{g}_\\alpha \\ne 0"}</M>.
          Moreover each root space is one-dimensional, −α is a root whenever α is, <M>{"[\\mathfrak{g}_\\alpha, \\mathfrak{g}_\\beta] \\subseteq \\mathfrak{g}_{\\alpha + \\beta}"}</M>,
          and the Killing form restricted to <M>{"\\mathfrak{h}"}</M> is non-degenerate.
        </p>
      </Theorem>

      <Example title="sl(n)">
        <p>
          The diagonal matrices of trace 0 form a Cartan subalgebra. For <M>{"h = \\operatorname{diag}(h_1, \\dots, h_n)"}</M>,{" "}
          <M>{"[h, E_{ij}] = (h_i - h_j)E_{ij}"}</M>, so the roots are <M>{"\\varepsilon_i - \\varepsilon_j"}</M> for i ≠ j,
          and there are n(n − 1) of them. For sl(3) there are six.
        </p>
      </Example>

      <Remark title="uniqueness and sl(2)-triples">
        <p>
          All Cartan subalgebras of a complex semisimple algebra are conjugate under its automorphism group, so the roots
          do not depend on the choice. For each root α, the spaces <M>{"\\mathfrak{g}_\\alpha"}</M>,{" "}
          <M>{"\\mathfrak{g}_{-\\alpha}"}</M> and their bracket span a copy of sl(2). Representation theory of sl(2) then
          forces the integrality that the next lesson axiomatises.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a Cartan subalgebra of a complex semisimple Lie algebra?</p>,
      answer: { kind: "choice", options: ["A maximal abelian subalgebra of semisimple elements", "Any one-dimensional subalgebra", "The centre", "The radical"], correct: [0] },
    },
    {
      key: "rs",
      rung: "check",
      prompt: <p>What is the root space for a root α?</p>,
      answer: { kind: "choice", options: ["The set of x with [h, x] = α(h)x for every h in the Cartan subalgebra", "The span of α", "The kernel of α", "The Cartan subalgebra itself"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with h = diag(2, −0.5, −1.5), what is the eigenvalue of ad h on E₁₃?</p>,
      answer: { kind: "numeric", value: 3.5, tolerance: 0.001 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many roots does sl(4) have?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>Check the root space decomposition for sl(3): its dimension is the rank plus the number of roots. What is that dimension?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the bracket of the root space of α with the root space of β lies in the root space of α + β.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes x in the root space of α and y in that of β, and applies ad h to [x, y].",
          "Uses the Jacobi identity: [h, [x, y]] = [[h, x], y] + [x, [h, y]].",
          "Concludes [h, [x, y]] = (α(h) + β(h))[x, y].",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a Cartan subalgebra of a semisimple algebra not contain a non-zero nilpotent matrix such as E₁₂ in sl(2)?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes elements of a Cartan subalgebra must have diagonalisable ad.",
          "Notes ad E₁₂ is nilpotent and non-zero, so not diagonalisable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The roots live in a Euclidean space, through the Killing form, and they obey striking symmetry and integrality
        rules. Those rules alone define an abstract object.
      </p>
      <p>Next, root systems.</p>
    </>
  ),
};
