import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PolyMapViz } from "@/components/viz/PolyMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.1.2",
  minutes: 85,
  links: {
    revisits: ["m8.1.1", "m3.3.1", "m7.2.4"],
    foreshadows: ["m8.1.3", "m8.1.5", "m8.2.2"],
  },

  puzzle: (
    <>
      <p>
        Differentiation sends polynomials to polynomials, and it respects sums and scalar multiples: the derivative of{" "}
        <M>{"3f + g"}</M> is <M>{"3f' + g'"}</M>. So does the shift <M>{"p(x) \\mapsto p(x + 1)"}</M>. Neither looks like
        a matrix. Yet once a basis is chosen, each becomes one. Which comes first, the map or the matrix?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a map on polynomials of degree at most 3 and a polynomial to apply it to. Compare the matrix with what the map
        does to each basis polynomial.
      </p>
      <PolyMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear map">
        <p>
          A function <M>{"T : V \\to W"}</M> between vector spaces over <M>{"F"}</M> is <strong>linear</strong> if
        </p>
        <MD>{"T(u + v) = Tu + Tv, \\qquad T(av) = a\\,Tv."}</MD>
        <p>
          The linear maps from <M>{"V"}</M> to <M>{"W"}</M> form a vector space <M>{"\\mathcal{L}(V, W)"}</M>, and
          composition of linear maps is linear.
        </p>
      </Definition>

      <Theorem title="a linear map is fixed by a basis">
        <p>
          If <M>{"v_1, \\dots, v_n"}</M> is a basis of <M>{"V"}</M> and <M>{"w_1, \\dots, w_n"}</M> are any vectors in{" "}
          <M>{"W"}</M>, there is exactly one linear map with <M>{"Tv_j = w_j"}</M> for each <M>{"j"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Every <M>{"v"}</M> is uniquely <M>{"c_1v_1 + \\cdots + c_nv_n"}</M>. Linearity forces{" "}
          <M>{"Tv = c_1w_1 + \\cdots + c_nw_n"}</M>, which proves uniqueness; and this formula does define a linear map, by
          uniqueness of the coordinates.
        </p>
      </Proof>

      <Definition title="the matrix of a linear map">
        <p>
          Given bases <M>{"v_1, \\dots, v_n"}</M> of <M>{"V"}</M> and <M>{"w_1, \\dots, w_m"}</M> of <M>{"W"}</M>, the matrix{" "}
          <M>{"\\mathcal{M}(T)"}</M> is the <M>{"m \\times n"}</M> array whose <M>{"j"}</M>-th column lists the coordinates
          of <M>{"Tv_j"}</M>. Then the coordinates of <M>{"Tv"}</M> are <M>{"\\mathcal{M}(T)"}</M> times the coordinates of{" "}
          <M>{"v"}</M>, and <M>{"\\mathcal{M}(ST) = \\mathcal{M}(S)\\mathcal{M}(T)"}</M>. Matrix multiplication is defined
          the way it is precisely so that this holds.
        </p>
      </Definition>

      <Example title="differentiation">
        <p>
          On polynomials of degree at most 3, with basis <M>{"1, x, x^2, x^3"}</M>, differentiation sends{" "}
          <M>{"x^j"}</M> to <M>{"jx^{j-1}"}</M>, so its matrix has 1, 2, 3 just above the diagonal and zeros elsewhere. It
          is nilpotent: applying it four times gives 0, so the fourth power of the matrix is 0.
        </p>
      </Example>

      <Remark title="isomorphisms">
        <p>
          A linear map with a linear inverse is an <strong>isomorphism</strong>. Choosing a basis gives an isomorphism{" "}
          <M>{"V \\to F^n"}</M>, so every <M>{"n"}</M>-dimensional space over <M>{"F"}</M> looks like <M>{"F^n"}</M>. But
          the isomorphism depends on the basis, and much of this course looks for properties of maps that do not.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lin",
      rung: "check",
      prompt: <p>Which of these maps from ℝ² to ℝ² are linear? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["(x, y) ↦ (y, x)", "(x, y) ↦ (x + 1, y)", "(x, y) ↦ (2x − y, 3y)", "(x, y) ↦ (xy, 0)"],
        correct: [0, 2],
      },
    },
    {
      key: "size",
      rung: "check",
      prompt: <p>A linear map from a 4-dimensional space to a 3-dimensional space has a matrix with how many entries?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "entry",
      rung: "apply",
      prompt: <p>For differentiation in the basis 1, x, x², x³, what is the entry in the row for x and the column for x²?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>The shift p(x) ↦ p(x + 1) sends x³ to what? Give the coefficient of x in the result.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "dimL",
      rung: "apply",
      prompt: <p>What is the dimension of the space of linear maps from ℝ³ to ℝ²?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a linear map sends 0 to 0. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes T(0) = T(0 + 0) = T(0) + T(0).",
          "Subtracts T(0) from both sides.",
          "Concludes T(0) = 0. Using T(0 · v) = 0 · T(v) is equally fine.",
        ],
      },
    },
    {
      key: "nil",
      rung: "stretch",
      prompt: <p>Explain, using the map rather than the matrix, why differentiation on polynomials of degree at most 3 has no eigenvalue other than 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if p′ = λp with p ≠ 0 and λ ≠ 0, the degrees of the two sides differ, since differentiation lowers degree.",
          "Concludes λ = 0, with the constants as eigenvectors.",
          "Optionally notes D⁴ = 0, so any eigenvalue λ satisfies λ⁴ = 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a linear map between abstract vector spaces is, why a linear map is determined by its values on a basis, how its matrix is built column by column, and why matrix multiplication matches composition.",

  glimpse: (
    <p>
      The next lesson studies the null space and range of a linear map and proves the rank-nullity theorem. Duality later
      looks at linear maps into the field itself, and eigenvalues return as invariant subspaces of a single map.
    </p>
  ),
};
