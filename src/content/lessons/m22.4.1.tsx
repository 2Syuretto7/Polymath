import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { HahnSplitViz } from "@/components/viz/HahnSplitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.4.1",
  minutes: 85,
  links: {
    revisits: ["m22.1.2", "m22.2.2", "m22.2.3"],
    foreshadows: ["m22.4.2", "m22.4.4", "m22.5.3"],
  },

  puzzle: (
    <>
      <p>
        A rod carries electric charge, positive in some places and negative in others. The total charge on any piece is a
        number of either sign, and charges on disjoint pieces add. Can the rod always be cut into a part where every piece
        has charge at least 0, and a part where every piece has charge at most 0?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Split [0, 1] by the sign of a density.</p>
      <HahnSplitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="signed measures">
        <p>
          A <strong>signed measure</strong> on <M>{"(X, \\mathcal{A})"}</M> is a map{" "}
          <M>{"\\nu : \\mathcal{A} \\to [-\\infty, \\infty]"}</M> with <M>{"\\nu(\\varnothing) = 0"}</M>, taking at most one of
          the values <M>{"\\pm\\infty"}</M>, and countably additive. A set <M>P</M> is <strong>positive</strong> if{" "}
          <M>{"\\nu(A) \\ge 0"}</M> for every measurable <M>{"A \\subseteq P"}</M>; negative and null sets are defined alike.
        </p>
      </Definition>

      <Theorem title="Hahn decomposition">
        <p>
          For any signed measure <M>{"\\nu"}</M> there is a positive set <M>P</M> and a negative set <M>N</M> with{" "}
          <M>{"X = P \\cup N"}</M> and <M>{"P \\cap N = \\varnothing"}</M>. It is unique up to null sets.
        </p>
      </Theorem>

      <Theorem title="Jordan decomposition">
        <p>Setting <M>{"\\nu^+(A) = \\nu(A \\cap P)"}</M> and <M>{"\\nu^-(A) = -\\nu(A \\cap N)"}</M> gives measures with</p>
        <MD>{"\\nu = \\nu^+ - \\nu^-, \\qquad \\nu^+ \\perp \\nu^-,"}</MD>
        <p>
          where <M>{"\\perp"}</M>, <strong>mutually singular</strong>, means they live on disjoint sets. This decomposition is
          unique. The <strong>total variation</strong> is <M>{"|\\nu| = \\nu^+ + \\nu^-"}</M>.
        </p>
      </Theorem>

      <Example title="densities">
        <p>
          If <M>f</M> is integrable and <M>{"\\nu(A) = \\int_A f \\, d\\mu"}</M>, then <M>{"P = \\{f \\ge 0\\}"}</M> and{" "}
          <M>{"N = \\{f < 0\\}"}</M> form a Hahn decomposition, <M>{"\\nu^\\pm(A) = \\int_A f^\\pm \\, d\\mu"}</M>, and{" "}
          <M>{"|\\nu|(A) = \\int_A |f| \\, d\\mu"}</M>. The visualisation computes these for three densities.
        </p>
      </Example>

      <Remark title="the subtle step">
        <p>
          A set with <M>{"\\nu(A) > 0"}</M> need not be positive: it may contain negative pieces. The key lemma of the proof
          says it always contains a positive subset of positive measure, found by repeatedly removing the most negative pieces.
          The positive set <M>P</M> is then chosen to make <M>{"\\nu(P)"}</M> as large as possible.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Why may a signed measure take at most one of the values +∞ and −∞?</p>,
      answer: { kind: "choice", options: ["Otherwise additivity could require ∞ − ∞, which is undefined", "Because measures are finite", "Because of the Hahn decomposition", "No reason; it is a convention"], correct: [0] },
    },
    {
      key: "pos",
      rung: "check",
      prompt: <p>What is a positive set for ν?</p>,
      answer: { kind: "choice", options: ["A set every measurable subset of which has ν ≥ 0", "A set with ν > 0", "A set where the density is defined", "A set of positive Lebesgue measure"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>For f(x) = x − 1/3 on [0, 1], compute ν⁺([0, 1]), as in the visualisation.</p>,
      answer: { kind: "numeric", value: 0.2222, tolerance: 0.001 },
    },
    {
      key: "P",
      rung: "apply",
      prompt: <p>For the same f, which set is a positive set in a Hahn decomposition?</p>,
      answer: { kind: "choice", options: ["[1/3, 1]", "[0, 1/3)", "[0, 1]", "{1/3}"], correct: [0] },
    },
    {
      key: "tv",
      rung: "apply",
      prompt: <p>For the same f, compute the total variation |ν|([0, 1]).</p>,
      answer: { kind: "numeric", value: 0.2778, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Given a Hahn decomposition P, N, prove that ν⁺(A) = ν(A ∩ P) and ν⁻(A) = −ν(A ∩ N) are measures with ν = ν⁺ − ν⁻.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ν⁺ and ν⁻ are non-negative because P is positive and N is negative, and countably additive because ν is.",
          "Writes A as the disjoint union of A ∩ P and A ∩ N, so ν(A) = ν⁺(A) − ν⁻(A).",
          "Optionally observes they are mutually singular, living on P and N.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show by example that the Hahn decomposition is not unique, and explain in what sense it is unique.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Moves a ν-null set from P to N, for example a point, or a set where the density is 0.",
          "States that any two Hahn decompositions differ by a set that is null for ν.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every signed measure given by a density vanishes on μ-null sets. Is the converse true: is every measure that vanishes
        on μ-null sets given by a density?
      </p>
      <p>
        Next, the Radon-Nikodym theorem: absolute continuity, the derivative dν/dμ, the Lebesgue decomposition into
        absolutely continuous and singular parts, and why probability theory rests on it.
      </p>
    </>
  ),
};
