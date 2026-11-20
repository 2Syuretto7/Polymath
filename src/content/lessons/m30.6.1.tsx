import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LineBundleCohomologyViz } from "@/components/viz/LineBundleCohomologyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.6.1",
  minutes: 90,
  links: {
    revisits: ["m30.5.3", "m24.4.4", "m25.5.1"],
    foreshadows: ["m30.6.2", "m30.6.3", "m39.4.2"],
  },

  puzzle: (
    <>
      <p>
        On the projective line, the sheaf of functions maps onto the sheaf that records values at two points P and Q: near
        any point you can prescribe a value. Yet a global function on ℙ¹ is constant, so you cannot take different values at
        P and Q. Local surjectivity fails globally. How can the failure be measured?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move d, and see the dimensions of the cohomology groups of the line bundle O(d) on ℙ¹.</p>
      <LineBundleCohomologyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="derived functors of global sections">
        <p>
          The functor <M>{"\\Gamma(X, -)"}</M> from sheaves of abelian groups to abelian groups is left exact but not exact.
          Every sheaf has an injective resolution <M>{"0 \\to \\mathcal{F} \\to I^0 \\to I^1 \\to \\cdots"}</M>, and the{" "}
          <strong>sheaf cohomology</strong> <M>{"H^i(X, \\mathcal{F})"}</M> is the cohomology of the complex of global
          sections of the <M>{"I^j"}</M>. So <M>{"H^0"}</M> is global sections, and a short exact sequence of sheaves gives a
          long exact sequence in cohomology.
        </p>
      </Definition>

      <Theorem title="vanishing and finiteness">
        <p>
          Serre: on an affine scheme, <M>{"H^i(X, \\mathcal{F}) = 0"}</M> for i &gt; 0 and every quasi-coherent sheaf.
          Grothendieck: on a noetherian space of dimension n, all cohomology vanishes above degree n. Serre: for a coherent
          sheaf on a projective scheme over a field, every <M>{"H^i"}</M> is finite-dimensional.
        </p>
      </Theorem>

      <Example title="line bundles on the projective line">
        <p>
          <M>{"H^0(\\mathbb{P}^1, \\mathcal{O}(d))"}</M> is the space of homogeneous polynomials of degree d in two variables,
          of dimension d + 1 when d ≥ 0, and 0 otherwise. <M>{"H^1(\\mathcal{O}(d))"}</M> vanishes for d ≥ −1 and has
          dimension −d − 1 for d ≤ −2. In the puzzle, the sequence <M>{"0 \\to \\mathcal{O}(-2) \\to \\mathcal{O} \\to \\mathcal{O}_P \\oplus \\mathcal{O}_Q \\to 0"}</M>{" "}
          gives <M>{"k \\to k^2 \\to H^1(\\mathcal{O}(-2)) \\cong k \\to 0"}</M>: the one-dimensional obstruction.
        </p>
      </Example>

      <Remark title="Euler characteristic">
        <p>
          The Euler characteristic <M>{"\\chi(\\mathcal{F}) = \\sum (-1)^i \\dim H^i"}</M> is additive in short exact
          sequences, so it is often computable when the individual groups are not. For <M>{"\\mathcal{O}(d)"}</M> on ℙ¹ it is
          always d + 1. Serre duality relates <M>{"H^i"}</M> and <M>{"H^{n-i}"}</M>, with the canonical sheaf{" "}
          <M>{"\\mathcal{O}(-2)"}</M> on ℙ¹.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "h0",
      rung: "check",
      prompt: <p>What is the zeroth cohomology group of a sheaf?</p>,
      answer: { kind: "choice", options: ["Its group of global sections", "Always zero", "Its stalk at a point", "The sheaf itself"], correct: [0] },
    },
    {
      key: "aff",
      rung: "check",
      prompt: <p>What does Serre&rsquo;s theorem say about quasi-coherent sheaves on an affine scheme?</p>,
      answer: { kind: "choice", options: ["All cohomology in positive degree vanishes", "All cohomology is infinite-dimensional", "Only the first cohomology vanishes", "Global sections vanish"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with d = −4, what is the dimension of the first cohomology?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "o3",
      rung: "apply",
      prompt: <p>What is the dimension of the space of global sections of O(3) on the projective line?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "groth",
      rung: "apply",
      prompt: <p>On a curve, from which degree onwards must all sheaf cohomology vanish?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For distinct points P and Q on ℙ¹, show that the map from global functions to pairs of values at P and Q is not surjective.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the global regular functions on ℙ¹ are the constants.",
          "Notes a constant takes the same value at P and Q, so the image is the diagonal in k².",
          "Concludes the map k → k² is not surjective, so taking global sections is not right exact.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Using 0 → O(d − 1) → O(d) → k(P) → 0, with k(P) the skyscraper sheaf at a point P, show that χ(O(d)) = d + 1 on the projective line.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses additivity: χ(O(d)) = χ(O(d − 1)) + χ(k(P)) = χ(O(d − 1)) + 1.",
          "Computes χ(O) = 1, since H⁰ is the constants and H¹ vanishes.",
          "Concludes by induction in both directions. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Injective resolutions prove theorems but are useless for computing. Covering a space by affine pieces, where
        cohomology vanishes, gives a concrete recipe instead.
      </p>
      <p>Next, Čech cohomology.</p>
    </>
  ),
};
