import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LiouvilleViz } from "@/components/viz/LiouvilleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.3.1",
  minutes: 85,
  links: {
    revisits: ["m13.2.3", "m12.1.4", "m2.3.3"],
    foreshadows: ["m13.3.2", "m13.4.2", "m13.6.3"],
  },

  puzzle: (
    <>
      <p>
        On the real line, sin x is smooth everywhere and never leaves [−1, 1]. Plenty of smooth real functions are bounded
        without being constant. Is there a function that is complex differentiable on the whole plane, bounded, and not
        constant?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Grow the circle and watch Cauchy&rsquo;s bound on |f′(0)|. Compare a bounded function with unbounded ones.</p>
      <LiouvilleViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Liouville’s theorem">
        <p>A bounded entire function is constant.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"|f| \\le M"}</M> on <M>{"\\mathbb{C}"}</M>. For any <M>{"a"}</M> and any <M>{"R > 0"}</M>,
          Cauchy&rsquo;s estimate on the circle of radius <M>{"R"}</M> about <M>{"a"}</M> gives{" "}
          <M>{"|f'(a)| \\le M/R"}</M>. Letting <M>{"R \\to \\infty"}</M>, <M>{"f'(a) = 0"}</M>. So{" "}
          <M>{"f' = 0"}</M> on the connected set <M>{"\\mathbb{C}"}</M>, and <M>{"f"}</M> is constant.
        </p>
      </Proof>

      <Theorem title="polynomial growth">
        <p>
          If <M>{"f"}</M> is entire and <M>{"|f(z)| \\le C(1 + |z|^n)"}</M> for all <M>{"z"}</M>, then{" "}
          <M>{"f"}</M> is a polynomial of degree at most <M>{"n"}</M>. Indeed{" "}
          <M>{"|f^{(k)}(0)| \\le k! \\, C(1 + R^n)/R^k \\to 0"}</M> for <M>{"k > n"}</M>, so the Taylor series stops.
        </p>
      </Theorem>

      <Example title="sine is unbounded">
        <p>
          <M>{"\\sin(iy) = i \\sinh y"}</M>, which grows exponentially. By Liouville this had to happen: sine is entire and not
          constant, so it cannot be bounded on <M>{"\\mathbb{C}"}</M>, however tame it is on the real line.
        </p>
      </Example>

      <Remark title="variations">
        <p>
          If <M>{"f"}</M> is entire and <M>{"\\operatorname{Re} f \\le c"}</M>, then <M>{"|e^{f}| = e^{\\operatorname{Re} f} \\le e^c"}</M>,
          so <M>{"e^f"}</M> and hence <M>{"f"}</M> is constant. Much more is true: Picard&rsquo;s little theorem says a
          non-constant entire function takes every complex value with at most one exception, as <M>{"e^z"}</M> misses only 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these entire functions is bounded on <M>{"\\mathbb{C}"}</M>?</p>,
      answer: { kind: "choice", options: ["sin z", "eᶻ", "7", "z²"], correct: [2] },
    },
    {
      key: "est",
      rung: "check",
      prompt: <p>An entire function satisfies <M>{"|f| \\le 10"}</M> on <M>{"|z| = 5"}</M>. What bound does Cauchy&rsquo;s estimate give for <M>{"|f'(0)|"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "growth",
      rung: "apply",
      prompt: <p>An entire function satisfies <M>{"|f(z)| \\le 3|z|^2 + 1"}</M> for all <M>{"z"}</M>. What is the largest possible degree of <M>{"f"}</M> as a polynomial?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "re",
      rung: "apply",
      prompt: <p>An entire function has <M>{"\\operatorname{Re} f(z) \\le 0"}</M> for every <M>{"z"}</M>. What can you conclude?</p>,
      answer: {
        kind: "choice",
        options: ["f is constant", "f is a polynomial of degree 1", "f has a zero", "Nothing"],
        correct: [0],
      },
    },
    {
      key: "sinh",
      rung: "apply",
      prompt: <p>Compute <M>{"|\\sin(3i)|"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 10.018, tolerance: 0.002 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove Liouville&rsquo;s theorem from Cauchy&rsquo;s estimates.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the estimate on a circle of radius R about an arbitrary point a: |f′(a)| ≤ M/R.",
          "Lets R tend to infinity to get f′(a) = 0.",
          "Concludes f is constant since f′ = 0 on the connected plane.",
        ],
      },
    },
    {
      key: "away",
      rung: "stretch",
      prompt: <p>Prove that an entire function with <M>{"|f(z)| \\ge 1"}</M> for all <M>{"z"}</M> is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes f has no zeros, so 1/f is entire.",
          "Notes |1/f| ≤ 1, so 1/f is constant by Liouville, hence so is f.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Liouville's theorem and its proof from Cauchy's estimates, why sin z must be unbounded on the complex plane, and what entire functions of polynomial growth must be.",

  glimpse: (
    <p>
      The next lesson uses Liouville to prove the fundamental theorem of algebra in three lines. Later, Liouville-type
      arguments classify singularities and prove the Schwarz lemma&rsquo;s cousins.
    </p>
  ),
};
