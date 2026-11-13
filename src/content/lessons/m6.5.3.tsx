import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DeltaMapViz } from "@/components/viz/DeltaMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.5.3",
  minutes: 85,
  links: {
    revisits: ["m6.5.2", "m2.3.4", "m6.4.2"],
    foreshadows: ["m6.7.1", "m12.2.2", "m10.2.2"],
  },

  puzzle: (
    <>
      <p>
        The function <M>{"1/x"}</M> is continuous at every point of <M>{"(0, 1]"}</M>. For each point and each tolerance{" "}
        <M>{"\\varepsilon"}</M> there is a <M>{"\\delta"}</M>. But the closer the point is to 0, the smaller{" "}
        <M>{"\\delta"}</M> must be, and no single <M>{"\\delta"}</M> serves every point. When we come to integrate, we will
        need a single <M>{"\\delta"}</M>, one margin of error good everywhere at once. When can we have it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        For each point <M>{"x"}</M>, the curve shows the largest <M>{"\\delta"}</M> that works for the chosen{" "}
        <M>{"\\varepsilon"}</M>. Uniform continuity asks whether that curve stays above some positive level.
      </p>
      <DeltaMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="uniform continuity">
        <p>
          A function <M>{"f : A \\to \\mathbb{R}"}</M> is <strong>uniformly continuous</strong> if for every{" "}
          <M>{"\\varepsilon > 0"}</M> there is <M>{"\\delta > 0"}</M> such that
        </p>
        <MD>{"x, y \\in A,\\ |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon."}</MD>
        <p>
          The difference from continuity is the order of the quantifiers: here <M>{"\\delta"}</M> is chosen before the
          points, so it depends on <M>{"\\varepsilon"}</M> alone.
        </p>
      </Definition>

      <Theorem title="sequential test">
        <p>
          <M>{"f"}</M> fails to be uniformly continuous if and only if there are <M>{"\\varepsilon_0 > 0"}</M> and sequences{" "}
          <M>{"x_n, y_n"}</M> with <M>{"|x_n - y_n| \\to 0"}</M> but <M>{"|f(x_n) - f(y_n)| \\ge \\varepsilon_0"}</M>.
        </p>
      </Theorem>

      <Theorem title="continuity on compact sets is uniform">
        <p>A continuous function on a compact set is uniformly continuous.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose not. Then there are <M>{"\\varepsilon_0"}</M>, <M>{"x_n"}</M> and <M>{"y_n"}</M> in <M>{"K"}</M> with{" "}
          <M>{"|x_n - y_n| < 1/n"}</M> and <M>{"|f(x_n) - f(y_n)| \\ge \\varepsilon_0"}</M>. By compactness some subsequence{" "}
          <M>{"x_{n_k} \\to c \\in K"}</M>, and then <M>{"y_{n_k} \\to c"}</M> too. Continuity at <M>{"c"}</M> gives{" "}
          <M>{"f(x_{n_k}) - f(y_{n_k}) \\to f(c) - f(c) = 0"}</M>, contradicting{" "}
          <M>{"|f(x_{n_k}) - f(y_{n_k})| \\ge \\varepsilon_0"}</M>.
        </p>
      </Proof>

      <Example title="examples and counterexamples">
        <p>
          On <M>{"(0, 1]"}</M>, take <M>{"x_n = 1/n"}</M> and <M>{"y_n = 1/(n+1)"}</M>: they get close, but{" "}
          <M>{"1/x_n - 1/y_n = -1"}</M>, so <M>{"1/x"}</M> is not uniformly continuous. On <M>{"\\mathbb{R}"}</M>, take{" "}
          <M>{"x_n = n + 1/n"}</M> and <M>{"y_n = n"}</M>: <M>{"x_n^2 - y_n^2 = 2 + 1/n^2 > 2"}</M>, so <M>{"x^2"}</M> is not
          uniformly continuous on the whole line, though it is on every bounded interval. The function <M>{"\\sqrt x"}</M> on{" "}
          <M>{"[0, \\infty)"}</M> is uniformly continuous, since <M>{"|\\sqrt x - \\sqrt y| \\le \\sqrt{|x - y|}"}</M>, so{" "}
          <M>{"\\delta = \\varepsilon^2"}</M> works.
        </p>
      </Example>

      <Remark title="Lipschitz functions">
        <p>
          A function is <strong>Lipschitz</strong> if <M>{"|f(x) - f(y)| \\le L|x - y|"}</M> for some constant{" "}
          <M>{"L"}</M>. Then <M>{"\\delta = \\varepsilon / L"}</M> works, so Lipschitz functions are uniformly continuous. The
          converse fails: <M>{"\\sqrt x"}</M> on <M>{"[0, 1]"}</M> is uniformly continuous but not Lipschitz, since its slope
          is unbounded near 0. Uniform continuity is exactly what makes continuous functions integrable, and Lipschitz
          conditions are what make differential equations have unique solutions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "uc",
      rung: "check",
      prompt: <p>Which of these are uniformly continuous on the given set? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["x² on [0, 5]", "x² on ℝ", "1/x on (0, 1]", "sin x on ℝ", "√x on [0, 1]"],
        correct: [0, 3, 4],
      },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the key difference between continuity and uniform continuity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Uniform continuity needs a derivative.",
          "In uniform continuity, δ depends only on ε, not on the point.",
          "Uniform continuity only applies to polynomials.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "lip",
      rung: "apply",
      prompt: (
        <p>
          The function <M>{"f(x) = 3x + 2"}</M> is Lipschitz with constant 3. Given <M>{"\\varepsilon = 0.6"}</M>, what{" "}
          <M>{"\\delta"}</M> does <M>{"\\delta = \\varepsilon / L"}</M> give?
        </p>
      ),
      answer: { kind: "numeric", value: 0.2, tolerance: 0.0001 },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"\\sqrt x"}</M>, using <M>{"\\delta = \\varepsilon^2"}</M>, what <M>{"\\delta"}</M> works for{" "}
          <M>{"\\varepsilon = 0.1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.01, tolerance: 0.00001 },
    },
    {
      key: "seq",
      rung: "apply",
      prompt: <p>Which pair of sequences shows that sin(1/x) is not uniformly continuous on (0, 1)?</p>,
      answer: {
        kind: "choice",
        options: [
          "x_n = 1/(2nπ) and y_n = 1/(2nπ + π/2): they get close, but the values are 0 and 1.",
          "x_n = 1/n and y_n = 1/n.",
          "x_n = n and y_n = n + 1.",
          "No such pair exists.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"f(x) = x^2"}</M> is uniformly continuous on <M>{"[0, 5]"}</M>, directly from the definition. A few
          lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes |x² − y²| = |x − y||x + y| and bounds |x + y| ≤ 10 on [0, 5].",
          "Chooses δ = ε/10.",
          "Concludes |x − y| < δ gives |x² − y²| < ε. Citing the compactness theorem instead also earns full credit.",
        ],
      },
    },
    {
      key: "ext",
      rung: "stretch",
      prompt: (
        <p>
          Show that a uniformly continuous function on <M>{"(0, 1)"}</M> is bounded. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes ε = 1 and the corresponding δ.",
          "Covers (0, 1) by finitely many intervals of length δ, or steps from a fixed point in finitely many steps of size δ.",
          "Concludes |f| is at most |f(fixed point)| plus the number of steps.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between continuity and uniform continuity, how sequences show a function is not uniformly continuous, why continuous functions on compact sets are uniformly continuous, and how Lipschitz functions fit in.",

  glimpse: (
    <p>
      Uniform continuity is the key to proving that continuous functions are integrable, in the chapter on the Riemann
      integral. In metric spaces it reappears with the same definition, and Lipschitz conditions guarantee unique solutions to
      differential equations.
    </p>
  ),
};
