import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MontyHallViz } from "@/components/viz/MontyHallViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.1.3",
  minutes: 85,
  links: {
    revisits: ["m9.1.2", "m4.6.2", "m9.1.1"],
    foreshadows: ["m9.1.4", "m9.1.5", "m9.6.1"],
  },

  puzzle: (
    <>
      <p>
        On a game show, a car is behind one of three doors and goats are behind the others. You pick a door. The host, who
        knows where the car is, opens another door to reveal a goat, and offers you the chance to switch. In 1990 a magazine
        columnist said you should switch, and thousands of readers, many with doctorates, wrote in to say she was wrong. Who
        was right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Play a few games, then simulate a thousand of each strategy.</p>
      <MontyHallViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conditional probability">
        <p>If <M>{"P(B) > 0"}</M>, the probability of <M>{"A"}</M> given <M>{"B"}</M> is</p>
        <MD>{"P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}."}</MD>
        <p>
          Learning that <M>{"B"}</M> occurred shrinks the sample space to <M>{"B"}</M>, and we rescale so that it has total
          probability 1. For each fixed <M>{"B"}</M>, <M>{"P(\\cdot \\mid B)"}</M> is itself a probability.
        </p>
      </Definition>

      <Theorem title="multiplication rule">
        <p>
          <M>{"P(A \\cap B) = P(B)P(A \\mid B)"}</M>, and more generally{" "}
          <M>{"P(A_1 \\cap \\cdots \\cap A_n) = P(A_1)P(A_2 \\mid A_1)\\cdots P(A_n \\mid A_1 \\cap \\cdots \\cap A_{n-1})"}</M>.
        </p>
      </Theorem>

      <Theorem title="the law of total probability">
        <p>If <M>{"B_1, \\dots, B_n"}</M> partition <M>{"S"}</M>, each with positive probability, then</p>
        <MD>{"P(A) = P(A \\mid B_1)P(B_1) + \\cdots + P(A \\mid B_n)P(B_n)."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"A"}</M> is the disjoint union of the sets <M>{"A \\cap B_k"}</M>, so{" "}
          <M>{"P(A) = \\sum P(A \\cap B_k)"}</M>, and each term is <M>{"P(A \\mid B_k)P(B_k)"}</M> by the multiplication rule.
        </p>
      </Proof>

      <Example title="Monty Hall">
        <p>
          Say you pick door 1, and let <M>{"C_k"}</M> be the event that the car is behind door <M>{"k"}</M>. Switching wins
          exactly when the first pick was wrong, so by total probability{" "}
          <M>{"P(\\text{switch wins}) = 0 \\cdot \\tfrac13 + 1 \\cdot \\tfrac13 + 1 \\cdot \\tfrac13 = \\tfrac23"}</M>. The
          answer depends on the host&rsquo;s rule: if he opened a door at random and it happened to show a goat, switching
          would win only half the time.
        </p>
      </Example>

      <Remark title="the prosecutor's fallacy">
        <p>
          <M>{"P(A \\mid B)"}</M> and <M>{"P(B \\mid A)"}</M> are different. The chance that an innocent person matches a
          forensic sample may be one in a million, but the chance that a matching person is innocent can be far larger, in a
          city of ten million. Confusing them has sent innocent people to prison; the next lesson shows how to convert one
          into the other.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>P(A ∩ B) = 0.12 and P(B) = 0.4. What is P(A | B)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "swap",
      rung: "check",
      prompt: <p>In the Monty Hall problem, what is the probability of winning by switching?</p>,
      answer: { kind: "choice", options: ["1/3", "1/2", "2/3", "1"], correct: [2] },
    },
    {
      key: "cards",
      rung: "apply",
      prompt: <p>Two cards are drawn without replacement from a standard deck. What is the probability that both are aces?</p>,
      answer: { kind: "numeric", value: 0.00452, tolerance: 0.0002 },
    },
    {
      key: "dice",
      rung: "apply",
      prompt: <p>Two fair dice are rolled and the sum is at least 10. What is the probability that both show 6?</p>,
      answer: { kind: "numeric", value: 0.1667, tolerance: 0.002 },
    },
    {
      key: "total",
      rung: "apply",
      prompt: <p>Factory X makes 60% of the bulbs, with 2% faulty; factory Y makes 40%, with 5% faulty. What fraction of all bulbs is faulty?</p>,
      answer: { kind: "numeric", value: 0.032, tolerance: 0.0005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if P(B) &gt; 0, then P(Aᶜ | B) = 1 − P(A | B).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes A ∩ B and Aᶜ ∩ B are disjoint with union B.",
          "Concludes P(A ∩ B) + P(Aᶜ ∩ B) = P(B).",
          "Divides by P(B) to get the result.",
        ],
      },
    },
    {
      key: "random",
      rung: "stretch",
      prompt: <p>Suppose the host opens one of the two other doors at random, and it happens to show a goat. Now what is the chance that switching wins? Explain why this differs from the usual answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the probability as 1/2, for instance by noting that a goat reveal is twice as likely when the first pick was the car.",
          "Explains that the usual host never reveals the car, so his choice carries information.",
          "Concludes that the answer depends on the procedure that produced the evidence, not just the evidence. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of conditional probability and why it is itself a probability, the multiplication rule, the law of total probability, the Monty Hall problem, and the prosecutor's fallacy.",

  glimpse: (
    <p>
      The next lesson turns conditional probabilities around with Bayes&rsquo; rule. Later lessons define independence and
      conditional expectation, the same idea for random quantities.
    </p>
  ),
};
