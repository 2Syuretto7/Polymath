import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TensorGridViz } from "@/components/viz/TensorGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.4.3",
  minutes: 95,
  links: {
    revisits: ["m24.4.2", "m24.1.4", "m24.2.2"],
    foreshadows: ["m24.4.4", "m24.5.1", "m25.5.1"],
  },

  puzzle: (
    <>
      <p>
        Multiplication of integers is bilinear: (a + a′)b = ab + a′b, and so on. Many maps in algebra are bilinear rather than
        linear, such as the dot product or the determinant of a 2 × 2 matrix as a function of its rows. Is there a single
        module through which every bilinear map becomes a linear one? And what is it for ℤ/4 and ℤ/6?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Colour each pair (a, b) by the product ab modulo gcd(m, n), and watch which colourings are possible.</p>
      <TensorGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the tensor product">
        <p>
          For modules <M>M</M> and <M>N</M> over a commutative ring <M>R</M>, the <strong>tensor product</strong>{" "}
          <M>{"M \\otimes_R N"}</M> is a module with a bilinear map <M>{"M \\times N \\to M \\otimes_R N"}</M>,{" "}
          <M>{"(m, n) \\mapsto m \\otimes n"}</M>, such that every bilinear map <M>{"M \\times N \\to P"}</M> factors uniquely
          through a linear map <M>{"M \\otimes_R N \\to P"}</M>. It exists: take the free module on all pairs and divide by the
          relations of bilinearity. Every element is a sum of pure tensors <M>{"m \\otimes n"}</M>, but usually not a single one.
        </p>
      </Definition>

      <Example title="computations">
        <p>
          <M>{"R \\otimes_R N \\cong N"}</M>, <M>{"R^a \\otimes R^b \\cong R^{ab}"}</M>, and tensor distributes over direct
          sums. <M>{"\\mathbb{Z}/m \\otimes \\mathbb{Z}/n \\cong \\mathbb{Z}/\\gcd(m, n)"}</M>, since <M>{"1 \\otimes 1"}</M> is
          killed by both <M>m</M> and <M>n</M>. So <M>{"\\mathbb{Z}/2 \\otimes \\mathbb{Z}/3 = 0"}</M>, and{" "}
          <M>{"\\mathbb{Q} \\otimes \\mathbb{Z}/n = 0"}</M>. Localisation is a tensor product:{" "}
          <M>{"S^{-1}M \\cong S^{-1}R \\otimes_R M"}</M>.
        </p>
      </Example>

      <Theorem title="the tensor-hom adjunction">
        <p>For modules <M>M, N, P</M> there is a natural isomorphism</p>
        <MD>{"\\operatorname{Hom}(M \\otimes N, P) \\cong \\operatorname{Hom}(M, \\operatorname{Hom}(N, P)),"}</MD>
        <p>
          both sides being the bilinear maps <M>{"M \\times N \\to P"}</M>. So <M>{"- \\otimes N"}</M> is left adjoint to{" "}
          <M>{"\\operatorname{Hom}(N, -)"}</M>, which is the algebraic form of currying a function of two variables.
        </p>
      </Theorem>

      <Theorem title="exactness">
        <p>
          <M>{"\\operatorname{Hom}(N, -)"}</M> is <strong>left exact</strong>: it turns{" "}
          <M>{"0 \\to A \\to B \\to C"}</M> exact into <M>{"0 \\to \\operatorname{Hom}(N, A) \\to \\operatorname{Hom}(N, B) \\to \\operatorname{Hom}(N, C)"}</M>{" "}
          exact. Dually <M>{"- \\otimes N"}</M> is <strong>right exact</strong>, as left adjoints preserve cokernels. Neither is
          exact in general: tensoring <M>{"0 \\to \\mathbb{Z} \\xrightarrow{2} \\mathbb{Z}"}</M> with ℤ/2 gives the zero map
          on ℤ/2, which is not injective. <M>N</M> is projective exactly when <M>{"\\operatorname{Hom}(N, -)"}</M> is exact.
        </p>
      </Theorem>

      <Remark title="flatness">
        <p>
          A module <M>N</M> is <strong>flat</strong> if <M>{"- \\otimes N"}</M> is exact. Projectives are flat, and so is ℚ
          over ℤ, though it is not projective; localisations are flat. Over a principal ideal domain, flat means torsion-free.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "univ",
      rung: "check",
      prompt: <p>What universal property characterises M ⊗ N?</p>,
      answer: { kind: "choice", options: ["Every bilinear map out of M × N factors uniquely through a linear map out of M ⊗ N", "It is the largest submodule of M ⊕ N", "Every linear map into M factors through it", "It is the product of M and N"], correct: [0] },
    },
    {
      key: "exact",
      rung: "check",
      prompt: <p>Which exactness does tensoring with a fixed module have in general?</p>,
      answer: { kind: "choice", options: ["Right exactness", "Left exactness", "Full exactness", "None at all"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Using the visualisation or otherwise, how many elements does ℤ/12 ⊗ ℤ/18 have?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>What is ℚ ⊗ ℤ/5, as an abelian group?</p>,
      answer: { kind: "choice", options: ["0, since q ⊗ x = (q/5) ⊗ 5x = 0", "ℤ/5", "ℚ", "ℚ/5ℤ"], correct: [0] },
    },
    {
      key: "adj",
      rung: "apply",
      prompt: <p>The tensor-hom adjunction says tensoring with N is left adjoint to which functor?</p>,
      answer: { kind: "choice", options: ["Hom(N, −)", "Hom(−, N)", "The forgetful functor", "Localisation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ℤ/m ⊗ ℤ/n ≅ ℤ/d, where d = gcd(m, n).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the tensor product is cyclic, generated by 1 ⊗ 1, since a ⊗ b = ab(1 ⊗ 1).",
          "Shows m and n, hence d, kill 1 ⊗ 1, using Bézout to write d = um + vn; so the order of 1 ⊗ 1 divides d.",
          "Exhibits the bilinear map (a, b) ↦ ab mod d, which sends 1 ⊗ 1 to a generator of ℤ/d, so the order is exactly d.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the element 1 ⊗ 1 + 2 ⊗ 2 of ℝ² ⊗ ℝ² is not a pure tensor, where 1 and 2 stand for the two basis vectors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies ℝ² ⊗ ℝ² with 2 × 2 matrices, sending v ⊗ w to the matrix with entries vᵢwⱼ.",
          "Notes that pure tensors give matrices of rank at most 1, while the given element is the identity matrix, of rank 2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hom and tensor preserve only half of exactness. The other half is not simply lost: it can be measured, by applying the
        functor to a projective resolution and taking homology. The measurements are new modules with their own meaning.
      </p>
      <p>
        Next, Ext and Tor: derived functors, long exact sequences, Tor and torsion, Ext and extensions, and the calculation for
        cyclic groups.
      </p>
    </>
  ),
};
