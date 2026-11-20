import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SplitExtensionViz } from "@/components/viz/SplitExtensionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.4.2",
  minutes: 90,
  links: {
    revisits: ["m39.4.1", "m24.4.1", "m39.2.2"],
    foreshadows: ["m39.4.3", "m30.6.2", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        The snake lemma and the five lemma are proved by chasing elements around a diagram of modules. Sheaves of abelian
        groups do not have elements in the same way, yet the same lemmas are used for them every day. What structure on a
        category makes diagram chasing legitimate?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose m and n, and check whether the exact sequence 0 → ℤ/m → ℤ/mn → ℤ/n → 0 splits.</p>
      <SplitExtensionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="additive categories">
        <p>
          A category is <strong>additive</strong> if each Hom-set is an abelian group with composition bilinear, there is a
          zero object, and every pair of objects has a biproduct <M>{"A \\oplus B"}</M>, at once a product and a coproduct.
        </p>
      </Definition>

      <Definition title="abelian categories">
        <p>
          An additive category is <strong>abelian</strong> if every morphism has a kernel and a cokernel, every monomorphism
          is the kernel of some map, and every epimorphism is the cokernel of some map. Then every map factors as an
          epimorphism followed by a monomorphism through its image, and one can speak of <strong>exact sequences</strong>:
          the image of each map equals the kernel of the next.
        </p>
      </Definition>

      <Example title="examples and a non-example">
        <p>
          Modules over a ring, sheaves of abelian groups on a space, quasi-coherent sheaves on a scheme and representations of
          a group are abelian. Filtered vector spaces form an additive category that is not abelian: the identity map from a
          space with a filtration to the same space with strictly larger filtration steps is both mono and epi, but its
          inverse does not preserve the filtrations, so it is not an isomorphism.
        </p>
      </Example>

      <Theorem title="the Freyd-Mitchell embedding">
        <p>
          Every small abelian category has a fully faithful, exact functor into the category of modules over some ring. So any
          statement about a finite diagram being exact, provable by chasing elements in modules, holds in every abelian
          category: the snake lemma, the five lemma and the long exact sequences of derived functors.
        </p>
      </Theorem>

      <Remark title="extensions">
        <p>
          A short exact sequence <M>{"0 \\to A \\to E \\to B \\to 0"}</M> <strong>splits</strong> when E ≅ A ⊕ B compatibly.
          Equivalence classes of extensions of B by A form the group <M>{"\\mathrm{Ext}^1(B, A)"}</M>, with the split
          extension as zero. For abelian groups, <M>{"\\mathrm{Ext}^1(\\mathbb{Z}/n, \\mathbb{Z}/m) \\cong \\mathbb{Z}/\\gcd(m, n)"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What makes an additive category abelian?</p>,
      answer: { kind: "choice", options: ["Kernels and cokernels exist, and every mono is a kernel and every epi a cokernel", "Every object is a group", "Every morphism is invertible", "It has exactly one object"], correct: [0] },
    },
    {
      key: "fm",
      rung: "check",
      prompt: <p>What does the Freyd-Mitchell embedding theorem allow?</p>,
      answer: { kind: "choice", options: ["Diagram chases with elements, as if the objects were modules", "Every abelian category to be a category of sets", "Every exact sequence to split", "Kernels to be ignored"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with m = 2 and n = 2, does the sequence split?</p>,
      answer: { kind: "choice", options: ["No: ℤ/4 has an element of order 4, but ℤ/2 ⊕ ℤ/2 does not", "Yes: every exact sequence splits", "Yes: ℤ/4 ≅ ℤ/2 ⊕ ℤ/2", "The sequence is not exact"], correct: [0] },
    },
    {
      key: "ext",
      rung: "apply",
      prompt: <p>What is the order of Ext¹(ℤ/3, ℤ/2)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "non",
      rung: "apply",
      prompt: <p>Which of these is additive but not abelian?</p>,
      answer: { kind: "choice", options: ["Filtered vector spaces", "Modules over a ring", "Sheaves of abelian groups", "Finite abelian groups"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that 0 → ℤ/m → ℤ/mn → ℤ/n → 0, with multiplication by n and then reduction modulo n, is exact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows multiplication by n is injective: if na is a multiple of mn, then a is a multiple of m.",
          "Shows its image, the multiples of n, is exactly the kernel of reduction modulo n.",
          "Notes reduction modulo n is surjective.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the sequence splits when m and n are coprime.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the Chinese remainder theorem: ℤ/mn ≅ ℤ/m ⊕ ℤ/n.",
          "Checks the isomorphism is compatible with the maps in the sequence, or builds a section of the reduction map.",
          "Concludes the sequence splits. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sets, sheaves of sets and many other categories share a different structure: they behave like universes of sets,
        with their own internal logic. Such a category is a topos.
      </p>
      <p>Next, toposes, a first look.</p>
    </>
  ),
};
