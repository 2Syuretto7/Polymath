import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HoleDiffeoViz } from "@/components/viz/HoleDiffeoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.1.4",
  minutes: 90,
  links: {
    revisits: ["p32.1.3", "p32.1.1", "m26.1.2"],
    foreshadows: ["p32.2.1", "p32.2.3", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        Take a solution of Einstein&rsquo;s equations and slide all the fields around inside some small region, smoothly, while
        leaving everything outside untouched. The result is another solution. If the points of spacetime are real things,
        the two solutions disagree about what happens at those points, yet everything before the region fixes neither. Has
        physics become indeterministic, or is something wrong with the points?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Apply more or less of the hole transformation, and watch the worldline move off the manifold point p.</p>
      <HoleDiffeoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="general covariance">
        <p>
          General relativity is <strong>generally covariant</strong>: if (M, g, T) is a model and φ is a diffeomorphism of M,
          then the model obtained by dragging the metric and matter fields along φ is also a model. A{" "}
          <strong>hole transformation</strong> is a diffeomorphism that is the identity outside a region H and not the
          identity inside it.
        </p>
      </Definition>

      <Example title="the argument">
        <p>
          Einstein used a version in 1913; John Earman and John Norton revived it in 1987. A manifold substantivalist treats
          the two models as different possible worlds, differing over which points the fields occupy in H. But the two agree
          completely outside H, including on all earlier data. So, for the substantivalist, the theory fails to determine
          the future even given the whole past: <strong>indeterminism</strong> follows from metaphysics, not physics.
        </p>
      </Example>

      <Definition title="Leibniz equivalence">
        <p>
          The usual way out is <strong>Leibniz equivalence</strong>: diffeomorphic models represent one and the same physical
          situation. All observables, such as coincidences of events, proper times along worldlines and curvature invariants
          at events picked out by the fields, are the same in both. Einstein reached this point-coincidence view in 1915.
        </p>
      </Definition>

      <Remark title="substantivalist replies">
        <p>
          <strong>Sophisticated substantivalism</strong>, defended by Carl Hoefer and Oliver Pooley, keeps spacetime points
          as real but denies that there are bare differences in which point is which, so the two models are one possibility.
          Tim Maudlin&rsquo;s metric essentialism says points have their metric properties essentially, so the shifted model
          is not possible. Structural realists, following John Stachel, take the lesson to be that only the structure of
          relations is real.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hole",
      rung: "check",
      prompt: <p>What is a hole transformation?</p>,
      answer: { kind: "choice", options: ["A diffeomorphism that is the identity outside a region but not inside it", "A change of units", "A rotation of the whole universe", "A black hole"], correct: [0] },
    },
    {
      key: "le",
      rung: "check",
      prompt: <p>What does Leibniz equivalence say?</p>,
      answer: { kind: "choice", options: ["Diffeomorphic models represent the same physical situation", "All models are physically impossible", "Space and time are equivalent", "Every model is deterministic"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the hole transformation applied, does anything observable outside the hole change?</p>,
      answer: { kind: "choice", options: ["No: outside the hole the two models are identical", "Yes: the worldline moves everywhere", "Yes: the hole grows", "Only the manifold points move outside"], correct: [0] },
    },
    {
      key: "en",
      rung: "apply",
      prompt: <p>What did Earman and Norton argue manifold substantivalism implies?</p>,
      answer: { kind: "choice", options: ["A radical indeterminism in general relativity", "That spacetime is flat", "That the metric is not real", "That general relativity is false"], correct: [0] },
    },
    {
      key: "soph",
      rung: "apply",
      prompt: <p>How does sophisticated substantivalism answer the argument?</p>,
      answer: { kind: "choice", options: ["Points are real, but models differing only by a diffeomorphism are one possibility", "Points do not exist", "General covariance is false", "The hole must be empty"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the hole argument refute substantivalism about spacetime? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: general covariance plus manifold substantivalism yields indeterminism.",
          "Considers a reply, such as sophisticated substantivalism or metric essentialism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a world in which every field is shifted to different spacetime points a different possible world?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with haecceitism, the view that there are bare differences in which thing is which.",
          "Connects the question to Leibniz’s shift arguments.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Relativity reshaped space and time; quantum theory threatens something deeper. Its basic equation never produces a
        single definite outcome, yet every experiment ends with one.
      </p>
      <p>Next, the measurement problem.</p>
    </>
  ),
};
