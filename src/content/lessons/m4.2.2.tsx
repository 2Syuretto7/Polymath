import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LinearRecurrenceViz } from "@/components/viz/LinearRecurrenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.2.2",
  minutes: 85,
  links: {
    revisits: ["m4.2.1", "m1.5.4", "m3.7.2"],
    foreshadows: ["m4.2.3", "m4.5.3", "m10.1.1"],
  },

  puzzle: (
    <>
      <p>
        How many ways are there to tile a 2 by 10 strip with 1 by 2 dominoes? Drawing them all would take a while. But
        look at the left end: either one domino stands upright there, leaving a 2 by 9 strip, or two dominoes lie flat,
        leaving a 2 by 8 strip. So the count for 10 is the count for 9 plus the count for 8. Counting has turned into a
        rule, and the rule turns out to be one you have met before.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each sequence obeys a rule <M>{"a_n = pa_{n-1} + qa_{n-2}"}</M>. Compare how the sequences behave with the roots of
        the equation <M>{"x^2 = px + q"}</M>.
      </p>
      <LinearRecurrenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="recurrence relations">
        <p>
          A <strong>recurrence relation</strong> expresses <M>{"a_n"}</M> in terms of earlier terms. With enough initial
          values it determines the sequence, by strong induction. To <strong>solve</strong> it is to find a closed form.
        </p>
      </Definition>

      <Example title="three counting problems">
        <p>
          Domino tilings of a 2 by n strip satisfy <M>{"t_n = t_{n-1} + t_{n-2}"}</M>, with <M>{"t_1 = 1"}</M>,{" "}
          <M>{"t_2 = 2"}</M>: they are Fibonacci numbers. Binary strings of length n with no two consecutive 1s satisfy the
          same rule, by looking at the last digit: if it is 0, the rest is any good string of length n − 1; if 1, the one
          before is 0. The tower puzzle with n discs needs <M>{"h_n = 2h_{n-1} + 1"}</M> moves.
        </p>
      </Example>

      <Theorem title="linear recurrences of order 2">
        <p>
          Suppose <M>{"a_n = pa_{n-1} + qa_{n-2}"}</M> with q ≠ 0, and let <M>{"r_1, r_2"}</M> be the roots of the{" "}
          <strong>characteristic equation</strong> <M>{"x^2 = px + q"}</M>. If <M>{"r_1 \\ne r_2"}</M>, every solution is
        </p>
        <MD>{"a_n = Ar_1^n + Br_2^n;"}</MD>
        <p>if <M>{"r_1 = r_2 = r"}</M>, every solution is <M>{"a_n = (A + Bn)r^n"}</M>. The constants come from the initial values.</p>
      </Theorem>
      <Proof>
        <p>
          <M>{"r^n"}</M> satisfies the recurrence exactly when <M>{"r^n = pr^{n-1} + qr^{n-2}"}</M>, that is when{" "}
          <M>{"r^2 = pr + q"}</M>. The recurrence is linear, so any combination of solutions is a solution. Given{" "}
          <M>{"a_0, a_1"}</M>, the equations <M>{"A + B = a_0"}</M>, <M>{"Ar_1 + Br_2 = a_1"}</M> have a unique solution
          when <M>{"r_1 \\ne r_2"}</M>, and the resulting sequence agrees with <M>{"a_n"}</M> for every n by induction. In
          the repeated case, one checks directly that <M>{"nr^n"}</M> is also a solution.
        </p>
      </Proof>

      <Example title="a worked example">
        <p>
          <M>{"a_n = 5a_{n-1} - 6a_{n-2}"}</M>, <M>{"a_0 = 1"}</M>, <M>{"a_1 = 4"}</M>. The roots of{" "}
          <M>{"x^2 - 5x + 6"}</M> are 2 and 3. From <M>{"A + B = 1"}</M> and <M>{"3A + 2B = 4"}</M>,{" "}
          <M>{"A = 2"}</M> and <M>{"B = -1"}</M>, so <M>{"a_n = 2 \\cdot 3^n - 2^n"}</M>.
        </p>
      </Example>

      <Remark title="further on">
        <p>
          For a non-homogeneous recurrence such as <M>{"h_n = 2h_{n-1} + 1"}</M>, add one particular solution, here the
          constant −1, to the general homogeneous solution <M>{"A2^n"}</M>; then <M>{"h_0 = 0"}</M> gives{" "}
          <M>{"h_n = 2^n - 1"}</M>. The same method solves recurrences of any order, and it is the discrete twin of solving
          linear differential equations with <M>{"e^{rt}"}</M>. It is also diagonalisation in disguise: the pair{" "}
          <M>{"(a_{n+1}, a_n)"}</M> is multiplied by a 2 by 2 matrix whose eigenvalues are the roots.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "geom",
      rung: "check",
      prompt: <p>If <M>{"a_n = 3a_{n-1}"}</M> and <M>{"a_0 = 2"}</M>, what is <M>{"a_4"}</M>?</p>,
      answer: { kind: "numeric", value: 162 },
    },
    {
      key: "root",
      rung: "check",
      prompt: (
        <p>
          What is the larger root of the characteristic equation of <M>{"a_n = a_{n-1} + 6a_{n-2}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "a5",
      rung: "apply",
      prompt: <p>For <M>{"a_n = 5a_{n-1} - 6a_{n-2}"}</M>, <M>{"a_0 = 1"}</M>, <M>{"a_1 = 4"}</M>, what is <M>{"a_5"}</M>?</p>,
      answer: { kind: "numeric", value: 454 },
    },
    {
      key: "strings",
      rung: "apply",
      prompt: <p>How many binary strings of length 5 have no two consecutive 1s?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "dominoes",
      rung: "apply",
      prompt: <p>How many ways are there to tile a 2 by 6 strip with 1 by 2 dominoes?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "general",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"r_1 \\ne r_2"}</M> be the roots of <M>{"x^2 = px + q"}</M>. Prove that <M>{"Ar_1^n + Br_2^n"}</M>
          satisfies <M>{"a_n = pa_{n-1} + qa_{n-2}"}</M> for any A and B, and that every solution has this form.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Substitutes rⁿ and uses r² = pr + q, then uses linearity for combinations.",
          "Shows that A and B can be chosen to match any a₀ and a₁, since the 2 by 2 system has determinant r₂ − r₁ ≠ 0.",
          "Concludes by induction that the two sequences agree for all n. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "repeated",
      rung: "stretch",
      prompt: (
        <p>
          Solve <M>{"a_n = 4a_{n-1} - 4a_{n-2}"}</M> with <M>{"a_0 = 1"}</M>, <M>{"a_1 = 4"}</M>, and verify directly that{" "}
          <M>{"n2^n"}</M> satisfies the recurrence.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Finds the repeated root 2 and writes aₙ = (A + Bn)2ⁿ.",
          "Uses the initial values to get A = 1, B = 1, so aₙ = (1 + n)2ⁿ.",
          "Checks 4(n − 1)2ⁿ⁻¹ − 4(n − 2)2ⁿ⁻² = n2ⁿ. A correct answer with working earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how counting problems lead to recurrences, with the domino example, how the characteristic equation solves aₙ = paₙ₋₁ + qaₙ₋₂ in the distinct and repeated root cases, and how to handle the tower puzzle's recurrence.",

  glimpse: (
    <p>
      The next lesson packs a whole sequence into one function, which solves recurrences mechanically. Recursion returns
      in the study of algorithms, and Ordinary Differential Equations solves the continuous version.
    </p>
  ),
};
