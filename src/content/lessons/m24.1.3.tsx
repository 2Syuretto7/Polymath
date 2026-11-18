import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { NaturalSquareViz } from "@/components/viz/NaturalSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.1.3",
  minutes: 85,
  links: {
    revisits: ["m24.1.2", "m8.1.5", "m3.6.1"],
    foreshadows: ["m24.1.4", "m39.1.2", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        A finite-dimensional vector space V is isomorphic to its dual V*: both have the same dimension. It is also
        isomorphic to its double dual V**. Yet mathematicians call only the second &lsquo;natural&rsquo;. What could that
        mean, when both are isomorphisms?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Push a vector around two squares, for three different linear maps, and see which square always closes.</p>
      <NaturalSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="natural transformations">
        <p>
          Given functors <M>{"F, G : \\mathcal{C} \\to \\mathcal{D}"}</M>, a <strong>natural transformation</strong>{" "}
          <M>{"\\eta : F \\Rightarrow G"}</M> assigns to each object <M>A</M> an arrow{" "}
          <M>{"\\eta_A : FA \\to GA"}</M> such that for every <M>{"f : A \\to B"}</M> the square commutes:
        </p>
        <MD>{"\\eta_B \\circ Ff = Gf \\circ \\eta_A."}</MD>
        <p>
          If every <M>{"\\eta_A"}</M> is an isomorphism, <M>{"\\eta"}</M> is a <strong>natural isomorphism</strong>.
        </p>
      </Definition>

      <Example title="the double dual">
        <p>
          For vector spaces, <M>{"\\mathrm{ev}_V : V \\to V^{**}"}</M>, <M>{"\\mathrm{ev}_V(v)(\\varphi) = \\varphi(v)"}</M>,
          is natural: for <M>{"f : V \\to W"}</M>, both paths send <M>v</M> to <M>{"\\varphi \\mapsto \\varphi(fv)"}</M>. On
          finite-dimensional spaces it is a natural isomorphism. An isomorphism <M>{"V \\to V^*"}</M> needs a choice, such as
          a basis or an inner product, and no choice can be made for all spaces compatibly with all linear maps: the dual is
          contravariant, and the square fails already for scaling by 2.
        </p>
      </Example>

      <Example title="the determinant">
        <p>
          For commutative rings <M>R</M>, <M>{"\\det : GL_n(R) \\to R^\\times"}</M> is a natural transformation between two
          functors from commutative rings to groups: a ring homomorphism <M>{"\\phi : R \\to S"}</M> applied to the entries
          of a matrix and then taking the determinant gives the same as taking the determinant and then applying{" "}
          <M>{"\\phi"}</M>, because the determinant is a polynomial in the entries.
        </p>
      </Example>

      <Remark title="why it mattered">
        <p>
          Eilenberg and Mac Lane wrote that they defined categories in order to define functors, and functors in order to
          define natural transformations. Naturality is what makes a construction canonical, and in algebraic topology it
          made precise how homology groups depend on spaces. The Yoneda lemma, in a later course, describes all natural
          transformations out of a representable functor.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What condition must the components of a natural transformation η : F ⇒ G satisfy?</p>,
      answer: { kind: "choice", options: ["For every arrow f : A → B, the component at B after F(f) equals G(f) after the component at A", "Each component is an isomorphism", "F = G", "Each component is an identity"], correct: [0] },
    },
    {
      key: "dd",
      rung: "check",
      prompt: <p>Why is V ≅ V** called natural?</p>,
      answer: { kind: "choice", options: ["Evaluation needs no choices and commutes with every linear map", "Because the dimensions agree", "Because V** is smaller", "Because it uses a basis"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with f = scaling by 2, what is ⟨fv, fw⟩?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>In the visualisation, for which f does the basis square commute?</p>,
      answer: { kind: "choice", options: ["Rotation by 90°", "Scaling by 2", "The shear", "All three"], correct: [0] },
    },
    {
      key: "det",
      rung: "apply",
      prompt: <p>Why does the determinant commute with ring homomorphisms applied to matrix entries?</p>,
      answer: { kind: "choice", options: ["It is a polynomial in the entries with integer coefficients", "Determinants are always 1", "Ring homomorphisms are injective", "Matrices commute"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that evaluation ev : V → V** is natural: for f : V → W, show f** ∘ ev = ev ∘ f, with ev on V on the left and on W on the right.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls f**(θ) = θ ∘ f* for θ in V**, where f*(ψ) = ψ ∘ f for ψ in W*.",
          "Computes f**(ev(v))(ψ) = ev(v)(ψ ∘ f) = ψ(f(v)).",
          "Computes ev(f(v))(ψ) = ψ(f(v)), so the two agree for every v and ψ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The abelianisation maps G → G/[G, G] form a natural transformation from the identity functor on groups. Into which functor, and why does the square commute?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names the target: abelianisation, viewed as a functor from groups to groups.",
          "Notes a homomorphism f maps commutators to commutators, so it induces a map on the quotients.",
          "Checks that quotienting then applying the induced map equals applying f then quotienting. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Free groups and forgetful functors go in opposite directions, and maps out of a free group correspond exactly to
        maps of sets into the underlying set. This pairing of functors appears everywhere.
      </p>
      <p>
        Next, adjunctions: left and right adjoints, the unit and counit, examples from free constructions, products and
        tensor-hom, and why left adjoints preserve colimits.
      </p>
    </>
  ),
};
