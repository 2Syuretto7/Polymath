import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MatMulViz } from "@/components/viz/MatMulViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.3.1",
  minutes: 80,
  links: {
    revisits: ["m3.1.1", "m3.2.1", "m0.3.4"],
    foreshadows: ["m3.3.2", "m3.8.1", "m7.1.1"],
  },

  puzzle: (
    <>
      <p>
        Rotate a picture a quarter turn, then reflect it in the horizontal axis. Now do the same two things in the other
        order. Do you end up with the same picture?
      </p>
      <p>
        Each of these moves can be recorded as a grid of four numbers, a matrix. If doing one move after another is a kind
        of multiplication, then this question asks whether matrix multiplication is commutative, like multiplying numbers.
        Why is the rule for multiplying matrices the strange row-times-column rule that it is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A 2 by 2 matrix moves every point of the plane: it sends (x, y) to a new point, and with it the whole letter F
        below. Apply B, then A. The single matrix that does both at once is the product AB. Swap the order and compare.
      </p>
      <MatMulViz />
    </>
  ),

  theory: (
    <>
      <Definition title="matrix times vector">
        <p>
          An m by n matrix A has m rows and n columns; <M>{"a_{ij}"}</M> is the entry in row i and column j. For a vector x
          with n components, <M>{"Ax"}</M> is the combination of the columns of A with coefficients from x:
        </p>
        <MD>{"Ax = x_1 a_1 + x_2 a_2 + \\cdots + x_n a_n,"}</MD>
        <p>
          where <M>{"a_j"}</M> is column j. Equivalently, component i of Ax is the dot product of row i with x. These are
          the column picture and the row picture from the first chapter, now in one formula. The system of equations{" "}
          <M>{"Ax = b"}</M> asks for the combination of the columns that equals b.
        </p>
      </Definition>

      <Definition title="matrix times matrix">
        <p>
          If A is m by n and B is n by p, the product AB is the m by p matrix whose column j is A times column j of B.
          Entry by entry,
        </p>
        <MD>{"(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj},"}</MD>
        <p>
          the dot product of row i of A with column j of B. The number of columns of A must equal the number of rows of B.
        </p>
      </Definition>

      <Theorem title="the product is composition">
        <p>For every vector x, <M>{"(AB)x = A(Bx)"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Write <M>{"x = x_1 e_1 + \\cdots + x_p e_p"}</M>, where <M>{"e_j"}</M> has 1 in place j and 0 elsewhere. Then{" "}
          <M>{"Bx = x_1 b_1 + \\cdots + x_p b_p"}</M> with <M>{"b_j"}</M> the columns of B, and because multiplying by A
          respects sums and multiples, <M>{"A(Bx) = x_1 (A b_1) + \\cdots + x_p (A b_p)"}</M>. That is the combination of
          the columns of AB with coefficients from x, which is <M>{"(AB)x"}</M>.
        </p>
      </Proof>
      <p>
        This is why the row-times-column rule is the right one: it is the only rule that makes the matrix of &ldquo;B
        then A&rdquo; equal to the product AB. Note the order. AB means B acts first, just as <M>{"f(g(x))"}</M> applies g
        first.
      </p>

      <Example title="the puzzle">
        <p>
          The quarter turn is <M>{"R = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}"}</M> and the reflection is{" "}
          <M>{"F = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}"}</M>. Then
        </p>
        <MD>{"FR = \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}, \\qquad RF = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}."}</MD>
        <p>
          Rotating first and then reflecting (FR) reflects in the line y = &minus;x; the other order reflects in y = x. The
          pictures differ.
        </p>
      </Example>

      <Theorem title="the laws of matrix arithmetic">
        <ul>
          <li><strong>Associative</strong>: <M>{"(AB)C = A(BC)"}</M>, so we may write ABC.</li>
          <li><strong>Distributive</strong>: <M>{"A(B + C) = AB + AC"}</M> and <M>{"(A + B)C = AC + BC"}</M>.</li>
          <li><strong>Identity</strong>: the identity matrix I, with 1s on the diagonal and 0s elsewhere, satisfies <M>{"AI = IA = A"}</M>.</li>
          <li><strong>Not commutative</strong>: in general <M>{"AB \\ne BA"}</M>, even when both are defined.</li>
        </ul>
      </Theorem>
      <p>
        Associativity has a one-line proof from composition: both <M>{"(AB)C"}</M> and <M>{"A(BC)"}</M> send x to{" "}
        <M>{"A(B(Cx))"}</M>. Checking it from the entry formula takes a page of indices.
      </p>

      <Remark title="other surprises">
        <p>
          Matrices can misbehave in other ways numbers do not. <M>{"AB = 0"}</M> is possible with neither A nor B zero, and
          a non-zero matrix can have <M>{"A^2 = 0"}</M>: try <M>{"A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}"}</M>.
          So from <M>{"AB = AC"}</M> you cannot cancel A to get B = C. The next lesson asks when you can.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "size",
      rung: "check",
      prompt: <p>A is 2 by 3 and B is 3 by 4. What is the number of entries in AB?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "entry",
      rung: "check",
      prompt: (
        <p>
          With <M>{"A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}"}</M> and{" "}
          <M>{"B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}"}</M>, what is the entry in row 2, column 1 of AB?
        </p>
      ),
      answer: { kind: "numeric", value: 43 },
    },
    {
      key: "ax",
      rung: "apply",
      prompt: (
        <p>
          Compute <M>{"Ax"}</M> for <M>{"A = \\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\end{bmatrix}"}</M> and x = (2,
          1, 1). What is the sum of the two components?
        </p>
      ),
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "commute",
      rung: "apply",
      prompt: <p>Which pairs of 2 by 2 matrices always commute? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A and the identity I.",
          "A and 3I.",
          "Any two diagonal matrices.",
          "Any rotation and any reflection.",
        ],
        correct: [0, 1, 2],
      },
    },
    {
      key: "nil",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}"}</M>. What is the sum of all entries of{" "}
          <M>{"A^2"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "assoc",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"(AB)C = A(BC)"}</M> for matrices of compatible sizes, either from the composition property or
          directly from the entry formula.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Composition route: shows that both sides send every vector x to A(B(Cx)), using (AB)x = A(Bx) twice.",
          "Concludes that two matrices that agree on every vector, in particular on each standard basis vector, are equal, since their columns agree.",
          "Alternatively, the entry route: both entries equal the double sum of a_ik b_kl c_lj. Either route is complete.",
        ],
      },
    },
    {
      key: "commuteall",
      rung: "stretch",
      prompt: (
        <p>
          Find all 2 by 2 matrices that commute with <M>{"\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}"}</M>. Then
          suggest which 2 by 2 matrices commute with <em>every</em> 2 by 2 matrix, and give a reason.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up the equations from comparing the two products and finds the commuting matrices are those of the form [a b; 0 a].",
          "Conjectures that only multiples of the identity commute with everything.",
          "Supports this, for example by testing against matrices with a single 1, which forces off-diagonal entries to vanish and diagonal entries to be equal. A partial argument is welcome.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the two ways to see a matrix times a vector, why matrix multiplication uses the row-times-column rule, what order AB applies its matrices in, and why AB need not equal BA.",

  glimpse: (
    <p>
      The next lesson asks when a matrix can be undone, which is when it has an inverse. Linear transformations, at the end
      of this course, make the link between matrices and maps exact. Abstract Algebra studies structures like the
      invertible matrices, where multiplication is associative but not commutative: groups.
    </p>
  ),
};
