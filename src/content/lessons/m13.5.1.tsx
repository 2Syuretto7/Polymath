import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ArgumentCountViz } from "@/components/viz/ArgumentCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.5.1",
  minutes: 90,
  links: {
    revisits: ["m13.4.3", "m13.3.2", "m13.2.1"],
    foreshadows: ["m13.5.2", "m13.5.3", "m13.7.3"],
  },

  puzzle: (
    <>
      <p>
        Finding the zeros of a function exactly is usually impossible. Counting how many lie inside a region sounds just as
        hard. Yet a walk round the boundary, watching only which way <M>{"f"}</M> points, is enough to count them. Why?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move and resize the circle, and watch how far the argument of f turns as you go round.</p>
      <ArgumentCountViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the argument principle">
        <p>
          Let <M>{"f"}</M> be meromorphic on an open set containing a simple closed curve <M>{"\\gamma"}</M> and its inside,
          with no zeros or poles on <M>{"\\gamma"}</M>. Then
        </p>
        <MD>{"\\frac{1}{2\\pi i}\\oint_\\gamma \\frac{f'(z)}{f(z)} \\, dz = Z - P,"}</MD>
        <p>
          where <M>{"Z"}</M> and <M>{"P"}</M> are the numbers of zeros and poles inside <M>{"\\gamma"}</M>, counted with
          multiplicity.
        </p>
      </Theorem>

      <Proof>
        <p>
          Near a zero of order <M>{"m"}</M>, <M>{"f = (z - a)^m g"}</M> with <M>{"g(a) \\ne 0"}</M>, so{" "}
          <M>{"\\frac{f'}{f} = \\frac{m}{z - a} + \\frac{g'}{g}"}</M>, and the residue of <M>{"f'/f"}</M> at <M>{"a"}</M> is{" "}
          <M>{"m"}</M>. Near a pole of order <M>{"m"}</M> the same computation with <M>{"-m"}</M> gives residue{" "}
          <M>{"-m"}</M>. Elsewhere <M>{"f'/f"}</M> is holomorphic. The residue theorem finishes the proof.
        </p>
      </Proof>

      <Remark title="why it is called the argument principle">
        <p>
          Substituting <M>{"w = f(z)"}</M>, <M>{"\\oint_\\gamma \\frac{f'}{f} dz = \\oint_{f\\circ\\gamma} \\frac{dw}{w}"}</M>,
          which is <M>{"2\\pi i"}</M> times the number of times the curve <M>{"f \\circ \\gamma"}</M> winds round 0. Since{" "}
          <M>{"\\log f"}</M> has derivative <M>{"f'/f"}</M>, the integral measures the total change in{" "}
          <M>{"\\arg f"}</M>: each zero inside contributes one full turn, each pole minus one.
        </p>
      </Remark>

      <Example title="a count">
        <p>
          For <M>{"f(z) = \\frac{z^2 + 1}{z}"}</M> round <M>{"|z| = 2"}</M>, there are zeros at <M>{"\\pm i"}</M> and a pole
          at 0, so the argument of <M>{"f"}</M> turns once in total, and{" "}
          <M>{"\\frac{1}{2\\pi i}\\oint f'/f = 2 - 1 = 1"}</M>.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>Compute <M>{"\\frac{1}{2\\pi i}\\oint_{|z|=2} \\frac{f'}{f} dz"}</M> for <M>{"f(z) = \\frac{z^3(z - 1)}{z - 3}"}</M>.</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "res",
      rung: "check",
      prompt: <p>What is the residue of <M>{"f'/f"}</M> at a zero of <M>{"f"}</M> of order 3?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>Compute <M>{"\\frac{1}{2\\pi i}\\oint_{|z|=1} \\frac{f'}{f} dz"}</M> for <M>{"f(z) = \\frac{(z - 0.5)^2}{(z + 0.5)^3}"}</M>.</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>How many zeros does <M>{"e^z - 1"}</M> have inside <M>{"|z| = 7"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "wind",
      rung: "apply",
      prompt: <p>How many times does the image of <M>{"|z| = 2"}</M> under <M>{"f(z) = (z^2 + 1)/z"}</M> wind round 0?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove the argument principle using the residue theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f = (z − a)^m g near a zero or pole, with g(a) ≠ 0 and m positive or negative.",
          "Computes f′/f = m/(z − a) + g′/g, so the residue is m.",
          "Sums the residues with the residue theorem to get Z − P.",
        ],
      },
    },
    {
      key: "sum",
      rung: "stretch",
      prompt: <p>Show that <M>{"\\frac{1}{2\\pi i}\\oint_\\gamma z \\frac{f'(z)}{f(z)} dz"}</M> equals the sum of the zeros minus the sum of the poles inside <M>{"\\gamma"}</M>, counted with multiplicity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the residue of z f′/f at a zero or pole a of order m as m·a.",
          "Applies the residue theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the argument principle, why the residue of f′/f at a zero or pole is its order, and why the integral counts how many times f winds round 0 along the curve.",

  glimpse: (
    <p>
      The next lesson turns the argument principle into Rouché&rsquo;s theorem, a practical way to count zeros. The open
      mapping theorem follows, and the outline of the prime number theorem uses the same idea for the zeta function.
    </p>
  ),
};
