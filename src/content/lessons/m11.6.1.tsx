import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiophantineLineViz } from "@/components/viz/DiophantineLineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.6.1",
  minutes: 80,
  links: {
    revisits: ["m11.2.1", "m4.4.3", "m0.7.1"],
    foreshadows: ["m11.6.2", "m11.6.3", "m11.6.5"],
  },

  puzzle: (
    <>
      <p>
        A shopkeeper has only ₹6 and ₹9 coins. Can they pay exactly ₹21? Exactly ₹22? Aryabhata, around 499, gave a method for
        such problems, later called <em>kuttaka</em>, &ldquo;the pulveriser&rdquo;. Which amounts can be paid, and in how many
        ways?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>The line ax + by = c and the integer grid. Change a, b and c, and watch when the line meets lattice points.</p>
      <DiophantineLineViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="linear Diophantine equations">
        <p>
          Let <M>{"g = \\gcd(a, b)"}</M>, with <M>{"a, b"}</M> not both zero. The equation <M>{"ax + by = c"}</M> has integer
          solutions if and only if <M>{"g \\mid c"}</M>. If <M>{"(x_0, y_0)"}</M> is one solution, all solutions are
        </p>
        <MD>{"x = x_0 + \\frac{b}{g}t, \\qquad y = y_0 - \\frac{a}{g}t, \\qquad t \\in \\mathbb{Z}."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"g"}</M> divides <M>{"ax + by"}</M>, so it must divide <M>{"c"}</M>. Conversely, Bézout gives{" "}
          <M>{"ar + bs = g"}</M>; multiply by <M>{"c/g"}</M>. If <M>{"(x, y)"}</M> is another solution, then{" "}
          <M>{"a(x - x_0) = -b(y - y_0)"}</M>. Divide by <M>{"g"}</M>: <M>{"\\tfrac ag (x - x_0) = -\\tfrac bg (y - y_0)"}</M>{" "}
          with <M>{"\\tfrac ag, \\tfrac bg"}</M> coprime, so <M>{"\\tfrac bg \\mid x - x_0"}</M>. Write{" "}
          <M>{"x - x_0 = \\tfrac bg t"}</M>; then <M>{"y - y_0 = -\\tfrac ag t"}</M>.
        </p>
      </Proof>

      <Example title="₹6 and ₹9 coins">
        <p>
          <M>{"\\gcd(6, 9) = 3"}</M>, which divides 21 but not 22, so ₹22 is impossible. For 21, <M>{"6 \\cdot 2 + 9 \\cdot 1 = 21"}</M>,
          and all solutions are <M>{"(2 + 3t, 1 - 2t)"}</M>. Negative counts mean giving change, so paying with coins alone
          needs <M>{"x, y \\ge 0"}</M>, which here allows only <M>{"t = 0"}</M>.
        </p>
      </Example>

      <Remark title="the coin problem">
        <p>
          For coprime <M>{"a, b"}</M>, every amount above <M>{"ab - a - b"}</M> can be paid with non-negative numbers of coins,
          but <M>{"ab - a - b"}</M> itself cannot, and exactly <M>{"(a - 1)(b - 1)/2"}</M> amounts are impossible. With ₹3 and
          ₹5 coins, the impossible amounts are 1, 2, 4 and 7.
        </p>
      </Remark>

      <Remark title="the pulveriser">
        <p>
          Aryabhata&rsquo;s kuttaka finds a solution by running Euclid&rsquo;s algorithm and working back, the same steps as
          the extended Euclidean algorithm. Brahmagupta and Bhaskara II developed it further, and used it for problems in
          astronomy about when planetary cycles align.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "solvable",
      rung: "check",
      prompt: <p>Which equation has no integer solution?</p>,
      answer: { kind: "choice", options: ["4x + 6y = 10", "4x + 6y = 7", "3x + 5y = 1", "2x + 7y = 0"], correct: [1] },
    },
    {
      key: "step",
      rung: "check",
      prompt: <p>If <M>{"(x_0, y_0)"}</M> solves <M>{"6x + 9y = 21"}</M>, what is the step between consecutive solutions?</p>,
      answer: { kind: "choice", options: ["(9, −6)", "(3, −2)", "(6, −9)", "(1, −1)"], correct: [1] },
    },
    {
      key: "nonneg",
      rung: "apply",
      prompt: <p>How many solutions in non-negative integers does <M>{"3x + 5y = 30"}</M> have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "frob",
      rung: "apply",
      prompt: <p>With unlimited ₹4 and ₹7 coins, what is the largest amount that cannot be paid exactly?</p>,
      answer: { kind: "numeric", value: 17, tolerance: 0 },
    },
    {
      key: "x",
      rung: "apply",
      prompt: <p>Find the smallest positive <M>{"x"}</M> for which <M>{"7x + 11y = 1"}</M> has an integer solution <M>{"y"}</M>.</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"(x_0, y_0)"}</M> solves <M>{"ax + by = c"}</M>, then every solution has the form <M>{"(x_0 + \\tfrac bg t, y_0 - \\tfrac ag t)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Subtracts to get a(x − x₀) = −b(y − y₀), and divides by g.",
          "Uses that a/g and b/g are coprime to conclude b/g divides x − x₀.",
          "Writes x − x₀ = (b/g)t and deduces y − y₀ = −(a/g)t.",
        ],
      },
    },
    {
      key: "coins",
      rung: "stretch",
      prompt: <p>With ₹3 and ₹5 coins, explain why every amount from 8 upwards can be paid.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows 8, 9 and 10 can be paid (3 + 5, 3 + 3 + 3, 5 + 5).",
          "Argues that adding ₹3 coins then reaches every larger amount.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend when ax + by = c has integer solutions, how Bézout gives one, why all solutions differ by multiples of (b/g, −a/g), the coin problem, and Aryabhata’s pulveriser.",

  glimpse: (
    <p>
      The next lessons solve non-linear equations: Pythagorean triples, Pell&rsquo;s equation and sums of squares. Continued
      fractions give a fast version of the pulveriser.
    </p>
  ),
};
