import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GamblerRuinViz } from "@/components/viz/GamblerRuinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.8.4",
  minutes: 90,
  links: {
    revisits: ["m9.8.3", "m9.6.1", "m9.7.2"],
    foreshadows: ["m27.4.2", "m37.1.1", "m27.2.2"],
  },

  puzzle: (
    <>
      <p>
        A gambler with 10 rupees plays a fair game, betting one rupee at a time, and stops on reaching 20 or going broke. What
        is the chance of doubling up? Now suppose the casino has a tiny edge, so each bet is won with probability 0.47. How much
        does that change things? And in a fair game with no target, is ruin eventually certain?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the starting money, the target and the chance of winning each bet.</p>
      <GamblerRuinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple random walk">
        <p>
          Let <M>{"S_n = S_0 + Y_1 + \\cdots + Y_n"}</M>, where the <M>{"Y_i"}</M> are independent, each <M>{"+1"}</M> with
          probability <M>{"p"}</M> and <M>{"-1"}</M> with probability <M>{"q = 1 - p"}</M>. It is a Markov chain on the
          integers; it is <strong>symmetric</strong> when <M>{"p = \\tfrac12"}</M>.
        </p>
      </Definition>

      <Theorem title="gambler's ruin">
        <p>Starting from <M>{"k"}</M>, with absorbing barriers at 0 and <M>{"N"}</M>, the probability <M>{"h_k"}</M> of reaching <M>{"N"}</M> first is</p>
        <MD>{"h_k = \\frac{k}{N} \;\; (p = \\tfrac12), \\qquad h_k = \\frac{1 - (q/p)^k}{1 - (q/p)^N} \;\; (p \\ne \\tfrac12)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Condition on the first step: <M>{"h_k = p\\,h_{k+1} + q\\,h_{k-1}"}</M> for <M>{"0 < k < N"}</M>, with{" "}
          <M>{"h_0 = 0"}</M> and <M>{"h_N = 1"}</M>. Rewriting, <M>{"h_{k+1} - h_k = (q/p)(h_k - h_{k-1})"}</M>, so the
          differences form a geometric sequence. Summing them and using <M>{"h_N = 1"}</M> gives the formulas.
        </p>
      </Proof>

      <Example title="a small edge">
        <p>
          With <M>{"k = 10"}</M>, <M>{"N = 20"}</M>: a fair game gives <M>{"h = 0.5"}</M>. With <M>{"p = 0.47"}</M>,{" "}
          <M>{"q/p \\approx 1.128"}</M> and <M>{"h \\approx 0.23"}</M>. Over many bets, a small bias is magnified.
        </p>
      </Example>

      <Theorem title="recurrence in one dimension">
        <p>
          The symmetric walk on the integers returns to its starting point with probability 1, and so visits every integer
          infinitely often. Letting <M>{"N \\to \\infty"}</M> in <M>{"h_k = k/N"}</M> shows a fair gambler with no target is
          ruined with probability 1, although the expected waiting time is infinite.
        </p>
      </Theorem>

      <Remark title="higher dimensions and limits">
        <p>
          Pólya proved that the symmetric walk is recurrent in one and two dimensions but transient in three or more: &ldquo;a
          drunk man will find his way home, but a drunk bird may get lost for ever.&rdquo; Rescaled in space by{" "}
          <M>{"\\sqrt n"}</M>, the walk converges to Brownian motion, the central limit theorem applied to whole paths.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fair",
      rung: "check",
      prompt: <p>In a fair game, a gambler starts with 30 rupees and stops at 0 or 100. What is the probability of reaching 100?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "rec",
      rung: "check",
      prompt: <p>In which dimensions is the symmetric simple random walk recurrent?</p>,
      answer: { kind: "choice", options: ["One", "Two", "Three", "Every dimension"], correct: [0, 1] },
    },
    {
      key: "bias",
      rung: "apply",
      prompt: <p>With p = 0.47, k = 10 and N = 20, what is the probability of reaching 20? Give three decimal places.</p>,
      answer: { kind: "numeric", value: (1 - (0.53 / 0.47) ** 10) / (1 - (0.53 / 0.47) ** 20), tolerance: 0.003 },
    },
    {
      key: "first",
      rung: "apply",
      prompt: <p>Which equation does conditioning on the first step give for hₖ?</p>,
      answer: { kind: "choice", options: ["hₖ = p hₖ₊₁ + q hₖ₋₁", "hₖ = hₖ₊₁ hₖ₋₁", "hₖ = k/N always", "hₖ = p + q"], correct: [0] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>A symmetric walk starts at 0. What is the probability that it is back at 0 after exactly 2 steps?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for the fair game, hₖ = k/N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Derives hₖ = (hₖ₊₁ + hₖ₋₁)/2 by conditioning on the first step.",
          "Concludes the differences hₖ₊₁ − hₖ are constant, so hₖ is linear in k.",
          "Uses h₀ = 0 and h_N = 1 to get k/N.",
        ],
      },
    },
    {
      key: "dur",
      rung: "stretch",
      prompt: <p>For the fair game, the expected number of bets until the game ends, starting from k, is k(N − k). How long does a game from 10 with target 20 last on average? Why might this surprise a gambler?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes 10 × 10 = 100 bets.",
          "Comments that the game lasts much longer than the 10-step distance suggests, because the walk wanders back and forth.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the simple random walk, the gambler's ruin probabilities and their proof by conditioning on the first step, why a small house edge matters so much, recurrence in one dimension, and Pólya's theorem about higher dimensions.",

  glimpse: (
    <p>
      This completes the course. Martingales, ergodic theorems and stochastic calculus all grow from the random walk and
      the chains studied here.
    </p>
  ),
};
