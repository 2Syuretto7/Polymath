import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LefschetzViz } from "@/components/viz/LefschetzViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.4.3",
  minutes: 95,
  links: {
    revisits: ["m25.4.2", "m25.4.1", "m25.3.4"],
    foreshadows: ["m25.5.1", "m25.5.4", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        Brouwer says every map of a disc to itself has a fixed point. A rotation of a torus has none. What about a map of the
        torus that stretches it, like the cat map (x, y) ↦ (2x + y, x + y)? Is there a number, computed from homology alone,
        that tells you when a map must have a fixed point, and even how many?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        An integer matrix A acts on the torus ℝ²/ℤ². Change its entries and compare the Lefschetz number with the fixed points
        drawn on the square.
      </p>
      <LefschetzViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Lefschetz number">
        <p>
          For a map <M>{"f: X \\to X"}</M> of a finite CW complex, let <M>{"f_*"}</M> act on <M>{"H_n(X; \\mathbb{Q})"}</M>, a
          finite-dimensional vector space. The <strong>Lefschetz number</strong> is
        </p>
        <p>
          <M>{"L(f) = \\sum_n (-1)^n \\operatorname{tr}\\big(f_* : H_n(X; \\mathbb{Q}) \\to H_n(X; \\mathbb{Q})\\big)."}</M>
        </p>
        <p>
          It depends only on the homotopy class of f. For the identity it is the Euler characteristic.
        </p>
      </Definition>

      <Theorem title="the Lefschetz fixed point theorem">
        <p>
          If X is a finite simplicial complex, or a retract of one, and <M>{"L(f) \\neq 0"}</M>, then f has a fixed point.
        </p>
        <p>
          <strong>Proof idea.</strong> Suppose f has no fixed point. After subdividing finely and approximating f
          simplicially, f moves every simplex off itself. Then the matrix of the chain map has zeros on the diagonal, so every
          trace on chains vanishes. The alternating sum of traces is the same on chains as on homology (the Hopf trace
          formula), so <M>{"L(f) = 0"}</M>.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          If X is contractible, or just has the rational homology of a point, then <M>{"L(f) = 1"}</M> for every f: so Brouwer
          follows. On Sⁿ, <M>{"L(f) = 1 + (-1)^n \\deg f"}</M>, so a map with no fixed point has degree <M>{"(-1)^{n+1}"}</M>,
          the degree of the antipodal map. A map of ℝP² always has a fixed point, since its rational homology is that of a
          point.
        </p>
      </Example>

      <Theorem title="counting fixed points">
        <p>
          When the fixed points are isolated, each has an <strong>index</strong>, a local degree, and L(f) is the sum of the
          indices. For a linear map A of the torus, every fixed point has index equal to the sign of det(I − A), and there are
          exactly |det(I − A)| of them, matching <M>{"L = 1 - \\operatorname{tr} A + \\det A"}</M>.
        </p>
      </Theorem>

      <Remark title="vector fields again">
        <p>
          Applied to the flow of a vector field for a small time, the theorem gives the Poincaré–Hopf theorem: the indices of
          the zeros of a vector field on a closed manifold add up to its Euler characteristic. Since χ(S²) = 2, the hairy ball
          must have a bald spot; since χ of the torus is 0, it need not.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the Lefschetz number of f defined?</p>,
      answer: { kind: "choice", options: ["The alternating sum of the traces of f on rational homology", "The number of fixed points of f", "The degree of f", "The Euler characteristic of the image of f"], correct: [0] },
    },
    {
      key: "id",
      rung: "check",
      prompt: <p>What is the Lefschetz number of the identity map of X?</p>,
      answer: { kind: "choice", options: ["The Euler characteristic of X", "1", "0", "The dimension of X"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set A to have rows (3, 0) and (0, 3). How many fixed points does the map have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>A map of S² has degree 2. What is its Lefschetz number?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "rot",
      rung: "apply",
      prompt: <p>Why does the Lefschetz theorem not contradict the fixed-point-free rotation of a torus?</p>,
      answer: { kind: "choice", options: ["The rotation is homotopic to the identity, whose Lefschetz number is χ(torus) = 0", "The torus is not a CW complex", "Rotations have fixed points", "The theorem applies only to discs"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the Lefschetz theorem to show that every map from ℝP² to itself has a fixed point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the rational homology of ℝP² is ℚ in degree 0 and 0 otherwise, since H₁ = ℤ/2 is torsion.",
          "Notes every map acts as the identity on H₀ of a connected space, so L(f) = 1.",
          "Concludes L(f) ≠ 0, so f has a fixed point.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A map of a compact surface of genus 2 is homotopic to the identity. Must it have a fixed point?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes L(f) = χ = 2 − 2·2 = −2, since L is a homotopy invariant.",
          "Concludes L(f) ≠ 0, so every such map has a fixed point.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far homology has been enough. But some of the deepest structure, such as a product that multiplies classes,
        appears only after dualising: replacing chains by functions on chains.
      </p>
      <p>Next, cohomology groups: cochains, the coboundary, and why the dual theory is worth the trouble.</p>
    </>
  ),
};
