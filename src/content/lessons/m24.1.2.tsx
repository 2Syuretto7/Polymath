import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { ProductConeViz } from "@/components/viz/ProductConeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.1.2",
  minutes: 85,
  links: {
    revisits: ["m24.1.1", "m7.2.5", "m14.5.2"],
    foreshadows: ["m24.1.4", "m24.2.2", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        The Cartesian product of two sets, the direct product of two groups, the product topology, and the greatest common
        divisor of two numbers. These look unrelated. But each comes with two maps or arrows out of it, and each is the best
        object of its kind. In what sense is it the best?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Find every divisor of 36 with arrows to both a and b, and the one they all pass through.</p>
      <ProductConeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="products and coproducts">
        <p>
          A <strong>product</strong> of <M>A</M> and <M>B</M> is an object <M>P</M> with arrows{" "}
          <M>{"p_1 : P \\to A"}</M>, <M>{"p_2 : P \\to B"}</M>, such that for any <M>X</M> with arrows{" "}
          <M>{"f : X \\to A"}</M>, <M>{"g : X \\to B"}</M> there is exactly one <M>{"u : X \\to P"}</M> with
        </p>
        <MD>{"p_1 \\circ u = f, \\qquad p_2 \\circ u = g."}</MD>
        <p>Reversing all arrows defines the <strong>coproduct</strong>.</p>
      </Definition>

      <Theorem title="uniqueness up to unique isomorphism">
        <p>
          If <M>P</M> and <M>{"P'"}</M> are both products of <M>A</M> and <M>B</M>, there is exactly one isomorphism{" "}
          <M>{"P \\to P'"}</M> compatible with the projections. Apply the property of <M>{"P'"}</M> to <M>P</M> and vice versa;
          the composites are maps <M>{"P \\to P"}</M> compatible with the projections, and so is <M>{"1_P"}</M>, so by
          uniqueness they are identities.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          Products: the Cartesian product in <strong>Set</strong>, the direct product in <strong>Grp</strong>, gcd in the
          divisibility order. Coproducts: disjoint union in <strong>Set</strong>, the direct sum in <strong>Ab</strong> and in
          vector spaces, the free product in <strong>Grp</strong>, lcm for divisibility. The quotient <M>{"G/N"}</M> is
          universal among homomorphisms killing <M>N</M>, which is the first isomorphism theorem in disguise. The free module
          on a set <M>S</M> is universal among maps from <M>S</M> into modules.
        </p>
      </Example>

      <Remark title="why bother">
        <p>
          A universal property says what an object does rather than what it is made of, and fixes it up to unique
          isomorphism. Constructions such as the tensor product, localisation and the field of fractions are clearest this
          way: build them once, however clumsily, and then use only the property. Many universal properties are special
          cases of adjunctions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the universal property of a product P of A and B require?</p>,
      answer: { kind: "choice", options: ["Each pair of arrows X → A, X → B factors through P by exactly one arrow", "P is the largest object", "P has exactly two elements", "Every arrow into A factors through B"], correct: [0] },
    },
    {
      key: "unique",
      rung: "check",
      prompt: <p>In what sense is a product unique?</p>,
      answer: { kind: "choice", options: ["Up to a unique isomorphism compatible with the projections", "It is literally one set", "Only up to bijection of sets", "It is not unique"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the product of 12 and 18?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "co",
      rung: "apply",
      prompt: <p>What is the coproduct of two sets?</p>,
      answer: { kind: "choice", options: ["Their disjoint union", "Their intersection", "Their Cartesian product", "Their power set"], correct: [0] },
    },
    {
      key: "grp",
      rung: "apply",
      prompt: <p>What is the coproduct in the category of groups?</p>,
      answer: { kind: "choice", options: ["The free product", "The direct product", "The intersection", "The quotient"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the Cartesian product A × B, with its two projections, is a product in the category of sets.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Given f : X → A and g : X → B, defines u(x) = (f(x), g(x)).",
          "Checks p₁ ∘ u = f and p₂ ∘ u = g.",
          "Shows uniqueness: any u′ with these properties has both coordinates of u′(x) forced, so u′ = u.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In the divisibility order on positive integers, why is gcd(a, b) the product of a and b?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an arrow c → a means c divides a, so gcd(a, b) has arrows to both a and b.",
          "Notes any common divisor c divides gcd(a, b), giving the factoring arrow, unique since a poset has at most one arrow.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Functors map objects to objects. But there are also maps between functors: ways of passing from one construction to
        another that behave well with every arrow at once.
      </p>
      <p>
        Next, natural transformations: the naturality square, why a vector space is naturally isomorphic to its double dual
        but not to its dual, and the determinant as a natural transformation.
      </p>
    </>
  ),
};
