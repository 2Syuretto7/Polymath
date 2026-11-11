import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InverseViz } from "@/components/viz/InverseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.3.2",
  minutes: 80,
  links: {
    revisits: ["m3.3.1", "m3.2.3", "m0.3.4"],
    foreshadows: ["m3.6.1", "m3.4.5", "m19.1.2"],
  },

  puzzle: (
    <>
      <p>
        For numbers, dividing by a is multiplying by <M>{"1/a"}</M>, and every number except 0 has a reciprocal. For
        matrices there is no division sign, but you can ask for a matrix that undoes A. Which matrices can be undone? The
        rotation of the plane by a quarter turn clearly can. Projecting every point onto the x-axis, flattening the plane,
        clearly cannot. What separates the two, and how would you find the undoing matrix when it exists?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Finding the inverse of A means solving <M>{"Ax = b"}</M> for every right-hand side at once. So run elimination
        with all the standard right-hand sides together: put the identity next to A and row reduce. If A becomes I, the
        identity has become the inverse. If a pivot is missing, there is no inverse at all.
      </p>
      <InverseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="inverse">
        <p>
          A square matrix A is <strong>invertible</strong> if there is a matrix <M>{"A^{-1}"}</M> with
        </p>
        <MD>{"A^{-1}A = I \\quad\\text{and}\\quad AA^{-1} = I."}</MD>
        <p>A matrix that is not invertible is <strong>singular</strong>.</p>
      </Definition>

      <Theorem title="the inverse is unique">
        <p>If B and C are both inverses of A, then B = C.</p>
      </Theorem>
      <Proof>
        <p>
          <M>{"B = BI = B(AC) = (BA)C = IC = C"}</M>, using associativity in the middle.
        </p>
      </Proof>

      <Theorem title="when an inverse exists">
        <p>For an n by n matrix A, these are equivalent:</p>
        <ol>
          <li>A is invertible.</li>
          <li>A has n pivots.</li>
          <li><M>{"Ax = b"}</M> has exactly one solution for every b.</li>
          <li><M>{"Ax = 0"}</M> has only the solution x = 0.</li>
        </ol>
      </Theorem>
      <p>
        From the last chapter, n pivots means no free variables and no zero rows, so (2) gives (3), and (3) gives (4) by
        taking b = 0. If (4) holds there are no free variables, so every one of the n columns has a pivot, which is (2).
        With n pivots, Gauss&ndash;Jordan elimination on <M>{"[A \\mid I]"}</M> reaches <M>{"[I \\mid X]"}</M>, and since each
        column of X solves <M>{"Ax = e_j"}</M>, we get <M>{"AX = I"}</M>. That X also satisfies <M>{"XA = I"}</M> is
        shown in the remark below. Conversely, if A is invertible, then <M>{"Ax = 0"}</M> gives{" "}
        <M>{"x = A^{-1}Ax = 0"}</M>, which is (4).
      </p>

      <Example title="the 2 by 2 formula">
        <MD>{"\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}, \\qquad ad - bc \\ne 0."}</MD>
        <p>
          Multiply it out to check. The number <M>{"ad - bc"}</M> is the <strong>determinant</strong>; when it is 0, the
          columns are parallel, A flattens the plane onto a line, and no inverse exists. For the quarter turn{" "}
          <M>{"\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}"}</M> it is 1, and the inverse is the quarter turn the other
          way.
        </p>
      </Example>

      <Theorem title="inverse of a product">
        <p>If A and B are invertible n by n matrices, so is AB, and</p>
        <MD>{"(AB)^{-1} = B^{-1}A^{-1}."}</MD>
      </Theorem>
      <Proof>
        <p>
          <M>{"(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I"}</M>, and similarly in the other order. The reversal is
          natural: to undo &ldquo;put on socks, then shoes&rdquo;, take off the shoes first.
        </p>
      </Proof>

      <Remark title="one side is enough">
        <p>
          For square matrices, if <M>{"AX = I"}</M> then automatically <M>{"XA = I"}</M>. Here is why. If{" "}
          <M>{"Xy = 0"}</M>, then <M>{"y = AXy = 0"}</M>, so X has n pivots by the theorem and some Y has{" "}
          <M>{"XY = I"}</M>. Then <M>{"A = A(XY) = (AX)Y = Y"}</M>, so <M>{"XA = XY = I"}</M>. This fails for non-square
          matrices, which can have a one-sided inverse but never a two-sided one.
        </p>
      </Remark>

      <Remark title="solving versus inverting">
        <p>
          The formula <M>{"x = A^{-1}b"}</M> is perfect for theory. In computation it is usually better to solve{" "}
          <M>{"Ax = b"}</M> by elimination directly: forming the inverse costs about three times as much work, and
          tends to lose more accuracy to rounding.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "det",
      rung: "check",
      prompt: (
        <p>
          For which value of k is <M>{"\\begin{bmatrix} 2 & 3 \\\\ 4 & k \\end{bmatrix}"}</M> singular?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "equiv",
      rung: "check",
      prompt: <p>A 3 by 3 matrix A is invertible. Which statements follow? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A has 3 pivots.",
          "Ax = 0 has a non-zero solution.",
          "Ax = b has exactly one solution for every b.",
          "Every entry of A is non-zero.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "two",
      rung: "apply",
      prompt: (
        <p>
          Find the inverse of <M>{"\\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}"}</M>. What is its entry in row 2,
          column 1?
        </p>
      ),
      answer: { kind: "numeric", value: -5 },
    },
    {
      key: "solve",
      rung: "apply",
      prompt: (
        <p>
          Use your inverse from the previous question to solve <M>{"3x + y = 4"}</M>, <M>{"5x + 2y = 7"}</M>. What is y?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prod",
      rung: "apply",
      prompt: (
        <p>
          A and B are invertible 2 by 2 matrices. Which matrix is the inverse of <M>{"ABA"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["A⁻¹B⁻¹A⁻¹", "A⁻¹A⁻¹B⁻¹", "B⁻¹A⁻¹A⁻¹", "ABA itself"],
        correct: [0],
      },
    },
    {
      key: "kernel",
      rung: "prove",
      prompt: (
        <p>
          Prove that if a square matrix A has a non-zero vector x with <M>{"Ax = 0"}</M>, then A is not invertible. Use
          this to show that <M>{"\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}"}</M> has no inverse.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes A⁻¹ exists and multiplies Ax = 0 by it to get x = 0, a contradiction.",
          "Finds a non-zero x with Ax = 0 for the given matrix, such as (2, −1).",
          "Concludes the matrix is singular. A short clear argument is enough.",
        ],
      },
    },
    {
      key: "nilinv",
      rung: "stretch",
      prompt: (
        <p>
          Suppose N is a square matrix with <M>{"N^3 = 0"}</M>. Show that <M>{"I - N"}</M> is invertible, with inverse{" "}
          <M>{"I + N + N^2"}</M>. What does this have in common with the geometric series <M>{"1/(1 - x)"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Multiplies (I − N)(I + N + N²) and shows the middle terms cancel, leaving I − N³ = I.",
          "Notes the product in the other order works the same way.",
          "Compares with 1/(1 − x) = 1 + x + x² + …, which here stops because higher powers of N vanish. Any sensible comparison is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an inverse matrix is, how Gauss–Jordan elimination finds it, how to tell from the pivots whether it exists, and why the inverse of AB is B⁻¹A⁻¹.",

  glimpse: (
    <p>
      The quantity ad − bc becomes the determinant, which for any square matrix detects invertibility and measures how A
      scales volume. Numerical Analysis asks how close a matrix is to singular, and why nearly singular systems amplify
      errors.
    </p>
  ),
};
