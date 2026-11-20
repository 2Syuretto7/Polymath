import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { YonedaActionViz } from "@/components/viz/YonedaActionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.1.2",
  minutes: 90,
  links: {
    revisits: ["m39.1.1", "m24.1.3", "m24.1.2"],
    foreshadows: ["m39.2.1", "m39.3.1", "m39.4.3"],
  },

  puzzle: (
    <>
      <p>
        The cyclic group of order 6 acts on itself by addition, and on the three vertices of a triangle by rotation. How many
        maps from the group to the triangle respect both actions? Once you decide where 0 goes, is there any freedom left?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set with a rotation action and where 0 should go, and see the whole equivariant map that this forces.</p>
      <YonedaActionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Yoneda lemma">
        <p>
          For a locally small category C, an object A and a functor F : C → <strong>Set</strong>, the map{" "}
          <M>{"\\mathrm{Nat}(\\mathrm{Hom}(A, -), F) \\to F(A)"}</M>, <M>{"\\alpha \\mapsto \\alpha_A(\\mathrm{id}_A)"}</M>, is
          a bijection, natural in A and in F. Its inverse sends x in F(A) to the transformation whose component at X sends
          f : A → X to F(f)(x).
        </p>
      </Theorem>

      <Definition title="the Yoneda embedding">
        <p>
          Taking F = Hom(B, −) gives <M>{"\\mathrm{Nat}(\\mathrm{Hom}(A, -), \\mathrm{Hom}(B, -)) \\cong \\mathrm{Hom}(B, A)"}</M>.
          So the contravariant functor <M>{"A \\mapsto \\mathrm{Hom}(A, -)"}</M> is fully faithful: C embeds in a category of
          functors. In particular, A ≅ B exactly when Hom(A, −) ≅ Hom(B, −). An object is determined by the maps out of it,
          and equally by the maps into it.
        </p>
      </Definition>

      <Example title="groups as one-object categories">
        <p>
          A group G is a category with one object whose morphisms are the elements of G. A functor to sets is a set X with a
          G-action, and the represented functor is G acting on itself by multiplication. The Yoneda lemma says that
          G-equivariant maps G → X correspond to elements of X, by sending g to g · x. Cayley&rsquo;s theorem, that every
          group embeds in a permutation group, is the Yoneda embedding for this category.
        </p>
      </Example>

      <Remark title="how it is used">
        <p>
          To prove two constructions are isomorphic, show they represent the same functor; to build a map between them, build
          a natural map between the functors. For instance,{" "}
          <M>{"\\mathrm{Hom}(A \\otimes B, C) \\cong \\mathrm{Hom}(A, \\mathrm{Hom}(B, C))"}</M> naturally in C gives
          associativity of tensor products by a chain of such isomorphisms. In algebraic geometry, the Yoneda lemma licenses
          treating a scheme as the functor of its points.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lemma",
      rung: "check",
      prompt: <p>Natural transformations Hom(A, −) ⇒ F correspond to what?</p>,
      answer: { kind: "choice", options: ["Elements of F(A)", "Morphisms A → A", "Elements of F of every object", "Functors from C to Set"], correct: [0] },
    },
    {
      key: "image",
      rung: "check",
      prompt: <p>Which element of F(A) corresponds to a natural transformation α?</p>,
      answer: { kind: "choice", options: ["α at A applied to the identity of A", "α at A applied to any morphism", "The empty set", "F applied to the identity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose X with 3 points. How many equivariant maps from ℤ/6 to X are there?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "cayley",
      rung: "apply",
      prompt: <p>Which classical theorem is the Yoneda embedding for a group viewed as a one-object category?</p>,
      answer: { kind: "choice", options: ["Cayley’s theorem", "Lagrange’s theorem", "Sylow’s theorem", "The first isomorphism theorem"], correct: [0] },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: <p>If Hom(A, −) and Hom(B, −) are naturally isomorphic, what follows?</p>,
      answer: { kind: "choice", options: ["A and B are isomorphic", "A and B are equal", "Nothing", "A is initial"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a natural transformation α : Hom(A, −) ⇒ F is determined by x = α at A applied to the identity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes any f : A → X and writes naturality for f as α at X composed with Hom(A, f) equals F(f) composed with α at A.",
          "Applies both sides to the identity of A, getting α at X of f equal to F(f)(x).",
          "Concludes every component of α is fixed by x.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the Yoneda lemma to find all natural transformations from the forgetful functor on groups to itself.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the forgetful functor is represented by ℤ, so the transformations correspond to elements of the underlying set of ℤ.",
          "Identifies them as g ↦ gⁿ for each integer n.",
          "Concludes. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Products, kernels, pullbacks and inverse limits look different, but each is the universal way to map into a diagram
        of objects. Category theory gives them one name and one definition.
      </p>
      <p>Next, limits.</p>
    </>
  ),
};
