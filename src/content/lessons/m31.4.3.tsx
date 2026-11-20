import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SecondVariationViz } from "@/components/viz/SecondVariationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.4.3",
  minutes: 90,
  links: {
    revisits: ["m31.4.2", "m31.3.2", "m16.4.3"],
    foreshadows: ["m31.5.1", "m31.5.2", "m31.5.3"],
  },

  puzzle: (
    <>
      <p>
        A geodesic is a critical point of length: every small variation changes length only at second order. In calculus a
        critical point might be a minimum, a maximum or a saddle, and the second derivative decides. What is the second
        derivative of length, and what does curvature have to do with it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lengthen a great-circle arc on the unit sphere and watch the sign of the second variation.</p>
      <SecondVariationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="proper normal variations">
        <p>
          Let γ: [0, L] → M be a unit-speed geodesic. A <strong>proper variation</strong> is a smooth family of curves{" "}
          <M>{"\\Gamma(s, t)"}</M> with <M>{"\\Gamma(0, t) = \\gamma(t)"}</M> and fixed endpoints. Its variation field is{" "}
          <M>{"V(t) = \\partial_s \\Gamma(0, t)"}</M>, which vanishes at 0 and L. We may take V normal to γ.
        </p>
      </Definition>

      <Theorem title="the second variation formula">
        <p>
          For a proper normal variation with length function <M>{"\\mathcal{L}(s)"}</M>,{" "}
          <M>{"\\mathcal{L}''(0) = I(V, V) = \\int_0^L \\left( |D_t V|^2 - \\mathrm{Rm}(V, \\dot\\gamma, \\dot\\gamma, V) \\right) dt"}</M>.
          The symmetric bilinear form I is the <strong>index form</strong>. Integrating by parts,{" "}
          <M>{"I(V, W) = -\\int_0^L \\langle D_t^2 V + R(V, \\dot\\gamma)\\dot\\gamma, W \\rangle \\, dt"}</M>, so the
          Jacobi equation appears as the equation of the null directions of I.
        </p>
      </Theorem>

      <Example title="the sphere">
        <p>
          On the unit sphere take V(t) = sin(πt/L)E(t) with E parallel, unit and normal. Then{" "}
          <M>{"I(V, V) = \\int_0^L \\left( \\tfrac{\\pi^2}{L^2}\\cos^2 - \\sin^2 \\right) dt = \\left( \\tfrac{\\pi^2}{L^2} - 1 \\right) \\tfrac{L}{2}"}</M>.
          It is positive for L &lt; π, zero at L = π, where V is a Jacobi field, and negative for L &gt; π, where a nearby
          curve is shorter.
        </p>
      </Example>

      <Theorem title="Jacobi's theorem">
        <p>
          If γ has no point conjugate to γ(0) in (0, L], then I is positive definite on proper normal fields, and γ is
          shorter than every nearby curve with the same ends. If γ(a) is conjugate to γ(0) for some a &lt; L, there is a
          proper V with I(V, V) &lt; 0, so γ is not minimising.
        </p>
      </Theorem>

      <Remark title="where comparison begins">
        <p>
          The index form weighs stretching, <M>{"|D_tV|^2"}</M>, against curvature. If sectional curvature is at least k
          &gt; 0, the curvature term wins on long enough geodesics, which forces conjugate points and bounds the diameter.
          This is the engine behind the comparison theorems that follow.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "index",
      rung: "check",
      prompt: <p>What does the index form I(V, V) compute?</p>,
      answer: { kind: "choice", options: ["The second derivative of length along a proper normal variation", "The first derivative of length", "The area swept by the variation", "The curvature of γ"], correct: [0] },
    },
    {
      key: "null",
      rung: "check",
      prompt: <p>Proper fields V with I(V, W) = 0 for every proper W are exactly what?</p>,
      answer: { kind: "choice", options: ["Jacobi fields vanishing at both ends", "Parallel fields", "Tangent fields", "Killing fields"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set L = 4. What is I(V, V)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: -0.77, tolerance: 0.02 },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: <p>In the plane, what is I(V, V) for V(t) = sin(πt/L)E, with E a constant unit normal? Give it for L = π, to two decimal places.</p>,
      answer: { kind: "numeric", value: 1.57, tolerance: 0.02 },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>On the unit sphere, for which lengths L is the great-circle arc of length L not minimising?</p>,
      answer: { kind: "choice", options: ["L > π", "L < π", "L = π only", "All L"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Compute I(V, V) on the unit sphere for V(t) = sin(πt/L)E(t), and find its sign.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses D V = (π/L)cos(πt/L)E since E is parallel, and Rm(V, γ′, γ′, V) = |V|² for curvature 1.",
          "Integrates to get (π²/L² − 1)·L/2.",
          "Concludes it is positive for L < π, zero at π and negative for L > π.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Suppose sectional curvature is at least 1 everywhere. Use the same V to show no geodesic longer than π minimises.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Bounds the curvature term below by |V|², so I(V, V) ≤ (π²/L² − 1)·L/2.",
          "Concludes I(V, V) < 0 when L > π, so the geodesic is not minimising (the idea behind Bonnet–Myers).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Comparing Jacobi fields on a manifold with those on a model space of constant curvature gives sharp control of
        how geodesics spread.
      </p>
      <p>Next, the Rauch comparison theorem.</p>
    </>
  ),
};
