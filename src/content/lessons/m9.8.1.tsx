import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MarkovStepViz } from "@/components/viz/MarkovStepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.8.1",
  minutes: 85,
  links: {
    revisits: ["m9.1.3", "m3.3.1", "m9.6.1"],
    foreshadows: ["m9.8.2", "m9.8.3", "m37.1.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose tomorrow&rsquo;s weather depends on today&rsquo;s, but not on anything earlier. Then a small table of chances
        describes the whole process. How do we turn that table into a forecast for next week, and why does the answer turn out
        to be matrix multiplication?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose today&rsquo;s weather and look further ahead.</p>
      <MarkovStepViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Markov chain">
        <p>
          A sequence <M>{"X_0, X_1, X_2, \\dots"}</M> taking values in a finite set of states is a <strong>Markov chain</strong>{" "}
          if the next state depends only on the current one:
        </p>
        <MD>{"P(X_{n+1} = j \\mid X_n = i, X_{n-1}, \\dots, X_0) = P(X_{n+1} = j \\mid X_n = i) = p_{ij}."}</MD>
        <p>
          The <strong>transition matrix</strong> <M>{"P = (p_{ij})"}</M> has non-negative entries and each row sums to 1.
        </p>
      </Definition>

      <Theorem title="n-step transitions">
        <p>
          <M>{"P(X_n = j \\mid X_0 = i) = (P^n)_{ij}"}</M>. If the initial distribution is the row vector{" "}
          <M>{"\\mathbf v"}</M>, the distribution of <M>{"X_n"}</M> is <M>{"\\mathbf v P^n"}</M>.
        </p>
      </Theorem>

      <Example title="why multiplication">
        <p>For two steps, condition on the middle state <M>{"k"}</M> and use the Markov property:</p>
        <MD>{"P(X_2 = j \\mid X_0 = i) = \\sum_k p_{ik}\\, p_{kj} = (P^2)_{ij}."}</MD>
        <p>This is the law of total probability, and it is exactly the rule for multiplying matrices. Induction gives <M>{"P^n"}</M>.</p>
      </Example>

      <Example title="a weather chain">
        <p>
          In the visual, if today is rainy, tomorrow is sunny with probability 0.2. The day after, it is sunny with probability{" "}
          <M>{"0.2 \\cdot 0.7 + 0.4 \\cdot 0.3 + 0.4 \\cdot 0.2 = 0.34"}</M>, the (rainy, sunny) entry of <M>{"P^2"}</M>.
        </p>
      </Example>

      <Remark title="where chains appear">
        <p>
          Board games such as snakes and ladders, queues, the spread of genes, the shuffling of cards and web search all use
          Markov chains. The Markov property is a modelling assumption: it is reasonable when the current state carries all the
          relevant information about the past.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rows",
      rung: "check",
      prompt: <p>What must each row of a transition matrix sum to?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prop",
      rung: "check",
      prompt: <p>What does the Markov property say?</p>,
      answer: {
        kind: "choice",
        options: [
          "All states are equally likely.",
          "Given the present state, the future does not depend on the past.",
          "The chain never repeats a state.",
          "The chain is independent of time.",
        ],
        correct: [1],
      },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>In the weather chain, if today is sunny, what is the probability that the day after tomorrow is sunny?</p>,
      answer: { kind: "numeric", value: 0.7 * 0.7 + 0.2 * 0.3 + 0.1 * 0.2, tolerance: 0.001 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>A two-state chain has P = [[0.9, 0.1], [0.5, 0.5]] and starts in state 1 with probability 1. What is the probability it is in state 2 after one step?</p>,
      answer: { kind: "numeric", value: 0.1, tolerance: 0.001 },
    },
    {
      key: "two2",
      rung: "apply",
      prompt: <p>For the same chain, what is the probability of being in state 2 after two steps?</p>,
      answer: { kind: "numeric", value: 0.14, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the two-step transition probabilities are the entries of P².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Conditions on the intermediate state X₁ = k with the law of total probability.",
          "Uses the Markov property to write P(X₂ = j | X₁ = k, X₀ = i) = p_kj.",
          "Recognises Σ_k p_ik p_kj as the (i, j) entry of P².",
        ],
      },
    },
    {
      key: "model",
      rung: "stretch",
      prompt: <p>Would a Markov chain on the states &ldquo;win&rdquo;, &ldquo;draw&rdquo; and &ldquo;lose&rdquo; be a good model of a cricket team&rsquo;s results? What might the Markov property miss, and how could the states be enlarged to help?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies dependence on more than the last result, such as form over several matches or injuries.",
          "Suggests enlarging the state, for example to the last two results.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Markov chain is, what the transition matrix records, why n-step probabilities are given by Pⁿ through the law of total probability, and how to forecast the weather chain.",

  glimpse: (
    <p>
      The next lesson finds the distributions that a chain leaves unchanged. Later lessons ask when chains forget where they
      started, and stochastic calculus extends the Markov property to continuous time.
    </p>
  ),
};
