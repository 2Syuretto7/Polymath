import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SplineViz } from "@/components/viz/SplineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.3.2",
  minutes: 90,
  links: {
    revisits: ["m19.3.1", "m2.9.5", "m3.5.3"],
    foreshadows: ["m19.3.3", "m19.4.2", "m19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Shipbuilders once drew smooth curves through fixed points by bending a thin strip of wood, called a spline, held by
        lead weights. The strip settles into the shape that bends least. What curve does it make, and can a computer copy it
        without Runge&rsquo;s wild oscillations?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase the number of intervals. Compare the spline with the single polynomial through the same points.</p>
      <SplineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="cubic splines">
        <p>
          Given nodes <M>{"a = x_0 < x_1 < \\dots < x_n = b"}</M>, a <strong>cubic spline</strong> is a function that is a
          cubic polynomial on each <M>{"[x_{i-1}, x_i]"}</M> and has continuous first and second derivatives at the interior
          nodes. Interpolating n + 1 values fixes 4n coefficients up to two conditions; the <strong>natural</strong> spline
          takes <M>{"s''(a) = s''(b) = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="computation">
        <p>
          Writing <M>{"M_i = s''(x_i)"}</M>, continuity of the first derivative gives, at each interior node,
        </p>
        <MD>{"h_{i-1}M_{i-1} + 2(h_{i-1} + h_i)M_i + h_i M_{i+1} = 6\\Big(\\frac{y_{i+1} - y_i}{h_i} - \\frac{y_i - y_{i-1}}{h_{i-1}}\\Big),"}</MD>
        <p>
          with <M>{"h_i = x_{i+1} - x_i"}</M>. This system is tridiagonal and diagonally dominant, so it has a unique solution,
          found in O(n) operations.
        </p>
      </Theorem>

      <Example title="minimal bending">
        <p>
          Among all twice-differentiable functions through the data, the natural cubic spline minimises{" "}
          <M>{"\\int_a^b f''(x)^2\\,dx"}</M>, a linearised measure of the bending energy of the strip. That is why the drafting
          tool and the mathematics agree.
        </p>
      </Example>

      <Remark title="accuracy">
        <p>
          For a smooth function and equally spaced nodes of spacing h, the interpolating cubic spline (with suitable end
          conditions) has error <M>{"O(h^4)"}</M>: halving h divides the error by about 16. The error is local, so adding
          points never causes trouble elsewhere. Splines underlie computer fonts, animation paths and the B-spline curves of
          computer-aided design.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a cubic spline?</p>,
      answer: {
        kind: "choice",
        options: [
          "A piecewise cubic with continuous first and second derivatives at the joins.",
          "A single cubic through all the points.",
          "A piecewise linear function.",
          "A cubic with no turning points.",
        ],
        correct: [0],
      },
    },
    {
      key: "natural",
      rung: "check",
      prompt: <p>What end conditions define the natural cubic spline?</p>,
      answer: { kind: "choice", options: ["Zero second derivative at both ends", "Zero first derivative at both ends", "Zero value at both ends", "No conditions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 20 intervals, which interpolant has the larger maximum error?</p>,
      answer: { kind: "choice", options: ["The single polynomial", "The spline", "They are equal", "Neither has any error"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>A cubic spline on 10 intervals has how many polynomial coefficients in total?</p>,
      answer: { kind: "numeric", value: 40 },
    },
    {
      key: "h4",
      rung: "apply",
      prompt: <p>A spline has error 0.0032 with spacing h. If the error is O(h⁴), roughly what is it with spacing h/2? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0002, tolerance: 0.00002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Count the conditions for a cubic spline interpolating n + 1 points, and show that two extra conditions are needed.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Counts 4n unknown coefficients for n cubics.",
          "Counts 2n interpolation conditions (each cubic matches both its endpoints) and 2(n − 1) smoothness conditions on first and second derivatives at the interior nodes.",
          "Concludes 4n − 2 conditions, so two more, such as the natural end conditions, are needed.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a spline not suffer from Runge&rsquo;s phenomenon?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the degree stays at 3 however many points are added, so high derivatives of the interpolant do not grow.",
          "Explains that the error on each interval depends on h⁴ times a bounded derivative of f, so it goes to zero as h does.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Chebyshev approximation: why the Chebyshev nodes are the right ones, and how to find the best polynomial
      approximation in the maximum norm.
    </p>
  ),
};
