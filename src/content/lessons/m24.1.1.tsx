import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DivisorFunctorViz } from "@/components/viz/DivisorFunctorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.1.1",
  minutes: 85,
  links: {
    revisits: ["m7.2.4", "m14.3.3", "m8.1.5"],
    foreshadows: ["m24.1.2", "m24.1.3", "m39.1.2"],
  },

  puzzle: (
    <>
      <p>
        Groups have homomorphisms, rings have ring homomorphisms, vector spaces have linear maps, topological spaces have
        continuous maps. In each case the maps compose, and there are identity maps. Many theorems look alike across these
        subjects. Is there one language in which they are literally the same theorem?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick two divisors of 12, look for an arrow between them, and see where gcd(·, 6) sends it.</p>
      <DivisorFunctorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="categories">
        <p>
          A <strong>category</strong> <M>{"\\mathcal{C}"}</M> has objects; for each pair of objects <M>A</M>, <M>B</M> a
          set <M>{"\\mathrm{Hom}(A, B)"}</M> of arrows, or morphisms; a composition{" "}
          <M>{"g \\circ f : A \\to C"}</M> of <M>{"f : A \\to B"}</M> and <M>{"g : B \\to C"}</M>; and identities{" "}
          <M>{"1_A"}</M>, such that composition is associative and the identities are units:
        </p>
        <MD>{"h \\circ (g \\circ f) = (h \\circ g) \\circ f, \\qquad f \\circ 1_A = f = 1_B \\circ f."}</MD>
      </Definition>

      <Example title="examples">
        <p>
          <strong>Set</strong>, <strong>Grp</strong>, <strong>Ab</strong>, <strong>Ring</strong>, <M>{"R"}</M>-modules,
          vector spaces over <M>k</M>, topological spaces. Less obviously: a partially ordered set, with one arrow{" "}
          <M>{"a \\to b"}</M> exactly when <M>{"a \\le b"}</M>; and a group <M>G</M>, as a category with one object whose
          arrows are the elements of <M>G</M>. An isomorphism is an arrow with a two-sided inverse.
        </p>
      </Example>

      <Definition title="functors">
        <p>
          A <strong>functor</strong> <M>{"F : \\mathcal{C} \\to \\mathcal{D}"}</M> sends objects to objects and arrows{" "}
          <M>{"f : A \\to B"}</M> to arrows <M>{"Ff : FA \\to FB"}</M>, preserving composition and identities. A{" "}
          <strong>contravariant</strong> functor reverses arrows: <M>{"Ff : FB \\to FA"}</M>.
        </p>
      </Definition>

      <Remark title="functors you know">
        <p>
          The <strong>forgetful</strong> functor <strong>Grp</strong> → <strong>Set</strong> keeps the underlying set. The
          dual space <M>{"V \\mapsto V^*"}</M>, with <M>{"f \\mapsto f^*"}</M>, is contravariant. Abelianisation{" "}
          <M>{"G \\mapsto G/[G, G]"}</M> is a functor <strong>Grp</strong> → <strong>Ab</strong>. The Galois correspondence
          is a pair of order-reversing maps between subgroups and intermediate fields: contravariant functors between posets.
          Eilenberg and Mac Lane introduced these notions in 1945 to say what &lsquo;natural&rsquo; means.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which of these is not part of the definition of a category?</p>,
      answer: { kind: "choice", options: ["Every arrow has an inverse", "Composition is associative", "Each object has an identity arrow", "Identities are units for composition"], correct: [0] },
    },
    {
      key: "functor",
      rung: "check",
      prompt: <p>What must a functor preserve?</p>,
      answer: { kind: "choice", options: ["Composition and identities", "The number of objects", "Inverses only", "Products only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does the functor send the object 4?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "group",
      rung: "apply",
      prompt: <p>A group G is viewed as a category with one object. What is a functor between two such categories?</p>,
      answer: { kind: "choice", options: ["A group homomorphism", "A bijection of sets", "A subgroup", "A normal subgroup"], correct: [0] },
    },
    {
      key: "contra",
      rung: "apply",
      prompt: <p>Which of these is a contravariant functor?</p>,
      answer: { kind: "choice", options: ["The dual space, V to V* and f to f*", "The forgetful functor from groups to sets", "Abelianisation", "The identity functor"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a functor sends isomorphisms to isomorphisms.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes f : A → B with inverse g, so g ∘ f is the identity on A and f ∘ g the identity on B.",
          "Applies F: F(g) ∘ F(f) = F(g ∘ f) = F(identity on A), which is the identity on FA, and similarly the other way.",
          "Concludes F(g) is an inverse of F(f).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is there a functor from groups to sets sending each group G to its set of elements of order 2? What would it do to homomorphisms?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a homomorphism can send an element of order 2 to the identity, so the image need not have order 2.",
          "Concludes the naive assignment is not a functor, or repairs it, for example with elements x satisfying x² = 1, which are preserved.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In category theory you may not look inside objects; you only see arrows. So how can you say what a product is, or a
        free group, or a quotient? By how it relates to every other object.
      </p>
      <p>
        Next, universal properties: products and coproducts, free objects, quotients, and why an object defined by a
        universal property is unique up to unique isomorphism.
      </p>
    </>
  ),
};
