import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EventWeightsViz } from "@/components/viz/EventWeightsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.1.1",
  minutes: 75,
  links: {
    revisits: ["m4.6.1", "m1.4.5", "m4.2.1"],
    foreshadows: ["m9.1.2", "m22.1.2", "m27.1.1"],
  },

  puzzle: (
    <>
      <p>
        People argued about probability for centuries: is it a frequency, a degree of belief, a symmetry of the situation? In
        1933 Kolmogorov set the argument aside and wrote down three axioms that every interpretation must satisfy. From them,
        all the rules of probability follow. How much can three short rules really give?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Load the die however you like, choose two events, and check the rules that the axioms force.</p>
      <EventWeightsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sample space and events">
        <p>
          A <strong>sample space</strong> <M>{"S"}</M> is the set of possible outcomes of an experiment. An{" "}
          <strong>event</strong> is a subset of <M>{"S"}</M>: it occurs when the outcome lies in it. Set operations become
          logic: <M>{"A \\cup B"}</M> is &ldquo;A or B&rdquo;, <M>{"A \\cap B"}</M> is &ldquo;A and B&rdquo;,{" "}
          <M>{"A^c"}</M> is &ldquo;not A&rdquo;.
        </p>
      </Definition>

      <Definition title="the axioms of probability">
        <p>A <strong>probability</strong> assigns to each event <M>{"A"}</M> a number <M>{"P(A)"}</M> such that</p>
        <ol>
          <li><M>{"P(A) \\ge 0"}</M> for every event;</li>
          <li><M>{"P(S) = 1"}</M>;</li>
          <li>
            if <M>{"A_1, A_2, \\dots"}</M> are disjoint, <M>{"P(A_1 \\cup A_2 \\cup \\cdots) = P(A_1) + P(A_2) + \\cdots"}</M>.
          </li>
        </ol>
      </Definition>

      <Theorem title="consequences">
        <p>For all events <M>{"A"}</M> and <M>{"B"}</M>:</p>
        <MD>{"P(A^c) = 1 - P(A), \\qquad A \\subseteq B \\Rightarrow P(A) \\le P(B), \\qquad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"A"}</M> and <M>{"A^c"}</M> are disjoint with union <M>{"S"}</M>, so <M>{"P(A) + P(A^c) = 1"}</M>. If{" "}
          <M>{"A \\subseteq B"}</M>, then <M>{"B"}</M> is the disjoint union of <M>{"A"}</M> and <M>{"B \\cap A^c"}</M>, whose
          probability is at least 0. For the last, <M>{"A \\cup B"}</M> is the disjoint union of <M>{"A"}</M> and{" "}
          <M>{"B \\cap A^c"}</M>, while <M>{"B"}</M> is the disjoint union of <M>{"A \\cap B"}</M> and <M>{"B \\cap A^c"}</M>;
          subtract.
        </p>
      </Proof>

      <Example title="a loaded die">
        <p>
          If a die gives 6 with probability 1/2 and the other faces equally, each other face has probability 1/10. The event
          &ldquo;even&rdquo; has probability <M>{"\\tfrac1{10} + \\tfrac1{10} + \\tfrac12 = 0.7"}</M>, and &ldquo;odd&rdquo;
          has 0.3, as the complement rule requires.
        </p>
      </Example>

      <Remark title="interpretations and infinity">
        <p>
          The axioms do not say what probability is. Frequentists read <M>{"P(A)"}</M> as a long-run proportion; Bayesians as a
          rational degree of belief. Both satisfy the axioms, so the mathematics serves both. The third axiom, countable
          additivity, matters for infinite sample spaces, and there not every subset can be given a probability: this is why
          measure theory restricts events to a sigma-algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "comp",
      rung: "check",
      prompt: <p>If P(A) = 0.35, what is P(Aᶜ)?</p>,
      answer: { kind: "numeric", value: 0.65, tolerance: 0.001 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are axioms of probability, rather than consequences? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["P(A) ≥ 0", "P(S) = 1", "P(Aᶜ) = 1 − P(A)", "Additivity for disjoint events"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "ie",
      rung: "apply",
      prompt: <p>P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. What is P(A ∪ B)?</p>,
      answer: { kind: "numeric", value: 0.7, tolerance: 0.001 },
    },
    {
      key: "load",
      rung: "apply",
      prompt: <p>A die shows 6 with probability 1/2 and every other face equally often. What is the probability of a number less than 3?</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>P(A) = 0.7 and P(B) = 0.6. What is the smallest possible value of P(A ∩ B)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove from the axioms that P(∅) = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes S and ∅ are disjoint with union S.",
          "Applies additivity: P(S) = P(S) + P(∅).",
          "Concludes P(∅) = 0.",
        ],
      },
    },
    {
      key: "interp",
      rung: "stretch",
      prompt: <p>What could it mean to say that the probability of rain tomorrow is 0.3? Compare a frequency reading with a degree of belief reading.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a frequency reading, such as the proportion of similar days on which it rained.",
          "Gives a degree of belief reading, such as the odds at which one should bet.",
          "Notes a difficulty for one of them, such as tomorrow happening only once. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a sample space and an event are, Kolmogorov's three axioms, how the complement rule, monotonicity and inclusion-exclusion follow from them, and why the axioms leave the interpretation of probability open.",

  glimpse: (
    <p>
      The next lesson studies the case of equally likely outcomes, where probability becomes counting. Measure theory and
      the rigorous theory of probability spaces build on these same axioms.
    </p>
  ),
};
