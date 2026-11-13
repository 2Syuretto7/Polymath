import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HeatKernelViz } from "@/components/viz/HeatKernelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.3.3",
  minutes: 90,
  links: {
    revisits: ["m17.3.2", "m9.7.2", "m9.8.4"],
    foreshadows: ["m17.6.2", "m17.5.3", "m37.3.3"],
  },

  puzzle: (
    <>
      <p>
        Touch a hot needle to the middle of a very long cold wire. A thermometer five metres away will not notice anything for
        a long time. Yet the heat equation predicts that the temperature there rises at once, however slightly. Is the
        equation wrong, or is something subtler going on?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch the bell curve spread, and the temperature at x = 5, for the heat kernel and for a block of heat.</p>
      <HeatKernelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the fundamental solution">
        <p>The heat kernel, or fundamental solution of <M>{"u_t = u_{xx}"}</M> on the line, is</p>
        <MD>{"\\Phi(x,t) = \\frac{1}{\\sqrt{4\\pi t}}\\, e^{-x^2/4t}, \\qquad t > 0."}</MD>
        <p>
          It solves the equation, has <M>{"\\int \\Phi(x,t)\\,dx = 1"}</M> for every t, and as t tends to 0 it concentrates at
          the origin: it is the temperature produced by one unit of heat placed at x = 0. It can be found by looking for
          solutions of the form <M>{"t^{-1/2} f(x/\\sqrt{t})"}</M>, which the scaling of the equation suggests.
        </p>
      </Definition>

      <Theorem title="solution of the initial value problem">
        <p>If φ is bounded and continuous, then</p>
        <MD>{"u(x,t) = \\int_{-\\infty}^{\\infty} \\Phi(x-y,t)\\,\\varphi(y)\\,dy"}</MD>
        <p>
          solves <M>{"u_t = u_{xx}"}</M> for t &gt; 0, is infinitely differentiable there, and tends to φ(x) as t tends to 0.
          Each point y contributes its heat φ(y) spread out as a bell curve; by linearity the contributions add.
        </p>
      </Theorem>

      <Example title="a block of heat">
        <p>
          For φ = 1 on [−1, 1] and 0 elsewhere, the integral gives{" "}
          <M>{"u(x,t) = \\tfrac12\\big[\\operatorname{erf}\\tfrac{x+1}{2\\sqrt t} - \\operatorname{erf}\\tfrac{x-1}{2\\sqrt t}\\big]"}</M>.
          The total heat stays 2. At the centre <M>{"u(0,t) = \\operatorname{erf}(1/\\sqrt{4t})"}</M>, and at any x it is
          positive for every t &gt; 0: the speed of propagation is infinite, though the far-off effect is smaller than any
          thermometer could detect.
        </p>
      </Example>

      <Remark title="heat and chance">
        <p>
          Φ(·, t) is the normal density with mean 0 and variance 2t. That is no accident: a random walker taking many small
          independent steps has, by the central limit theorem, a normal distribution of position, and the heat equation is the
          equation for its density. Einstein&rsquo;s 1905 paper on Brownian motion used exactly this link to estimate the size
          of molecules.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "area",
      rung: "check",
      prompt: <p>What is the area under the heat kernel Φ(·, t) at any time t &gt; 0?</p>,
      answer: { kind: "choice", options: ["1", "t", "1/√(4πt)", "It shrinks to 0 as t grows"], correct: [0] },
    },
    {
      key: "width",
      rung: "check",
      prompt: <p>How does the width of the bell curve Φ(·, t) grow with time?</p>,
      answer: { kind: "choice", options: ["Like √t", "Like t", "Like t²", "It stays the same"], correct: [0] },
    },
    {
      key: "peak",
      rung: "apply",
      prompt: <p>The peak height of the heat kernel is 1/√(4πt). Give it at t = 1 to two decimal places.</p>,
      answer: { kind: "numeric", value: 0.28, tolerance: 0.005 },
    },
    {
      key: "block",
      rung: "apply",
      prompt: <p>In the visualisation, with the block of heat on [−1, 1], what is the temperature at the centre at t = 1? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.52, tolerance: 0.01 },
    },
    {
      key: "speed",
      rung: "apply",
      prompt: <p>The initial temperature is zero outside [−1, 1]. Which is true of u(5, t)?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is positive for every t > 0, though extremely small when t is small.",
          "It is zero until t = 4, then positive.",
          "It is zero for all time.",
          "It is negative for small t.",
        ],
        correct: [0],
      },
    },
    {
      key: "verify",
      rung: "prove",
      prompt: <p>Show that <M>{"\\Phi(x,t) = (4\\pi t)^{-1/2} e^{-x^2/4t}"}</M> solves the heat equation <M>{"u_t = u_{xx}"}</M> for t &gt; 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes Φₜ = Φ · (x²/4t² − 1/2t), for example by differentiating log Φ = −½ log(4πt) − x²/4t.",
          "Computes Φₓ = −(x/2t)Φ and then Φₓₓ = Φ · (x²/4t² − 1/2t).",
          "Concludes that Φₜ = Φₓₓ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Infinite speed of propagation is physically impossible. Does that make the heat equation a bad model? Why is it still used?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the far-off effect is exponentially small, so the prediction is wrong only by unmeasurable amounts.",
          "Mentions that the equation comes from averaging over many molecules, where it is an excellent approximation, or names a corrected model.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the heat kernel on the line, how it solves the initial value problem by convolution, and why heat in this model travels at infinite speed.",

  glimpse: (
    <p>
      Next, Fourier series: the idea, used already for the string and the rod, that a function on an interval can be written
      as a sum of sines and cosines, and what can go wrong at a jump.
    </p>
  ),
};
