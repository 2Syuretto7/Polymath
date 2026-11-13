import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TietzeViz } from "@/components/viz/TietzeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.3.5",
  minutes: 85,
  links: {
    revisits: ["m15.3.3", "m15.3.2", "m12.1.3"],
    foreshadows: ["m15.4.1", "m26.1.3", "m23.3.1"],
  },

  puzzle: (
    <>
      <p>
        A continuous function is given on a closed set, say on two separate intervals. Can it always be extended to a
        continuous function on the whole space, without making it any larger? On an open set the answer is no:{" "}
        <M>{"\\sin(1/x)"}</M> on <M>{"(0, 1]"}</M> has no continuous extension to 0. What is special about closed sets?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add corrections one at a time and watch the extension close in on the given function.</p>
      <TietzeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Tietze extension">
        <p>
          Let <M>{"X"}</M> be normal and <M>{"A \\subseteq X"}</M> closed. Every continuous <M>{"f : A \\to [-1, 1]"}</M>{" "}
          extends to a continuous <M>{"F : X \\to [-1, 1]"}</M>. Every continuous <M>{"f : A \\to \\mathbb{R}"}</M> extends to
          a continuous <M>{"F : X \\to \\mathbb{R}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The key step: if <M>{"|f| \\leq c"}</M> on <M>{"A"}</M>, let <M>{"P = \\{f \\geq c/3\\}"}</M> and{" "}
          <M>{"N = \\{f \\leq -c/3\\}"}</M>, disjoint closed subsets of <M>{"A"}</M>, hence of <M>{"X"}</M>. Urysohn gives{" "}
          <M>{"g : X \\to [-c/3, c/3]"}</M> equal to <M>{"c/3"}</M> on <M>{"P"}</M> and <M>{"-c/3"}</M> on <M>{"N"}</M>, and then{" "}
          <M>{"|f - g| \\leq 2c/3"}</M> on <M>{"A"}</M>. Apply this to <M>{"f"}</M> with <M>{"c = 1"}</M>, then to the error{" "}
          <M>{"f - g_1"}</M> with <M>{"c = 2/3"}</M>, and so on. The series <M>{"\\sum g_k"}</M> has{" "}
          <M>{"|g_k| \\leq \\tfrac{1}{3}(2/3)^{k-1}"}</M>, so it converges uniformly to a continuous <M>{"F"}</M> with values in{" "}
          <M>{"[-1, 1]"}</M>, and on <M>{"A"}</M> the error tends to 0, so <M>{"F = f"}</M> there.
        </p>
      </Proof>

      <Example title="unbounded functions">
        <p>
          For <M>{"f : A \\to \\mathbb{R}"}</M>, compose with a homeomorphism <M>{"\\mathbb{R} \\to (-1, 1)"}</M>, extend to{" "}
          <M>{"F : X \\to [-1, 1]"}</M>, and remove the points where <M>{"|F| = 1"}</M>: they form a closed set{" "}
          <M>{"C"}</M> disjoint from <M>{"A"}</M>. Multiply <M>{"F"}</M> by a Urysohn function that is 1 on <M>{"A"}</M> and 0 on{" "}
          <M>{"C"}</M>, and transform back.
        </p>
      </Example>

      <Remark title="extensions and retractions">
        <p>
          Tietze applies coordinate by coordinate, so maps into <M>{"[0, 1]^n"}</M> or <M>{"\\mathbb{R}^n"}</M> extend too. Maps
          into a circle need not: the identity on the boundary circle of a disc does not extend to a map from the disc to the
          circle. Proving this needs the fundamental group, and it is the heart of Brouwer&rsquo;s fixed point theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does the Tietze extension theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "A continuous real function on a closed subset of a normal space extends continuously to the whole space.",
          "Every function on a subset extends.",
          "Continuous functions on open sets extend.",
          "Every normal space is metrisable.",
        ],
        correct: [0],
      },
    },
    {
      key: "closed",
      rung: "check",
      prompt: <p>Why does <M>{"\\sin(1/x)"}</M> on <M>{"(0, 1]"}</M> not contradict Tietze&rsquo;s theorem?</p>,
      answer: {
        kind: "choice",
        options: ["(0, 1] is not closed in [0, 1]", "sin(1/x) is not continuous", "[0, 1] is not normal", "sin(1/x) is unbounded"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, by what factor does the error bound shrink at each step? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.6667, tolerance: 0.01 },
    },
    {
      key: "step",
      rung: "apply",
      prompt: <p>In the key step with <M>{"c = 1"}</M>, at a point of <M>{"A"}</M> where <M>{"f = 1"}</M>, what is the new error <M>{"f - g"}</M>?</p>,
      answer: { kind: "numeric", value: 0.6667, tolerance: 0.01 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>Which map does not extend from the boundary circle to the closed disc?</p>,
      answer: {
        kind: "choice",
        options: ["The identity map from the circle to the circle", "The inclusion of the circle into the plane", "A constant map to the circle", "Any map into the interval [0, 1]"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the key step: if <M>{"|f| \\leq c"}</M> on closed <M>{"A"}</M>, there is a continuous <M>{"g"}</M> on <M>{"X"}</M> with <M>{"|g| \\leq c/3"}</M> and <M>{"|f - g| \\leq 2c/3"}</M> on <M>{"A"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines the disjoint closed sets where f ≥ c/3 and where f ≤ −c/3.",
          "Uses Urysohn to get g equal to c/3 on the first, −c/3 on the second, with values in [−c/3, c/3].",
          "Checks the error bound 2c/3 on each part of A.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why Tietze for maps to ℝ implies Tietze for maps to <M>{"\\mathbb{R}^n"}</M>, and why the same idea fails for maps to a circle.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Extends each coordinate function separately and combines them.",
          "Notes a circle is not a product of intervals, and extended coordinates may leave the circle.",
          "Mentions an example such as the identity on the boundary of a disc. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Tietze extension theorem, the step of approximating f within two thirds of its bound by a Urysohn function, how the corrections add up to an extension, and why maps into a circle need not extend.",

  glimpse: (
    <p>
      Next, homotopy studies continuous deformations of maps, starting the move from point-set to algebraic topology. The
      Hahn-Banach theorem is an extension theorem of a different kind, for linear functionals.
    </p>
  ),
};
