import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FirstVariationViz } from "@/components/viz/FirstVariationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.6.2",
  minutes: 90,
  links: {
    revisits: ["m33.6.1", "m33.4.1", "m33.4.3"],
    foreshadows: ["m33.6.3", "m33.2.2", "m33.5.2"],
  },

  puzzle: (
    <>
      <p>
        A function u minimises an energy among all functions with the same boundary values. Push u a little in the
        direction of some v, to u + εv. The energy is a function of the number ε with its minimum at ε = 0, so its
        derivative there is zero. What equation for u do we get by insisting on this for every v?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a variation v and move ε, and watch the energy rise on both sides of ε = 0.</p>
      <FirstVariationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the first variation">
        <p>
          For <M>{"I[w] = \\int_U L(Dw, w, x)\\,dx"}</M> and v smooth with compact support, set{" "}
          <M>{"i(\\varepsilon) = I[u + \\varepsilon v]"}</M>. If u is a minimiser, i has a minimum at 0, so i′(0) = 0.
          Differentiating under the integral,{" "}
          <M>{"i'(0) = \\int_U \\big(L_{p_i}(Du, u, x)\\,v_{x_i} + L_z(Du, u, x)\\,v\\big)\\,dx = 0"}</M> for all v. This
          is the weak form of the Euler-Lagrange equation.
        </p>
      </Definition>

      <Theorem title="the Euler-Lagrange equation">
        <p>
          If u is smooth, integrating by parts gives{" "}
          <M>{"-\\sum_i \\big(L_{p_i}(Du, u, x)\\big)_{x_i} + L_z(Du, u, x) = 0"}</M> in U, a second-order quasilinear
          elliptic equation when L is uniformly convex in p. Conversely, if L is convex in (p, z), any weak solution of
          the equation is a minimiser. Under suitable growth conditions every minimiser from the direct method is a weak
          solution, and regularity theory then shows when it is smooth.
        </p>
      </Theorem>

      <Example title="classical Lagrangians">
        <p>
          With <M>{"L = \\tfrac12|p|^2 - fz"}</M>, the equation is −Δu = f: Dirichlet&rsquo;s principle. With{" "}
          <M>{"L = \\sqrt{1 + |p|^2}"}</M>, the area of the graph, it is the <strong>minimal surface equation</strong>{" "}
          <M>{"\\mathrm{div}\\big(Du/\\sqrt{1 + |Du|^2}\\big) = 0"}</M>. With <M>{"L = \\tfrac12|p|^2 - F(z)"}</M>, it is
          the semilinear equation −Δu = F′(u). In one variable, with L = ½mẋ² − V(x), it is Newton&rsquo;s law mẍ = −V′(x).
        </p>
      </Example>

      <Remark title="the second variation and beyond">
        <p>
          A critical point need not be a minimiser. The <strong>second variation</strong> i″(0) ≥ 0 gives the Legendre
          condition: the matrix of second derivatives of L in p must be non-negative. Critical points that are saddles can
          be found by minimax methods such as the mountain pass theorem of Ambrosetti and Rabinowitz. Noether&rsquo;s
          theorem links symmetries of L to conserved quantities of its Euler-Lagrange equation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fv",
      rung: "check",
      prompt: <p>Why is i′(0) = 0 when u minimises I?</p>,
      answer: { kind: "choice", options: ["The function ε ↦ I[u + εv] has a minimum at ε = 0", "Because I is linear", "Because v vanishes everywhere", "Because u is zero"], correct: [0] },
    },
    {
      key: "dir",
      rung: "check",
      prompt: <p>What Euler-Lagrange equation does L = ½|p|² − fz give?</p>,
      answer: { kind: "choice", options: ["−Δu = f", "Δu = 0 always", "uₜ = Δu", "|Du| = 1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set ε = 0. What is I[u], to three decimal places?</p>,
      answer: { kind: "numeric", value: -0.042, tolerance: 0.001 },
    },
    {
      key: "minimal",
      rung: "apply",
      prompt: <p>Which Lagrangian gives the minimal surface equation?</p>,
      answer: { kind: "choice", options: ["The area integrand √(1 + |p|²)", "½|p|²", "|p|⁴", "z²"], correct: [0] },
    },
    {
      key: "newton",
      rung: "apply",
      prompt: <p>What is the Euler-Lagrange equation for L = ½mẋ² − V(x)?</p>,
      answer: { kind: "choice", options: ["mẍ = −V′(x)", "mẋ = V(x)", "ẍ = 0", "V′(x) = 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the Euler-Lagrange equation for I[w] = ∫₀¹ (½w′² − fw) dx with w(0) = w(1) = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes i′(0) = ∫ (u′v′ − fv) dx for v vanishing at the ends.",
          "Integrates by parts to get ∫ (−u″ − f)v dx = 0 for all such v.",
          "Concludes −u″ = f, using that the integral vanishes for all v.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Must a solution of the Euler-Lagrange equation be a minimiser? Give an example or a condition.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the equation only says the first variation vanishes, so critical points may be saddles or maxima.",
          "Gives an example, or the condition that convexity of L makes critical points minimisers.",
          "Mentions the second variation or the Legendre condition. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Many problems minimise one quantity while holding another fixed: energy at fixed mass, area at fixed volume.
        Lagrange multipliers carry over to function spaces, and the multiplier turns out to be an eigenvalue.
      </p>
      <p>Next, constraints.</p>
    </>
  ),
};
