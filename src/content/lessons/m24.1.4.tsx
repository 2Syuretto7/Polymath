import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { FloorAdjointViz } from "@/components/viz/FloorAdjointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.1.4",
  minutes: 90,
  links: {
    revisits: ["m24.1.3", "m24.1.2", "m14.5.2"],
    foreshadows: ["m24.2.2", "m24.4.3", "m39.3.1"],
  },

  puzzle: (
    <>
      <p>
        A homomorphism from the free group on a set S to a group G is determined by where it sends the elements of S, and any
        choice will do. A linear map from a vector space with basis S is likewise determined by the images of the basis. And
        the integer part of a real number x is the largest integer below it. What do these three facts have in common?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move x and n, and compare an inequality in ℝ with one in ℤ.</p>
      <FloorAdjointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="adjunctions">
        <p>
          Functors <M>{"F : \\mathcal{C} \\to \\mathcal{D}"}</M> and <M>{"G : \\mathcal{D} \\to \\mathcal{C}"}</M> are{" "}
          <strong>adjoint</strong>, <M>{"F \\dashv G"}</M>, with <M>F</M> the left adjoint, if there are bijections
        </p>
        <MD>{"\\mathrm{Hom}_{\\mathcal{D}}(FA, B) \\cong \\mathrm{Hom}_{\\mathcal{C}}(A, GB),"}</MD>
        <p>
          natural in <M>A</M> and <M>B</M>. Taking <M>{"B = FA"}</M> and the identity gives the <strong>unit</strong>{" "}
          <M>{"\\eta_A : A \\to GFA"}</M>; dually there is a <strong>counit</strong> <M>{"\\varepsilon_B : FGB \\to B"}</M>.
        </p>
      </Definition>

      <Example title="free and forgetful">
        <p>
          The free group functor <strong>Set</strong> → <strong>Grp</strong> is left adjoint to the forgetful functor:
          homomorphisms <M>{"F(S) \\to G"}</M> correspond to functions <M>{"S \\to G"}</M>, the unit sending each element of{" "}
          <M>S</M> to its generator. Likewise the free module <M>{"R^{(S)}"}</M>, the polynomial ring <M>{"\\mathbb{Z}[x_s]"}</M>,
          and abelianisation, left adjoint to the inclusion <strong>Ab</strong> → <strong>Grp</strong>.
        </p>
      </Example>

      <Example title="more adjunctions">
        <p>
          In sets, functions <M>{"A \\times B \\to C"}</M> correspond to functions <M>{"A \\to C^B"}</M>: currying, so{" "}
          <M>{"- \\times B \\dashv (-)^B"}</M>. For <M>R</M>-modules, <M>{"- \\otimes_R N \\dashv \\mathrm{Hom}_R(N, -)"}</M>.
          The diagonal <M>{"A \\mapsto (A, A)"}</M> is left adjoint to the product. Between ordered sets, an adjunction is a
          Galois connection, such as ceiling ⊣ inclusion ⊣ floor.
        </p>
      </Example>

      <Theorem title="adjoints preserve limits">
        <p>
          A right adjoint preserves all limits that exist, such as products and kernels, and a left adjoint preserves all
          colimits, such as coproducts and cokernels. This is why the free group on a disjoint union is a free product, and why
          tensor products are right exact. Adjoints are unique up to natural isomorphism when they exist.
        </p>
      </Theorem>

      <Remark title="everywhere">
        <p>
          Daniel Kan introduced adjoint functors in 1958. Mac Lane&rsquo;s slogan is that adjoint functors arise everywhere:
          universal properties, free constructions, completions, quantifiers in logic (existential quantification is left
          adjoint to substitution) are all adjunctions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for F to be left adjoint to G?</p>,
      answer: { kind: "choice", options: ["Arrows FA → B correspond naturally to arrows A → GB", "F and G are inverse functors", "F ∘ G is the identity", "F preserves all limits"], correct: [0] },
    },
    {
      key: "free",
      rung: "check",
      prompt: <p>Which functor is left adjoint to the forgetful functor from groups to sets?</p>,
      answer: { kind: "choice", options: ["The free group functor", "Abelianisation", "The trivial group functor", "The power set functor"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with x = 2.7, what is the largest integer n with n ≤ x?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "curry",
      rung: "apply",
      prompt: <p>Which adjunction does currying express?</p>,
      answer: { kind: "choice", options: ["Product with B is left adjoint to functions from B", "Free is left adjoint to forgetful", "Floor is left adjoint to inclusion", "Hom is left adjoint to tensor"], correct: [0] },
    },
    {
      key: "pres",
      rung: "apply",
      prompt: <p>The forgetful functor from groups to sets is a right adjoint. What must it preserve?</p>,
      answer: { kind: "choice", options: ["Limits, such as products", "Coproducts", "Free products", "Quotients"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for every integer n and real x, n ≤ x exactly when n ≤ floor(x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls floor(x) is the largest integer at most x, so floor(x) ≤ x.",
          "If n ≤ floor(x), then n ≤ x by transitivity.",
          "If n ≤ x, then n is an integer at most x, so n ≤ floor(x) by maximality.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the inclusion of ℤ into ℝ has no left adjoint and right adjoint other than ceiling and floor, by using uniqueness of adjoints or a direct argument.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes R is a right adjoint, so n ≤ x exactly when n ≤ R(x) for all integers n.",
          "Takes n = R(x) to get R(x) ≤ x, and any integer n ≤ x satisfies n ≤ R(x), so R(x) = floor(x); similarly for the left adjoint.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From categories in general, the course turns to commutative rings, where algebra meets geometry. The first question
        is which ideals behave like points.
      </p>
      <p>
        Next, prime and maximal ideals: their existence by Zorn&rsquo;s lemma, the spectrum of a ring, how ring maps pull
        primes back, and the nilradical as the intersection of all primes.
      </p>
    </>
  ),
};
