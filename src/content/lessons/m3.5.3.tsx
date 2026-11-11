import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LeastSquaresViz } from "@/components/viz/LeastSquaresViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.5.3",
  minutes: 80,
  links: {
    revisits: ["m3.5.2", "m3.4.2", "m3.3.4"],
    foreshadows: ["m3.5.4", "m18.6.1", "m3.8.3"],
  },

  puzzle: (
    <>
      <p>
        On 1 January 1801 the astronomer Giuseppe Piazzi found a new object, the dwarf planet Ceres, and followed it for a
        few weeks before it vanished into the glare of the sun. Astronomers had far more observations than unknowns, and the
        observations, being imperfect, did not quite agree with any single orbit. Carl Friedrich Gauss, then 24, predicted
        where Ceres would reappear, and it was found there at the end of the year.
      </p>
      <p>
        When there are more equations than unknowns and no exact solution exists, what is the best answer, and how do you
        compute it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Fit a line C + Dt to points that do not lie on one line. The red segments are the errors. Make the sum of their
        squares as small as you can by hand, then let the normal equations do it.
      </p>
      <LeastSquaresViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the least squares problem">
        <p>
          Given an m by n matrix A, usually with m much larger than n, and b in <M>{"\\mathbb{R}^m"}</M>, a{" "}
          <strong>least squares solution</strong> of Ax = b is an <M>{"\\hat{x}"}</M> that minimises the squared error
        </p>
        <MD>{"E = \\|Ax - b\\|^2."}</MD>
      </Definition>

      <Theorem title="the normal equations">
        <p>
          <M>{"\\hat{x}"}</M> is a least squares solution exactly when <M>{"A^{\\mathsf T}A\\hat{x} = A^{\\mathsf T}b"}</M>.
          When the columns of A are independent, it is unique: <M>{"\\hat{x} = (A^{\\mathsf T}A)^{-1}A^{\\mathsf T}b"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Ax ranges over C(A), so E is smallest when Ax is the point of C(A) nearest to b, which is the projection p. The
          last lesson showed this happens exactly when the error <M>{"b - A\\hat{x}"}</M> is perpendicular to C(A), that is,{" "}
          <M>{"A^{\\mathsf T}(b - A\\hat{x}) = 0"}</M>.
        </p>
      </Proof>

      <Example title="fitting a straight line">
        <p>
          To fit <M>{"C + Dt"}</M> to the points (0, 6), (1, 0), (2, 0), we would like to solve three equations in two
          unknowns:
        </p>
        <MD>{"\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} C \\\\ D \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\\\ 0 \\end{bmatrix}."}</MD>
        <p>There is no solution. The normal equations are</p>
        <MD>{"\\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}\\begin{bmatrix} \\hat{C} \\\\ \\hat{D} \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\end{bmatrix}, \\qquad \\hat{C} = 5, \\ \\hat{D} = -3."}</MD>
        <p>
          The best line is 5 − 3t. The errors are 1, −2, 1, with E = 6. This is the projection example of the last lesson,
          seen from the other side.
        </p>
      </Example>

      <Remark title="the calculus view">
        <p>
          E is a quadratic function of C and D. Setting its partial derivatives to zero gives the same normal equations.
          For a line, the two equations say that the errors add up to zero and that the errors weighted by t add up to
          zero; so the best line passes through the point of averages <M>{"(\\bar{t}, \\bar{b})"}</M>.
        </p>
      </Remark>

      <Example title="beyond straight lines">
        <p>
          Nothing requires a line. To fit a parabola <M>{"C + Dt + Et^2"}</M>, give A a third column of <M>{"t^2"}</M>{" "}
          values; the model only has to be linear in the unknown coefficients. The same idea fits planes to data in several
          variables, and, as in Gauss&rsquo;s case, orbits after the equations are linearised.
        </p>
      </Example>

      <Remark title="in practice">
        <p>
          Forming <M>{"A^{\\mathsf T}A"}</M> squares the sensitivity of the problem to rounding errors. Numerical software
          therefore usually solves least squares problems using the QR factorisation of the next lesson, or the singular
          value decomposition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "normal",
      rung: "check",
      prompt: <p>Which equation does the least squares solution satisfy?</p>,
      answer: {
        kind: "choice",
        options: ["Ax̂ = b", "AᵀAx̂ = Aᵀb", "AAᵀx̂ = b", "x̂ = Aᵀb"],
        correct: [1],
      },
    },
    {
      key: "perp",
      rung: "check",
      prompt: <p>The error vector b − Ax̂ of a least squares solution lies in which subspace?</p>,
      answer: {
        kind: "choice",
        options: ["The column space of A.", "The null space of A.", "The left null space of A.", "The row space of A."],
        correct: [2],
      },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: <p>Fit a horizontal line y = C to the values 1, 4, 4, 7 by least squares. What is C?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "slope",
      rung: "apply",
      prompt: <p>Fit C + Dt to the points (−1, 0), (0, 1), (1, 5). What is the slope D?</p>,
      answer: { kind: "numeric", value: 2.5 },
    },
    {
      key: "E",
      rung: "apply",
      prompt: <p>For the line fitted in the previous question, what is the minimum sum of squared errors E, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"A^{\\mathsf T}A"}</M> is invertible when the columns of A are independent, and give an example of
          data for which the straight-line fit has dependent columns. What goes wrong then?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows AᵀAx = 0 implies ‖Ax‖² = xᵀAᵀAx = 0, so Ax = 0 and x = 0 by independence.",
          "Gives data where all the t values are equal, so the columns (1, …, 1) and (t, …, t) are dependent.",
          "Explains that infinitely many lines fit equally well, or that the slope is undetermined. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: (
        <p>
          Why minimise the sum of the squares of the errors, rather than the sum of their absolute values or the largest
          error? Give one advantage of squares and one situation where another choice might be better.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an advantage of squares: a linear system for the solution, a geometric meaning as distance, or optimality when errors are normally distributed.",
          "Gives a disadvantage or alternative, such as sensitivity to outliers, where minimising absolute values is more robust.",
          "Reasons clearly. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what least squares means when Ax = b has no solution, why the best x̂ satisfies the normal equations, and how to fit a straight line to data.",

  glimpse: (
    <p>
      Regression, in Mathematical Statistics, puts least squares on a probabilistic footing and asks how reliable the fitted
      coefficients are. The singular value decomposition handles least squares even when the columns are dependent.
    </p>
  ),
};
