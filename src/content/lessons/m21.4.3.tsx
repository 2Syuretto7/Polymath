import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RandomRamseyViz } from "@/components/viz/RandomRamseyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.4.3",
  minutes: 85,
  links: {
    revisits: ["m4.6.4", "m21.4.2", "m4.6.3"],
    foreshadows: ["m21.5.1", "m21.5.2", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        You need a red-blue colouring of the edges of <M>{"K_{1000}"}</M> with no one-colour clique on 20 vertices. Clever
        constructions fall far short. Yet a coin toss for every edge almost certainly works. How can we be sure, when checking
        a single colouring is far beyond any computer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each k, see where the expected number of one-colour cliques in a random colouring drops below one.</p>
      <RandomRamseyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the first moment method">
        <p>
          If a random variable <M>X</M> taking values in <M>{"\\{0, 1, 2, \\dots\\}"}</M> has <M>{"\\mathbb{E}[X] < 1"}</M>,
          then <M>{"X = 0"}</M> with positive probability. So some outcome has <M>{"X = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="Erdős (1947)">
        <p>For <M>{"k \\ge 3"}</M>, <M>{"R(k, k) > 2^{k/2}"}</M>.</p>
        <p>
          Colour each edge of <M>{"K_n"}</M> red or blue by a fair coin. A given set of <M>k</M> vertices is one colour with
          probability <M>{"2 \\cdot 2^{-\\binom{k}{2}}"}</M>, so the expected number of one-colour <M>{"K_k"}</M> is
        </p>
        <MD>{"\\binom{n}{k} 2^{1 - \\binom{k}{2}} < \\frac{n^k}{k!} 2^{1 - k(k-1)/2}."}</MD>
        <p>
          With <M>{"n = \\lfloor 2^{k/2} \\rfloor"}</M> this is less than <M>{"2^{1 + k/2} / k!"}</M>, which is below 1 for{" "}
          <M>{"k \\ge 3"}</M>. So some colouring of <M>{"K_n"}</M> has no one-colour <M>{"K_k"}</M>.
        </p>
      </Theorem>

      <Example title="alterations">
        <p>
          A random colouring of a larger <M>{"K_n"}</M> may have a few bad cliques. Delete one vertex from each: the expected
          number left is at least <M>{"n - \\binom{n}{k} 2^{1 - \\binom{k}{2}}"}</M>, and what remains is a good colouring.
          Done carefully, the plain argument gives about <M>{"k 2^{k/2} / (e\\sqrt{2})"}</M>; alterations improve the constant
          by <M>{"\\sqrt{2}"}</M>, and the Lovász local lemma, which handles many rare and mostly independent bad events, by
          another <M>{"\\sqrt{2}"}</M>.
        </p>
      </Example>

      <Remark title="hay in a haystack">
        <p>
          Between <M>{"2^{k/2}"}</M> and the upper bound near <M>{"4^k"}</M> lies a gap that has barely moved in seventy years.
          Explicit constructions lag far behind: none is known that reaches <M>{"2^{ck}"}</M> for any fixed{" "}
          <M>{"c > 0"}</M>, though work on pseudorandomness has come closer in recent years. Almost every colouring is good,
          yet we cannot point to one. This is the probabilistic method at its most striking.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>If the expected number of one-colour Kₖ in a random colouring is less than 1, what follows?</p>,
      answer: { kind: "choice", options: ["Some colouring has no one-colour Kₖ", "Every colouring has none", "Every colouring has exactly one", "Nothing"], correct: [0] },
    },
    {
      key: "prob",
      rung: "check",
      prompt: <p>In a random red-blue colouring, what is the probability that a given triangle is one colour?</p>,
      answer: { kind: "choice", options: ["1/4", "1/8", "1/2", "3/4"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation with k = 4, what is the largest n for which the expected number of one-colour K₄ is below 1?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "tri",
      rung: "apply",
      prompt: <p>What is the expected number of one-colour triangles in a random red-blue colouring of K₆?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>What lower bound does Erdős&rsquo; theorem give for R(10, 10)?</p>,
      answer: { kind: "choice", options: ["R(10, 10) > 32", "R(10, 10) > 1024", "R(10, 10) > 10", "R(10, 10) > 100"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the expected number of one-colour Kₖ in a random red-blue colouring of Kₙ is C(n, k) times 2 to the power 1 − C(k, 2), and explain why this being below 1 gives R(k, k) &gt; n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a k-set has C(k, 2) edges, all red or all blue with probability 2 times 2 to the minus C(k, 2).",
          "Uses linearity of expectation over the C(n, k) sets of k vertices.",
          "Argues a non-negative integer variable with mean below 1 is zero for some colouring, so Kₙ has a good colouring.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a proof that a good colouring exists, with no way to find one, as valuable as a construction? Give a reason.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes what existence proofs settle, such as the truth of bounds, and what they leave open, such as algorithms or explicit examples.",
          "Gives a reason for a view, perhaps drawing on uses in computer science or on intuitionist doubts.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From extremal questions we turn to pure counting. In how many ways can 5 be written as a sum of positive integers,
        ignoring order? Seven: 5, 4 + 1, 3 + 2, 3 + 1 + 1, 2 + 2 + 1, 2 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1.
      </p>
      <p>
        Next, integer partitions: Ferrers diagrams and conjugation, Euler&rsquo;s generating function and his theorem on odd
        and distinct parts, and the astonishing asymptotics of Hardy and Ramanujan.
      </p>
    </>
  ),
};
