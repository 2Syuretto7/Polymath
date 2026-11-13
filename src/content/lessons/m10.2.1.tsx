import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PicardViz } from "@/components/viz/PicardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.2.1",
  minutes: 90,
  links: {
    revisits: ["m10.1.1", "m12.2.3", "m6.8.1"],
    foreshadows: ["m10.2.2", "m10.2.3", "m19.6.1"],
  },

  puzzle: (
    <>
      <p>
        Most differential equations cannot be solved by any formula. Yet we confidently speak of &ldquo;the&rdquo; solution
        through a given point. How can we know a solution exists, and that there is only one, without ever writing it down?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Start with a crude guess, the constant function, and improve it by feeding it through the equation again and again.
        Increase the number of iterations and watch the guesses close in on the true solution.
      </p>
      <PicardViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the integral equation">
        <p>
          A continuous function <M>{"y"}</M> solves <M>{"y' = f(t, y)"}</M>, <M>{"y(t_0) = y_0"}</M>, with <M>{"f"}</M>{" "}
          continuous, if and only if
        </p>
        <MD>{"y(t) = y_0 + \\int_{t_0}^{t} f(s, y(s))\\,ds."}</MD>
      </Theorem>

      <Proof>
        <p>
          If <M>{"y"}</M> solves the problem, integrate <M>{"y'"}</M> from <M>{"t_0"}</M> to <M>{"t"}</M>. Conversely, the
          right side is differentiable by the fundamental theorem of calculus, with derivative <M>{"f(t, y(t))"}</M>, and
          equals <M>{"y_0"}</M> at <M>{"t_0"}</M>.
        </p>
      </Proof>

      <Definition title="Picard iterates">
        <p>
          Set <M>{"\\varphi_0(t) = y_0"}</M> and <M>{"\\varphi_{k+1}(t) = y_0 + \\int_{t_0}^{t} f(s, \\varphi_k(s))\\,ds"}</M>.
          A solution is exactly a fixed point of the map <M>{"\\varphi \\mapsto y_0 + \\int f(s, \\varphi)"}</M>.
        </p>
      </Definition>

      <Example title="y′ = y, y(0) = 1">
        <p>
          <M>{"\\varphi_1 = 1 + t"}</M>, <M>{"\\varphi_2 = 1 + t + t^2/2"}</M>, and in general{" "}
          <M>{"\\varphi_k = \\sum_{j=0}^{k} t^j / j!"}</M>. The iterates are the Taylor polynomials of <M>{"e^t"}</M>, and
          converge to it.
        </p>
      </Example>

      <Theorem title="Picard–Lindelöf">
        <p>
          Let <M>{"f"}</M> be continuous on <M>{"R = \\{|t - t_0| \\le a,\\ |y - y_0| \\le b\\}"}</M> with{" "}
          <M>{"|f| \\le K"}</M>, and Lipschitz in <M>{"y"}</M>: <M>{"|f(t, y) - f(t, z)| \\le L|y - z|"}</M>. Put{" "}
          <M>{"h = \\min(a, b/K)"}</M>. Then the Picard iterates converge uniformly on <M>{"|t - t_0| \\le h"}</M> to a
          solution, and it is the only solution there.
        </p>
      </Theorem>

      <Proof>
        <p>
          The iterates stay in <M>{"R"}</M>, since <M>{"|\\varphi_{k+1}(t) - y_0| \\le K|t - t_0| \\le Kh \\le b"}</M>. By
          induction, using the Lipschitz bound inside the integral,
        </p>
        <MD>{"|\\varphi_{k+1}(t) - \\varphi_k(t)| \\le \\frac{K L^k |t - t_0|^{k+1}}{(k+1)!}."}</MD>
        <p>
          These bounds sum to a finite total, so by the Weierstrass M-test the iterates converge uniformly to a continuous{" "}
          <M>{"\\varphi"}</M>. The Lipschitz bound lets us pass to the limit under the integral, so <M>{"\\varphi"}</M>{" "}
          satisfies the integral equation. Uniqueness is proved in the next two lessons.
        </p>
      </Proof>

      <Remark title="a contraction in disguise">
        <p>
          With a suitably weighted sup norm, the Picard map is a contraction on the complete space of continuous functions
          staying in <M>{"R"}</M>, and the contraction mapping theorem gives existence and uniqueness at once. The theorem is
          local: for <M>{"y' = y^2"}</M>, <M>{"y(0) = 1"}</M>, the solution <M>{"1/(1 - t)"}</M> does not survive past{" "}
          <M>{"t = 1"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "integral",
      rung: "check",
      prompt: <p>Which integral equation is equivalent to <M>{"y' = f(t, y)"}</M>, <M>{"y(0) = 3"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["y(t) = 3 + ∫₀ᵗ f(s, y(s)) ds", "y(t) = ∫₀ᵗ f(s, y(s)) ds", "y(t) = 3 f(t, y(t))", "y(t) = 3 + f(t, y(t))"],
        correct: [0],
      },
    },
    {
      key: "first",
      rung: "check",
      prompt: <p>For <M>{"y' = y"}</M>, <M>{"y(0) = 1"}</M>, what is the first Picard iterate <M>{"\\varphi_1"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "1 + t", "eᵗ", "t"], correct: [1] },
    },
    {
      key: "second",
      rung: "apply",
      prompt: <p>For <M>{"y' = 2ty"}</M>, <M>{"y(0) = 1"}</M>, compute <M>{"\\varphi_2"}</M> and give <M>{"\\varphi_2(1)"}</M>.</p>,
      answer: { kind: "numeric", value: 2.5, tolerance: 0.001 },
    },
    {
      key: "h",
      rung: "apply",
      prompt: <p>On a rectangle with <M>{"a = 1"}</M>, <M>{"b = 2"}</M> and <M>{"|f| \\le 4"}</M>, how long an interval <M>{"h"}</M> on each side of <M>{"t_0"}</M> does Picard&ndash;Lindel&ouml;f guarantee?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why do the bounds <M>{"KL^k h^{k+1}/(k+1)!"}</M> have a finite sum?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because L is less than 1.",
          "Because the factorial eventually grows faster than any power, so they are the terms of a convergent exponential series.",
          "Because h is less than 1.",
          "Because f is bounded.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for <M>{"y' = y"}</M>, <M>{"y(0) = 1"}</M>, the <M>{"k"}</M>th Picard iterate is <M>{"\\sum_{j=0}^{k} t^j/j!"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks the case k = 0.",
          "Assumes the formula for k and integrates term by term to get 1 + Σ t^(j+1)/(j+1)!.",
          "Concludes the formula for k + 1 by induction.",
        ],
      },
    },
    {
      key: "local",
      rung: "stretch",
      prompt: <p>Why can Picard&ndash;Lindel&ouml;f only promise a solution on a short interval? Use <M>{"y' = y^2"}</M> to illustrate.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that h = min(a, b/K) is limited by how far the solution can travel in the rectangle.",
          "Uses y = 1/(1 − t) to show a solution may blow up in finite time.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how an initial value problem becomes an integral equation, how Picard iteration builds a solution step by step, what Picard–Lindelöf guarantees, and why the guarantee is only local.",

  glimpse: (
    <p>
      The next lesson isolates the Lipschitz condition that made the iteration work. Later lessons ask how solutions depend on
      their starting point, and numerical analysis turns stepwise approximation into practical algorithms.
    </p>
  ),
};
