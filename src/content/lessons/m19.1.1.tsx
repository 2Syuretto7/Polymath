import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FloatGridViz } from "@/components/viz/FloatGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.1.1",
  minutes: 90,
  links: {
    revisits: ["m0.1.4", "m2.1.3", "m2.9.2"],
    foreshadows: ["m19.1.2", "m19.4.1", "m19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Ask almost any computer to add 0.1 and 0.2, and it reports 0.30000000000000004. It has not malfunctioned: it is
        doing exactly what it was designed to do. What was it designed to do, and how can anything trustworthy be computed
        on such a machine?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the precision and the number being stored. Watch the spacing of the ticks and the relative error.</p>
      <FloatGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="floating-point numbers">
        <p>
          A binary floating-point system with precision p stores numbers of the form{" "}
          <M>{"\\pm\\, m \\times 2^e"}</M>, where the significand <M>{"m = 1.d_1d_2\\dots d_{p-1}"}</M> has p binary digits and
          the exponent e lies in a fixed range. The IEEE 754 double format, used by almost every computer since 1985, has p =
          53 and exponents from −1022 to 1023, with special values for zero, infinities and NaN (not a number).
        </p>
      </Definition>

      <Theorem title="relative rounding error">
        <p>
          If x lies within the range of the system and fl(x) is the nearest floating-point number, then
        </p>
        <MD>{"\\mathrm{fl}(x) = x(1 + \\delta), \\qquad |\\delta| \\le u = 2^{-p}."}</MD>
        <p>
          The <strong>unit roundoff</strong> u is about <M>{"1.1 \\times 10^{-16}"}</M> in double precision. The IEEE standard
          also requires each arithmetic operation to be correctly rounded:{" "}
          <M>{"\\mathrm{fl}(a \\circ b) = (a \\circ b)(1 + \\delta)"}</M> with <M>{"|\\delta| \\le u"}</M>.
        </p>
      </Theorem>

      <Example title="0.1 is not a floating-point number">
        <p>
          In binary, 1/10 = 0.000110011001100…, repeating forever, so it must be rounded, as must 0.2. Their rounded sum, after
          one more rounding, differs from the rounded value of 0.3 in the last bit, which prints as 0.30000000000000004. The
          error is about <M>{"5.6 \\times 10^{-17}"}</M>, within the guarantee.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          Floating-point addition is not associative: summing a long series from the smallest term up is usually more
          accurate than from the largest. Comparing floating-point numbers for exact equality is rarely wise. And because only
          the relative error is controlled, trouble comes when a computation magnifies relative errors, which is the subject of
          the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "u",
      rung: "check",
      prompt: <p>What does the unit roundoff u bound?</p>,
      answer: {
        kind: "choice",
        options: [
          "The relative error of rounding a number in range to the nearest floating-point number.",
          "The absolute error of every computation.",
          "The largest representable number.",
          "The number of digits printed.",
        ],
        correct: [0],
      },
    },
    {
      key: "spacing",
      rung: "check",
      prompt: <p>How does the gap between consecutive floating-point numbers change from one power of two to the next?</p>,
      answer: { kind: "choice", options: ["It doubles", "It stays the same", "It halves", "It is random"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with p = 3, store x = 5.3. What is the relative error? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0566, tolerance: 0.0002 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>In a binary system with precision p = 5, how many floating-point numbers lie in [1, 2)?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "assoc",
      rung: "apply",
      prompt: <p>In double precision, (10¹⁶ + 1) − 10¹⁶ evaluates to 0, while (10¹⁶ − 10¹⁶) + 1 gives 1. What does this show?</p>,
      answer: {
        kind: "choice",
        options: ["Floating-point addition is not associative", "The computer is faulty", "1 is not representable", "Subtraction is never exact"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if 1 ≤ x &lt; 2 and fl(x) is the nearest number with p binary digits, then |fl(x) − x|/x ≤ 2⁻ᵖ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in [1, 2) the floating-point numbers are spaced 2¹⁻ᵖ apart.",
          "Concludes that rounding to the nearest gives |fl(x) − x| ≤ half the spacing, 2⁻ᵖ.",
          "Divides by x ≥ 1 to get the relative bound 2⁻ᵖ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is it usually more accurate to add the terms of a long series of decreasing positive terms from the smallest to the largest?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that adding a small number to a large running sum loses the small number’s low-order digits, since the error is relative to the sum.",
          "Explains that summing the small terms first lets them accumulate to a size where they are not lost.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, conditioning and stability: how sensitive a problem is to small changes in its data, and whether an algorithm
      adds more error than the problem deserves.
    </p>
  ),
};
