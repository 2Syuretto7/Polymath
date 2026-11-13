import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TwoDiceViz } from "@/components/viz/TwoDiceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.6.1",
  minutes: 80,
  links: {
    revisits: ["m4.1.1", "m4.2.1", "m4.1.3"],
    foreshadows: ["m4.6.2", "m4.6.3", "m9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Gamblers in seventeenth-century Italy noticed something odd. When three dice are thrown, a total of 9 and a total
        of 10 can each be made in six ways: 9 = 1 + 2 + 6 = 1 + 3 + 5 = 1 + 4 + 4 = 2 + 2 + 5 = 2 + 3 + 4 = 3 + 3 + 3, and
        10 likewise. Yet 10 comes up more often. They asked Galileo why. His answer was the beginning of a careful theory
        of chance: you have to count the right things.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are all the outcomes of rolling two dice, a first and a second. Pick an event and see which outcomes it
        contains. Notice that 3,4 and 4,3 are different squares.
      </p>
      <TwoDiceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sample spaces and events">
        <p>
          A <strong>sample space</strong> <M>{"\\Omega"}</M> is the set of all possible outcomes of an experiment. An{" "}
          <strong>event</strong> is a subset <M>{"A \\subseteq \\Omega"}</M>. When <M>{"\\Omega"}</M> is finite and all
          outcomes are equally likely, the probability of an event is
        </p>
        <MD>{"P(A) = \\frac{|A|}{|\\Omega|}."}</MD>
        <p>
          So probability, in this simplest case, is counting, and everything from the counting lessons applies. Choosing
          the sample space well is the whole art: its outcomes must really be equally likely.
        </p>
      </Definition>

      <Example title="Galileo's answer">
        <p>
          Treat the three dice as distinguishable, say red, white and blue, so that <M>{"|\\Omega| = 6^3 = 216"}</M>{" "}
          equally likely outcomes. The partition 1 + 2 + 6 can then occur in <M>{"3! = 6"}</M> orders, 1 + 4 + 4 in only
          3, and 3 + 3 + 3 in just 1. Adding up, a total of 9 arises in 25 ways and a total of 10 in 27. So{" "}
          <M>{"P(10) = 27/216"}</M> beats <M>{"P(9) = 25/216"}</M>. The gamblers had counted partitions, which are not
          equally likely.
        </p>
      </Example>

      <Definition title="probability in general">
        <p>
          In general a <strong>probability</strong> on a finite <M>{"\\Omega"}</M> assigns each event a number{" "}
          <M>{"P(A)"}</M> so that <M>{"P(A) \\ge 0"}</M>, <M>{"P(\\Omega) = 1"}</M>, and{" "}
          <M>{"P(A \\cup B) = P(A) + P(B)"}</M> whenever <M>{"A"}</M> and <M>{"B"}</M> are disjoint. These are
          Kolmogorov&rsquo;s axioms, of 1933. Outcomes need not be equally likely: a biased coin fits too.
        </p>
      </Definition>

      <Theorem title="first consequences">
        <p>For all events <M>{"A"}</M> and <M>{"B"}</M>:</p>
        <MD>{"P(A^c) = 1 - P(A), \\qquad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"A"}</M> and <M>{"A^c"}</M> are disjoint with union <M>{"\\Omega"}</M>, so{" "}
          <M>{"P(A) + P(A^c) = 1"}</M>. For the second, <M>{"A \\cup B"}</M> is the disjoint union of <M>{"A"}</M> and{" "}
          <M>{"B \\setminus A"}</M>, and <M>{"B"}</M> is the disjoint union of <M>{"B \\setminus A"}</M> and{" "}
          <M>{"A \\cap B"}</M>. So <M>{"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"}</M>. This is inclusion and exclusion
          again.
        </p>
      </Proof>

      <Remark title="the complement trick">
        <p>
          The first rule is often the quickest route. The chance of at least one six in four rolls of a die is{" "}
          <M>{"1 - (5/6)^4 \\approx 0.518"}</M>, a little better than even. The Chevalier de Méré made money betting on it.
          He lost money betting on at least one double six in 24 rolls of two dice, whose chance is{" "}
          <M>{"1 - (35/36)^{24} \\approx 0.491"}</M>, and in 1654 his complaint started the correspondence between Pascal
          and Fermat from which probability theory grew.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "omega",
      rung: "check",
      prompt: <p>How many outcomes are in the sample space for tossing a coin three times, recording the sequence?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "seven",
      rung: "check",
      prompt: <p>Two fair dice are rolled. What is the probability that the sum is 7? Give a fraction or a decimal.</p>,
      answer: { kind: "numeric", value: 1 / 6, tolerance: 0.002 },
    },
    {
      key: "atleast",
      rung: "apply",
      prompt: (
        <p>
          A fair coin is tossed five times. What is the probability of at least one head? Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 31 / 32, tolerance: 0.001 },
    },
    {
      key: "union",
      rung: "apply",
      prompt: (
        <p>
          A card is drawn from a standard 52-card deck. What is the probability that it is a heart or a king? Give a
          fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 16 / 52, tolerance: 0.002 },
    },
    {
      key: "galileo",
      rung: "apply",
      prompt: <p>With three dice, in how many of the 216 ordered outcomes do the dice show 2, 2 and 5 in some order?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "monotone",
      rung: "prove",
      prompt: (
        <p>
          Prove from Kolmogorov&rsquo;s axioms that if <M>{"A \\subseteq B"}</M> then <M>{"P(A) \\le P(B)"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes B as the disjoint union of A and B \\ A.",
          "Uses additivity and non-negativity: P(B) = P(A) + P(B \\ A) ≥ P(A).",
        ],
      },
    },
    {
      key: "birthday",
      rung: "stretch",
      prompt: (
        <p>
          In a room of 23 people, show that the chance that two share a birthday is more than one half, ignoring leap years
          and assuming all 365 birthdays equally likely. Explain your method; you may use a calculator.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses the complement: the probability that all 23 birthdays differ is (365 × 364 × … × 343) / 365²³.",
          "Evaluates or estimates it as about 0.493, so the chance of a shared birthday is about 0.507, more than one half.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a sample space and an event are, why probability is counting when outcomes are equally likely, how Galileo solved the three dice puzzle, and the complement rule.",

  glimpse: (
    <p>
      The next lesson asks how probabilities change when we learn something, and why a positive medical test can mean
      less than it seems.
    </p>
  ),
};
