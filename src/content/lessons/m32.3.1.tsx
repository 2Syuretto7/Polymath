import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LieSeriesViz } from "@/components/viz/LieSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.3.1",
  minutes: 90,
  links: {
    revisits: ["m32.1.3", "m14.4.2", "m26.7.2"],
    foreshadows: ["m32.3.2", "m32.3.3", "m32.4.1"],
  },

  puzzle: (
    <>
      <p>
        Bracket two upper triangular matrices and the diagonal disappears: the result is strictly upper triangular.
        Bracket again and the entries just above the diagonal disappear too. Keep going and everything dies. Is every
        Lie algebra in which repeated brackets die out secretly a set of triangular matrices?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an algebra and follow the dimensions down each series.</p>
      <LieSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ideals and the two series">
        <p>
          An <strong>ideal</strong> of <M>{"\\mathfrak{g}"}</M> is a subspace <M>{"\\mathfrak{i}"}</M> with{" "}
          <M>{"[\\mathfrak{g}, \\mathfrak{i}] \\subseteq \\mathfrak{i}"}</M>; it is what quotients need. The{" "}
          <strong>derived series</strong> is <M>{"\\mathfrak{g}^{(0)} = \\mathfrak{g}"}</M>,{" "}
          <M>{"\\mathfrak{g}^{(k+1)} = [\\mathfrak{g}^{(k)}, \\mathfrak{g}^{(k)}]"}</M>. The <strong>lower central
          series</strong> is <M>{"\\mathfrak{g}^0 = \\mathfrak{g}"}</M>,{" "}
          <M>{"\\mathfrak{g}^{k+1} = [\\mathfrak{g}, \\mathfrak{g}^k]"}</M>. The algebra is <strong>solvable</strong> if the
          first reaches 0 and <strong>nilpotent</strong> if the second does. Since{" "}
          <M>{"\\mathfrak{g}^{(k)} \\subseteq \\mathfrak{g}^k"}</M>, nilpotent implies solvable.
        </p>
      </Definition>

      <Theorem title="Engel's theorem">
        <p>
          If ad x is a nilpotent operator for every x in <M>{"\\mathfrak{g}"}</M>, then <M>{"\\mathfrak{g}"}</M> is
          nilpotent. For a Lie algebra of nilpotent matrices there is a basis in which all of them are strictly upper
          triangular.
        </p>
      </Theorem>

      <Theorem title="Lie's theorem">
        <p>
          Over ℂ, a solvable Lie algebra of matrices has a common eigenvector. By induction, there is a basis in which all
          of its elements are upper triangular. So the answer to the puzzle is yes, over ℂ, for solvable algebras of
          matrices.
        </p>
      </Theorem>

      <Example title="the basic examples">
        <p>
          The upper triangular matrices <M>{"\\mathfrak{b}(n)"}</M> are solvable but, for n ≥ 2, not nilpotent, since{" "}
          <M>{"[E_{11}, E_{12}] = E_{12}"}</M> keeps <M>{"E_{12}"}</M> in every term of the lower central series. The
          strictly upper triangular matrices <M>{"\\mathfrak{n}(n)"}</M> are nilpotent. The Heisenberg algebra, with{" "}
          <M>{"[x, y] = z"}</M> and z central, is the smallest non-abelian nilpotent algebra.
        </p>
      </Example>

      <Remark title="the radical">
        <p>
          If an ideal and its quotient are solvable, so is the whole algebra. Hence the sum of two solvable ideals is
          solvable, and every finite-dimensional Lie algebra has a largest solvable ideal, its <strong>radical</strong>.
          Removing it leaves what the next lesson studies.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "der",
      rung: "check",
      prompt: <p>How is the derived series defined?</p>,
      answer: { kind: "choice", options: ["Each term is the span of brackets of the previous term with itself", "Each term is the bracket of the whole algebra with the previous term", "Each term is the centre of the previous one", "Each term is a quotient by the centre"], correct: [0] },
    },
    {
      key: "imp",
      rung: "check",
      prompt: <p>Which implication holds in general?</p>,
      answer: { kind: "choice", options: ["Nilpotent implies solvable", "Solvable implies nilpotent", "Solvable implies abelian", "Neither"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose b(3). How many steps does the derived series take to reach 0?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>What is the dimension of n(5), the strictly upper triangular 5 × 5 matrices?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "heis",
      rung: "apply",
      prompt: <p>The Heisenberg algebra has basis x, y, z with [x, y] = z and z central. What is it?</p>,
      answer: { kind: "choice", options: ["Nilpotent, and so solvable", "Solvable but not nilpotent", "Semisimple", "Abelian"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that b(2), the upper triangular 2 × 2 matrices, is solvable but not nilpotent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes [b(2), b(2)] as the span of E₁₂.",
          "Notes the span of E₁₂ is abelian, so the next derived term is 0 and b(2) is solvable.",
          "Notes [E₁₁, E₁₂] = E₁₂, so E₁₂ lies in every term of the lower central series, which never reaches 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if an ideal i of g is solvable and the quotient g/i is solvable, then g is solvable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the image of the k-th derived term of g in g/i is the k-th derived term of g/i, so some term of g lies in i.",
          "Uses that the derived series of i then reaches 0, so the series of g does too.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Solvable algebras are triangular and tame. The opposite extreme, algebras with no solvable ideals at all, are
        rigid and beautifully structured, and their representations always split.
      </p>
      <p>Next, semisimple algebras.</p>
    </>
  ),
};
