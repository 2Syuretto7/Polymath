import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HomViz } from "@/components/viz/HomViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.2.4",
  minutes: 85,
  links: {
    revisits: ["m7.2.3", "m3.6.1", "m3.4.2"],
    foreshadows: ["m7.2.5", "m7.4.1", "m15.4.2"],
  },

  puzzle: (
    <>
      <p>
        The determinant turns a product of matrices into a product of numbers: <M>{"\\det(AB) = \\det A \\det B"}</M>. The
        exponential turns sums into products: <M>{"e^{x+y} = e^x e^y"}</M>. Taking remainders mod 4 turns integer addition
        into clock addition. Each map carries the structure of one group into another. What do such maps lose, and what do
        they keep?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Try the rule <M>{"x \\mapsto kx"}</M> from <M>{"\\mathbb Z_{12}"}</M> to various targets. When is it a homomorphism, and
        what are its kernel and image?
      </p>
      <HomViz />
    </>
  ),

  theory: (
    <>
      <Definition title="homomorphism">
        <p>
          A map <M>{"\\varphi : G \\to H"}</M> between groups is a <strong>homomorphism</strong> if{" "}
          <M>{"\\varphi(ab) = \\varphi(a)\\varphi(b)"}</M> for all <M>{"a, b"}</M>. Its <strong>kernel</strong> is{" "}
          <M>{"\\ker\\varphi = \\{g : \\varphi(g) = e\\}"}</M> and its <strong>image</strong> is{" "}
          <M>{"\\varphi(G)"}</M>. A bijective homomorphism is an <strong>isomorphism</strong>, and isomorphic groups,{" "}
          <M>{"G \\cong H"}</M>, are the same group with different names for the elements.
        </p>
      </Definition>

      <Theorem title="basic properties">
        <p>
          A homomorphism sends <M>{"e"}</M> to <M>{"e"}</M> and inverses to inverses. Its image is a subgroup of{" "}
          <M>{"H"}</M>, and its kernel is a normal subgroup of <M>{"G"}</M>. It is injective if and only if its kernel is{" "}
          <M>{"\\{e\\}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"\\varphi(e) = \\varphi(e)\\varphi(e)"}</M>, so <M>{"\\varphi(e) = e"}</M> by cancellation, and then{" "}
          <M>{"\\varphi(g)\\varphi(g^{-1}) = \\varphi(e) = e"}</M>. If <M>{"k \\in \\ker\\varphi"}</M>, then{" "}
          <M>{"\\varphi(gkg^{-1}) = \\varphi(g)\\,e\\,\\varphi(g)^{-1} = e"}</M>, so the kernel is normal. Finally,{" "}
          <M>{"\\varphi(a) = \\varphi(b)"}</M> exactly when <M>{"a^{-1}b \\in \\ker\\varphi"}</M>, so a trivial kernel
          means injective.
        </p>
      </Proof>

      <Example title="examples">
        <p>
          <M>{"\\det : GL_n(\\mathbb R) \\to \\mathbb R^\\times"}</M> has kernel <M>{"SL_n(\\mathbb R)"}</M>.{" "}
          <M>{"\\exp : (\\mathbb R, +) \\to (\\mathbb R_{>0}, \\times)"}</M> is an isomorphism, with inverse <M>{"\\ln"}</M>.
          Reduction mod <M>{"n"}</M>, <M>{"\\mathbb Z \\to \\mathbb Z_n"}</M>, has kernel <M>{"n\\mathbb Z"}</M>. The sign of a
          permutation is a homomorphism to <M>{"\\{\\pm 1\\}"}</M>, whose kernel is the alternating group. And every normal
          subgroup <M>{"N"}</M> is a kernel: of the map <M>{"G \\to G/N"}</M>, <M>{"g \\mapsto gN"}</M>.
        </p>
      </Example>

      <Remark title="structure-preserving maps">
        <p>
          In every part of algebra the objects come with their structure-preserving maps: linear maps for vector spaces,
          ring homomorphisms for rings, continuous maps for topological spaces. Studying the maps often reveals more than
          studying the objects, an idea made systematic by category theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What must a homomorphism φ satisfy?</p>,
      answer: { kind: "choice", options: ["φ(ab) = φ(a)φ(b)", "φ(a) = a", "φ is a bijection", "φ(ab) = φ(b)φ(a) only"], correct: [0] },
    },
    {
      key: "ker",
      rung: "check",
      prompt: <p>What is the kernel of reduction mod 5, from ℤ to ℤ₅?</p>,
      answer: { kind: "choice", options: ["{0}", "5ℤ", "ℤ", "{0, 1, 2, 3, 4}"], correct: [1] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>For the homomorphism x ↦ 2x from ℤ₁₂ to ℤ₄, how many elements are in the kernel?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these are homomorphisms? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["det, from invertible matrices to non-zero reals", "x ↦ x + 1 on (ℤ, +)", "exp, from (ℝ, +) to (ℝ>0, ×)", "x ↦ x² on (ℝ, +)"],
        correct: [0, 2],
      },
    },
    {
      key: "z5",
      rung: "apply",
      prompt: <p>How many homomorphisms are there from ℤ₁₂ to ℤ₅?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the kernel of a homomorphism is a subgroup. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes φ(e) = e, so e is in the kernel.",
          "For a, b in the kernel, φ(ab⁻¹) = φ(a)φ(b)⁻¹ = e, so ab⁻¹ is in the kernel.",
        ],
      },
    },
    {
      key: "image",
      rung: "stretch",
      prompt: <p>Show that the image of an abelian group under a homomorphism is abelian. Is the converse true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes φ(a)φ(b) = φ(ab) = φ(ba) = φ(b)φ(a).",
          "Notes the converse fails, for example the trivial homomorphism from a non-abelian group, or the sign map from Sₙ. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a group homomorphism is, why kernels are normal subgroups and images are subgroups, why a trivial kernel means injective, and examples such as the determinant and the exponential.",

  glimpse: (
    <p>
      The next lesson proves the isomorphism theorems, which say that the image of a homomorphism is the quotient by its
      kernel. Group actions are homomorphisms into permutation groups, and the fundamental group in Topology turns
      continuous maps into homomorphisms.
    </p>
  ),
};
