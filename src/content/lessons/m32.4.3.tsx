import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DynkinViz } from "@/components/viz/DynkinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.4.3",
  minutes: 90,
  links: {
    revisits: ["m32.4.2", "m32.4.1", "m32.3.2"],
    foreshadows: ["m32.5.1", "m32.5.2", "m32.5.3"],
  },

  puzzle: (
    <>
      <p>
        Lie algebras of matrices come in families: sl(n), so(n), sp(2n), one for each size. Are there any complex simple
        Lie algebras outside these families? There are exactly five, the largest of dimension 248. How could anyone be
        sure the list is complete?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a type and a rank, and read the diagram, the number of roots and the dimension.</p>
      <DynkinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Cartan matrix and Dynkin diagram">
        <p>
          For a base <M>{"\\Delta = \\{\\alpha_1, \\dots, \\alpha_n\\}"}</M>, the <strong>Cartan matrix</strong> has
          entries <M>{"\\langle \\alpha_i, \\alpha_j \\rangle"}</M>: 2 on the diagonal and 0, −1, −2 or −3 off it. The{" "}
          <strong>Dynkin diagram</strong> has a node for each simple root, joins nodes i and j by{" "}
          <M>{"\\langle \\alpha_i, \\alpha_j \\rangle\\langle \\alpha_j, \\alpha_i \\rangle"}</M> lines, and puts an arrow
          towards the shorter root when the lengths differ.
        </p>
      </Definition>

      <Theorem title="the classification">
        <p>
          The connected Dynkin diagrams are exactly <M>{"A_n\\ (n \\ge 1)"}</M>, <M>{"B_n\\ (n \\ge 2)"}</M>,{" "}
          <M>{"C_n\\ (n \\ge 3)"}</M>, <M>{"D_n\\ (n \\ge 4)"}</M>, <M>{"E_6, E_7, E_8, F_4"}</M> and <M>{"G_2"}</M>. Each is the
          diagram of exactly one complex simple Lie algebra, and every such algebra arises.
        </p>
      </Theorem>

      <Remark title="how the proof goes">
        <p>
          The simple roots, normalised to unit length, form an admissible set: vectors with pairwise non-positive inner
          products whose Gram matrix is positive definite. Positive definiteness forbids cycles, forbids a node with four or
          more lines, and limits branching. Testing a few candidate vectors against positivity rules out every graph not on
          the list. Serre&rsquo;s theorem then builds an algebra from each diagram.
        </p>
      </Remark>

      <Example title="the classical families">
        <p>
          Aₙ is sl(n + 1), Bₙ is so(2n + 1), Cₙ is sp(2n) and Dₙ is so(2n). Small ranks overlap:{" "}
          <M>{"A_1 = B_1 = C_1"}</M>, <M>{"B_2 = C_2"}</M>, <M>{"A_3 = D_3"}</M>, giving{" "}
          <M>{"\\mathfrak{so}(5) \\cong \\mathfrak{sp}(4)"}</M> and <M>{"\\mathfrak{so}(6) \\cong \\mathfrak{sl}(4)"}</M>.
          The exceptional algebras have dimensions 78, 133, 248, 52 and 14.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "lines",
      rung: "check",
      prompt: <p>In a Dynkin diagram, how many lines join two simple roots at 135°?</p>,
      answer: { kind: "choice", options: ["Two", "One", "Three", "None"], correct: [0] },
    },
    {
      key: "exc",
      rung: "check",
      prompt: <p>How many exceptional complex simple Lie algebras are there?</p>,
      answer: { kind: "choice", options: ["Five", "Two", "Infinitely many", "None"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many positive roots does E₈ have?</p>,
      answer: { kind: "numeric", value: 120, tolerance: 0 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>What is the dimension of so(10), of type D₅?</p>,
      answer: { kind: "numeric", value: 45, tolerance: 0 },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: <p>Which coincidence of diagrams shows that so(6) and sl(4) are isomorphic?</p>,
      answer: { kind: "choice", options: ["A₃ = D₃", "B₂ = C₂", "A₁ = B₁", "E₆ = F₄"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a Dynkin diagram cannot contain a triangle of single lines.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the three unit simple roots u₁, u₂, u₃, with pairwise inner products −1/2 for single lines.",
          "Computes |u₁ + u₂ + u₃|² = 3 + 2(−1/2 − 1/2 − 1/2) = 0.",
          "Concludes the roots are linearly dependent, contradicting that simple roots form a basis.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the formula dimension = rank + 2 × (number of positive roots) to find the dimension of G₂, which has 6 positive roots.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses rank 2 and 6 positive roots.",
          "Computes 2 + 12 = 14.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The classification is complete. The final chapter turns to representations, beginning with the one algebra that
        every other contains many copies of.
      </p>
      <p>Next, sl(2) in full.</p>
    </>
  ),
};
