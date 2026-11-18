import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FormIntegralViz } from "@/components/viz/FormIntegralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.6.1",
  minutes: 90,
  links: {
    revisits: ["m26.5.4", "m5.6.1", "m12.5.2"],
    foreshadows: ["m26.6.2", "m26.6.3", "m26.7.4"],
  },

  puzzle: (
    <>
      <p>
        You cannot integrate a function over a sphere without first deciding how to measure area on it. But you can integrate
        a 2-form, with no extra choices beyond an orientation. Why forms, and not functions, are the natural things to
        integrate is the lesson of the change of variables formula.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Integrate a 1-form over a circle by cutting it into n pieces and adding ω(γ&prime;(t)) Δt. Increase n, change the
        radius, and reverse the direction.
      </p>
      <FormIntegralViz />
    </>
  ),

  theory: (
    <>
      <Definition title="in ℝⁿ">
        <p>
          For an n-form <M>{"\\omega = f \\, dx^1 \\wedge \\dots \\wedge dx^n"}</M> with compact support in an open subset of{" "}
          <M>{"\\mathbb{R}^n"}</M>, define <M>{"\\int \\omega = \\int f \\, dx^1 \\cdots dx^n"}</M>, the ordinary integral. If F is
          an orientation-preserving diffeomorphism, then <M>{"F^*\\omega = (f \\circ F) \\det(DF) \\, dx^1 \\wedge \\dots \\wedge dx^n"}</M>,
          and the change of variables formula gives <M>{"\\int F^*\\omega = \\int \\omega"}</M>, since{" "}
          <M>{"\\det DF = |\\det DF|"}</M>.
        </p>
      </Definition>

      <Definition title="on an oriented manifold">
        <p>
          Let M be an oriented n-manifold and ω a compactly supported n-form. If the support lies in one positively oriented
          chart φ, set <M>{"\\int_M \\omega = \\int (\\varphi^{-1})^* \\omega"}</M>; by the previous paragraph this does not
          depend on the chart. In general, take a partition of unity <M>{"\\psi_i"}</M> subordinate to oriented charts and set{" "}
          <M>{"\\int_M \\omega = \\sum_i \\int_M \\psi_i \\omega"}</M>.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          The integral is linear, changes sign when the orientation is reversed, and is invariant under orientation-preserving
          diffeomorphisms: <M>{"\\int_M F^*\\omega = \\int_N \\omega"}</M>. If ω is a positive form, meaning positive on
          positively oriented bases, then <M>{"\\int_M \\omega > 0"}</M>.
        </p>
      </Theorem>

      <Example title="line integrals">
        <p>
          A 1-form ω integrated over an oriented curve parametrised by γ: [a, b] → M is{" "}
          <M>{"\\int_a^b \\omega(\\gamma'(t)) \\, dt"}</M>, the integral of the pullback <M>{"\\gamma^*\\omega"}</M>. For{" "}
          <M>{"\\omega = -y \\, dx + x \\, dy"}</M> round the circle of radius r anticlockwise,{" "}
          <M>{"\\gamma^*\\omega = r^2 \\, dt"}</M>, so the integral is <M>{"2\\pi r^2"}</M>, twice the area enclosed. If{" "}
          <M>{"\\omega = df"}</M>, the integral is f(γ(b)) − f(γ(a)), the fundamental theorem of calculus.
        </p>
      </Example>

      <Remark title="densities and Riemannian volume">
        <p>
          To integrate functions, choose a Riemannian metric. On an oriented manifold it gives a volume form{" "}
          <M>{"dV = \\sqrt{\\det g_{ij}} \\, dx^1 \\wedge \\dots \\wedge dx^n"}</M>, and we integrate f dV. Without orientation one
          can still integrate densities, which transform by <M>{"|\\det|"}</M> instead of det.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Why is the integral of an n-form independent of the oriented chart used?</p>,
      answer: { kind: "choice", options: ["Forms transform by det of the Jacobian, which equals |det| when orientation is preserved, matching change of variables", "All charts are the same", "Forms are always zero at the boundary", "Integrals are always positive"], correct: [0] },
    },
    {
      key: "rev",
      rung: "check",
      prompt: <p>What happens to ∫ω when the orientation of M is reversed?</p>,
      answer: { kind: "choice", options: ["It changes sign", "It is unchanged", "It doubles", "It becomes zero"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the integral of −y dx + x dy round the unit circle anticlockwise? Give it to two decimal places.</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.01 },
    },
    {
      key: "exact",
      rung: "apply",
      prompt: <p>In the visualisation, why is the integral of d(xy) round the circle zero?</p>,
      answer: { kind: "choice", options: ["The integral of df along a curve is f(end) − f(start), and the curve is closed", "xy is zero on the circle", "The circle is not oriented", "The form is not smooth"], correct: [0] },
    },
    {
      key: "pull",
      rung: "apply",
      prompt: <p>For γ(t) = (t, t²), 0 ≤ t ≤ 1, what is the integral of x dy along γ?</p>,
      answer: { kind: "choice", options: ["2/3", "1/2", "1/3", "1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the integral of a 1-form ω along γ: [a, b] → M does not change under an orientation-preserving reparametrisation γ ∘ h, with h: [c, d] → [a, b] increasing.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the new integral as ∫ ω((γ ∘ h)′(s)) ds = ∫ ω(γ′(h(s))) h′(s) ds, by the chain rule and linearity of ω.",
          "Substitutes t = h(s), dt = h′(s) ds, using h(c) = a and h(d) = b.",
          "Concludes the integral equals ∫ ω(γ′(t)) dt.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a positive 2-form on a compact oriented surface never be exact? Use what you know, or guess at the next lesson.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the integral of a positive form is positive.",
          "Suggests that the integral of an exact form dη over a closed surface is zero, by Stokes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The fundamental theorem of calculus, Green&rsquo;s theorem, the classical Stokes theorem and the divergence theorem all
        say the same thing: integrating a derivative over a region equals integrating the original over its boundary.
      </p>
      <p>Next, Stokes&rsquo; theorem on manifolds.</p>
    </>
  ),
};
