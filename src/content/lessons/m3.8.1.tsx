import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LinearMapViz } from "@/components/viz/LinearMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.8.1",
  minutes: 80,
  links: {
    revisits: ["m3.3.1", "m3.6.3", "m3.4.2"],
    foreshadows: ["m3.8.2", "m8.1.2", "m5.2.2"],
  },

  puzzle: (
    <>
      <p>
        Rotate the plane by 30°, then by another 45°. The result is a rotation by 75°, of course. But each rotation is a
        matrix, and doing one after the other is multiplying the matrices. Multiply them out and the entries of the answer
        must be cos 75° and sin 75°, written in terms of the sines and cosines of 30° and 45°. So the addition formulas of
        trigonometry are hiding inside matrix multiplication. Why does multiplying matrices mean doing one map after
        another?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a transformation of the plane and adjust it. Watch where the two basis vectors go: their images, the two
        arrows, are the columns of the matrix, and they decide where everything else goes.
      </p>
      <LinearMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear transformation">
        <p>
          A function T from <M>{"\\mathbb{R}^n"}</M> to <M>{"\\mathbb{R}^m"}</M> is a <strong>linear transformation</strong>{" "}
          if, for all vectors v, w and numbers c, d,
        </p>
        <MD>{"T(cv + dw) = cT(v) + dT(w)."}</MD>
        <p>
          In particular <M>{"T(0) = 0"}</M>, and lines through the origin go to lines through the origin, or to a point.
          Every matrix gives a linear transformation <M>{"T(x) = Ax"}</M>.
        </p>
      </Definition>

      <Theorem title="the matrix of a linear transformation">
        <p>
          Every linear transformation T from <M>{"\\mathbb{R}^n"}</M> to <M>{"\\mathbb{R}^m"}</M> is multiplication by the
          m by n matrix whose j-th column is <M>{"T(e_j)"}</M>:
        </p>
        <MD>{"A = \\begin{bmatrix} T(e_1) & T(e_2) & \\cdots & T(e_n) \\end{bmatrix}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Write <M>{"x = x_1e_1 + \\dots + x_ne_n"}</M>. By linearity,{" "}
          <M>{"T(x) = x_1T(e_1) + \\dots + x_nT(e_n)"}</M>, which is exactly the combination of the columns of A that
          gives Ax.
        </p>
      </Proof>

      <Example title="four maps of the plane">
        <p>
          Rotation through θ sends <M>{"e_1"}</M> to <M>{"(\\cos\\theta, \\sin\\theta)"}</M> and <M>{"e_2"}</M> to{" "}
          <M>{"(-\\sin\\theta, \\cos\\theta)"}</M>. Projection onto the line through the unit vector{" "}
          <M>{"a = (\\cos\\theta, \\sin\\theta)"}</M> is <M>{"aa^{\\mathsf T}"}</M>, and reflection in that line is{" "}
          <M>{"2aa^{\\mathsf T} - I"}</M>:
        </p>
        <MD>{"R = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}, \\quad P = \\begin{bmatrix} \\cos^2\\theta & \\cos\\theta\\sin\\theta \\\\ \\cos\\theta\\sin\\theta & \\sin^2\\theta \\end{bmatrix}, \\quad H = \\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}."}</MD>
        <p>
          The shear <M>{"\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}"}</M> fixes <M>{"e_1"}</M> and slides{" "}
          <M>{"e_2"}</M> to (k, 1).
        </p>
      </Example>

      <Theorem title="composition is multiplication">
        <p>
          If S has matrix A and T has matrix B, then doing T first and then S, the map <M>{"S \\circ T"}</M>, is linear
          with matrix AB.
        </p>
      </Theorem>
      <Proof>
        <p>
          <M>{"S(T(x)) = A(Bx) = (AB)x"}</M> by associativity. In fact the rule for multiplying matrices was chosen to make
          this true: column j of AB is A times column j of B, which is S applied to <M>{"T(e_j)"}</M>.
        </p>
      </Proof>
      <p>
        Multiplying the rotation matrices for α and β and comparing with the rotation for α + β gives{" "}
        <M>{"\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta"}</M> and the matching formula for
        the sine. Since doing one map after another depends on the order, AB and BA usually differ.
      </p>

      <Remark title="what is not linear">
        <p>
          Translation, <M>{"x \\mapsto x + b"}</M> with b ≠ 0, is not linear, since it moves the origin; nor is{" "}
          <M>{"x \\mapsto x^2"}</M>. Linear algebra is not limited to arrows in the plane, though. Differentiation is
          linear on polynomials, since <M>{"(cf + dg)' = cf' + dg'"}</M>, and so it has a matrix once a basis is chosen. The
          null space of the matrix is the set of vectors that T sends to zero, and the column space is the range of T.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "linear",
      rung: "check",
      prompt: <p>Which of these maps of the plane is linear?</p>,
      answer: {
        kind: "choice",
        options: ["T(x, y) = (x + 1, y)", "T(x, y) = (2x, x − y)", "T(x, y) = (xy, 0)", "T(x, y) = (x², y)"],
        correct: [1],
      },
    },
    {
      key: "columns",
      rung: "check",
      prompt: <p>What are the columns of the matrix of a linear transformation T?</p>,
      answer: {
        kind: "choice",
        options: [
          "The images T(e₁), …, T(eₙ) of the standard basis vectors.",
          "The vectors that T sends to zero.",
          "The eigenvectors of T.",
          "The rows of T, transposed.",
        ],
        correct: [0],
      },
    },
    {
      key: "rot90",
      rung: "apply",
      prompt: <p>What is the entry in row 1, column 2 of the matrix that rotates the plane by 90° anticlockwise?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "proj",
      rung: "apply",
      prompt: <p>What is the top left entry of the matrix that projects the plane onto the line y = x?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "compose",
      rung: "apply",
      prompt: (
        <p>
          Reflect the plane in the x-axis, then rotate it by 90° anticlockwise. What single transformation is the result?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Rotation by 90° clockwise.", "Reflection in the line y = x.", "Reflection in the y-axis.", "Rotation by 180°."],
        correct: [1],
      },
    },
    {
      key: "product",
      rung: "prove",
      prompt: (
        <p>
          Prove that if S and T are linear, then <M>{"S \\circ T"}</M> is linear. Then show that if S has matrix A and T
          has matrix B, the j-th column of the matrix of <M>{"S \\circ T"}</M> is <M>{"A(Be_j)"}</M>, and explain why this
          means the matrix is AB.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks S(T(cv + dw)) = S(cT(v) + dT(w)) = cS(T(v)) + dS(T(w)).",
          "Computes the j-th column as S(T(e_j)) = A(Be_j), which is A times the j-th column of B.",
          "Notes that this is the column-by-column description of the product AB. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "deriv",
      rung: "stretch",
      prompt: (
        <p>
          Differentiation takes polynomials of degree at most 3 to polynomials of degree at most 3. Using the basis 1, x,
          x², x³, write its 4 by 4 matrix. What are its null space and its rank, and what do they mean?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives the matrix with columns the coordinates of 0, 1, 2x, 3x², so the entries 1, 2, 3 lie just above the diagonal and the rest are 0.",
          "Identifies the null space as the constants and the rank as 3.",
          "Interprets these: constants have derivative 0, and the derivatives fill the polynomials of degree at most 2. A reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what makes a transformation linear, why its matrix has columns T(e₁), …, T(eₙ), the matrices for rotation, projection and reflection, and why doing one map after another means multiplying their matrices.",

  glimpse: (
    <p>
      The next lesson describes the same map in a different basis. Linear Algebra II starts from linear maps rather than
      matrices, and Multivariable Calculus defines the derivative as the best linear approximation.
    </p>
  ),
};
