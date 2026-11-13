import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WedgeShadowViz } from "@/components/viz/WedgeShadowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.7.3",
  minutes: 85,
  links: {
    revisits: ["m8.7.2", "m8.6.2", "m5.7.4"],
    foreshadows: ["m26.5.2", "m12.6.1", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The cross product of two vectors in space is a vector perpendicular to both, with length equal to the area they
        span. But it exists only in three dimensions. What is it really, and what replaces it in four dimensions or in a
        hundred?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set two vectors in space, and compare the area of their parallelogram with the areas of its shadows.</p>
      <WedgeShadowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="exterior power">
        <p>
          The <M>{"k"}</M>-th <strong>exterior power</strong> <M>{"\\Lambda^k V"}</M> is a space with an alternating{" "}
          <M>{"k"}</M>-linear map <M>{"(v_1, \\dots, v_k) \\mapsto v_1 \\wedge \\cdots \\wedge v_k"}</M>, through which every
          alternating <M>{"k"}</M>-linear map factors uniquely as a linear map. Alternating means the wedge is 0 when two
          vectors are equal, so swapping two vectors changes the sign.
        </p>
      </Definition>

      <Theorem title="basis and dimension">
        <p>
          If <M>{"e_1, \\dots, e_n"}</M> is a basis of <M>{"V"}</M>, the wedges{" "}
          <M>{"e_{i_1} \\wedge \\cdots \\wedge e_{i_k}"}</M> with <M>{"i_1 < \\cdots < i_k"}</M> form a basis of{" "}
          <M>{"\\Lambda^k V"}</M>. So <M>{"\\dim \\Lambda^k V = \\binom{n}{k}"}</M>, and <M>{"\\Lambda^k V = 0"}</M> for{" "}
          <M>{"k > n"}</M>.
        </p>
      </Theorem>

      <Theorem title="independence and the determinant">
        <p>
          <M>{"v_1 \\wedge \\cdots \\wedge v_k \\ne 0"}</M> exactly when <M>{"v_1, \\dots, v_k"}</M> are linearly independent.
          An operator <M>{"T"}</M> induces <M>{"\\Lambda^k T(v_1 \\wedge \\cdots \\wedge v_k) = Tv_1 \\wedge \\cdots \\wedge Tv_k"}</M>,
          and on the one-dimensional space <M>{"\\Lambda^n V"}</M> this is multiplication by <M>{"\\det T"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If some <M>{"v_j"}</M> is a combination of the others, expand by multilinearity: every term repeats a vector, so it
          is 0. If they are independent, extend to a basis; the wedge of a basis is a basis vector of{" "}
          <M>{"\\Lambda^n V"}</M>, so it is nonzero, and wedging with the extra vectors shows the original wedge was nonzero.
          The last claim is the definition of the determinant by alternating forms, read on the dual side.
        </p>
      </Proof>

      <Example title="the cross product">
        <p>In <M>{"\\mathbb{R}^3"}</M>, expanding gives</p>
        <MD>{"u \\wedge v = (u_1v_2 - u_2v_1)\\, e_1 \\wedge e_2 + (u_1v_3 - u_3v_1)\\, e_1 \\wedge e_3 + (u_2v_3 - u_3v_2)\\, e_2 \\wedge e_3."}</MD>
        <p>
          Matching <M>{"e_2 \\wedge e_3, e_3 \\wedge e_1, e_1 \\wedge e_2"}</M> with <M>{"e_1, e_2, e_3"}</M>, the Hodge star,
          turns <M>{"u \\wedge v"}</M> into <M>{"u \\times v"}</M>. This identification uses the inner product and the
          orientation, and works only because <M>{"\\binom32 = 3"}</M>. In <M>{"\\mathbb{R}^4"}</M>,{" "}
          <M>{"\\Lambda^2"}</M> has dimension 6, and there is no cross product of two vectors.
        </p>
      </Example>

      <Remark title="subspaces and forms">
        <p>
          A nonzero <M>{"v_1 \\wedge \\cdots \\wedge v_k"}</M> determines the subspace spanned by the <M>{"v_j"}</M>, up to scale,
          and its coordinates give the Pl&uuml;cker coordinates of the Grassmannian of <M>{"k"}</M>-planes. Differential{" "}
          <M>{"k"}</M>-forms on a manifold are fields of elements of <M>{"\\Lambda^k"}</M> of the dual tangent spaces, the
          objects integrated in Stokes&rsquo; theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of Λ²ℝ⁴?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "vv",
      rung: "check",
      prompt: <p>True or false: v ∧ v = 0 for every vector v.</p>,
      answer: { kind: "choice", options: ["True", "False"], correct: [0] },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>Write (e₁ + e₂) ∧ (e₁ − e₂) as a multiple of e₁ ∧ e₂. What is the multiple?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "coord",
      rung: "apply",
      prompt: <p>For u = (1, 0, 1) and v = (0, 1, 1), what is the coefficient of e₁ ∧ e₂ in u ∧ v?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "top",
      rung: "apply",
      prompt: <p>What is the dimension of Λ³ℝ³?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that v ∧ w = −w ∧ v, using only that x ∧ x = 0 for every x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands (v + w) ∧ (v + w) by bilinearity.",
          "Uses v ∧ v = w ∧ w = 0 and (v + w) ∧ (v + w) = 0 to get v ∧ w + w ∧ v = 0.",
          "Concludes v ∧ w = −w ∧ v.",
        ],
      },
    },
    {
      key: "plucker",
      rung: "stretch",
      prompt: <p>In ℝ⁴, is ω = e₁ ∧ e₂ + e₃ ∧ e₄ equal to u ∧ v for some vectors u and v? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if ω = u ∧ v then ω ∧ ω = u ∧ v ∧ u ∧ v = 0.",
          "Computes ω ∧ ω = 2 e₁ ∧ e₂ ∧ e₃ ∧ e₄, which is nonzero.",
          "Concludes ω is not a single wedge. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the exterior powers are, their bases and dimensions, why a wedge detects linear independence, how the top exterior power gives the determinant, and how the wedge product in three dimensions becomes the cross product.",

  glimpse: (
    <p>
      This completes Linear Algebra II. Differential geometry builds differential forms from exterior powers, and analysis
      uses them for the exterior derivative and Stokes&rsquo; theorem.
    </p>
  ),
};
