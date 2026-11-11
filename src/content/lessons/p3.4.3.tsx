import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { UpdateViz } from "@/components/viz/UpdateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.4.3",
  minutes: 70,
  links: {
    revisits: ["p3.4.1", "p3.3.3"],
    parallels: ["m9.1.4"],
    foreshadows: ["p10.7.2", "p16.4.3", "p23.4.4"],
  },

  puzzle: (
    <>
      <p>
        A friend hands you a coin. It might be an ordinary coin, or it might be a trick coin from a magic shop that lands
        heads 80% of the time; you think the trick coin is unlikely, perhaps one chance in five. You toss it: heads. Then
        heads again. Then tails.
      </p>
      <p>
        How confident should you be now that it is the trick coin? Not &ldquo;certain&rdquo;, not &ldquo;no idea&rdquo;,
        but how confident, exactly? And how should each new toss change your mind?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each toss is a little piece of evidence. Heads is more likely from the trick coin than from a fair one, so it
        nudges you towards &ldquo;trick&rdquo;; tails nudges you back. The size of each nudge depends on how much more
        likely the result is under one hypothesis than the other, and where you end up depends on where you started. Set a
        prior and toss.
      </p>
      <UpdateViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Bayes' theorem">
        <p>For a hypothesis H and evidence E with <span className="mono">P(E) &gt; 0</span>,</p>
        <p className="mono" style={{ textAlign: "center" }}>P(H | E) = P(E | H) × P(H) / P(E).</p>
      </Theorem>
      <Proof>
        <p>
          The and rule can be applied in either order: <span className="mono">P(H and E) = P(H) × P(E | H)</span> and{" "}
          <span className="mono">P(H and E) = P(E) × P(H | E)</span>. Set these equal and divide by{" "}
          <span className="mono">P(E)</span>.
        </p>
      </Proof>
      <p>
        <span className="mono">P(H)</span> is the <strong>prior</strong>, how likely H was before the evidence.{" "}
        <span className="mono">P(H | E)</span> is the <strong>posterior</strong>. <span className="mono">P(E | H)</span> is
        the <strong>likelihood</strong> of the evidence on the hypothesis. The base-rate lesson was Bayes&rsquo; theorem in
        disguise: the base rate was the prior.
      </p>

      <Theorem title="the odds form">
        <p>For H and its negation,</p>
        <p className="mono" style={{ textAlign: "center" }}>
          P(H | E) / P(not H | E) = [P(E | H) / P(E | not H)] × [P(H) / P(not H)].
        </p>
        <p>In words: posterior odds equal the likelihood ratio times the prior odds.</p>
      </Theorem>
      <Proof>
        <p>
          Write Bayes&rsquo; theorem for H and for not H, and divide one by the other. The awkward term{" "}
          <span className="mono">P(E)</span> cancels.
        </p>
      </Proof>

      <Example title="the coin, by odds">
        <p>
          A prior of 1 in 5 is odds of 1 to 4. A head is 0.8 / 0.5 = 1.6 times as likely from the trick coin, so it
          multiplies the odds by 1.6; a tail is 0.2 / 0.5 = 0.4 times as likely, so it multiplies them by 0.4. After heads,
          heads, tails the odds are{" "}
          <span className="mono">(1/4) × 1.6 × 1.6 × 0.4 = 0.256</span>, a probability of{" "}
          <span className="mono">0.256 / 1.256 ≈ 0.20</span>. Two heads and a tail have left you almost exactly where you
          started.
        </p>
      </Example>

      <Definition title="confirmation">
        <p>
          Evidence E <strong>confirms</strong> H if it raises its probability, which by the odds form happens exactly when
          the likelihood ratio is greater than 1: when E is more likely if H is true than if it is false. The further the
          ratio is from 1, the more <strong>diagnostic</strong> the evidence. Evidence that is equally likely either way,
          however striking, tells you nothing about H.
        </p>
      </Definition>

      <Remark title="priors, and why they matter less over time">
        <p>
          Where do priors come from? From background knowledge, base rates, or, when there is little of either, judgement.
          Two people may start with different priors. But if they update on the same long run of evidence, their
          posteriors are driven together, because the likelihood ratios multiply up and swamp the starting odds. Try it in
          the visualisation with a prior of 0.05 and of 0.9.
        </p>
      </Remark>

      <Remark title="history">
        <p>
          Thomas Bayes&rsquo;s essay on the problem was published in 1763, after his death, by his friend Richard Price.
          Pierre-Simon Laplace independently developed the idea much further, and used it in astronomy and in studying
          birth records.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lr",
      rung: "check",
      prompt: (
        <p>
          Evidence E has probability 0.9 if H is true and 0.3 if H is false. What is the likelihood ratio?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "confirms",
      rung: "check",
      prompt: <p>When does evidence E confirm hypothesis H?</p>,
      answer: {
        kind: "choice",
        options: [
          "When E is likely.",
          "When E is more likely if H is true than if H is false.",
          "When H explains E.",
          "When E is surprising.",
        ],
        correct: [1],
      },
    },
    {
      key: "post",
      rung: "apply",
      prompt: (
        <p>
          The prior probability of H is 0.2, and evidence arrives with likelihood ratio 3. What is the posterior
          probability of H? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 3 / 7, tolerance: 0.01 },
    },
    {
      key: "coin",
      rung: "apply",
      prompt: (
        <p>
          A coin is equally likely to be fair or to land heads 80% of the time. It lands heads once. What is the probability
          now that it is the biased coin? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.4 / 0.65, tolerance: 0.01 },
    },
    {
      key: "diagnostic",
      rung: "apply",
      prompt: (
        <p>
          You wonder whether a friend has a cold. Which observation is most diagnostic?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "They are breathing (true whether or not they have a cold).",
          "They are sneezing a lot and their nose is blocked.",
          "They are wearing a jumper.",
          "They say good morning.",
        ],
        correct: [1],
      },
    },
    {
      key: "odds",
      rung: "prove",
      prompt: (
        <p>
          Derive the odds form of Bayes&rsquo; theorem from Bayes&rsquo; theorem itself, and explain in words why{" "}
          <span className="mono">P(E)</span> disappears.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes Bayes' theorem for H and for not H.",
          "Divides the first by the second, so that P(E) cancels.",
          "Explains that P(E) is the same whichever hypothesis we consider, so it does not affect how the evidence favours one over the other.",
        ],
      },
    },
    {
      key: "extraordinary",
      rung: "stretch",
      prompt: (
        <p>
          It is often said that extraordinary claims require extraordinary evidence. Use the odds form of Bayes&rsquo;
          theorem to explain what this means. Illustrate with a claim whose prior odds are one in a million.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies an extraordinary claim as one with very low prior odds.",
          "Explains that to make it more likely than not, the likelihood ratio of the evidence must be larger than the inverse of the prior odds, about a million to one in the example.",
          "Notes that ordinary evidence, such as a single testimony that might be mistaken, has a far smaller ratio. Any clear explanation is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Bayes' theorem, the odds form with its likelihood ratio, what makes evidence diagnostic, and why people who start with different priors can come to agree.",

  glimpse: (
    <p>
      Epistemology asks whether updating by Bayes&rsquo; theorem is the rational way to change degrees of belief.
      Philosophy of Science builds a theory of confirmation on it and tests it against puzzles such as the ravens.
      Philosophy of Religion reads Hume&rsquo;s famous argument about testimony for miracles as an early argument about
      priors and likelihoods.
    </p>
  ),
};
