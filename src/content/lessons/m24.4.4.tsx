import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TorViz } from "@/components/viz/TorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.4.4",
  minutes: 95,
  links: {
    revisits: ["m24.4.3", "m24.4.1", "m24.4.2"],
    foreshadows: ["m24.5.1", "m25.3.1", "m25.5.1"],
  },

  puzzle: (
    <>
      <p>
        Tensoring the exact sequence 0 → ℤ → ℤ → ℤ/2 → 0, whose first map is multiplication by 2, with ℤ/2 destroys
        injectivity on the left. Something has been lost. Can the loss be captured by a module, so that the broken sequence
        extends to a longer one that is exact again?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compute Tor and Ext of two cyclic groups from multiplication by m on ℤ/n.</p>
      <TorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Tor">
        <p>
          Take a projective resolution <M>{"\\cdots \\to P_1 \\to P_0 \\to M \\to 0"}</M>, delete <M>M</M>, and tensor with{" "}
          <M>N</M>. The result is a chain complex, and its homology groups are{" "}
          <M>{"\\operatorname{Tor}_i(M, N)"}</M>. They do not depend on the resolution chosen, and{" "}
          <M>{"\\operatorname{Tor}_0(M, N) = M \\otimes N"}</M>.
        </p>
      </Definition>

      <Definition title="Ext">
        <p>
          Apply <M>{"\\operatorname{Hom}(-, N)"}</M> to the same resolution instead. The cohomology groups are{" "}
          <M>{"\\operatorname{Ext}^i(M, N)"}</M>, with <M>{"\\operatorname{Ext}^0(M, N) = \\operatorname{Hom}(M, N)"}</M>. They
          can equally be computed from an injective resolution of <M>N</M>.
        </p>
      </Definition>

      <Theorem title="long exact sequences">
        <p>A short exact sequence <M>{"0 \\to A \\to B \\to C \\to 0"}</M> gives, by the snake lemma, a long exact sequence</p>
        <MD>{"\\cdots \\to \\operatorname{Tor}_1(B, N) \\to \\operatorname{Tor}_1(C, N) \\to A \\otimes N \\to B \\otimes N \\to C \\otimes N \\to 0,"}</MD>
        <p>
          and similarly for Ext. The failure of exactness of <M>{"- \\otimes N"}</M> on the left is precisely the image of{" "}
          <M>{"\\operatorname{Tor}_1(C, N)"}</M>.
        </p>
      </Theorem>

      <Example title="cyclic groups">
        <p>
          Using <M>{"0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m \\to 0"}</M>,{" "}
          <M>{"\\operatorname{Tor}_1(\\mathbb{Z}/m, N)"}</M> is the kernel of multiplication by <M>m</M> on <M>N</M>: the{" "}
          <M>m</M>-torsion, whence the name. <M>{"\\operatorname{Ext}^1(\\mathbb{Z}/m, N) = N/mN"}</M>. For{" "}
          <M>{"N = \\mathbb{Z}/n"}</M> both are <M>{"\\mathbb{Z}/\\gcd(m, n)"}</M>. Over ℤ, a principal ideal domain,
          resolutions have length one, so all higher Tor and Ext vanish.
        </p>
      </Example>

      <Remark title="why Ext is called Ext">
        <p>
          <M>{"\\operatorname{Ext}^1(C, A)"}</M> classifies extensions <M>{"0 \\to A \\to B \\to C \\to 0"}</M> up to
          equivalence, with 0 the split one. <M>{"\\operatorname{Ext}^1(\\mathbb{Z}/2, \\mathbb{Z}/2) \\cong \\mathbb{Z}/2"}</M>{" "}
          has two elements: the split extension ℤ/2 ⊕ ℤ/2 and the extension ℤ/4. This is the puzzle of the first lesson of
          this chapter, answered. Ext and Tor reappear as the universal coefficient theorems of algebraic topology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tor0",
      rung: "check",
      prompt: <p>What is Tor₀(M, N)?</p>,
      answer: { kind: "choice", options: ["M ⊗ N", "Hom(M, N)", "0", "M ⊕ N"], correct: [0] },
    },
    {
      key: "ext1",
      rung: "check",
      prompt: <p>What does Ext¹(C, A) classify?</p>,
      answer: { kind: "choice", options: ["Extensions 0 → A → B → C → 0 up to equivalence", "Homomorphisms from A to C", "Tensor products", "Projective modules"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Using the visualisation or otherwise, how many elements does Tor₁(ℤ/4, ℤ/6) have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "torsion",
      rung: "apply",
      prompt: <p>What is Tor₁(ℤ/m, N), for an abelian group N?</p>,
      answer: { kind: "choice", options: ["The elements of N killed by m", "N/mN", "N itself", "Always 0"], correct: [0] },
    },
    {
      key: "high",
      rung: "apply",
      prompt: <p>For abelian groups M and N, what is Tor₂(M, N)?</p>,
      answer: { kind: "choice", options: ["0, since over ℤ every module has a projective resolution of length one", "M ⊗ N", "ℤ/2", "It depends on the resolution"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using the resolution 0 → ℤ → ℤ → ℤ/m → 0, with first map multiplication by m, prove that Tor₁(ℤ/m, N) is the kernel of multiplication by m on N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Deletes ℤ/m and tensors 0 → ℤ → ℤ → 0 with N, using ℤ ⊗ N ≅ N.",
          "Identifies the induced map N → N as multiplication by m.",
          "Reads off Tor₁ as the homology at the left-hand term: the kernel of that map.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How many inequivalent extensions of ℤ/3 by ℤ/3 are there, and which groups occur as the middle term?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes Ext¹(ℤ/3, ℤ/3) ≅ ℤ/3, so three classes.",
          "Notes the middle term is ℤ/3 ⊕ ℤ/3 for the split class and ℤ/9 for the other two, which differ by an automorphism.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From modules we return to fields. A field such as ℂ is enormous over ℚ, yet one can still ask how many independent
        transcendental numbers it takes to build it, and the answer behaves like the dimension of a vector space.
      </p>
      <p>
        Next, transcendence degree: algebraic independence, transcendence bases, the exchange lemma, and the dimension of a
        variety.
      </p>
    </>
  ),
};
