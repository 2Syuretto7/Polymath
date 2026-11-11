import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ProjectionViz } from "@/components/viz/ProjectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.5.2",
  minutes: 75,
  links: {
    revisits: ["m3.5.1", "m3.1.2", "m3.3.2"],
    foreshadows: ["m3.5.3", "m3.5.4", "m8.3.4"],
  },

  puzzle: (
    <>
      <p>
        You stand in a field at point b, and a straight road runs through the origin. Where on the road is the nearest
        point to you? Intuition says: walk straight to the road, at right angles. Can that intuition be turned into a
        formula, and does it still work when the road is replaced by a plane in space, or a 5-dimensional subspace of ℝ¹⁰⁰?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a direction a and move b. The marked point p on the line is the projection of b; the red error e = b − p
        always meets the line at a right angle. The table gives the formula, and the projection matrix P that does the
        job for every b at once.
      </p>
      <ProjectionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="projection onto a line">
        <p>The projection of b onto the line through a non-zero vector a is</p>
        <MD>{"p = \\hat{x}a, \\qquad \\hat{x} = \\frac{a^{\\mathsf T}b}{a^{\\mathsf T}a}, \\qquad P = \\frac{aa^{\\mathsf T}}{a^{\\mathsf T}a}."}</MD>
      </Theorem>
      <Proof>
        <p>
          The point <M>{"\\hat{x}a"}</M> is the projection when the error is perpendicular to a:{" "}
          <M>{"a^{\\mathsf T}(b - \\hat{x}a) = 0"}</M>, which gives <M>{"\\hat{x} = a^{\\mathsf T}b / a^{\\mathsf T}a"}</M>.
          Then <M>{"p = a\\hat{x} = a(a^{\\mathsf T}b)/(a^{\\mathsf T}a) = Pb"}</M>.
        </p>
      </Proof>

      <Theorem title="the projection is the nearest point">
        <p>For every other point <M>{"y"}</M> on the line, <M>{"\\|b - y\\| > \\|b - p\\|"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          <M>{"b - y = (b - p) + (p - y)"}</M>. The first part is perpendicular to the line and the second lies on it, so
          by Pythagoras <M>{"\\|b - y\\|^2 = \\|b - p\\|^2 + \\|p - y\\|^2"}</M>, which is larger unless y = p.
        </p>
      </Proof>

      <Theorem title="projection onto a subspace">
        <p>
          Let the columns of an m by n matrix A be independent, spanning a subspace of <M>{"\\mathbb{R}^m"}</M>. The
          projection of b onto C(A) is <M>{"p = A\\hat{x}"}</M>, where
        </p>
        <MD>{"A^{\\mathsf T}A\\hat{x} = A^{\\mathsf T}b, \\qquad P = A(A^{\\mathsf T}A)^{-1}A^{\\mathsf T}."}</MD>
      </Theorem>
      <Proof>
        <p>
          The error <M>{"e = b - A\\hat{x}"}</M> must be perpendicular to every column of A, so{" "}
          <M>{"A^{\\mathsf T}(b - A\\hat{x}) = 0"}</M>: the error lies in the left null space, the orthogonal complement of
          C(A). <M>{"A^{\\mathsf T}A"}</M> is invertible when the columns are independent: if{" "}
          <M>{"A^{\\mathsf T}Ax = 0"}</M>, then <M>{"x^{\\mathsf T}A^{\\mathsf T}Ax = \\|Ax\\|^2 = 0"}</M>, so Ax = 0 and x = 0.
        </p>
      </Proof>

      <Example title="projecting onto a plane">
        <p>Project b = (6, 0, 0) onto the plane spanned by (1, 1, 1) and (0, 1, 2). With these as columns of A,</p>
        <MD>{"A^{\\mathsf T}A = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}, \\quad A^{\\mathsf T}b = \\begin{bmatrix} 6 \\\\ 0 \\end{bmatrix}, \\quad \\hat{x} = \\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}, \\quad p = (5, 2, -1)."}</MD>
        <p>
          The error e = (1, −2, 1) is perpendicular to both columns: 1 − 2 + 1 = 0 and 0 − 2 + 2 = 0.
        </p>
      </Example>

      <Definition title="projection matrices">
        <p>
          A projection matrix satisfies <M>{"P^2 = P"}</M>, since projecting twice changes nothing, and{" "}
          <M>{"P^{\\mathsf T} = P"}</M>. Conversely every symmetric matrix with <M>{"P^2 = P"}</M> is the projection onto
          its own column space. <M>{"I - P"}</M> is the projection onto the orthogonal complement, and gives the error.
        </p>
      </Definition>

      <Remark title="what if the columns are dependent?">
        <p>
          Then <M>{"A^{\\mathsf T}A"}</M> is singular and <M>{"\\hat{x}"}</M> is not unique, though the projection p still
          is: it depends only on the subspace C(A), not on which vectors are used to describe it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "xhat",
      rung: "check",
      prompt: <p>Project b = (2, 4) onto the line through a = (1, 1). What is <M>{"\\hat{x}"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "props",
      rung: "check",
      prompt: <p>Which hold for every projection matrix P? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["P² = P", "Pᵀ = P", "P is invertible", "P = I"], correct: [0, 1] },
    },
    {
      key: "err",
      rung: "apply",
      prompt: <p>Project b = (3, 1) onto the line through a = (1, 2). What is the length of the error e, to three decimal places?</p>,
      answer: { kind: "numeric", value: 2.236, tolerance: 0.001 },
    },
    {
      key: "trace",
      rung: "apply",
      prompt: (
        <p>
          P is the 3 by 3 matrix projecting onto the line through (1, 2, 2). What is the sum of its diagonal entries?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "plane",
      rung: "apply",
      prompt: (
        <p>
          Project b = (1, 2, 3) onto the plane z = 0, the column space of{" "}
          <M>{"A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}"}</M>. What is the third entry of the
          error e?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "idem",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"P = A(A^{\\mathsf T}A)^{-1}A^{\\mathsf T}"}</M> satisfies <M>{"P^2 = P"}</M> and{" "}
          <M>{"P^{\\mathsf T} = P"}</M>, and that <M>{"I - P"}</M> also satisfies both.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes P² = A(AᵀA)⁻¹(AᵀA)(AᵀA)⁻¹Aᵀ = P.",
          "Uses (AᵀA)ᵀ = AᵀA and the rule for transposing products and inverses to show Pᵀ = P.",
          "Expands (I − P)² = I − 2P + P² = I − P and notes I − P is symmetric. A clear outline earns full credit.",
        ],
      },
    },
    {
      key: "near",
      rung: "stretch",
      prompt: (
        <p>
          Prove that <M>{"p = A\\hat{x}"}</M> is the closest point of C(A) to b, generalising the Pythagoras argument
          for a line. Then explain why least squares, the next lesson, is the same problem in disguise.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes b − Ay = (b − p) + (p − Ay) with p − Ay in C(A) and b − p perpendicular to C(A).",
          "Applies Pythagoras to conclude ‖b − Ay‖ ≥ ‖b − p‖, with equality only when Ay = p.",
          "Notes that minimising ‖b − Ax‖ over x is exactly finding the closest point of C(A). Any sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to project a vector onto a line and onto a subspace, why the error is perpendicular, why the projection is the nearest point, and the two properties every projection matrix has.",

  glimpse: (
    <p>
      Least squares, next, uses exactly this projection to solve equations that have no solution. Gram–Schmidt replaces A
      by a matrix with orthonormal columns, for which <M>{"A^{\\mathsf T}A = I"}</M> and projection becomes simple.
    </p>
  ),
};
