import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CircleLiftViz } from "@/components/viz/CircleLiftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.2.1",
  minutes: 90,
  links: {
    revisits: ["m25.1.3", "m15.4.3", "m15.4.4"],
    foreshadows: ["m25.2.2", "m25.2.3", "m25.4.1"],
  },

  puzzle: (
    <>
      <p>
        The map z ↦ z³ wraps a circle three times round itself. Can the map z ↦ z² of the circle be written as f(z)³ for
        some continuous f, a continuous cube root of z²? What about z ↦ z⁶? The answer depends only on one number, and
        finding it is a question about lifting.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lift the loop traced by z ↦ zᵈ through the n-sheeted cover z ↦ zⁿ, and see when it closes up.</p>
      <CircleLiftViz />
    </>
  ),

  theory: (
    <>
      <Definition title="lifts">
        <p>
          Let <M>{"p: \\tilde{X} \\to X"}</M> be a covering map. A <strong>lift</strong> of <M>{"f: Y \\to X"}</M> is a map{" "}
          <M>{"\\tilde{f}: Y \\to \\tilde{X}"}</M> with <M>{"p \\tilde{f} = f"}</M>. You have met the path and homotopy lifting
          properties: paths, and homotopies of paths, lift uniquely once a starting point is chosen.
        </p>
      </Definition>

      <Theorem title="the lifting criterion">
        <p>
          Let <M>Y</M> be path-connected and locally path-connected, <M>{"f: (Y, y_0) \\to (X, x_0)"}</M>, and{" "}
          <M>{"\\tilde{x}_0"}</M> a point over <M>{"x_0"}</M>. A lift with <M>{"\\tilde{f}(y_0) = \\tilde{x}_0"}</M> exists
          exactly when <M>{"f_*(\\pi_1(Y, y_0)) \\subseteq p_*(\\pi_1(\\tilde{X}, \\tilde{x}_0))"}</M>.
        </p>
        <p>
          <strong>Proof idea.</strong> Define <M>{"\\tilde{f}(y)"}</M> by joining <M>{"y_0"}</M> to <M>y</M> by a path, pushing
          it down by <M>f</M>, lifting it from <M>{"\\tilde{x}_0"}</M>, and taking the end point. Two paths differ by a loop,
          whose image lies in <M>{"p_*(\\pi_1(\\tilde{X}))"}</M> by hypothesis, so lifts to a loop; the end point is well
          defined. Local path-connectedness gives continuity.
        </p>
      </Theorem>

      <Theorem title="uniqueness">
        <p>
          If <M>Y</M> is connected, two lifts of the same map that agree at one point agree everywhere: the set where they
          agree is open and closed, by the evenly covered neighbourhoods.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          <M>{"p_*"}</M> is injective, and its image consists of the loops at <M>{"x_0"}</M> whose lifts are loops. Every map
          from a simply connected, locally path-connected space lifts to every cover: so every map{" "}
          <M>{"S^2 \\to S^1"}</M> lifts to ℝ, which is contractible, and is therefore null-homotopic. The number of sheets of
          a connected cover equals the index of <M>{"p_*(\\pi_1(\\tilde{X}))"}</M> in <M>{"\\pi_1(X)"}</M>.
        </p>
      </Example>

      <Remark title="why local path-connectedness">
        <p>
          The Warsaw circle, a topologist&rsquo;s sine curve closed up by an arc, is simply connected but not locally path
          connected, and the obvious map from it to the circle does not lift to ℝ. Without the hypothesis, the
          &lsquo;lift&rsquo; defined path by path can fail to be continuous.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "crit",
      rung: "check",
      prompt: <p>What condition decides whether f: Y → X lifts through a covering p?</p>,
      answer: { kind: "choice", options: ["The image of π₁(Y) under f lies in the image of π₁ of the cover under p", "Y must be compact", "f must be injective", "X must be simply connected"], correct: [0] },
    },
    {
      key: "uniq",
      rung: "check",
      prompt: <p>When are two lifts of the same map from a connected space equal?</p>,
      answer: { kind: "choice", options: ["When they agree at one point", "Always", "Never", "When the cover is finite"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation with the 3-sheeted cover, for how many of the degrees from −4 to 4 does f lift?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "s2",
      rung: "apply",
      prompt: <p>Why is every map from S² to S¹ null-homotopic?</p>,
      answer: { kind: "choice", options: ["S² is simply connected, so the map lifts to ℝ, which is contractible", "S² is contractible", "S¹ is simply connected", "Maps between spheres are constant"], correct: [0] },
    },
    {
      key: "sheets",
      rung: "apply",
      prompt: <p>A connected cover of the figure eight has the image of its fundamental group, under the covering map, of index 4. How many sheets does it have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if a covering space of X is simply connected, then the number of its sheets equals the order of π₁(X).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the correspondence between points over the base point and cosets of the image of its fundamental group under p.",
          "Notes that the image is trivial when the cover is simply connected.",
          "Concludes the sheets are in bijection with π₁(X), so their number is its order.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is there a continuous square root on the unit circle, that is, a continuous g with g(z)² = z for all |z| = 1?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises g as a lift of the identity through the 2-sheeted cover z ↦ z².",
          "Notes the identity has degree 1, not divisible by 2, so by the lifting criterion no lift exists.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The lifting criterion lets covers be compared: a map between covers exists exactly when one subgroup sits inside
        another. This turns the study of covering spaces into the study of subgroups of the fundamental group.
      </p>
      <p>
        Next, the classification of covering spaces: the universal cover, and the Galois-like correspondence between
        connected covers and conjugacy classes of subgroups of π₁.
      </p>
    </>
  ),
};
