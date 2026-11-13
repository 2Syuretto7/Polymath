import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ContinuousFamiliesViz } from "@/components/viz/ContinuousFamiliesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.3.2",
  minutes: 90,
  links: {
    revisits: ["m9.3.1", "m9.2.2", "m2.8.2"],
    foreshadows: ["m9.3.3", "m9.4.1", "m9.7.2"],
  },

  puzzle: (
    <>
      <p>
        A light bulb has been burning for 500 hours. Is it now more likely to fail soon than a new one? For many machines yes,
        since parts wear out. But for some things, such as a radioactive atom, having survived so far tells you nothing at
        all. What shape must the waiting-time density have for the past to be irrelevant?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try each family and its parameters. For the exponential, slide how long you have already waited.</p>
      <ContinuousFamiliesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="uniform">
        <p>
          <M>{"X \\sim \\operatorname{Unif}(a, b)"}</M> has density <M>{"1/(b - a)"}</M> on <M>{"[a, b]"}</M>: probability is
          proportional to length. Its mean is <M>{"(a + b)/2"}</M> and its variance <M>{"(b - a)^2/12"}</M>.
        </p>
      </Definition>

      <Definition title="normal">
        <p><M>{"X \\sim N(\\mu, \\sigma^2)"}</M> has density</p>
        <MD>{"f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-(x - \\mu)^2/(2\\sigma^2)},"}</MD>
        <p>
          with mean <M>{"\\mu"}</M> and variance <M>{"\\sigma^2"}</M>. The constant <M>{"\\sqrt{2\\pi}"}</M> comes from{" "}
          <M>{"\\int e^{-x^2/2}\\,dx = \\sqrt{2\\pi}"}</M>, best computed by squaring and using polar coordinates.
        </p>
      </Definition>

      <Theorem title="standardising">
        <p>
          If <M>{"X \\sim N(\\mu, \\sigma^2)"}</M>, then <M>{"Z = (X - \\mu)/\\sigma \\sim N(0, 1)"}</M>. So every normal
          probability is a standard normal one, and about 68%, 95% and 99.7% of the mass lies within 1, 2 and 3 standard
          deviations of the mean.
        </p>
      </Theorem>

      <Definition title="exponential">
        <p>
          <M>{"X \\sim \\operatorname{Exp}(\\lambda)"}</M> has density <M>{"\\lambda e^{-\\lambda x}"}</M> for{" "}
          <M>{"x \\ge 0"}</M>, so <M>{"P(X > t) = e^{-\\lambda t}"}</M>. Its mean is <M>{"1/\\lambda"}</M> and its variance{" "}
          <M>{"1/\\lambda^2"}</M>. It is the continuous cousin of the geometric distribution: the waiting time for an event
          that happens at rate <M>{"\\lambda"}</M>.
        </p>
      </Definition>

      <Theorem title="memorylessness">
        <p>For <M>{"s, t \\ge 0"}</M>, <M>{"P(X > s + t \\mid X > s) = P(X > t)"}</M>.</p>
      </Theorem>

      <Proof>
        <MD>{"P(X > s + t \\mid X > s) = \\frac{P(X > s + t)}{P(X > s)} = \\frac{e^{-\\lambda(s + t)}}{e^{-\\lambda s}} = e^{-\\lambda t}."}</MD>
      </Proof>

      <Remark title="the only memoryless density">
        <p>
          Conversely, if <M>{"G(t) = P(X > t)"}</M> is memoryless then <M>{"G(s + t) = G(s)G(t)"}</M>, and a monotone function
          with this property must be <M>{"e^{-\\lambda t}"}</M>. So the exponential is the only continuous memoryless
          distribution, as the geometric is the only discrete one.
        </p>
      </Remark>

      <Example title="where they appear">
        <p>
          Uniforms model a random point or a rounding error. Normals model sums of many small effects, which the central limit
          theorem will explain. Exponentials model times between radioactive decays, calls to a helpline, or arrivals at a
          shop.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "unif",
      rung: "check",
      prompt: <p>X is uniform on [0, 10]. What is P(X &gt; 7)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "rule",
      rung: "check",
      prompt: <p>Roughly what fraction of a normal distribution lies within two standard deviations of its mean?</p>,
      answer: { kind: "choice", options: ["50%", "68%", "95%", "99.7%"], correct: [2] },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>X ~ Exp(λ) with λ = 2 per hour. What is the mean waiting time, in hours?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "tail",
      rung: "apply",
      prompt: <p>X ~ Exp(0.5). What is P(X &gt; 4), to four decimal places?</p>,
      answer: { kind: "numeric", value: Math.exp(-2), tolerance: 0.0005 },
    },
    {
      key: "bulb",
      rung: "apply",
      prompt: <p>A component&rsquo;s lifetime is exponential with mean 1000 hours. It has already run for 500 hours. What is the probability it runs at least another 1000 hours, to four decimal places?</p>,
      answer: { kind: "numeric", value: Math.exp(-1), tolerance: 0.0005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if X ~ N(μ, σ²) then Z = (X − μ)/σ has the standard normal density.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes P(Z ≤ z) = P(X ≤ μ + σz) as an integral of the normal density.",
          "Substitutes u = (x − μ)/σ, with dx = σ du.",
          "Obtains the integral of e^(−u²/2)/√(2π) up to z, the standard normal CDF.",
        ],
      },
    },
    {
      key: "heights",
      rung: "stretch",
      prompt: <p>Adult heights in a population are roughly N(170, 10²) in centimetres. Estimate the fraction taller than 190 cm, and say whether you trust a normal model for the fraction taller than 230 cm.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Standardises 190 to z = 2 and uses the 95% rule to estimate about 2.5%.",
          "Notes that far tails of real data often depart from the normal model.",
          "Reaches a view on trusting the model. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the uniform, normal and exponential densities with their means and variances, how standardising reduces every normal to the standard one, the 68, 95 and 99.7 rule, and why the exponential is memoryless.",

  glimpse: (
    <p>
      The next lesson shows that a uniform random number can be turned into a sample from any distribution. Moment
      generating functions and the central limit theorem explain why the normal appears everywhere.
    </p>
  ),
};
