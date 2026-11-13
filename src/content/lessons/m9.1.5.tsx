import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { IndepSquareViz } from "@/components/viz/IndepSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.1.5",
  minutes: 80,
  links: {
    revisits: ["m9.1.4", "m9.1.3", "m4.6.2"],
    foreshadows: ["m9.2.2", "m9.5.1", "m9.7.1"],
  },

  puzzle: (
    <>
      <p>
        A coin has landed heads five times in a row. Is tails now due? Many gamblers think so, and casinos have profited from
        the belief for centuries. The coin has no memory. What exactly does it mean for one event to tell us nothing about
        another?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Adjust the three probabilities and see when the shaded event B fills A in the same proportion as it fills everything.</p>
      <IndepSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="independence">
        <p>Events <M>{"A"}</M> and <M>{"B"}</M> are <strong>independent</strong> if</p>
        <MD>{"P(A \\cap B) = P(A)P(B)."}</MD>
        <p>
          When <M>{"P(A) > 0"}</M>, this is the same as <M>{"P(B \\mid A) = P(B)"}</M>: learning <M>{"A"}</M> does not change
          the probability of <M>{"B"}</M>. The definition is symmetric, and it also makes sense when a probability is 0.
        </p>
      </Definition>

      <Theorem title="complements">
        <p>
          If <M>{"A"}</M> and <M>{"B"}</M> are independent, so are <M>{"A"}</M> and <M>{"B^c"}</M>, <M>{"A^c"}</M> and{" "}
          <M>{"B"}</M>, and <M>{"A^c"}</M> and <M>{"B^c"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"P(A \\cap B^c) = P(A) - P(A \\cap B) = P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(B^c)"}</M>. The other cases follow
          by the same argument with the roles swapped.
        </p>
      </Proof>

      <Definition title="independence of several events">
        <p>
          <M>{"A_1, \\dots, A_n"}</M> are independent if for every subcollection the probability of the intersection is the
          product of the probabilities. Pairwise independence is not enough.
        </p>
      </Definition>

      <Example title="pairwise but not mutually independent">
        <p>
          Toss two fair coins. Let <M>{"A"}</M>: the first is heads; <M>{"B"}</M>: the second is heads; <M>{"C"}</M>: the
          two agree. Each pair is independent, with every pairwise intersection of probability 1/4. But{" "}
          <M>{"P(A \\cap B \\cap C) = \\tfrac14 \\ne \\tfrac18"}</M>: any two of the events determine the third.
        </p>
      </Example>

      <Remark title="independence is not disjointness">
        <p>
          Disjoint events with positive probabilities are never independent: if one happens, the other certainly does not. And
          conditional independence differs from independence: two symptoms may be independent given the disease, yet
          dependent overall, because each is evidence of the disease. The gambler&rsquo;s fallacy is the belief that
          independent trials somehow balance out in the short run.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>P(A) = 0.3 and P(B) = 0.5, and A and B are independent. What is P(A ∩ B)?</p>,
      answer: { kind: "numeric", value: 0.15, tolerance: 0.001 },
    },
    {
      key: "disj",
      rung: "check",
      prompt: <p>A and B are disjoint, with P(A) = 0.2 and P(B) = 0.3. Are they independent?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, disjoint events are always independent.", "No: P(A ∩ B) = 0, but P(A)P(B) = 0.06.", "Only if P(A ∪ B) = 1.", "There is not enough information."],
        correct: [1],
      },
    },
    {
      key: "six",
      rung: "apply",
      prompt: <p>A fair die is rolled four times. What is the probability of at least one six, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.518, tolerance: 0.001 },
    },
    {
      key: "check",
      rung: "apply",
      prompt: <p>One card is drawn from a standard deck. A: it is a heart. B: it is a king. Are A and B independent?</p>,
      answer: {
        kind: "choice",
        options: ["Yes: P(A ∩ B) = 1/52 = (1/4)(1/13).", "No, since the king of hearts is in both.", "No, since hearts and kings are related.", "Only for a shuffled deck."],
        correct: [0],
      },
    },
    {
      key: "sys",
      rung: "apply",
      prompt: <p>A machine works if both of two independent parts work, with probabilities 0.9 and 0.8. What is the probability that it fails?</p>,
      answer: { kind: "numeric", value: 0.28, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if A and B are independent, then so are Aᶜ and Bᶜ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes P(Aᶜ ∩ Bᶜ) = 1 − P(A ∪ B) by De Morgan's law.",
          "Expands P(A ∪ B) = P(A) + P(B) − P(A)P(B) using independence.",
          "Factors 1 − P(A) − P(B) + P(A)P(B) as (1 − P(A))(1 − P(B)) = P(Aᶜ)P(Bᶜ).",
        ],
      },
    },
    {
      key: "gambler",
      rung: "stretch",
      prompt: <p>A gambler says that after ten reds in a row, black is due, because in the long run reds and blacks even out. Explain what is right and what is wrong in this.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that independent spins mean the chance of black on the next spin is unchanged.",
          "Notes that proportions do even out in the long run, by the law of large numbers.",
          "Explains that this happens by dilution over many future spins, not by compensation. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of independence and its meaning in terms of conditional probability, why complements of independent events are independent, independence of several events with the two-coin example, and the gambler's fallacy.",

  glimpse: (
    <p>
      The next chapter introduces random variables and their distributions. Joint distributions extend independence to
      random quantities, and the law of large numbers shows what independence does in the long run.
    </p>
  ),
};
