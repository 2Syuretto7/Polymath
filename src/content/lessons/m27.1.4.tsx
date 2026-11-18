import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BorelCantelliViz } from "@/components/viz/BorelCantelliViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.1.4",
  minutes: 90,
  links: {
    revisits: ["m27.1.3", "m27.1.1", "m9.4.2"],
    foreshadows: ["m27.2.1", "m27.4.4", "m27.5.2"],
  },

  puzzle: (
    <>
      <p>
        A monkey types one random letter each second, forever. Will it ever type the word &lsquo;polymath&rsquo;? Will it type
        it infinitely often? And if at second n it succeeds at some other task with probability <M>{"1/n^2"}</M>, how often
        does that happen?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Independent events <M>{"A_n"}</M> have probability <M>{"n^{-p}"}</M>. Change p and draw new samples.
      </p>
      <BorelCantelliViz />
    </>
  ),

  theory: (
    <>
      <Definition title="limsup of events">
        <p>
          The event that infinitely many <M>{"A_n"}</M> occur is{" "}
          <M>{"\\limsup A_n = \\bigcap_{m \\ge 1} \\bigcup_{n \\ge m} A_n"}</M>, often written <M>{"\\{A_n \\text{ i.o.}\\}"}</M>.
          Its complement is the event that only finitely many occur.
        </p>
      </Definition>

      <Theorem title="first Borel–Cantelli lemma">
        <p>
          If <M>{"\\sum P(A_n) < \\infty"}</M>, then <M>{"P(A_n \\text{ i.o.}) = 0"}</M>. No independence is needed.
        </p>
        <p>
          <strong>Proof.</strong> For each m,{" "}
          <M>{"P(A_n \\text{ i.o.}) \\le P\\left(\\bigcup_{n \\ge m} A_n\\right) \\le \\sum_{n \\ge m} P(A_n)"}</M>, the tail of a
          convergent series, which tends to 0.
        </p>
      </Theorem>

      <Theorem title="second Borel–Cantelli lemma">
        <p>
          If the <M>{"A_n"}</M> are independent and <M>{"\\sum P(A_n) = \\infty"}</M>, then{" "}
          <M>{"P(A_n \\text{ i.o.}) = 1"}</M>.
        </p>
        <p>
          <strong>Proof.</strong> By independence and <M>{"1 - x \\le e^{-x}"}</M>,{" "}
          <M>{"P\\left(\\bigcap_{n=m}^{N} A_n^c\\right) = \\prod_{n=m}^{N} (1 - P(A_n)) \\le \\exp\\left(-\\sum_{n=m}^{N} P(A_n)\\right) \\to 0"}</M>{" "}
          as N → ∞. So for each m, almost surely some <M>{"A_n"}</M> with n ≥ m occurs, and a countable intersection of
          almost sure events is almost sure.
        </p>
      </Theorem>

      <Example title="the typing monkey">
        <p>
          Split time into disjoint blocks of 8 seconds. In each block the monkey types &lsquo;polymath&rsquo; with probability{" "}
          <M>{"26^{-8} > 0"}</M>, independently of other blocks. The probabilities sum to infinity, so almost surely the word
          appears infinitely often.
        </p>
      </Example>

      <Example title="a zero-one law">
        <p>
          For independent events, the two lemmas together give a dichotomy: <M>{"P(A_n \\text{ i.o.})"}</M> is 0 or 1 according
          as <M>{"\\sum P(A_n)"}</M> converges or diverges. Kolmogorov&rsquo;s zero-one law extends this: any event determined
          by the tail of an independent sequence has probability 0 or 1.
        </p>
      </Example>

      <Remark title="independence matters">
        <p>
          The second lemma fails without independence. If every <M>{"A_n"}</M> equals one event A with P(A) = 1/2, the sum
          diverges, but <M>{"P(A_n \\text{ i.o.}) = P(A) = 1/2"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What does the first Borel–Cantelli lemma need?</p>,
      answer: { kind: "choice", options: ["Only that the sum of the probabilities is finite", "Independence and a divergent sum", "Independence only", "That every event has probability zero"], correct: [0] },
    },
    {
      key: "second",
      rung: "check",
      prompt: <p>Independent events have P(Aₙ) = 1/n. What is the probability that infinitely many occur?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for which values of p does the full series converge?</p>,
      answer: { kind: "choice", options: ["p > 1", "p ≥ 1", "p < 1", "Every p"], correct: [0] },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>Events with P(Aₙ) = 1/n², not necessarily independent. What is P(Aₙ i.o.)?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "same",
      rung: "apply",
      prompt: <p>If every Aₙ is the same event A with P(A) = 0.3, what is P(Aₙ i.o.)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the first Borel–Cantelli lemma.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes {Aₙ i.o.} is contained in the union of Aₙ over n ≥ m, for every m.",
          "Bounds its probability by the tail sum of P(Aₙ) over n ≥ m, using countable subadditivity.",
          "Lets m → ∞, using convergence of the series, to get probability 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Let X₁, X₂, … be independent exponential random variables with mean 1. Show that Xₙ &gt; 2 ln n for only finitely many n, almost surely.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes P(Xₙ > 2 ln n) = exp(−2 ln n) = 1/n².",
          "Notes the series converges and applies the first lemma.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Toss a fair coin n times. The proportion of heads drifts towards one half, but in what sense? In probability, or for
        almost every infinite sequence of tosses? The Borel–Cantelli lemmas are the key to the stronger answer.
      </p>
      <p>Next, the weak and strong laws of large numbers.</p>
    </>
  ),
};
