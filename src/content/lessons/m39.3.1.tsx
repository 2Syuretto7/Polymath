import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FreeExtensionViz } from "@/components/viz/FreeExtensionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.3.1",
  minutes: 90,
  links: {
    revisits: ["m39.2.3", "m39.1.2", "m24.1.4"],
    foreshadows: ["m39.3.2", "m39.3.3", "m39.4.3"],
  },

  puzzle: (
    <>
      <p>
        To give a linear map out of a vector space with basis S, you only need to say where each basis vector goes, and any
        choice will do. To give a function of two variables is to give, for each value of the first, a function of the
        second. These are two instances of one pattern. What is it, and why does it force so much else?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose where the generators go, and see the whole linear map they determine.</p>
      <FreeExtensionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="adjunctions">
        <p>
          Functors F : C → D and G : D → C are <strong>adjoint</strong>, F left adjoint to G, written F ⊣ G, if there is a
          bijection <M>{"\\mathrm{Hom}_D(FX, Y) \\cong \\mathrm{Hom}_C(X, GY)"}</M> natural in X and Y. Equivalently there
          are natural transformations, the <strong>unit</strong> <M>{"\\eta : 1 \\Rightarrow GF"}</M> and the{" "}
          <strong>counit</strong> <M>{"\\varepsilon : FG \\Rightarrow 1"}</M>, satisfying the triangle identities{" "}
          <M>{"\\varepsilon F \\circ F\\eta = 1"}</M> and <M>{"G\\varepsilon \\circ \\eta G = 1"}</M>.
        </p>
      </Definition>

      <Example title="a gallery">
        <p>
          Free constructions are left adjoint to forgetful functors: free groups, free modules, polynomial rings. In sets,
          product with A is left adjoint to functions from A, since <M>{"\\mathrm{Hom}(X \\times A, Y) \\cong \\mathrm{Hom}(X, Y^A)"}</M>
          , which is currying. Abelianisation is left adjoint to the inclusion of abelian groups into groups, and the tensor
          product <M>{"- \\otimes_R M"}</M> is left adjoint to <M>{"\\mathrm{Hom}_R(M, -)"}</M>.
        </p>
      </Example>

      <Theorem title="adjoints and limits">
        <p>
          Right adjoints preserve all limits that exist, and left adjoints preserve all colimits. Adjoints are unique up to
          unique natural isomorphism. So the forgetful functor from groups to sets, which has a left adjoint, preserves
          products, while free groups, a left adjoint, turn disjoint unions into free products.
        </p>
      </Theorem>

      <Remark title="limits as adjoints">
        <p>
          Limits themselves are adjoints: the limit of diagrams of shape J is right adjoint to the diagonal functor C →{" "}
          <M>{"C^J"}</M>, and the colimit is left adjoint to it. Between posets, adjunctions are Galois connections, such as
          the inclusion of ℤ in ℝ with its adjoints floor and ceiling.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which natural bijection defines F as left adjoint to G?</p>,
      answer: { kind: "choice", options: ["Hom(FX, Y) ≅ Hom(X, GY)", "Hom(X, FY) ≅ Hom(GX, Y)", "FX ≅ GX", "Hom(FX, GY) ≅ Hom(X, Y)"], correct: [0] },
    },
    {
      key: "pres",
      rung: "check",
      prompt: <p>What do right adjoints preserve?</p>,
      answer: { kind: "choice", options: ["Limits", "Colimits", "Only coproducts", "Nothing in general"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with k = 2 and d = 2, how many linear maps are there?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0 },
    },
    {
      key: "curry",
      rung: "apply",
      prompt: <p>In sets, the functor X ↦ X × A is left adjoint to which functor?</p>,
      answer: { kind: "choice", options: ["Y ↦ the set of functions from A to Y", "Y ↦ Y × A", "Y ↦ the power set of Y", "Y ↦ Y + A"], correct: [0] },
    },
    {
      key: "noright",
      rung: "apply",
      prompt: <p>Why can the forgetful functor from groups to sets have no right adjoint?</p>,
      answer: { kind: "choice", options: ["It would preserve colimits, but it sends the initial trivial group to a one-point set, not the empty set", "It has no left adjoint", "Groups have no limits", "It is not faithful"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if F is left adjoint to G and D has a terminal object 1, then G1 is terminal in C.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the bijection Hom(X, G1) ≅ Hom(FX, 1).",
          "Notes the right side has exactly one element, since 1 is terminal.",
          "Concludes there is exactly one map from each X to G1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that two left adjoints of the same functor G are naturally isomorphic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Hom(FX, −) ≅ Hom(X, G−) ≅ Hom(F′X, −) naturally.",
          "Applies the Yoneda lemma to get FX ≅ F′X.",
          "Checks naturality in X. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A functor with a left adjoint must preserve limits. The converse is almost true, and the gap between almost and
        always is filled by a condition about size.
      </p>
      <p>Next, adjoint functor theorems.</p>
    </>
  ),
};
