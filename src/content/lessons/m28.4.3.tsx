import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PowerCoverViz } from "@/components/viz/PowerCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.4.3",
  minutes: 90,
  links: {
    revisits: ["m28.4.2", "m15.4.3", "m15.4.4"],
    foreshadows: ["m28.4.4", "m29.2.3", "m29.5.2"],
  },

  puzzle: (
    <>
      <p>
        exp maps ℂ onto the punctured plane, infinitely many points to one. The map z ↦ z² does the same two to one, and ℘
        maps a torus onto the sphere two to one. In each case the bigger surface &lsquo;unwinds&rsquo; the smaller. How
        far can unwinding go, and what is left at the end?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n, move w round 0, and follow its preimages under z ↦ zⁿ.</p>
      <PowerCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="coverings and branched coverings">
        <p>
          A holomorphic map p: Y → X is a <strong>covering</strong> if each point of X has a neighbourhood U whose preimage
          is a disjoint union of open sets each mapped biholomorphically onto U. A non-constant proper holomorphic map is a{" "}
          <strong>branched covering</strong>: in local form <M>{"z \\mapsto z^{e}"}</M>, the points with e &gt; 1 are{" "}
          <strong>ramification points</strong>, and the sum of e over the preimages of any point is the same number n, the
          degree.
        </p>
      </Definition>

      <Theorem title="lifting and the universal cover">
        <p>
          Paths and homotopies lift uniquely to a covering once a starting point is chosen. Every Riemann surface X has a
          simply connected <strong>universal cover</strong>, which inherits a complex structure, and X is its quotient by the
          group of deck transformations, isomorphic to the fundamental group of X.
        </p>
      </Theorem>

      <Theorem title="uniformisation (Koebe and Poincaré, 1907)">
        <p>
          Every simply connected Riemann surface is isomorphic to exactly one of the sphere, the plane ℂ or the unit disc.
          So every Riemann surface is the sphere, or a quotient of ℂ (the plane, punctured plane and tori), or a quotient of
          the disc, which covers all the rest, including every compact surface of genus at least 2.
        </p>
      </Theorem>

      <Theorem title="the Riemann-Hurwitz formula">
        <p>
          For a branched covering f: Y → X of degree n between compact surfaces of genus{" "}
          <M>{"g_Y"}</M> and <M>{"g_X"}</M>,{" "}
          <M>{"2g_Y - 2 = n(2g_X - 2) + \\sum_{y}(e_y - 1)"}</M>. It follows from counting cells in a triangulation of X
          that has the branch values as vertices.
        </p>
      </Theorem>

      <Example title="checks">
        <p>
          <M>{"z \\mapsto z^n"}</M> on the sphere ramifies at 0 and ∞ with e = n: −2 = n(−2) + 2(n − 1). The map ℘ from a
          torus to the sphere has degree 2 and ramifies at the four half-periods: 0 = 2(−2) + 4.
        </p>
      </Example>

      <Remark title="arithmetic echoes">
        <p>
          The same words, ramification, degree and residue degree, appear in algebraic number theory, where a prime splits in
          a field extension as a point&rsquo;s preimages split in a covering. The analogy is exact for function fields and a
          guiding image for number fields.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unif",
      rung: "check",
      prompt: <p>According to the uniformisation theorem, which are the simply connected Riemann surfaces?</p>,
      answer: { kind: "choice", options: ["The sphere, the plane and the unit disc", "Only the plane", "The sphere and the torus", "Every open subset of ℂ"], correct: [0] },
    },
    {
      key: "cover",
      rung: "check",
      prompt: <p>Over which set is z ↦ zⁿ an unbranched covering?</p>,
      answer: { kind: "choice", options: ["The punctured plane ℂ minus 0", "The whole plane", "The unit disc", "The Riemann sphere"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take n = 3 and turn w through 720°. Which index does the lift end at?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "rh",
      rung: "apply",
      prompt: <p>A degree 2 map from a compact surface Y to the sphere has 6 ramification points, each with e = 2. What is the genus of Y?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "wp",
      rung: "apply",
      prompt: <p>How many ramification points does ℘ have as a map from the torus to the sphere?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Check the Riemann-Hurwitz formula for z ↦ zⁿ from the sphere to itself.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the degree is n and both surfaces have genus 0.",
          "Finds the ramification points 0 and ∞, each with e = n, and no others.",
          "Verifies −2 = n(−2) + 2(n − 1).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is exp: ℂ → ℂ minus 0 the universal cover of the punctured plane, and what are its deck transformations?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ℂ is simply connected and exp is a covering, with local inverses given by branches of log.",
          "Identifies the deck transformations as z ↦ z + 2πik for integers k.",
          "Relates this group, ℤ, to the fundamental group of the punctured plane. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On a compact Riemann surface, how many meromorphic functions have poles only at a few prescribed points? The answer
        is governed by the genus, through one of the central theorems of geometry.
      </p>
      <p>Next, compact surfaces and Riemann-Roch in outline.</p>
    </>
  ),
};
