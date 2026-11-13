import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OuterProductViz } from "@/components/viz/OuterProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.7.2",
  minutes: 85,
  links: {
    revisits: ["m8.7.1", "m8.1.5", "m8.1.4"],
    foreshadows: ["m8.7.3", "m24.4.3", "m26.5.1"],
  },

  puzzle: (
    <>
      <p>
        Linear algebra handles linear maps beautifully, but many natural operations, such as the dot product, the
        determinant, and multiplication in an algebra, are linear in each variable separately. Is there a way to turn every
        bilinear map into an ordinary linear map, so that all the tools apply?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Build elements of <M>{"\\mathbb{R}^3 \\otimes \\mathbb{R}^3"}</M> as arrays. Compare a single <M>{"u \\otimes v"}</M>{" "}
        with a sum of two.
      </p>
      <OuterProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="tensor product">
        <p>
          The <strong>tensor product</strong> of <M>{"V"}</M> and <M>{"W"}</M> is a vector space <M>{"V \\otimes W"}</M> with
          a bilinear map <M>{"(v, w) \\mapsto v \\otimes w"}</M> such that every bilinear map{" "}
          <M>{"\\beta : V \\times W \\to U"}</M> factors uniquely through it: there is exactly one linear{" "}
          <M>{"\\tilde\\beta : V \\otimes W \\to U"}</M> with <M>{"\\tilde\\beta(v \\otimes w) = \\beta(v, w)"}</M>.
        </p>
      </Definition>

      <Theorem title="construction and dimension">
        <p>
          If <M>{"e_1, \\dots, e_m"}</M> and <M>{"f_1, \\dots, f_n"}</M> are bases, then the <M>{"mn"}</M> vectors{" "}
          <M>{"e_j \\otimes f_k"}</M> form a basis of <M>{"V \\otimes W"}</M>. So{" "}
          <M>{"\\dim(V \\otimes W) = \\dim V \\cdot \\dim W"}</M>, and the tensor product is unique up to a unique isomorphism.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take the space with basis symbols <M>{"e_j \\otimes f_k"}</M>, and define{" "}
          <M>{"v \\otimes w = \\sum_{j,k} v_j w_k\\, e_j \\otimes f_k"}</M>. This is bilinear. Given <M>{"\\beta"}</M>, the only
          possible <M>{"\\tilde\\beta"}</M> is the linear map with{" "}
          <M>{"\\tilde\\beta(e_j \\otimes f_k) = \\beta(e_j, f_k)"}</M>, and bilinearity of <M>{"\\beta"}</M> shows it works on
          every <M>{"v \\otimes w"}</M>. Uniqueness up to isomorphism follows from the universal property.
        </p>
      </Proof>

      <Example title="matrices as tensors">
        <p>
          With the standard bases, <M>{"\\mathbb{R}^m \\otimes \\mathbb{R}^n"}</M> is the space of <M>{"m \\times n"}</M> arrays,
          with <M>{"u \\otimes v = uv^{\\mathsf T}"}</M>. More invariantly, <M>{"V' \\otimes W \\cong \\mathcal{L}(V, W)"}</M>{" "}
          via <M>{"\\varphi \\otimes w \\mapsto (v \\mapsto \\varphi(v)w)"}</M>. Pure tensors <M>{"\\varphi \\otimes w"}</M>{" "}
          correspond to maps of rank 1, and a general tensor is a sum of them.
        </p>
      </Example>

      <Remark title="pure and entangled">
        <p>
          Not every tensor is pure: <M>{"e_1 \\otimes e_1 + e_2 \\otimes e_2"}</M> is the identity matrix, of rank 2. In
          quantum mechanics the state space of two systems is the tensor product of their spaces, and states that are not pure
          tensors are <strong>entangled</strong>; measuring one part then affects what we know of the other. For tensors with
          three or more factors, even computing the rank is hard, and the speed of matrix multiplication depends on the rank
          of one particular tensor.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of ℝ³ ⊗ ℝ⁴?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "bil",
      rung: "check",
      prompt: <p>Which of these equal v ⊗ (w₁ + w₂)? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["v ⊗ w₁ + v ⊗ w₂", "(v + v) ⊗ w₁", "v ⊗ w₁ + w₂", "(v ⊗ w₁) + (v ⊗ w₂)"],
        correct: [0, 3],
      },
    },
    {
      key: "scal",
      rung: "apply",
      prompt: <p>True or false: (2v) ⊗ w = v ⊗ (2w).</p>,
      answer: { kind: "choice", options: ["True", "False"], correct: [0] },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>What is the rank of the tensor e₁ ⊗ e₁ + e₂ ⊗ e₂ in ℝ² ⊗ ℝ²?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "entry",
      rung: "apply",
      prompt: <p>For u = (1, 2) and v = (3, 1), what is the entry in row 2, column 1 of the array u ⊗ v?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that e₁ ⊗ e₁ + e₂ ⊗ e₂ in ℝ² ⊗ ℝ² is not of the form u ⊗ v.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies tensors with 2 by 2 arrays, with u ⊗ v the array uvᵀ.",
          "Notes uvᵀ has rank at most 1, since every column is a multiple of u.",
          "Notes the given tensor is the identity array, of rank 2, so they cannot be equal.",
        ],
      },
    },
    {
      key: "ent",
      rung: "stretch",
      prompt: <p>In quantum mechanics, why might a state of two particles that is not a pure tensor be called entangled? Explain in your own words.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that a pure tensor u ⊗ v assigns each particle its own state.",
          "Explains that a non-pure tensor such as e₁ ⊗ e₁ + e₂ ⊗ e₂ cannot be split into separate states.",
          "Connects this to correlated outcomes when the particles are measured. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the universal property of the tensor product, its construction from bases and its dimension, how it identifies with matrices and linear maps, and the difference between pure and non-pure tensors.",

  glimpse: (
    <p>
      The next lesson builds the exterior powers, the alternating part of repeated tensor products. Module theory relates
      tensor products to Hom, and differential geometry is written in tensors.
    </p>
  ),
};
