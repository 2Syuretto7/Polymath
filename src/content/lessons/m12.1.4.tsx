import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BisectSubseqViz } from "@/components/viz/BisectSubseqViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.1.4",
  minutes: 90,
  links: {
    revisits: ["m6.4.2", "m12.1.3", "m12.1.2"],
    foreshadows: ["m12.2.1", "m12.2.2", "m15.2.2"],
  },

  puzzle: (
    <>
      <p>
        The numbers sin 1, sin 2, sin 3, … wander around [−1, 1] forever without settling. Yet somewhere inside them hides a
        subsequence that converges. Why must it, and which spaces guarantee this for every sequence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Bisect the interval, keep a half with infinitely many terms, and pick a later term from it each time. Watch the
        subsequence home in.
      </p>
      <BisectSubseqViz />
    </>
  ),

  theory: (
    <>
      <Definition title="compactness">
        <p>
          A metric space <M>{"K"}</M> is <strong>sequentially compact</strong> if every sequence in <M>{"K"}</M> has a
          subsequence converging to a point of <M>{"K"}</M>. It is <strong>compact</strong> if every cover of{" "}
          <M>{"K"}</M> by open sets has a finite subcover. For metric spaces the two notions agree.
        </p>
      </Definition>

      <Theorem title="Heine–Borel">
        <p>
          A subset of <M>{"\\mathbb{R}^n"}</M> is compact if and only if it is closed and bounded.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"K"}</M> be closed and bounded and <M>{"(x_k)"}</M> a sequence in it. The first coordinates form a bounded
          real sequence, which has a convergent subsequence by Bolzano–Weierstrass. Along that subsequence, take a further
          subsequence on which the second coordinates converge, and so on through all <M>{"n"}</M>. The final subsequence
          converges in every coordinate, hence in <M>{"\\mathbb{R}^n"}</M>, and its limit lies in <M>{"K"}</M> because{" "}
          <M>{"K"}</M> is closed.
        </p>
        <p>
          Conversely, in any metric space a sequentially compact <M>{"K"}</M> is bounded: otherwise pick{" "}
          <M>{"x_k"}</M> with <M>{"d(x_k, x_0) > k"}</M>, which has no convergent subsequence. It is closed: if{" "}
          <M>{"x_k \\to x"}</M> with <M>{"x_k \\in K"}</M>, a subsequence converges in <M>{"K"}</M>, and its limit is{" "}
          <M>{"x"}</M>.
        </p>
      </Proof>

      <Example title="closed and bounded is not enough in general">
        <p>
          In <M>{"C[0, 1]"}</M> with the sup metric, let <M>{"f_k"}</M> be a tent of height 1 on{" "}
          <M>{"[2^{-k-1}, 2^{-k}]"}</M>. The tents have disjoint supports, so <M>{"d(f_j, f_k) = 1"}</M> for{" "}
          <M>{"j \\ne k"}</M>, and no subsequence is Cauchy. So the closed unit ball is closed and bounded but not compact.
          With the discrete metric, any infinite set is closed and bounded by 1 but not compact.
        </p>
      </Example>

      <Remark title="why compactness matters">
        <p>
          Compactness turns local information into global information. Continuous functions on compact spaces are bounded,
          attain their extreme values, and are uniformly continuous. Compact metric spaces are also complete and{" "}
          <strong>totally bounded</strong>: for every <M>{"\\varepsilon > 0"}</M> they are covered by finitely many{" "}
          <M>{"\\varepsilon"}</M>-balls. Conversely, complete and totally bounded spaces are compact.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which subset of ℝ is compact?</p>,
      answer: { kind: "choice", options: ["(0, 1)", "[0, ∞)", "[0, 1] ∪ [2, 3]", "ℚ ∩ [0, 1]"], correct: [2] },
    },
    {
      key: "hb",
      rung: "check",
      prompt: <p>The Heine–Borel theorem says a subset of ℝⁿ is compact if and only if it is what?</p>,
      answer: { kind: "choice", options: ["Open and bounded", "Closed and bounded", "Closed", "Finite"], correct: [1] },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: <p>Which sequence in (0, 1] has no subsequence converging in (0, 1]?</p>,
      answer: { kind: "choice", options: ["1/2, 1/2, 1/2, …", "1/n", "1 − 1/(n + 1)", "(1 + (−1)ⁿ)/4 + 1/2"], correct: [1] },
    },
    {
      key: "cover",
      rung: "apply",
      prompt: <p>The open intervals (1/n, 1) for n = 2, 3, … cover (0, 1). How many of them are needed to cover [0.01, 0.99]?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "tb",
      rung: "apply",
      prompt: <p>What is the smallest number of open intervals of radius 0.1 (length 0.2) needed to cover [0, 1]?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a closed subset of a compact metric space is compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a sequence in the closed subset F.",
          "Uses compactness of the whole space to get a convergent subsequence.",
          "Uses closedness of F to put the limit in F.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the set of points (x, sin(1/x)) for 0 &lt; x ≤ 1 compact? What would you add to make it compact?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the set is bounded but not closed.",
          "Identifies the missing limit points, the segment {0} × [−1, 1].",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what compactness means for sequences and for open covers, why closed and bounded sets in ℝⁿ are compact, and why closed and bounded is not enough in a space of functions.",

  glimpse: (
    <p>
      The next lessons use compactness to prove that continuous functions attain their bounds and are uniformly continuous.
      In topology, compactness defined by open covers becomes one of the central ideas.
    </p>
  ),
};
