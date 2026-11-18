import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FiniteDiffViz } from "@/components/viz/FiniteDiffViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.4.1",
  minutes: 80,
  links: {
    revisits: ["m19.1.2", "m6.6.3", "m6.6.1"],
    foreshadows: ["m19.4.2", "m19.6.1", "m19.6.2"],
  },

  puzzle: (
    <>
      <p>
        The derivative is the limit of (f(x + h) − f(x))/h as h tends to 0. A computer cannot take limits, so take h very
        small instead: surely h = 10⁻¹⁵ beats h = 10⁻⁵? Try it on sin at 1 and the answer is worse, not better. Where does
        the accuracy go?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide h from 1 down to 10⁻¹⁶ and watch the errors of two difference formulas.</p>
      <FiniteDiffViz />
    </>
  ),

  theory: (
    <>
      <Definition title="difference quotients">
        <p>The forward, central and second difference formulas are</p>
        <MD>{"D_+f = \\frac{f(x+h)-f(x)}{h},\\qquad D_0f = \\frac{f(x+h)-f(x-h)}{2h},\\qquad D^2f = \\frac{f(x+h)-2f(x)+f(x-h)}{h^2}."}</MD>
      </Definition>

      <Theorem title="truncation errors">
        <p>
          By Taylor&rsquo;s theorem with remainder, <M>{"f(x+h) = f(x) + hf'(x) + \\tfrac{h^2}{2}f''(\\xi)"}</M>, so{" "}
          <M>{"D_+f - f'(x) = \\tfrac{h}{2}f''(\\xi)"}</M>: first order. Expanding to third order on both sides, the even terms
          cancel in <M>{"D_0f"}</M>, and by the intermediate value theorem
        </p>
        <MD>{"D_0f - f'(x) = \\frac{h^2}{6}f'''(\\eta),\\qquad D^2f - f''(x) = \\frac{h^2}{12}f^{(4)}(\\zeta)."}</MD>
        <p>Symmetry buys an order of accuracy for free.</p>
      </Theorem>

      <Example title="the rounding floor">
        <p>
          The values of f carry relative errors of about the unit roundoff <M>{"u \\approx 1.1\\times 10^{-16}"}</M>. Their
          difference f(x + h) − f(x) is a cancellation of nearly equal numbers, so its absolute error, about{" "}
          <M>{"2u|f|"}</M>, is divided by h. The total error of the forward difference is roughly
        </p>
        <MD>{"E(h) \\approx \\frac{Mh}{2} + \\frac{2u|f|}{h},"}</MD>
        <p>
          minimised near <M>{"h \\approx 2\\sqrt{u|f|/M}"}</M>, about 10⁻⁸, with an error of about 10⁻⁸. For the central
          difference the best h is about <M>{"u^{1/3}"}</M>, near 10⁻⁵, with an error near 10⁻¹¹. Differentiation loses
          digits; integration, in the next lesson, does not.
        </p>
      </Example>

      <Remark title="Richardson extrapolation">
        <p>
          The central error has an expansion <M>{"D_0(h) = f'(x) + c_2h^2 + c_4h^4 + \\cdots"}</M>. Then{" "}
          <M>{"\\tfrac{1}{3}(4D_0(h/2) - D_0(h))"}</M> cancels the <M>{"h^2"}</M> term and is fourth order. Knowing the form of
          an error lets you remove it, an idea that returns in Romberg integration and in step-size control for differential
          equations. When f is analytic, complex-step differentiation, <M>{"\\operatorname{Im} f(x+ih)/h"}</M>, avoids the
          cancellation altogether.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of the truncation error of the central difference?</p>,
      answer: { kind: "choice", options: ["h²", "h", "h³", "1/h"], correct: [0] },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why does the error grow when h becomes very small?</p>,
      answer: {
        kind: "choice",
        options: [
          "f(x + h) − f(x) subtracts nearly equal numbers, and the rounding error is then divided by h.",
          "Taylor’s theorem fails for small h.",
          "The computer cannot store small numbers.",
          "The derivative does not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "fwd",
      rung: "apply",
      prompt: <p>Compute the forward difference of f(x) = x² at x = 1 with h = 0.1.</p>,
      answer: { kind: "numeric", value: 2.1, tolerance: 0.0001 },
    },
    {
      key: "ctr",
      rung: "apply",
      prompt: <p>Compute the central difference of f(x) = x³ at x = 1 with h = 0.1.</p>,
      answer: { kind: "numeric", value: 3.01, tolerance: 0.0001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at about which power of ten is the forward difference most accurate? Give the exponent, for example −3.</p>,
      answer: { kind: "numeric", value: -8, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if f has a continuous third derivative, the central difference has error <M>{"\\tfrac{h^2}{6}f'''(\\eta)"}</M> for some η in [x − h, x + h].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands f(x + h) and f(x − h) by Taylor’s theorem to third order with remainders.",
          "Subtracts so that the f(x) and f″(x) terms cancel and divides by 2h.",
          "Combines the two remainders into one using the intermediate value theorem.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why <M>{"\\tfrac{1}{3}(4D_0(h/2) - D_0(h))"}</M> is fourth-order accurate, and say what happens to its rounding error.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes D₀(h) and D₀(h/2) using the expansion in even powers of h.",
          "Shows that the combination cancels the h² term, leaving an h⁴ error.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, integration, the stable twin of differentiation: the trapezium and Simpson rules, how fast their errors fall,
      and a surprise for periodic functions.
    </p>
  ),
};
