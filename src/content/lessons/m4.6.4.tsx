import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RamseyViz } from "@/components/viz/RamseyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.6.4",
  minutes: 85,
  links: {
    revisits: ["m4.6.3", "m4.1.4", "m4.1.3"],
    foreshadows: ["m21.4.2", "m21.4.3", "m9.7.1"],
  },

  puzzle: (
    <>
      <p>
        Among any six people, there are always three who all know one another or three who are all strangers. With five
        people this can fail. How large a party guarantees four mutual friends or four mutual strangers? The answer is 18.
        For five, nobody knows; it is somewhere between 43 and 46. In 1947 Paul Erdős showed that these numbers grow at
        least exponentially, by an argument that never builds a single example. He showed that a randomly chosen party
        works with positive probability, so some party must.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Join every pair of points by an edge, and colour each edge one of two ways at random. A triangle is
        single-coloured if its three edges match. Recolour many times with 5 points, then with 6.
      </p>
      <RamseyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the probabilistic method">
        <p>
          To prove that an object with some property exists, define a random object and show that it has the property
          with probability greater than 0. Since the sample space is finite, some outcome must have the property. Two
          common forms:
        </p>
        <ul>
          <li>If <M>{"P(\\text{bad}) < 1"}</M>, some outcome is not bad.</li>
          <li>
            If <M>{"E[X] = \\mu"}</M>, then some outcome has <M>{"X \\ge \\mu"}</M> and some has{" "}
            <M>{"X \\le \\mu"}</M>, because an average cannot exceed every value or fall below every value.
          </li>
        </ul>
      </Definition>

      <Theorem title="Erdős, 1947">
        <p>
          Write <M>{"R(k)"}</M> for the least <M>{"n"}</M> such that every two-colouring of the edges of the complete
          graph <M>{"K_n"}</M> has a single-coloured <M>{"K_k"}</M>. If <M>{"\\binom{n}{k} 2^{1 - \\binom{k}{2}} < 1"}</M>,
          then <M>{"R(k) > n"}</M>. In particular <M>{"R(k) > 2^{k/2}"}</M> for <M>{"k \\ge 3"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Colour each edge of <M>{"K_n"}</M> independently, each colour with probability <M>{"\\tfrac12"}</M>. A given set
          of <M>{"k"}</M> points spans <M>{"\\binom{k}{2}"}</M> edges, which all match with probability{" "}
          <M>{"2 \\cdot 2^{-\\binom{k}{2}}"}</M>. Let <M>{"X"}</M> count the single-coloured <M>{"K_k"}</M>. By linearity,
        </p>
        <MD>{"E[X] = \\binom{n}{k}\\, 2^{1 - \\binom{k}{2}} < 1."}</MD>
        <p>
          So some colouring has <M>{"X < 1"}</M>, that is <M>{"X = 0"}</M>: a colouring of <M>{"K_n"}</M> with no
          single-coloured <M>{"K_k"}</M>. For <M>{"n = \\lfloor 2^{k/2} \\rfloor"}</M>, using{" "}
          <M>{"\\binom{n}{k} \\le n^k / k!"}</M>, the expectation is at most{" "}
          <M>{"2^{k^2/2} \\cdot 2^{1 - k(k-1)/2} / k! = 2^{1 + k/2} / k!"}</M>, which is less than 1 for{" "}
          <M>{"k \\ge 3"}</M>.
        </p>
      </Proof>

      <Example title="a large cut">
        <p>
          Every graph with <M>{"m"}</M> edges can have its vertices split into two groups so that at least{" "}
          <M>{"m/2"}</M> edges cross between them. Put each vertex in a group by tossing a fair coin. Each edge crosses with
          probability <M>{"\\tfrac12"}</M>, so the expected number of crossing edges is <M>{"m/2"}</M>, and some split does
          at least that well.
        </p>
      </Example>

      <Remark title="existence without construction">
        <p>
          The method proves that good colourings exist without telling us how to find one. Strikingly, no explicit
          construction is known that matches Erdős&rsquo;s bound: almost every colouring works, yet nobody can write one
          down. This gap between knowing that and knowing how runs through modern combinatorics and computer science,
          where random choices are also used to design fast algorithms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "idea",
      rung: "check",
      prompt: <p>What is the key idea of the probabilistic method?</p>,
      answer: {
        kind: "choice",
        options: [
          "To estimate an answer by simulation.",
          "To prove that an object exists by showing that a random object has the property with positive probability.",
          "To show that most statements are probably true.",
          "To build the object step by step.",
        ],
        correct: [1],
      },
    },
    {
      key: "tri",
      rung: "check",
      prompt: <p>The edges of the complete graph on 6 points are coloured at random. What is the expected number of single-coloured triangles?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "one",
      rung: "apply",
      prompt: <p>What is the probability that a given triangle is single-coloured, when each edge is coloured independently with one of two colours, equally likely?</p>,
      answer: { kind: "numeric", value: 0.25 },
    },
    {
      key: "cut",
      rung: "apply",
      prompt: <p>A graph has 15 edges. What is the largest number of crossing edges that the random-split argument guarantees for some split? Give a whole number.</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "avg",
      rung: "apply",
      prompt: <p>A random variable X has E[X] = 2.4 and takes only whole-number values. Which must be true? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Some outcome has X ≥ 3.", "Some outcome has X ≤ 2.", "Every outcome has X = 2 or X = 3.", "Some outcome has X = 2.4."],
        correct: [0, 1],
      },
    },
    {
      key: "cutproof",
      rung: "prove",
      prompt: <p>Prove that every graph with <M>{"m"}</M> edges has a split of its vertices into two groups with at least <M>{"m/2"}</M> crossing edges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Places each vertex in a group by an independent fair coin, and shows each edge crosses with probability 1/2.",
          "Uses linearity to get an expected m/2 crossing edges, and concludes that some split achieves at least m/2.",
        ],
      },
    },
    {
      key: "r4",
      rung: "stretch",
      prompt: (
        <p>
          Use the condition <M>{"\\binom{n}{k} 2^{1 - \\binom{k}{2}} < 1"}</M> with <M>{"k = 4"}</M> to find the largest{" "}
          <M>{"n"}</M> for which it gives <M>{"R(4) > n"}</M>. Compare with the true value <M>{"R(4) = 18"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes that the condition becomes C(n, 4) < 32, which holds for n = 6 (C(6, 4) = 15) but fails for n = 7 (C(7, 4) = 35), so R(4) > 6.",
          "Comments that the bound is far from the true value 18, since the method is crude for small k but gives the right kind of exponential growth for large k.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a random choice can prove that something exists, why some outcome is always at least the average, and how Erdős used this to show that Ramsey numbers grow exponentially.",

  glimpse: (
    <p>
      This completes the first pass at discrete mathematics. Ramsey theory returns in the combinatorics course, with
      sharper probabilistic bounds.
    </p>
  ),
};
