import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SubsetSumViz } from "@/components/viz/SubsetSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.5.4",
  minutes: 80,
  links: {
    revisits: ["m4.5.2", "m4.5.3", "m4.3.3"],
    foreshadows: ["m20.5.1", "m20.5.4", "m21.3.1"],
  },

  puzzle: (
    <>
      <p>
        In 2000 the Clay Mathematics Institute offered a million dollars for each of seven problems. One of them asks,
        roughly: if a solution to a problem can be checked quickly, can it also be found quickly? A sudoku is easy to
        check and hard to solve. A password is easy to check and, we hope, hard to guess. Almost everyone believes that
        checking really is easier than finding. Nobody has been able to prove it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a target and tap numbers to make a subset that adds up to it. Checking your guess is instant. Then let the
        computer search every subset, and see how many it has to try.
      </p>
      <SubsetSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="decision problems and the class P">
        <p>
          A <strong>decision problem</strong> asks a yes or no question about an input, such as: is this number prime?
          Does this graph have a Hamilton cycle? Size is measured by the length <M>{"n"}</M> of the input. A problem is in{" "}
          <strong>P</strong> if some algorithm answers it correctly in time <M>{"O(n^k)"}</M> for some fixed{" "}
          <M>{"k"}</M>, that is, in <strong>polynomial time</strong>. Sorting, finding a gcd, and finding a shortest path
          in a graph are all, in their decision versions, in P.
        </p>
      </Definition>

      <Definition title="the class NP">
        <p>
          A problem is in <strong>NP</strong> if, whenever the answer is yes, there is a <strong>certificate</strong> of
          polynomial length that can be checked in polynomial time. For subset sum, the question is whether some of the
          given numbers add up to the target; the certificate is the subset itself, and checking it means one addition.
          Every problem in P is in NP, since the checker can simply solve the problem. The question{" "}
          <M>{"\\text{P} = \\text{NP}"}</M>? asks whether the reverse holds.
        </p>
      </Definition>

      <Example title="why searching is slow">
        <p>
          A list of <M>{"n"}</M> numbers has <M>{"2^n"}</M> subsets. Trying them all takes exponential time: with{" "}
          <M>{"n = 100"}</M>, even a computer checking a billion subsets a second would need far longer than the age of the
          universe. Cleverer methods exist, but every known algorithm for subset sum still takes exponential time in the
          worst case.
        </p>
      </Example>

      <Theorem title="Cook and Levin, 1971 to 1973">
        <p>
          There are <strong>NP-complete</strong> problems: problems in NP such that every problem in NP can be translated
          into them in polynomial time. So if any one NP-complete problem is in P, then <M>{"\\text{P} = \\text{NP}"}</M>.
          Subset sum, the Hamilton cycle problem, graph colouring with three colours, and thousands of scheduling and
          packing problems are all NP-complete.
        </p>
      </Theorem>

      <Remark title="what is at stake">
        <p>
          If <M>{"\\text{P} = \\text{NP}"}</M>, finding would be no harder than checking: much of modern cryptography would
          fall, and many hard problems in industry and science would become easy. If, as most believe,{" "}
          <M>{"\\text{P} \\ne \\text{NP}"}</M>, then NP-completeness is a useful warning: when a problem turns out to be
          NP-complete, stop looking for a fast exact method and look for approximations or special cases. The proof of
          this lesson&rsquo;s theorem is beyond us here; it needs the Turing machines of a later course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "np",
      rung: "check",
      prompt: <p>What does it mean for a problem to be in NP?</p>,
      answer: {
        kind: "choice",
        options: [
          "It cannot be solved by any algorithm.",
          "A yes answer has a short certificate that can be checked in polynomial time.",
          "It takes exponential time to solve.",
          "It is not in P.",
        ],
        correct: [1],
      },
    },
    {
      key: "subsets",
      rung: "check",
      prompt: <p>How many subsets does a list of 8 numbers have, counting the empty subset?</p>,
      answer: { kind: "numeric", value: 256 },
    },
    {
      key: "cert",
      rung: "apply",
      prompt: (
        <p>
          For the problem &ldquo;does this graph have a Hamilton cycle?&rdquo;, what is a natural certificate for a yes
          answer?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The number of edges.",
          "A list of the vertices in the order the cycle visits them.",
          "A proof that no cycle exists.",
          "The degree of each vertex.",
        ],
        correct: [1],
      },
    },
    {
      key: "check",
      rung: "apply",
      prompt: (
        <p>
          The numbers are 3, 34, 4, 12, 5, 2 and the target is 9. Which of these subsets are valid certificates? Choose
          all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["4 and 5", "3, 4 and 2", "12 and 3", "34"],
        correct: [0, 1],
      },
    },
    {
      key: "imply",
      rung: "apply",
      prompt: <p>Suppose someone finds a polynomial-time algorithm for subset sum. What follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing, since subset sum is only one problem.",
          "P = NP, because subset sum is NP-complete.",
          "P ≠ NP.",
          "Sorting becomes faster.",
        ],
        correct: [1],
      },
    },
    {
      key: "pinnp",
      rung: "prove",
      prompt: <p>Explain why every problem in P is also in NP.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Observes that a checker for a problem in P can ignore the certificate, or take an empty one.",
          "Notes that the checker then just runs the polynomial-time algorithm, so it checks in polynomial time.",
        ],
      },
    },
    {
      key: "doubling",
      rung: "stretch",
      prompt: (
        <p>
          A brute-force search over all <M>{"2^n"}</M> subsets runs on a machine that becomes twice as fast every two
          years. How much larger an input can it handle after twenty years? Compare with an <M>{"n^2"}</M> algorithm on the
          same machine, and say what this shows.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For 2ⁿ: a speed-up of 2¹⁰ = 1024 adds only about 10 to the input size.",
          "For n²: the same speed-up multiplies the input size by about √1024 = 32, so polynomial algorithms benefit from faster machines and exponential ones barely do.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between finding a solution and checking one, what the classes P and NP are, what NP-complete means, and why the P versus NP question matters.",

  glimpse: (
    <p>
      The next chapter turns to probability. The course on computation makes these ideas exact with Turing machines and
      proves the Cook and Levin theorem.
    </p>
  ),
};
