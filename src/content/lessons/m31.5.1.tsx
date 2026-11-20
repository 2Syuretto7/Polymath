import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RauchBandViz } from "@/components/viz/RauchBandViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.5.1",
  minutes: 90,
  links: {
    revisits: ["m31.4.1", "m31.4.3", "m31.3.2"],
    foreshadows: ["m31.5.2", "m31.5.3", "p32.1.3"],
  },

  puzzle: (
    <>
      <p>
        On a lumpy surface the curvature changes from place to place, and the Jacobi equation can rarely be solved
        exactly. But if we know the curvature always lies between 0 and 1, surely the geodesics spread no faster than in
        the plane and no slower than on the sphere. Is that true, and how far along the geodesic does it stay true?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow a Jacobi field under wobbling curvature and compare it with the two model spaces.</p>
      <RauchBandViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Rauch comparison theorem">
        <p>
          Let γ in M and <M>{"\\tilde\\gamma"}</M> in <M>{"\\tilde M"}</M> be unit-speed geodesics of the same length in
          manifolds of the same dimension, and J, <M>{"\\tilde J"}</M> normal Jacobi fields with{" "}
          <M>{"J(0) = \\tilde J(0) = 0"}</M> and <M>{"|D_tJ(0)| = |D_t\\tilde J(0)|"}</M>. Suppose every sectional curvature
          of M along γ is at most every sectional curvature of <M>{"\\tilde M"}</M> along <M>{"\\tilde\\gamma"}</M> at the
          same time t, and <M>{"\\tilde\\gamma"}</M> has no conjugate points. Then <M>{"|J(t)| \\ge |\\tilde J(t)|"}</M>.
        </p>
        <p>
          <strong>Proof idea:</strong> show that <M>{"|J|/|\\tilde J|"}</M> is non-decreasing. Its derivative compares two
          index forms, and the index form is minimised by Jacobi fields among fields with the same ends.
        </p>
      </Theorem>

      <Example title="comparison with model spaces">
        <p>
          If <M>{"K \\le \\kappa"}</M> along γ, then <M>{"|J(t)| \\ge \\operatorname{sn}_\\kappa(t) |D_tJ(0)|"}</M> up to
          the first conjugate point of the model. If <M>{"K \\ge \\kappa"}</M>, then{" "}
          <M>{"|J(t)| \\le \\operatorname{sn}_\\kappa(t) |D_tJ(0)|"}</M> up to the first conjugate point of γ. So if the
          curvature is at most 0, no Jacobi field vanishing at 0 ever vanishes again: there are no conjugate points.
        </p>
      </Example>

      <Theorem title="consequences for the exponential map">
        <p>
          Since <M>{"d(\\exp_p)_{tv}(tw) = J(t)"}</M>, Rauch compares how <M>{"\\exp_p"}</M> stretches lengths. Upper
          curvature bounds make it stretch at least as much as in the model; lower bounds make it stretch at most as much.
          Integrating, curves and triangles in M compare with those in the model space: the idea behind Toponogov&rsquo;s
          theorem.
        </p>
      </Theorem>

      <Remark title="geodesic circles">
        <p>
          On a surface, the circumference of a small geodesic circle of radius r is about{" "}
          <M>{"2\\pi r (1 - K r^2/6)"}</M>. Rauch turns this local fact into a global inequality: under K ≤ 0 circles are at
          least as long as in the plane, under K ≥ 1 at most as long as on the unit sphere.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dir",
      rung: "check",
      prompt: <p>If M has smaller sectional curvature than the comparison space, what does Rauch say about Jacobi fields?</p>,
      answer: { kind: "choice", options: ["They are at least as long as in the comparison space", "They are shorter", "They are equal", "Nothing"], correct: [0] },
    },
    {
      key: "np",
      rung: "check",
      prompt: <p>What does Rauch imply about conjugate points when K ≤ 0?</p>,
      answer: { kind: "choice", options: ["There are none", "They occur at distance π", "They occur everywhere", "They occur only in dimension 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 0 ≤ K ≤ 1, what is the lower bound for |J(2)|, the unit-sphere value sin 2? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.909, tolerance: 0.002 },
    },
    {
      key: "upper",
      rung: "apply",
      prompt: <p>If K ≥ 0 along γ, what is an upper bound for |J(3)| when |J′(0)| = 1?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>On a surface with K ≤ −1, how does the circumference of a geodesic circle of radius r compare with 2π sinh r?</p>,
      answer: { kind: "choice", options: ["It is at least 2π sinh r", "It is at most 2π sinh r", "It equals 2πr", "No comparison is possible"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Rauch to show that if K ≤ 0 everywhere, then no point is conjugate to another along any geodesic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares with Euclidean space, where normal Jacobi fields vanishing at 0 are t·E, with no conjugate points.",
          "Applies Rauch to get |J(t)| ≥ t·|J′(0)| > 0 for t > 0.",
          "Concludes no nonzero Jacobi field vanishing at 0 vanishes again.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the Rauch inequality need the comparison geodesic to have no conjugate points?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the proof divides by |J̃|, which vanishes at a conjugate point.",
          "Notes that beyond a conjugate point the index form is no longer minimised by Jacobi fields.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A lower bound on curvature slows geodesics down and forces them to meet. If the bound is positive, the manifold
        cannot go on for ever.
      </p>
      <p>Next, the Bonnet–Myers theorem.</p>
    </>
  ),
};
