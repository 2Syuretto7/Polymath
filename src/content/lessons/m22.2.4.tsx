import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { FatouGapViz } from "@/components/viz/FatouGapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.2.4",
  minutes: 85,
  links: {
    revisits: ["m22.2.3", "m6.2.5", "m22.2.2"],
    foreshadows: ["m22.2.5", "m22.5.2", "m22.4.2"],
  },

  puzzle: (
    <>
      <p>
        A light switches between the left half of a room and the right half, every second. Each moment, half the room is lit.
        Ask, for each spot, whether it is eventually always lit: no spot is. So the amount of room &lsquo;eventually always
        lit&rsquo; is 0, while the amount lit at each moment is one half. Can the inequality ever go the other way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare each fₙ with the infimum of all later functions.</p>
      <FatouGapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Fatou's lemma (1906)">
        <p>For any measurable <M>{"f_n \\ge 0"}</M>,</p>
        <MD>{"\\int \\liminf_{n \\to \\infty} f_n \\, d\\mu \\le \\liminf_{n \\to \\infty} \\int f_n \\, d\\mu."}</MD>
      </Theorem>

      <Example title="proof from monotone convergence">
        <p>
          Let <M>{"g_n = \\inf_{m \\ge n} f_m"}</M>. Each <M>{"g_n"}</M> is measurable and non-negative, the <M>{"g_n"}</M>{" "}
          increase, and their limit is <M>{"\\liminf f_n"}</M> by definition. Since <M>{"g_n \\le f_m"}</M> for every{" "}
          <M>{"m \\ge n"}</M>, we have <M>{"\\int g_n \\le \\inf_{m \\ge n} \\int f_m"}</M>. Let <M>{"n \\to \\infty"}</M>: by
          monotone convergence the left side tends to <M>{"\\int \\liminf f_n"}</M>, and the right side to{" "}
          <M>{"\\liminf \\int f_n"}</M>.
        </p>
      </Example>

      <Remark title="strictness and the sign condition">
        <p>
          The alternating halves give <M>{"0 < \\tfrac12"}</M>, and the spikes give <M>{"0 < 1"}</M>: the inequality can be
          strict. Non-negativity matters. With <M>{"f_n = -\\mathbf{1}_{[n, n+1]}"}</M>, the lim inf is 0 everywhere but every
          integral is <M>{"-1"}</M>, so the inequality fails.
        </p>
      </Remark>

      <Theorem title="dominated convergence from Fatou">
        <p>
          If <M>{"|f_n| \\le g"}</M> with <M>g</M> integrable and <M>{"f_n \\to f"}</M>, apply Fatou to the non-negative
          functions <M>{"g + f_n"}</M> and <M>{"g - f_n"}</M>. Cancelling the finite <M>{"\\int g"}</M> gives{" "}
          <M>{"\\int f \\le \\liminf \\int f_n"}</M> and <M>{"\\int f \\ge \\limsup \\int f_n"}</M>, so{" "}
          <M>{"\\int f_n \\to \\int f"}</M>. This is the standard proof.
        </p>
      </Theorem>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Fatou&rsquo;s lemma say for non-negative measurable fₙ?</p>,
      answer: { kind: "choice", options: ["The integral of lim inf fₙ is at most the lim inf of the integrals", "The integral of lim inf fₙ is at least the lim inf of the integrals", "The integrals always converge", "lim inf fₙ is integrable"], correct: [0] },
    },
    {
      key: "gn",
      rung: "check",
      prompt: <p>In the proof, what are the functions gₙ?</p>,
      answer: { kind: "choice", options: ["The infimum of fₘ over m ≥ n", "The supremum of fₘ over m ≥ n", "The partial sums of the fₙ", "Simple functions below fₙ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s alternating example, what is the integral of lim inf fₙ?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "liminf",
      rung: "apply",
      prompt: <p>In the same example, what is the lim inf of the integrals of fₙ?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>Take fₙ = −1 on [n, n+1] and 0 elsewhere. Which is true?</p>,
      answer: { kind: "choice", options: ["The integral of lim inf fₙ is 0, the lim inf of the integrals is −1, so Fatou’s conclusion fails", "Fatou’s conclusion holds", "fₙ is not measurable", "The integrals are 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Fatou&rsquo;s lemma from the monotone convergence theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines gₙ as the infimum of fₘ over m ≥ n and notes the gₙ are measurable, non-negative and increase to lim inf fₙ.",
          "Observes gₙ ≤ fₘ for m ≥ n, so the integral of gₙ is at most the infimum of the integrals of fₘ over m ≥ n.",
          "Applies monotone convergence to the gₙ and lets n → ∞ to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Fatou&rsquo;s lemma to prove the dominated convergence theorem, at least in outline.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Fatou to g + fₙ and g − fₙ, which are non-negative.",
          "Cancels the finite integral of g to get the integral of f ≤ lim inf and ≥ lim sup of the integrals of fₙ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With the three convergence theorems in hand, the Lebesgue integral is ready to be compared with the Riemann integral
        it was built to replace. Does it agree where both make sense, and what does it gain?
      </p>
      <p>
        Next, the comparison: every Riemann integrable function is Lebesgue integrable with the same integral, Lebesgue&rsquo;s
        criterion explained by measure, and the improper integrals where the two part ways.
      </p>
    </>
  ),
};
