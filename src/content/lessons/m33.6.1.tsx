import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BolzaSawtoothViz } from "@/components/viz/BolzaSawtoothViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.6.1",
  minutes: 90,
  links: {
    revisits: ["m33.4.2", "m23.4.1", "m33.3.4"],
    foreshadows: ["m33.6.2", "m33.6.3", "m33.4.3"],
  },

  puzzle: (
    <>
      <p>
        Dirichlet&rsquo;s principle says that the solution of Laplace&rsquo;s equation is the function minimising the energy
        ∫|Du|². Riemann used it freely; Weierstrass then gave an energy whose infimum is never attained. If a lower bound
        exists, why need there be a function that reaches it, and what extra hypotheses would guarantee one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add teeth to the sawtooth, and compare its energy with the energy of its limit.</p>
      <BolzaSawtoothViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the calculus of variations">
        <p>
          Given a <strong>Lagrangian</strong> L(p, z, x), consider the functional{" "}
          <M>{"I[w] = \\int_U L(Dw, w, x)\\,dx"}</M> over functions w with prescribed boundary values g. The aim is to find a
          minimiser. The <strong>direct method</strong> proceeds in three steps: take a minimising sequence{" "}
          <M>{"u_k"}</M> with <M>{"I[u_k] \\to \\inf I"}</M>; extract a subsequence converging in some weak sense to u; and
          show <M>{"I[u] \\le \\liminf I[u_k]"}</M>, so that u is a minimiser.
        </p>
      </Definition>

      <Theorem title="coercivity and lower semicontinuity">
        <p>
          Suppose 1 &lt; q &lt; ∞ and L is <strong>coercive</strong>,{" "}
          <M>{"L(p, z, x) \\ge \\alpha|p|^q - \\beta"}</M> with α &gt; 0. Then a minimising sequence is bounded in{" "}
          <M>{"W^{1,q}"}</M>, and by reflexivity has a subsequence converging weakly. If moreover L is bounded below and
          the map p ↦ L(p, z, x) is <strong>convex</strong>, then I is weakly lower semicontinuous on{" "}
          <M>{"W^{1,q}"}</M>. Together these give: there is at least one minimiser among the w in{" "}
          <M>{"W^{1,q}(U)"}</M> with w = g on the boundary.
        </p>
      </Theorem>

      <Example title="Bolza’s example">
        <p>
          On (0, 1) with zero boundary values, let <M>{"I[w] = \\int_0^1 ((w'^2 - 1)^2 + w^2)\\,dx"}</M>. Sawtooth
          functions with slopes ±1 and n teeth have <M>{"I = 1/(12n^2)"}</M>, so the infimum is 0. A minimiser would need
          w = 0 and |w′| = 1 almost everywhere, which is impossible. The integrand is not convex in w′: weakly, the sawtooth
          converges to 0, and I jumps up from 0 to 1 at the limit.
        </p>
      </Example>

      <Remark title="relaxation and Young measures">
        <p>
          Non-convex problems are central in materials science, where crystals form fine-scale twins that mimic
          Bolza&rsquo;s sawtooth. One studies the <strong>relaxed</strong> functional, built from the convex envelope of L,
          whose minimisers describe averaged behaviour, and Young measures, introduced by L. C. Young, which record the
          distribution of gradients in a fine oscillation. For vector-valued u, convexity can be weakened to
          quasiconvexity, as in Morrey&rsquo;s and Ball&rsquo;s work on nonlinear elasticity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "steps",
      rung: "check",
      prompt: <p>What are the steps of the direct method?</p>,
      answer: { kind: "choice", options: ["Take a minimising sequence, extract a weakly convergent subsequence, and use lower semicontinuity", "Solve the Euler-Lagrange equation explicitly", "Guess the answer and verify it", "Use the maximum principle"], correct: [0] },
    },
    {
      key: "convex",
      rung: "check",
      prompt: <p>Which property of L in the gradient variable gives weak lower semicontinuity?</p>,
      answer: { kind: "choice", options: ["Convexity", "Linearity", "Periodicity", "Being bounded above"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the energy ∫(u′² − 1)² + u², what is I at the weak limit u = 0?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "saw",
      rung: "apply",
      prompt: <p>For Bolza&rsquo;s energy, what is I on the sawtooth with n = 5 teeth? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0033, tolerance: 0.0005 },
    },
    {
      key: "coerc",
      rung: "apply",
      prompt: <p>What does coercivity provide in the direct method?</p>,
      answer: { kind: "choice", options: ["A bound on minimising sequences in the Sobolev space, hence weak compactness", "Uniqueness of the minimiser", "Smoothness of the minimiser", "Convexity of the functional"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that I[w] = ∫|Dw|² over H¹₀(U) has a minimiser, using that the norm is weakly lower semicontinuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a minimising sequence and bounds it in H¹₀, using the Poincaré inequality.",
          "Extracts a subsequence converging weakly in H¹₀ to some u, by reflexivity.",
          "Uses weak lower semicontinuity of the norm to conclude I[u] ≤ liminf I[uₖ] = inf I.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does Bolza&rsquo;s example have no minimiser, even though the infimum is finite?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a minimiser would need w = 0 and |w′| = 1 at once.",
          "Notes that minimising sequences oscillate and converge weakly to 0, where I = 1.",
          "Connects this to the lack of convexity in w′. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A minimiser exists, but what equation does it satisfy? Varying it slightly and asking that the energy not decrease
        produces a differential equation.
      </p>
      <p>Next, Euler-Lagrange equations.</p>
    </>
  ),
};
