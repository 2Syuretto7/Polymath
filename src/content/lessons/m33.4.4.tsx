import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SubsolutionMaxViz } from "@/components/viz/SubsolutionMaxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.4.4",
  minutes: 90,
  links: {
    revisits: ["m33.4.3", "m17.3.2", "m17.5.2"],
    foreshadows: ["m33.5.1", "m33.6.2", "m33.5.2"],
  },

  puzzle: (
    <>
      <p>
        A metal plate is held at fixed temperatures around its edge and left to settle. Can the hottest point be in the
        middle of the plate? Intuition says no: heat would flow away from it. What is it about the equation, rather than
        the physics, that forbids an interior maximum, and does the same hold for equations with drift and absorption?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the source and the boundary values, and see where the solution is largest.</p>
      <SubsolutionMaxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the operator">
        <p>
          In this lesson L is in non-divergence form,{" "}
          <M>{"Lu = -a^{ij}u_{x_ix_j} + b^iu_{x_i} + cu"}</M>, with continuous coefficients, uniformly elliptic, acting on{" "}
          <M>{"u \\in C^2(U) \\cap C(\\bar U)"}</M> for a bounded open set U. We call u a <strong>subsolution</strong> if
          Lu ≤ 0 and a <strong>supersolution</strong> if Lu ≥ 0. For L = −Δ, subsolutions are the subharmonic functions.
        </p>
      </Definition>

      <Theorem title="the weak maximum principle">
        <p>
          If c = 0 and Lu ≤ 0 in U, then <M>{"\\max_{\\bar U} u = \\max_{\\partial U} u"}</M>. If c ≥ 0 and Lu ≤ 0, then{" "}
          <M>{"\\max_{\\bar U} u \\le \\max_{\\partial U} u^+"}</M>. The proof first treats Lu &lt; 0: at an interior maximum
          Du = 0 and the Hessian is negative semi-definite, so <M>{"a^{ij}u_{x_ix_j} \\le 0"}</M> and Lu ≥ 0, a
          contradiction. Then it perturbs u by <M>{"\\varepsilon e^{\\lambda x_1}"}</M> with λ large to make the inequality
          strict, and lets ε tend to 0.
        </p>
      </Theorem>

      <Theorem title="Hopf’s lemma and the strong maximum principle">
        <p>
          <strong>Hopf&rsquo;s lemma</strong>: if Lu ≤ 0 with c = 0, U satisfies an interior ball condition at a boundary
          point x⁰, and u attains a strict maximum there, then the outward normal derivative at x⁰ is strictly positive.
          Consequently, the <strong>strong maximum principle</strong> holds: if U is connected, c = 0 and Lu ≤ 0, and u
          attains its maximum over the closure at an interior point, then u is constant.
        </p>
      </Theorem>

      <Example title="uniqueness and comparison">
        <p>
          If c ≥ 0 and u, v both solve Lw = f with the same boundary values, applying the weak maximum principle to u − v and
          v − u gives u = v. More generally, if Lu ≤ Lv in U and u ≤ v on ∂U, then u ≤ v in U. This comparison principle
          gives bounds such as <M>{"|u| \\le \\max_{\\partial U}|g| + C\\max_U |f|"}</M>, by comparing u with a
          well-chosen barrier function.
        </p>
      </Example>

      <Remark title="when c is negative">
        <p>
          The sign condition on c matters. On (0, π), the function u = sin x solves −u″ − u = 0 with zero boundary values,
          yet it is positive inside: with c = −1, both the maximum principle and uniqueness fail. This matches the
          Fredholm picture: 1 is an eigenvalue of −d²/dx² on (0, π) with Dirichlet conditions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>What does the weak maximum principle say for a subsolution with c = 0?</p>,
      answer: { kind: "choice", options: ["Its maximum over the closure is attained on the boundary", "Its minimum is attained on the boundary", "It is constant", "It is zero on the boundary"], correct: [0] },
    },
    {
      key: "strong",
      rung: "check",
      prompt: <p>What does the strong maximum principle add, on a connected domain?</p>,
      answer: { kind: "choice", options: ["If the maximum is attained inside, u is constant", "u has no maximum at all", "u is harmonic", "The maximum is attained at every boundary point"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose f = 4 and set both boundary values to 0. What is the maximum of u?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>Why does u = sin x on (0, π) not contradict the maximum principle, though it solves −u″ − u = 0 and vanishes at the ends?</p>,
      answer: { kind: "choice", options: ["The coefficient c = −1 is negative, so the principle does not apply", "sin x is not twice differentiable", "Its maximum is on the boundary", "The interval is unbounded"], correct: [0] },
    },
    {
      key: "unique",
      rung: "apply",
      prompt: <p>How does the maximum principle give uniqueness for the Dirichlet problem when c ≥ 0?</p>,
      answer: { kind: "choice", options: ["Apply it to the difference of two solutions and its negative, both zero on the boundary", "By Lax-Milgram", "By the Fourier transform", "It does not give uniqueness"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if u is C² in U, continuous on the closure, and −Δu &lt; 0 in U, then u has no interior maximum.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes u has a maximum at an interior point x⁰.",
          "Notes that at x⁰ each pure second derivative of u is at most 0, so Δu(x⁰) ≤ 0.",
          "Concludes −Δu(x⁰) ≥ 0, contradicting −Δu < 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the weak maximum principle to show that if −Δu = f in U and u = 0 on the boundary, with f ≥ 0, then u ≥ 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the principle to −u, which satisfies −Δ(−u) = −f ≤ 0.",
          "Concludes the maximum of −u is on the boundary, where it is 0.",
          "Deduces −u ≤ 0, that is u ≥ 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Elliptic equations describe states of equilibrium. Letting time back in, the same operators drive evolution
        towards equilibrium, and the methods of weak solutions and energy carry over with one more variable.
      </p>
      <p>Next, parabolic equations.</p>
    </>
  ),
};
