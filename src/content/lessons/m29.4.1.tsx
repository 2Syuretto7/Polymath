import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PadicDigitsViz } from "@/components/viz/PadicDigitsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.4.1",
  minutes: 90,
  links: {
    revisits: ["m29.3.3", "m11.2.1", "m11.2.2"],
    foreshadows: ["m29.4.2", "m29.4.3", "m29.5.3"],
  },

  puzzle: (
    <>
      <p>
        The series 1 + 2 + 4 + 8 + ⋯ diverges, yet formally it sums to 1/(1 − 2) = −1. Is there a sense of
        &lsquo;close&rsquo; in which the partial sums 1, 3, 7, 15, 31, … really do approach −1?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prime and a rational number, and read off its p-adic digits.</p>
      <PadicDigitsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the p-adic absolute value">
        <p>
          For a non-zero rational x, write <M>{"x = p^v a/b"}</M> with p dividing neither a nor b, and set{" "}
          <M>{"|x|_p = p^{-v}"}</M>, with <M>{"|0|_p = 0"}</M>. It is multiplicative and satisfies the{" "}
          <strong>ultrametric inequality</strong> <M>{"|x + y|_p \\le \\max(|x|_p, |y|_p)"}</M>. Numbers divisible by a high
          power of p are p-adically small.
        </p>
      </Definition>

      <Definition title="the p-adic numbers">
        <p>
          <M>{"\\mathbb{Q}_p"}</M> is the completion of ℚ for <M>{"|\\cdot|_p"}</M>, just as ℝ is the completion for the
          usual absolute value. Its elements are series <M>{"\\sum_{n \\ge -k} a_n p^n"}</M> with digits{" "}
          <M>{"0 \\le a_n < p"}</M>, which always converge. The <strong>p-adic integers</strong>{" "}
          <M>{"\\mathbb{Z}_p = \\{x : |x|_p \\le 1\\}"}</M> are those with no negative powers.
        </p>
      </Definition>

      <Theorem title="ℤₚ as an inverse limit">
        <p>
          <M>{"\\mathbb{Z}_p \\cong \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}"}</M>: a p-adic integer is a compatible sequence of
          residues modulo p, p², p³, …. It is a compact local ring with unique maximal ideal <M>{"p\\mathbb{Z}_p"}</M> and
          residue field <M>{"\\mathbb{F}_p"}</M>; its units are the elements with first digit non-zero.
        </p>
      </Theorem>

      <Example title="strange convergence">
        <p>
          In <M>{"\\mathbb{Q}_2"}</M>, <M>{"|2^n|_2 = 2^{-n} \\to 0"}</M>, so 1 + 2 + 4 + ⋯ converges, to 1/(1 − 2) = −1. In{" "}
          <M>{"\\mathbb{Q}_5"}</M>, 1/3 = 2 + 3·5 + 1·5² + 3·5³ + ⋯, a repeating expansion, as for every rational number. A
          series converges p-adically exactly when its terms tend to 0.
        </p>
      </Example>

      <Remark title="ultrametric geometry">
        <p>
          In an ultrametric space every triangle is isosceles with the two longest sides equal, every point of a ball is
          its centre, and two balls are either nested or disjoint. ℤₚ is a tree of residue classes: p branches at each
          level, one for each next digit.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "abs",
      rung: "check",
      prompt: <p>What is |p to the 3|ₚ?</p>,
      answer: { kind: "choice", options: ["p to the −3", "p³", "1", "0"], correct: [0] },
    },
    {
      key: "ultra",
      rung: "check",
      prompt: <p>Which inequality does the p-adic absolute value satisfy?</p>,
      answer: { kind: "choice", options: ["|x + y|ₚ ≤ max(|x|ₚ, |y|ₚ)", "|x + y|ₚ ≥ |x|ₚ + |y|ₚ", "|xy|ₚ ≤ |x|ₚ", "|x|ₚ ≥ 1 always"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose p = 5 and 1/3. What is the first digit, the coefficient of 5 to the 0?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "val",
      rung: "apply",
      prompt: <p>What is |18|₃?</p>,
      answer: { kind: "choice", options: ["1/9", "9", "1/3", "18"], correct: [0] },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>What does 2 + 2·3 + 2·9 + 2·27 + ⋯ converge to in ℚ₃?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the ultrametric inequality for the p-adic absolute value on the integers.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes x = p to the a times m and y = p to the b times n, with p dividing neither m nor n, and a ≤ b.",
          "Notes x + y = p to the a times (m + p to the b − a times n), so p to the a divides x + y.",
          "Concludes |x + y|ₚ ≤ p to the −a = max(|x|ₚ, |y|ₚ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is every triangle isosceles in an ultrametric space?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes |x|ₚ < |y|ₚ for two sides and shows |x + y|ₚ = |y|ₚ.",
          "Uses the ultrametric inequality both ways, writing y = (x + y) − x.",
          "Concludes the two longest sides are equal. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        ℚ has the usual absolute value and one p-adic absolute value for each prime. Are there any others? Ostrowski showed
        there are not, and the same idea builds completions of every number field.
      </p>
      <p>Next, valuations and completions.</p>
    </>
  ),
};
