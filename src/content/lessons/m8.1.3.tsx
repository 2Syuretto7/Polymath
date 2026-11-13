import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RankNullityViz } from "@/components/viz/RankNullityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.1.3",
  minutes: 85,
  links: {
    revisits: ["m8.1.2", "m3.4.2", "m7.2.5"],
    foreshadows: ["m8.1.4", "m8.2.2", "m12.4.3"],
  },

  puzzle: (
    <>
      <p>
        A linear map from a 5-dimensional space to a 3-dimensional space cannot be injective: something must be crushed to
        zero. A map from a 3-dimensional space to a 5-dimensional one cannot be onto. These sound like counting facts, but
        the spaces may be infinite sets. What exactly is being counted?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Edit the matrix and watch the reduced form, the null space and the bar showing how the three dimensions of the domain
        divide.
      </p>
      <RankNullityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="null space and range">
        <p>
          For linear <M>{"T : V \\to W"}</M>, the <strong>null space</strong> is{" "}
          <M>{"\\operatorname{null} T = \\{v : Tv = 0\\}"}</M>, a subspace of <M>{"V"}</M>, and the <strong>range</strong>{" "}
          is <M>{"\\operatorname{range} T = \\{Tv\\}"}</M>, a subspace of <M>{"W"}</M>. <M>{"T"}</M> is injective exactly
          when its null space is <M>{"\\{0\\}"}</M>, since <M>{"Tu = Tv"}</M> means <M>{"T(u - v) = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="the fundamental theorem of linear maps">
        <p>If V is finite-dimensional, then</p>
        <MD>{"\\dim V = \\dim \\operatorname{null} T + \\dim \\operatorname{range} T."}</MD>
      </Theorem>

      <Proof>
        <p>
          Take a basis <M>{"u_1, \\dots, u_k"}</M> of the null space and extend it to a basis{" "}
          <M>{"u_1, \\dots, u_k, v_1, \\dots, v_r"}</M> of <M>{"V"}</M>. The range is spanned by{" "}
          <M>{"Tv_1, \\dots, Tv_r"}</M>, since the <M>{"Tu_i"}</M> are 0. They are independent: if{" "}
          <M>{"\\sum c_jTv_j = 0"}</M>, then <M>{"\\sum c_jv_j"}</M> lies in the null space, so it is a combination of the{" "}
          <M>{"u_i"}</M>, and independence of the whole basis forces every <M>{"c_j = 0"}</M>. So the range has dimension{" "}
          <M>{"r = \\dim V - k"}</M>.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          If <M>{"\\dim V > \\dim W"}</M>, no linear map <M>{"V \\to W"}</M> is injective; if <M>{"\\dim V < \\dim W"}</M>,
          none is onto. A homogeneous system with more unknowns than equations has a non-zero solution. And for an operator
          on a finite-dimensional space, injective, onto and invertible are the same.
        </p>
      </Example>

      <Remark title="a first isomorphism theorem">
        <p>
          The theorem is the linear version of the first isomorphism theorem for groups: the range is isomorphic to{" "}
          <M>{"V"}</M> divided by the null space, a quotient space that the next lesson defines. For differentiation on
          polynomials of degree at most 3, the null space is the constants and the range is the polynomials of degree at most
          2: <M>{"4 = 1 + 3"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nullity",
      rung: "check",
      prompt: <p>A linear map from ℝ⁷ to ℝ⁴ has range of dimension 4. What is the dimension of its null space?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "inj",
      rung: "check",
      prompt: <p>When is a linear map injective?</p>,
      answer: {
        kind: "choice",
        options: ["When its range is everything", "When its null space is {0}", "When it is a square matrix", "Always"],
        correct: [1],
      },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>What is the rank of the 3 × 3 matrix with rows (1, 2, 3), (2, 4, 6), (3, 6, 9)?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>Differentiation on polynomials of degree at most 6 has a null space of what dimension?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "onto",
      rung: "apply",
      prompt: <p>Which of these can be onto? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["A linear map ℝ⁵ → ℝ³", "A linear map ℝ³ → ℝ⁵", "A linear map ℝ⁴ → ℝ⁴", "A linear map ℝ² → ℝ³"],
        correct: [0, 2],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a linear map is injective if its null space is {"{0}"}. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes Tu = Tv.",
          "Uses linearity to get T(u − v) = 0, so u − v is in the null space.",
          "Concludes u − v = 0, so u = v.",
        ],
      },
    },
    {
      key: "system",
      rung: "stretch",
      prompt: <p>Use the theorem to explain why 3 homogeneous linear equations in 5 unknowns always have a non-zero solution.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Views the system as a linear map from F⁵ to F³.",
          "Notes the range has dimension at most 3, so the null space has dimension at least 2.",
          "Concludes there is a non-zero vector in the null space, a non-zero solution. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the null space and range of a linear map are, why a map is injective exactly when its null space is zero, the proof that dim V = dim null T + dim range T, and its consequences for systems of equations.",

  glimpse: (
    <p>
      The next lesson builds quotient spaces, making the link with the first isomorphism theorem exact. Invariant subspaces
      come next in the study of eigenvalues, and the rank theorem of multivariable analysis extends these ideas to smooth
      maps.
    </p>
  ),
};
