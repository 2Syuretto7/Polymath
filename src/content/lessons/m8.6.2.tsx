import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PermDetViz } from "@/components/viz/PermDetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.6.2",
  minutes: 90,
  links: {
    revisits: ["m8.6.1", "m3.6.1", "m7.3.1"],
    foreshadows: ["m8.6.3", "m8.7.3", "m26.5.2"],
  },

  puzzle: (
    <>
      <p>
        School teaches the determinant as a recipe of cofactors, and then proves that{" "}
        <M>{"\\det(AB) = \\det A \\det B"}</M> by pages of algebra. Is there a definition from which that rule is obvious, and
        which does not depend on choosing a basis?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a matrix and click through the six permutations. Each contributes one signed product, and together they give the
        determinant.
      </p>
      <PermDetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="determinant through eigenvalues">
        <p>
          For an operator on a complex space, <M>{"\\det T"}</M> is the product of its eigenvalues, each repeated according to
          multiplicity. For a real space, use the eigenvalues over <M>{"\\mathbb{C}"}</M>. Then the characteristic polynomial is{" "}
          <M>{"\\det(zI - T)"}</M>, and <M>{"T"}</M> is invertible exactly when <M>{"\\det T \\ne 0"}</M>, since that says 0 is
          not an eigenvalue.
        </p>
      </Definition>

      <Definition title="alternating forms">
        <p>
          An <M>{"n"}</M>-linear form <M>{"\\omega(v_1, \\dots, v_n)"}</M> on <M>{"V"}</M> is <strong>alternating</strong> if it
          is 0 whenever two arguments are equal. Then swapping two arguments changes its sign. If <M>{"\\dim V = n"}</M>, the
          alternating <M>{"n"}</M>-linear forms make up a space of dimension 1.
        </p>
      </Definition>

      <Theorem title="the determinant as a scaling factor">
        <p>
          For each operator <M>{"T"}</M> there is a unique scalar <M>{"\\det T"}</M> with
        </p>
        <MD>{"\\omega(Tv_1, \\dots, Tv_n) = (\\det T)\\, \\omega(v_1, \\dots, v_n)"}</MD>
        <p>
          for every alternating <M>{"n"}</M>-linear form <M>{"\\omega"}</M> and all <M>{"v_k"}</M>. It agrees with the product
          of the eigenvalues.
        </p>
      </Theorem>

      <Proof>
        <p>
          The form <M>{"(v_1, \\dots, v_n) \\mapsto \\omega(Tv_1, \\dots, Tv_n)"}</M> is again alternating and{" "}
          <M>{"n"}</M>-linear, so in a one-dimensional space it is a multiple of <M>{"\\omega"}</M>, by a factor independent of{" "}
          <M>{"\\omega"}</M>. To compare with eigenvalues, use a basis in which <M>{"T"}</M> is upper-triangular: expanding{" "}
          <M>{"\\omega(Te_1, \\dots, Te_n)"}</M> by multilinearity, every term with a repeated basis vector vanishes, leaving
          the product of the diagonal entries.
        </p>
      </Proof>

      <Theorem title="multiplicativity">
        <p><M>{"\\det(ST) = \\det S \\det T"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          <M>{"\\omega(STv_1, \\dots, STv_n) = (\\det S)\\,\\omega(Tv_1, \\dots, Tv_n) = (\\det S)(\\det T)\\,\\omega(v_1, \\dots, v_n)"}</M>.
        </p>
      </Proof>

      <Example title="the Leibniz formula">
        <p>
          Expanding <M>{"\\omega(Ae_1, \\dots, Ae_n)"}</M> by multilinearity, only terms using each basis vector once survive,
          one for each permutation <M>{"\\sigma"}</M>, and rearranging costs the sign of <M>{"\\sigma"}</M>:
        </p>
        <MD>{"\\det A = \\sum_{\\sigma \\in S_n} \\operatorname{sign}(\\sigma)\\, A_{\\sigma(1),1} A_{\\sigma(2),2} \\cdots A_{\\sigma(n),n}."}</MD>
        <p>
          The formula is symmetric in rows and columns, so <M>{"\\det A^{\\mathsf T} = \\det A"}</M>. With <M>{"n!"}</M>{" "}
          terms it is useless for computing large determinants, which are found by row reduction instead.
        </p>
      </Example>

      <Remark title="two definitions, one number">
        <p>
          The eigenvalue definition explains invertibility and the characteristic polynomial; the form definition explains
          multiplicativity and, as the next lesson shows, volume. Alternating forms reappear as the exterior powers of
          multilinear algebra and as the differential forms of geometry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tri",
      rung: "check",
      prompt: <p>What is the determinant of the lower-triangular matrix [3, 0, 0; 5, 2, 0; −1, 4, 1]?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "terms",
      rung: "check",
      prompt: <p>How many terms does the Leibniz formula have for a 4 by 4 matrix?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>A is 3 by 3 with det A = 5. What is det(2A)?</p>,
      answer: { kind: "numeric", value: 40 },
    },
    {
      key: "m1",
      rung: "apply",
      prompt: <p>Compute the determinant of [2, 1, 0; 1, 3, 1; 0, 1, 4].</p>,
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "perm",
      rung: "apply",
      prompt: <p>What is the determinant of the permutation matrix [0, 1, 0; 0, 0, 1; 1, 0, 0]?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using the definition of det T as the product of the eigenvalues, prove that T is invertible exactly when det T ≠ 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes det T = 0 exactly when some eigenvalue is 0.",
          "Notes 0 is an eigenvalue exactly when Tv = 0 for some v ≠ 0, that is, T is not injective.",
          "Concludes using that an operator on a finite-dimensional space is invertible exactly when it is injective.",
        ],
      },
    },
    {
      key: "dim1",
      rung: "stretch",
      prompt: <p>Why is an alternating n-linear form on an n-dimensional space determined by its value on a single basis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands ω(v₁, …, vₙ) in a basis using multilinearity.",
          "Notes terms with a repeated basis vector vanish, and the rest are ± ω(e₁, …, eₙ) by swapping.",
          "Concludes ω is ω(e₁, …, eₙ) times a fixed expression, so the space of such forms has dimension at most 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the determinant as a product of eigenvalues and as the scaling factor of alternating forms, why det(ST) = det S det T is then immediate, the Leibniz formula, and why the determinant detects invertibility.",

  glimpse: (
    <p>
      The next lesson shows that the absolute value of the determinant is the factor by which a map scales volume. Exterior
      powers and differential forms build on alternating forms.
    </p>
  ),
};
