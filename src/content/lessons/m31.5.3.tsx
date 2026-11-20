import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TorusLiftViz } from "@/components/viz/TorusLiftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.5.3",
  minutes: 90,
  links: {
    revisits: ["m31.5.1", "m31.4.2", "m31.2.3"],
    foreshadows: ["p32.1.3", "p32.1.4", "m32.1.2"],
  },

  puzzle: (
    <>
      <p>
        On a flat torus, straight lines from a point wrap round and round, crossing themselves and returning near their
        start. Yet in a precise sense nothing is lost: unroll the torus to the plane and every geodesic is just a straight
        line. Which manifolds can be unrolled like this, and what does that say about their shape?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Send a geodesic from p across the flat torus and follow its lift in the plane.</p>
      <TorusLiftViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Cartan–Hadamard">
        <p>
          Let M be a complete connected Riemannian manifold with all sectional curvatures ≤ 0. Then for every p,{" "}
          <M>{"\\exp_p: T_pM \\to M"}</M> is a smooth covering map. Consequently the universal cover of M is diffeomorphic
          to <M>{"\\mathbb{R}^n"}</M>, and if M is simply connected, M itself is diffeomorphic to <M>{"\\mathbb{R}^n"}</M>.
        </p>
      </Theorem>

      <Theorem title="proof">
        <p>
          <strong>Local diffeomorphism:</strong> by Rauch, K ≤ 0 means no conjugate points, so{" "}
          <M>{"d(\\exp_p)"}</M> is everywhere invertible. <strong>Covering:</strong> pull the metric back to{" "}
          <M>{"T_pM"}</M> along <M>{"\\exp_p"}</M>. Straight lines through 0 are geodesics of the new metric, so by
          Hopf–Rinow it is complete. A local isometry from a complete manifold onto a connected manifold is a covering map.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          Flat tori, hyperbolic surfaces of genus at least 2 and compact quotients of hyperbolic space all have universal
          cover <M>{"\\mathbb{R}^n"}</M>. So the sphere <M>{"S^n"}</M>, n ≥ 2, carries no complete metric of non-positive
          curvature: it is simply connected but not diffeomorphic to <M>{"\\mathbb{R}^n"}</M>.
        </p>
      </Example>

      <Theorem title="consequences for topology">
        <ul>
          <li>The higher homotopy groups of M vanish: M is an Eilenberg–MacLane space, determined up to homotopy by its fundamental group.</li>
          <li>The fundamental group is torsion-free when M is compact (Cartan&rsquo;s fixed point theorem).</li>
          <li>Each free homotopy class of loops contains a closed geodesic, unique when K &lt; 0.</li>
        </ul>
      </Theorem>

      <Remark title="the comparison picture">
        <p>
          The last three lessons belong together. Rauch compares spreading of geodesics with model spaces. A positive lower
          bound on Ricci curvature forces the manifold to close up (Bonnet–Myers); a non-positive upper bound on sectional
          curvature forces it to open out (Cartan–Hadamard). Local curvature controls global topology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concl",
      rung: "check",
      prompt: <p>What does Cartan–Hadamard say about expₚ when M is complete with K ≤ 0?</p>,
      answer: { kind: "choice", options: ["It is a covering map", "It is constant", "It is injective on a small ball only", "It has conjugate points"], correct: [0] },
    },
    {
      key: "sphere",
      rung: "check",
      prompt: <p>Can S² carry a complete metric with K ≤ 0?</p>,
      answer: { kind: "choice", options: ["No: its universal cover would be R², but S² is simply connected and compact", "Yes", "Only a flat one", "Only with K < 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the direction to 45° and the length to 1.5. Which copy of p does the lift reach?</p>,
      answer: { kind: "choice", options: ["p + (1, 1)", "p + (1, 0)", "p + (0, 1)", "p + (2, 1)"], correct: [0] },
    },
    {
      key: "length",
      rung: "apply",
      prompt: <p>On the unit square torus, what is the length of the closed geodesic at p in the class (2, 1)? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 2.236, tolerance: 0.002 },
    },
    {
      key: "homotopy",
      rung: "apply",
      prompt: <p>For compact M with K ≤ 0, which homotopy groups πₖ(M) with k ≥ 2 are non-trivial?</p>,
      answer: { kind: "choice", options: ["None", "All", "Only π₂", "It depends on the dimension"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why K ≤ 0 makes expₚ a local diffeomorphism.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls that d(expₚ) at tv sends tw to J(t), a Jacobi field with J(0) = 0 and J′(0) = w.",
          "Uses Rauch or the convexity of |J|² under K ≤ 0 to show J(t) ≠ 0 for t > 0 when w ≠ 0.",
          "Concludes d(expₚ) is injective, hence invertible, everywhere.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a compact surface of genus at least 2 with a hyperbolic metric has universal cover diffeomorphic to the plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the surface is compact, hence complete, with K = −1 ≤ 0.",
          "Applies Cartan–Hadamard to conclude the universal cover is diffeomorphic to R².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Riemannian geometry became the language of general relativity, where spacetime curvature is gravity. Philosophers
        then asked whether spacetime is a thing in its own right.
      </p>
      <p>Next, in the philosophy of physics, general relativity and substantivalism.</p>
    </>
  ),
};
