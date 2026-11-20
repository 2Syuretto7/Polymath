import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BracketingViz } from "@/components/viz/BracketingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.4.1",
  minutes: 90,
  links: {
    revisits: ["m39.3.3", "m39.2.1", "m24.4.3"],
    foreshadows: ["m39.4.2", "m39.4.3", "m30.6.2"],
  },

  puzzle: (
    <>
      <p>
        For vector spaces, (U ⊗ V) ⊗ W and U ⊗ (V ⊗ W) are not literally the same space, only canonically isomorphic. With
        four or five factors there are many bracketings and many ways to pass between them. Could two different routes give
        different isomorphisms, and what would it take to rule that out once and for all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a number of objects, and see how many bracketings the associators must connect.</p>
      <BracketingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="monoidal categories">
        <p>
          A <strong>monoidal category</strong> is a category C with a functor <M>{"\\otimes : C \\times C \\to C"}</M>, a unit
          object I, and natural isomorphisms{" "}
          <M>{"\\alpha : (A \\otimes B) \\otimes C \\cong A \\otimes (B \\otimes C)"}</M>,{" "}
          <M>{"\\lambda : I \\otimes A \\cong A"}</M> and <M>{"\\rho : A \\otimes I \\cong A"}</M>, such that the pentagon
          for four objects and a triangle relating α, λ and ρ commute. It is <strong>symmetric</strong> if there are
          coherent isomorphisms <M>{"A \\otimes B \\cong B \\otimes A"}</M> squaring to the identity.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          Sets with cartesian product and a one-point set; vector spaces with tensor product and the field; abelian groups
          with ⊗ and ℤ; endofunctors of a category with composition and the identity functor; cobordisms between manifolds
          with disjoint union. Only the last two are not symmetric in general: composing functors depends on the order.
        </p>
      </Example>

      <Theorem title="coherence">
        <p>
          Mac Lane proved in 1963 that if the pentagon and triangle commute, then every diagram built from α, λ and ρ
          commutes. Equivalently, every monoidal category is monoidally equivalent to a <strong>strict</strong> one, where
          the associators and unitors are identities. So brackets may be dropped.
        </p>
      </Theorem>

      <Definition title="monoids in a monoidal category">
        <p>
          A <strong>monoid</strong> in C is an object M with maps <M>{"\\mu : M \\otimes M \\to M"}</M> and{" "}
          <M>{"\\eta : I \\to M"}</M> satisfying associativity and unit laws. Monoids in sets are ordinary monoids, in
          abelian groups they are rings, in vector spaces algebras, and in endofunctors they are monads.
        </p>
      </Definition>

      <Remark title="pictures and physics">
        <p>
          Morphisms in monoidal categories can be drawn as string diagrams, where ⊗ is placing side by side and composition
          is stacking; coherence makes the pictures rigorous. A topological quantum field theory, in Atiyah&rsquo;s
          axioms, is a symmetric monoidal functor from cobordisms to vector spaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "alpha",
      rung: "check",
      prompt: <p>What does the associator α do in a monoidal category?</p>,
      answer: { kind: "choice", options: ["It is a natural isomorphism between (A ⊗ B) ⊗ C and A ⊗ (B ⊗ C)", "It swaps A and B", "It removes the unit object", "It is the identity in every case"], correct: [0] },
    },
    {
      key: "ring",
      rung: "check",
      prompt: <p>What is a monoid in abelian groups with the tensor product?</p>,
      answer: { kind: "choice", options: ["A ring", "A group", "A field", "A module"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many bracketings of four objects form the pentagon?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>How many ways are there to bracket a product of five objects?</p>,
      answer: { kind: "numeric", value: 14, tolerance: 0 },
    },
    {
      key: "monad",
      rung: "apply",
      prompt: <p>In which monoidal category are monads the monoids?</p>,
      answer: { kind: "choice", options: ["Endofunctors of a category, with composition", "Sets with cartesian product", "Vector spaces with direct sum", "Abelian groups with tensor product"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a monoid in sets with cartesian product is an ordinary monoid.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the data are a function μ : M × M → M and a function from a one-point set to M, picking an element e.",
          "Translates the associativity diagram into (ab)c = a(bc).",
          "Translates the unit diagrams into ea = a = ae.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the category of vector spaces with tensor product not strict, and why does it not matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes (U ⊗ V) ⊗ W and U ⊗ (V ⊗ W) are different spaces, only canonically isomorphic.",
          "Cites coherence, or the equivalence with a strict monoidal category.",
          "Concludes that brackets can be ignored in practice. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Modules, sheaves of abelian groups and quasi-coherent sheaves share one feature that sets or rings lack: maps can be
        added, and every map has a kernel and a cokernel. Axiomatising that is what makes homological algebra portable.
      </p>
      <p>Next, abelian categories.</p>
    </>
  ),
};
