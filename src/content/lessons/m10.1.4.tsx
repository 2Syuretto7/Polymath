import { M, MD } from "@/components/Math";
import { Example, Remark } from "@/components/lesson/Blocks";
import { OdeModelsViz } from "@/components/viz/OdeModelsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.1.4",
  minutes: 90,
  links: {
    revisits: ["m10.1.1", "m10.1.2", "m0.4.1"],
    foreshadows: ["m10.5.1", "m10.3.4", "m36.1.4"],
  },

  puzzle: (
    <>
      <p>
        A body is found in a room at 25 °C. At 9 a.m. its temperature is 30 °C; at 10 a.m. it is 28 °C. Assuming it was 37 °C
        at death, when did death occur? Detectives have used exactly this calculation, and it rests on a one-line differential
        equation. How do we get from a physical law to an equation, and how much should we trust the answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Explore three models, each obtained from a simple rule about rates of change.</p>
      <OdeModelsViz />
    </>
  ),

  theory: (
    <>
      <Example title="Newton's law of cooling">
        <p>
          The rate of cooling is proportional to the difference from the surroundings:{" "}
          <M>{"T' = -k(T - T_a)"}</M>. This is linear (and separable), with solution{" "}
          <M>{"T(t) = T_a + (T_0 - T_a)e^{-kt}"}</M>. In the puzzle, two readings fix <M>{"k"}</M>:{" "}
          <M>{"3/5 = e^{-k}"}</M>, so <M>{"k = \\ln(5/3)"}</M> per hour, and solving <M>{"12 = 5e^{k s}"}</M> for the time{" "}
          <M>{"s"}</M> before 9 a.m. gives <M>{"s = \\ln(2.4)/\\ln(5/3) \\approx 1.7"}</M> hours, so death occurred at about
          7.15 a.m.
        </p>
      </Example>

      <Example title="logistic growth">
        <p>
          Growth proportional to the population is slowed as resources run out: <M>{"P' = rP(1 - P/K)"}</M>. Separating
          variables gives
        </p>
        <MD>{"P(t) = \\frac{K}{1 + \\frac{K - P_0}{P_0}e^{-rt}}."}</MD>
        <p>The population rises in an S-curve towards the carrying capacity <M>{"K"}</M>, growing fastest at <M>{"P = K/2"}</M>.</p>
      </Example>

      <Example title="a mixing tank">
        <p>
          Brine with <M>{"c"}</M> grams of salt per litre flows into a well-stirred 100-litre tank at <M>{"r"}</M> litres per
          minute, and the mixture flows out at the same rate. The salt <M>{"A(t)"}</M> obeys &ldquo;rate in minus rate
          out&rdquo;: <M>{"A' = rc - \\frac{r}{100}A"}</M>, a linear equation whose solution approaches <M>{"100c"}</M>.
        </p>
      </Example>

      <Remark title="the modelling cycle">
        <p>
          Modelling means choosing variables, stating assumptions as a rate law, solving, and checking the predictions against
          data. Each model above rests on simplifications, such as perfect mixing or constant surroundings. When predictions
          fail, the assumptions are what we revise. Equilibria and their stability, studied later, often matter more than exact
          formulas.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eq",
      rung: "check",
      prompt: <p>In Newton&rsquo;s law of cooling T′ = −k(T − Tₐ), what is the equilibrium temperature?</p>,
      answer: { kind: "choice", options: ["0", "Tₐ", "T₀", "k"], correct: [1] },
    },
    {
      key: "cap",
      rung: "check",
      prompt: <p>For P′ = 0.5P(1 − P/200), what is the carrying capacity?</p>,
      answer: { kind: "numeric", value: 200 },
    },
    {
      key: "tea",
      rung: "apply",
      prompt: <p>Tea at 90 °C cools in a 20 °C room with k = 0.1 per minute. What is its temperature after 10 minutes, to one decimal place?</p>,
      answer: { kind: "numeric", value: 20 + 70 * Math.exp(-1), tolerance: 0.1 },
    },
    {
      key: "tank",
      rung: "apply",
      prompt: <p>In the 100-litre tank with inflow concentration 0.5 g per litre, how much salt is there in the long run, in grams?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "fast",
      rung: "apply",
      prompt: <p>At what population does logistic growth with K = 1000 grow fastest?</p>,
      answer: { kind: "numeric", value: 500 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the formula T(t) = Tₐ + (T₀ − Tₐ)e^(−kt) from T′ = −k(T − Tₐ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Substitutes u = T − Tₐ to get u′ = −ku.",
          "Solves to u = u₀e^(−kt) with u₀ = T₀ − Tₐ.",
          "Converts back to T.",
        ],
      },
    },
    {
      key: "harvest",
      rung: "stretch",
      prompt: <p>A fishery follows logistic growth with r = 0.5 per year and K = 1000 tonnes, and a constant catch of h tonnes per year is taken: P′ = 0.5P(1 − P/1000) − h. What is the largest catch that the population can sustain for ever? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Looks for equilibria where 0.5P(1 − P/1000) = h.",
          "Notes the left side is largest at P = 500, with value 125.",
          "Concludes h = 125 tonnes is the maximum sustainable catch, with any larger catch driving the population to collapse. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Newton's law of cooling, logistic growth and a mixing tank each lead to a first-order equation, how to solve each, how to use data to fix a constant as in the time-of-death problem, and the cycle of modelling and checking assumptions.",

  glimpse: (
    <p>
      The next chapter asks when an initial value problem has exactly one solution. Equilibria and stability, oscillations,
      and the chaotic logistic map come later.
    </p>
  ),
};
