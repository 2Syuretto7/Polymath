import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { JumpRationalViz } from "@/components/viz/JumpRationalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.5.4",
  minutes: 80,
  links: {
    revisits: ["m6.5.1", "m6.1.3", "m6.2.2"],
    foreshadows: ["m6.7.4", "m6.6.1", "m22.1.4"],
  },

  puzzle: (
    <>
      <p>
        A function can be discontinuous everywhere: Dirichlet&rsquo;s function, 1 on the rationals and 0 on the irrationals,
        jumps in every interval. But suppose a function is increasing. Can it still be discontinuous at a great many points,
        say at every rational? At uncountably many points? An increasing function can only go up, and its total rise from{" "}
        <M>{"f(a)"}</M> to <M>{"f(b)"}</M> is finite. How much room does that leave for jumps?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        This increasing function jumps at the first few rationals in <M>{"(0, 1)"}</M>, with jumps of size{" "}
        <M>{"\\tfrac12, \\tfrac14, \\tfrac18, \\ldots"}</M>. Add more jumps and look at the gaps they leave on the vertical
        axis.
      </p>
      <JumpRationalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="one-sided limits and kinds of discontinuity">
        <p>
          The <strong>one-sided limits</strong> <M>{"f(c^-) = \\lim_{x \\to c^-} f(x)"}</M> and{" "}
          <M>{"f(c^+) = \\lim_{x \\to c^+} f(x)"}</M> use only points on one side of <M>{"c"}</M>. A discontinuity is{" "}
          <strong>removable</strong> if both exist and are equal but differ from <M>{"f(c)"}</M>; a{" "}
          <strong>jump</strong> if both exist and differ; and <strong>essential</strong> otherwise, as for{" "}
          <M>{"\\sin(1/x)"}</M> at 0.
        </p>
      </Definition>

      <Theorem title="monotone functions have one-sided limits">
        <p>
          If <M>{"f"}</M> is increasing on <M>{"(a, b)"}</M>, then at every point both one-sided limits exist, with{" "}
          <M>{"f(c^-) = \\sup_{x < c} f(x) \\le f(c) \\le \\inf_{x > c} f(x) = f(c^+)"}</M>. So every discontinuity of a
          monotone function is a jump.
        </p>
      </Theorem>

      <Proof>
        <p>
          The set <M>{"\\{f(x) : x < c\\}"}</M> is bounded above by <M>{"f(c)"}</M>, so it has a supremum{" "}
          <M>{"s"}</M>. Given <M>{"\\varepsilon"}</M>, some <M>{"x_0 < c"}</M> has <M>{"f(x_0) > s - \\varepsilon"}</M>, and
          for <M>{"x_0 < x < c"}</M> monotonicity gives <M>{"s - \\varepsilon < f(x_0) \\le f(x) \\le s"}</M>. So{" "}
          <M>{"f(c^-) = s"}</M>. The right-hand limit is similar.
        </p>
      </Proof>

      <Theorem title="countably many discontinuities">
        <p>A monotone function has at most countably many points of discontinuity.</p>
      </Theorem>

      <Example title="the proof">
        <p>
          At each discontinuity <M>{"c"}</M> of an increasing <M>{"f"}</M>, the open interval{" "}
          <M>{"(f(c^-), f(c^+))"}</M> is non-empty. For <M>{"c < d"}</M>, any <M>{"x"}</M> between them gives
        </p>
        <MD>{"f(c^+) \\le f(x) \\le f(d^-),"}</MD>
        <p>
          so the intervals for different discontinuities are disjoint. Choose a rational in each. This gives a one-to-one map
          from the discontinuities into <M>{"\\mathbb{Q}"}</M>, which is countable.
        </p>
      </Example>

      <Remark title="every countable set can occur">
        <p>
          The bound is sharp. List any countable set as <M>{"c_1, c_2, \\ldots"}</M> and put{" "}
          <M>{"f(x) = \\sum_{c_k \\le x} 2^{-k}"}</M>: an increasing function, continuous exactly off the set. Taking the
          rationals gives an increasing function discontinuous at every rational and continuous at every irrational. By
          contrast, no function at all is continuous exactly at the rationals; that needs the Baire category theorem. Monotone
          functions are also integrable, and Lebesgue showed they are differentiable almost everywhere.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: (
        <p>
          What kind of discontinuity does the floor function <M>{"\\lfloor x \\rfloor"}</M> have at <M>{"x = 2"}</M>?
        </p>
      ),
      answer: { kind: "choice", options: ["Removable", "Jump", "Essential", "None"], correct: [1] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>What is the most an increasing function on (0, 1) can have, in number of discontinuities?</p>,
      answer: {
        kind: "choice",
        options: ["Finitely many", "Countably many", "Uncountably many", "None"],
        correct: [1],
      },
    },
    {
      key: "size",
      rung: "apply",
      prompt: (
        <p>
          In the viz, the jumps have sizes <M>{"\\tfrac12, \\tfrac14, \\tfrac18, \\ldots"}</M>. If the jumps were at every
          rational, what would their total be?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "lim",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"f(x) = x"}</M> for <M>{"x < 1"}</M> and <M>{"f(x) = x + 2"}</M> for <M>{"x \\ge 1"}</M>. What is the size
          of the jump, <M>{"f(1^+) - f(1^-)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "big",
      rung: "apply",
      prompt: (
        <p>
          An increasing function on <M>{"[0, 1]"}</M> has <M>{"f(0) = 0"}</M> and <M>{"f(1) = 1"}</M>. At most how many jumps
          of size at least <M>{"\\tfrac1{10}"}</M> can it have?
        </p>
      ),
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that an increasing function has at most countably many discontinuities. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes each discontinuity c gives a non-empty open interval (f(c−), f(c+)).",
          "Shows the intervals for different discontinuities are disjoint.",
          "Picks a rational in each, giving an injection into ℚ, so the set is countable.",
        ],
      },
    },
    {
      key: "count2",
      rung: "stretch",
      prompt: (
        <p>
          Give a second proof by counting: for each <M>{"n"}</M>, how many jumps of size at least <M>{"1/n"}</M> can an
          increasing function on <M>{"[a, b]"}</M> have? A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the jumps add up to at most f(b) − f(a).",
          "Concludes there are at most n(f(b) − f(a)) jumps of size at least 1/n, a finite number.",
          "Notes every jump is at least 1/n for some n, so the set of jumps is a countable union of finite sets.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three kinds of discontinuity, why monotone functions have one-sided limits everywhere, why their discontinuities are countable, and how to build an increasing function that jumps at every rational.",

  glimpse: (
    <p>
      The next chapter defines the derivative rigorously. Monotone functions return in the theory of integration: Lebesgue&rsquo;s
      criterion shows they are always integrable, and measure theory shows they are differentiable almost everywhere.
    </p>
  ),
};
