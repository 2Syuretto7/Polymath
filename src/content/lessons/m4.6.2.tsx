import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BayesGridViz } from "@/components/viz/BayesGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.6.2",
  minutes: 85,
  links: {
    revisits: ["m4.6.1", "m4.2.1", "p3.4.3"],
    foreshadows: ["m4.6.3", "m9.1.4", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        A screening test for a disease catches 90 per cent of people who have it and gives a false alarm for only 5 per cent
        of people who do not. One person in a hundred has the disease. Your test comes back positive. How worried should
        you be? When doctors were asked questions like this in studies, most guessed around 80 or 90 per cent. The true
        answer is about 15 per cent.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each square is one of a thousand people. Move the sliders and watch how many positive results come from the ill,
        and how many are false alarms among the well.
      </p>
      <BayesGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conditional probability">
        <p>
          If <M>{"P(B) > 0"}</M>, the probability of <M>{"A"}</M> <strong>given</strong> <M>{"B"}</M> is
        </p>
        <MD>{"P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}."}</MD>
        <p>
          Learning that <M>{"B"}</M> happened shrinks the sample space to <M>{"B"}</M>; we then ask what share of it lies
          in <M>{"A"}</M>. Rearranged, this gives the <strong>multiplication rule</strong>{" "}
          <M>{"P(A \\cap B) = P(B)\\,P(A \\mid B)"}</M>, which is how probability trees work.
        </p>
      </Definition>

      <Definition title="independence">
        <p>
          Events <M>{"A"}</M> and <M>{"B"}</M> are <strong>independent</strong> if{" "}
          <M>{"P(A \\cap B) = P(A)\\,P(B)"}</M>, equivalently, when <M>{"P(B) > 0"}</M>, if{" "}
          <M>{"P(A \\mid B) = P(A)"}</M>: learning <M>{"B"}</M> tells you nothing about <M>{"A"}</M>. Two rolls of a die
          are independent. &ldquo;The first die shows 6&rdquo; and &ldquo;the sum is 7&rdquo; are independent too, which
          is less obvious; &ldquo;the first die shows 6&rdquo; and &ldquo;the sum is 12&rdquo; are not.
        </p>
      </Definition>

      <Theorem title="Bayes's theorem">
        <p>If <M>{"P(B) > 0"}</M>, then</p>
        <MD>{"P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B \\mid A)\\,P(A) + P(B \\mid A^c)\\,P(A^c)}."}</MD>
      </Theorem>

      <Proof>
        <p>
          By the multiplication rule the numerator is <M>{"P(A \\cap B)"}</M>. The event <M>{"B"}</M> is the disjoint
          union of <M>{"B \\cap A"}</M> and <M>{"B \\cap A^c"}</M>, and applying the multiplication rule to each shows the
          denominator is <M>{"P(B)"}</M>. Dividing gives the definition of <M>{"P(A \\mid B)"}</M>.
        </p>
      </Proof>

      <Example title="the screening test">
        <p>
          Let <M>{"A"}</M> be having the disease and <M>{"B"}</M> a positive test. Then
        </p>
        <MD>{"P(A \\mid B) = \\frac{0.9 \\times 0.01}{0.9 \\times 0.01 + 0.05 \\times 0.99} = \\frac{0.009}{0.0585} \\approx 0.154."}</MD>
        <p>
          In a thousand people, about 9 ill people test positive, and about 50 well people do. The doctors in the studies
          confused <M>{"P(B \\mid A)"}</M>, the test&rsquo;s accuracy, with <M>{"P(A \\mid B)"}</M>, what the patient
          wants to know.
        </p>
      </Example>

      <Remark title="the base rate">
        <p>
          Ignoring the prior probability <M>{"P(A)"}</M> is called <strong>base rate neglect</strong>. It appears in
          courtrooms as the prosecutor&rsquo;s fallacy: the chance that an innocent person matches the evidence is not the
          chance that a matching person is innocent. Thinking in natural frequencies, as in the grid of a thousand people,
          makes the right answer much easier to see.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which formula defines <M>{"P(A \\mid B)"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["P(A) P(B)", "P(A ∩ B) / P(B)", "P(A ∩ B) / P(A)", "P(B | A)"],
        correct: [1],
      },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>Two fair dice are rolled. Which pairs of events are independent? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "The first die shows 6, and the second die shows 6.",
          "The first die shows 6, and the sum is 12.",
          "The first die shows 6, and the sum is 7.",
          "The sum is 2, and the sum is 12.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "boys",
      rung: "apply",
      prompt: (
        <p>
          A coin is tossed twice. Given that at least one toss is heads, what is the probability that both are heads? Give a
          fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 1 / 3, tolerance: 0.003 },
    },
    {
      key: "urn",
      rung: "apply",
      prompt: (
        <p>
          A bag holds 3 red and 2 blue marbles. Two are drawn without replacement. What is the probability that both are
          red? Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.3 },
    },
    {
      key: "bayes",
      rung: "apply",
      prompt: (
        <p>
          A disease affects 1 per cent of people. A test is positive for 99 per cent of the ill and for 1 per cent of the
          well. Given a positive test, what is the probability of having the disease?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "complement",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"A"}</M> and <M>{"B"}</M> are independent, then so are <M>{"A"}</M> and <M>{"B^c"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes P(A ∩ Bᶜ) = P(A) − P(A ∩ B), since A is the disjoint union of A ∩ B and A ∩ Bᶜ.",
          "Substitutes P(A ∩ B) = P(A)P(B) to get P(A)(1 − P(B)) = P(A)P(Bᶜ).",
        ],
      },
    },
    {
      key: "monty",
      rung: "stretch",
      prompt: (
        <p>
          On a game show, a prize is behind one of three doors. You pick door 1. The host, who knows where the prize is and
          always opens a door without it, opens door 3. Should you switch to door 2? Justify your answer with conditional
          probability.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up the cases: prize behind door 1, 2 or 3 with probability 1/3 each, and the host's choice in each case.",
          "Concludes that switching wins with probability 2/3, for example by Bayes's theorem or by noting that switching wins exactly when the first pick was wrong.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what conditional probability and independence are, how Bayes's theorem works, and why a positive result on an accurate test for a rare disease may still probably be a false alarm.",

  glimpse: (
    <p>
      The next lesson moves from events to quantities: what number should you expect, on average, from a random process?
    </p>
  ),
};
