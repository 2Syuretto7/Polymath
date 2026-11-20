import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MyersDiameterViz } from "@/components/viz/MyersDiameterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.5.2",
  minutes: 90,
  links: {
    revisits: ["m31.5.1", "m31.4.3", "m31.2.3"],
    foreshadows: ["m31.5.3", "p32.1.2", "p32.1.3"],
  },

  puzzle: (
    <>
      <p>
        A sphere is positively curved and compact. A paraboloid is also positively curved everywhere, yet it goes on for
        ever. What extra condition on curvature forces a complete manifold to be compact, and can we bound its size?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Raise the lower bound on Ricci curvature and watch the largest possible diameter shrink.</p>
      <MyersDiameterViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Bonnet–Myers">
        <p>
          Let M be a complete n-dimensional Riemannian manifold with <M>{"\\mathrm{Ric} \\ge (n - 1)k\\,g"}</M> for some
          constant k &gt; 0. Then the diameter of M is at most <M>{"\\pi/\\sqrt{k}"}</M>. Hence M is compact, and its
          fundamental group is finite. Ossian Bonnet proved the surface case with sectional curvature; Sumner Myers extended
          it in 1941 to Ricci curvature.
        </p>
      </Theorem>

      <Theorem title="proof">
        <p>
          Take p and q with d(p, q) = L &gt; <M>{"\\pi/\\sqrt{k}"}</M>. By Hopf–Rinow a minimising unit-speed geodesic γ joins
          them. Let <M>{"E_2, \\dots, E_n"}</M> be parallel orthonormal fields normal to γ, and{" "}
          <M>{"V_i(t) = \\sin(\\pi t / L) E_i(t)"}</M>. Then
        </p>
        <p>
          <M>{"\\sum_i I(V_i, V_i) = \\int_0^L \\left( (n - 1)\\tfrac{\\pi^2}{L^2}\\cos^2 - \\sin^2 \\cdot \\mathrm{Ric}(\\dot\\gamma, \\dot\\gamma) \\right) dt \\le (n - 1)\\left(\\tfrac{\\pi^2}{L^2} - k\\right)\\tfrac{L}{2} < 0"}</M>.
        </p>
        <p>
          So some <M>{"I(V_i, V_i) < 0"}</M>, and a nearby curve is shorter, contradicting minimality. Completeness and the
          diameter bound give compactness. The universal cover satisfies the same hypothesis, so it is compact too, and the
          covering has finitely many sheets.
        </p>
      </Theorem>

      <Example title="sharpness">
        <p>
          The round sphere of radius <M>{"1/\\sqrt{k}"}</M> has <M>{"\\mathrm{Ric} = (n - 1)k\\,g"}</M> and diameter exactly{" "}
          <M>{"\\pi/\\sqrt{k}"}</M>. Cheng&rsquo;s theorem says it is the only case of equality.
        </p>
      </Example>

      <Remark title="hypotheses">
        <p>
          A paraboloid has positive curvature tending to 0, so no single k &gt; 0 works, and it is not compact. The flat
          cylinder has Ric ≥ 0 and is not compact. Completeness matters too: an open hemisphere has curvature 1 but is not
          compact. As a corollary, a compact manifold with infinite fundamental group, such as a torus, carries no metric
          with positive Ricci curvature.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concl",
      rung: "check",
      prompt: <p>What does Bonnet–Myers conclude?</p>,
      answer: { kind: "choice", options: ["Diameter at most π/√k, so M is compact with finite fundamental group", "M is simply connected", "M is a sphere", "M has no conjugate points"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Why does the paraboloid not contradict the theorem?</p>,
      answer: { kind: "choice", options: ["Its curvature is positive but not bounded below by a positive constant", "It is not complete", "It has negative curvature", "It is compact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set k = 4. What is the largest possible diameter? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 1.571, tolerance: 0.002 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>A complete 3-manifold has Ric ≥ 2g. What is the bound on its diameter? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "torus",
      rung: "apply",
      prompt: <p>Can the 2-torus carry a metric with Gaussian curvature at least 1 everywhere?</p>,
      answer: { kind: "choice", options: ["No: its fundamental group is infinite", "Yes", "Only if it is flat", "Only in dimension 3"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain the key step: why the fields Vᵢ = sin(πt/L)Eᵢ give a negative total index form when L &gt; π/√k.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the index form of each Vᵢ using |D Vᵢ|² = (π/L)²cos² and the curvature term sin²·K(γ′, Eᵢ).",
          "Sums over i, turning the curvature terms into Ric(γ′, γ′) ≥ (n − 1)k.",
          "Integrates to get at most (n − 1)(π²/L² − k)L/2, which is negative when L > π/√k.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does Bonnet–Myers also bound the fundamental group?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the universal cover with the pulled-back metric is complete with the same Ricci bound.",
          "So it is compact, and a compact cover of a compact manifold has finitely many sheets.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Positive curvature closes a manifold up. Non-positive curvature does the opposite: it opens it out so completely
        that the topology is determined by the fundamental group alone.
      </p>
      <p>Next, the Cartan–Hadamard theorem.</p>
    </>
  ),
};
