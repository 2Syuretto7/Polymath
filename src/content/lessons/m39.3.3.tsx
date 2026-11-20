import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { KleisliWalkViz } from "@/components/viz/KleisliWalkViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.3.3",
  minutes: 90,
  links: {
    revisits: ["m39.3.1", "m39.1.2", "m24.1.3"],
    foreshadows: ["m39.4.1", "m39.4.3", "m39.4.2"],
  },

  puzzle: (
    <>
      <p>
        A step that may go left or right, applied three times from 0, can end at −3, −1, 1 or 3. Keep every path and you
        count 1, 3, 3, 1; keep only where you can be and you get a set of four. Both are ways of composing
        &lsquo;functions with side effects&rsquo;. What structure makes such composition possible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a monad and a number of steps, and compose the walk with itself.</p>
      <KleisliWalkViz />
    </>
  ),

  theory: (
    <>
      <Definition title="monads">
        <p>
          A <strong>monad</strong> on a category C is a functor T : C → C with natural transformations{" "}
          <M>{"\\eta : 1 \\Rightarrow T"}</M> and <M>{"\\mu : T^2 \\Rightarrow T"}</M> such that{" "}
          <M>{"\\mu \\circ T\\mu = \\mu \\circ \\mu T"}</M> and <M>{"\\mu \\circ T\\eta = \\mu \\circ \\eta T = 1"}</M>. It
          is a monoid in the category of endofunctors.
        </p>
      </Definition>

      <Theorem title="adjunctions give monads">
        <p>
          If F ⊣ G with unit η and counit ε, then T = GF is a monad with unit η and{" "}
          <M>{"\\mu = G\\varepsilon F"}</M>. Conversely every monad arises from adjunctions, in two extreme ways: the{" "}
          <strong>Kleisli category</strong>, whose maps X → Y are maps X → TY, and the{" "}
          <strong>Eilenberg-Moore category</strong> of algebras.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          The free monoid adjunction gives the <strong>list monad</strong>: η makes a one-letter list, μ concatenates a list of
          lists. The powerset monad has η(x) = {"{"}x{"}"} and μ taking unions. The maybe monad TX = X + 1 adds a failure
          value. Kleisli composition in the list monad keeps every path, which is why the counts are binomial.
        </p>
      </Example>

      <Definition title="algebras">
        <p>
          An <strong>algebra</strong> for T is an object A with a map a : TA → A satisfying{" "}
          <M>{"a \\circ \\eta_A = 1"}</M> and <M>{"a \\circ Ta = a \\circ \\mu_A"}</M>. Algebras for the list monad are
          monoids; for the free group monad, groups; for the powerset monad, complete join-semilattices. Beck&rsquo;s
          monadicity theorem says when a right adjoint makes D equivalent to the algebras of its monad.
        </p>
      </Definition>

      <Remark title="monads in programming">
        <p>
          Eugenio Moggi proposed monads in 1989 as a model of computational effects, and Philip Wadler brought them into
          functional programming. In Haskell, state, exceptions, input and output and nondeterminism are all monads, and
          Kleisli composition is how effectful functions are chained.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "data",
      rung: "check",
      prompt: <p>What data make up a monad on C?</p>,
      answer: { kind: "choice", options: ["An endofunctor T with natural transformations η : 1 ⇒ T and μ : T² ⇒ T", "A pair of adjoint functors only", "A single object of C", "A monoid in C"], correct: [0] },
    },
    {
      key: "alg",
      rung: "check",
      prompt: <p>What are the algebras for the list monad on sets?</p>,
      answer: { kind: "choice", options: ["Monoids", "Groups", "Rings", "Partial orders"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the list monad and 3 steps, how many times does 1 appear?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "set",
      rung: "apply",
      prompt: <p>With the powerset monad and 4 steps, how many values are reachable?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "adj",
      rung: "apply",
      prompt: <p>Which adjunction gives the list monad?</p>,
      answer: { kind: "choice", options: ["Free monoid, left adjoint to the forgetful functor from monoids to sets", "Free group and forgetful functor", "Product and exponential", "Abelianisation and inclusion"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For F ⊣ G, show that T = GF with μ = GεF satisfies the unit law μ ∘ Tη = 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes μ ∘ Tη = (Gε)F ∘ GFη = G(εF ∘ Fη).",
          "Uses the triangle identity εF ∘ Fη = 1.",
          "Concludes the composite is G(1) = 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that algebras for the maybe monad TX = X + 1 on sets are pointed sets.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an algebra is a map a : X + 1 → X with a ∘ η = 1, so a is the identity on X.",
          "Notes a is determined by where it sends the extra point, a chosen basepoint.",
          "Checks the associativity law holds automatically. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A monad is a monoid in a category with a tensor, composition of endofunctors. Many categories carry such a tensor:
        vector spaces, sets with product, modules. Making that structure explicit is the next step.
      </p>
      <p>Next, monoidal categories.</p>
    </>
  ),
};
