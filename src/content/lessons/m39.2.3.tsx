import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ForgetfulPreserveViz } from "@/components/viz/ForgetfulPreserveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.2.3",
  minutes: 90,
  links: {
    revisits: ["m39.2.2", "m39.2.1", "m24.1.4"],
    foreshadows: ["m39.3.1", "m39.3.2", "m39.4.2"],
  },

  puzzle: (
    <>
      <p>
        ℤ/2 × ℤ/2 has four elements as a group and as a set. But the coproduct of ℤ/2 and ℤ/2 in groups is infinite, while
        in sets it has four elements and in abelian groups it has four elements arranged differently. Why do products behave
        so well under forgetting structure, and coproducts so badly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the orders of two cyclic groups, and compare products and coproducts in three categories.</p>
      <ForgetfulPreserveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="preservation, reflection and creation">
        <p>
          A functor F <strong>preserves</strong> limits of shape J if it sends every limit cone over a diagram D to a limit
          cone over F ∘ D. It <strong>reflects</strong> them if a cone whose image is a limit is itself a limit. It{" "}
          <strong>creates</strong> them if every limit of F ∘ D lifts to a unique cone over D, which is then a limit.
        </p>
      </Definition>

      <Theorem title="representables and right adjoints preserve limits">
        <p>
          For every object A, <M>{"\\mathrm{Hom}(A, -)"}</M> preserves all limits that exist: this is the definition of a
          limit in disguise. Consequently every <strong>right adjoint</strong> preserves limits and every left adjoint
          preserves colimits. The forgetful functor from groups to sets is right adjoint to the free group functor, and is
          represented by ℤ, so it preserves products, equalisers and pullbacks.
        </p>
      </Theorem>

      <Example title="algebra creates limits">
        <p>
          The forgetful functor from groups, rings or modules to sets creates limits: the product of the underlying sets
          carries a unique group structure making the projections homomorphisms, and that is the product of groups. It does
          not preserve coproducts: the free product ℤ/2 ∗ ℤ/2 is the infinite dihedral group. The forgetful functor from
          topological spaces to sets preserves both limits and colimits, but creates neither, since many topologies sit on
          one set.
        </p>
      </Example>

      <Remark title="a quick test for adjoints">
        <p>
          If a functor fails to preserve some limit, it cannot be a right adjoint. The forgetful functor from fields to sets
          does not preserve products, since fields have no products in general, and indeed it has no left adjoint: there is
          no free field on a set. Preservation is thus both a consequence of adjointness and, under size conditions, a
          criterion for it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pres",
      rung: "check",
      prompt: <p>What does it mean for F to preserve a limit?</p>,
      answer: { kind: "choice", options: ["F sends a limit cone to a limit cone of the image diagram", "F is faithful", "F sends every object to a limit", "F reverses arrows"], correct: [0] },
    },
    {
      key: "right",
      rung: "check",
      prompt: <p>Which functors always preserve limits?</p>,
      answer: { kind: "choice", options: ["Right adjoints", "Left adjoints", "All functors", "Only identity functors"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set m = 2 and n = 3. How many elements does the coproduct have in abelian groups?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "dihedral",
      rung: "apply",
      prompt: <p>What is the free product ℤ/2 ∗ ℤ/2?</p>,
      answer: { kind: "choice", options: ["The infinite dihedral group", "ℤ/4", "ℤ/2 × ℤ/2", "The trivial group"], correct: [0] },
    },
    {
      key: "top",
      rung: "apply",
      prompt: <p>Why does the forgetful functor from topological spaces to sets not create limits?</p>,
      answer: { kind: "choice", options: ["Many topologies sit on one set, so a lift is not unique", "It does not preserve limits", "Spaces have no products", "It is not a functor"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Hom(A, −) preserves products.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a product P of objects Xᵢ with projections pᵢ.",
          "Uses the universal property: maps A → P correspond bijectively to families of maps A → Xᵢ, by composing with the pᵢ.",
          "Concludes Hom(A, P) with the maps Hom(A, pᵢ) is a product of the sets Hom(A, Xᵢ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the forgetful functor from groups to sets have no right adjoint?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a left adjoint must preserve colimits.",
          "Uses the coproduct of ℤ/2 and ℤ/2, whose underlying set is not the disjoint union.",
          "Concludes the forgetful functor is not a left adjoint. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Free groups, tensor products, abelianisation, Stone-Čech compactification and sheafification are all left adjoints.
        One definition explains why each is &lsquo;the best approximation&rsquo; of its kind.
      </p>
      <p>Next, adjoint functors.</p>
    </>
  ),
};
