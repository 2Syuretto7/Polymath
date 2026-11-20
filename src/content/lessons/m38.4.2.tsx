import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ArithHierarchyViz } from "@/components/viz/ArithHierarchyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.4.2",
  minutes: 90,
  links: {
    revisits: ["m38.4.1", "m20.4.2", "m20.4.4"],
    foreshadows: ["m38.4.3", "m38.5.2", "m20.4.3"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Machine e halts on input e&rsquo; says there is a number of steps after which it has halted. &lsquo;Machine
        e halts on every input&rsquo; says for every input there is such a number. &lsquo;Machine e halts on all but finitely
        many inputs&rsquo; needs one more alternation. Does each extra alternation of quantifiers make a problem genuinely
        harder?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build a quantifier prefix in front of a decidable relation, and see where the set it defines sits.</p>
      <ArithHierarchyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the arithmetical hierarchy">
        <p>
          A set of natural numbers is <M>{"\\Sigma_0 = \\Pi_0 = \\Delta_0"}</M> if it is decidable. It is{" "}
          <M>{"\\Sigma_{n+1}"}</M> if it has the form <M>{"\\{x : \\exists y\\, R(x, y)\\}"}</M> with R in <M>{"\\Pi_n"}</M>,
          and <M>{"\\Pi_{n+1}"}</M> if its complement is <M>{"\\Sigma_{n+1}"}</M>. It is <M>{"\\Delta_n"}</M> if it is both{" "}
          <M>{"\\Sigma_n"}</M> and <M>{"\\Pi_n"}</M>. Since pairs of numbers can be coded by single numbers, adjacent
          quantifiers of the same kind merge, so only alternations count. The sets definable in (ℕ, +, ·) are exactly those
          at some finite level.
        </p>
      </Definition>

      <Theorem title="Post’s theorem">
        <p>
          A set is <M>{"\\Sigma_{n+1}"}</M> exactly when it is c.e. relative to <M>{"\\emptyset^{(n)}"}</M>, and it is{" "}
          <M>{"\\Delta_{n+1}"}</M> exactly when it is computable from <M>{"\\emptyset^{(n)}"}</M>. Moreover{" "}
          <M>{"\\emptyset^{(n)}"}</M> is <M>{"\\Sigma_n"}</M>-complete. In particular <M>{"\\Sigma_1"}</M> sets are the c.e.
          sets, and <M>{"\\Delta_1"}</M> sets are the decidable ones.
        </p>
      </Theorem>

      <Example title="complete sets at each level">
        <p>
          K is <M>{"\\Sigma_1"}</M>-complete. Fin, the indices of machines halting on finitely many inputs, is{" "}
          <M>{"\\Sigma_2"}</M>-complete, and Tot, the indices of total machines, is <M>{"\\Pi_2"}</M>-complete. Cof, the
          indices with cofinite domain, is <M>{"\\Sigma_3"}</M>-complete. Each is proved complete by a many-one reduction
          from an arbitrary set of its class.
        </p>
      </Example>

      <Theorem title="the hierarchy is proper">
        <p>
          For every n, <M>{"\\Sigma_n \\neq \\Pi_n"}</M>, and <M>{"\\Sigma_n \\cup \\Pi_n"}</M> is strictly contained in{" "}
          <M>{"\\Delta_{n+1}"}</M>. This follows from Post&rsquo;s theorem and the fact that each jump is strictly harder
          than the last.
        </p>
      </Theorem>

      <Remark title="truth and beyond">
        <p>
          The set of true sentences of arithmetic is not at any finite level, since each level is definable and Tarski
          showed truth is not; its degree is <M>{"\\emptyset^{(\\omega)}"}</M>. The analytical hierarchy continues with
          quantifiers over sets of numbers, and descriptive set theory studies its analogues for sets of reals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "s1",
      rung: "check",
      prompt: <p>Which sets are exactly the Σ₁ sets?</p>,
      answer: { kind: "choice", options: ["The computably enumerable sets", "The decidable sets", "The finite sets", "The arithmetical sets"], correct: [0] },
    },
    {
      key: "merge",
      rung: "check",
      prompt: <p>Why do adjacent quantifiers of the same kind not raise the level?</p>,
      answer: { kind: "choice", options: ["Pairs of numbers can be coded as single numbers", "They cancel each other", "Quantifiers commute", "Only universal quantifiers count"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the prefix ∀x ∃y. Which class does the set belong to?</p>,
      answer: { kind: "choice", options: ["Π₂", "Σ₂", "Σ₁", "Δ₀"], correct: [0] },
    },
    {
      key: "tot",
      rung: "apply",
      prompt: <p>Tot is the set of indices of machines that halt on every input. Which class is it complete for?</p>,
      answer: { kind: "choice", options: ["Π₂", "Σ₁", "Π₁", "Σ₃"], correct: [0] },
    },
    {
      key: "post",
      rung: "apply",
      prompt: <p>By Post&rsquo;s theorem, which sets are computable from ∅′?</p>,
      answer: { kind: "choice", options: ["The Δ₂ sets", "The Σ₁ sets only", "The arithmetical sets", "The finite sets"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Tot is Π₂.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses a decidable relation H(e, x, s) saying that machine e halts on x within s steps.",
          "Writes Tot as {e : ∀x ∃s H(e, x, s)}.",
          "Concludes that Tot is Π₂ by the definition.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the set of true sentences of arithmetic at no finite level of the hierarchy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each Σₙ set is definable in arithmetic by a Σₙ formula.",
          "Notes that a set of codes for true sentences at a finite level would be definable, against Tarski's undefinability theorem.",
          "Concludes that truth sits above every finite level. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Between the computable sets and K, are there any other c.e. degrees? Post asked this in 1944, and the answer needed
        a new method of construction.
      </p>
      <p>Next, Post&rsquo;s problem and the priority method.</p>
    </>
  ),
};
