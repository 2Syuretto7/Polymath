import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PullbackSetViz } from "@/components/viz/PullbackSetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.2.1",
  minutes: 90,
  links: {
    revisits: ["m39.1.2", "m39.1.1", "m24.1.2"],
    foreshadows: ["m39.2.2", "m39.2.3", "m39.3.1"],
  },

  puzzle: (
    <>
      <p>
        The product of two sets, the kernel of a homomorphism, the intersection of two subspaces, the p-adic integers as a
        limit of ℤ/pⁿ: these come from different corners of mathematics. Is there a single recipe of which they are all
        instances?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map g, and see which pairs of the product make up the pullback.</p>
      <PullbackSetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="diagrams and cones">
        <p>
          A <strong>diagram</strong> of shape J in C is a functor D : J → C. A <strong>cone</strong> over D is an object L
          with morphisms <M>{"\\lambda_j : L \\to D(j)"}</M> such that <M>{"D(u) \\circ \\lambda_j = \\lambda_k"}</M> for
          every arrow u : j → k of J. A <strong>limit</strong> of D is a universal cone: every other cone factors through it
          by a unique morphism. Limits are unique up to unique isomorphism.
        </p>
      </Definition>

      <Example title="the basic limits">
        <p>
          With J discrete, the limit is a <strong>product</strong>. With J = two parallel arrows, it is an{" "}
          <strong>equaliser</strong>, such as the kernel {"{x : f(x) = g(x)}"}. With J = · → · ← ·, it is a{" "}
          <strong>pullback</strong> <M>{"A \\times_C B"}</M>. With J empty, it is a <strong>terminal object</strong>. With J
          the natural numbers ordered backwards, it is an inverse limit, such as{" "}
          <M>{"\\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n"}</M>.
        </p>
      </Example>

      <Theorem title="limits in Set, and from products and equalisers">
        <p>
          In <strong>Set</strong>, the limit of D is the set of families <M>{"(x_j)"}</M> with <M>{"x_j \\in D(j)"}</M> and{" "}
          <M>{"D(u)(x_j) = x_k"}</M> for every arrow u. In any category, if all products and equalisers exist then all limits
          do: the limit of D is the equaliser of two maps between products. So a category with these has all small limits,
          and is called <strong>complete</strong>.
        </p>
      </Theorem>

      <Remark title="limits as representing objects">
        <p>
          A limit of D represents the functor sending X to the set of cones over D with vertex X:{" "}
          <M>{"\\mathrm{Hom}(X, \\lim D) \\cong \\lim \\mathrm{Hom}(X, D(-))"}</M>. So maps into a limit are computed as
          limits of sets. This is how universal properties become calculations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cone",
      rung: "check",
      prompt: <p>What is a limit of a diagram?</p>,
      answer: { kind: "choice", options: ["A universal cone over the diagram", "Any cone over the diagram", "The largest object in the diagram", "A colimit in the opposite direction of nothing"], correct: [0] },
    },
    {
      key: "shape",
      rung: "check",
      prompt: <p>What is the limit of a diagram of shape · → · ← ·?</p>,
      answer: { kind: "choice", options: ["A pullback", "A product", "A coproduct", "A pushout"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose g(b) = 2. How many pairs are in the pullback?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "terminal",
      rung: "apply",
      prompt: <p>What is the limit of the empty diagram in the category of sets?</p>,
      answer: { kind: "choice", options: ["A one-element set", "The empty set", "The natural numbers", "There is none"], correct: [0] },
    },
    {
      key: "padic",
      rung: "apply",
      prompt: <p>Which ring is the inverse limit of ℤ/pⁿ?</p>,
      answer: { kind: "choice", options: ["The p-adic integers ℤₚ", "ℤ", "ℚ", "ℤ/p"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the set of pairs (a, b) with f(a) = g(b), with its projections, is a pullback in Set.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks that the projections form a cone: f composed with the first equals g composed with the second.",
          "Given a cone X with maps p to A and q to B, defines x ↦ (p(x), q(x)), which lands in the set since f p = g q.",
          "Shows this is the unique map compatible with the projections.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that in the category of a partially ordered set, a product of two elements is their greatest lower bound.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a morphism x → y exists exactly when x ≤ y, and is unique.",
          "Translates the product property: p ≤ a, p ≤ b, and any x below both is below p.",
          "Concludes p is the greatest lower bound. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Reverse every arrow and limits become colimits: disjoint unions, quotients, pushouts, direct limits. Gluing spaces
        and taking quotients are colimits.
      </p>
      <p>Next, colimits.</p>
    </>
  ),
};
