import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GermViz } from "@/components/viz/GermViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.3.2",
  minutes: 90,
  links: {
    revisits: ["m30.3.1", "m24.2.2", "m30.1.4"],
    foreshadows: ["m30.3.3", "m30.4.1", "m30.5.2"],
  },

  puzzle: (
    <>
      <p>
        The zero function and a smooth bump that vanishes on [−1, 1] are different functions, yet near 0 nobody could tell
        them apart. For polynomials or analytic functions this cannot happen. How should one say precisely what a function
        looks like at a point, and what does it tell you?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a pair of functions, move the point, and see whether they agree on some interval around it.</p>
      <GermViz />
    </>
  ),

  theory: (
    <>
      <Definition title="germs and stalks">
        <p>
          For a presheaf F on X and a point p, the <strong>stalk</strong> <M>{"F_p"}</M> is the set of pairs (U, s), with U
          an open neighbourhood of p and s in F(U), where (U, s) and (V, t) are identified if s and t agree on some smaller
          neighbourhood W of p. The class of (U, s) is the <strong>germ</strong> <M>{"s_p"}</M>. In categorical terms,{" "}
          <M>{"F_p = \\varinjlim_{U \\ni p} F(U)"}</M>, a colimit over the neighbourhoods of p.
        </p>
      </Definition>

      <Theorem title="stalks detect sheaf properties">
        <p>
          For a sheaf F, two sections over U are equal exactly when their germs agree at every point of U. A morphism of
          sheaves is injective, surjective or an isomorphism exactly when it is so on every stalk. Surjectivity on stalks is
          weaker than surjectivity on sections over each open set: the map <M>{"f \\mapsto e^{2\\pi i f}"}</M> from
          holomorphic functions to non-vanishing ones on <M>{"\\mathbb{C}^\\times"}</M> is surjective on stalks but not on
          global sections, since z has no global logarithm.
        </p>
      </Theorem>

      <Example title="stalks of the structure sheaf">
        <p>
          For an affine variety X and a point p, the stalk <M>{"\\mathcal{O}_{X,p}"}</M> consists of quotients f/g of
          polynomial functions with <M>{"g(p) \\neq 0"}</M>. It is the localisation of the coordinate ring at the maximal
          ideal <M>{"\\mathfrak{m}_p"}</M> of functions vanishing at p, a local ring. Its dimension equals the local dimension
          of X at p, and p is smooth exactly when this local ring is regular.
        </p>
      </Example>

      <Remark title="rigid and flexible germs">
        <p>
          Smooth germs are flexible: bump functions make the sheaf of smooth functions very far from determined by its germs
          at one point. Analytic and regular germs are rigid: by the identity theorem, a holomorphic function on a connected
          open set is fixed by its germ at any one point. Algebraic geometry lives on the rigid side.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "germ",
      rung: "check",
      prompt: <p>When do two sections have the same germ at p?</p>,
      answer: { kind: "choice", options: ["When they agree on some open neighbourhood of p", "When they agree at p", "When they agree everywhere", "When their derivatives agree at p"], correct: [0] },
    },
    {
      key: "local",
      rung: "check",
      prompt: <p>What is the stalk of the structure sheaf of an affine variety at p?</p>,
      answer: { kind: "choice", options: ["The localisation of the coordinate ring at the maximal ideal of p", "The coordinate ring itself", "The field k", "The ideal of p"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the bump pair and p = 0. What is the radius of the largest interval about p on which the functions agree?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "abs",
      rung: "apply",
      prompt: <p>Do x and |x| have the same germ at 0?</p>,
      answer: { kind: "choice", options: ["No: they differ at negative points arbitrarily close to 0", "Yes: they agree at 0", "Yes: they agree for x ≥ 0", "Only as continuous functions"], correct: [0] },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>The map f ↦ exp(2πif) from holomorphic to non-vanishing holomorphic functions on ℂ minus 0 is surjective on stalks. Is it surjective on global sections?</p>,
      answer: { kind: "choice", options: ["No: z has no global logarithm", "Yes, always", "Yes, since stalks determine sections", "Only for polynomials"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for a sheaf F, two sections s, t over U with the same germ at every point of U are equal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "For each p in U, finds an open neighbourhood W of p in U on which s and t agree.",
          "Notes these W form an open cover of U.",
          "Applies the locality axiom to conclude s = t.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the stalk of the structure sheaf at p a local ring?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a germ f/g with f(p) ≠ 0 is invertible, with inverse g/f.",
          "Concludes that the non-units are exactly the germs vanishing at p, which form an ideal.",
          "Concludes this is the unique maximal ideal. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Constant functions do not form a sheaf, and many natural constructions, such as quotients, produce presheaves that
        are not sheaves. There is a best way to turn any presheaf into a sheaf, built from its stalks.
      </p>
      <p>Next, sheafification.</p>
    </>
  ),
};
