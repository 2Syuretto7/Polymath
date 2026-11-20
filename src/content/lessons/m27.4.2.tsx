import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MartingaleBetViz } from "@/components/viz/MartingaleBetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.4.2",
  minutes: 90,
  links: {
    revisits: ["m27.4.1", "m9.8.4", "m27.2.1"],
    foreshadows: ["m27.4.3", "m27.4.4", "m37.4.2"],
  },

  puzzle: (
    <>
      <p>
        A gambler at a fair table bets 1 rupee. After a loss they double the stake; after the first win they stop. Every
        sequence with a win somewhere ends one rupee ahead. Surely this beats a fair game. Or is there a sense in which no
        rule for choosing stakes from the past can turn a fair game into a favourable one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare flat bets with the doubling strategy over n rounds. Watch the average fortune.</p>
      <MartingaleBetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="filtrations and adapted processes">
        <p>
          A <strong>filtration</strong> is an increasing sequence of σ-algebras{" "}
          <M>{"\\mathcal{F}_0 \\subseteq \\mathcal{F}_1 \\subseteq \\cdots"}</M>: the information available at each time. A
          process <M>{"(X_n)"}</M> is <strong>adapted</strong> if each <M>{"X_n"}</M> is <M>{"\\mathcal{F}_n"}</M>-measurable.
        </p>
      </Definition>

      <Definition title="martingales">
        <p>
          An adapted, integrable process is a <strong>martingale</strong> if{" "}
          <M>{"E[X_{n+1} \\mid \\mathcal{F}_n] = X_n"}</M> for all n; a <strong>supermartingale</strong> if{" "}
          <M>{"E[X_{n+1} \\mid \\mathcal{F}_n] \\le X_n"}</M>; a <strong>submartingale</strong> if ≥. By the tower property a
          martingale has constant mean: <M>{"E[X_n] = E[X_0]"}</M>.
        </p>
      </Definition>

      <Example title="three martingales">
        <ul>
          <li>Sums of independent mean-zero variables, such as a fair random walk.</li>
          <li>Products of independent mean-one variables, such as <M>{"\\prod_k \\xi_k"}</M> with <M>{"E[\\xi_k] = 1"}</M>.</li>
          <li>Doob&rsquo;s martingale <M>{"X_n = E[Z \\mid \\mathcal{F}_n]"}</M> for any integrable Z: successive best guesses of Z.</li>
        </ul>
      </Example>

      <Theorem title="martingale transforms: you cannot beat a fair game">
        <p>
          Let <M>{"H_n"}</M> be <strong>predictable</strong>, meaning <M>{"\\mathcal{F}_{n-1}"}</M>-measurable: the stake for
          round n is chosen before the round. If <M>{"(X_n)"}</M> is a martingale and each <M>{"H_n"}</M> is bounded, then{" "}
          <M>{"(H \\cdot X)_n = \\sum_{k \\le n} H_k (X_k - X_{k-1})"}</M> is a martingale. <strong>Proof:</strong>{" "}
          <M>{"E[H_{n+1}(X_{n+1} - X_n) \\mid \\mathcal{F}_n] = H_{n+1} E[X_{n+1} - X_n \\mid \\mathcal{F}_n] = 0"}</M>, by
          taking out what is known.
        </p>
      </Theorem>

      <Remark title="the doubling strategy">
        <p>
          After any fixed number of rounds the doubling gambler&rsquo;s expected fortune is 0: a tiny chance of a huge loss
          balances an almost sure gain of one. The gain becomes certain only if the gambler can play for unboundedly long
          with unbounded credit, and the next lesson makes that loophole precise.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition defines a martingale (besides adaptedness and integrability)?</p>,
      answer: { kind: "choice", options: ["E[Xₙ₊₁ | Fₙ] = Xₙ", "E[Xₙ₊₁] = 0", "Xₙ₊₁ ≥ Xₙ", "The increments are identically distributed"], correct: [0] },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>If X is a martingale with X₀ = 3, what is E[X₁₀]?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the doubling strategy and n = 6, what does a losing player lose?</p>,
      answer: { kind: "numeric", value: 63, tolerance: 0 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: <p>Sₙ is a fair ±1 random walk. Which of these is a martingale?</p>,
      answer: { kind: "choice", options: ["Sₙ² − n", "Sₙ²", "Sₙ + n", "|Sₙ|"], correct: [0] },
    },
    {
      key: "sub",
      rung: "apply",
      prompt: <p>If X is a martingale, what is |X|, by conditional Jensen?</p>,
      answer: { kind: "choice", options: ["A submartingale", "A supermartingale", "A martingale", "Not adapted"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if Z is integrable, then Xₙ = E[Z | Fₙ] is a martingale.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Xₙ is Fₙ-measurable and integrable.",
          "Uses the tower property, since Fₙ is contained in Fₙ₊₁.",
          "Concludes E[Xₙ₊₁ | Fₙ] = E[Z | Fₙ] = Xₙ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why must the stake Hₙ be predictable? Give a stake that uses the future and beats a fair coin.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that Hₙ must be fixed before round n is played.",
          "Gives an example such as Hₙ = Xₙ − Xₙ₋₁, which makes every round a gain.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A fixed number of rounds cannot help. What about stopping at a clever random time, such as the moment you are
        ahead?
      </p>
      <p>Next, optional stopping.</p>
    </>
  ),
};
