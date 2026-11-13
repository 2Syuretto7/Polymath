import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CharTableViz } from "@/components/viz/CharTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.6.4",
  minutes: 90,
  links: {
    revisits: ["m14.6.3", "m7.4.4", "m14.4.2"],
    foreshadows: ["m32.2.2", "m24.4.3", "m34.5.1"],
  },

  puzzle: (
    <>
      <p>
        A finite group can be summed up in a small square of numbers: one row for each irreducible representation, one column
        for each conjugacy class. Why is the table always square, and how much of the group can be read from it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Explore the character tables of five small groups and test the orthogonality of rows and columns.</p>
      <CharTableViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the table is square">
        <p>
          The irreducible characters form an orthonormal basis of the space of class functions on <M>{"G"}</M>. So the number
          of irreducible representations equals the number of conjugacy classes.
        </p>
      </Theorem>

      <Proof>
        <p>
          They are orthonormal, so it is enough to show that a class function <M>{"f"}</M> orthogonal to all of them is zero.
          For any representation <M>{"\\rho"}</M>, the map <M>{"\\varphi = \\sum_g \\overline{f(g)} \\rho(g)"}</M> commutes with
          every <M>{"\\rho(h)"}</M> because <M>{"f"}</M> is a class function. On an irreducible <M>{"V_i"}</M>, Schur makes it a
          scalar, with trace <M>{"|G| \\langle \\chi_i, f \\rangle = 0"}</M>, so <M>{"\\varphi = 0"}</M> there, and hence on
          every representation. On the regular representation, <M>{"\\varphi(1) = \\sum_g \\overline{f(g)} g = 0"}</M>, so{" "}
          <M>{"f = 0"}</M>.
        </p>
      </Proof>

      <Theorem title="column orthogonality">
        <p>For elements <M>{"g, h"}</M> of <M>{"G"}</M>,</p>
        <MD>{"\\sum_i \\chi_i(g) \\overline{\\chi_i(h)} = \\begin{cases} |C_G(g)| & \\text{if } g, h \\text{ are conjugate,} \\\\ 0 & \\text{otherwise.} \\end{cases}"}</MD>
      </Theorem>

      <Proof>
        <p>
          Weight the table by putting <M>{"\\sqrt{|C|/|G|}"}</M> on each column for class <M>{"C"}</M>. Row orthonormality says
          the resulting square matrix is unitary, so its columns are orthonormal too. Undoing the weights, and using{" "}
          <M>{"|G|/|C| = |C_G(g)|"}</M> from the orbit-stabiliser theorem, gives the formula.
        </p>
      </Proof>

      <Example title="building the table of A₄">
        <p>
          <M>{"A_4"}</M> has four classes, so four irreducibles. The quotient <M>{"A_4 / V_4"}</M> is cyclic of order 3, and its
          three characters lift to degree 1 characters of <M>{"A_4"}</M>, with values <M>{"1, \\omega, \\omega^2"}</M> on the
          3-cycles. The last degree <M>{"d"}</M> satisfies <M>{"12 = 1 + 1 + 1 + d^2"}</M>, so <M>{"d = 3"}</M>, and column
          orthogonality with the first column fills in its values: <M>{"3, -1, 0, 0"}</M>.
        </p>
      </Example>

      <Remark title="what the table knows">
        <p>
          The normal subgroups are exactly the intersections of kernels <M>{"\\{g : \\chi(g) = \\chi(1)\\}"}</M>, so one can
          read off whether the group is simple or solvable. But the table is not the group: <M>{"D_4"}</M> and the quaternion
          group <M>{"Q_8"}</M> are not isomorphic, yet have the same character table. Characters also gave Burnside his proof
          that groups of order <M>{"p^a q^b"}</M> are solvable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "square",
      rung: "check",
      prompt: <p>Why is a character table square?</p>,
      answer: {
        kind: "choice",
        options: [
          "The number of irreducible characters equals the number of conjugacy classes.",
          "Every group has as many elements as classes.",
          "Each representation has degree 1.",
          "By convention.",
        ],
        correct: [0],
      },
    },
    {
      key: "degrees",
      rung: "check",
      prompt: <p>What do the squares of the degrees of the irreducible characters add up to?</p>,
      answer: { kind: "choice", options: ["The order of the group", "The number of classes", "1", "The exponent of the group"], correct: [0] },
    },
    {
      key: "col",
      rung: "apply",
      prompt: <p>In the visualisation, pair the column of (1 2) in <M>{"S_4"}</M> with itself. What is the sum?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "s5",
      rung: "apply",
      prompt: <p>A group of order 10 has 4 conjugacy classes and 2 characters of degree 1. What are the degrees of the other two irreducibles?</p>,
      answer: { kind: "choice", options: ["2 and 2", "1 and 3", "2 and 3", "3 and 3"], correct: [0] },
    },
    {
      key: "same",
      rung: "apply",
      prompt: <p>Which statement about <M>{"D_4"}</M> and <M>{"Q_8"}</M> is true?</p>,
      answer: {
        kind: "choice",
        options: [
          "They have the same character table but are not isomorphic.",
          "They are isomorphic.",
          "Their character tables have different sizes.",
          "Q₈ has no irreducible of degree 2.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a finite group is abelian if and only if all its irreducible complex characters have degree 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that G is abelian exactly when every conjugacy class has one element, so the number of classes equals |G|.",
          "Uses Σ dᵢ² = |G| with the number of irreducibles equal to the number of classes.",
          "Concludes that all dᵢ = 1 exactly when the number of irreducibles is |G|, which is when G is abelian.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Construct the character table of <M>{"S_3"}</M> from scratch, using only the class sizes and the theorems of this lesson and the last.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds three classes, so three irreducibles, with degrees satisfying 6 = 1 + 1 + d², so d = 2.",
          "Finds the trivial and sign characters.",
          "Uses column orthogonality with the first column to get (2, 0, −1). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a character table is, why it is square, the row and column orthogonality relations, how to build the table of A₄, and what a character table can and cannot tell you about a group.",

  glimpse: (
    <p>
      Induced representations build characters of a group from those of its subgroups. Hom and tensor products return in
      homological algebra, and finite abelian groups, whose tables are the easiest of all, appear again in Fourier analysis on
      groups.
    </p>
  ),
};
