import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SubsetClassifierViz } from "@/components/viz/SubsetClassifierViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.1.1",
  minutes: 90,
  links: {
    revisits: ["m24.1.1", "m24.1.3", "m24.1.2"],
    foreshadows: ["m39.1.2", "m39.2.1", "m39.3.1"],
  },

  puzzle: (
    <>
      <p>
        A subset of X is a choice, for each element, of in or out: that is, a function from X to {"{0, 1}"}. An element of X
        is a function from a one-point set to X. A pair of elements is a function from a two-point set. How many familiar
        constructions are secretly just &lsquo;maps from&rsquo; or &lsquo;maps into&rsquo; a single object?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set and a subset, and see the function to {"{0, 1}"} that it corresponds to.</p>
      <SubsetClassifierViz />
    </>
  ),

  theory: (
    <>
      <Definition title="hom functors">
        <p>
          In a locally small category C, each object A gives a covariant functor <M>{"\\mathrm{Hom}(A, -) : C \\to \\mathbf{Set}"}</M>,
          sending X to the set of morphisms A → X and a morphism f : X → Y to composition with f. Dually,{" "}
          <M>{"\\mathrm{Hom}(-, A)"}</M> is a contravariant functor, acting by composition on the other side.
        </p>
      </Definition>

      <Definition title="representable functors">
        <p>
          A functor F : C → <strong>Set</strong> is <strong>representable</strong> if it is naturally isomorphic to{" "}
          <M>{"\\mathrm{Hom}(A, -)"}</M> for some object A, which is said to <strong>represent</strong> F. A contravariant
          functor is representable if it is naturally isomorphic to some <M>{"\\mathrm{Hom}(-, A)"}</M>. A representing
          object, when it exists, is unique up to unique isomorphism.
        </p>
      </Definition>

      <Example title="representable functors everywhere">
        <p>
          The forgetful functor from groups to sets is represented by ℤ, since a homomorphism ℤ → G is the choice of one
          element. The forgetful functor from rings to sets is represented by ℤ[x]. The contravariant power set functor is
          represented by {"{0, 1}"}, and the functor sending a ring R to its units is represented by{" "}
          <M>{"\\mathbb{Z}[x, x^{-1}]"}</M>. The functor sending a pair of modules M, N to bilinear maps out of M × N is
          represented by the tensor product.
        </p>
      </Example>

      <Theorem title="universal properties are representability">
        <p>
          An object defined by a universal property represents a functor. The product A × B represents{" "}
          <M>{"X \\mapsto \\mathrm{Hom}(X, A) \\times \\mathrm{Hom}(X, B)"}</M>; a free group on a set S represents{" "}
          <M>{"G \\mapsto \\mathrm{Hom}_{\\mathbf{Set}}(S, G)"}</M>. Uniqueness up to unique isomorphism of objects with a
          universal property is then a single fact about representing objects.
        </p>
      </Theorem>

      <Remark title="not every functor">
        <p>
          The functor sending a group to the set of its elements of order dividing 2 is represented by ℤ/2. The covariant functor
          sending a set to its set of finite subsets is not representable: a represented functor turns products into
          products, but the finite subsets of a product are not pairs of finite subsets. In algebraic geometry, a moduli space is an object
          representing a functor that classifies some kind of geometric object.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a functor F : C → Set representable?</p>,
      answer: { kind: "choice", options: ["When it is naturally isomorphic to Hom(A, −) for some object A", "When it is faithful", "When it preserves all limits", "When C has one object"], correct: [0] },
    },
    {
      key: "grp",
      rung: "check",
      prompt: <p>Which group represents the forgetful functor from groups to sets?</p>,
      answer: { kind: "choice", options: ["ℤ", "The trivial group", "ℤ/2", "The free group on two generators"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with a 3-element set X, how many functions X → {"{0, 1}"} are there?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "units",
      rung: "apply",
      prompt: <p>Which ring represents the functor sending a commutative ring to its group of units?</p>,
      answer: { kind: "choice", options: ["ℤ[x, x⁻¹]", "ℤ[x]", "ℤ", "ℚ"], correct: [0] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Which group represents the functor sending a group G to its set of elements g with g² = 1?</p>,
      answer: { kind: "choice", options: ["ℤ/2", "ℤ", "ℤ/4", "The trivial group"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the contravariant power set functor is naturally isomorphic to Hom(−, {"{0, 1}"}).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines the bijection sending a subset S of X to its characteristic function, with inverse taking the preimage of 1.",
          "Checks naturality: for f : Y → X, the preimage of S under f corresponds to the composite of the characteristic function with f.",
          "Concludes the bijections form a natural isomorphism.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the product A × B represents the functor X ↦ Hom(X, A) × Hom(X, B).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sends a map X → A × B to its composites with the two projections.",
          "Uses the universal property of the product to see this is a bijection.",
          "Notes naturality in X. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If A represents F, then the identity map of A must correspond to some element of F(A). That one element turns out to
        determine everything, and the reason is the most-used lemma in category theory.
      </p>
      <p>Next, the Yoneda lemma.</p>
    </>
  ),
};
