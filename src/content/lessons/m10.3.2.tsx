import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { UndeterminedViz } from "@/components/viz/UndeterminedViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.3.2",
  minutes: 85,
  links: {
    revisits: ["m10.3.1", "m10.1.2", "m3.2.3"],
    foreshadows: ["m10.3.3", "m10.3.4", "m10.6.2"],
  },

  puzzle: (
    <>
      <p>
        Push a damped spring with a steady rhythm and, after a while, it moves to the same rhythm. That suggests a shortcut:
        guess that the response looks like the push, and solve only for the unknown numbers. When does the shortcut work, and
        what goes wrong when the push matches a motion the spring makes on its own?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a forcing term, read the guess and why it was chosen, and watch the solution from rest settle onto it.</p>
      <UndeterminedViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="structure of solutions">
        <p>
          If <M>{"y_p"}</M> is any one solution of <M>{"y'' + by' + cy = g"}</M>, every solution is{" "}
          <M>{"y = y_p + y_h"}</M>, where <M>{"y_h"}</M> solves the homogeneous equation <M>{"y'' + by' + cy = 0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"L[y] = y'' + by' + cy"}</M>, which is linear. If <M>{"L[y] = g"}</M> then{" "}
          <M>{"L[y - y_p] = g - g = 0"}</M>. Conversely <M>{"L[y_p + y_h] = g + 0"}</M>.
        </p>
      </Proof>

      <Remark title="the method of undetermined coefficients">
        <p>
          When <M>{"g"}</M> is a polynomial, an exponential <M>{"e^{kt}"}</M>, a sine or cosine, or a product of these, its
          derivatives stay in a finite family. Guess <M>{"y_p"}</M> as a general member of that family with unknown
          coefficients, substitute, and match terms.
        </p>
        <MD>{"\\begin{array}{ll} g = \\text{polynomial of degree } n & y_p = A_nt^n + \\dots + A_0 \\\\ g = e^{kt} & y_p = Ae^{kt} \\\\ g = \\cos\\omega t \\text{ or } \\sin\\omega t & y_p = A\\cos\\omega t + B\\sin\\omega t \\end{array}"}</MD>
      </Remark>

      <Theorem title="the modification rule">
        <p>
          With <M>{"p(r) = r^2 + br + c"}</M>, <M>{"L[e^{kt}] = p(k)e^{kt}"}</M> and{" "}
          <M>{"L[te^{kt}] = (p(k)t + p'(k))e^{kt}"}</M>. So if <M>{"k"}</M> is a simple root of <M>{"p"}</M>, try{" "}
          <M>{"Ate^{kt}"}</M>, giving <M>{"A = 1/p'(k)"}</M>; if a double root, try <M>{"At^2e^{kt}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"(te^{kt})' = (1 + kt)e^{kt}"}</M> and <M>{"(te^{kt})'' = (2k + k^2t)e^{kt}"}</M>. Adding with coefficients{" "}
          <M>{"1, b, c"}</M> gives <M>{"((k^2 + bk + c)t + 2k + b)e^{kt} = (p(k)t + p'(k))e^{kt}"}</M>.
        </p>
      </Proof>

      <Example title="a resonant exponential">
        <p>
          For <M>{"y'' + 3y' + 2y = e^{-t}"}</M>, <M>{"p(r) = (r + 1)(r + 2)"}</M> has root <M>{"-1"}</M>, so{" "}
          <M>{"Ae^{-t}"}</M> gives <M>{"0 = e^{-t}"}</M>, which is impossible. With <M>{"Ate^{-t}"}</M>,{" "}
          <M>{"A = 1/p'(-1) = 1"}</M>, so <M>{"y_p = te^{-t}"}</M>.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "struct",
      rung: "check",
      prompt: <p>If <M>{"y_p"}</M> is one solution of a forced linear equation, what are all the solutions?</p>,
      answer: {
        kind: "choice",
        options: ["y_p alone", "y_p plus any solution of the homogeneous equation", "y_p times a constant", "Only the homogeneous solutions"],
        correct: [1],
      },
    },
    {
      key: "trial",
      rung: "check",
      prompt: <p>What trial form suits <M>{"y'' + y' + y = 5\\sin 2t"}</M>?</p>,
      answer: { kind: "choice", options: ["A sin 2t", "A cos 2t + B sin 2t", "Ate^(2t)", "At² + Bt + C"], correct: [1] },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>Find the constant particular solution of <M>{"y'' + 4y' + 5y = 15"}</M>.</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>For <M>{"y'' - y = e^{2t}"}</M>, the particular solution is <M>{"Ae^{2t}"}</M>. Find <M>{"A"}</M>.</p>,
      answer: { kind: "numeric", value: 1 / 3, tolerance: 0.001 },
    },
    {
      key: "mod",
      rung: "apply",
      prompt: <p>For <M>{"y'' - y = e^{t}"}</M>, the particular solution is <M>{"Ate^{t}"}</M>. Find <M>{"A"}</M>.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"p(k) \\ne 0"}</M>, then <M>{"y_p = e^{kt}/p(k)"}</M> solves <M>{"y'' + by' + cy = e^{kt}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the first and second derivatives of e^(kt).",
          "Shows L[e^(kt)] = p(k)e^(kt).",
          "Divides by p(k), which is allowed since it is non-zero.",
        ],
      },
    },
    {
      key: "limits",
      rung: "stretch",
      prompt: <p>Why does undetermined coefficients fail for a forcing like <M>{"g(t) = \\tan t"}</M> or <M>{"1/t"}</M>? What property of the usual forcings does it rely on?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the method needs the derivatives of g to stay in a finite-dimensional family.",
          "Observes that tan t and 1/t generate infinitely many independent derivatives.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why every solution of a forced linear equation is a particular solution plus a homogeneous one, how to choose the trial form for undetermined coefficients, and why the guess must be multiplied by t when the forcing solves the homogeneous equation.",

  glimpse: (
    <p>
      The next lesson gives a method that works for any forcing, and the one after studies what happens when forcing matches
      the natural frequency. The Laplace transform later turns these calculations into algebra.
    </p>
  ),
};
