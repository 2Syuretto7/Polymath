import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HeatSmoothViz } from "@/components/viz/HeatSmoothViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.3.1",
  minutes: 90,
  links: {
    revisits: ["m17.1.1", "m17.2.3", "m8.3.2"],
    foreshadows: ["m17.3.2", "m17.4.3", "m37.3.3"],
  },

  puzzle: (
    <>
      <p>
        Drop a cube of ice into a cup of tea: at first the temperature jumps sharply at the edge of the ice. A moment later the
        jump has gone and the temperature varies smoothly. A plucked string keeps its corners for ever, but heat seems to
        erase them at once. What in the equation makes the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an initial temperature and move time forward a little. Watch the corners and the ripples.</p>
      <HeatSmoothViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the heat equation">
        <p>
          Let u(x, t) be the temperature of a rod. Fourier&rsquo;s law says heat flows from hot to cold at a rate proportional
          to <M>{"-u_x"}</M>; conservation of energy then gives
        </p>
        <MD>{"u_t = k\\,u_{xx},"}</MD>
        <p>
          with k &gt; 0 the diffusivity. Rescaling time we take k = 1. The same equation governs the spreading of a dye, of a
          drug in tissue, and of probability for a random walker. It is the model parabolic equation. A typical problem on{" "}
          <M>{"0 \\le x \\le 1"}</M> gives the initial temperature <M>{"u(x,0) = \\varphi(x)"}</M> and the end temperatures,
          say <M>{"u(0,t) = u(1,t) = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="solution by sine series">
        <p>If <M>{"\\varphi(x) = \\sum b_n \\sin(n\\pi x)"}</M>, the solution with both ends at 0 is</p>
        <MD>{"u(x,t) = \\sum_{n=1}^{\\infty} b_n\\, e^{-n^2\\pi^2 t} \\sin(n\\pi x)."}</MD>
        <p>
          Each term solves the equation, since differentiating once in t and twice in x both bring down{" "}
          <M>{"-n^2\\pi^2"}</M>, and each vanishes at the ends. For t &gt; 0 the factors{" "}
          <M>{"e^{-n^2\\pi^2 t}"}</M> shrink faster than any power of n, so the series may be differentiated term by term as
          often as we like: u is infinitely differentiable for every t &gt; 0, whatever the jumps in φ.
        </p>
      </Theorem>

      <Example title="a block of heat">
        <p>
          For φ = 1 on (0.3, 0.7) and 0 elsewhere, <M>{"b_n = \\tfrac{2}{n\\pi}\\big(\\cos 0.3n\\pi - \\cos 0.7n\\pi\\big)"}</M>.
          After t = 0.002 the mode n = 20 has been multiplied by <M>{"e^{-0.8\\pi^2} \\approx 0.0004"}</M> while the mode n = 1
          has barely changed. The jumps, which need high frequencies, are gone; the broad hump cools slowly, like{" "}
          <M>{"e^{-\\pi^2 t}"}</M>.
        </p>
      </Example>

      <Remark title="an arrow of time">
        <p>
          The wave equation is unchanged if t is replaced by −t; the heat equation is not. Solving it backwards would multiply
          mode n by <M>{"e^{+n^2\\pi^2 t}"}</M>, so tiny high-frequency errors in the final state would explode. The backward
          heat equation is ill-posed in Hadamard&rsquo;s sense, which is the mathematical face of the fact that mixing cannot
          be undone.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "decay",
      rung: "check",
      prompt: <p>Why do the high-frequency modes of a solution of the heat equation vanish so quickly?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mode n decays like exp(−n²π²t), so the rate grows with the square of n.",
          "High modes are not solutions of the heat equation.",
          "The ends of the rod absorb only high frequencies.",
          "All modes decay at the same rate, but high modes start smaller.",
        ],
        correct: [0],
      },
    },
    {
      key: "heat",
      rung: "check",
      prompt: <p>With both ends of the rod held at temperature 0, what happens to the total heat ∫u dx as time passes?</p>,
      answer: { kind: "choice", options: ["It falls, as heat leaks out through the ends", "It stays constant", "It rises", "It oscillates"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the rough profile and move t from 0 to about 0.005. What has happened?</p>,
      answer: {
        kind: "choice",
        options: [
          "The fast ripple has almost disappeared, while the broad hump has hardly changed.",
          "The broad hump has gone, leaving the ripple.",
          "Both have decayed by the same factor.",
          "Nothing has changed.",
        ],
        correct: [0],
      },
    },
    {
      key: "ratio",
      rung: "apply",
      prompt: <p>Mode n of the solution decays at rate n²π². How many times faster does mode 3 decay than mode 1?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "tent",
      rung: "apply",
      prompt: (
        <p>
          For the tent φ(x) = 2x on [0, ½] and 2(1 − x) on [½, 1], the sine coefficients are bₙ = 8 sin(nπ/2)/(n²π²). Give b₁
          to two decimal places.
        </p>
      ),
      answer: { kind: "numeric", value: 0.81, tolerance: 0.01 },
    },
    {
      key: "energy",
      rung: "prove",
      prompt: (
        <p>
          Let u solve <M>{"u_t = u_{xx}"}</M> on [0, 1] with u = 0 at both ends. Show that{" "}
          <M>{"E(t) = \\int_0^1 u^2\\,dx"}</M> never increases.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates under the integral: E′(t) = 2∫u uₜ dx = 2∫u uₓₓ dx.",
          "Integrates by parts, the boundary term vanishing because u = 0 at the ends, to get E′(t) = −2∫uₓ² dx.",
          "Concludes E′(t) ≤ 0, so E never increases.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could you recover yesterday&rsquo;s temperature in a rod from today&rsquo;s, if you measured today&rsquo;s very accurately? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that running time backwards multiplies mode n by a factor that grows like exp(n²π²t).",
          "Concludes that tiny measurement errors in high modes are amplified without limit, so the backward problem is ill-posed.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend where the heat equation comes from, how to solve it on a rod with cold ends by a sine series, and why the solution becomes smooth at once.",

  glimpse: (
    <p>
      Next, the maximum principle: a solution of the heat equation is never hotter inside than on its initial line and its
      ends, which gives uniqueness and stability at a stroke.
    </p>
  ),
};
