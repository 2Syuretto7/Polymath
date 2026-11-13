import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InitialDataViz } from "@/components/viz/InitialDataViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.2.3",
  minutes: 85,
  links: {
    revisits: ["m10.2.2", "m10.1.2", "m19.1.2"],
    foreshadows: ["m10.5.2", "m36.5.3", "m19.6.2"],
  },

  puzzle: (
    <>
      <p>
        No measurement is exact. If a model&rsquo;s prediction depended wildly on the fourth decimal place of the starting
        value, it would be useless. Does a small error in the initial data always lead to a small error in the solution, and
        for how long?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two solutions start a distance δ apart. Watch their gap, and compare it with the dashed exponential bound. Try each
        equation, and halve δ.
      </p>
      <InitialDataViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Gronwall's inequality">
        <p>
          Let <M>{"u \\ge 0"}</M> be continuous on <M>{"[t_0, t_1]"}</M>, and suppose that for constants{" "}
          <M>{"C \\ge 0"}</M> and <M>{"L \\ge 0"}</M>,
        </p>
        <MD>{"u(t) \\le C + L\\int_{t_0}^{t} u(s)\\,ds."}</MD>
        <p>Then <M>{"u(t) \\le Ce^{L(t - t_0)}"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"U(t) = C + L\\int_{t_0}^t u"}</M>. Then <M>{"U' = Lu \\le LU"}</M>, so{" "}
          <M>{"(e^{-L(t - t_0)}U)' \\le 0"}</M>, and <M>{"U(t) \\le U(t_0)e^{L(t - t_0)} = Ce^{L(t - t_0)}"}</M>. Finally{" "}
          <M>{"u \\le U"}</M>.
        </p>
      </Proof>

      <Theorem title="continuous dependence on initial data">
        <p>
          If <M>{"f"}</M> is Lipschitz in <M>{"y"}</M> with constant <M>{"L"}</M>, and <M>{"y"}</M>, <M>{"z"}</M> solve{" "}
          <M>{"y' = f(t, y)"}</M> with <M>{"y(t_0) = y_0"}</M> and <M>{"z(t_0) = z_0"}</M>, then
        </p>
        <MD>{"|y(t) - z(t)| \\le |y_0 - z_0|\\,e^{L|t - t_0|}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Subtract the integral equations: for <M>{"t \\ge t_0"}</M>,{" "}
          <M>{"|y(t) - z(t)| \\le |y_0 - z_0| + \\int_{t_0}^t |f(s, y) - f(s, z)|\\,ds \\le |y_0 - z_0| + L\\int_{t_0}^t |y - z|"}</M>.
          Apply Gronwall with <M>{"u = |y - z|"}</M> and <M>{"C = |y_0 - z_0|"}</M>. Taking <M>{"y_0 = z_0"}</M> gives
          uniqueness again.
        </p>
      </Proof>

      <Example title="the bound can be sharp">
        <p>
          For <M>{"y' = y"}</M>, solutions are <M>{"y_0e^t"}</M>, and two of them differ by exactly{" "}
          <M>{"|y_0 - z_0|e^t"}</M>. For <M>{"y' = -y"}</M> the gap shrinks like <M>{"e^{-t}"}</M>, but the Lipschitz constant
          is still 1, so the bound is loose.
        </p>
      </Example>

      <Remark title="continuous, but not forever">
        <p>
          On a fixed interval <M>{"[t_0, t_0 + T]"}</M>, making <M>{"\\delta"}</M> small makes the error small. But the bound
          grows like <M>{"e^{LT}"}</M>, so predicting twice as far ahead may need the start known to many more digits. This is
          the seed of sensitive dependence in chaotic systems. A problem with existence, uniqueness and continuous dependence
          is called <strong>well posed</strong>, in Hadamard&rsquo;s sense.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gron",
      rung: "check",
      prompt: <p>What does Gronwall&rsquo;s inequality conclude from <M>{"u(t) \\le C + L\\int_{t_0}^t u"}</M>?</p>,
      answer: { kind: "choice", options: ["u(t) ≤ C", "u(t) ≤ Ce^(L(t − t₀))", "u(t) ≤ CL", "u is constant"], correct: [1] },
    },
    {
      key: "bound",
      rung: "check",
      prompt: <p>With <M>{"\\delta = 0.01"}</M> and <M>{"L = 2"}</M>, what is the Gronwall bound on the gap at time <M>{"t_0 + 1"}</M>?</p>,
      answer: { kind: "numeric", value: 0.01 * Math.exp(2), tolerance: 0.0005 },
    },
    {
      key: "delta",
      rung: "apply",
      prompt: <p>With <M>{"L = 1"}</M>, how small must the initial error <M>{"\\delta"}</M> be to guarantee a gap of at most 0.1 at time <M>{"t_0 + 2"}</M>?</p>,
      answer: { kind: "numeric", value: 0.1 * Math.exp(-2), tolerance: 0.0005 },
    },
    {
      key: "chaos",
      rung: "apply",
      prompt: <p>Why does continuous dependence not contradict the butterfly effect?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because chaotic systems are not Lipschitz.",
          "Because the bound only controls errors over a fixed time, and grows exponentially as that time grows.",
          "Because butterflies are not modelled by ODEs.",
          "Because continuous dependence fails for every nonlinear equation.",
        ],
        correct: [1],
      },
    },
    {
      key: "well",
      rung: "apply",
      prompt: <p>Which three properties make an initial value problem well posed in Hadamard&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Existence, uniqueness and continuous dependence on the data",
          "Linearity, stability and periodicity",
          "Boundedness, smoothness and positivity",
          "Existence, explicit formula and convergence",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Gronwall&rsquo;s inequality to prove that two solutions with the same initial value agree for <M>{"t \\ge t_0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes |y − z| ≤ L ∫ |y − z| from the integral equations and the Lipschitz bound.",
          "Applies Gronwall with C = 0.",
          "Concludes |y − z| ≤ 0, so y = z.",
        ],
      },
    },
    {
      key: "forecast",
      rung: "stretch",
      prompt: <p>Suppose errors grow like <M>{"\\delta e^{t}"}</M>. To forecast twice as far ahead with the same final accuracy, how much more precise must the starting data be?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets δe^T = ε and δ′e^(2T) = ε.",
          "Finds δ′ = δe^(−T): the precision must improve by a further factor e^T, not merely double.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Gronwall's inequality and its proof, how it bounds the gap between two solutions, why the bound can be sharp, and why exponential growth limits long-range prediction.",

  glimpse: (
    <p>
      Lyapunov functions later give sharper control of how solutions approach equilibria. Chaotic dynamics makes exponential
      divergence precise, and numerical analysis meets the same growth when it studies stiff equations.
    </p>
  ),
};
