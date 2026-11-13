import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TwoSequencesViz } from "@/components/viz/TwoSequencesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.5.1",
  minutes: 85,
  links: {
    revisits: ["m2.2.1", "m6.2.1", "m6.4.1"],
    foreshadows: ["m6.5.2", "m6.5.3", "m12.2.1"],
  },

  puzzle: (
    <>
      <p>
        Near 0, the graph of <M>{"\\sin(1/x)"}</M> oscillates infinitely often between <M>{"-1"}</M> and 1, faster and
        faster. Does it have a limit at 0? Plotting software draws a solid smear, which proves nothing. And how would we prove
        that <M>{"x \\sin(1/x)"}</M>, which wiggles just as wildly, does tend to 0? We need a definition of the limit of a
        function as sharp as the one we have for sequences, and a way to move between the two.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two sequences approach 0, one through the zeros of the sine and one through its peaks. Compare the values of each
        function along them.
      </p>
      <TwoSequencesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the functional limit">
        <p>
          Let <M>{"f : A \\to \\mathbb{R}"}</M> and let <M>{"c"}</M> be a limit point of <M>{"A"}</M>. Then{" "}
          <M>{"\\lim_{x \\to c} f(x) = L"}</M> means: for every <M>{"\\varepsilon > 0"}</M> there is{" "}
          <M>{"\\delta > 0"}</M> such that
        </p>
        <MD>{"0 < |x - c| < \\delta \\text{ and } x \\in A \\implies |f(x) - L| < \\varepsilon."}</MD>
        <p>
          The value <M>{"f(c)"}</M>, if it exists at all, plays no part. We need <M>{"c"}</M> to be a limit point so that
          there are points of <M>{"A"}</M> near <M>{"c"}</M> to talk about.
        </p>
      </Definition>

      <Theorem title="the sequential criterion">
        <p>
          <M>{"\\lim_{x \\to c} f(x) = L"}</M> if and only if for every sequence <M>{"x_n \\in A"}</M> with{" "}
          <M>{"x_n \\ne c"}</M> and <M>{"x_n \\to c"}</M>, we have <M>{"f(x_n) \\to L"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Suppose the limit is <M>{"L"}</M>, and <M>{"x_n \\to c"}</M> with <M>{"x_n \\neq c"}</M>. Given{" "}
          <M>{"\\varepsilon"}</M>, take <M>{"\\delta"}</M> from the definition, and <M>{"N"}</M> with{" "}
          <M>{"|x_n - c| < \\delta"}</M> for <M>{"n \\ge N"}</M>; then <M>{"|f(x_n) - L| < \\varepsilon"}</M>. Conversely,
          suppose the limit is not <M>{"L"}</M>. Then some <M>{"\\varepsilon_0"}</M> defeats every <M>{"\\delta"}</M>: for{" "}
          <M>{"\\delta = 1/n"}</M> there is <M>{"x_n"}</M> with <M>{"0 < |x_n - c| < 1/n"}</M> but{" "}
          <M>{"|f(x_n) - L| \\ge \\varepsilon_0"}</M>. This sequence tends to <M>{"c"}</M>, and <M>{"f(x_n)"}</M> does not tend
          to <M>{"L"}</M>.
        </p>
      </Proof>

      <Example title="two verdicts">
        <p>
          For <M>{"\\sin(1/x)"}</M>, the sequences <M>{"x_n = 1/(n\\pi)"}</M> and{" "}
          <M>{"y_n = 1/(2n\\pi + \\pi/2)"}</M> both tend to 0, but <M>{"f(x_n) = 0"}</M> and <M>{"f(y_n) = 1"}</M>. So no
          single <M>{"L"}</M> works, and the limit does not exist. For <M>{"x\\sin(1/x)"}</M>, we have{" "}
          <M>{"|f(x)| \\le |x|"}</M>, so given <M>{"\\varepsilon"}</M> we may take <M>{"\\delta = \\varepsilon"}</M>, and the
          limit is 0.
        </p>
      </Example>

      <Remark title="what the criterion buys">
        <p>
          The sequential criterion lets every theorem about sequences transfer to functions. The algebraic limit theorem for
          functions follows at once from the one for sequences: if <M>{"f \\to L"}</M> and <M>{"g \\to M"}</M>, then along
          any sequence <M>{"f(x_n) g(x_n) \\to LM"}</M>. It is also the quickest way to prove a limit does not exist: find two
          sequences that disagree. In metric spaces the same definition works with distances in place of absolute values.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fc",
      rung: "check",
      prompt: (
        <p>
          Does the value <M>{"f(c)"}</M> affect <M>{"\\lim_{x \\to c} f(x)"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Yes, the limit always equals f(c).",
          "No, the definition only looks at x with 0 < |x − c| < δ.",
          "Only if f is continuous.",
          "Only if c is irrational.",
        ],
        correct: [1],
      },
    },
    {
      key: "lim",
      rung: "check",
      prompt: (
        <p>
          What is <M>{"\\lim_{x \\to 0} x \\sin(1/x)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "delta",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"f(x) = 3x + 1"}</M> and <M>{"c = 2"}</M>, the limit is 7. Given <M>{"\\varepsilon = 0.3"}</M>, what is the
          largest <M>{"\\delta"}</M> that works?
        </p>
      ),
      answer: { kind: "numeric", value: 0.1, tolerance: 0.0001 },
    },
    {
      key: "seqs",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"f(x) = 1"}</M> for rational <M>{"x"}</M> and <M>{"0"}</M> for irrational <M>{"x"}</M>. How does the
          sequential criterion show that <M>{"\\lim_{x \\to 0} f(x)"}</M> does not exist?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Take x_n = 1/n, rational, giving values 1, and y_n = √2/n, irrational, giving values 0.",
          "Take x_n = n.",
          "f is not defined at 0.",
          "The criterion cannot be used here.",
        ],
        correct: [0],
      },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: (
        <p>
          Using <M>{"|x^2 - 4| = |x - 2||x + 2|"}</M> and restricting to <M>{"\\delta \\le 1"}</M>, so that{" "}
          <M>{"|x + 2| < 5"}</M>, which <M>{"\\delta"}</M> proves <M>{"x^2 \\to 4"}</M> as <M>{"x \\to 2"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["δ = ε", "δ = min(1, ε/5)", "δ = 5ε", "δ = ε²"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove from the definition that <M>{"\\lim_{x \\to 0} x \\sin(1/x) = 0"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes |x sin(1/x)| ≤ |x| since |sin| ≤ 1.",
          "Given ε, takes δ = ε.",
          "Concludes that 0 < |x| < δ gives |x sin(1/x) − 0| < ε.",
        ],
      },
    },
    {
      key: "alg",
      rung: "stretch",
      prompt: (
        <p>
          Use the sequential criterion to prove that if <M>{"f(x) \\to L"}</M> and <M>{"g(x) \\to M"}</M> as{" "}
          <M>{"x \\to c"}</M>, then <M>{"f(x) + g(x) \\to L + M"}</M>. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes any sequence x_n → c with x_n ≠ c.",
          "Uses the criterion to get f(x_n) → L and g(x_n) → M, and the algebraic limit theorem for sequences to get the sum → L + M.",
          "Concludes by the criterion in the other direction.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the epsilon-delta definition of a functional limit, why f(c) plays no part, how the sequential criterion links functional limits to sequences, and how it shows that sin(1/x) has no limit at 0.",

  glimpse: (
    <p>
      The next lesson defines continuity with the same machinery and proves that continuous functions on compact sets attain
      their maximum and minimum. After that, uniform continuity asks for one <M>{"\\delta"}</M> that works everywhere at
      once, and metric spaces generalise all of it.
    </p>
  ),
};
